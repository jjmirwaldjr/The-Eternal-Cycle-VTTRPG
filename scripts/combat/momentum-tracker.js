export class MomentumTracker {
    static updateMomentum(actor, change) {
      const currentMomentum = actor.system.resources.momentum.value;
      const maxMomentum = actor.system.resources.momentum.max;
      
      // Apply momentum change with bounds checking
      const newMomentum = Math.clamped(currentMomentum + change, 0, maxMomentum);
      
      return actor.update({"system.resources.momentum.value": newMomentum});
    }
  }
  