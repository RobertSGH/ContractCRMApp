import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Contract, Article, ContractStatus } from '../components/types';
import {
  dummyArticles,
  getStatusColor,
  dummyContracts,
} from '../utils/helpers';
import '../styles/Contracts.css';
import ContractCard from '../components/ContractCard';

const ContractsPage = () => {
  const { contractId } = useParams<{ contractId?: string }>();
  const navigate = useNavigate();
  const [contract, setContract] = useState<Contract | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (contractId) {
      // Added check for contractId
      fetchContractDetails(parseInt(contractId));
      // Fetch articles for the contract
      fetchArticlesForContract(parseInt(contractId));
    }
  }, [contractId]);

  const fetchContractDetails = async (id: number) => {
    // TODO: replace with actual API call

    const contract = dummyContracts.find((contract) => contract.id === id);
    console.log(contract);
    setContract(contract || null);
  };

  const fetchArticlesForContract = async (id: number) => {
    // TODO: replace with actual API call
    const articles = dummyArticles.filter((article) => article.id === id); // Changed from dummyArticles[id] to filter method

    setArticles(articles);
  };

  const handleStatusChange = (newStatus: ContractStatus) => {
    if (!contract) return;
    if (
      window.confirm(
        `Are you sure you want to change the status to ${newStatus}?`
      )
    ) {
      setContract({ ...contract, status: newStatus });
      // TODO: update status in backend
    }
  };

  const handleDeliveryDateChange = (newDate: string) => {
    if (!contract || contract.status === ContractStatus.ISPORUČENO) return;
    setContract({ ...contract, rok_isporuke: newDate });
    // TODO: update delivery date in backend
  };

  const getNextStatusOptions = (currentStatus: ContractStatus | undefined) => {
    const statusFlow: { [key in ContractStatus]?: ContractStatus[] } = {
      KREIRANO: [ContractStatus.NARUČENO],
      NARUČENO: [ContractStatus.ISPORUČENO],
    };
    return statusFlow[currentStatus!] || [];
  };

  return (
    <div className='contract-details'>
      {contract ? (
        <>
          <ContractCard contract={contract} isLink={false} />
          <div className='status-change'>
            {contract.status !== ContractStatus.ISPORUČENO && (
              <>
                <label htmlFor='status-select'>Promjeni Status: </label>
                <select
                  id='status-select'
                  onChange={(e) =>
                    handleStatusChange(e.target.value as ContractStatus)
                  }
                  defaultValue='Change Status'
                >
                  <option disabled>Change Status</option>
                  {getNextStatusOptions(contract.status).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </>
            )}
            {contract.status !== ContractStatus.ISPORUČENO && (
              <>
                <label htmlFor='delivery-date'>Datum dostave: </label>
                <input
                  id='delivery-date'
                  type='date'
                  onChange={(e) => handleDeliveryDateChange(e.target.value)}
                  defaultValue={contract.rok_isporuke}
                />
              </>
            )}
          </div>
          <h3>Artikli</h3>
          {articles.map((article) => (
            <div key={article.id} className='article-item'>
              <p>Naziv: {article.naziv}</p>
              <p>Dobavljač: {article.dobavljač}</p>
              <p>
                Status:
                <span style={{ color: getStatusColor(article.status) }}>
                  {article.status}
                </span>
              </p>
            </div>
          ))}
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      ) : (
        <p>Trenutak...</p>
      )}
    </div>
  );
};

export default ContractsPage;
