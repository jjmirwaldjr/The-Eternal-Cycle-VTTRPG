export class EternalCycleItemCreationHelper {
    static async createItemTypeDialog() {
      // Define the available item types
      const itemTypes = CONFIG.ETERNAL_CYCLE.itemTypes || {
        "weapon": "Weapon",
        "armor": "Armor",
        "ability": "Ability",
        "equipment": "Equipment"
      };
    
      // Create dialog content
      const content = `
        <form>
          <div class="form-group">
            <label>Item Type:</label>
            <select id="item-type" name="type">
              ${Object.entries(itemTypes).map(([key, label]) => `<option value="${key}">${label}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" name="name" value="New Item">
          </div>
        </form>
      `;
    
      // Show dialog
      return new Promise((resolve) => {
        new Dialog({
          title: "Create New Item",
          content: content,
          buttons: {
            create: {
              label: "Create",
              callback: html => {
                const form = html.find("form")[0];
                const type = form.type.value;
                const name = form.name.value;
              
                // Ensure type is defined
                if (!type) {
                  ui.notifications.error("Item type must be specified");
                  return resolve(null);
                }
              
                resolve({
                  name: name || "New Item",
                  type: type
                });
              }
            },
            cancel: {
              label: "Cancel",
              callback: () => resolve(null)
            }
          },
          default: "create"
        }).render(true);
      });
    }
}