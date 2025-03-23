export class EternalCycleActor extends Actor {
    prepareData() {
        super.prepareData();
        const actorData = this;
        this._prepareCommonData(actorData);

        switch (actorData.type) {
            case 'character':
                this._prepareCharacterData(actorData);
                break;
            case 'npc':
                this._prepareNPCData(actorData);
                break;
            case 'monster':
                this._prepareMonsterData(actorData);
                break;
            default:
                console.warn(`Eternal Cycle | Unknown actor type: ${actorData.type}`);
        }
    }

    _prepareCommonData(actorData) {
        const systemData = actorData.system;
        if (systemData.health) {
            systemData.health.pct = Math.round((systemData.health.value / systemData.health.max) * 100);
        }
    }

    _prepareCharacterData(actorData) {
        const systemData = actorData.system;

        if (systemData.attributes) {
            Object.entries(systemData.attributes).forEach(([key, attr]) => {
                attr.mod = Math.floor((attr.value - 10) / 2);
            });
        }

        if (systemData.skills) {
            Object.entries(systemData.skills).forEach(([key, skill]) => {
                const attrMod = systemData.attributes[skill.attribute]?.mod || 0;
                skill.total = skill.value + attrMod;
            });
        }

        if (systemData.combat) {
            const combat = systemData.combat;
            combat.initiative.mod = systemData.attributes.dexterity?.mod || 0;
            combat.defense.mod = systemData.attributes.dexterity?.mod || 0;
        }
    }

    _prepareNPCData(actorData) {
        // NPC-specific logic to be implemented
    }

    _prepareMonsterData(actorData) {
        // Monster-specific logic to be implemented
    }
}
