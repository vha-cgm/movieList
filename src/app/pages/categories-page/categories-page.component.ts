// src/app/pages/categories-page/categories-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService, Category } from '../../category.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent {
  categories$: Observable<Category[]>;
  newCategoryName = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categories$ = this.categoryService.getCategories();
  }

  addCategory() {
    const name = this.newCategoryName.trim();
    if (!name) return;
    this.categoryService.addCategory(name);
    this.newCategoryName = '';
  }

  deleteCategory(id?: string) {
    if (!id || !confirm('Really delete this category?')) return;
    this.categoryService.deleteCategory(id);
  }

  openCategory(id: string) {
    this.router.navigate(['categories', id, 'items']);
  }

  formatDate(timestamp: any): string {
    if (!timestamp) return '';
    if (timestamp.toDate) {
      return timestamp.toDate().toDateString();
    }
    if (timestamp instanceof Date) {
      return timestamp.toDateString();
    }
    return '';
  }

   goToMenu(){
    this.router.navigate(['menu'], { replaceUrl: true });
  }
}
