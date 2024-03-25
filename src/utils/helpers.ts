import {
  Article,
  Contract,
  ContractStatus,
  ArticleStatus,
} from '../components/types';

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'KREIRANO':
      return 'green';
    case 'NARUČENO':
      return 'yellow';
    case 'ISPORUČENO':
      return 'grey';
    default:
      return 'black';
  }
};

//dummyData
export const dummyContracts: Contract[] = [
  {
    id: 1,
    kupac: 'Petra Kranjčar',
    broj_ugovora: '1/2024',
    datum_akontacije: '2024-01-04',
    rok_isporuke: '2024-04-20',
    status: ContractStatus.KREIRANO,
  },
  {
    id: 2,
    kupac: 'Franko Kasun',
    broj_ugovora: '2/2024',
    datum_akontacije: '2024-03-01',
    rok_isporuke: '2024-05-01',
    status: ContractStatus.ISPORUČENO,
  },
  {
    id: 3,
    kupac: 'Stjepan Babić',
    broj_ugovora: '3/2024',
    datum_akontacije: '2024-03-03',
    rok_isporuke: '2024-04-15',
    status: ContractStatus.NARUČENO,
  },
  {
    id: 4,
    kupac: 'Tia Janković',
    broj_ugovora: '4/2024',
    datum_akontacije: '2024-03-14',
    rok_isporuke: '2024-08-13',
    status: ContractStatus.KREIRANO,
  },
];

export const dummyArticles: Article[] = [
  {
    id: 1,
    naziv: 'Perilica posuđa ugradbena Electrolux EEA27200L',
    dobavljač: 'Sancta Domenica',
    status: ArticleStatus.KREIRANO,
  },
  {
    id: 2,
    naziv: 'Napa ugradbena Gorenje TH60E3X',
    dobavljač: 'Sancta Domenica',
    status: ArticleStatus.NARUČENO,
  },
  {
    id: 3,
    naziv: 'Ploča ugradbena kombinirana Gorenje GCE691BSC',
    dobavljač: 'Bijela tehnika',
    status: ArticleStatus.ISPORUČENO,
  },
];

export const formatDate = (dateInput: string | Date) => {
  const date = new Date(dateInput);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
