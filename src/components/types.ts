export interface Contract {
  id?: number;
  kupac: string;
  broj_ugovora: string;
  datum_akontacije: string;
  rok_isporuke: string;
  status: ContractStatus;
}

export enum ContractStatus {
  KREIRANO = 'KREIRANO',
  NARUČENO = 'NARUČENO',
  ISPORUČENO = 'ISPORUČENO',
}

export interface Article {
  id: number;
  naziv: string;
  dobavljač: string;
  status: ArticleStatus;
}

export enum ArticleStatus {
  KREIRANO = 'KREIRANO',
  NARUČENO = 'NARUČENO',
  ISPORUČENO = 'ISPORUČENO',
}
