Il progetto è inizializzato col framework Next.js con `create-next-app`.

Sono integrate le librerie "tailwindcss" (per il css) e "lucide-react" (per le icone).

La WebApp parte dalla Homepage con l'unica opzione richiesta della pagina lista utenti,<br/>
che viene chiamata lato server e con una gestione di cache per evitare troppe chiamate (impostata cache di 60 secondi) e esposto lato client.

(Il file env è già incluso per facilitare la configurazione)


#Per avviare il progetto eseguire i seguenti step:<br/>
##Installazione delle librerie necessarie<br/>
1.npm install

##Creazione build<br/>
2.npm run build

##Avvio del progetto<br/>
3.npm start


#Url raggiungibili:<br/>
Homepage: http://localhost:3000<br/>
Lista Utenti: http://localhost:3000/utenti