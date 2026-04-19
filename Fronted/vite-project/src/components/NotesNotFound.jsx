import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">

      {/* Icon Circle */}
      <div className="bg-[#00FF9D20] p-8 rounded-full mb-6 shadow-[0_0_30px_#00FF9D30]">
        <NotebookIcon className="size-10 text-[#00FF9D]" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">No notes yet</h3>

      {/* Description */}
      <p className="text-base-content/70 max-w-md mb-6">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>

      {/* Button */}
      <Link
        to="/create"
        className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#00FF9D] text-black font-medium shadow-[0_0_10px_#00FF9D] hover:shadow-[0_0_20px_#00FF9D] hover:opacity-90 transition"
      >
        Create Your First Note
      </Link>

    </div>
  );
};

export default NotesNotFound;