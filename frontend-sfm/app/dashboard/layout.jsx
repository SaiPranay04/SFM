import Sidebar from '../../src/Components/esg_dashboard/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}
