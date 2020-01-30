//Player object
let morty = {
  name: 'Morty Smith',
  health: '1200',
  attacks: {
    purge: {
      type: 'attack',
      damage: '50',
      defense: '0',
      timeout: '3500',
      loadTime: '4700',
      description: 'You just purged morty...',
    },
    crash: {
      type: 'attack',
      damage: '9',
      defense: '0',
      timeout: '1000',
      loadTime: '1500',
      description: 'Crash land spaceship into opponent',
    },
    weakHit: {
      type: 'attack',
      damage: '9',
      defense: '0',
      timeout: '1000',
      loadTime: '1500',
      description: 'You may be weak...but you can still do damage!',
    },
    crying: {
      type: 'defense',
      damage: '0',
      defense: '3',
      timeout: '0',
      loadTime: '1500',
      description: "Sometimes you just gotta cry it out...",
    },
    goRick: {
      type: 'defense',
      damage: '0',
      defense: '18',
      timeout: '2500',
      loadTime: '4000',
      description: 'Stand behind rick and let him do everything',
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
