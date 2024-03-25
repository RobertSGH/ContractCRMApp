import { Link } from 'react-router-dom';
import { formatDate, getStatusColor } from '../utils/helpers';
import { Contract } from './types';

interface ContractCardProps {
  contract: Contract;
  isLink: boolean;
}

const ContractCard = ({ contract, isLink }: ContractCardProps) => {
  return (
    <div className={`contract-card ${isLink ? 'contract-card-link' : ''}`}>
      <p>Kupac: {contract.kupac}</p>
      <p>Broj ugovora: {contract.broj_ugovora}</p>
      <p>Datum akontacije: {formatDate(contract.datum_akontacije)}</p>
      <p>Rok isporuke: {formatDate(contract.rok_isporuke)}</p>
      <p>
        Status:{' '}
        <span style={{ color: getStatusColor(contract.status) }}>
          {contract.status}
        </span>
      </p>
      {isLink && <Link to={`/contract/${contract.id}`}>Detalji</Link>}
    </div>
  );
};

export default ContractCard;
