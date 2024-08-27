'use client';

import { useEffect, useState } from 'react';
import Table from '@/app/(admin)/components/table';
import { FixedPlugin } from '@/app/components/fixed-plugin';
import { Student } from '@/app/models/student';

const GradesPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    _id: '', // Ensure this field exists if you're using it
    nome: '',
    numeroEstudante: '',
    curso: '',
    turma: '',
    estado: '',
    numero: '',
    idBi: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const columns = [
    'nome', 'numeroEstudante', 'curso', 'turma', 'estado', 'numero', 'idBi', 'email'
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/api/students');
      if (!response.ok) {
        console.error('Failed to fetch students');
        return;
      }
      const data = await response.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleCreate = async () => {
    const response = await fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });
    
    if (!response.ok) {
      console.error('Failed to create student');
      return; 
    }
    
    const createdStudent = await response.json();
    setStudents([...students, createdStudent]);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/students`, { // Adjusted to use the correct endpoint
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }), // Sending the ID in the request body
    });
    
    if (!response.ok) {
      console.error('Failed to delete student');
      return; 
    }
    
    setStudents(students.filter((student) => student._id !== id));
  };

  const handleEdit = (student: Student) => {
    setNewStudent(student);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    const response = await fetch(`/api/students`, { // Adjusted to use the correct endpoint
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });
    
    if (!response.ok) {
      console.error('Failed to update student');
      return; 
    }

    setStudents(
      students.map((student) =>
        student._id === newStudent._id ? newStudent : student
      )
    );
    resetForm();
  };

  const resetForm = () => {
    setNewStudent({
      _id: '', // Reset ID if necessary
      nome: '',
      numeroEstudante: '',
      curso: '',
      turma: '',
      estado: '',
      numero: '',
      idBi: '',
      email: '',
    });
    setIsEditing(false);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Student Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.nome}
          onChange={(e) => setNewStudent({ ...newStudent, nome: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="Student Number"
          value={newStudent.numeroEstudante}
          onChange={(e) => setNewStudent({ ...newStudent, numeroEstudante: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="Course"
          value={newStudent.curso}
          onChange={(e) => setNewStudent({ ...newStudent, curso: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="Class"
          value={newStudent.turma}
          onChange={(e) => setNewStudent({ ...newStudent, turma: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="State"
          value={newStudent.estado}
          onChange={(e) => setNewStudent({ ...newStudent, estado: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newStudent.numero}
          onChange={(e) => setNewStudent({ ...newStudent, numero: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="ID/BI"
          value={newStudent.idBi}
          onChange={(e) => setNewStudent({ ...newStudent, idBi: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          className="border p-2 mb-2 mr-2"
        />

        <button
          onClick={isEditing ? handleUpdate : handleCreate}
          className="bg-blue-500 text-white p-2"
        >
          {isEditing ? 'Update Student' : 'Add Student'}
        </button>
      </div>

      <Table columns={columns} data={students} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
};

export default GradesPage;
