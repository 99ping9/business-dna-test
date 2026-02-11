import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button"; // Check path
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-blue-50 to-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 ring-8 ring-blue-50">
                    <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
                    1인 사업자<br />
                    <span className="text-primary">강점 DNA 진단하기</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-sm mx-auto">
                    나의 성향에 딱 맞는<br />
                    수익화 모델과 생존 전략을 찾아보세요.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full max-w-xs"
            >
                <Button
                    size="lg"
                    onClick={() => navigate("/test")}
                    className="w-full text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow"
                >
                    테스트 시작하기
                </Button>
                <p className="mt-4 text-sm text-gray-400">
                    소요 시간: 약 3분 | 총 24문항
                </p>
            </motion.div>
        </div>
    );
}
