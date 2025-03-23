export class EternalCycleItem extends Item {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["eternal-cycle", "sheet", "item"]
        });
    }

    prepareData() {
        super.prepareData();
        // Item-specific data preparation
    }

    /** @override */
    async _preCreate(data, options, userId) {
        // Make a copy of data to avoid modifying the original
        const updateData = foundry.utils.deepClone(data);
        
        // Ensure type is always set to a valid type
        if (!updateData.type || !CONFIG.Item.types.includes(updateData.type)) {
            console.log(`Eternal Cycle | Setting default item type for ${data.name || "new item"}`);
            updateData.type = CONFIG.Item.types[0];
        }
        
        // Pass the updated data to super
        return super._preCreate(updateData, options, userId);
    }
}