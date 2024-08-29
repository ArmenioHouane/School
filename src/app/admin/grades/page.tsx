'use client';

import { useEffect, useState } from 'react';
import Table from '@/app/admin/components/table';
import { FixedPlugin } from '@/app/components/fixed-plugin';
import { Student } from '@/app/models/student';
import SuccessModal from '@/app/admin/components/successModal';
import ErrorModal from '@/app/admin/components/errorModal';

const GradesPage: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(''); // Estado para a mensagem do modal de sucesso
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para a mensagem do modal de erro
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    
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
  const [isIdBiValid, setIsIdBiValid] = useState<boolean>(true);

  const columns = ['nome', 'numeroEstudante', 'curso', 'turma', 'estado', 'numero', 'idBi', 'email'];

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/admin/api/students');
      if (!response.ok) {
        setErrorMessage('Failed to fetch students');
        setShowErrorModal(true); // Exibir modal de erro se a requisição falhar
        return;
      }
      const data = await response.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleCreate = async () => {
    const response = await fetch('/admin/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });

    if (!response.ok) {
      setErrorMessage('Failed to create student');
      setShowErrorModal(true); // Exibir modal de erro se a requisição falhar
      return;
    }

    const createdStudent = await response.json();
    setStudents([...students, createdStudent]);
    setModalMessage('Student successfully created!');
    setShowSuccessModal(true);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`/admin/api/students`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      setErrorMessage('Failed to delete student');
      setShowErrorModal(true); // Exibir modal de erro se a requisição falhar
      return;
    }

    setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
    setModalMessage('Student successfully deleted!');
    setShowSuccessModal(true);
  };

  const handleEdit = (student: Student) => {
    setNewStudent(student);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    const response = await fetch(`/admin/api/students`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });

    if (!response.ok) {
      setErrorMessage('Failed to update student');
      setShowErrorModal(true); // Exibir modal de erro se a requisição falhar
      return;
    }

    setStudents(
      students.map((student) =>
        student._id === newStudent._id ? newStudent : student
      )
    );
    setModalMessage('Student successfully updated!');
    setShowSuccessModal(true);
    resetForm();
  };

  const validateIdBi = (idBi: string): boolean => {
    const regex = /^\d{12}[A-Za-z]$/;
    const isValid = regex.test(idBi);
    setIsIdBiValid(isValid);
    return isValid;
  };

  const resetForm = () => {
    setNewStudent({
      _id: '',
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
    setErrorMessage(null);
    setIsIdBiValid(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Student Management</h1>

      <div className="mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.nome}
            onChange={(e) => setNewStudent({ ...newStudent, nome: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <input
            type="text"
            placeholder="Student Number"
            value={newStudent.numeroEstudante}
            onChange={(e) => setNewStudent({ ...newStudent, numeroEstudante: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <input
            type="text"
            placeholder="Course"
            value={newStudent.curso}
            onChange={(e) => setNewStudent({ ...newStudent, curso: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <input
            type="text"
            placeholder="Class"
            value={newStudent.turma}
            onChange={(e) => setNewStudent({ ...newStudent, turma: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <input
            type="text"
            placeholder="State"
            value={newStudent.estado}
            onChange={(e) => setNewStudent({ ...newStudent, estado: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={newStudent.numero}
            onChange={(e) => setNewStudent({ ...newStudent, numero: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <input
            type="text"
            placeholder="ID/BI"
            value={newStudent.idBi}
            onChange={(e) => setNewStudent({ ...newStudent, idBi: e.target.value })}
            onBlur={() => validateIdBi(newStudent.idBi)}
            className={`py-3 px-4 block w-full border-[2px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${
              isIdBiValid ? 'border-green-500' : 'border-red-500'
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="py-3 px-4 block w-full border-black border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="mt-4">
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              disabled={!isIdBiValid}
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleCreate}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              disabled={!isIdBiValid}
            >
              Create
            </button>
          )}
          {isEditing && (
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <Table
      
        columns={columns} 
        data={students} 
        handleEdit={handleEdit} // Ensure this is correctly passed
        handleDelete={handleDelete} 
      />

      <FixedPlugin />
     
     
    </>
  );
};

export default GradesPage;
