import { Routes } from '@angular/router';
import { StartingPageComponent } from './pages/starting-page/starting-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryItemsPageComponent } from './category-items-page/category-items-page.component';


export const routes: Routes = [
    { 
      path: '', 
      component: StartingPageComponent,
    },
    { 
      path: 'menu', 
      component: MenuPageComponent,
    },
    { 
      path: 'notes', 
      component: NotesPageComponent,
    },
    {
      path: 'categories', 
      component: CategoriesPageComponent,
    },
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'categories/:id/items', component: CategoryItemsPageComponent },

]