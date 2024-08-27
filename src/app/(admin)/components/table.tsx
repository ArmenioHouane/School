// components/Table.tsx
import React from 'react';
import { Student } from '@/app/models/student';

interface TableProps {
  columns: string[];
  data: Student[];
  handleEdit: (student: Student) => void;
  handleDelete: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, handleEdit, handleDelete }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-4 py-2 text-left">{column}</th>
          ))}
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student) => (
          <tr key={student._id}>
            <td className="border px-4 py-2">{student.nome}</td>
            <td className="border px-4 py-2">{student.numeroEstudante}</td>
            <td className="border px-4 py-2">{student.curso}</td>
            <td className="border px-4 py-2">{student.turma}</td>
            <td className="border px-4 py-2">{student.estado}</td>
            <td className="border px-4 py-2">{student.numero}</td>
            <td className="border px-4 py-2">{student.idBi}</td>
            <td className="border px-4 py-2">{student.email}</td>
            <td className="border px-4 py-2">
              <button onClick={() => handleEdit(student)} className="mr-2 text-blue-500">Edit</button>
              <button onClick={() => handleDelete(student._id!)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
