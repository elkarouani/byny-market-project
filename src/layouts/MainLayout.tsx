import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout">
            <h1>Main Layout</h1>
            <div className="main-layout__content">
                {children}
            </div>
        </div>
    );
}