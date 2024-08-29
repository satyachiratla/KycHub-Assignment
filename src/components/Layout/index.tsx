import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-100 h-screen flex flex-col">
      <header className="flex-shrink-0">
        <Navbar />
      </header>
      <div className="flex flex-grow overflow-hidden">
        <aside className="w-1/5 h-full flex-shrink-0">
          <Sidebar />
        </aside>
        <main className="w-4/5 h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
