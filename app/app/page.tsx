'use client'
import React, { useEffect, useState } from 'react';
import Leads from './components/Leads';
import LeadForm from './components/LeadForm';
import { endPoints } from './api/endPoints';
import { Lead } from './types';


const Home: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [refetchLeads,setRefetchLeads]=useState<boolean>(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch(endPoints.leads);
      const data = await response.json();
      if(data.success){
        setLeads(data.data);
      }
    };

    if(refetchLeads){
      fetchLeads();
      setRefetchLeads(false)
    }
  }, [refetchLeads]);

  return (
    <div>
      <LeadForm setRefetchLeads={setRefetchLeads}  />
      <Leads leads={leads} />
    </div>
  );
};

export default Home;