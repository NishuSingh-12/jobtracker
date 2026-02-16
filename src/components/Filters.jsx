export default function Filters({ query, setQuery }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <label className="text-sm font-medium text-gray-700">Search</label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search company or role..."
        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
      />
    </div>
  );
}
