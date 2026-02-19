<script setup lang="ts">
const schedule = [
  {
    date: 'April 29th',
    events: [
      { time: '11:00 AM', title: 'Check In', description: 'Welcome to Wedding! Head to the lobby for a refreshing welcome drink while you get settled into your rooms.', icon: 'i-heroicons-key', color: 'emerald' },
      { time: '12:00 PM', title: 'Welcome Lunch', description: 'Kick off the celebrations with a delicious spread of local and international favorites as guests arrive. Meet the families and enjoy the tropical vibes.', icon: 'i-heroicons-user-group', color: 'teal' },
      { time: '1:00 PM', title: 'Purification Ceremony (Haldi)', description: 'A vibrant start to the festivities! We apply turmeric paste to the bride and groom for a glowing complexion. Expect music, laughter, and getting a little messy.\n\nDress Code: Bright Yellows & Oranges.', icon: 'i-heroicons-sparkles', color: 'yellow' },
      { time: '4:00 PM', title: 'Henna Ceremony (Mehendi)', description: 'Relax by the poolside cabanas while professional artists apply intricate henna designs. Enjoy coconuts, and a grazing table.\n\nDress Code: Colorful Boho Chic / Floral Prints.', icon: 'i-heroicons-paint-brush', color: 'rose' },
      { time: '7:00 PM', title: 'Musical Night (Sangeet)', description: 'Put on your dancing shoes! A night of Tollywood / Bollywood beats, family performances, and a grand feast. This is the time to let loose and party!\n\nDress Code: Glitzy Western Glam / Cocktail Attire.', icon: 'i-heroicons-musical-note', color: 'purple' },
      { time: '8:30 PM', title: 'Welcome Dinner', description: 'After the performances, join us for a lavish buffet featuring the best of Indian and Indonesian cuisine. The night continues with an open dance floor!', icon: 'i-heroicons-cake', color: 'indigo' },
    ]
  },
  {
    date: 'April 30th',
    events: [
      { time: '9:00 AM', title: 'Wedding Breakfast', description: 'Fuel up for the big day with a floating breakfast spread.', icon: 'i-heroicons-sun' },
      { time: '10:00 AM', title: 'Indonesian Ceremony (Akad Nikah)', description: 'We honor Mey’s heritage with a traditional Indonesian Solemnization Ceremony. A sacred, intimate moment where we officially say "I Do".\n\nDress Code: Modest Traditional (Kebaya/Batik).', icon: 'i-heroicons-heart', color: 'emerald' },
      { time: '12:00 PM', title: 'Wedding Lunch', description: 'Celebrate the newlyweds with a traditional Balinese feast.', icon: 'i-heroicons-cake' },
      { time: '5:00 PM', title: 'Wedding procession (Baraat)', description: 'The Groom’s Grand Entrance! Join Hari’s side for an epic musical procession with drums and dancing leading to the Mandap.', icon: 'i-heroicons-truck', color: 'orange' },
      { time: '6:00 PM', title: 'Indian Ceremony (Pelli)', description: 'The traditional Indian Wedding under the stars. Witness the sacred fire rituals, the seven steps (Saptapadi), and the union of our families.\n\nDress Code: Traditional Indian (Saree/Sherwani etc).', icon: 'i-heroicons-fire', color: 'red' },
      { time: '8:30 PM', title: 'Wedding Dinner', description: 'A magical seated dinner with speeches, cake cutting, and dancing late into the night.', icon: 'i-heroicons-star', color: 'indigo' }
    ]
  },
  {
    date: 'May 1st',
    events: [
      { time: '8:00 AM', title: 'Blessings Ceremony (Satyanarayana Puja)', description: 'A sacred ritual seeking divine blessings for our new journey together.', icon: 'i-heroicons-sun', color: 'amber' },
      { time: '9:00 AM', title: 'Farewell Breakfast', description: 'One last gathering to hug, laugh, and relive the memories before we part ways.', icon: 'i-heroicons-hand-raised', color: 'primary' },
      { time: '11:00 AM', title: 'Check Out', description: 'Thank you for celebrating with us! Safe travels home.', icon: 'i-heroicons-arrow-right-start-on-rectangle', color: 'gray' }
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
    content: 'Yes! We have arranged your stay at the beautiful Swan Paradise Resort for the duration of the wedding events (Check-in 12pm April 29 — Check-out 11am May 1). Breakfast is included each morning!'
  },
  {
    label: 'How do I get to the venue?',
    content: 'The easiest way is to book a Grab (like Uber) or Gojek from the airport. There is an official Grab Lounge at DPS arrivals which is safe and easy. The ride to Swan Paradise Resort takes about 60-90 minutes depending on traffic.'
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
const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

const updateTimer = () => {
  const now = new Date().getTime()
  const distance = weddingDate - now
  if (distance < 0) return

  timeLeft.value.days = Math.floor(distance / (1000 * 60 * 60 * 24))
  timeLeft.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  timeLeft.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  timeLeft.value.seconds = Math.floor((distance % (1000 * 60)) / 1000)
}

let timerInterval: any
onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000)
  updateTimer()
})
onUnmounted(() => clearInterval(timerInterval))

const story = [
  { year: '2019', title: 'First Met', description: 'Coffee at 10am turns into dinner at 10pm.' },
  { year: '2021', title: 'Yes!', description: 'She said yes under the northern lights.' },
  { year: '2026', title: 'I Do', description: 'The start of forever in Bali.' }
]

const party = [
  { name: 'Groomsmen', role: 'The Wolfpack', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
  { name: 'Bridesmaids', role: 'Team Bride', image: 'https://images.unsplash.com/photo-1545315003-c5ad6226c272' }
]

useSeoMeta({
  title: 'Hari & Mey Wedding',
  titleTemplate: '%s',
  description: 'Join Hari & Mey for their wedding celebration in Bali.',
  ogImage: '/destination-background.jpg',
  twitterImage: '/destination-background.jpg',
  twitterCard: 'summary_large_image'
})

definePageMeta({
  layout: 'plain'
})
</script>

<template>
  <div class="overflow-hidden">
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
          <UIcon name="i-heroicons-solid-heart" class="text-rose-400 animate-heartbeat" />
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
              <div class="text-2xl md:text-4xl font-bold">{{ timeLeft.days }}</div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Days</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold">{{ timeLeft.hours }}</div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Hrs</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold">{{ timeLeft.minutes }}</div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Mins</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 shadow-lg">
              <div class="text-2xl md:text-4xl font-bold">{{ timeLeft.seconds }}</div>
              <div class="text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-medium">Secs</div>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm font-bold text-gray-200 tracking-wider">
            <div class="bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
              Check-in: 12pm, 29th April
            </div>
            <div class="bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
              Check-out: 11am, 1st May
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-4 justify-center py-8 w-full max-w-lg mx-auto">
          <UButton size="xl" to="https://hakrmey.rsvpify.com/" target="_blank" color="primary" variant="solid"
            icon="i-heroicons-envelope" class="font-bold">RSVP Now
          </UButton>
          <UButton size="xl" to="#schedule" color="white" icon="i-heroicons-arrow-down-circle" variant="solid"
            class="font-medium">Schedule
          </UButton>
        </div>
      </div>
    </div>

    <!-- Venue Section -->
    <div class="py-24 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <UContainer>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2
              class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 animate-gradient-text">
              The Venue
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We are hosting all our events and your accommodation at the stunning <a
                href="https://swanparadisebali.com" target="_blank"
                class="font-bold text-primary-400 dark:text-primary-400 underline decoration-2 decoration-transparent hover:decoration-current transition-all">Swan
                Paradise by Pramana Experience</a>.
              Located in the cultural heart of Gianyar, this architectural masterpiece unites traditional Balinese
              aesthetics with modern luxury.
              Surrounded by lush rice paddies and butterfly gardens, it offers a serene escape for our celebration.
            </p>
            <div class="grid grid-cols-2 gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 mt-6">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-home-modern" class="w-5 h-5 text-primary-400" /> Luxury Suites
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-cake" class="w-5 h-5 text-primary-400" /> All-Inclusive Dining
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-primary-400" /> Dolphin Pools
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-heart" class="w-5 h-5 text-primary-400" /> Spa & Wellness
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-primary-400" /> Modern Gym
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-trophy" class="w-5 h-5 text-primary-400" /> Tennis Court
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-building-library" class="w-5 h-5 text-primary-400" /> On-site Museum
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-wifi" class="w-5 h-5 text-primary-400" /> High-Speed WiFi
              </div>
            </div>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-primary-400 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500">
            </div>
            <!-- Fixed Height & Position for Venue Image -->
            <div class="w-full h-96 relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMOdcuLGBOjqT4dr_JKFCuJ5prAks6dXagv4Zcx=s1360-w1360-h1020-rw"
                alt="Swan Paradise Resort"
                class="absolute inset-0 w-full h-full object-cover transform transition duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Map Section (Fixed Width) -->
    <div class="bg-primary-50 dark:bg-gray-800 pb-24">
      <UContainer>
        <div
          class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 h-[400px] relative w-full mx-auto">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDpBKZ2oyPeYEQhFvu9ZMKJY1_epLhNgdQ&q=Swan%20Paradise%20A%20Pramana%20Experience%20-%20Jalan%20Raya%20Bonbiyu%2C%20Banda%2C%20Blahbatuh%2C%20Saba%2C%20Kec.%20Gianyar%2C%20Kabupaten%20Gianyar%2C%20Bali%2080581%2C%20Indonesia"
            width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="text-center mt-4">
          <UButton to="https://maps.app.goo.gl/KXnbi7B4A9K8tYKt5" target="_blank" variant="link" color="gray"
            icon="i-heroicons-arrow-top-right-on-square">Open in Google Maps</UButton>
        </div>
      </UContainer>
    </div>

    <!-- Schedule Section -->
    <div id="schedule" class="py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16 space-y-4">
          <h2
            class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 animate-gradient-text">
            Wedding Timeline</h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A celebration of love across two beautiful days.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 space-y-12 lg:space-y-0">
          <div v-for="(day, index) in schedule" :key="index" class="relative">
            <div
              class="sticky top-20 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 mb-8 border-b border-gray-100 dark:border-gray-800 text-center lg:text-left">
              <span
                class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-rose-400 animate-gradient-text">
                {{ day.date }}
              </span>
            </div>

            <div class="grid gap-6">
              <div v-for="(event, eIndex) in day.events" :key="eIndex"
                class="group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:ring-2 hover:ring-primary-500/20">

                <div class="flex flex-col md:flex-row lg:flex-col gap-6 items-start">
                  <!-- Time & Icon -->
                  <div class="flex-shrink-0 flex md:flex-col lg:flex-row items-center gap-4 min-w-[100px]">
                    <div
                      class="w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">
                      <UIcon :name="event.icon" :class="`text-${event.color || 'primary'}-500`" />
                    </div>
                    <span class="font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap">{{ event.time }}</span>
                  </div>

                  <!-- Content -->
                  <div class="flex-grow space-y-2">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ event.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
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
        <h2
          class="text-4xl md:text-5xl text-center mb-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 animate-gradient-text">
          Travel Information</h2>

        <!-- Visa Section -->
        <div
          class="w-full mx-auto mb-16 p-8 md:p-12 rounded-3xl bg-white dark:bg-gray-800 border border-primary-100 dark:border-primary-800 shadow-sm">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left: Info & CTA -->
            <div class="text-center md:text-left space-y-6">
              <div
                class="w-14 h-14 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center mb-4 text-primary-400 dark:text-primary-400">
                <UIcon name="i-heroicons-identification" class="w-8 h-8" />
              </div>
              <div>
                <h3 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Visa Information</h3>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                  Most visitors need a visa to enter Bali. We recommend applying online to skip the airport queues.
                </p>
              </div>
              <div class="hidden md:block">
                <UButton size="xl" to="https://evisa.imigrasi.go.id/" target="_blank" color="primary"
                  icon="i-heroicons-arrow-right-circle">Apply for E-Visa Now</UButton>
              </div>
            </div>

            <!-- Right: Options -->
            <div class="grid gap-6 sm:grid-cols-2">
              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-full">
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Option 1</div>
                  <div class="font-bold text-xl text-gray-900 dark:text-white mb-1">Visa on Arrival</div>
                  <div class="text-sm text-gray-500">Pay at the airport counters.</div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 font-bold text-primary-400">
                  Cost: 500K IDR (~$30 USD)</div>
              </div>

              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-2 border-primary-500/20 relative overflow-hidden flex flex-col justify-between h-full">
                <div
                  class="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                  RECOMMENDED</div>
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider text-primary-500 mb-2">Option 2</div>
                  <div class="font-bold text-xl text-gray-900 dark:text-white mb-1">E-Visa On Arrival</div>
                  <div class="text-sm text-gray-500">Apply online 48hrs before.</div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 font-bold text-primary-400">
                  Cost: 500K IDR (~$30 USD)</div>
              </div>
            </div>

            <!-- Mobile CTA (shown below cards on mobile) -->
            <div class="md:hidden">
              <UButton size="xl" to="https://evisa.imigrasi.go.id/" target="_blank" color="primary" block
                icon="i-heroicons-arrow-right-circle">Apply for E-Visa Now</UButton>
            </div>
          </div>
        </div>


        <h3 class="text-3xl font-bold text-center mb-8">Flight Information</h3>
        <p class="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          The closest airport is Denpasar (DPS). It's about a 60-minute drive to the venue.
          We recommend booking your flights early to get the best rates.
        </p>

        <div class="space-y-8">
          <!-- Direct / Short Haul -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 class="text-xl font-bold mb-2 flex items-center gap-2">
              <div
                class="w-14 h-14 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center mb-4 text-primary-400 dark:text-primary-400">
                <UIcon name="i-heroicons-paper-airplane" class="w-8 h-8" />
              </div>
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
              <div
                class="w-14 h-14 rounded-full bg-primary-50 dark:bg-indigo-900 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                <UIcon name="i-heroicons-globe-alt" class="w-8 h-8" />
              </div>
              Long Haul Routes
            </h4>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="font-bold text-lg mb-2">From India <span class="text-xl">🇮🇳</span></div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Via Singapore (Rec):</strong> Singapore Airlines offers seamless bags-through connections.
                  </li>
                  <li><strong>Via Vietnam/Thailand:</strong> VietJet/Thai Airways often have competitive rates.</li>
                  <li><strong>Direct:</strong> Vistara flies direct from Delhi (DEL) to Bali (DPS).</li>
                </ul>
              </div>
              <div>
                <div class="font-bold text-lg mb-2">From USA/Europe <span class="text-xl">🇺🇸 🇪🇺</span></div>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li><strong>Hubs:</strong> Connect via Singapore (SIN), Dubai (DXB), or Taipei (TPE).</li>
                  <li><strong>Route:</strong> Emirates flies Dubai to Bali directly.</li>
                  <li><strong>Strategy:</strong> Break the journey with a 1-day layover in Singapore to refresh!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Travel Essentials Separated -->
        <h2 class="text-3xl font-bold text-center my-12 pt-12 border-t border-gray-200 dark:border-gray-800">
          Travel Essentials & Checklist
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <!-- 1. Customs ECD (Mandatory) -->
          <div
            class="p-6 rounded-2xl bg-primary-500/5 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              MANDATORY</div>
            <div
              class="w-14 h-14 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center mb-4 text-primary-400 dark:text-primary-400">
              <UIcon name="i-heroicons-clipboard-document-check" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Arrival Card</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Complete 2 days before arrival. Save the QR code.
              You will need this at customs.</p>
            <UButton size="md" to="https://allindonesia.imigrasi.go.id" target="_blank" color="primary" variant="soft">
              Fill Arrival Card
            </UButton>
          </div>

          <!-- 2. Travel Insurance -->
          <div class="p-6 rounded-2xl bg-teal-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-900 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400">
              <UIcon name="i-heroicons-shield-check" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Insurance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Don't fly without Travel Insurance. Covers medical
              & travel
              delays.</p>
            <UButton size="md"
              to="https://safetywing.com/nomad-insurance/?referenceID=24736645&utm_source=24736645&utm_medium=Ambassador"
              target="_blank" color="teal" variant="soft">Get Insurance</UButton>
          </div>

          <!-- 3. Flights -->
          <div class="p-6 rounded-2xl bg-sky-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-sky-50 dark:bg-sky-900 flex items-center justify-center mb-4 text-sky-600 dark:text-sky-400">
              <UIcon name="i-heroicons-paper-airplane" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Flights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Compare flight prices to get the best deal. Book
              early to get best price.</p>
            <UButton size="md"
              to="https://www.skyscanner.net/g/referrals/v1/flights/cheap-flights-to?mediaPartnerId=2989064&origin=AU&destination=ID&outboundDate=2026-02-26&inboundDate=2026-03-05&market=AU&currency=AUD&locale=en-US&adults=1&cabinclass=economy&children=0&infants=0&preferdirects=false&rtn=1&showDirectDays=true"
              target="_blank" color="sky" variant="soft">Book Flights</UButton>
          </div>

          <!-- 4. Hotels -->
          <div class="p-6 rounded-2xl bg-fuchsia-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900 flex items-center justify-center mb-4 text-fuchsia-600 dark:text-fuchsia-400">
              <UIcon name="i-heroicons-home" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Hotels</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Arriving early and planning a vacation or staying
              late? Find hotel deals.
            </p>
            <UButton size="md"
              to="https://www.skyscanner.net/g/referrals/v1/hotels/home-view?mediaPartnerId=2989064&skyscanner_node_code=ID&checkin=2026-02-26&checkout=2026-03-05&market=AU&currency=AUD&locale=en-US&rooms=1&filters={%22discount_types%22:%22cug%22}&adults=1"
              target="_blank" color="fuchsia" variant="soft">Book Accommodation</UButton>
          </div>

          <!-- 5. eSIM Data -->
          <div class="p-6 rounded-2xl bg-indigo-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
              <UIcon name="i-heroicons-wifi" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Internet</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Stay connected instantly with eSIM. Avoid airport
              SIM queues.
            </p>
            <UButton size="md"
              to="https://getnomadapp.go.link/universal-link?page=add_referral&referral_code=HAKR67HW&adj_t=1r3ajgtz_1rqdaxgv_1ryt1wk1&adj_fallback=https%3A%2F%2Fwww.getnomad.app%2Funiversal-link%3Fpage%3Dadd_referral%26referral_code%3DHAKR67HW&adj_redirect_macos=https%3A%2F%2Fwww.getnomad.app%2Funiversal-link%3Fpage%3Dadd_referral%26referral_code%3DHAKR67HW&adj_campaign=HAKR67HW"
              target="_blank" color="indigo" variant="soft">Get eSIM</UButton>
          </div>

          <!-- 6. Zero FX Cards -->
          <div class="p-6 rounded-2xl bg-amber-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
              <UIcon name="i-heroicons-credit-card" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Money</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Get Zero forex Cards and avoid bank fees. Open
              account and get card in a week.
            </p>
            <div class="grid grid-cols-2 gap-2">
              <UButton size="md" to="https://hook.up.me/hakr" target="_blank" color="amber" variant="soft">Up Bank (AU)
              </UButton>
              <UButton size="md" to="https://fi.onelink.me/GvZH/n0vhu8np" target="_blank" color="primary"
                variant="soft">Fi Money (IN)</UButton>
            </div>
          </div>

          <!-- 7. Transport -->
          <div class="p-6 rounded-2xl bg-green-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <UIcon name="i-heroicons-map-pin" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Transport</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Safe, affordable rides with <strong>Gojek</strong>
              & <strong>Grab</strong> (Scooter or Car).</p>
            <div class="grid grid-cols-2 gap-2 mt-auto">
              <UButton size="md" to="https://www.gojek.com/en-id/" target="_blank" color="green" variant="soft">Gojek
              </UButton>
              <UButton size="md" to="https://www.grab.com/id/en/transport/" target="_blank" color="green"
                variant="soft">Grab</UButton>
            </div>
          </div>

          <!-- 8. Food Delivery -->
          <div class="p-6 rounded-2xl bg-orange-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-orange-50 dark:bg-orange-900 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
              <UIcon name="i-heroicons-shopping-bag" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Food</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Order local eats or late-night snacks directly to
              your accommodation.</p>
            <div class="grid grid-cols-2 gap-2 mt-auto">
              <UButton size="md" to="https://www.gojek.com/en-id/gofood/" target="_blank" color="orange" variant="soft">
                GoFood</UButton>
              <UButton size="md" to="https://food.grab.com/id/en/" target="_blank" color="orange" variant="soft">
                GrabFood</UButton>
            </div>
          </div>

          <!-- 9. Packing Tips -->
          <div class="p-6 rounded-2xl bg-rose-500/5 shadow-sm flex flex-col items-center text-center">
            <div
              class="w-14 h-14 rounded-full bg-rose-50 dark:bg-rose-900 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
              <UIcon name="i-heroicons-light-bulb" class="w-7 h-7" />
            </div>
            <h4 class="font-bold text-xl mb-2">Packing Essentials</h4>
            <div class="text-sm text-gray-600 dark:text-gray-400 text-left space-y-1 mb-2">
              <p>• <strong>Sun Protection:</strong> High SPF & Hat.</p>
              <p>• <strong>Bug Spray:</strong> For tropical evenings.</p>
              <p>• <strong>Power:</strong> Type C / F (Euro) Adapter.</p>
              <p>• <strong>Meds:</strong> Imodium / Panadol.</p>
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
          <h2
            class="text-4xl md:text-5xl font-bold mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 animate-gradient-text">
            Explore the Island</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bali is magic. Since you are making the trip, why not turn it into a vacation?
            Here are top areas to explore.
          </p>
        </div>

        <div class="flex justify-center mb-12">
          <UButton size="xl" to="https://www.saltinourhair.com/bali/bali-itinerary-7-days/" target="_blank"
            color="amber" variant="soft" icon="i-heroicons-map" class="px-8">View 7-Day Itinerary</UButton>
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

        <!-- Google My Maps Embed -->
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Curated Map</h3>
        <div
          class="rounded-3xl overflow-hidden shadow-xl border-4 border-white/50 bg-white dark:bg-gray-800 dark:border-gray-700 h-[500px] w-full mx-auto">
          <iframe src="https://www.google.com/maps/d/embed?mid=1mzLbQ6NQEwZ8htF3_TdBcu9QhKxqOlm_&ehbc=2E312F"
            width="100%" height="100%" style="border:0"></iframe>
        </div>

      </UContainer>
    </div>

    <!-- Wishing Well -->
    <div class="py-12 bg-white dark:bg-gray-900 text-center">
      <UContainer class="max-w-2xl">
        <UIcon name="i-heroicons-gift" class="w-12 h-12 text-primary-300 mb-4" />
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
          <UIcon name="i-heroicons-solid-heart" class="w-16 h-16 text-rose-400 animate-pulse" />
          <h2
            class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 animate-gradient-text">
            We Can't Wait!</h2>
          <p class="text-xl text-gray-300">
            Please let us know if you can make it by <span class="text-white font-bold">Feb 28th</span>.
            Accommodation is waiting for you!
          </p>
          <UButton size="xl" to="https://hakrmey.rsvpify.com/" target="_blank" color="primary" variant="solid"
            icon="i-heroicons-envelope" class="font-bold">RSVP Now
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

.animate-gradient-text {
  background-size: 200% auto;
  animation: gradient-shift 5s linear infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
