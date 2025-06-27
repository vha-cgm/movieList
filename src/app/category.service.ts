// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Category {
  id?: string;
  name: string;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private firestore: Firestore) {}

  getCategories(): Observable<Category[]> {
    const ref = collection(this.firestore, 'categories');
    return collectionData(ref, { idField: 'id' }) as Observable<Category[]>;
  }

  addCategory(name: string) {
    const ref = collection(this.firestore, 'categories');
    return addDoc(ref, { name, createdAt: new Date() });
  }

  deleteCategory(id: string) {
    const ref = doc(this.firestore, 'categories', id);
    return deleteDoc(ref);
  }
}
