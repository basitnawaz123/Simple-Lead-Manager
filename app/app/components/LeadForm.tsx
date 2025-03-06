import React, { useState } from 'react';
import { endPoints } from '../api/endPoints';
import { LeadStatus } from '../types';

interface Props {
  setRefetchLeads: (value: boolean) => void;
}

const LeadForm: React.FC<Props> = ({ setRefetchLeads }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (name == '' || email == '') return;

    try {
      const newLead = { name, email, status: LeadStatus.New };
      const response = await fetch(endPoints.leads, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLead),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Error ${response.status}: ${response.statusText}`
        );
      }

      setName('');
      setEmail('');
      setRefetchLeads(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred'
      );
    }
  };

  return (
    <div className="items-center">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mr-2"
          required
        />

        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Lead
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
