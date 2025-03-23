export class RuneDeck {
    constructor() {
      this.deck = [];
      this.discard = [];
    }
  
    initializeDeck(runeTypes) {
      this.deck = runeTypes.flatMap(type => Array(10).fill(type)); // Example: 10 of each rune
      this.shuffle();
    }
  
    shuffle() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
    }
  
    draw(count = 1) {
      const drawnRunes = this.deck.splice(0, count);
      this.discard.push(...drawnRunes);
      return drawnRunes;
    }
  
    reset() {
      this.deck.push(...this.discard);
      this.discard = [];
      this.shuffle();
    }
  }
  
  Hooks.once("ready", () => {
    game.eternalCycleRuneDeck = new RuneDeck();
    game.eternalCycleRuneDeck.initializeDeck(["fire", "water", "earth", "air", "arcane"]);
    console.log("Eternal Cycle | Rune Deck Initialized");
  });
  