import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from '../components/Calendar';

const Dashboard: React.FC = () => {
  const [sales, setSales] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/').then(res => setSales(res.data));
    axios.get('http://localhost:8000/api/tasks/').then(res => setTasks(res.data));
  }, []);

  const totalSales = sales.reduce((sum, sale) => sum + parseFloat(sale.amount), 0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-100 p-4">Today’s Sales: Rs {totalSales}</div>
        <div className="bg-green-100 p-4">Profit: Rs {(totalSales * 0.2).toFixed(2)}</div>
        <div className="bg-white p-4">Next Task: {tasks[0]?.title || 'None'}</div>
      </div>
      <Calendar tasks={tasks} />
    </div>
  );
};

export default Dashboard;