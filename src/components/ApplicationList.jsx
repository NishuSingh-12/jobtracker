function StatusBadge({ status }) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1";
  const styles = {
    Applied: "bg-blue-50 text-blue-700 ring-blue-200",
    Interview: "bg-amber-50 text-amber-700 ring-amber-200",
    Offer: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Rejected: "bg-rose-50 text-rose-700 ring-rose-200",
  };
  return (
    <span
      className={`${base} ${styles[status] || "bg-gray-50 text-gray-700 ring-gray-200"}`}
    >
      {status}
    </span>
  );
}

export default function ApplicationList({ applications, onDelete, onEdit }) {
  if (applications.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm border border-gray-200">
        <p className="text-base font-semibold text-gray-900">
          No applications found
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Try changing filters or add a new application.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-3">
      {/* Mobile Cards */}
      <div className="grid gap-3 sm:hidden">
        {applications.map((app) => (
          <div
            key={app.id}
            className="rounded-xl bg-white p-4 shadow-sm border border-gray-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {app.company}
                </p>
                <p className="text-sm text-gray-600">{app.role}</p>
              </div>
              <StatusBadge status={app.status} />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Applied:{" "}
                <span className="font-medium text-gray-700">{app.date}</span>
              </p>
              <div className="flex gap-2 cursor-pointer">
                <button
                  type="button"
                  className="cursor-pointer rounded-md border border-indigo-200 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition"
                  onClick={() => onEdit(app)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className=" cursor-pointer rounded-md border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition"
                  onClick={() => onDelete(app.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
            <tr>
              <th className="px-5 py-3 text-left font-semibold">Company</th>
              <th className="px-5 py-3 text-left font-semibold">Role</th>
              <th className="px-5 py-3 text-left font-semibold">Status</th>
              <th className="px-5 py-3 text-left font-semibold">Date</th>
              <th className="px-5 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b last:border-none hover:bg-gray-50/70"
              >
                <td className="px-5 py-4 font-semibold text-gray-900">
                  {app.company}
                </td>
                <td className="px-5 py-4 text-gray-700">{app.role}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={app.status} />
                </td>
                <td className="px-5 py-4 text-gray-700">{app.date}</td>
                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    className="cursor-pointer rounded-md border border-indigo-200 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition mr-2"
                    onClick={() => onEdit(app)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer rounded-md border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition"
                    onClick={() => onDelete(app.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
