import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';

const dbPath = path.join(process.cwd(), 'database.json');

const readDatabase = () => {
  const dbJson = fs.readFileSync(dbPath, 'utf8');

  return JSON.parse(dbJson);
};

const writeDatabase = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// GET запрос для получения заметки по noteId
export async function GET(req: Request, { params }: { params: { noteId: string } }) {
  try {
    const obj = readDatabase();

    const noteId = parseInt(params.noteId, 10);
    const note = obj.notes.find((n: { id: number }) => n.id === noteId);

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read the database file' }, { status: 500 });
  }
}

// PUT запрос для обновления заметки по noteId
export async function PUT(req: Request, { params }: { params: { noteId: string } }) {
  try {
    const obj = readDatabase();
    const noteId = parseInt(params.noteId, 10);

    // Проверяем существование заметки
    const noteIndex = obj.notes.findIndex((n: { id: number }) => n.id === noteId);

    if (noteIndex === -1) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    const updatedData = await req.json();

    // Обновляем поля заметки
    obj.notes[noteIndex] = {
      ...obj.notes[noteIndex],
      ...updatedData,
      updatedAt: new Date().toISOString(),
    };

    writeDatabase(obj);

    return NextResponse.json(obj.notes[noteIndex]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update the note' }, { status: 500 });
  }
}

// DELETE запрос для удаления заметки по noteId
export async function DELETE(req: Request, { params }: { params: { noteId: string } }) {
  try {
    const obj = readDatabase();
    const noteId = parseInt(params.noteId, 10);

    // Проверяем существование заметки
    const noteIndex = obj.notes.findIndex((n: { id: number }) => n.id === noteId);

    if (noteIndex === -1) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    // Удаляем заметку
    obj.notes.splice(noteIndex, 1);
    writeDatabase(obj);

    return NextResponse.redirect(origin + '/notes');
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete the note' }, { status: 500 });
  }
}
