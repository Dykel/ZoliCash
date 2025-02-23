import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-blue-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">ZoliCash</h2>
      <ul>
        <li className="mb-4"><Link to="/">Dashboard</Link></li>
        <li className="mb-4"><Link to="/pos">Point of Sale</Link></li>
        <li className="mb-4"><Link to="/finances">Finances</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;