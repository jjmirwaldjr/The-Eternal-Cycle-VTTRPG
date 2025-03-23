
export function createDrawRuneMacro() {
    const command = `
      const rune = game.eternalCycleRuneDeck.draw(1);
      if (rune.length > 0) {
        ui.notifications.info(\`Drew rune: \${rune[0]}\`);
        ChatMessage.create({
          content: \`<strong>\${game.user.name}</strong> drew a rune: <span style="color:gold;">\${rune[0]}</span>\`
        });
      } else {
        ui.notifications.warn("Rune deck is empty! Reset the deck first.");
      }
    `;
  
    const macroData = {
      name: "Draw Rune",
      type: "script",
      img: "icons/magic/symbols/runes-circle-yellow.webp",
      command,
      flags: { "eternal-cycle.macro": true }
    };
  
    return Macro.create(macroData);
  }
  