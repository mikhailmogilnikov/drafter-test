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

export async function POST(request: Request) {}
