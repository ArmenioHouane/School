// app/api/quizzes/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb'; // Certifique-se de ajustar o caminho corretamente
import { ObjectId } from 'mongodb';

type Option = {
  id: number;
  text: string;
};

type Quiz = {
  id: number;
  question: string;
  options: Option[];
};

export async function GET() {
  const client = await clientPromise;
  const db = client.db('nome_do_seu_banco'); // Substitua pelo nome do seu banco

  try {
    const quizzes: Quiz[] = await db.collection('quizzes').find({}).toArray();
    return NextResponse.json(quizzes);
  } catch (err) {
    return NextResponse.json({ message: 'Erro ao carregar quizzes' }, { status: 500 });
  }
}
