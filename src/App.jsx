import { useEffect, useState } from "react";
import ApplicationList from "./components/ApplicationList";
import Header from "./components/Header";
import { seedApplications } from "./data/seed";
import AddApplicationForm from "./components/AddApplicationForm";
import Filters from "./components/Filters.Jsx";

function App() {
  const [applications, setApplications] = useState(() => {
    const stored = localStorage.getItem("jobtracker_apps");
    return stored ? JSON.parse(stored) : seedApplications;
  });

  const [editingApp, setEditingApp] = useState(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

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
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const filteredApplications = applications.filter((a) => {
    const q = query.trim().toLowerCase();

    const matchesSearch =
      !q ||
      a.company.toLowerCase().includes(q) ||
      a.role.toLowerCase().includes(q);

    const matchesStatus = status === "All" ? true : a.status === status;

    return matchesSearch && matchesStatus;
  });
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <AddApplicationForm
          onAdd={handleAdd}
          OnUpdate={handleUpdate}
          editingApp={editingApp}
          onCancelEdit={handleCancelEdit}
        />

        <Filters
          query={query}
          setQuery={setQuery}
          status={status}
          setStatus={setStatus}
        />

        <ApplicationList
          applications={filteredApplications}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;
