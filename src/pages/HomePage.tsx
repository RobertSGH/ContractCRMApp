import React, { useEffect, useState } from 'react';
import { Contract, ContractStatus } from '../components/types';
import Layout from '../components/Layout';
import { dummyContracts } from '../utils/helpers';
import NewContractForm from '../components/NewContractForm';
import '../styles/Contracts.css';
import ContractCard from '../components/ContractCard';

const HomePage = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [activityFilter, setActivityFilter] = useState<
    'all' | 'active' | 'inactive'
  >('all');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // TODO: Implement fetchContracts to load contracts from the API
    fetchContracts();
  }, [contracts]);

  const fetchContracts = async () => {
    // TODO: Replace with actual API call and error handling
  };

  const handleNameFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(event.target.value);
  };

  const handleActivityFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setActivityFilter(event.target.value as 'all' | 'active' | 'inactive');
  };

  //replace dummyContracts with fetched ones
  const filteredContracts = dummyContracts.filter((contract) => {
    const matchesName = contract.kupac
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    let matchesActivity = true;

    if (activityFilter === 'active') {
      matchesActivity =
        contract.status === ContractStatus.KREIRANO ||
        contract.status === ContractStatus.NARUČENO;
    } else if (activityFilter === 'inactive') {
      matchesActivity = contract.status === ContractStatus.ISPORUČENO;
    }

    return matchesName && matchesActivity;
  });

  const handleNewContract = (newContract: Contract) => {
    // Call an API to add the contract, and then fetch the updated list
    setContracts([...contracts, newContract]);
  };

  return (
    <Layout>
      <button
        className={`toggle-form-button ${showForm ? 'cancel' : ''}`}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Odustani' : 'Dodaj Novi Ugovor'}
      </button>

      {showForm && <NewContractForm onNewContract={handleNewContract} />}
      <div>
        <h1>Kupoprodajni Ugovori</h1>
        <input
          type='text'
          placeholder='Filtriraj po kupcu...'
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <select value={activityFilter} onChange={handleActivityFilterChange}>
          <option value='all'>Svi ugovori</option>
          <option value='active'>Aktivni ugovori</option>
          <option value='inactive'>Neaktivni ugovori</option>
        </select>

        {filteredContracts.length > 0 ? (
          <div className='contracts-grid'>
            {filteredContracts.map((contract) => (
              <ContractCard
                key={contract.id}
                contract={contract}
                isLink={true}
              />
            ))}
          </div>
        ) : (
          <p>Nema rezultata za prikaz.</p>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
