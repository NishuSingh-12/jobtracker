import { useEffect, useRef, useState } from "react";
import ApplicationList from "./components/ApplicationList";
import Header from "./components/Header";
import { seedApplications } from "./data/seed";
import AddApplicationForm from "./components/AddApplicationForm";
import Filters from "./components/Filters.Jsx";
import StatCard from "./components/StatCard";

function App() {
  const [applications, setApplications] = useState(() => {
    const stored = localStorage.getItem("jobtracker_apps");
    return stored ? JSON.parse(stored) : seedApplications;
  });

  const [editingApp, setEditingApp] = useState(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("date_desc");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("jobtracker_apps", JSON.stringify(applications));
  }, [applications]);

  function handleAdd(newApp) {
    setApplications((prev) => [newApp, ...prev]);
  }

  function handleDelete(id) {
    const ok = confirm("Delete this application?");
    if (!ok) {
      return;
    }
    setApplications((prev) => prev.filter((a) => a.id !== id));
  }

  function handleEdit(app) {
    setEditingApp(app);
    setIsModalOpen(true);
  }

  function handleCancelEdit() {
    setEditingApp(null);
  }

  function handleUpdate(updatedApp) {
    setApplications((prev) =>
      prev.map((a) => (a.id === updatedApp.id ? updatedApp : a)),
    );
    setEditingApp(null);
  }

  const filteredApplications = applications
    .filter((a) => {
      const q = query.trim().toLowerCase();

      const matchesSearch =
        !q ||
        a.company.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q);

      const matchesStatus = status === "All" ? true : a.status === status;

      return matchesSearch && matchesStatus;
    })
    .slice()
    .sort((x, y) => {
      if (sort === "date_asc")
        return (x.date || "").localeCompare(y.date || "");
      return (y.date || "").localeCompare(x.date || "");
    });

  const stats = {
    total: applications.length,
    applied: applications.filter((a) => a.status === "Applied").length,
    interview: applications.filter((a) => a.status === "Interview").length,
    offer: applications.filter((a) => a.status === "Offer").length,
    rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header onAddClick={() => setIsModalOpen(true)} />

      <main className="mx-auto max-w-6xl px-6 py-10 space-y-8 min-h-[calc(100vh-120px)]">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track and manage your internship applications efficiently.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          <StatCard label="Total" value={stats.total} />
          <StatCard label="Applied" value={stats.applied} />
          <StatCard label="Interview" value={stats.interview} />
          <StatCard label="Offer" value={stats.offer} />
          <StatCard label="Rejected" value={stats.rejected} />
        </div>

        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-6">
            <Filters
              query={query}
              setQuery={setQuery}
              status={status}
              setStatus={setStatus}
              sort={sort}
              setSort={setSort}
            />
          </div>
          <ApplicationList
            applications={filteredApplications}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl relative">
            <button
              className="absolute right-8 top-6 text-gray-400 hover:text-gray-600 cursor-pointer"
              onClick={() => {
                setIsModalOpen(false);
                setEditingApp(null);
              }}
            >
              ✕
            </button>

            <AddApplicationForm
              onAdd={(data) => {
                handleAdd(data);
                setIsModalOpen(false);
              }}
              onUpdate={(data) => {
                handleUpdate(data);
                setIsModalOpen(false);
              }}
              editingApp={editingApp}
              onCancelEdit={() => {
                handleCancelEdit();
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
