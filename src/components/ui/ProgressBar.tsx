import { motion } from "framer-motion";

interface ProgressBarProps {
    progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
        </div>
    );
}
