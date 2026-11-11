# Setup Iniziale con Docker + Vite

Questo progetto usa un container Docker per lavorare in un ambiente Node.js isolato e ripetibile.

## Prerequisiti

- Docker Desktop installato e in esecuzione
- Git

## Avvio del container

Dal root del progetto esegui:

```bash
docker-compose up -d
```

## Accesso al terminale del container

```bash
docker-compose exec dev-env bash
```

Una volta entrato nel container, la directory di lavoro è `/app`.

## Creazione di un nuovo progetto Vite

Dopo essere entrato nel container, crea un nuovo progetto React con Vite:

```bash
npm create vite@latest nuovo-progetto -- --template react
```

Sostituisci `nuovo-progetto` con il nome che desideri.

## Esecuzione di un progetto esistente

### 1. Entra nella cartella del progetto

```bash
cd nome-del-tuo-progetto
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Avvia il server di sviluppo

```bash
npm run dev -- --host
```


### 4. Installzione tailwind(v4+)
```bash
npm install tailwindcss @tailwindcss/vite
```

> Il flag `--host` è fondamentale per rendere l’app disponibile dal browser del tuo PC, ad esempio su `http://localhost:5173`.

## Gestione delle porte

Vite usa di default la porta `5173`. Se avvii più progetti contemporaneamente, il server assegnerà automaticamente la porta successiva (`5174`, `5175`, ecc.).

Assicurati che il tuo `docker-compose.yaml` abbia il range di porte configurato così:

```yaml
ports:
  - "5173-5180:5173-5180"
```

## Struttura consigliata

```text
/Test React
├── docker-compose.yaml
├── Dockerfile
├── Readme.md
└── progetti/
```

## Suggerimento extra

Se vuoi automatizzare l’avvio del progetto, puoi creare uno script bash come `create-app.sh` dentro la cartella del progetto per eseguire in automatico `npm install` e `npm run dev -- --host`.

## Note finali

- Ogni progetto Vite va creato o lanciato dentro la cartella montata `/app`.
- Se il server non è raggiungibile dal browser, verifica che il container sia in esecuzione e che la porta non sia già occupata.
- In caso di più progetti, controlla la porta riportata nel terminale dopo l’avvio.
's