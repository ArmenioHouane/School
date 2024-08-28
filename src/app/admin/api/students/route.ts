// app/(admin)/api/students/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';



export async function GET() {
  const client = await clientPromise;
  const db = client.db('Estudantes'); // Replace with your database name
  const studentsData = await db.collection('students').find({}).toArray();
  return NextResponse.json(studentsData);
}

export async function POST(request: Request) {
  const newStudent: Student = await request.json();
  const client = await clientPromise;
  const db = client.db('Estudantes'); // Replace with your database name
  const result = await db.collection('students').insertOne(newStudent);
  newStudent._id = result.insertedId.toString(); // Add the generated ID to the student object
  return NextResponse.json(newStudent, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json(); // Ensure the body is parsed
  const client = await clientPromise;
  const db = client.db('Estudantes'); // Replace with your database name
  await db.collection('students').deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({}, { status: 204 });
}

export async function PUT(request: Request) {
  const updatedStudent: Student = await request.json();
  const client = await clientPromise;
  const db = client.db('Estudantes'); // Replace with your database name
  await db.collection('students').updateOne(
    { _id: new ObjectId(updatedStudent._id) },
    { $set: updatedStudent }
  );
  return NextResponse.json(updatedStudent);
}
