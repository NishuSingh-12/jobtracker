import { useEffect, useState, forwardRef } from "react";

const AddApplicationForm = forwardRef(function AddApplicationForm(
  { onAdd, onUpdate, editingApp, onCancelEdit },
  companyInputRef,
) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const isEditing = Boolean(editingApp);

  useEffect(() => {
    if (!editingApp) return;

    setCompany(editingApp.company || "");
    setRole(editingApp.role || "");
    setStatus(editingApp.status || "Applied");
    setDate(editingApp.date || "");
    setError("");
  }, [editingApp]);

  function reset() {
    setCompany("");
    setRole("");
    setStatus("Applied");
    setDate("");
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const c = company.trim();
    const r = role.trim();
    const d = date;

    if (!c || !r || !d) {
      setError("Company, Role and Date are required.");
      return;
    }

    const payload = {
      id: editingApp?.id ?? crypto.randomUUID(),
      company: c,
      role: r,
      status,
      date: d,
    };

    if (isEditing) {
      onUpdate(payload);
    } else {
      onAdd(payload);
    }

    reset();

    if (isEditing) onCancelEdit();
  }

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            {isEditing ? "Edit Application" : "Add Application"}
          </h2>
          <p className="mt-1 text-sm  text-indigo-600">
            {isEditing
              ? "Update selected application."
              : "Add a new application."}
          </p>
        </div>

        {isEditing ? (
          <button
            type="button"
            className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50"
            onClick={() => {
              reset();
              onCancelEdit();
            }}
          >
            Cancel
          </button>
        ) : null}
      </div>

      {error ? (
        <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Company *</label>
          <input
            ref={companyInputRef}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Google"
            className="mt-1 w-full  rounded-lg border p-2 text-xs outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Role *</label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Frontend Intern"
            className="mt-1 w-full rounded-lg border p-2 text-xs outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 text-xs outline-none focus:ring-2 focus:ring-black/10"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Applied Date *
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full rounded-lg border p-2 text-xs outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>

        <div className="sm:col-span-2 flex items-center gap-2 pt-1">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
          >
            {isEditing ? "Update" : "Add"}
          </button>

          {!isEditing ? (
            <button
              type="button"
              className="cursor-pointer rounded-md border border-indigo-200 px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition mr-2"
              onClick={reset}
            >
              Clear
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
});

export default AddApplicationForm;
