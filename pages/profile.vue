<template>
  <v-container pa-2 fluid grid-list-md>
    <v-layout column align-center justify-center>
      <v-flex xs12>
        <v-card :width="1200" flat color="transparent" class="pa-0">
          <div class="container custom-container">
            <div id="profile-basic" class="row pt-4 vpanimation ng-star-inserted">
              <div class="col-lg-3 col-sm-3 col-md-3 pr-md-0">
                <v-carousel show-arrows-on-hover height="300" cycle hide-delimiters :interval="5000">
                  <v-carousel-item v-for="(item, i) in items" :key="i" eager>
                    <v-card color="primary" flat height="100%" class="rounded-xl">
                      <v-img :src="item.src" style="margin-left: auto; margin-right: auto;" height="100%" eager />
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 xs-mt-20 mt-1 mt-lg-8">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 pr-sm-0">
                  <div class="row">
                    <div style="margin-left: 20px;">
                      <span id="VP_LAB_Name" class="ng-star-inserted text-h3">Hari Krishna Dulipudi</span>
                    </div>
                  </div>
                </div>
                <div class="perofile-personal-infos font-weight-bold mt-1 mt-lg-6">
                  <div class="col-lg-12 col-md-12 col-sm-12 pr-sm-0">
                    <div class="row vplist">
                      <div class="col-lg-12 col-md-12 col-sm-12 pa-0">
                        <ul class="mb-0">
                          <li id="Age" class="ng-star-inserted">
                            {{ currentAge }} years, 5'10"
                          </li>
                          <li class="ng-star-inserted">
                            Mother Tongue is Telugu
                          </li>
                          <li id="Religion" class="ng-star-inserted">
                            Kapu Naidu
                          </li>
                          <li id="Starraasi" class="ng-star-inserted">
                            Star is Punarvasu, Raasi is Midhuna (Gemini)
                          </li>
                          <li id="Country" class="ng-star-inserted">
                            Lives in Australia
                          </li>
                          <li id="Education" class="ng-star-inserted">
                            Studied B.Tech.
                          </li>
                          <li id="Profession" class="ng-star-inserted">
                            Entrepreneur
                          </li>
                          <li id="AnnualIncome" class="ng-star-inserted">
                            Earns {{ currentRevenue }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="like-profile-section" />
              </div>
            </div>
          </div>
        </v-card>
        <v-card :width="1200" :min-height="500" class="pa-2 pa-sm-6 my-6 mt-0 rounded-xl">
          <div class="container custom-container pt-5">
            <div class="row">
              <div class="col-lg-12 col-md-9 col-sm-9 pr-md-0 pr-sm-0">
                <div id="vp-pi-det" class="bx-shdw padd-6 clr-black1">
                  <div class="btm-bdr-line">
                    <div class="big-txt1 fw-black pb-3 ng-star-inserted">
                      About
                    </div>
                    <div class="row medium-txt1 mb-4 ng-star-inserted">
                      <div class="col-lg-11 col-md-11 col-sm-11 prof-edit d-inline-flex">
                        <div>
                          <span>
                            He is well educated with good academics throughout his education.<br>
                            He is well established as a software developer and has his own Microstartups.<br>
                            He is an Australian permanent resident currently living in Sydney
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row vplistmain">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul>
                          <li class="pers-icon ng-star-inserted">
                            {{ currentAge }} years, 5'10"
                          </li>
                          <li class="person-height-icon ng-star-inserted">
                            80 kg, Athletic
                          </li>
                          <li class="ring-icon1 ng-star-inserted d-none">
                            Never Married
                          </li>
                          <li class="location-icon ng-star-inserted">
                            Lives in New South Wales State, Australia
                          </li>
                          <li class="location-icon ng-star-inserted">
                            <div class="right-vp-ap-info">
                              Ancestral Origin - Chilumuru
                            </div>
                          </li>
                          <li class="smoke-icon ng-star-inserted">
                            Doesn't Smoke
                          </li>
                          <li class="drinks-icon ng-star-inserted">
                            Drinks Socially
                          </li>
                          <li class="spoon-icon ng-star-inserted">
                            Non-Vegetarian
                          </li>
                          <li class="flag-icon ng-star-inserted">
                            Indian citizen, Permanent Resident of Australia
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="row medium-txt1 align-items-center margin-top-minus-10 ng-star-inserted">
                      <div class="col-lg-5 col-md-5 col-sm-5">
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-sm-12 d-inline-flex sm-call-icon ng-star-inserted">
                            <span>Mobile No: &nbsp;</span><span><a href="tel:+61481007447">+61 481 007 447</a></span>
                          </div>
                        </div>
                        <div class="row pt-2" />
                      </div>
                    </div>
                  </div>
                  <div class="btm-bdr-line">
                    <div class="big-txt1 fw-black pb-3 ng-star-inserted">
                      Religious background
                    </div>
                    <div class="row vplistmain">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul>
                          <li class="religion-icon ng-star-inserted">
                            Hindu
                          </li>
                          <li class="caste-icon ng-star-inserted">
                            Kapu, Kapu
                          </li>
                          <li class="gothram-icon ng-star-inserted">
                            Gothram - Janakanolla
                          </li>
                          <li class="star-icon ng-star-inserted">
                            Star is Punarvasu, Raasi is Midhuna (Gemini)
                          </li>
                          <li class="zodiac-icon ng-star-inserted">
                            Zodiac sign is Leo
                          </li>
                          <li class="dosh-icon ng-star-inserted">
                            No Dosham
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="row pt-0 medium-txt1 align-items-center ng-star-inserted" />
                    <div class="row pt-0 medium-txt1 align-items-center" />
                  </div>
                  <div class="btm-bdr-line">
                    <div class="big-txt1 fw-black pb-3 ng-star-inserted">
                      Professional details
                    </div>
                    <div class="row vplistmain">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul>
                          <li class="employ-icon ng-star-inserted">
                            <div class="right-vp-ap-info">
                              Owns Microstartups
                            </div>
                          </li>
                          <li class="study-icon ng-star-inserted">
                            <div class="right-vp-ap-info">
                              B.Tech. from Gudlavalleru Engineering College
                            </div>
                          </li>
                          <li class="work-icon ng-star-inserted">
                            <div class="right-vp-ap-info">
                              Entrepreneur
                            </div>
                          </li>
                          <li class="rupee-icon ng-star-inserted" style="float: none;">
                            <div class="right-vp-ap-info">
                              {{ currentRevenue }}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="big-txt1 fw-black pb-3 ng-star-inserted">
                    About loved ones
                  </div>
                  <div class="row vplistmain ng-star-inserted btm-bdr-line">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <ul>
                        <li class="nuc-family-icon ng-star-inserted">
                          <div class="right-vp-ap-info">
                            Nuclear upper middle class family with moderate values
                          </div>
                        </li>
                        <li class="family-icon ng-star-inserted">
                          <div class="right-vp-ap-info">
                            Father's Occupation - Ex Indian Airforce, Mother's Occupation - House wife
                          </div>
                        </li>
                        <li class="brother-icon ng-star-inserted">
                          <div class="right-vp-ap-info">
                            1 Brother, Married
                          </div>
                        </li>
                        <li class="sister-icon ng-star-inserted">
                          <div class="right-vp-ap-info">
                            No Sisters
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="vp-equality-det" class="bx-shdw padd-6 mt-4 pb-4 position-relative clr-black1 ng-star-inserted btm-bdr-line">
                  <span class="ng-star-inserted">
                    <span class="ng-star-inserted">
                      <span class="ng-star-inserted">
                        <div class="big-txt1 fw-black pb-2 ng-star-inserted">Hobbies &amp; Interests</div>
                      </span>
                    </span>
                    <span class="ng-star-inserted">
                      <span class="ng-star-inserted">
                        <div class="row pt-2 ng-star-inserted" style="display: block;">
                          <div class="col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-2">
                            <div>
                              <div class="small-txt2">Interests</div>
                              <div class="medium-txt1 ng-star-inserted">Movies, Politics, Travel, Health &amp; Fitness, Learning New Languages</div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </span>
                    <span class="ng-star-inserted"> <span class="ng-star-inserted" /></span>
                    <span class="ng-star-inserted">
                      <span class="ng-star-inserted">
                        <div class="row pt-2 ng-star-inserted" style="display: block;">
                          <div class="col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-4">
                            <div>
                              <div class="small-txt2">Sports/Fitness Activities</div>
                              <div class="medium-txt1 ng-star-inserted">Badminton, Card Games, Football, Swimming / Water Sports, Volleyball</div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </span>
                    <span class="ng-star-inserted">
                      <span class="ng-star-inserted">
                        <div class="row pt-2 ng-star-inserted" style="display: block;">
                          <div class="col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-5">
                            <div>
                              <div class="small-txt2">Favourite Cuisine</div>
                              <div class="medium-txt1 ng-star-inserted">Arabic, South Indian, Mexican, Japanese</div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </span>
                    <span class="ng-star-inserted"> <span class="ng-star-inserted" /></span>
                    <span class="ng-star-inserted">
                      <span class="ng-star-inserted">
                        <div class="row pt-2 ng-star-inserted" style="/* display: none; */">
                          <div class="col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-9">
                            <div>
                              <div class="small-txt2">Spoken Languages</div>
                              <div class="medium-txt1 ng-star-inserted">English, Hindi, Kannada, Telugu, Nepali</div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </span>
                    <span class="ng-star-inserted" />
                    <span class="ng-star-inserted" />
                  </span>
                </div>
                <div id="vp-pp-det" class="bx-shdw padd-6 mt-4 pb-5 ng-star-inserted">
                  <div class="row" />
                  <div class="big-txt1 fw-black pb-3 ng-star-inserted">
                    Looking for
                  </div>
                  <div class="row medium-txt1 ng-star-inserted">
                    <div class="col-lg-11 col-md-11 col-sm-11 prof-edit d-inline-flex">
                      <div>
                        <span>
                          Someone who is well educated, smart, mature and modern. <br>
                          Someone who is social and has lived overseas and understands the lifestyle.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span id="rightpanelfixed" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'plain',
  data () {
    return {
      items: [
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_BNdq_25841_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_DvdiG_8269_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_yieGD_68031_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_PEoaZ_52687_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_hCkwn_56213_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_rqAOI_59360_TL_VP.webp' }
      ]
    }
  },
  fetch({ store }) {
    store.commit('SET_CURRENT_TITLE', 'Profile')
  },
  head() {
    const formattedTitle = 'Hari Krishna Dulipudi'
    const description = 'Profile'
    return {
      title: formattedTitle,
      titleTemplate: null,
      meta: [
        { name: 'description', hid: 'description', content: description },
        { property: 'og:title', hid: 'og:title', content: formattedTitle },
        { property: 'og:site_name', hid: 'og:site_name', content: formattedTitle },
        { property: 'og:description', hid: 'og:description', content: description },
        { property: 'og:url', content: this.getFullUrl(this.$route.path) },
        { property: 'og:image', content: this.getFullUrl('/media/feature_graphic.jpg') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: formattedTitle },
        { name: 'twitter:site', content: '@1HaKr' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:site', content: this.getFullUrl(this.$route.path) },
        { name: 'twitter:image', content: this.getFullUrl('/media/feature_graphic.jpg') },
        { name: 'robots', hid: 'robots', content: 'noindex,noarchive,nofollow' }
      ]
    }
  },
  computed: {
    currentAge() {
      return Math.floor((new Date() - new Date('1987-07-24')) / 31557600000)
    },
    currentRevenue() {
      return 'A$ 250,000 annually'
    }
  },
  methods: {
    getFullUrl (path) {
      const host = process.server ? this.$store.state.appDomain : window.location.host
      const barehost = host.replace('www.', '')
      return `https://${barehost}${path}`
    }
  }
}

</script>
<style src="@/assets/profile.css"></style>
