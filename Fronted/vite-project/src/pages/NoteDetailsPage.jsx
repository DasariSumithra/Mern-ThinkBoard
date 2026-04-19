import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailsPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#0f0f0f]">
    <div className="max-w-2xl mx-auto px-4 py-10">

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        
        {/* Back */}
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>

        {/* Delete */}
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition"
        >
          <Trash2Icon className="size-5" />
          Delete Note
        </button>
      </div>

      {/* Card */}
      <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg">

        {/* Title */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Title</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 text-white outline-none focus:border-[#00FF9D]"
            value={note.title}
            onChange={(e) =>
              setNote({ ...note, title: e.target.value })
            }
          />
        </div>

        {/* Content */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Content</label>
          <textarea
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-600 text-white outline-none focus:border-[#00FF9D] h-32 resize-none"
            value={note.content}
            onChange={(e) =>
              setNote({ ...note, content: e.target.value })
            }
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 rounded-full bg-[#00FF9D] text-black font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

      </div>
    </div>
  </div>
);
};
export default NoteDetailsPage;