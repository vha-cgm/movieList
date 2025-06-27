// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  id?: string;
  content: string;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor(private firestore: Firestore) {}

  /**
   * Gibt alle Items der angegebenen Kategorie zurück.
   */
  getItems(categoryId: string): Observable<Item[]> {
    const itemsRef = collection(
      this.firestore,
      `categories/${categoryId}/items`
    );
    return collectionData(itemsRef, { idField: 'id' }) as Observable<Item[]>;
  }

  /**
   * Legt ein neues Item in der angegebenen Kategorie an.
   */
  addItem(categoryId: string, content: string): Promise<void> {
    const itemsRef = collection(
      this.firestore,
      `categories/${categoryId}/items`
    );
    // Firestore speichert createdAt als Timestamp; wir übergeben ein JS Date
    return addDoc(itemsRef, {
      content,
      createdAt: new Date()
    }).then(() => {});
  }

  /**
   * Löscht ein Item in der angegebenen Kategorie.
   */
  deleteItem(categoryId: string, itemId: string): Promise<void> {
    const itemDoc = doc(
      this.firestore,
      `categories/${categoryId}/items/${itemId}`
    );
    return deleteDoc(itemDoc);
  }

  /**
   * Aktualisiert den Inhalt eines Items.
   */
  updateItem(
    categoryId: string,
    itemId: string,
    newContent: string
  ): Promise<void> {
    const itemDoc = doc(
      this.firestore,
      `categories/${categoryId}/items/${itemId}`
    );
    return updateDoc(itemDoc, { content: newContent });
  }
}
