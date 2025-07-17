import Image from 'next/image';

type Props = {
  utente: UtenteModel;
};

export default function UtenteCard({ utente }: Props) {
  return (
    <div className={`utente-card border-2 ${utente.kind==="staff" ? 'border-yellow-500':(utente.kind==="dealer"?'border-green-800':'border-[#1E2939]')}`}>
      <Image src={utente.profilePictureUrl||"/images/default.png"} alt={utente.fursonaName} width={300} height={300} />
      <p className="utente-name line-clamp-2 h-[3rem] flex items-center">
        {utente.fursonaName}
      </p>
      <p className="utente-ruolo">{utente.kind}</p>
    </div>
  );
}