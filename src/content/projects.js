// Template:
// {
//   title: '',
//   headline: '',
//   about: '',
//   image: {
//     path: '',
//     alt: '',
//   },
//   moreInfo: {
//     text: '',
//     path: '',
//   },
//   links: [
//     {
//       type: 'live',
//       iconPath: '',
//       url: '',
//     },
//     {
//       type: 'github',
//       iconPath: '',
//       url: '',
//     },
//   ],
// },

export default [
  {
    title: 'SpaceTyper',
    headline: 'A galactic dexterity adventure',
    about: `
      My typing speed used to be... not great. TypeRacer was a fun way to
      practice, but one day I thought, "Racing cars is kind of boring; I'd
      like to race spaceships!" And SpaceTyper was born.
    `,
    image: {
      path: '/images/projects/spacetyper/screenshot.png',
      alt: `
        The Spacetyper homescreen. Ships at the starting line of an
        intergalactic race.
      `,
    },
    moreInfo: {
      text: 'Lift off',
      path: 'http://www.spacetyper.com',
    },
    links: [
      {
        type: 'live',
        iconPath: '',
        url: 'http://www.spacetyper.com',
      },
      {
        type: 'github',
        iconPath: '',
        url: 'https://github.com/domtriola/space-typer',
      },
    ],
  },
  {
    title: 'Audio Visualizer',
    headline: 'A synesthesia experience',
    about: `
      We do not yet support sight to sound, taste to sight, or sound to taste.
      Smellovision coming soon.
    `,
    image: {
      path: '/images/projects/audiovisualizer/screenshot.png',
      alt: `
        A screenshot of the audio visualizer display. Ripples in rainbow
        colors.
      `,
    },
    moreInfo: {
      text: 'See the music',
      path: 'https://audio-visualizer-v2.herokuapp.com/',
    },
    links: [
      {
        type: 'live',
        iconPath: '',
        url: 'https://audio-visualizer-v2.herokuapp.com/',
      },
      {
        type: 'github',
        iconPath: '',
        url: 'https://github.com/domtriola/audio-visualizer-v2',
      },
    ],
  },
  {
    title: 'Cellular Automata',
    headline: 'A touch of ordered chaos',
    about: `
      Seeing Conway's "Game of Life" and "Rock Paper Scissors" automata
      simulations made me curious about what other patterns might arrise from a
      bunch of "organisms" and a simple set of rules.
    `,
    image: {
      path: '/images/projects/cellularautomata/screenshot.png',
      alt: `
        A screenshot of the cellular automata app. A grid of cells of various
        colors with control panels for parameters.
      `,
    },
    moreInfo: {
      text: 'Experiment',
      path: 'https://dominicktriola.com/cellular-automata/',
    },
    links: [
      {
        type: 'live',
        iconPath: '',
        url: 'https://dominicktriola.com/cellular-automata/',
      },
      {
        type: 'github',
        iconPath: '',
        url: 'https://github.com/domtriola/cellular-automata',
      },
    ],
  },
  {
    title: 'Bot Chat',
    headline: 'CleverBot says hi',
    about: `
      I made this to learn Elixir. If you haven't heard, Elixir is the new
      hotness.
    `,
    image: {
      path: '/images/projects/botchat/screenshot.png',
      alt: `
        A screenshot of the Bot Chat app. A chat window is open with a list of
        recent messages.
      `,
    },
    moreInfo: {
      text: 'Say hello',
      path: 'https://bots-chat.herokuapp.com/',
    },
    links: [
      {
        type: 'live',
        iconPath: '',
        url: 'https://bots-chat.herokuapp.com/',
      },
      {
        type: 'github',
        iconPath: '',
        url: 'https://github.com/domtriola/bot-chat',
      },
    ],
  },
];
