const withTM = require('next-transpile-modules')(['react-markdown']);

module.exports = withTM({
    webpack5: false,
    async redirects() {
      return [
        {
          source: '/twitch',
          destination: 'https://twitch.tv/roxkstar74',
          permanent: true,
        },
        {
          source: '/discord',
          destination: 'https://discord.gg/jctwcBa',
          permanent: true,
        },
        {
          source: '/github',
          destination: 'https://github.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/merch',
          destination: 'https://merch.streamelements.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/ideas',
          destination: 'https://vintage-smile-604.notion.site/Goal-Actually-making-20k-in-December-249dee93d7974e5389f8f3e25e70802c',
          permanent: true,
        },
        {
          source: '/today',
          destination: 'https://sharing.clickup.com/b/h/6-170900334-2/e7dcf84a22263ae',
          permanent: true,
        },
        {
          source: '/status',
          destination: 'https://trello.com/b/wDGlphGP/project-status',
          permanent: true,
        },
        {
          source: '/extension',
          destination: 'https://chrome.google.com/webstore/detail/rox-mandatory-friendship/ikcfiihgdijejljabhocppgnpkjcmdic',
          permanent: true,
        },
        {
          source: '/umso',
          destination: 'https://www.umso.com/?via=rox',
          permanent: true,
        },
        {
          source: '/daily',
          destination: 'https://sharing.clickup.com/b/h/6-170900334-2/e7dcf84a22263ae',
          permanent: true,
        },
        {
          source: '/goals',
          destination: 'https://www.youtube.com/watch?v=oaIWDUsxx6Y',
          permanent: true,
        },
        {
          source: '/tiktok',
          destination: 'https://tiktok.com/@roxkstar74',
          permanent: true,
        },
        {
          source: '/twitter',
          destination: 'https://twitter.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/instagram',
          destination: 'https://instagram.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/ig',
          destination: 'https://instagram.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/youtube',
          destination: 'https://youtube.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/yt',
          destination: 'https://youtube.com/roxkstar74',
          permanent: true,
        },
        {
          source: '/future',
          destination: 'https://www.youtube.com/watch?v=CIsrhoVSc4',
          permanent: true,
        },
        {
          source: '/leaving',
          destination: 'https://youtu.be/xP3m27Pl5eU',
          permanent: true,
        },
        {
          source: '/strawberry',
          destination: 'https://www.reddit.com/r/ProgrammerHumor/comments/q0ejpv/strawberry_js_best_js/',
          permanent: true,
        },
        {
          source: '/clickup',
          destination: 'https://clickup.com?fp_ref=rox39',
          permanent: true,
        },
        {
          source: '/clipbot-clickup',
          destination: 'https://sharing.clickup.com/b/h/6-122357101-2/3ffdfd2ce933268',
          permanent: true,
        },
        {
          source: '/start-live-coding',
          destination: 'https://www.youtube.com/watch?v=-G3bpS5zJ6g',
          permanent: true,
        },
        {
          source: '/playlists',
          destination: 'https://open.spotify.com/user/22hq7oyd3taofvqk26w4socna/playlists',
          permanent: true,
        },
        {
          source: '/betterso',
          destination: 'https://www.reddit.com/r/Twitch/comments/pwegd8/better_so_for_nightbot/',
          permanent: true,
        },
        {
          source: '/chat',
          destination: 'https://usemotion.com/meet/rox/chat',
          permanent: true,
        },
      ]
    },
  })