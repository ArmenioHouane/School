'use client';

import React, { useState } from 'react';

// Define the structure of each quiz object
interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number | null; // Allow correctAnswer to be either a number or null
}

const QuizCreatePage = () => {
  const [topic, setTopic] = useState('');
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: null, // Correct answer starts as null
    },
  ]);

  // Other state handlers as before...

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const handleQuestionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuizzes = [...quizzes];
    newQuizzes[index].question = e.target.value;
    setQuizzes(newQuizzes);
  };

  const handleOptionChange = (quizIndex: number, optionIndex: number, value: string) => {
    const newQuizzes = [...quizzes];
    newQuizzes[quizIndex].options[optionIndex] = value;
    setQuizzes(newQuizzes);
  };

  const handleCorrectAnswerSelect = (quizIndex: number, optionIndex: number) => {
    const newQuizzes = [...quizzes];
    newQuizzes[quizIndex].correctAnswer = optionIndex; // Assigning a number is now valid
    setQuizzes(newQuizzes);
  };

  const addOption = (quizIndex: number) => {
    const newQuizzes = [...quizzes];
    newQuizzes[quizIndex].options.push('');
    setQuizzes(newQuizzes);
  };

  const removeOption = (quizIndex: number, optionIndex: number) => {
    const newQuizzes = [...quizzes];
    newQuizzes[quizIndex].options.splice(optionIndex, 1);
    setQuizzes(newQuizzes);
  };

  const addQuiz = () => {
    setQuizzes([...quizzes, { question: '', options: ['', '', '', ''], correctAnswer: null }]);
  };

  const handleSaveTopic = async () => {
    const quizData = {
      topic,
      quizzes,
    };

    try {
      const response = await fetch('/admin/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) {
        throw new Error('Failed to save quiz');
      }

      const savedQuiz = await response.json();
      console.log('Quiz salvo:', savedQuiz);

      // Clear the form after saving
      setTopic('');
      setQuizzes([{ question: '', options: ['', '', '', ''], correctAnswer: null }]);
    } catch (error) {
      console.error('Erro ao salvar o quiz:', error);
    }
  };

  const handleDeleteQuiz = async (quizIndex: number) => {
    const quizToDelete = quizzes[quizIndex];
    // Here you can add logic to delete on the backend
    try {
      const response = await fetch(`/admin/api/quiz/${quizToDelete.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete quiz');
      }

      const newQuizzes = quizzes.filter((_, index) => index !== quizIndex);
      setQuizzes(newQuizzes);
      console.log('Quiz deleted successfully');
    } catch (error) {
      console.error('Erro ao deletar o quiz:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
        <h1 className="text-2xl font-semibold mb-4">Created Quizzes</h1>
        {quizzes.length === 0 ? (
          <p>No quizzes created yet.</p>
        ) : (
          quizzes.map((quiz, index) => (
            <div key={index} className="border-b mb-2 pb-2">
              <h2 className="font-medium">{`Question ${index + 1}: ${quiz.question}`}</h2>
              <ul className="list-disc pl-5">
                {quiz.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{`${optionIndex + 1}: ${option}`}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {quiz.correctAnswer !== null
                  ? `Correct Answer: Option ${quiz.correctAnswer + 1}`
                  : 'Correct Answer: Not selected'}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Create a Quiz Sequence</h1>

        <div className="mb-4">
          <label htmlFor="topic" className="block text-gray-700 mb-2">Topic:</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={handleTopicChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter the topic for the quiz sequence"
          />
        </div>

        {quizzes.map((quiz, quizIndex) => (
          <div key={quizIndex} className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Question {quizIndex + 1}:</label>
              <input
                type="text"
                value={quiz.question}
                onChange={(e) => handleQuestionChange(quizIndex, e)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your question here"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Options:</label>
              {quiz.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(quizIndex, optionIndex, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder={`Option ${optionIndex + 1}`}
                  />
                  <input
                    type="radio"
                    placeholder="Enter the topic for the quiz sequence"
                    name={`correctAnswer-${quizIndex}`}
                    checked={quiz.correctAnswer === optionIndex}
                    onChange={() => handleCorrectAnswerSelect(quizIndex, optionIndex)}
                    className="ml-2"
                  />
                  {quiz.options.length > 2 && (
                    <button
                      onClick={() => removeOption(quizIndex, optionIndex)}
                      className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addOption(quizIndex)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-2"
              >
                Add Option
              </button>
            </div>
          </div>
        ))}

        <button onClick={addQuiz} className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mb-4">
          Adicionar Outro Quiz
        </button>
        <button onClick={handleSaveTopic} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          Save Quiz Sequence
        </button>
      </div>
    </div>
  );
};

export default QuizCreatePage;
