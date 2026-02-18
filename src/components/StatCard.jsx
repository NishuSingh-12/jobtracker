const theme = {
  Total: "from-slate-500 to-slate-700",
  Applied: "from-blue-500 to-indigo-600",
  Interview: "from-amber-500 to-orange-600",
  Offer: "from-emerald-500 to-green-600",
  Rejected: "from-rose-500 to-red-600",
};

function StatCard({ label, value }) {
  const grad = theme[label] || "from-slate-500 to-slate-700";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white py-3 px-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700 font-medium">{label}</p>
        <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${grad}`} />
      </div>

      <p className="mt-1 text-2xl font-semibold">{value}</p>
      <div
        className={`mt-3 h-1.5 w-full rounded-full bg-gradient-to-r ${grad} opacity-80`}
      />
    </div>
  );
}
export default StatCard;
