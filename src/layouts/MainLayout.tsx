import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout">
            <p>main layout</p>
            <div className="main-layout__content">
                {children}
            </div>
        </div>
    );
}