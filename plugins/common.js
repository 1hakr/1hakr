import { isMobile, isSafari } from '~/plugins/utils'
const useragent = require('express-useragent')
export default function (context, inject) {
  const userAgentRaw = context.req ? context.req.headers['user-agent'] : (process.browser ? navigator.userAgent : '')
  const userAgent = userAgentRaw ? userAgentRaw.toLowerCase() : ''
  const mobile = isMobile(userAgent)
  const safari = isSafari(userAgent)
  const bot = useragent.parse(userAgent).isBot
  context.$userAgent = userAgent
  inject('userAgent', userAgent)
  context.$isMobile = mobile
  inject('isMobile', mobile)
  context.$isSafari = safari
  inject('isSafari', safari)
  context.$isBot = bot
  inject('isBot', bot)
}
