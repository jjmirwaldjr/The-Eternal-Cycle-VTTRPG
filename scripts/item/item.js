export class EternalCycleItem extends Item {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["eternal-cycle", "sheet", "item"]
        });
    }

    prepareData() {
        super.prepareData();
        // Placeholder for item-specific data calculations
    }

    /** @override */
    async _preCreate(data, options, userId) {
        const updateData = foundry.utils.deepClone(data);

        const validTypes = Object.keys(CONFIG.ETERNAL_CYCLE.itemTypes);
        if (!updateData.type || !validTypes.includes(updateData.type)) {
            console.log(`Eternal Cycle | Setting default item type for ${data.name || "new item"}`);
            updateData.type = validTypes[0];
        }

        return super._preCreate(updateData, options, userId);
    }
}
