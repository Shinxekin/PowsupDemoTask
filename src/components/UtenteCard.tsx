import Image from 'next/image';

type Props = {
  utente: UtenteModel;
};

export default function UtenteCard({ utente }: Props) {
  return (
    <div className='utente-card'>
      <Image
        src={utente.profilePictureUrl||"/images/default.png"}
        alt={utente.fursonaName}
        width={300} height={300}
      />
      <p className="utente-name">{utente.fursonaName}</p>
    </div>
  );
}