module.exports = {
    theme: '@vuepress/blog',
    themeConfig: {
        nav: [
            {
              text: 'Home',
              link: '/',
            },
            {
              text: 'Archive',
              link: '/archive/',
            },
            {
              text: 'Tags',
              link: '/tag/',
            },
          ],
          footer: {
            contact: [
              {
                type: 'github',
                link: 'https://github.com/vuejs/vuepress',
              },
              {
                type: 'twitter',
                link: 'https://github.com/vuejs/vuepress',
              },
            ],
          }
    },
    plugins: [
        '@vuepress/plugin-active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ]
}
