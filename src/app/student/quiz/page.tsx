'use client';

import { useEffect, useState } from 'react';

interface Quiz {
  _id: string;
  topic: string;
  quizzes: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const QuizzesPage = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    // Fetch quizzes data from the API
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('/admin/api/quiz');
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleOpenModal = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedQuiz(null);
    setIsModalOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteQuiz = async (quiz: Quiz) => {
    if (quiz) {
      try {
        console.log(`Attempting to delete quiz with topic: ${quiz.topic}`);
        const response = await fetch(`/admin/api/quiz/${quiz._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log(`Quiz with topic: ${quiz.topic} deleted successfully`);
          setQuizzes((prevQuizzes) => prevQuizzes.filter((q) => q._id !== quiz._id));
          handleCloseModal();
        } else {
          console.error(`Error deleting quiz with topic: ${quiz.topic}:`, response.statusText);
        }
      } catch (error) {
        console.error('Error deleting quiz:', error);
      }
    }
  };

  const handleEditQuizSubmit = async (updatedQuiz: Quiz) => {
    try {
      const response = await fetch(`/admin/api/quiz/${selectedQuiz?._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuiz),
      });

      if (response.ok) {
        setQuizzes(quizzes.map((quiz) => (quiz._id === updatedQuiz._id ? updatedQuiz : quiz)));
        handleCloseEditModal();
        handleCloseModal();
      } else {
        console.error('Erro ao editar o quiz:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao editar o quiz:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 p-4">
      <h1 className="text-white text-3xl font-bold mb-4">Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="bg-white p-4 rounded shadow cursor-pointer"
            onClick={() => handleOpenModal(quiz)}
          >
            <h2 className="text-xl font-semibold">{quiz.topic}</h2>
          </div>
        ))}
      </div>

      {isModalOpen && selectedQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedQuiz.topic}</h2>
            {selectedQuiz.quizzes.map((quizItem, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium">{quizItem.question}</h3>
                <ul className="mt-2">
                  {quizItem.options.map((option, idx) => (
                    <li
                      key={idx}
                      className={`mt-1 ${
                        idx === quizItem.correctAnswer ? 'text-green-500 font-bold' : ''
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleDeleteQuiz(selectedQuiz)} // Usando o quiz selecionado diretamente
              >
                Eliminar
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                onClick={handleOpenEditModal}
              >
                Editar
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={handleCloseModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && selectedQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Editar Quiz</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedQuiz: Quiz = {
                  ...selectedQuiz,
                  topic: (e.target as any).topic.value,
                  quizzes: selectedQuiz.quizzes.map((quizItem, index) => ({
                    ...quizItem,
                    question: (e.target as any)[`question-${index}`].value,
                    options: quizItem.options.map((option, idx) => (e.target as any)[`option-${index}-${idx}`].value),
                    correctAnswer: parseInt((e.target as any)[`correctAnswer-${index}`].value, 10),
                  })),
                };
                handleEditQuizSubmit(updatedQuiz);
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Título do Quiz</label>
                <input
                  type="text"
                  defaultValue={selectedQuiz.topic}
                  className="w-full mt-2 p-2 border rounded"
                  name="topic"
                />
              </div>

              {selectedQuiz.quizzes.map((quizItem, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700">Pergunta {index + 1}</label>
                  <input
                    type="text"
                    defaultValue={quizItem.question}
                    className="w-full mt-2 p-2 border rounded"
                    name={`question-${index}`}
                  />

                  <label className="block text-gray-700 mt-2">Opções</label>
                  {quizItem.options.map((option, idx) => (
                    <input
                      key={idx}
                      type="text"
                      defaultValue={option}
                      className="w-full mt-1 p-2 border rounded"
                      name={`option-${index}-${idx}`}
                    />
                  ))}

                  <label className="block text-gray-700 mt-2">Opção Correta</label>
                  <select
                    name={`correctAnswer-${index}`}
                    defaultValue={quizItem.correctAnswer.toString()}
                    className="w-full mt-2 p-2 border rounded"
                  >
                    {quizItem.options.map((option, idx) => (
                      <option key={idx} value={idx}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={handleCloseEditModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizzesPage;
