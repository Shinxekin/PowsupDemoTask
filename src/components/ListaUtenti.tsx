'use client';

import { useState } from 'react';
import UtenteCard from './UtenteCard';
import RicercaUtenteForm from './RicercaForm';

type Props = {
  utenti: UtenteModel[];
};

export default function ListaUtenti({ utenti }: Props) {

  const [utentiFiltrati,setUtentiFiltrati]= useState(utenti);

  return (
    <div className='space-y-5'>
      <RicercaUtenteForm utenti={utenti} setUtentiFiltrati={setUtentiFiltrati}/>
      {utentiFiltrati.length>0?(<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {utentiFiltrati.map((utente) => (
            <UtenteCard key={utente.id} utente={utente}/>
          ))}
        </div>
      ):<div className="flex justify-center text-white">
        <p>Nessun risultato trovato!</p>
      </div>}
    </div>
  );
}