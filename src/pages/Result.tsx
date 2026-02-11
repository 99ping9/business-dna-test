import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RefreshCw, Loader2, Copy } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { results } from "../data/results";
import type { QuestionType } from "../data/questions";
import { cn } from "../lib/utils";

export default function Result() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const type = searchParams.get("type") as QuestionType | null;
    const [isLoading, setIsLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);

    const result = type && results[type] ? results[type] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary">
                <Loader2 className="w-12 h-12 mb-4 animate-spin text-primary" />
                <h2 className="text-xl font-medium text-gray-700 animate-pulse">
                    당신의 비즈니스 DNA를 분석중입니다...
                </h2>
            </div>
        );
    }

    if (!result) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
                <h2 className="text-xl font-bold mb-4">결과를 찾을 수 없습니다.</h2>
                <Button onClick={() => navigate("/")}>처음으로 돌아가기</Button>
            </div>
        );
    }

    const Icon = result.icon;

    return (
        <div className="min-h-screen bg-background relative pb-20">
            <div className="bg-primary/5 h-48 absolute top-0 w-full -z-10 rounded-b-[3rem]" />

            <div className="px-6 pt-12 pb-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="bg-white p-6 rounded-full shadow-xl shadow-blue-100 mb-6 relative">
                        <div className="absolute inset-0 bg-blue-50 rounded-full animate-ping opacity-20" />
                        <Icon className="w-16 h-16 text-primary" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {result.title}
                    </h1>
                    <p className="text-gray-500 text-sm mb-6 max-w-xs break-keep">
                        "{result.quote}"
                    </p>

                    <Card className="w-full p-6 mb-6 bg-white/80 backdrop-blur-sm border-blue-100 shadow-lg">
                        <h3 className="text-lg font-bold mb-3 text-left">당신의 DNA는?</h3>
                        <p className="text-gray-700 text-left leading-relaxed break-keep mb-4">
                            {result.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {result.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>

                    <Card className="w-full p-6 mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none shadow-xl">
                        <h3 className="text-base font-semibold mb-2 opacity-90 text-left">추천 도서</h3>
                        <p className="text-lg font-bold text-left">{result.bookRecommendation}</p>
                    </Card>

                    <div className="w-full space-y-3">
                        <Button
                            variant="outline"
                            className="w-full py-6 text-lg shadow-sm mb-3 border-blue-200 text-blue-600 hover:bg-blue-50"
                            onClick={() => window.open("https://litt.ly/potential_consulting", "_blank")}
                        >
                            비아 | 포텐셜디렉터 알아보기
                        </Button>

                        <Button
                            className="w-full py-6 text-lg shadow-lg shadow-blue-500/20"
                            onClick={() => window.open("https://tally.so/r/1A7Gzg", "_blank")}
                        >
                            1:1 잠재력&강점 진단받기(무료)
                        </Button>

                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                variant="outline"
                                className="w-full py-6"
                                onClick={handleCopyLink}
                            >
                                <Copy className="w-4 h-4 mr-2" />
                                링크 복사
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full py-6"
                                onClick={() => navigate("/")}
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                다시 하기
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Toast Notification */}
            <div
                className={cn(
                    "fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center gap-2",
                    showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                )}
            >
                <span className="text-sm font-medium">링크가 복사되었습니다!</span>
            </div>
        </div>
    );
}
