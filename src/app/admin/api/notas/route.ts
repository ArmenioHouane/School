import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

type ProfessorNota = {
  id?: string;
  nome: string;
  disciplina: string;
  nota: number;
  data: string;
};

export async function GET() {
  const client = await clientPromise;
  const db = client.db('Notas'); // Substitua pelo nome do seu banco de dados
  const notasData = await db.collection('notas').find({}).toArray();
  return NextResponse.json(notasData);
}

export async function POST(request: Request) {
  const newNota: ProfessorNota = await request.json();
  const client = await clientPromise;
  const db = client.db('Notas'); // Substitua pelo nome do seu banco de dados
  const result = await db.collection('notas').insertOne(newNota);
  newNota.id = result.insertedId.toString(); // Adiciona o ID gerado ao objeto nota
  return NextResponse.json(newNota, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json(); // Certifique-se de que o corpo seja analisado
  const client = await clientPromise;
  const db = client.db('Notas'); // Substitua pelo nome do seu banco de dados
  await db.collection('notas').deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({}, { status: 204 });
}

export async function PUT(request: Request) {
  const updatedNota: ProfessorNota = await request.json();
  const client = await clientPromise;
  const db = client.db('Notas'); // Substitua pelo nome do seu banco de dados
  await db.collection('notas').updateOne(
    { _id: new ObjectId(updatedNota.id) },
    { $set: updatedNota }
  );
  return NextResponse.json(updatedNota);
}
