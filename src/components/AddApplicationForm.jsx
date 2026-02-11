import { useState } from "react";

function AddApplicationForm() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");
  return (
    <div className="rounded-2xl border bg-white p-5">
      <h2 className="text-base font-semibold">Add Application</h2>
      <p className="mt-1 text-sm text-gray-600">Form UI</p>
      <form className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-gray-700">Company *</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Google"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-gray-700">Role *</label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Frontend Intern"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-gray-700">
            Applied Date *
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>
        <div className="sm:col-span-2 flex items-center gap-2 pt-1">
          <button
            type="button"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            onClick={() => alert("Next: submit logic + validation")}
          >
            Add
          </button>

          <button
            type="button"
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            onClick={() => {
              setCompany("");
              setRole("");
              setStatus("Applied");
              setDate("");
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddApplicationForm;
