import { ReactNode } from "react";
import { DashboardHeader } from "./components/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mb-5">
        <DashboardHeader />
      </div>
      {children}
    </>
  );
}
