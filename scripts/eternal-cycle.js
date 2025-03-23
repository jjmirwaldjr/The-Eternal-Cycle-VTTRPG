// Imported Actors
import { EternalCycleActor } from "./actor/actor.js";
import { EternalCycleActorSheet } from "./actor/actor-sheet.js";
// Imported Items
import { EternalCycleItem } from "./item/item.js";
import { EternalCycleItemSheet } from "./item/item-sheet.js";
import { EternalCycleItemCreationHelper } from "./item/item-creations.js";

//Import Magic Integration
import { MagicSystem } from "./system/magic-system.js";
import { RuneDeck } from "./system/rune-deck.js";

import { EternalCycleCharacterSheet } from "./actor/character-sheet.js";
import "./config.js";

Hooks.once("init", function() {
  console.log("Eternal Cycle | Initializing System v1.01");

  // Define custom Document classes
  CONFIG.Actor.documentClass = EternalCycleActor;
  CONFIG.Item.documentClass = EternalCycleItem;

  // Register actor sheet
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("eternal-cycle", EternalCycleCharacterSheet, {
    types: ["character", "npc", "monster"],
    makeDefault: true
  });

  // Register item sheet
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("eternal-cycle", EternalCycleItemSheet, {
    makeDefault: true
  });

  // Register system settings
  game.settings.register("eternal-cycle", "momentumMax", {
    name: "Maximum Momentum",
    hint: "The maximum momentum a character can accumulate",
    scope: "world",
    config: true,
    type: Number,
    default: 5,
    range: {
      min: 3,
      max: 10,
      step: 1
    }
  });
});

Hooks.once("ready", function() {
  console.log("Eternal Cycle | System Ready");
});

Hooks.on("preCreateActor", (_, data) => {
  if (!data.type) {
    data.type = "character";
  }
  return true;
});

Hooks.on("renderItemDirectory", (app, html, data) => {
  const createBtn = html.find(".header-actions .create-document");

  createBtn.off("click");
  createBtn.on("click", async (event) => {
    event.preventDefault();

    try {
      const itemData = await EternalCycleItemCreationHelper.createItemTypeDialog();
      if (itemData) {
        const created = await Item.create(itemData);
        if (created && app.rendered) {
          await app.render(true);
          app.documents.get(created.id)?.element?.addClass("selected");
        }
      }
    } catch (error) {
      console.error("Eternal Cycle | Error creating item:", error);
    }
  });
});

Hooks.on("preCreateItem", (item, data) => {
  if (!data.type) {
    data.type = "equipment";
  }
  return true;
});
