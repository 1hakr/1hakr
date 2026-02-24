<script setup lang="ts">
const schedule = [
  {
    date: 'April 29th',
    events: [
      { time: '12:00 PM', duration: '1 hour', title: 'Welcome Lunch', venue: 'Main Restaurant', dressCode: 'Resort Casual / Tropical', description: 'Welcome to Wedding! Kick off the celebrations with a delicious spread of local and international favorites as guests arrive. Meet the families and enjoy the tropical vibes', icon: 'i-material-symbols-handshake-rounded', color: 'teal' },
      { time: '3:00 PM', duration: '30 mins', title: 'Check In', venue: 'Main Lobby', description: 'Head to the lobby for a refreshing welcome drink while you get settled into your rooms', icon: 'i-material-symbols-key-rounded', color: 'emerald' },
      { time: '3:30 PM', duration: '1 hour', title: 'Purification Ceremony (Haldi)', venue: 'Ocean View Stage', dressCode: 'Bright Yellows & Oranges', dressColors: ['bg-yellow-400', 'bg-orange-500'], description: 'A vibrant start to the festivities! We apply turmeric paste to the bride and groom for a glowing complexion and expect music, laughter, and getting a little messy', icon: 'i-material-symbols-auto-awesome-rounded', color: 'yellow' },
      { time: '5:00 PM', duration: '1 hour', title: 'Henna Ceremony (Mehendi)', venue: 'Ocean View Stage', dressCode: 'Colorful Boho Chic / Floral', dressColors: ['bg-rose-400', 'bg-teal-400', 'bg-purple-400'], description: 'Relax by the poolside cabanas while professional artists apply intricate henna designs and enjoy coconuts, and a grazing table', icon: 'i-material-symbols-palette', color: 'rose' },
      { time: '7:00 PM', duration: '2 hours', title: 'Musical Night (Sangeet)', venue: 'Main Restaurant', dressCode: 'Glitzy Western Glam / Cocktail', dressColors: ['bg-slate-800', 'bg-amber-300'], description: 'Put on your dancing shoes! A night of Tollywood / Bollywood beats, family performances, and a grand feast and time to let loose and party!', icon: 'i-material-symbols-music-note-rounded', color: 'purple' },
      { time: '8:30 PM', duration: '1.5 hours', title: 'Welcome Dinner', venue: 'Main Restaurant', dressCode: 'Smart Casual / Dinner Wear', description: 'After the performances, join us for a lavish buffet featuring the best of Indian and Indonesian cuisine. The night continues with an open dance floor', icon: 'i-material-symbols-meal-dinner-rounded', color: 'indigo' },
      { time: '10:30 PM', duration: '1.5 hours', title: 'After Party', venue: 'Rooftop Bar', dressCode: 'Casual / Party Wear', description: 'The official events are over, but the night is just beginning! Join us by the bar for late-night drinks and more dancing', icon: 'i-material-symbols-nightlife-rounded', color: 'slate' }
    ]
  },
  {
    date: 'April 30th',
    events: [
      { time: '9:00 AM', duration: '1 hour', title: 'Wedding Breakfast', venue: 'Main Restaurant', dressCode: 'Casual', description: 'Fuel up for the big day with a floating breakfast spread', icon: 'i-material-symbols-breakfast-dining' },
      { time: '10:00 AM', duration: '2 hours', title: 'Indonesian Ceremony (Akad Nikah)', venue: 'Beachfront Pavilion', dressCode: 'Modest Traditional (Kebaya/Batik)', dressColors: ['bg-emerald-600', 'bg-amber-700'], description: 'We honor Mey’s heritage with a traditional Indonesian Solemnization Ceremony, a sacred, intimate moment where we officially say "I Do"', icon: 'i-material-symbols-favorite-rounded', color: 'emerald' },
      { time: '12:00 PM', duration: '1 hour', title: 'Wedding Lunch', venue: 'Ocean View Restaurant', dressCode: 'Resort Casual', description: 'Celebrate the newlyweds with a traditional Balinese feast', icon: 'i-material-symbols-cake-rounded' },
      { time: '5:00 PM', duration: '1 hour', title: 'Wedding procession (Baraat)', venue: 'Entrance to Garden Pavilion', dressCode: 'Traditional Indian', description: 'The Groom’s Grand Entrance! Join Hari’s side for an epic musical procession with drums and dancing leading to the Mandap', icon: 'i-material-symbols-emoji-people-rounded', color: 'orange' },
      { time: '6:00 PM', duration: '3 hours', title: 'Indian Ceremony (Pelli)', venue: 'Garden Pavilion', dressCode: 'Traditional Indian (Saree/Sherwani)', dressColors: ['bg-red-600', 'bg-amber-500'], description: 'The traditional Indian Wedding under the stars. Witness the sacred fire rituals, the seven steps (Saptapadi), and the union of our families.', icon: 'i-material-symbols-local-fire-department-rounded', color: 'red' },
      { time: '9:00 PM', duration: '1 hour', title: 'Wedding Reception', venue: 'Garden Pavilion', dressCode: 'Formal / Evening Wear', description: 'A magical seated dinner with speeches, cake cutting, and dancing late into the night', icon: 'i-material-symbols-dine-heart-rounded', color: 'indigo' },
      { time: '10:30 PM', duration: '1.5 hours', title: 'After Party', venue: 'Rooftop Bar', dressCode: 'Casual / Comfortable', description: 'Keep the celebration going! Change into something comfortable and join us for the ultimate wedding after-party', icon: 'i-material-symbols-nightlife-rounded', color: 'slate' }
    ]
  },
  {
    date: 'May 1st',
    events: [
      { time: '8:00 AM', duration: '1 hour', title: 'Blessings Ceremony (Satyanarayana Puja)', venue: 'Temple Pavilion', dressCode: 'Modest Traditional / Smart Casual', description: 'A sacred ritual seeking divine blessings for our new journey together', icon: 'i-material-symbols-sunny-rounded', color: 'amber' },
      { time: '9:00 AM', duration: '1 hour', title: 'Farewell Breakfast', venue: 'Main Restaurant', dressCode: 'Casual', description: 'One last gathering to hug, laugh, and relive the memories before we part ways', icon: 'i-material-symbols-waving-hand-rounded', color: 'primary' },
      { time: '12:00 PM', duration: 'Flexible', title: 'Check Out', venue: 'Main Lobby', description: 'Thank you for celebrating with us! Safe travels home', icon: 'i-material-symbols-logout-rounded', color: 'gray' }
    ]
  }
]

const travelInfo = [
  {
    country: 'India',
    icon: 'i-flag-in',
    flights: 'Fly to Denpasar (DPS). Direct flights from major hubs or via Singapore/KL.'
  },
  {
    country: 'UAE',
    icon: 'i-flag-ae',
    flights: 'Direct flights from Dubai (DXB) to Denpasar (DPS) via Emirates are convenient.'
  },
  {
    country: 'Australia',
    icon: 'i-flag-au',
    flights: 'Short direct hops from Perth, Melbourne, Sydney, Brisbane to DPS.'
  },
  {
    country: 'United States',
    icon: 'i-flag-us',
    flights: 'Connect via Singapore, Hong Kong, or Taipei. Prepare for a long but rewarding journey!'
  }
]

const vacationSpots = [
  {
    title: 'Uluwatu',
    subtitle: 'Cliffside Views',
    description: 'Stunning cliff-top temples, Kecak fire dance at sunset, & surf.',
    image: 'https://www.indonesia.travel/contentassets/a60156ac7b454b12b42824f52a4be98b/pura-uluwatu.jpeg'
  },
  {
    title: 'Seminyak',
    subtitle: 'Beach Vibes',
    description: 'Trendy beach clubs, vibrant nightlife, endless cafes, boutiques.',
    image: 'https://finnsbeachclub.com/wp-content/uploads/2023/12/photo2jpg.jpg'
  },
  {
    title: 'Canggu',
    subtitle: 'Hipster Haven',
    description: 'Surfer paradise, avocado toast cafes, and beach clubs like Finns.',
    image: 'https://thefittraveller.com/wp-content/uploads/2019/06/things-to-do-in-Canggu-tanah-lot.jpg'
  },
  {
    title: 'Ubud',
    subtitle: 'The Cultural Heart',
    description: 'Perfect for art, rice terraces (Tegalalang), and the Monkey Forest.',
    image: 'https://excursionmania.com/cdn-cgi/image/quality=75,format=webp,w=auto,h=auto,fit=scale-down,trim=border/https://excursionmania.com/supplier/uploads/excursions/excursions/ex-1067/ubud-all-inclusive-tour-with-optional-lunch-e10671735289318.jpg'
  },
  {
    title: 'Sidemen',
    subtitle: 'Old Bali',
    description: 'Untouched rice fields, authentic villages, and peace beneath Mt. Agung.',
    image: 'https://baliexception.com/wp-content/uploads/2025/01/tirta-gangga-1536x1023.jpeg'
  },
  {
    title: 'Nusa Penida',
    subtitle: 'Island Adventure',
    description: 'Famous for T-Rex beach (Kelingking), Crystal Bay snorkeling.',
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/02/e3/6c.jpg'
  },
]

const faqs = [
  {
    label: 'Is accommodation provided?',
    content: 'Yes! We have arranged your stay at the beautiful Bali Tropic Resort for the duration of the wedding events (Check-in 3pm April 29 — Check-out 12pm May 1). Breakfast is included each morning!'
  },
  {
    label: 'How do I get to the venue?',
    content: 'The easiest way is to book a Grab (like Uber) or Gojek from the airport. There is an official Grab Lounge at DPS arrivals which is safe and easy. The ride to Bali Tropic Resort takes about 10-20 minutes depending on traffic.'
  },
  {
    label: 'Can I bring a plus one?',
    content: 'Yes, absolutely! The more the merrier! Please refer to your invitation or reach out to us directly if you have questions.'
  },
  {
    label: 'Are kids invited?',
    content: 'Absolutely! We love your little ones. The resort is family-friendly, and we will have designated areas for them to play during the main events.'
  },
  {
    label: 'Is there a Dress Code?',
    content: 'We have specific themes for each event (see Schedule), but generally: \n• Haldi: Yellows/Oranges \n• Mehendi: Color pop/Boho \n• Wedding: Traditional/Formal. \n\nTip: Leave the stilettos at home—block heels or wedges are safer for the garden vibes!'
  },
  {
    label: 'What food will be served?',
    content: 'We will be serving a mix of authentic Indian, Indonesian, and Continental cuisines. All meat served will be Halal. There will be plenty of Vegetarian and Vegan options clearly marked. If you have specific allergies, please mention them in your RSVP.'
  },
  {
    label: 'What is the weather like in April/May?',
    content: 'It is the start of the dry season. Expect warm sunny days (27-30°C) and high humidity. It’s perfect pool weather, but bring light, breathable fabrics (linen/cotton) to stay cool.'
  },
  {
    label: 'Do I need to carry cash?',
    content: 'It’s good to have some Indonesian Rupiah (IDR) for small shops, markets, and Gojek/Grab tips. Most cafes and the resort accept credit cards (Visa/Mastercard).'
  }
]

const weddingDate = new Date('2026-04-29T12:00:00+08:00').getTime()

const calculateTimeLeft = (dateNow: Date) => {
  const distance = weddingDate - dateNow.getTime()
  if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  }
}

const timeLeft = ref(calculateTimeLeft(new Date()))

const selectedTimezone = ref('Australia/Sydney')
const timezonesLocal = [
  { label: 'Sydney (AEST)', value: 'Australia/Sydney' },
  { label: 'Dubai (GST)', value: 'Asia/Dubai' },
  { label: 'India (IST)', value: 'Asia/Kolkata' },
  { label: 'New York (EDT)', value: 'America/New_York' },
]
const currentTimeInBali = ref('')
const currentTimeInSelected = ref('')

const updateTimer = () => {
  const dateNow = new Date()

  currentTimeInBali.value = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Makassar', timeStyle: 'short' }).format(dateNow)
  try {
    currentTimeInSelected.value = new Intl.DateTimeFormat('en-US', { timeZone: selectedTimezone.value, timeStyle: 'short' }).format(dateNow)
  } catch (e) { }

  timeLeft.value = calculateTimeLeft(dateNow)
}

let timerInterval: any
onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000)
  updateTimer()
})
onUnmounted(() => clearInterval(timerInterval))

const downloadIcs = () => {
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Hari and Mey Wedding//EN
BEGIN:VEVENT
DTSTART:20260429T040000Z
DTEND:20260501T030000Z
SUMMARY:Hari & Mey Wedding
DESCRIPTION:Join us for a two-day destination wedding filled with sunshine, good vibes, happy tears, and unforgettable memories as we say “I do” in paradise!
LOCATION:Bali Tropic Resort & Spa, Bali
END:VEVENT
END:VCALENDAR`
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'Hari-and-Mey-Wedding.ics')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const calendarOptions = [
  [{
    label: 'Google Calendar',
    icon: 'i-simple-icons-googlecalendar',
    to: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Hari+%26+Mey+Wedding&dates=20260429T040000Z%2F20260501T030000Z&details=Join+us+for+our+wedding+celebration+in+Bali!&location=Bali+Tropic+Resort+%26+Spa,+Bali',
    target: '_blank'
  }],
  [{
    label: 'Apple / Outlook (.ics)',
    icon: 'i-material-symbols-calendar-month-rounded',
    click: downloadIcs
  }]
]

const moodboards = [
  { event: 'Haldi', theme: 'Bright Yellows & Oranges', image: 'https://images.unsplash.com/photo-1621272036047-bf09a5516fc2?auto=format&fit=crop&q=80&w=800', description: 'Embrace the sunshine! Think light, breathable cottons in vibrant yellows and oranges.' },
  { event: 'Mehendi', theme: 'Colorful Boho Chic', image: 'https://images.unsplash.com/photo-1596484552834-6a5bb17a1ef2?auto=format&fit=crop&q=80&w=800', description: 'A relaxed poolside vibe. Floral prints, flowy maxi dresses, breezy co-ords.' },
  { event: 'Sangeet', theme: 'Glitzy Western Glam', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800', description: 'Time to shine on the dance floor! Sequins, cocktail dresses, sharp suits.' },
  { event: 'Akad Nikah', theme: 'Modest Traditional', image: 'https://images.unsplash.com/photo-1616851167907-74070a92a5d2?auto=format&fit=crop&q=80&w=800', description: 'Honoring heritage. Traditional Kebaya, Batik shirts, or modest formal wear.' },
  { event: 'Pelli', theme: 'Traditional Indian', image: 'https://images.unsplash.com/photo-1583391733959-b148fa73b7d1?auto=format&fit=crop&q=80&w=800', description: 'Regal and elegant. Sarees, Lehengas, Sherwanis, or sharp evening wear.' },
]

const convertAmount = ref(1000)
const convertCurrency = ref('AUD')
const convertFromIdrAmount = ref(500000)
const convertToCurrency = ref('AUD')

const convertRates: Record<string, number> = {
  'AUD': 11928,
  'USD': 16901,
  'INR': 186,
  'AED': 4602
}
const currencyOptions = Object.keys(convertRates)

const formatCurrency = (amount: number, currency: string, compact = false) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: compact ? 0 : 2,
    notation: compact ? 'compact' : 'standard'
  }).format(amount)

  if (currency === 'AED') {
    return formatted.replace('AED', 'د.إ')
  }

  return formatted
}

const convertedIDR = computed(() => {
  const amount = (convertAmount.value || 0) * (convertRates[convertCurrency.value] || 0)
  return formatCurrency(amount, 'IDR', true)
})

const convertedFromIdr = computed(() => {
  const rate = convertRates[convertToCurrency.value]
  if (!rate) return ''
  const amount = (convertFromIdrAmount.value || 0) / rate
  return formatCurrency(amount, convertToCurrency.value)
})

useSeoMeta({
  title: 'Hari & Mey Wedding',
  titleTemplate: '%s',
  description: 'Join Hari & Mey for their wedding celebration in Bali.',
  ogImage: '/destination-background.jpg',
  twitterImage: '/destination-background.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  script: [
    { src: 'https://app3.weatherwidget.org/js/?id=ww_8e782f6216a7e', async: true }
  ]
})

definePageMeta({
  layout: 'plain'
})
</script>

<template>
  <div class="overflow-hidden">
    <!-- Announcement Banner -->
    <div class="bg-pink-700 text-white px-4 py-3 text-center sm:px-6 lg:px-8 relative z-50 shadow-md">
      <p class="text-sm font-bold tracking-wide flex flex-col sm:flex-row items-center justify-center gap-2">
        <span class="flex items-center gap-2">
          <UIcon name="i-material-symbols-error-outline-rounded" class="w-6 h-6 shrink-0" />
          Important Update: Our wedding venue has changed to Bali Tropic Resort & Spa!
          <a href="#venue" class="underline hover:text-primary-100 transition-colors mt-1 sm:mt-0">See details</a>
        </span>
      </p>
    </div>

    <!-- Hero Section -->
    <div class="relative min-h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <!-- Background Image -->
      <img src="https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1920&q=80"
        alt="Bali Wedding" class="absolute inset-0 w-full h-full object-cover opacity-60" />

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80"></div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <UIcon name="i-material-symbols-favorite-rounded" class="text-rose-400 animate-heartbeat" />
          <span class="text-sm font-medium tracking-wide">Tying the Knot in Bali!</span>
        </div>

        <h1
          class="text-6xl md:text-8xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-white to-teal-500 drop-shadow-lg">
          Hari & Mey
        </h1>

        <p class="text-lg md:text-xl text-gray-200 font-bold max-w-3xl mx-auto leading-relaxed">
          We’re packing our bags and tying the knot in beautiful Bali! As we start this next chapter of our lives
          together, we’d love nothing more than to celebrate with our closest friends and family. Join us for a two-day
          destination wedding filled with sunshine, good vibes, happy tears, and unforgettable memories as we say “I do”
          in paradise!
        </p>

        <div class="space-y-6">
          <div class="text-2xl font-black text-primary-300">
            April 29 — May 1, 2026
          </div>

          <div class="grid grid-cols-4 gap-4 max-w-md mx-auto py-2 text-white">
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold notranslate" translate="no" v-text="timeLeft.days"></div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Days</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold notranslate" translate="no" v-text="timeLeft.hours"></div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Hrs</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold notranslate" translate="no" v-text="timeLeft.minutes"></div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Mins</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold notranslate" translate="no" v-text="timeLeft.seconds"></div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Secs</div>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm font-bold text-gray-200 tracking-wider">
            <div class="bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
              Check-in: 3pm, 29th April
            </div>
            <div class="bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
              Check-out: 12pm, 1st May
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center py-8 w-full max-w-lg mx-auto">
          <UButton size="xl" to="https://hakrmey.rsvpify.com/" target="_blank" color="primary" variant="solid"
            icon="i-material-symbols-mail-rounded" translate="no"
            class="notranslate font-bold justify-center whitespace-normal text-center h-auto py-3 px-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            RSVP Now
          </UButton>
          <UButton size="xl" to="#schedule" color="white" icon="i-material-symbols-arrow-circle-down-rounded"
            variant="solid"
            class="font-bold justify-center whitespace-normal text-center h-auto py-3 px-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-gray-900">
            Schedule
          </UButton>
        </div>
      </div>
    </div>

    <!-- Venue Section -->
    <div id="venue" class="py-24 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <UContainer>
        <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div class="space-y-6 lg:space-y-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
                Venue
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We are hosting all our events and your accommodation at the stunning
                <a href="https://www.balitropic-resort.com" target="_blank"
                  class="font-bold text-primary-400 dark:text-primary-400 underline decoration-2 decoration-transparent hover:decoration-current transition-all">
                  Bali Tropic Resort & Spa</a>.
                Located on the pristine coastline of Nusa Dua, this beautiful 5-star beachfront resort blends
                traditional
                Balinese architecture with modern luxury.
                Surrounded by lush tropical gardens and directly on the beach, it offers a relaxing and luxurious
                retreat
                for our celebration.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center gap-2">
                <UIcon name="i-material-symbols-apartment-rounded" class="w-5 h-5 text-primary-400" /> Spacious Rooms
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-material-symbols-local-bar-rounded" class="w-5 h-5 text-primary-400" /> Multiple Dining
                & Bars
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-material-symbols-sunny-rounded" class="w-5 h-5 text-primary-400" /> Direct Beach Access
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-material-symbols-flight-takeoff-rounded" class="w-5 h-5 text-primary-400" /> Water Sports
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-material-symbols-query-stats-rounded" class="w-5 h-5 text-primary-400" /> Cultural Shows
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-material-symbols-group-rounded" class="w-5 h-5 text-primary-400" /> Kids Club
              </div>
            </div>

            <!-- Extend Stay / Pre & Post Wedding -->
            <div
              class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-primary-100 dark:border-primary-900/50 relative overflow-hidden">
              <div
                class="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                EXTEND YOUR STAY</div>
              <h3 class="font-bold text-xl mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <UIcon name="i-material-symbols-hotel-rounded" class="w-5 h-5 text-primary-400" /> Pre & Post
                Wedding
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Want to arrive early or stay longer at the venue?
                These are the rates for our guests to book additional nights.</p>

              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Per Night</span>
                <USelect v-model="convertToCurrency" :options="currencyOptions" size="sm" class="w-20" />
              </div>

              <div class="space-y-3 text-sm mb-6">
                <div class="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Deluxe Room - 1 Bed</span>
                  <div class="text-right">
                    <div class="font-bold text-gray-500 dark:text-gray-400 notranslate" translate="no"
                      v-text="formatCurrency(2000000, 'IDR', true)"></div>
                    <div class="font-bold text-primary-600 dark:text-primary-400 mt-0.5 notranslate" translate="no"
                      v-text="formatCurrency(2000000 / convertRates[convertToCurrency], convertToCurrency, true)"></div>
                  </div>
                </div>
                <div class="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Additional Bed per Child</span>
                  <div class="text-right">
                    <div class="font-bold text-gray-500 dark:text-gray-400 notranslate" translate="no"
                      v-text="formatCurrency(700000, 'IDR', true)"></div>
                    <div class="font-bold text-primary-600 dark:text-primary-400 mt-0.5 notranslate" translate="no"
                      v-text="formatCurrency(700000 / convertRates[convertToCurrency], convertToCurrency, true)"></div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col xl:flex-row gap-4">
                <div class="flex-1 flex flex-col gap-1.5 items-center">
                  <UButton to="https://www.booking.com/hotel/id/bali-tropic-resort-spa.html" target="_blank"
                    color="primary" variant="solid" class="w-full justify-center"
                    icon="i-material-symbols-open-in-new-rounded">
                    Booking.com
                  </UButton>
                  <span class="text-xs text-gray-500 dark:text-gray-400 font-medium text-center">(to book for
                    Adults Only)</span>
                </div>
                <div class="flex-1 flex flex-col gap-1.5 items-center">
                  <UButton to="https://wa.me/6281333352893" target="_blank" color="green" variant="soft"
                    class="w-full justify-center whitespace-nowrap" icon="i-simple-icons-whatsapp">
                    Wedding Planner
                  </UButton>
                  <span class="text-xs text-gray-500 dark:text-gray-400 font-medium text-center">(to book with
                    Kids)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div class="relative group">
              <div
                class="absolute -inset-2 bg-gradient-to-r from-primary-400 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500">
              </div>
              <!-- Fixed Height & Position for Venue Image -->
              <div class="w-full h-96 relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://photos.hotelbeds.com/giata/original/02/024225/024225a_hb_p_001.jpg"
                  alt="Bali Tropic Resort"
                  class="absolute inset-0 w-full h-full object-cover transform transition duration-500 hover:scale-105" />
              </div>
            </div>

            <!-- Map Section -->
            <div class="w-full relative z-10">
              <div class="rounded-3xl overflow-hidden shadow-2xl h-[400px] relative w-full mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.00024467499!2d115.22542109999999!3d-8.7860455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0eeb3beb%3A0x76a8bfdc62b02ddd!2sBali%20Tropic%20Resort%20%26%20Spa!5e0!3m2!1sen!2sid!4v1771767258126!5m2!1sen!2sid"
                  width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div class="text-center mt-4">
                <UButton to="https://maps.app.goo.gl/kWFnN4vG1sah3N2u5" target="_blank" variant="link" color="gray"
                  icon="i-material-symbols-open-in-new-rounded">Open in Google Maps</UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Schedule Section -->
    <div id="schedule" class="py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16 space-y-4">
          <div class="flex items-center justify-center gap-4">
            <h2 class="text-4xl md:text-5xl font-bold text-gradient-primary">
              Wedding Timeline
            </h2>
            <UBadge color="amber" variant="subtle" size="md" class="font-bold tracking-widest animate-pulse"
              :ui="{ rounded: 'rounded-full' }">WIP</UBadge>
          </div>
          <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A celebration of love across two beautiful days.
          </p>
          <div class="flex justify-center mt-6">
            <UDropdown :items="calendarOptions" :popper="{ placement: 'bottom-start' }">
              <UButton color="primary" variant="soft" icon="i-material-symbols-calendar-month-rounded"
                label="Add to Calendar" trailing-icon="i-material-symbols-keyboard-arrow-down-rounded" />
            </UDropdown>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 space-y-12 lg:space-y-0">
          <div v-for="(day, index) in schedule" :key="index" class="relative">
            <div
              class="sticky top-20 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 mb-8 border-b border-gray-100 dark:border-gray-800 text-center lg:text-left">
              <span
                class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-rose-400 animate-gradient-texty">
                {{ day.date }}
              </span>
            </div>

            <div class="grid gap-6">
              <div v-for="(event, eIndex) in day.events" :key="eIndex"
                class="group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:ring-2 hover:ring-primary-500/20">

                <div class="flex flex-col md:flex-row lg:flex-col gap-6 items-start">
                  <!-- Content -->
                  <div class="flex-grow space-y-2">
                    <div class="flex flex-col xl:flex-row xl:items-center gap-2 mb-2">
                      <div
                        class="w-10 h-10 rounded-2xl bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">
                        <UIcon size="sm" :name="event.icon" :class="`text-${event.color || 'primary'}-500`" />
                      </div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ event.title }}</h3>
                    </div>
                    <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 whitespace-nowrap mb-1">
                      <UIcon name="i-material-symbols-schedule-outline-rounded" class="w-4 h-4" />
                      <span class="font-bold">{{ event.time }}</span>
                      <span v-if="event.duration" class="text-sm">
                        - {{ event.duration }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-2 items-start">
                      <div v-if="event.venue"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                        <UIcon name="i-material-symbols-location-on-rounded"
                          class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        {{ event.venue }}
                      </div>
                      <div v-if="event.dressCode || event.dressColors" class="flex flex-wrap items-center gap-2">
                        <div v-if="event.dressCode"
                          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-bold text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-800/50">
                          <UIcon name="i-material-symbols-auto-awesome-rounded"
                            class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          {{ event.dressCode }}
                        </div>
                        <div v-if="event.dressColors" class="flex items-center gap-0.5 ml-1">
                          <span v-for="color in event.dressColors" :key="color" :class="color"
                            class="w-3 h-3 rounded-full border border-white/80 auto-shadow dark:border-gray-800/80"></span>
                        </div>
                      </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line mt-2">
                      {{ event.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Travel Info -->
    <div id="travel-info" class="py-24 bg-gray-50 dark:bg-gray-800/50">
      <UContainer>
        <h2 class="text-4xl md:text-5xl text-center mb-12 font-bold text-gradient-primary">
          Travel Information
        </h2>

        <!-- Visa Section -->
        <div class="w-full mx-auto mb-16 p-8 md:p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-sm">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left: Info & CTA -->
            <div class="text-center md:text-left space-y-6">
              <div
                class="w-14 h-14 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center mb-4 text-primary-400 dark:text-primary-400">
                <UIcon name="i-material-symbols-badge-rounded" class="w-8 h-8" />
              </div>
              <div>
                <h3 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Visa Information</h3>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                  Most visitors need a visa to enter Bali and we recommend applying online to skip the airport queues
                </p>
              </div>
              <div class="hidden md:block">
                <UButton size="xl" to="https://evisa.imigrasi.go.id/" target="_blank" color="primary"
                  icon="i-material-symbols-arrow-circle-right-rounded">Apply for E-Visa</UButton>
              </div>
            </div>

            <!-- Right: Options -->
            <div class="flex flex-col gap-6">
              <div class="grid gap-6 sm:grid-cols-2">
                <div
                  class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-full">
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Option 1</div>
                    <div class="font-bold text-xl text-gray-900 dark:text-white mb-1">Visa on Arrival</div>
                    <div class="text-sm text-gray-500">Pay at the airport counters in IDR using Card (don't use cash)
                    </div>
                  </div>
                  <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span class="text-sm font-medium text-gray-500">Cost: </span>
                    <span class="font-bold text-teal-400 notranslate" translate="no"
                      v-text="formatCurrency(525000, 'IDR', true)"></span>
                  </div>
                </div>

                <div
                  class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-2 border-primary-500 relative overflow-hidden flex flex-col justify-between h-full">
                  <div
                    class="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                    RECOMMENDED</div>
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-primary-500 mb-2">Option 2</div>
                    <div class="font-bold text-xl text-gray-900 dark:text-white mb-1">E-Visa On Arrival</div>
                    <div class="text-sm text-gray-500">Apply online 48hrs before and pay using Card</div>
                  </div>
                  <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span class="text-sm font-medium text-gray-500">Cost: </span>
                    <span class="font-bold text-teal-400 notranslate" translate="no"
                      v-text="formatCurrency(500000, 'IDR', true)"></span>
                  </div>
                </div>
              </div>

              <!-- Mini IDR Converter -->
              <div
                class="bg-gray-50 dark:bg-gray-900/50 p-2 sm:p-3 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2 shadow-inner">
                <UInput v-model.number="convertFromIdrAmount" type="number" size="sm"
                  class="flex w-[100px] sm:w-[150px]" placeholder="Amt">
                  <template #trailing>
                    <span class="text-[10px] font-bold text-gray-500">IDR</span>
                  </template>
                </UInput>
                <span class="text-sm font-medium text-gray-500">to</span>
                <USelect v-model="convertToCurrency" :options="currencyOptions" size="sm" class="w-[100px]" />
                <UIcon name="i-material-symbols-arrow-forward-rounded"
                  class="w-4 h-4 text-gray-400 shrink-0 hidden sm:block" />
                <div
                  class="text-base sm:text-lg font-black text-primary-600 dark:text-primary-400 shrink-0 whitespace-nowrap notranslate"
                  translate="no" v-text="convertedFromIdr">
                </div>
              </div>
            </div>

            <!-- Mobile CTA (shown below cards on mobile) -->
            <div class="md:hidden">
              <UButton size="xl" to="https://evisa.imigrasi.go.id/" target="_blank" color="primary" block
                icon="i-material-symbols-arrow-circle-right-rounded">Apply for E-Visa Now</UButton>
            </div>
          </div>
        </div>


        <h3 class="text-3xl font-bold text-center mb-2">Travel Options</h3>
        <p class="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          The closest airport is Denpasar (DPS) and it's about a 10-15 minute drive to the venue, we recommend booking
          your flights or bus tickets early to get the best rates.
        </p>

        <div class="space-y-8">
          <!-- Domestic Travel -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 class="text-xl font-bold mb-2 flex items-center gap-2">
              <UIcon name="i-material-symbols-directions-bus-rounded"
                class="w-5 h-5 text-emerald-400 dark:text-emerald-400" />
              Domestic
            </h4>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="font-bold text-lg mb-2">Flights</div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Jakarta / Surabaya:</strong> 1-2h Direct (Garuda, Citilink, AirAsia, Lion)</li>
                  <li><strong>Semarang / Yogyakarta:</strong> ~1.5h Direct flights available</li>
                </ul>
              </div>
              <div>
                <div class="font-bold text-lg mb-2">Overland & Bus</div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Sleeper Buses:</strong> Executive sleeper buses run from Jakarta, Surabaya, Semarang, and
                    Yogyakarta to Bali (includes ferry crossing)</li>
                  <li><strong>Tip:</strong> Book via Traveloka/RedBus for comfy options like Gunung Harta</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Direct / Short Haul -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 class="text-xl font-bold mb-2 flex items-center gap-2">
              <UIcon name="i-material-symbols-flight-takeoff-rounded"
                class="w-5 h-5 text-primary-400 dark:text-primary-400" />
              Direct & Short Haul
            </h4>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="font-bold text-lg mb-2">From Australia <span class="text-xl">🇦🇺</span></div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Melbourne/Sydney:</strong> 6h Direct (Qantas, Jetstar, Virgin, Batik Air)</li>
                  <li><strong>Tip:</strong> Jetstar sales usually drop on Fridays!</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Long Haul -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 class="text-xl font-bold mb-2 flex items-center gap-2">
              <UIcon name="i-material-symbols-globe" class="w-5 h-5 text-indigo-400 dark:text-indigo-400" />
              Long Haul Routes
            </h4>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="font-bold text-lg mb-2">From India <span class="text-xl">🇮🇳</span></div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Via Singapore (Rec):</strong> Singapore Airlines offers seamless bags-through connections
                  </li>
                  <li><strong>Via Vietnam/Thailand:</strong> VietJet/Thai Airways often have competitive rates</li>
                  <li><strong>Direct:</strong> Vistara flies direct from Delhi (DEL) to Bali (DPS)</li>
                </ul>
              </div>
              <div>
                <div class="font-bold text-lg mb-2">From USA/Europe <span class="text-xl">🇺🇸 🇦🇪</span></div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Hubs:</strong> Connect via Singapore (SIN), Dubai (DXB), or Taipei (TPE)</li>
                  <li><strong>Route:</strong> Emirates flies Dubai to Bali directly</li>
                  <li><strong>Strategy:</strong> Break the journey with a 1-day layover in Singapore to refresh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Travel Essentials Separated -->
        <h2 class="text-3xl font-bold text-center my-12 pt-12 border-t border-gray-200 dark:border-gray-800">
          Travel Essentials
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">

          <!-- Customs ECD (Mandatory) -->
          <div
            class="p-6 rounded-2xl bg-primary-500/5 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              MANDATORY</div>
            <div
              class="w-14 h-14 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center mb-4 text-primary-400 dark:text-primary-400">
              <UIcon name="i-material-symbols-fact-check-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Arrival Card</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Complete 2 days before arrival, save the QR code as
              you will need this at customs</p>
            <UButton size="md" to="https://allindonesia.imigrasi.go.id" target="_blank" color="primary" variant="soft">
              Fill Arrival Card
            </UButton>
          </div>

          <!-- Travel Insurance -->
          <div class="p-6 rounded-2xl bg-teal-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-teal-200 dark:bg-teal-900 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400">
              <UIcon name="i-material-symbols-verified-user-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Insurance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Don't fly without Travel Insurance, covers medical
              & travel delays</p>
            <UButton size="md"
              to="https://safetywing.com/nomad-insurance/?referenceID=24736645&utm_source=24736645&utm_medium=Ambassador"
              target="_blank" color="teal" variant="soft">Get Insurance</UButton>
          </div>

          <!-- Flights -->
          <div class="p-6 rounded-2xl bg-sky-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-sky-200 dark:bg-sky-900 flex items-center justify-center mb-4 text-sky-600 dark:text-sky-400">
              <UIcon name="i-material-symbols-flight-takeoff-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Flights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Compare flight prices to get the best deal, book
              early to get best price</p>
            <UButton size="md"
              to="https://www.skyscanner.net/g/referrals/v1/flights/cheap-flights-to?mediaPartnerId=2989064&origin=AU&destination=ID&outboundDate=2026-02-26&inboundDate=2026-03-05&market=AU&currency=AUD&locale=en-US&adults=1&cabinclass=economy&children=0&infants=0&preferdirects=false&rtn=1&showDirectDays=true"
              target="_blank" color="sky" variant="soft">Book Flights</UButton>
          </div>

          <!-- Zero FX Cards -->
          <div class="p-6 rounded-2xl bg-amber-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-amber-200 dark:bg-amber-900 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
              <UIcon name="i-material-symbols-attach-money-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Money</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Get Zero forex Cards and avoid bank fees</p>
            <div class="grid grid-cols-2 gap-2 mt-auto">
              <UButton size="md" to="https://hook.up.me/hakr" target="_blank" color="amber" variant="soft">Up Bank (AU)
              </UButton>
              <UButton size="md" to="https://fi.onelink.me/GvZH/n0vhu8np" target="_blank" color="primary"
                variant="soft">
                Fi Money (IN)
              </UButton>
            </div>
          </div>

          <!-- Moreta Pay -->
          <div class="p-6 rounded-2xl bg-emerald-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-emerald-200 dark:bg-emerald-900 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
              <UIcon name="i-material-symbols-qr-code-scanner-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Payment</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Use Moreta Pay to easily scan and pay as a local
              across
              Asia</p>
            <div class="mt-auto">
              <UButton size="md" to="https://moretapay.com/" target="_blank" color="emerald" variant="soft">
                Get Moreta Pay
              </UButton>
            </div>
          </div>
          <!-- Packing Tips -->
          <div class="p-6 rounded-2xl bg-rose-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-rose-200 dark:bg-rose-900 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
              <UIcon name="i-material-symbols-lightbulb-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Packing Essentials</h4>
            <div class="text-sm text-gray-600 dark:text-gray-400 text-left space-y-1 mb-2">
              <p>• <strong>Sun Protection:</strong> High SPF & Hat</p>
              <p>• <strong>Bug Spray:</strong> For tropical evenings</p>
              <p>• <strong>Power:</strong> Type C / F (Euro) Adapter</p>
              <p>• <strong>Meds:</strong> Imodium / Panadol</p>
            </div>
          </div>

        </div>
      </UContainer>
    </div>

    <!-- Vacation Mode -->
    <div class="py-24 bg-gradient-to-b from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
      <UContainer>
        <div class="text-center mb-12">
          <span class="uppercase tracking-widest text-amber-500 font-bold text-sm mb-2 block">Make it a vacation</span>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-bold text-gradient-primary">
            Explore the Island</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bali is magic. Since you are making the trip, why not turn it into a vacation?
            Here are top areas to explore.
          </p>
        </div>

        <div class="flex justify-center mb-16">
          <UButton size="xl" to="https://www.saltinourhair.com/bali/bali-itinerary-7-days/" target="_blank"
            color="amber" variant="soft" icon="i-material-symbols-map-rounded" class="px-8">View 7-Day Itinerary
          </UButton>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div v-for="spot in vacationSpots" :key="spot.title"
            class="group relative overflow-hidden rounded-3xl h-80 shadow-lg">
            <img :src="spot.image"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
              <h3 class="text-2xl font-bold mb-1">{{ spot.title }}</h3>
              <div class="text-orange-300 font-medium text-sm mb-2">{{ spot.subtitle }}</div>
              <p
                class="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
                {{ spot.description }}
              </p>
            </div>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Local Guide</h3>

        <!-- Weather Widget -->
        <div
          class="w-full mx-auto mb-16 rounded-3xl overflow-hidden bg-white dark:bg-gray-800/50 shadow-sm border border-gray-100 dark:border-gray-800 relative z-10 p-4 md:p-6 backdrop-blur-md">
          <h3 class="font-bold text-xl mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <UIcon name="i-material-symbols-cloud" class="w-6 h-6 text-sky-500" /> Live Weather
          </h3>
          <div id="ww_8e782f6216a7e" v='1.3' loc='id'
            a='{"t":"responsive","lang":"en","sl_lpl":1,"ids":["wl2855"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"rgba(189,189,189,1)","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","cl_odd":"#00000000"}'>
            <a href="https://weatherwidget.org/" id="ww_8e782f6216a7e_u" target="_blank" rel="noopener noreferrer">Free
              weather widget for website</a>
          </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-16">

          <!-- Hotels -->
          <div class="p-6 rounded-2xl bg-fuchsia-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-fuchsia-200 dark:bg-fuchsia-900 flex items-center justify-center mb-4 text-fuchsia-600 dark:text-fuchsia-400">
              <UIcon name="i-material-symbols-home-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Hotels</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Arriving early or staying late? Find hotel deals.
            </p>
            <UButton size="md"
              to="https://www.skyscanner.net/g/referrals/v1/hotels/home-view?mediaPartnerId=2989064&skyscanner_node_code=ID&checkin=2026-02-26&checkout=2026-03-05&market=AU&currency=AUD&locale=en-US&rooms=1"
              target="_blank" color="fuchsia" variant="soft">Book Accommodation</UButton>
          </div>

          <!-- eSIM Data -->
          <div class="p-6 rounded-2xl bg-indigo-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-indigo-200 dark:bg-indigo-900 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
              <UIcon name="i-material-symbols-wifi-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Internet</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Stay connected instantly with eSIM. Avoid airport
              SIM queues.</p>
            <UButton size="md" to="https://getnomadapp.go.link/universal-link?page=add_referral&referral_code=HAKR67HW"
              target="_blank" color="indigo" variant="soft">Get eSIM</UButton>
          </div>

          <!-- Transport -->
          <div class="p-6 rounded-2xl bg-green-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-green-200 dark:bg-green-900 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <UIcon name="i-material-symbols-location-on-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Transport</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Safe, affordable rides with <strong>Gojek</strong>
              & <strong>Grab</strong>.</p>
            <div class="grid grid-cols-2 gap-2 mt-auto">
              <UButton size="md" to="https://www.gojek.com/en-id/" target="_blank" color="green" variant="soft">Gojek
              </UButton>
              <UButton size="md" to="https://www.grab.com/id/en/transport/" target="_blank" color="green"
                variant="soft">
                Grab</UButton>
            </div>
          </div>

          <!-- Food Delivery -->
          <div class="p-6 rounded-2xl bg-orange-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-orange-200 dark:bg-orange-900 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
              <UIcon name="i-material-symbols-fork-spoon-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Food</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Order local eats or late-night snacks easily.</p>
            <div class="grid grid-cols-2 gap-2 mt-auto">
              <UButton size="md" to="https://www.gojek.com/en-id/gofood/" target="_blank" color="orange" variant="soft">
                GoFood</UButton>
              <UButton size="md" to="https://food.grab.com/id/en/" target="_blank" color="orange" variant="soft">
                GrabFood</UButton>
            </div>
          </div>


          <!-- Currency Converter -->
          <div class="p-6 rounded-2xl bg-emerald-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-emerald-200 dark:bg-emerald-900 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
              <UIcon name="i-material-symbols-attach-money-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-4">Quick Converter</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 hidden md:block">Get a quick estimate of your
              currency in Indonesian Rupiah (IDR)</p>
            <div class="w-full mt-auto">
              <div
                class="flex items-center gap-2 w-full p-2 sm:p-3 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-xl shadow-inner border border-emerald-100 dark:border-emerald-800">
                <UInput v-model.number="convertAmount" type="number" class="w-[100px]" placeholder="Amt" />
                <USelect v-model="convertCurrency" :options="currencyOptions" class="w-20 shrink-0" />
                <div
                  class="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-300 whitespace-nowrap w-[100px] flex items-center gap-1">
                  <span>=</span>
                  <span class="notranslate" translate="no" v-text="convertedIDR"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Time Checker -->
          <div class="p-6 rounded-2xl bg-cyan-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-cyan-200 dark:bg-cyan-900 flex items-center justify-center mb-4 text-cyan-600 dark:text-cyan-400">
              <UIcon name="i-material-symbols-schedule-rounded" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-4">Time Difference</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 hidden md:block">Compare your local time with Bali
              time.</p>
            <div class="w-full space-y-3 mt-auto">
              <USelect v-model="selectedTimezone" :options="timezonesLocal" option-attribute="label"
                value-attribute="value" class="w-full" />
              <div
                class="flex justify-between items-center p-2 bg-cyan-100/50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 rounded-lg text-cyan-800 dark:text-cyan-300 text-sm font-bold">
                <div class="text-left flex flex-col items-center">
                  <span class="text-[10px] uppercase opacity-70">There</span>
                  <span class="notranslate" translate="no" v-text="currentTimeInSelected"></span>
                </div>
                <UIcon name="i-material-symbols-arrow-forward-rounded" class="w-4 h-4 opacity-50" />
                <div class="text-right flex flex-col items-center">
                  <span class="text-[10px] uppercase opacity-70">Bali</span>
                  <span class="notranslate" translate="no" v-text="currentTimeInBali"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Google My Maps Embed -->
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Curated Map</h3>
        <div class="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 h-[500px] w-full mx-auto">
          <iframe src="https://www.google.com/maps/d/embed?mid=1mzLbQ6NQEwZ8htF3_TdBcu9QhKxqOlm_&ehbc=2E312F"
            width="100%" height="100%" style="border:0"></iframe>
        </div>

      </UContainer>
    </div>

    <!-- Wishing Well -->
    <div class="py-12 bg-white dark:bg-gray-900 text-center">
      <UContainer class="max-w-2xl">
        <UIcon name="i-material-symbols-redeem-rounded" class="w-12 h-12 text-primary-300 mb-4" />
        <h2 class="text-2xl font-bold mb-4">Wishing Well</h2>
        <p class="text-gray-600 dark:text-gray-400 italic">
          Your presence at our wedding is the greatest gift of all. However, should you wish to honour us with a gift, a
          contribution to our wishing well for our future together would be warmly appreciated.
        </p>
      </UContainer>
    </div>

    <!-- FAQ -->
    <div id="faq" class="py-24 bg-primary-50/30 dark:bg-gray-800/50">
      <UContainer class="max-w-4xl">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div class="grid gap-4">
          <UAccordion :items="faqs" variant="ghost" color="gray"
            :ui="{ item: { padding: 'pb-4 pl-4' }, wrapper: 'bg-transparent', button: { active: 'text-gray-900 dark:text-white' } }" />
        </div>
      </UContainer>
    </div>

    <!-- RSVP CTA -->
    <div id="contact" class="py-24 bg-gray-900 text-white text-center">
      <UContainer>
        <div class="max-w-2xl mx-auto space-y-8">
          <UIcon name="i-material-symbols-favorite-rounded" class="w-16 h-16 text-rose-400 animate-pulse" />
          <h2 class="text-4xl md:text-5xl font-bold text-gradient-primary">
            We Can't Wait!</h2>
          <p class="text-xl text-gray-300">
            Please let us know if you can make it by <span class="text-white font-bold">Feb 28th</span>.
            Accommodation is waiting for you!
          </p>
          <UButton size="xl" to="https://hakrmey.rsvpify.com/" target="_blank" color="primary" variant="solid"
            icon="i-material-symbols-mail-rounded" class="font-bold">RSVP Now
          </UButton>
        </div>
      </UContainer>
    </div>

  </div>
</template>

<style scoped>
.font-display {
  font-family: 'Outfit', sans-serif;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-heartbeat {
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}

.text-gradient-primary {
  background: linear-gradient(to right,
      #14b8a6,
      #f43f5e,
      #f59e0b,
      #3b82f6,
      #14b8a6,
      #f43f5e,
      #f59e0b,
      #3b82f6,
      #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: gradient-loop 12s linear infinite;
}

@keyframes gradient-loop {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>
