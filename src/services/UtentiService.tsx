export async function fetchUtenti(): Promise<UtenteModel[]> {

    const urlUtenti = (process.env.BASE_URL || "") + (process.env.PUBLIC_LISTA_UTENTI || "");

    if(urlUtenti.length<1){
        return [];
    }
    const res = await fetch(urlUtenti, {
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        throw new Error('Errore nella fetch');
    }

    const tempData: UtenteModel[] = await res.json();

    return tempData;
}