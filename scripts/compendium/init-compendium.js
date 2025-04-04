export async function initializeCompendium() {
    const pack = game.packs.get("eternal-cycle.items");
    if (!pack) return;

    const weapons = [
        {
            name: "Dagger",
            type: "weapon",
            img: "icons/weapons/daggers/dagger-simple.webp",
            data: {
                damage: "1d100",
                range: "Melee",
                type: "Light",
                properties: ["Light", "Finesse"],
                description: "A simple but effective blade",
                cost: {
                    gold: 2,
                    silver: 0,
                    copper: 0
                },
                weight: 1
            }
        },
        {
            name: "Longsword",
            type: "weapon",
            img: "icons/weapons/swords/sword-longsword.webp",
            data: {
                damage: "1d100",
                range: "Melee",
                type: "Medium",
                properties: ["Versatile"],
                description: "A classic warrior's blade",
                cost: {
                    gold: 15,
                    silver: 0,
                    copper: 0
                },
                weight: 3
            }
        }
    ];

    for (let weapon of weapons) {
        await Item.create(weapon, {pack: pack.collection});
    }
}
