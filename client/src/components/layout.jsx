import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="text-teal-100 bg-teal-900 min-h-screen">
      <Outlet />
    </div>
      
  );
}
