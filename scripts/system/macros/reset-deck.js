export function createResetDeckMacro() {
    const command = `
      game.eternalCycleRuneDeck.reset();
      ui.notifications.info("Rune deck has been reset.");
      ChatMessage.create({
        content: \`<strong>\${game.user.name}</strong> reset the rune deck.\`
      });
    `;
  
    const macroData = {
      name: "Reset Rune Deck",
      type: "script",
      img: "icons/magic/symbols/runes-square-red.webp",
      command,
      flags: { "eternal-cycle.macro": true }
    };
  
    return Macro.create(macroData);
  }
  
  Hooks.once("ready", () => {
    if (game.user.isGM) {
      console.log("Eternal Cycle | Creating Rune Deck Macros");
      createDrawRuneMacro();
      createResetDeckMacro();
    }
  });
  