import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">

          {/* ThinkBoard title */}
          <h1 className="text-3xl font-bold font-mono tracking-tight text-[#00FF9D]">
            ThinkBoard
          </h1>

          {/* New Note button */}
          <div className="flex items-center gap-4">
            <Link
  to="/create"
  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF9D] text-black font-medium hover:opacity-90 transition"
>
  <PlusIcon className="size-5" />
  <span>New Note</span>
</Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;