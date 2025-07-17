'use client';

import { useState } from 'react';
import CustomSelect from './CustomSelect';

type Props = {
  utenti: UtenteModel[];
  setUtentiFiltrati: (u: UtenteModel[]) => void;
};

export default function RicercaUtenteForm({ utenti,setUtentiFiltrati }: Props) {

    const [filtri, setFiltri] = useState({
        ricerca: '',
        categoria: '',
        ordinamento: '',
        checkin: '',
        fursuit: ''
    });

    const opzioniKind = ['Utente', 'Dealer', 'Staff'];
    const opzioniOrder = ['Crescente', 'Decrescente'];
    const opzioniCheckin = ['Check-in confermato', 'Check-in non confermato'];
    const opzioniFursuit = ['con Fursuit', 'senza Fursuit'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const risultati = utenti.filter((el) => {
            return (
                (filtri.ricerca === '' || el.fursonaName.toLowerCase().includes(filtri.ricerca.toLowerCase())) &&
                (filtri.categoria === '' || (filtri.categoria=='utente'? (el.kind != "staff" && el.kind != "dealer") :el.kind === filtri.categoria)) &&
                (filtri.checkin=='' || (filtri.checkin=='check-in confermato'&&el.checkInCompleted)||(filtri.checkin=='check-in non confermato'&&!el.checkInCompleted)) &&
                (filtri.fursuit=='' || (filtri.fursuit=='con fursuit'&&el.isFursuiter)||(filtri.fursuit=='senza fursuit'&&!el.isFursuiter))
            );
        });
        if(filtri.ordinamento=='crescente'){
            risultati.sort((a, b) => a.fursonaName.localeCompare(b.fursonaName));
        }else if(filtri.ordinamento=='decrescente'){
            risultati.sort((a, b) => b.fursonaName.localeCompare(a.fursonaName));
        }
        setUtentiFiltrati(risultati);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFiltri(prev => ({ ...prev, [name]: value }));
    };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-center bg-gray-800 rounded-xl p-4">
        <div className='flex flex-col gap-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
            <label className='font-medium text-white'>Cerca Fursona</label>
            <input type="text" name='ricerca' placeholder="Cerca fursona"
                value={filtri.ricerca}
                onChange={(e) => setFiltri(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                className="border px-4 py-2 rounded w-full bg-white text-gray-900"
            />
        </div>

        <CustomSelect customName={"categoria"} titolo={"Seleziona Categoria"} list={opzioniKind} value={filtri.categoria} setValue={handleChange}/>
        <CustomSelect customName={"ordinamento"} titolo={"Seleziona Ordinamento"} list={opzioniOrder} value={filtri.ordinamento} setValue={handleChange}/>
        <CustomSelect customName={"checkin"} titolo={"Stato Check-in"} list={opzioniCheckin} value={filtri.checkin} setValue={handleChange}/>
        <CustomSelect customName={"fursuit"} titolo={"Filtro per Fursuit"} list={opzioniFursuit} value={filtri.fursuit} setValue={handleChange}/>
        
        <div className="flex flex-col justify-end items-end basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full gap-2 mt-auto">
            <div className="flex gap-2">
                <button type="button"
                    onClick={() => {
                        setFiltri({ricerca:"",categoria:"",ordinamento:"",checkin:"",fursuit:""});
                        setUtentiFiltrati(utenti);
                    }}
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Reset Filtri
                </button>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Ricerca
                </button>
            </div>
        </div>
    </form>
  );
}
