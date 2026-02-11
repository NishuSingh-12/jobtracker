export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">JobTrackr</h1>
          <p className="text-sm text-gray-600">
            Internship applications tracker
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:opacity-90"
          onClick={() => alert("Next: Add form")}
        >
          + Add
        </button>
      </div>
    </header>
  );
}
