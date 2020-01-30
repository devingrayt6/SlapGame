//Player object
let rick = {
  name: 'Rick Sanchez',
  health: '1200',
  attacks: {
    blenderPortal: {
      type: 'attack',
      damage: '17',
      defense: '0',
      timeout: '3000',
      loadTime: '4700',
      description: 'Open a portal to the blender universe under opponent.',
    },
    particleWatch: {
      type: 'attack',
      damage: '12',
      defense: '0',
      timeout: '1000',
      loadTime: '2000',
      description: 'Particle beam in the wrist watch, snake holster on the leg.',
    },
    burp: {
      type: 'attack',
      damage: '23',
      defense: '0',
      timeout: '4200',
      loadTime: '5900',
      description: 'Extreme stank',
    },
  },
  defenses: {
    notCaring: {
      type: 'defense',
      damage: '0',
      defense: '7',
      timeout: '1000',
      loadTime: '3500',
      description: "It's the best.",
    },
    knowItAll: {
      type: 'defense',
      damage: '0',
      defense: '3',
      timeout: '0',
      loadTime: '1000',
      description: 'You think I know everything about everything?',
    },
    drinking: {
      type: 'defense',
      damage: '0',
      defense: '13',
      timeout: '1300',
      loadTime: '4800',
      description: 'The numbing liquid...',
    }
  },
}
