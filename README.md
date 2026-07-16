## Bumi 🌴

A Shikaku puzzle game (Portuguese, azulejo-themed) — divide the grid into rectangles matching the numbered clues.

Being rewritten from a single-file HTML prototype (`index.html`, kept for reference during the port) into an Expo Router app targeting iOS, Android, and web, with Supabase for anonymous-first auth and progress sync, and a solver-verified level generator.

### Setup

```bash
npm install
npm run web      # or: npm run ios / npm run android
npm test         # unit tests for src/game/*
```

