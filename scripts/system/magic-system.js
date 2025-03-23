export class MagicSystem {
    static castSpell(actor, spellData) {
      const runesRequired = spellData.runes;
      const drawnRunes = game.eternalCycleRuneDeck.draw(runesRequired.length);
  
      const success = drawnRunes.every(r => runesRequired.includes(r));
  
      if (success) {
        ui.notifications.info(`${actor.name} successfully casts ${spellData.name}!`);
      } else {
        ui.notifications.warn(`${actor.name}'s spell ${spellData.name} fizzles.`);
        game.eternalCycleRuneDeck.discard.push(...drawnRunes);
      }
  
      return success;
    }
  }
  