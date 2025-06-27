import { ItemService, Item } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-items-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-items-page.component.html',
  styleUrls: ['./category-items-page.component.scss'],
})
export class CategoryItemsPageComponent implements OnInit {
  items$!: Observable<Item[]>;
  newItemText = '';
  categoryId!: string;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.items$ = this.itemService.getItems(this.categoryId);
  }

  addItem() {
    const txt = this.newItemText.trim();
    if (!txt) return;
    this.itemService.addItem(this.categoryId, txt);
    this.newItemText = '';
  }

  deleteItem(id?: string) {
    if (!id || !confirm('Really delete this item?')) return;
    this.itemService.deleteItem(this.categoryId, id);
  }

  back() {
    this.router.navigate(['/categories']);
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
}
