Il progetto è stato inizializzato col framework Next.js con `create-next-app`,
integrando le librerie "tailwindcss" (per il css) e "lucice-react" (per le icone).

La WebApp parte dalla Homepage con l'unica opzione disponibile della visualizzazione della pagina lista utenti,
che viene chiamata lato server (impostato in cache di 60 secondi) e esposto lato client.

(Il file env è già incluso per facilitare la configurazione)

#TODO
-Ricerca Utenti
-Filtro Utenti
-Styling
-Debug e Testing


#Per avviare il progetto eseguire i seguenti step:
##Installazione delle librerie necessarie
1.npm run install

##Creazione build
2.npm run build

##Avvio del progetto
3.npm start


#Url raggiungibili:
Homepage: http://localhost:3000
Lista Utenti: http://localhost:3000/utenti