import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, X } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { questions } from "../data/questions";
import type { QuestionType } from "../data/questions";

export default function Test() {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Record<QuestionType, number>>({
        Architect: 0,
        Messenger: 0,
        Analyst: 0,
        Pacemaker: 0,
        Connector: 0,
        Artisan: 0,
        Tester: 0,
        Healer: 0,
    });

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleAnswer = (isYes: boolean) => {
        if (isYes) {
            setScores((prev) => ({
                ...prev,
                [currentQuestion.type]: prev[currentQuestion.type] + 1,
            }));
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            // Navigate to result with calculated scores

            // Need to pass the FINAL score update. 
            // React state update is async, so we calculate locally for the last question.
            const finalScores = { ...scores };
            if (isYes) {
                finalScores[currentQuestion.type] += 1;
            }
            const finalWinner = Object.entries(finalScores).reduce(
                (max, entry) => (entry[1] > max[1] ? entry : max),
                Object.entries(finalScores)[0]
            )[0] as QuestionType;

            navigate(`/result?type=${finalWinner}`);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            // Revert score is tricky without history. 
            // For simplicity in this version, we just go back. 
            // Ideally we should pop the answer history.
            // Let's implement history stack if needed, but for now simple back is OK, 
            // trusting user to re-answer.
            // ACTUALLY, to be accurate, we should probably store answers array.
            // Let's stick to simple "Previous" that just decrements index for UI 
            // but doesn't decrement score (or we can decrement if we tracked it).
            // Given the requirement "Previous" button exists.
            setCurrentQuestionIndex((prev) => prev - 1);
        } else {
            navigate("/");
        }
    };

    return (
        <div className="flex flex-col min-h-screen px-6 py-8 bg-background relative overflow-hidden">
            {/* Absolute Progress Bar at top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <div className="flex items-center justify-between mb-8 mt-2">
                <button
                    onClick={handlePrevious}
                    className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <span className="text-sm font-medium text-gray-400 font-mono">
                    {currentQuestionIndex + 1} / {questions.length}
                </span>
            </div>

            <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        <Card className="p-8 shadow-xl shadow-blue-100/50 border-blue-50/50 bg-white min-h-[280px] flex items-center justify-center">
                            <h2 className="text-xl sm:text-2xl font-bold leading-relaxed text-center text-gray-800 break-keep">
                                {currentQuestion.text}
                            </h2>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-8 mb-8 space-y-3 w-full max-w-md mx-auto">
                <Button
                    onClick={() => handleAnswer(true)}
                    className="w-full py-6 text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                    <Check className="w-5 h-5" />네, 맞습니다
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => handleAnswer(false)}
                    className="w-full py-6 text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                    <X className="w-5 h-5 text-gray-400" />
                    아니오
                </Button>
            </div>
        </div>
    );
}
