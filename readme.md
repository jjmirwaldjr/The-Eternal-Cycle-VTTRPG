# The Eternal Cycle — Foundry VTT System

## Description
The Eternal Cycle is a custom tabletop RPG system designed for Foundry VTT. It utilizes a unique **D100-based dice system**, a **rune-based magic system**, and dynamic combat mechanics tailored for immersive storytelling and player agency.

## Features
- Custom Actor and Item sheets
- Dynamic Rune Deck system for spellcasting
- Custom Magic System that consumes elemental runes
- Stamina-based combat mechanics for Warriors
- Defense Roll system replacing static AC
- Tiered spellcasting with hybrid rune support
- Preloaded compendiums for items and abilities
- Designed for Foundry VTT version **12.331**

## Installation
1. Download or clone this repository into:
```
{FoundryVTT_Data}/systems/eternal-cycle
```
2. Open Foundry VTT, go to **Game Systems**, and install manually.
3. Create a new world using **The Eternal Cycle** system.

## File Structure
```
|-- module.json
|-- system.json
|-- scripts/
|   |-- system.js
|   |-- actor/
|       |-- actor.js
|       |-- actor-sheet.js
|   |-- item/
|       |-- item.js
|       |-- item-sheet.js
|   |-- helpers/
|       |-- rune-deck.js
|       |-- config.js
|       |-- magic-system.js
|-- templates/
|   |-- actor-sheet.html
|   |-- item-sheet.html
|-- packs/
|   |-- abilities.db
|   |-- items.db
```

## Current Status
> **Alpha Development** — Core systems are being tested and iterated.

## Roadmap
- UI improvements for rune management
- Spell creation tools
- Large-scale faction system integration
- Custom compendium browser support

## License
This system is being developed for private and public use under open development review.

## Credits
Created and maintained by **Jason Mirwald**.

---

*Grimoire, feel free to review repository structure, initialization logic, and system.json/module.json integrity.*
