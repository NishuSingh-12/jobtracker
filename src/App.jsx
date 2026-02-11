import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-gray-700">dummy list</p>
        </div>
      </main>
    </div>
  );
}

export default App;
