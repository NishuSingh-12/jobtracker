function ApplicationList({ applications }) {
  if (applications.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-center">
        <p className="text-gray-600">No applications yet.</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-4 py-3 text-left">Company</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-b last:border-none">
              <td className="px-4 py-3 font-medium">{app.company}</td>
              <td className="px-4 py-3">{app.role}</td>
              <td className="px-4 py-3">{app.status}</td>
              <td className="px-4 py-3">{app.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationList;
