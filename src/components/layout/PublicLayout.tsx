import { Outlet } from "react-router-dom";
import { PublicNav } from "./PublicNav";
import { PublicFooter } from "./PublicFooter";

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col font-body text-imz-text">
      <PublicNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <PublicFooter />
    </div>
  );
}
