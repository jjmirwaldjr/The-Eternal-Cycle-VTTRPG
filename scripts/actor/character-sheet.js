import { EternalCycleActorSheet } from "./actor-sheet.js";

export class EternalCycleCharacterSheet extends EternalCycleActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["eternal-cycle", "sheet", "actor", "character"],
      width: 720,
      height: 680,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes" }]
    });
  }
  
  // Implement the _onSkillRoll method to handle dice rolls
  _onSkillRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const skill = element.dataset.skill;
    const attribute = element.dataset.attribute;
    
    // Get relevant actor data
    const attrValue = this.actor.system.attributes[attribute].value;
    const skillValue = this.actor.system.skills[skill].value;
    
    // Construct roll formula based on your system
    let formula = `2d10 + ${attrValue} + ${skillValue}`;
    
    // Create roll and display in chat
    let roll = new Roll(formula);
    roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${skill.capitalize()} Skill Check`
    });
  }
}
