import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService, Note } from '../../notes.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss'],
})
export class NotesPageComponent {
  notes$: Observable<Note[]>;
  newNoteText = '';
  private router = inject(Router);

  constructor(private notesService: NotesService) {
    this.notes$ = this.notesService.getNotes();
  }

  addNote() {
    if (!this.newNoteText.trim()) return;

    this.notesService.addNote(this.newNoteText.trim());
    this.newNoteText = '';
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

  deleteNote(id?: string) {
    if (!id) return;
    this.notesService.deleteNote(id).catch(console.error);
  }

  goToMenu(){
    this.router.navigate(['menu'], { replaceUrl: true });
  }

}
