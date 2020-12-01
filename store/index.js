import { setCookie } from '~/plugins/utils'
export const state = () => ({
  headerItems: [
    { text: 'Home', icon: 'mdi-home', to: '/' },
    { text: 'Apps', icon: 'mdi-apps', to: '/apps' },
    { text: 'Libraries', icon: 'mdi-bookshelf', to: '/libraries' },
    { text: 'Portfolio', icon: 'mdi-palette', to: '/portfolio' }
  ],
  contactItems: [
    { title: 'Telegram', icon: 'mdi-telegram', to: 'http://t.me/OneHaKr' },
    { title: 'Github', icon: 'mdi-github-circle', to: 'https://github.com/1hakr' },
    { title: 'Twitter', icon: 'mdi-twitter', to: 'https://twitter.com/1hakr' },
    { title: 'Linkedin', icon: 'mdi-linkedin', to: 'https://www.linkedin.com/in/1hakr' },
    { title: 'Medium', icon: 'mdi-medium', to: 'https://medium.com/@1HaKr' },
    { title: 'Resume', icon: 'mdi-file-document-box', to: '/media/resume.pdf' },
    { title: 'DWorkS', icon: 'mdi-dev-to', to: 'https://dworks.io/?referrer=1hakr' }
  ],
  footerItems: [
    { title: 'Home', to: '/' },
    { title: 'Apps', to: '/apps' },
    { title: 'Libraries', to: '/libraries' },
    { title: 'Portfolio', to: '/portfolio' }
  ],
  shareItems: [
    { img: '/share/facebook.svg', title: 'Facebook' },
    { img: '/share/twitter.svg', title: 'Twitter' },
    { img: '/share/linkedin.svg', title: 'LinkedIn' },
    { img: '/share/reddit.svg', title: 'Reddit' },
    { img: '/share/gmail.svg', title: 'Email' }
  ],
  currentTitle: '1HaKr',
  appName: '1HaKr',
  appDomain: '1hakr.com',
  user: {},
  darkTheme: false,
  token: ''
})

export const mutations = {
  SET_CURRENT_TITLE (state, payload) {
    state.currentTitle = payload
  },
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  SET_DARK_THEME (state, payload) {
    state.darkTheme = payload
    setCookie(this, 'theme', state.darkTheme)
  }
}

export default {
  state,
  mutations
}
