# Neste Steg for Norsk Mini OS

## 🎯 Hva er gjort

Du har nå en **forenklet, norsk versjon av Cherry Studio** som er konfigurert for:
- ✅ Norsk språk som standard
- ✅ 10 essensielle AI-assistenter (i stedet for 300+)
- ✅ 12 internasjonale AI-leverandører (ingen kinesiske)
- ✅ Windows 8.1 32-bit portable bygge-konfigurasjon
- ✅ ~56,000 linjer kode fjernet (92% reduksjon)

## 📋 Hva må gjøres videre

### 1. Installer avhengigheter (Høy prioritet)

Før du kan bygge eller teste:

```bash
# I prosjektmappen
yarn install
```

**Problem hvis det feiler**: Noen pakker krever tilgang til CDN-er som kan være blokkert.

**Løsninger**:
- Bruk en annen nettverkstilkobling
- Sett opp proxy hvis nødvendig
- Eller bruk `npm install --legacy-peer-deps` i stedet for yarn

### 2. Test at det kompilerer

```bash
# Test TypeScript-kompilering
yarn typecheck

# Test bygging (uten faktisk å lage installer)
yarn build
```

### 3. Bygge for Windows 32-bit

```bash
# Bygg portable Windows 32-bit versjon
yarn build:win:ia32
```

Dette vil lage en `.exe` fil i `dist/` mappen som kan kopieres til en USB-pinne.

### 4. Utvid norsk oversettelse (Viktig!)

For øyeblikket er kun ~200 av 4,800 UI-strenger oversatt.

**Hvor du finner dem**:
- `src/renderer/src/i18n/locales/en-us.json` - Original engelsk (4,844 linjer)
- `src/renderer/src/i18n/locales/nb-no.json` - Din norske (203 linjer)

**Hva du bør gjøre**:
1. Åpne begge filene
2. Kopier strukturen fra `en-us.json`
3. Oversett nøkler du bruker mest først
4. Prioriter: settings, common, error, message, assistants

**Eksempel på hva som må oversettes**:
```json
// I en-us.json
"message": {
  "copy": "Copy",
  "edit": "Edit"
}

// I nb-no.json
"message": {
  "copy": "Kopier",
  "edit": "Rediger"
}
```

### 5. Test på Windows 8.1 (Kritisk!)

**Mulig problem**: 
- Node.js 18+ kan ikke støtte Windows 8.1 godt
- Electron 38 kan ha problemer på Windows 8.1

**Løsning hvis problemer**:
1. Prøv å downgrade Electron til versjon 22 eller eldre
2. I `package.json`, endre:
```json
"devDependencies": {
  "electron": "22.3.27"  // i stedet for "38.4.0"
}
```

### 6. Optimaliser størrelse

**Pakker du kan vurdere å fjerne** (for mindre størrelse):
- `@langchain/*` pakker (hvis du ikke bruker LangChain)
- `youtubei.js` (hvis YouTube ikke er nødvendig)
- `sharp` (hvis bildeprosessering ikke trengs)

I `package.json`, fjern fra `devDependencies` eller `dependencies`.

### 7. Fjern ubrukt kode

**Mapper som kan inneholde ubrukt kode**:
```
src/main/providers/        # Kinesiske leverandører
src/renderer/src/providers/ # UI for fjernede leverandører
```

Søk etter referanser til fjernede leverandører (f.eks. `baidu`, `alibaba`, `tencent`) og fjern dem.

## 🔧 Vanlige problemer og løsninger

### Problem 1: "yarn install" feiler
**Løsning**: Prøv `npm install` eller sett opp offline cache.

### Problem 2: Build feiler med "ia32 not supported"
**Løsning**: Noen pakker mangler 32-bit støtte. Du må enten:
- Fjerne pakken
- Finne et alternativ
- Bygge kun 64-bit (men da virker det ikke på Windows 8.1 32-bit)

### Problem 3: Appen starter, men er på engelsk
**Løsning**: 
1. Sjekk at `packages/shared/config/constant.ts` har `defaultLanguage = 'nb-NO'`
2. Slette app-data og start på nytt

### Problem 4: Mange UI-elementer mangler oversettelse
**Løsning**: Dette er forventet! Kun 200/4800 strenger er oversatt. Se steg 4.

## 📚 Ressurser

### Filer du ofte vil redigere:
- `src/renderer/src/i18n/locales/nb-no.json` - Norske oversettelser
- `resources/data/agents-nb.json` - Norske AI-assistenter
- `electron-builder.yml` - Bygg-konfigurasjon
- `package.json` - Avhengigheter og scripts

### Kommandoer du ofte vil bruke:
```bash
yarn dev              # Kjør i utviklingsmodus (med hot-reload)
yarn typecheck        # Sjekk TypeScript-feil
yarn lint             # Sjekk og fikse kode-stil
yarn build            # Bygg appen
yarn build:win:ia32   # Bygg Windows 32-bit portable
```

## 🎯 Anbefalte prioriteter

1. **Først**: Få `yarn install` til å virke
2. **Deretter**: Test `yarn dev` for å se appen kjøre
3. **Så**: Utvid norske oversettelser (minst 500-1000 strenger)
4. **Videre**: Test `yarn build:win:ia32`
5. **Til slutt**: Test på faktisk Windows 8.1 32-bit maskin

## 💡 Tips

- **Start enkelt**: Få appen til å kjøre først, optimaliser senere
- **Test ofte**: Kjør `yarn dev` etter hver endring
- **Git commit ofte**: Hver gang noe virker, commit det
- **Be om hjelp**: Åpne issues på GitHub hvis du står fast

## 🚀 Når alt virker

Når du har:
1. ✅ Bygget en Windows 32-bit portable `.exe`
2. ✅ Testet på Windows 8.1
3. ✅ Oversatt de viktigste UI-elementene

Da kan du:
- Lage en release på GitHub
- Dele `.exe` filen (den er portable!)
- Kopiere hele mappen til USB-pinne
- Distribuere til andre norske brukere

## 📞 Trenger du mer hjelp?

Se `IMPLEMENTATION_STATUS.md` for detaljert teknisk informasjon om hva som er gjort og hva som gjenstår.

Lykke til! 🇳🇴
