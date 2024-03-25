import { ContractStatus } from './types';
import { useState } from 'react';
import { Contract } from './types';
import '../styles/ContractForm.css';

interface NewContractFormProps {
  onNewContract: (newContract: Contract) => void;
}

const NewContractForm = ({ onNewContract }: NewContractFormProps) => {
  const [kupac, setKupac] = useState('');
  const [brojUgovora, setBrojUgovora] = useState('');
  const [datumAkontacije, setDatumAkontacije] = useState('');
  const [rokIsporuke, setRokIsporuke] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionError('');

    const newContract = {
      kupac,
      broj_ugovora: brojUgovora,
      datum_akontacije: datumAkontacije,
      rok_isporuke: rokIsporuke,
      status: ContractStatus.KREIRANO,
    };

    //TODO: API call  to create the new contract

    onNewContract(newContract);
    // console.log(newContract);
    resetForm();
  };

  const resetForm = () => {
    setKupac('');
    setBrojUgovora('');
    setDatumAkontacije('');
    setRokIsporuke('');
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        {submissionError && <p className='error'>{submissionError}</p>}

        <label>Novi Ugovor</label>
        <input
          type='text'
          value={kupac}
          onChange={(e) => setKupac(e.target.value)}
          placeholder='Kupac'
          required
        />
        <input
          type='text'
          value={brojUgovora}
          onChange={(e) => setBrojUgovora(e.target.value)}
          placeholder='Broj ugovora'
          required
        />
        <label>Datum akontacije</label>
        <input
          type='date'
          value={datumAkontacije}
          onChange={(e) => setDatumAkontacije(e.target.value)}
          placeholder='Datum akontacije'
          required
        />
        <label>Datum isporuke</label>
        <input
          type='date'
          value={rokIsporuke}
          onChange={(e) => setRokIsporuke(e.target.value)}
          placeholder='Rok isporuke'
          required
        />
        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Submitting...' : 'Dodaj Ugovor'}
        </button>
      </div>
    </form>
  );
};

export default NewContractForm;
