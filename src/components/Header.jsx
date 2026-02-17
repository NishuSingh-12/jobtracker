export default function Header({ onAddClick }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
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
          onClick={onAddClick}
        >
          + Add
        </button>
      </div>
    </header>
  );
}
