"use client";

import React, { useEffect, useState } from 'react';
import { ProfessorNota } from '@/app/models/ProfessorNota';

const Notas: React.FC = () => {
    const [notas, setNotas] = useState<ProfessorNota[]>([]);
    const [currentNota, setCurrentNota] = useState<ProfessorNota | null>(null);
    const [nome, setNome] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [nota, setNota] = useState<number | ''>('');

    const [modalMessage, setModalMessage] = useState('');
    const [isErrorModal, setIsErrorModal] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);

    useEffect(() => {
        fetchNotas();
    }, []);

    const fetchNotas = async () => {
        const response = await fetch('/admin/api/notas');
        const data = await response.json();
        setNotas(data);
    };

    const handleAddOrUpdate = async () => {
        const notaData: ProfessorNota = {
            id: currentNota?.id,  // Include id if it's an update
            nome,
            disciplina,
            nota: Number(nota),
        };

        try {
            if (currentNota) {
                await fetch(`/admin/api/notas`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(notaData),
                });
                setModalMessage('Nota atualizada com sucesso!');
            } else {
                await fetch(`/admin/api/notas`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(notaData),
                });
                setModalMessage('Nota adicionada com sucesso!');
            }

            setIsSuccessModal(true);
            resetForm();
            fetchNotas();
        } catch (error) {
            setModalMessage('Erro ao adicionar ou atualizar nota.');
            setIsErrorModal(true);
        }
    };

    const handleEdit = (nota: ProfessorNota) => {
        setCurrentNota(nota);
        setNome(nota.nome);
        setDisciplina(nota.disciplina);
        setNota(nota.nota);
    };

    const handleDelete = async (id: number) => {
        try {
            await fetch(`/admin/api/notas`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            setModalMessage('Nota deletada com sucesso!');
            setIsSuccessModal(true);
            fetchNotas();
        } catch (error) {
            setModalMessage('Erro ao deletar nota.');
            setIsErrorModal(true);
        }
    };

    const resetForm = () => {
        setCurrentNota(null);
        setNome('');
        setDisciplina('');
        setNota('');
    };

    const closeModal = () => {
        setIsSuccessModal(false);
        setIsErrorModal(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Notas dos Professores</h1>

            <form onSubmit={(e) => { e.preventDefault(); handleAddOrUpdate(); }} className="mb-4">
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                    required
                />
                <input
                    type="text"
                    value={disciplina}
                    onChange={(e) => setDisciplina(e.target.value)}
                    placeholder="Disciplina"
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                    required
                />
                <input
                    type="number"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                    placeholder="Nota"
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-1">
                    {currentNota ? 'Atualizar' : 'Adicionar'}
                </button>
                <button type="button" onClick={resetForm} className="bg-red-500 text-white rounded px-4 py-1 ml-2">
                    Cancelar
                </button>
            </form>

            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Nome</th>
                        <th className="border border-gray-300 px-4 py-2">Disciplina</th>
                        <th className="border border-gray-300 px-4 py-2">Nota</th>
                        <th className="border border-gray-300 px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {notas.map((nota) => (
                        <tr key={nota.id}>
                            <td className="border border-gray-300 px-4 py-2">{nota.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{nota.nome}</td>
                            <td className="border border-gray-300 px-4 py-2">{nota.disciplina}</td>
                            <td className="border border-gray-300 px-4 py-2">{nota.nota}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button onClick={() => handleEdit(nota)} className="bg-yellow-500 text-white rounded px-2 py-1 mr-2">
                                    Editar
                                </button>
                                <button onClick={() => handleDelete(nota.id)} className="bg-red-500 text-white rounded px-2 py-1">
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de Sucesso */}
            {isSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#2F2F2F] p-10 rounded shadow-lg text-center">
                        <div className="flex items-center justify-center mb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#fff] mr-2" 
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm4.707 7.293a1 1 0 01-1.414 0L10 9.414 8.707 8.121a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                            </svg>
                            <h2 className="font-bold text-[#0f0]">Sucesso</h2>
                        </div>
                        <p>O elemento foi criado com <span className='text-[#0f0]'>sucesso!</span></p>
                        <button onClick={closeModal} className="bg-blue-500 text-white font-bold rounded px-4 py-1 mt-2">
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de Erro */}
            {isErrorModal && (
                <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg">
                        <h2 className="font-bold">Erro</h2>
                        <p>{modalMessage}</p>
                        <button onClick={closeModal} className="bg-red-500 text-white rounded px-4 py-1 mt-2">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notas;
