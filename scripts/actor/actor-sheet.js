export class EternalCycleActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["eternal-cycle", "sheet", "actor"],
            template: `systems/eternal-cycle/templates/actor/${this.type}-sheet.html`,
            width: 600,
            height: 600,
            resizable: true,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
        });
    }

    get template() {
        return `systems/eternal-cycle/templates/actor/${this.actor.type}-sheet.html`;
    }

    getData() {
        const context = super.getData();
        context.system = this.actor.system;
        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);
        
        // Add debugging to check if elements are found
        const skillItems = html.find('.skill-item');
        console.log("Found skill-item elements:", skillItems.length);
        
        // Attach click handlers
        skillItems.click(this._onSkillRoll.bind(this));
        
        // Alternative selectors in case class names changed
        html.find('.rollable, [data-action="roll"]').click(this._onSkillRoll.bind(this));
        
        // Add equipment listeners
        if (this.actor.isOwner) {
            html.find('.item-slot').click(this._onItemSlotClick.bind(this));
            html.find('.item-slot .item-delete').click(this._onItemDelete.bind(this));
        }
    }

    _onChangeInput(event) {
        const input = event.target;
        const value = input.value;
        const fieldName = input.name;
        
        this.actor.update({ [fieldName]: value });
    }

    async _onSkillRoll(event) {
        event.preventDefault();
        const element = event.currentTarget.closest(".skill-item");
        const skillId = element.dataset.skill;
    
        console.log("Rolling skill:", skillId);
    
        // Get the skill and its associated ability
        const skill = this.actor.system.skills[skillId];
        const abilityId = skill.ability;
        const abilityMod = this.actor.system.abilities[abilityId].mod || 0;
        const skillValue = skill.value || 0;
    
        // Build the formula - adjust to fit your system
        const formula = `1d20 + ${skillValue} + ${abilityMod}`;
    
        // Create and roll
        let roll = new Roll(formula);
        await roll.evaluate({async: true});
    
        await roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: `${skillId.charAt(0).toUpperCase() + skillId.slice(1)} Check (${abilityId})`,
            content: `Roll: ${roll.total}`
        });
    }
    _onItemSlotClick(event) {
        event.preventDefault();
        const slot = event.currentTarget.dataset.slot;
        
        // Create dialog for item selection
        const items = this.actor.items.filter(i => this._isItemValidForSlot(i, slot));
        this._createItemSelectionDialog(items, slot);
    }

    _isItemValidForSlot(item, slot) {
        // Logic to determine if item can go in slot
        return true; // We'll implement proper validation later
    }

    _createItemSelectionDialog(items, slot) {
        // Create dialog for selecting items
        const options = items.map(i => `<option value="${i.id}">${i.name}</option>`).join('');
        
        new Dialog({
            title: "Select Item",
            content: `<select id="item-select">${options}</select>`,
            buttons: {
                equip: {
                    label: "Equip",
                    callback: (html) => {
                        const itemId = html.find('#item-select').val();
                        this._equipItem(itemId, slot);
                    }
                }
            }
        }).render(true);
    }

    _equipItem(itemId, slot) {
        // Handle equipping items
        this.actor.update({
            [`system.equipment.${slot}`]: itemId
        });
    }
}