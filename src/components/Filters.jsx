export default function Filters({
  query,
  setQuery,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Filters</h3>

      <div>
        <label className="text-xs font-medium text-gray-500">Search</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Company or role"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-gray-500">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
        >
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-medium text-gray-500">Sort</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
        >
          <option value="date_desc">Newest first</option>
          <option value="date_asc">Oldest first</option>
        </select>
      </div>
    </div>
  );
}
