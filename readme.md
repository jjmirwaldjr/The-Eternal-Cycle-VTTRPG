# The Eternal Cycle — Foundry VTT System

## Description
The Eternal Cycle is a custom tabletop RPG system designed for Foundry VTT. It utilizes a unique **D100-based dice system**, a **rune-based magic system**, and dynamic combat mechanics tailored for immersive storytelling and player agency.

## Features
- Custom Actor and Item sheets (Tailwind styled and upgraded for Foundry V12)
- Dynamic Rune Deck system with UI integration and macros
- Magic system using drawn runes with success/fizzle handling
- Stamina-based combat mechanics for Warriors
- Defense Roll system replacing static AC
- Tiered spellcasting with hybrid rune support
- Preloaded compendiums for items and abilities
- Localization support
- Custom HUD and Token controls for rune interactions
- Designed for Foundry VTT version **12.331**

## Installation
1. Download or clone this repository into:
```
{FoundryVTT_Data}/systems/eternal-cycle
```
2. Open Foundry VTT, go to **Game Systems**, and install manually via manifest URL or local installation.
3. Create a new world using **The Eternal Cycle** system.

## File Structure
```
|-- system.json
|-- scripts/
|   |-- eternal-cycle.js
|   |-- config.js
|   |-- actor/
|       |-- actor.js
|       |-- actor-sheet.js
|       |-- character-sheet.js
|   |-- item/
|       |-- item.js
|       |-- item-sheet.js
|   |-- system/
|       |-- rune-deck.js
|       |-- magic-system.js
|       |-- deck-hud.js
|       |-- data-model.js
|       |-- macros/
|           |-- reset-deck.js
|           |-- rune-macro.js
|-- templates/
|   |-- actor/
|       |-- actor-sheet.html
|   |-- item/
|       |-- item-sheet.html
|-- packs/
|   |-- abilities.db
|   |-- items.db
|-- languages/
|   |-- en.json
|-- styles/
|   |-- eternal-cycle.css
```

## Current Status
> **Alpha Development (v1.01)** — Fully Foundry-compatible with working rune system, magic logic, macros, and HUD integration.

## Roadmap
- Deck visualization overlays
- Rune animations and draw effects
- Advanced spell creation tools
- Faction system integration
- Custom compendium browser
- Localization expansions

## Change Log
### v1.01
- Foundry compatibility (v12.331 verified)
- Tailwind-styled actor and item sheets
- Rune deck system and HUD integration
- Macros auto-generated for GMs
- Refined directory structure and JS refactoring

## License
This system is being developed under open development review. See `LICENSE`.

## Credits
Created and maintained by **Jason Mirwald**.

## Repository
- GitHub: [https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG](https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG)
- Issue Tracker: [https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG/issues)


