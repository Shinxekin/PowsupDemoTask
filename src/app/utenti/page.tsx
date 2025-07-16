import { fetchUtenti } from "@/services/UtentiService";
import ListaUtenti from "@/components/ListaUtenti";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function PageListaUtenti() {


  const utenti = await fetchUtenti();

  return (
    <div className="text-center space-y-10">
      <Link href="/" style={{position:'absolute',top:20,left:20}}>
        <ArrowLeft size={24} color="white"/>
      </Link>
      <p className="text-2xl font-mono">Lista Utenti</p>
      <ListaUtenti utenti={utenti}/>
    </div>
  );
}