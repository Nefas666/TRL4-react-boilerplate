# Come caricare il video introduttivo su Supabase

Questa guida spiega come caricare il video di benvenuto che apparirà automaticamente quando gli utenti visitano il sito.

## Prerequisiti

1. Accesso al progetto Supabase
2. Video pronto per il caricamento (formato MP4 consigliato)
3. Script SQL eseguito per creare il bucket

## Passo 1: Eseguire lo script SQL

Prima di caricare il video, devi creare il bucket di storage:

1. Vai su Supabase Dashboard
2. Seleziona il tuo progetto
3. Vai su **SQL Editor**
4. Esegui lo script `scripts/008_create_intro_video_bucket.sql`

Questo creerà un bucket pubblico chiamato `intro-videos` con le policy di accesso corrette.

## Passo 2: Caricare il video

### Opzione A: Tramite Dashboard Supabase

1. Vai su **Storage** nella sidebar di Supabase
2. Seleziona il bucket `intro-videos`
3. Clicca su **Upload file**
4. Carica il tuo video con il nome **`welcome-video.mp4`**
   - ⚠️ **IMPORTANTE**: Il nome del file deve essere esattamente `welcome-video.mp4`
5. Conferma il caricamento

### Opzione B: Tramite Supabase CLI

\`\`\`bash
# Installa Supabase CLI se non l'hai già fatto
npm install -g supabase

# Login
supabase login

# Carica il video
supabase storage upload intro-videos/welcome-video.mp4 ./path/to/your/video.mp4
\`\`\`

## Passo 3: Verifica

Dopo il caricamento, il video sarà accessibile all'URL:

\`\`\`
https://[YOUR_SUPABASE_URL]/storage/v1/object/public/intro-videos/welcome-video.mp4
\`\`\`

Puoi testare l'URL nel browser per verificare che il video sia accessibile.

## Passo 4: Test sul sito

1. Apri il sito in una finestra di navigazione in incognito
2. Il video dovrebbe apparire automaticamente in una modale dopo 1 secondo
3. Testa le funzionalità:
   - ✅ Pulsante **Minimize** (riduce il video in basso a destra)
   - ✅ Pulsante **Close** (chiude il video e non lo mostra più)
   - ✅ Pulsante **Maximize** (dal player minimizzato, torna alla modale completa)

## Note importanti

- **Nome file**: Il componente cerca specificamente `welcome-video.mp4`. Se usi un nome diverso, devi aggiornare la costante `INTRO_VIDEO_URL` in `components/intro-video-modal.tsx`
- **Formato video**: MP4 è il formato più compatibile. Assicurati che il video sia ottimizzato per il web
- **Dimensioni**: Mantieni il video sotto i 50MB per tempi di caricamento ottimali
- **localStorage**: Il video non verrà mostrato di nuovo se l'utente clicca "Close". Per testare di nuovo, cancella il localStorage del browser o usa la navigazione in incognito

## Risoluzione problemi

### Il video non appare

1. Verifica che lo script SQL sia stato eseguito correttamente
2. Controlla che il file sia stato caricato con il nome corretto
3. Verifica l'URL del video nel browser
4. Controlla la console del browser per eventuali errori

### Il video non si carica

1. Verifica che il formato sia MP4
2. Controlla che il video non sia troppo grande
3. Verifica le policy di storage su Supabase

### Voglio cambiare il video

1. Carica un nuovo file con lo stesso nome `welcome-video.mp4` (sovrascriverà il precedente)
2. Oppure carica con un nome diverso e aggiorna `INTRO_VIDEO_URL` nel componente
