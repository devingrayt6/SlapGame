//Player object
let mrMeeseeks = {
  name: 'Mr Meeseeks',
  health: '1200',
  attacks: {
    golf: {
      type: 'attack',
      damage: '20',
      defense: '0',
      timeout: '3100',
      loadTime: '4200',
      description: "Take off all of your opponents strokes from their golf game...",
    },
    advice: {
      type: 'attack',
      damage: '7',
      defense: '0',
      timeout: '1000',
      loadTime: '1500',
      description: 'Provide extremely good advice for your opponent',
    },
    pain: {
      type: 'attack',
      damage: '16',
      defense: '0',
      timeout: '2100',
      loadTime: '3100',
      description: 'Existance is pain!!',
    },
  },
  defenses: {
    immortal: {
      type: 'defense',
      damage: '0',
      defense: '17',
      timeout: '1000',
      loadTime: '4500',
      description: "It's getting weirrrrd",
    },
    protect: {
      type: 'defense',
      damage: '0',
      defense: '12',
      timeout: '2500',
      loadTime: '2000',
      description: 'Protect me from the law',
    },
    mrMeeseeks: {
      type: 'defense',
      damage: '0',
      defense: '9',
      timeout: '1300',
      loadTime: '3500',
      description: 'Can do!',
    }
  },
}
