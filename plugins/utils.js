import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
const localeObject = {
  name: 'en',
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '1 sec',
    ss: '%d secs',
    m: '1 min',
    mm: '%d mins',
    h: '1 hour',
    hh: '%d hours',
    d: '1 day',
    dd: '%d days',
    M: '1 month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years'
  }
}
dayjs.locale(localeObject, null, true)
export const buildUserObject = (user) => {
  if (isEmpty(user)) {
    return user
  }
  const userObject = {
    name: user.displayName,
    uid: user.uid,
    email: user.email,
    photo: user.photoURL,
    provider: ''
  }
  return userObject
}

export const getTZDiff = (currentTz, otherTz) => {
  const hours = getTimeDiff(currentTz, otherTz)
  if (hours < 0) { return Math.abs(hours) + ' hours behind' }
  return Math.abs(hours) + ' hours ahead'
}

export const getTZRangeDiff = (currentTimezones, otherTimezones) => {
  if (!currentTimezones) {
    return ''
  }
  const countryTimezoneArray = otherTimezones.split(',')
  const countryTimezoneFirst = countryTimezoneArray[0]
  let countryTimezoneLast = null
  if (countryTimezoneArray.length > 1) {
    countryTimezoneLast = countryTimezoneArray[countryTimezoneArray.length - 1]
  }

  const currentTimezoneArray = currentTimezones.split(',')
  const currentTimezoneFirst = currentTimezoneArray[0]
  let currentTimezoneLast = null
  if (currentTimezoneArray.length > 1) {
    currentTimezoneLast = currentTimezoneArray[currentTimezoneArray.length - 1]
  }

  const firstDiff = getTimeDiff(currentTimezoneFirst, countryTimezoneFirst)
  let secondDiff = 0
  if (!currentTimezoneLast && countryTimezoneLast) {
    secondDiff = getTimeDiff(currentTimezoneFirst, countryTimezoneLast)
  } else if (currentTimezoneLast && !countryTimezoneLast) {
    secondDiff = getTimeDiff(currentTimezoneLast, countryTimezoneFirst)
  } else {
    secondDiff = getTimeDiff(currentTimezoneLast, countryTimezoneLast)
  }
  if (firstDiff > 0 && secondDiff > 0) {
    if (firstDiff === secondDiff) {
      return formatDifference(firstDiff) + ' ahead'
    }
    return (firstDiff < secondDiff ? (formatDifference(firstDiff) + ' to ' + formatDifference(secondDiff)) : (formatDifference(secondDiff) + ' to ' + formatDifference(firstDiff))) + ' ahead'
  } else if (firstDiff < 0 && secondDiff < 0) {
    if (firstDiff === secondDiff) {
      return formatDifference(firstDiff) + ' behind'
    }
    return (firstDiff > secondDiff ? (formatDifference(firstDiff) + ' to ' + formatDifference(secondDiff)) : (formatDifference(secondDiff) + ' to ' + formatDifference(firstDiff))) + ' behind'
  } else {
    const firstValue = formatDifference(firstDiff) + (firstDiff < 0 ? ' behind' : ' ahead')
    const secondValue = formatDifference(secondDiff) + (secondDiff < 0 ? ' behind' : ' ahead')
    return (firstDiff ? firstValue + (secondDiff ? ' to ' : '') : 'same time') + (secondDiff ? secondValue : '')
  }
}

export const formatDifference = (difference) => {
  const duration = Math.abs(difference)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  let formatted = ''
  if (hours) {
    formatted += hours === 1 ? '1 hr' : `${hours} hrs`
  }
  if (minutes) {
    formatted += (hours ? ' ' : '') + `${minutes} min`
  }
  return formatted
}

function getTimeDiff (currentTz, otherTz) {
  const selectedTz = new Date('January 1, 1970 00:00:00 ' + currentTz)
  const targetTz = new Date('January 1, 1970 00:00:00 ' + otherTz)
  const difference = selectedTz.getTime() - targetTz.getTime()
  return difference
}

export const isEmpty = (obj) => {
  return !obj || Object.keys(obj).length === 0
}

export const numberFormatter = (num, digits) => {
  num = ((num) => {
    if (typeof num !== 'number') { return num } else { return parseFloat(num) }
  })(num)

  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}

export const findVisaCategoryColor = (visaCategoryId) => {
  switch (visaCategoryId) {
    case 1:
      return '#0cce6a' // no visa
    case 2:
      return 'teal' // visa on arrival
    case 3:
      return '#2196f3' // e-visa
    case 4:
      return '#ffab00' // visa required
    case 5:
      return '#fe4e42' // visa refused
    case -1:
      return '#607D8B' // home country
    default:
      return '#FFFFFF' // default
  }
}

export const getDistance = (latlngArr1, latlngArr2) => {
  return distanceBetween(latlngArr1[0], latlngArr1[1], latlngArr2[0], latlngArr2[1])
}

function distanceBetween (lat1, lon1, lat2, lon2) {
  const rlat1 = Math.PI * lat1 / 180
  const rlat2 = Math.PI * lat2 / 180
  // var rlon1 = Math.PI * lon1 / 180
  // var rlon2 = Math.PI * lon2 / 180
  const theta = lon1 - lon2
  const rtheta = Math.PI * theta / 180
  let dist = Math.sin(rlat1) * Math.sin(rlat2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta)
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  dist = dist * 1.609344
  return dist
}

export const signInAnonymously = (context) => {
  // if (context.$firebase) {
  //   return
  // }
  // const currentUser = context.$firebase.auth().currentUser
  // if (!currentUser) {
  //   context.$firebase.auth().signInAnonymously()
  // }
}

export const popupWindow = (url, title, w, h) => {
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

  const left = ((width / 2) - (w / 2)) + dualScreenLeft
  const top = ((height / 2) - (h / 2)) + dualScreenTop
  const newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus()
  }
}

export const setCookie = (app, key, value) => {
  app.$cookies.set(key, value, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  })
}

export const isMobile = (userAgent) => {
  const mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent))
  let result = false
  if (mobile) {
    result = true
    if ((userAgent.search('android') > -1) && (userAgent.search('mobile') > -1)) {
      result = true // android mobile
    } else if ((userAgent.search('android') > -1) && !(userAgent.search('mobile') > -1)) {
      result = false // android tablet
    }
  }
  return result
}

export const isBot = (userAgent) => {
  let result = false
  if (userAgent) {
    result = (/bot|googlebot|google-structured-data-testing-tool|bingbot|linkedinbot|duckduckbot|mediapartners-google|yandexbot|baiduspider|semrushbot/i.test(userAgent))
  }
  return result
}

export const isWindows = (userAgent) => {
  const windows = (/windows/i.test(userAgent))
  return windows
}

export const isSafari = (userAgent) => {
  const safari = /^((?!chrome|android|CriOS|FxiOS|EdgiOS).)*safari/i.test(userAgent)
  return safari
}

export const isIE = (userAgent) => {
  const isIE = (/MSIE|Trident/i.test(userAgent))
  return isIE
}

export const isOperaMini = (userAgent) => {
  const isOperaMini = (/Opera Mini/i.test(userAgent))
  return isOperaMini
}

export const capitalize = (value) => {
  if (!value) { return '' }
  value = value.toString()
  return value.substr(0, 1).toUpperCase() + value.substr(1)
}

export const visaCategoryName = (visaCategoryId, schengen = false) => {
  switch (visaCategoryId) {
    case 1:
      return 'visa free'
    case 2:
      return 'visa on arrival'
    case 3:
      return 'online e-visa'
    case 4:
      return schengen ? 'schengen visa' : 'tourist visa'
    case 5:
      return 'visa refused'
    default:
      return ''
  }
}

export const getVisaDescription = (visaCategoryId) => {
  switch (visaCategoryId) {
    case 1:
      return 'don\'t need visa'
    case 2:
      return 'can get visa on arrival'
    case 3:
      return 'can get e-visa'
    case 4:
      return 'need visa'
    case 5:
      return 'can\'t get visa'
    default:
      return ''
  }
}

export const slugify = (text) => {
  if (!text) {
    return text
  }
  const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple — with single -
    .replace(/^-+/, '') // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
}

export const unslugify = (slugs) => {
  if (!slugs) {
    return slugs
  }
  slugs = slugs.replace(/_/g, '-')
  slugs = slugs.replace(/--/g, '-')

  const list = []
  slugs.split('-').forEach(function (slug) {
    list.push(capitalize(slug))
  })
  return list.join(' ')
}

export const getVisaCategory = (visaRequirement, countryName) => {
  let visaCategory = {}
  if (visaRequirement.dualVisaRequirement) {
    const visaCategory1 = visaRequirement.dualVisaRequirement.visaCategory
    const visaCategory2 = visaRequirement.visaCategory
    let exempt = false
    if (visaCategory1 && visaCategory1.id < visaCategory2.id) {
      visaCategory = visaCategory1
      exempt = true
    } else {
      visaCategory = visaCategory2
    }
    visaCategory.exempt = exempt
    return visaCategory
  } else if (visaRequirement.exemptionVisaRequirement) {
    const exemptionCountry = visaRequirement.exemptionVisaRequirement.exemptionVisaCountry
    if (exemptionCountry) {
      const isApplicable = isExemptionApplicable(exemptionCountry, countryName)
      if (isApplicable) {
        visaCategory = exemptionCountry.visaCategory
        if (visaRequirement.visaCategory.id > visaCategory.id) {
          visaCategory.exempt = true
          return visaCategory
        }
      }
    }
  } else if (visaRequirement.exemptionVisaCountry) {
    const exemptionCountry = visaRequirement.exemptionVisaCountry
    const isApplicable = isExemptionApplicable(exemptionCountry, countryName)
    if (isApplicable) {
      return exemptionCountry.visaCategory
    }
  }
  if (visaRequirement.visaCategory) {
    return visaRequirement.visaCategory
  } else {
    return { id: 99, name: 'Data not available' }
  }
}

export const getVisaDuration = (visaRequirement, countryName) => {
  if (visaRequirement.dualVisaRequirement) {
    const visaCategory1 = visaRequirement.dualVisaRequirement.visaCategory
    const visaCategory2 = visaRequirement.visaCategory
    if (visaCategory1 && visaCategory1.id < visaCategory2.id) {
      return visaRequirement.dualVisaRequirement.duration
    } else {
      return visaRequirement.duration
    }
  } else if (visaRequirement.exemptionVisaRequirement) {
    const exemptionCountry = visaRequirement.exemptionVisaRequirement.exemptionVisaCountry
    if (exemptionCountry) {
      const isApplicable = isExemptionApplicable(exemptionCountry, countryName)
      if (isApplicable) {
        return exemptionCountry.duration
      }
    }
  }
  return visaRequirement.duration
}

export const isExemptionApplicable = (exemptionCountry, countryName) => {
  if (!exemptionCountry) {
    return false
  }
  if (exemptionCountry.skipCountries) {
    return true
  } else if (exemptionCountry.applicableCountries) {
    return exemptionCountry.applicableCountries.includes(countryName)
  } else if (exemptionCountry.exemptCountries) {
    return !exemptionCountry.exemptCountries.includes(countryName)
  }
  return true
}

export const getDateString = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const formattedDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
  return formattedDate
}

export const adStyleLeaderboard = {
  display: 'inline-block',
  width: '100%',
  height: '90px'
}

export const adStyleSkyscrapper = {
  display: 'inline-block',
  width: '300px',
  height: '600px'
}

export const adStyleMobileLeaderboard = {
  display: 'inline-block',
  width: '100%',
  height: '100px'
}

export const adStyleMobileMinLeaderboard = {
  display: 'inline-block',
  width: '100%',
  height: '50px'
}

export const adStyle = {
  display: 'inline-block',
  width: '300px',
  height: '300px'
}

export const getQueryFilterObjects = (state, filter) => {
  let exemptionVisa = null
  let dualCountry = null
  let query = ''
  if (filter) {
    if (filter.endsWith('visa')) {
      exemptionVisa = state.exemptionVisas.find(function (exemption) {
        return exemption.slug.startsWith(filter)
      })
      query = '?exemption_visa_id=' + exemptionVisa.id
    } else if (filter.endsWith('passport')) {
      const dualCountryFilter = filter.replace('-passport', '')
      if (state.countriesMaster) {
        dualCountry = state.countriesMaster.find(function (exemption) {
          return exemption.slug.startsWith(dualCountryFilter)
        })
        query = '?dual_country_id=' + dualCountry.id
      }
    }
  }
  return {
    query,
    exemptionVisa,
    dualCountry
  }
}

export const isValidJson = (str) => {
  try {
    const array = JSON.stringify(str).split('][')
    if (array.length !== 1) {
      return false
    }
  } catch (e) {
    return false
  }
  return true
}

export const wilsonScore = (p, n) => {
  if (p === 0 && n === 0) {
    return 0
  }
  const r = ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt(p * n / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n))
  return Number(r.toFixed(2))
}

export const getRelativeTime = (time) => {
  return dayjs(time).fromNow()
}

export const getCurrentMonth = () => {
  return new Date().toLocaleDateString('en-US', { month: 'short' }).toLowerCase()
}

export const getFormattedPrice = (currency, price, locale) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  })
  return formatter.format(price.toFixed(2))
}

export const getFormattedNumber = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0
  })
  return formatter.format(value)
}

export const passportRank = (item) => {
  return passportRankRaw(item).toFixed(0)
}

export const passportRankRaw = (item) => {
  if (!item) {
    return 0
  }
  const weighted = (item.visaFree * 0.8) + (item.visaOnArrival * 0.6) + (item.eVisa * 0.4) + (item.visaRequired * 0.2) + (item.visaRefused * -0.2)
  return ((weighted / 200) * 100)
}

export const gayRank = (total) => {
  return (((total + 15) / 30) * 100).toFixed(0)
}

export const gayIndividualRank = (total) => {
  if (!total) {
    return Number(0)
  }
  return Number((((total + 3) / 6) * 100).toFixed(0))
}

export const gayDiscriminationRank = (total) => {
  if (total < -3) {
    return 100
  }
  return Number(((total / -3) * 100).toFixed(0))
}

export const weatherMatched = (id, temp) => {
  let include = false
  switch (id) {
    case 1:
      include = temp <= 2
      break
    case 2:
      include = temp <= 10 && temp > 2
      break
    case 3:
      include = temp <= 16 && temp > 10
      break
    case 4:
      include = temp <= 20 && temp > 16
      break
    case 5:
      include = temp <= 30 && temp > 20
      break
    case 6:
      include = temp > 30
      break
  }
  return include
}

export const findTravelAdviceColor = (category) => {
  switch (category) {
    case 1:
      return 'white' // no information
    case 2:
      return '#0cce6a' // normal safety
    case 3:
      return '#009688' // stay alert
    case 4:
      return '#EF9A9A' // reconsider
    case 5:
      return '#F44336' // dont travel
    default:
      return 'transparent' // default
  }
}

export const findTravelAdvice = (category) => {
  switch (category) {
    case 1:
      return 'No Info'
    case 2:
      return 'Normal Safety'
    case 3:
      return 'Stay Alert'
    case 4:
      return 'Reconsider'
    case 5:
      return 'Don\'t Travel'
    default:
      return '' // default
  }
}

export const getAffiliateLink = (documentId, isSchengen) => {
  switch (documentId) {
    case 8:
      return {
        type: 'Hotel',
        title: 'Hotel Itinerary',
        cta: 'Get Itinerary',
        url: 'https://www.dummyticket.com/dummy-ticket-for-visa-application/?ref=visalist',
        color: 'cyan',
        description: 'Embassy recommends not to purchase tickets until visa is approved. Don’t risk your money, time and effort by buying actual tickets. Get hotel bookings for any city in the world within minutes for visa purposes.'
      }
    case 13:
      return {
        type: 'Flight',
        title: 'Flight Itinerary',
        cta: 'Get Itinerary',
        url: 'https://www.dummyticket.com/dummy-ticket-for-visa-application/?ref=visalist',
        color: 'teal',
        description: 'An Onward Ticket is a flight reservation made by a real travel agency that can be helpful for visa applications or if you want to enter a country without purchasing a return flight. Get verifiable one way, round trip, and multi-city flight bookings for visa purposes.'
      }
    case 18:
      return {
        type: 'Insurance',
        title: 'Travel Insurance',
        cta: 'Get Insurance',
        url: 'https://www.safetywing.com/a/24736645',
        color: 'amber',
        description: 'Travel medical insurance for everyone from all over the world. Get coverage for travel delay, lost checked luggage, emergency response & natural disasters, personal liability. Get ready for for unexpected medical problems and accidents.'
      }
    case 7:
      return {
        type: 'Itinerary',
        title: 'Travel Itinerary',
        cta: 'Get Insurance',
        url: 'https://www.dummyticket.com/dummy-ticket-for-visa-application/?ref=visalist',
        color: 'pink',
        description: 'Embassy recommends not to purchase hotel and flight tickets until visa is approved. So don’t risk your money, time and effort by buying actual tickets. Get best hotel and flight itinerary within minutes for any country visa.'
      }
  }
  return null
}

export const sendReport = async (data) => {
  const axios = require('axios')
  const sendMessageUrl = process.env.FUNCTIONS_URL + '/sendmessage'
  const headers = {
    headers: {
      Authorization: process.env.API_TOKEN,
      'Content-Type': 'application/json'
    }
  }
  try {
    await axios.post(sendMessageUrl, data, headers)
  } catch (error) {
    console.log(error)
  }
}

export const arrayToSentence = (arr, key = null) => {
  if (isEmpty(arr)) {
    return ''
  }
  const last = arr.pop()
  const lastWord = key ? last[key] : last
  if (arr.length === 0) {
    return lastWord
  }
  const remainingArray = key ? arr.map(e => e[key]) : arr
  return remainingArray.join(', ') + ' and ' + lastWord
}

export const findLocationCountry = (self) => {
  const userLocation = self.$store.state.userLocation
  const countriesMaster = self.$store.state.countriesMaster || []
  if (!countriesMaster || (countriesMaster && countriesMaster.length === 0)) {
    return null
  }
  const result = countriesMaster.find(function (country) {
    const code = country.alpha2Code
    return code.includes(userLocation.country)
  })
  return result
}

export const maybePluralize = (count, noun, inclusive = true) => {
  const pluralized = count === 1 ? noun : plural(noun)
  return (inclusive ? count + ' ' : '') + restoreCase(noun, pluralized)
}

export const getReportCount = (report, status) => {
  let count = 0
  if (!report) {
    return count
  }
  switch (status.id) {
    case 2:
      count = Number(report.recovered)
      break
    case 3:
      count = Number(report.dead)
      break
    default:
      count = Number(report.infected)
      break
  }
  return isNaN(count) ? 0 : count
}

/**
 * Returns the plural of an English word.
 *
 * @export
 * @param {string} word
 * @param {number} [amount]
 * @returns {string}
 */
function plural(word, amount) {
  if (amount !== undefined && amount === 1) {
    return word
  }
  const plural = {
    '(quiz)$': '$1zes',
    '^(ox)$': '$1en',
    '([m|l])ouse$': '$1ice',
    '(matr|vert|ind)ix|ex$': '$1ices',
    '(x|ch|ss|sh)$': '$1es',
    '([^aeiouy]|qu)y$': '$1ies',
    '(hive)$': '$1s',
    '(?:([^f])fe|([lr])f)$': '$1$2ves',
    '(shea|lea|loa|thie)f$': '$1ves',
    sis$: 'ses',
    '([ti])um$': '$1a',
    '(tomat|potat|ech|her|vet)o$': '$1oes',
    '(bu)s$': '$1ses',
    '(alias)$': '$1es',
    '(octop)us$': '$1i',
    '(ax|test)is$': '$1es',
    '(us)$': '$1es',
    '([^s]+)$': '$1s'
  }
  const irregular = {
    move: 'moves',
    foot: 'feet',
    goose: 'geese',
    sex: 'sexes',
    child: 'children',
    man: 'men',
    tooth: 'teeth',
    person: 'people',
    this: 'these',
    is: 'include'
  }

  const uncountable = [
    'sheep',
    'fish',
    'deer',
    'moose',
    'series',
    'species',
    'money',
    'rice',
    'information',
    'equipment',
    'bison',
    'cod',
    'offspring',
    'pike',
    'salmon',
    'shrimp',
    'swine',
    'trout',
    'aircraft',
    'hovercraft',
    'spacecraft',
    'sugar',
    'tuna',
    'you',
    'wood'
  ]
  // save some time in the case that singular and plural are the same
  if (uncountable.includes(word.toLowerCase())) {
    return word
  }
  // check for irregular forms
  for (const w in irregular) {
    const pattern = new RegExp(`${w}$`, 'i')
    const replace = irregular[w]
    if (pattern.test(word)) {
      return word.replace(pattern, replace)
    }
  }
  // check for matches using regular expressions
  for (const reg in plural) {
    const pattern = new RegExp(reg, 'i')
    if (pattern.test(word)) {
      return word.replace(pattern, plural[reg])
    }
  }
  return word
}

/**
 * Returns the singular of an English word.
 *
 * @export
 * @param {string} word
 * @param {number} [amount]
 * @returns {string}
 */
export function singular(word, amount) {
  if (amount !== undefined && amount !== 1) {
    return word
  }
  const singular = {
    '(quiz)zes$': '$1',
    '(matr)ices$': '$1ix',
    '(vert|ind)ices$': '$1ex',
    '^(ox)en$': '$1',
    '(alias)es$': '$1',
    '(octop|vir)i$': '$1us',
    '(cris|ax|test)es$': '$1is',
    '(shoe)s$': '$1',
    '(o)es$': '$1',
    '(bus)es$': '$1',
    '([m|l])ice$': '$1ouse',
    '(x|ch|ss|sh)es$': '$1',
    '(m)ovies$': '$1ovie',
    '(s)eries$': '$1eries',
    '([^aeiouy]|qu)ies$': '$1y',
    '([lr])ves$': '$1f',
    '(tive)s$': '$1',
    '(hive)s$': '$1',
    '(li|wi|kni)ves$': '$1fe',
    '(shea|loa|lea|thie)ves$': '$1f',
    '(^analy)ses$': '$1sis',
    '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': '$1$2sis',
    '([ti])a$': '$1um',
    '(n)ews$': '$1ews',
    '(h|bl)ouses$': '$1ouse',
    '(corpse)s$': '$1',
    '(us)es$': '$1',
    s$: ''
  }
  const irregular = {
    move: 'moves',
    foot: 'feet',
    goose: 'geese',
    sex: 'sexes',
    child: 'children',
    man: 'men',
    tooth: 'teeth',
    person: 'people'
  }

  const uncountable = [
    'sheep',
    'fish',
    'deer',
    'moose',
    'series',
    'species',
    'money',
    'rice',
    'information',
    'equipment',
    'bison',
    'cod',
    'offspring',
    'pike',
    'salmon',
    'shrimp',
    'swine',
    'trout',
    'aircraft',
    'hovercraft',
    'spacecraft',
    'sugar',
    'tuna',
    'you',
    'wood'
  ]
  // save some time in the case that singular and plural are the same
  if (uncountable.includes(word.toLowerCase())) {
    return word
  }
  // check for irregular forms
  for (const w in irregular) {
    const pattern = new RegExp(`${irregular[w]}$`, 'i')
    const replace = w
    if (pattern.test(word)) {
      return word.replace(pattern, replace)
    }
  }
  // check for matches using regular expressions
  for (const reg in singular) {
    const pattern = new RegExp(reg, 'i')
    if (pattern.test(word)) {
      return word.replace(pattern, singular[reg])
    }
  }
  return word
}

function restoreCase (word, token) {
  // Tokens are an exact match.
  if (word === token) { return token }

  // Lower cased words. E.g. "hello".
  if (word === word.toLowerCase()) { return token.toLowerCase() }

  // Upper cased words. E.g. "WHISKY".
  if (word === word.toUpperCase()) { return token.toUpperCase() }

  // Title cased words. E.g. "Title".
  if (word[0] === word[0].toUpperCase()) {
    return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase()
  }

  // Lower cased words. E.g. "test".
  return token.toLowerCase()
}

export const redirectToBacktab = (evt) => {
  const IM = window.IntentMedia
  if (IM && IM.get) {
    try {
      const evtTargetEl = evt && evt.target.parentElement
      const evtTargetIsLink = evtTargetEl && evtTargetEl.nodeName === 'A' && evtTargetEl.href && evtTargetEl.href !== '#'
      if (evtTargetIsLink) {
        if (IM.get('should_open_in_new_tab')) {
          evtTargetEl.target = '_blank'
          setTimeout(function () {
            IM.trigger('redirect_to_exit_unit')
          }, 1)
          document.body.removeEventListener('click', redirectToBacktab)
          document.body.removeEventListener('click', this)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
}
