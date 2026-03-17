import type { ReactNode } from "react";
import Footer from "./Footer";



type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}