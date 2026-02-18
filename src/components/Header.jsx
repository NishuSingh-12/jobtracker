export default function Header({ onAddClick }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto w-full max-w-[1400] px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                JobTrackr
              </h1>
              <p className="text-sm text-gray-500">Track your applications</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg cursor-pointer bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
          onClick={onAddClick}
        >
          + Add
        </button>
      </div>
    </header>
  );
}
