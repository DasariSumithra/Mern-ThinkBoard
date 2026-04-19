import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";
const CreatePage = () => {
  const [title,setTitle]= useState("");
  const [content,setContent]=useState("");
  const [loading,setLoading]=useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
     <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          {/* Back Button */}
          <Link to="/" className="flex items-center gap-2 mb-6 text-[#00FF9D] hover:underline">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          {/* Card */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Create New Note</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Title */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-base-content/70">Title</label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-base-content/70">Content</label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-32"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#00FF9D] text-black font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreatePage;
