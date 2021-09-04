const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '웹 컨텐츠 프로그래밍',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '홈',
        link: '/',
      },
      {
        text: 'Repository',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      {
        title: '👋 소개',
        path: '/introduction/',
        collapsable: false,
        children: [
          {
            title: '소개',
            path: '/introduction/'
          }
        ]
      },
      {
        title: '📒 강의 기록',
        path: '/review-note/',
        collapsable: true,
        children: [
          '/2021-09-01/'
        ].map(_ => `/review-note${_}`)
      },
      {
        title: '블로그',
        path: '/blog/',
        collapsable: false,
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
