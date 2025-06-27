import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc, deleteDoc } from '@angular/fire/firestore';

export interface Note {
  id?: string;
  text: string;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class NotesService {
  constructor(private firestore: Firestore) {}

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }

  addNote(text: string) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, { text, createdAt: new Date() });
  }

  deleteNote(id: string) {
    const noteDocRef = doc(this.firestore, 'notes', id);
    return deleteDoc(noteDocRef);
  }

}
