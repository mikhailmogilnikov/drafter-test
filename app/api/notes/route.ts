import path from 'path';

import { NextResponse } from 'next/server';

import { INote } from '@/src/entities/note';

const fs = require('node:fs');

export const dynamic = 'force-dynamic';

export interface IDb {
  notes: INote;
}

export async function GET() {
  try {
    const dbJson = fs.readFileSync(path.join(process.cwd(), 'database.json'), 'utf8');
    const obj: IDb = JSON.parse(dbJson);

    return NextResponse.json(obj.notes);
  } catch {
    return NextResponse.json({ error: 'Failed to read the database file' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { origin } = new URL(request.url);

  // Чтение данных формы
  const data = await request.formData();
  const name = data.get('name')?.toString();
  const description = data.get('description')?.toString();

  // if (!name || !description) {
  //   return new Response('Название и описание обязательны', { status: 400 });
  // }

  // Чтение текущего содержимого файла database.json
  const dbPath = path.join(process.cwd(), 'database.json');
  const dbJson = fs.readFileSync(dbPath, 'utf8');
  const obj = JSON.parse(dbJson);

  // Генерация нового уникального ID
  const lastNote = obj.notes.reduce((max: INote, note: INote) => (note.id > max.id ? note : max), {
    id: 0,
  });
  const newId = lastNote.id + 1;

  const currentDate = new Date().toISOString();

  // Создание новой заметки
  const newNote = {
    id: newId,
    name,
    description,
    createdAt: currentDate,
    updatedAt: currentDate,
  };

  // Добавление новой заметки в массив
  obj.notes.push(newNote);

  // Запись обновленного содержимого обратно в database.json
  fs.writeFileSync(dbPath, JSON.stringify(obj, null, 2));

  return NextResponse.redirect(origin + '/notes');
}
