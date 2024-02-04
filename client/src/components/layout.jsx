import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="text-black-100 font-semibold font-mono bg-gradient-to-b from-cyan-500 to-blue-500 min-h-screen">
      <Outlet />
    </div>
      
  );
}
