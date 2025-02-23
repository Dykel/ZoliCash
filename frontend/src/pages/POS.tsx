import React, { useState } from 'react';
import axios from 'axios';

const POS: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSale = () => {
    axios.post('http://localhost:8000/api/sales/', {
      amount,
      description,
      company: 1,
    }).then(() => {
      setAmount('');
      setDescription('');
      alert('Sale Recorded!');
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Point of Sale</h1>
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount (Rs)"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 mr-2"
        />
        <button onClick={handleSale} className="bg-blue-500 text-white p-2">Add Sale</button>
      </div>
    </div>
  );
};

export default POS;