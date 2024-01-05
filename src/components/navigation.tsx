import { ModeToggle } from "./mode-toggle";
import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <nav className="h-16 py-2 md:px-16 sm:px-8 xs:px-6 px-4 flex flex-row justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/shifts" className="[&.active]:font-bold">
          Shifts
        </Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
