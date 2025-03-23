# The Eternal Cycle — Foundry VTT System

## Description
The Eternal Cycle is a custom tabletop RPG system designed for Foundry VTT. It utilizes a unique **D100-based dice system**, a **rune-based magic system**, and dynamic combat mechanics tailored for immersive storytelling and player agency.

## Features
- Custom Actor and Item sheets (Tailwind styled and upgraded for Foundry V12)
- Dynamic Rune Deck system for spellcasting
- Custom Magic System that consumes elemental runes
- Stamina-based combat mechanics for Warriors
- Defense Roll system replacing static AC
- Tiered spellcasting with hybrid rune support
- Preloaded compendiums for items and abilities
- Localization support
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
|-- templates/
|   |-- actor/
|       |-- actor-sheet.html
|       |-- character-sheet.html
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
> **Alpha Development (v1.01)** — Foundry compatible and testable. Initial UI enhancements complete.

## Roadmap
- Additional UI polish (animated sheet transitions)
- Improved rune management UI
- Spell creation tools
- Faction system integration
- Custom compendium browser support
- Expanded localization and multi-language support

## Change Log
### v1.01
- Initial stable integration with Foundry VTT v12.331
- Enhanced templates with Tailwind CSS
- Structured `system.json` for GitHub-hosted manifest and auto-updates
- Improved file structure consistency
- Added `languages/en.json` for localization readiness

## License
This system is being developed under open development review. See `LICENSE`.

## Credits
Created and maintained by **Jason Mirwald**.

## Repository
- GitHub: [https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG](https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG)
- Issue Tracker: [https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG/issues](https://github.com/jjmirwaldjr/The-Eternal-Cycle-VTTRPG/issues)

