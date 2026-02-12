import { useEffect, useState } from "react";
import ApplicationList from "./components/ApplicationList";
import Header from "./components/Header";
import { seedApplications } from "./data/seed";
import AddApplicationForm from "./components/AddApplicationForm";

function App() {
  const [applications, setApplications] = useState(() => {
    const stored = localStorage.getItem("jobtracker_apps");
    return stored ? JSON.parse(stored) : seedApplications;
  });

  useEffect(() => {
    localStorage.setItem("jobtracker_apps", JSON.stringify(applications));
  }, [applications]);

  function handleAdd(newApp) {
    setApplications((prev) => [newApp, ...prev]);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <AddApplicationForm onAdd={handleAdd} />
        <ApplicationList applications={applications} />
      </main>
    </div>
  );
}

export default App;
