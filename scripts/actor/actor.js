export class EternalCycleActor extends Actor {
    prepareData() {
        super.prepareData();
        
        const actorData = this;
        const systemData = actorData.system;
        
        // Prepare data based on actor type
        if (actorData.type === 'character') {
            this._prepareCharacterData(actorData);
        }
        else if (actorData.type === 'npc') {
            this._prepareNPCData(actorData);
        }
    }
    
    _prepareCharacterData(actorData) {
        const systemData = actorData.system;

        // Calculate attribute modifiers
        Object.entries(systemData.attributes).forEach(([attrKey, attribute]) => {
            attribute.mod = Math.floor((attribute.value - 10) / 2);
        });

        // Calculate skill totals
        Object.entries(systemData.skills).forEach(([skillKey, skill]) => {
            const attrMod = systemData.attributes[skill.attribute].mod;
            skill.total = skill.value + attrMod;
        });

        // Calculate combat stats
        const combat = systemData.combat;
        
        // Initiative modifier based on Dexterity
        combat.initiative.mod = systemData.attributes.dexterity.mod;
        
        // Defense modifier based on Dexterity
        combat.defense.mod = systemData.attributes.dexterity.mod;
    }

    _prepareNPCData(actorData) {
        // Add NPC specific calculations
    }
}    _prepareCommonData(actorData) {
        const systemData = actorData.system;
        
        // Calculate health percentage
        if (systemData.health) {
            systemData.health.pct = Math.round((systemData.health.value / systemData.health.max) * 100);
        }
    }

    _prepareCharacterData(actorData) {
        const systemData = actorData.system;
        
        // Make sure abilities exist
        if (!systemData.abilities) return;
        
        console.log("Calculating ability modifiers");
        
        // Calculate ability modifiers
        for (let [key, ability] of Object.entries(systemData.abilities)) {
            if (ability.value) {
                ability.mod = Math.floor((ability.value - 10) / 2);
                console.log(`${key}: ${ability.value} → mod: ${ability.mod}`);
            } else {
                ability.mod = 0;
            }
        }
    }

    _prepareNPCData(actorData) {
        // Add NPC specific calculations
    }

    _prepareMonsterData(actorData) {
        // Add Monster specific calculations
    }
}