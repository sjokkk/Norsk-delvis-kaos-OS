<h1 align="center">
  <a href="https://github.com/sjokkk/Norsk-delvis-kaos-OS/releases">
    <img src="https://github.com/CherryHQ/cherry-studio/blob/main/build/icon.png?raw=true" width="150" height="150" alt="banner" /><br>
  </a>
</h1>

<p align="center">
  <a href="https://github.com/sjokkk/Norsk-delvis-kaos-OS">GitHub</a> | 
  <a href="https://github.com/sjokkk/Norsk-delvis-kaos-OS/issues">Tilbakemeldinger</a>
</p>

# 🇳🇴 Norsk Mini OS

**Norsk Mini OS** er en forenklet norsk AI-assistent bygget for Windows 8.1 (32-bit).

Dette er en spesialtilpasset, lett versjon av Cherry Studio, optimalisert spesielt for eldre Windows-systemer og norske brukere.

## 🎯 Hovedmål

- ✅ **Windows 8.1 kompatibilitet** (32-bit arkitektur)
- ✅ **Norsk språk** som standard grensesnitt
- ✅ **Minimal størrelse** for portable USB-installasjoner
- ✅ **10 essensielle assistenter** (i stedet for 300+)
- ✅ **Ingen ekstra nedlastinger** - alt inkludert i én pakke
- ✅ **Lokale AI-modeller** støtte (Ollama, LM Studio)
- ✅ **Internasjonale AI-tjenester** (OpenAI, Anthropic, Google Gemini, etc.)

## 🚀 Funksjoner

### Inkluderte AI-assistenter
1. **Programmerings assistent** - Hjelp med koding og utvikling
2. **Skrive assistent** - Tekstredigering på norsk
3. **Generell assistent** - Allsidig hjelpeverktøy
4. **Data analytiker** - Dataanalyse og statistikk
5. **Oversetter** - Flerspråklig oversettelse
6. **Kreativ assistent** - Idéutvikling og brainstorming
7. **Dokumentasjons assistent** - Teknisk dokumentasjon
8. **Studie assistent** - Lærings- og studiehjel
9. **System administrator** - IT og systemadministrasjon
10. **Prosjekt assistent** - Prosjektplanlegging

### Støttede AI-leverandører
- OpenAI
- Anthropic (Claude)
- Google Gemini
- Ollama (lokale modeller)
- LM Studio (lokale modeller)
- Microsoft Azure OpenAI
- OpenRouter
- Groq
- Mistral AI
- Perplexity
- GitHub Copilot
- Hugging Face

## 📦 Installasjon

### Systemkrav
- **OS**: Windows 8.1 (32-bit)
- **RAM**: Minimum 2GB (4GB anbefalt)
- **Disk**: 500MB ledig plass
- **Node.js**: Bygget med Node.js 18+ (ikke nødvendig for sluttbrukere)

### Portable versjon (USB-minnepinne)
1. Last ned den portable `.exe` filen
2. Kopier til en USB-minnepinne
3. Kjør direkte uten installasjon
4. Alle innstillinger lagres på USB-en

### Bygg fra kildekode

```bash
# Klon repository
git clone https://github.com/sjokkk/Norsk-delvis-kaos-OS.git
cd Norsk-delvis-kaos-OS

# Installer avhengigheter
yarn install

# Bygg for Windows 32-bit
yarn build:win:ia32
```

## 🛠️ Utvikling

```bash
# Kjør i utviklingsmodus
yarn dev

# Kjør tester
yarn test

# Lint og formatér kode
yarn lint
```

## 📝 Endringer fra original Cherry Studio

### Fjernet
- ❌ Kinesiske språkfiler (zh-CN, zh-TW)
- ❌ Kinesiske AI-leverandører (Baidu, Alibaba, Tencent, etc.)
- ❌ 290+ unødvendige assistenter
- ❌ Maskinoversettelser til andre språk
- ❌ Mac og Linux bygg-konfigurasjoner
- ❌ 64-bit og ARM bygger

### Lagt til / Endret
- ✅ Norsk (nb-NO) som standardspråk
- ✅ Norsk grensesnitt og oversettelser
- ✅ 10 håndplukkede essensielle assistenter
- ✅ Windows 8.1 32-bit fokus
- ✅ Portable bygg som standard
- ✅ Redusert Node.js krav (22 → 18)
- ✅ Optimalisert for mindre størrelse

## 🙏 Takk til

Dette prosjektet er basert på [Cherry Studio](https://github.com/CherryHQ/cherry-studio) av CherryHQ.

Stor takk til det originale teamet for deres utmerkede arbeid!

## �� Lisens

Dette prosjektet er lisensiert under **GNU Affero General Public License v3.0** (AGPL-3.0).

Se [LICENSE](LICENSE) filen for detaljer.

## 🤝 Bidrag

Bidrag er velkomne! Vennligst:
1. Fork repository
2. Lag en branch for dine endringer
3. Send en Pull Request

## 📮 Kontakt

Har du spørsmål eller tilbakemeldinger? 
[Åpne en issue](https://github.com/sjokkk/Norsk-delvis-kaos-OS/issues)

---

**Merk**: Dette er en uavhengig fork optimalisert for norske brukere og eldre Windows-systemer. 
Det er ikke offisielt tilknyttet Cherry Studio eller CherryHQ.
