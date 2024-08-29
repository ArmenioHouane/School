// app/admin/api/quiz/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

// Definindo a interface para o Quiz
interface Quiz {
  id?: string; // opcional para o ID gerado pelo MongoDB
  topic: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db('Quiz'); // Substitua pelo nome do seu banco de dados
  const quizzesData = await db.collection('quiz').find({}).toArray();
  return NextResponse.json(quizzesData);
}

export async function POST(request: Request) {
  const newQuiz: Quiz = await request.json();
  const client = await clientPromise;
  const db = client.db('Quiz'); // Substitua pelo nome do seu banco de dados
  const result = await db.collection('quiz').insertOne(newQuiz);
  newQuiz.id = result.insertedId.toString(); // Adiciona o ID gerado ao objeto quiz
  return NextResponse.json(newQuiz, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json(); // Certifique-se de que o corpo seja analisado
  const client = await clientPromise;
  const db = client.db('Quiz'); // Substitua pelo nome do seu banco de dados
  await db.collection('quiz').deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({}, { status: 204 });
}

export async function PUT(request: Request) {
  const updatedQuiz: Quiz = await request.json();
  const client = await clientPromise;
  const db = client.db('Quiz'); // Substitua pelo nome do seu banco de dados
  await db.collection('quiz').updateOne(
    { _id: new ObjectId(updatedQuiz.id) },
    { $set: updatedQuiz }
  );
  return NextResponse.json(updatedQuiz);
}
