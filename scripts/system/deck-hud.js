Hooks.on("renderSceneControls", (app, html, data) => {
    const runeHudButton = $(`
      <li class="control-tool" title="Draw Rune">
        <i class="fas fa-gem"></i>
      </li>
    `);
  
    runeHudButton.on("click", () => {
      const drawnRune = game.eternalCycleRuneDeck.draw(1);
      if (drawnRune.length > 0) {
        ChatMessage.create({
          content: `<strong>${game.user.name}</strong> draws a rune: <span style=\"color:gold;\">${drawnRune[0]}</span>`
        });
        ui.notifications.info(`Rune drawn: ${drawnRune[0]}`);
      } else {
        ui.notifications.warn("Rune deck is empty! Consider resetting.");
      }
    });
  
    html.find(".main-controls").append(runeHudButton);
  });
  
  Hooks.on("renderTokenHUD", (hud, html, tokenData) => {
    const deckResetButton = $(`
      <div class="control-icon" title="Reset Rune Deck">
        <i class="fas fa-sync-alt"></i>
      </div>
    `);
  
    deckResetButton.on("click", () => {
      game.eternalCycleRuneDeck.reset();
      ui.notifications.info("Rune deck reset.");
      ChatMessage.create({
        content: `<strong>${game.user.name}</strong> has reset the rune deck.`
      });
    });
  
    html.find(".col.right" ).append(deckResetButton);
  });
  