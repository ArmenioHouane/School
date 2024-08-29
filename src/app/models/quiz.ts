import mongoose, { Schema, Document, Model } from 'mongoose';

interface IQuiz extends Document {
  id?: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const QuizSchema: Schema<IQuiz> = new Schema({
  topic: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: Number, required: true }
});

const Quiz: Model<IQuiz> = mongoose.models.Quiz || mongoose.model<IQuiz>('Quiz', QuizSchema);

export default Quiz;
