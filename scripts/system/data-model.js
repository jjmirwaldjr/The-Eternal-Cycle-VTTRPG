export const EternalCycleModel = {
    Actor: {
      character: {
        // Define character attributes based on your system
        attributes: {
          strength: { value: 10, max: 20 },
          dexterity: { value: 10, max: 20 },
          // Add other attributes
        },
        skills: {
          type: Object,
          default: {
            // Core Skills (add all skills from your system)
            athletics: { value: 0, ability: "strength" },
            acrobatics: { value: 0, ability: "dexterity" },
            stealth: { value: 0, ability: "dexterity" },
            sleightOfHand: { value: 0, ability: "dexterity" },
            arcana: { value: 0, ability: "intelligence" },
            history: { value: 0, ability: "intelligence" },
            investigation: { value: 0, ability: "intelligence" },
            nature: { value: 0, ability: "intelligence" },
            religion: { value: 0, ability: "intelligence" },
            animalHandling: { value: 0, ability: "wisdom" },
            insight: { value: 0, ability: "wisdom" },
            medicine: { value: 0, ability: "wisdom" },
            perception: { value: 0, ability: "wisdom" },
            survival: { value: 0, ability: "wisdom" },
            deception: { value: 0, ability: "charisma" },
            intimidation: { value: 0, ability: "charisma" },
            performance: { value: 0, ability: "charisma" },
            persuasion: { value: 0, ability: "charisma" }
          }
        },        resources: {
          // Define health, mana, momentum, etc.
          health: { value: 10, max: 10 },
          momentum: { value: 0, max: 5 }
        },
        // Add other character properties
      },
      // Add other actor types (NPC, creatures, etc.)
    },
    Item: {
      weapon: {
        damage: "",
        damageType: "",
        properties: []
      },
      // Add other item types (armor, spells, etc.)
    }
  };
  