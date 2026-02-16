function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
export default StatCard;
