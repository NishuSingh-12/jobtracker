export default function Header({ onAddClick }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-sm">
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                JobTrackr
              </h1>
              <p className="text-sm text-gray-600">
                Track internship applications
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-[0.99]"
          onClick={onAddClick}
        >
          + Add
        </button>
      </div>
    </header>
  );
}
