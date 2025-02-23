import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Finances: React.FC = () => {
  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/').then(res => setSales(res.data));
  }, []);

  const totalSales = sales.reduce((sum, sale) => sum + parseFloat(sale.amount), 0);
  const totalVAT = sales.reduce((sum, sale) => sum + parseFloat(sale.vat) * parseFloat(sale.amount), 0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Finances</h1>
      <div className="mt-4">
        <p>Total Sales: Rs {totalSales}</p>
        <p>Total VAT (15%): Rs {totalVAT.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Finances;