module.exports = [
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
    children: [
      {
        title: '클래스형 컴포넌트 vs 함수형 컴포넌트',
        path: '/blog/react-func-class/'
      }
    ]
  }
]