import { useState } from "react";
import ApplicationList from "./components/ApplicationList";
import Header from "./components/Header";
import { seedApplications } from "./data/seed";

function App() {
  const [applications] = useState(seedApplications);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <ApplicationList applications={seedApplications} />
      </main>
    </div>
  );
}

export default App;
