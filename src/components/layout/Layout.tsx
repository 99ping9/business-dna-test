import { type ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background text-text font-sans antialiased">
            <main className="mx-auto min-h-screen max-w-md w-full bg-white shadow-2xl overflow-hidden relative">
                {children}
            </main>
        </div>
    );
}
