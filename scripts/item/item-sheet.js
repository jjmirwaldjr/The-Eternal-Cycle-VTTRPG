export class EternalCycleItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["eternal-cycle", "sheet", "item"],
      width: 520,
      height: 480,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  get template() {
    // Use the generic template for all item types
    return `systems/eternal-cycle/templates/item/item-sheet.html`;
  }

  getData() {
    const context = super.getData();
    context.system = this.item.system;
    
    // Add the itemTypes to the context
    context.itemTypes = CONFIG.ETERNAL_CYCLE.itemTypes || {
      "weapon": "Weapon",
      "armor": "Armor",
      "ability": "Ability",
      "consumable": "Consumable",
      "equipment": "Equipment",
      "treasure": "Treasure"
    };
    
    return context;
  }
  async _updateObject(event, formData) {
    // Make sure type is defined
    if (formData.type === undefined && this.item.type) {
      formData.type = this.item.type
    }
    
    // Ensure a default type if none is set
    if (!formData.type) {
      formData.type = "equipment"; // Default to equipment if no type
      ui.notifications.warn("No item type specified, defaulting to 'equipment'")
    }
    
    return super._updateObject(event, formData)
  }
}