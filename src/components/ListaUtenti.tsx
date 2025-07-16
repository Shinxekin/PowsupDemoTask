'use client';

import UtenteCard from './UtenteCard';

type Props = {
  utenti: UtenteModel[];
};

export default function ListaUtenti({ utenti }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
      {utenti.map((utente) => (
        <UtenteCard key={utente.id} utente={utente}/>
      ))}
    </div>
  );
}