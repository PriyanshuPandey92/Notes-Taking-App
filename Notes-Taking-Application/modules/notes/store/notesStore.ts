import { create } from "zustand";

type Note = {
  title: string;
  description: string;
  category: string;
};

interface NoteType {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (index: number) => void;
}

export const useNoteStore = create<NoteType>((set) => ({
  notes: [],
  addNote: (note: Note) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (index: number) =>
    set((state) => ({
      notes: state.notes.filter((_, i) => i !== index), 
    })),
}));
