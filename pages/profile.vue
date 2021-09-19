<template>
  <v-container pa-2 fluid grid-list-md>
    <v-layout column align-center justify-center>
      <v-flex xs12>
        <v-card :width="1200" flat color="transparent" class="pa-0">
          <div _ngcontent-hlh-c1="" class="container custom-container">
            <div id="profile-basic" _ngcontent-hlh-c1="" class="row pt-4 vpanimation ng-tns-c1-0 ng-star-inserted">
              <div _ngcontent-hlh-c1="" class="col-lg-3 col-sm-3 col-md-3 pr-md-0">
                <v-carousel show-arrows-on-hover height="300" cycle hide-delimiters :interval="5000">
                  <v-carousel-item v-for="(item, i) in items" :key="i" eager>
                    <v-card color="primary" flat height="100%" class="rounded-xl">
                      <v-img :src="item.src" style="margin-left: auto;margin-right: auto;" height="100%" eager />
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
              </div>
              <div _ngcontent-hlh-c1="" class="col-lg-8 col-md-8 col-sm-8 xs-mt-20 mt-1 mt-lg-8">
                <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12 col-12 pr-sm-0">
                  <div _ngcontent-hlh-c1="" class="row">
                    <div _ngcontent-hlh-c1="" style="margin-left: 20px; ">
                      <!----><span id="VP_LAB_Name" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted text-h3">Hari Krishna
                        Dulipudi</span>
                    </div>
                  </div>
                </div>
                <div _ngcontent-hlh-c1="" class="perofile-personal-infos font-weight-bold mt-1 mt-lg-6">
                  <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12 pr-sm-0 ">
                    <div _ngcontent-hlh-c1="" class="row vplist">
                      <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12 pa-0">
                        <ul _ngcontent-hlh-c1="" class="ng-tns-c1-0 mb-0">
                          <!---->
                          <li id="VP_PI_LAB_Age" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            34 years, 5'10"
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Mother Tongue is Telugu
                          </li>
                          <!---->
                          <li id="VP_PI_LAB_Religion" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Kapu Naidu
                          </li>
                          <!---->
                          <li id="VP_PI_LAB_Starraasi" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Star is
                            Punarvasu, Raasi is Midhuna (Gemini)
                          </li>
                          <!---->
                          <li id="VP_PI_LAB_Country" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Lives in
                            Australia
                          </li>
                          <!---->
                          <li id="VP_PI_LAB_Education" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Studied
                            B.Tech.
                          </li>
                          <!---->
                          <li id="VP_PI_LAB_Profession" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Senior Product Manager
                          </li>
                          <!---->
                          <li id="VP_PI_LAB_AnnualIncome" _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                            Earns AU$ 250,000 annually
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!---->
                </div>
                <!---->
                <div _ngcontent-hlh-c1="" class="like-profile-section">
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </v-card>
        <v-card :width="1200" :min-height="500" class="pa-2 pa-sm-6 my-6 mt-0 rounded-xl">
          <div _ngcontent-hlh-c1="" class="container custom-container pt-5">
            <div _ngcontent-hlh-c1="" class="row">
              <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-9 col-sm-9 pr-md-0 pr-sm-0">
                <div id="vp-pi-det" _ngcontent-hlh-c1="" class="bx-shdw padd-6 clr-black1">
                  <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 btm-bdr-line">
                    <!---->
                    <div _ngcontent-hlh-c1="" class="big-txt1 fw-black pb-3 ng-tns-c1-0 ng-star-inserted">
                      About
                    </div>
                    <!---->
                    <div _ngcontent-hlh-c1="" class="row medium-txt1 mb-4 ng-tns-c1-0 ng-star-inserted">
                      <div _ngcontent-hlh-c1="" class="col-lg-11 col-md-11 col-sm-11 prof-edit d-inline-flex">
                        <div _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                          <span _ngcontent-hlh-c1="" class="ng-tns-c1-0">He is well educated with good academics throughout his education.<br>
                            He is well established as a software developer and now working as a product
                            manager. <br>
                            He is an Australian permanent resident currently living in Sydney</span>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-hlh-c1="" class="row vplistmain">
                      <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12">
                        <ul _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                          <!---->
                          <li _ngcontent-hlh-c1="" class="pers-icon ng-tns-c1-0 ng-star-inserted">
                            33 years, 5'10"
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="person-height-icon ng-tns-c1-0 ng-star-inserted">
                            75 kg,
                            Athletic
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="ring-icon1 ng-tns-c1-0 ng-star-inserted d-none">
                            Never Married
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="location-icon ng-tns-c1-0 ng-star-inserted">
                            Lives in New South
                            Wales State, Australia
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="location-icon ng-tns-c1-0 ng-star-inserted">
                            <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                              Ancestral Origin - Chilumuru
                            </div>
                          </li>
                          <!---->
                          <!---->
                          <!---->
                          <li _ngcontent-hlh-c1="" class="smoke-icon ng-tns-c1-0 ng-star-inserted">
                            Doesn't Smoke
                          </li>
                          <!---->
                          <!---->
                          <!---->
                          <li _ngcontent-hlh-c1="" class="drinks-icon ng-tns-c1-0 ng-star-inserted">
                            Drinks Socially
                          </li>
                          <!---->
                          <!---->
                          <!---->
                          <li _ngcontent-hlh-c1="" class="spoon-icon ng-tns-c1-0 ng-star-inserted">
                            Non-Vegetarian
                          </li>
                          <!---->
                          <!---->
                          <!---->
                          <li _ngcontent-hlh-c1="" class="flag-icon ng-tns-c1-0 ng-star-inserted">
                            Indian citizen,
                            Permanent Resident of Australia
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!---->
                    <div _ngcontent-hlh-c1=""
                         class="row medium-txt1 align-items-center margin-top-minus-10 ng-tns-c1-0 ng-star-inserted">
                      <div _ngcontent-hlh-c1="" class="col-lg-5 col-md-5 col-sm-5">
                        <div _ngcontent-hlh-c1="" class="row">
                          <!---->
                          <div _ngcontent-hlh-c1=""
                               class="col-lg-12 col-md-12 col-sm-12 d-inline-flex sm-call-icon ng-tns-c1-0 ng-star-inserted">
                            <span _ngcontent-hlh-c1="" class="ng-tns-c1-0">Mobile No: &nbsp;</span><span
                              _ngcontent-hlh-c1="" class="ng-tns-c1-0"><a href="tel:+61481007447">+61 481 007 447</a></span>
                          </div>
                        </div>
                        <div _ngcontent-hlh-c1="" class="row pt-2">
                          <!---->
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                  <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 btm-bdr-line">
                    <!---->
                    <div _ngcontent-hlh-c1="" class="big-txt1 fw-black pb-3 ng-tns-c1-0 ng-star-inserted">
                      Religious
                      background
                    </div>
                    <div _ngcontent-hlh-c1="" class="row vplistmain">
                      <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12">
                        <ul _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                          <!---->
                          <li _ngcontent-hlh-c1="" class="religion-icon ng-tns-c1-0 ng-star-inserted">
                            Hindu
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="caste-icon ng-tns-c1-0 ng-star-inserted">
                            Kapu, Kapu
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="gothram-icon ng-tns-c1-0 ng-star-inserted">
                            Gothram -
                            Janakanolla
                          </li>
                          <!---->
                          <!---->
                          <li _ngcontent-hlh-c1="" class="star-icon ng-tns-c1-0 ng-star-inserted">
                            Star is Punarvasu,
                            Raasi is Midhuna (Gemini)
                          </li>
                          <!---->
                          <!---->
                          <li _ngcontent-hlh-c1="" class="zodiac-icon ng-tns-c1-0 ng-star-inserted">
                            Zodiac sign is Leo
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="dosh-icon ng-tns-c1-0 ng-star-inserted">
                            No Dosham
                          </li>
                          <!---->
                          <!---->
                        </ul>
                      </div>
                    </div>
                    <!---->
                    <div _ngcontent-hlh-c1=""
                         class="row pt-0 medium-txt1 align-items-center ng-tns-c1-0 ng-star-inserted">
                         <!---->
                    </div>
                    <div _ngcontent-hlh-c1="" class="row pt-0 medium-txt1 align-items-center">
                      <!---->
                      <!---->
                      <!---->
                    </div>
                  </div>
                  <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 btm-bdr-line">
                    <!---->
                    <div _ngcontent-hlh-c1="" class="big-txt1 fw-black pb-3 ng-tns-c1-0 ng-star-inserted">
                      Professional details
                    </div>
                    <div _ngcontent-hlh-c1="" class="row vplistmain">
                      <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12">
                        <ul _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                          <!---->
                          <li _ngcontent-hlh-c1="" class="employ-icon ng-tns-c1-0 ng-star-inserted">
                            <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                              Employed in Private Sector
                            </div>
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="study-icon ng-tns-c1-0 ng-star-inserted">
                            <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                              B.Tech. from Gudlavalleru Engineering
                              College
                            </div>
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="work-icon ng-tns-c1-0 ng-star-inserted">
                            <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                              Senior Product Manager
                            </div>
                          </li>
                          <!---->
                          <li _ngcontent-hlh-c1="" class="rupee-icon ng-tns-c1-0 ng-star-inserted" style="float: none;">
                            <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                              AU$ 250,000 annually
                            </div>
                          </li>
                          <!---->
                        </ul>
                      </div>
                    </div>
                    <!---->
                  </div>
                  <!---->
                  <div _ngcontent-hlh-c1="" class="big-txt1 fw-black pb-3 ng-tns-c1-0 ng-star-inserted">
                    About loved ones
                  </div>
                  <!---->
                  <div _ngcontent-hlh-c1="" class="row vplistmain ng-tns-c1-0 ng-star-inserted btm-bdr-line">
                    <div _ngcontent-hlh-c1="" class="col-lg-12 col-md-12 col-sm-12">
                      <ul _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                        <!---->
                        <li _ngcontent-hlh-c1="" class="nuc-family-icon ng-tns-c1-0 ng-star-inserted">
                          <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                            Nuclear upper middle class family with
                            moderate values
                          </div>
                        </li>
                        <!---->
                        <li _ngcontent-hlh-c1="" class="family-icon ng-tns-c1-0 ng-star-inserted">
                          <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                            Father's Occupation - Ex Indian Airforce,
                            Mother's Occupation - House wife
                          </div>
                        </li>
                        <!---->
                        <li _ngcontent-hlh-c1="" class="brother-icon ng-tns-c1-0 ng-star-inserted">
                          <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                            1 Brother, Married
                          </div>
                        </li>
                        <!---->
                        <li _ngcontent-hlh-c1="" class="sister-icon ng-tns-c1-0 ng-star-inserted">
                          <div _ngcontent-hlh-c1="" class="right-vp-ap-info">
                            No Sisters
                          </div>
                        </li>
                        <!---->
                        <!---->
                      </ul>
                    </div>
                  </div>
                  <!---->
                </div>
                <div id="vp-equality-det" _ngcontent-hlh-c1="" class="bx-shdw padd-6 mt-4 pb-4 position-relative clr-black1 ng-tns-c1-0 ng-star-inserted btm-bdr-line">
                  <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                    <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                             <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                               <!---->
                               <div _ngcontent-hlh-c1="" class="big-txt1 fw-black pb-2 ng-tns-c1-0 ng-star-inserted"> Hobbies
                                 &amp; Interests </div>
                               <!---->
                               <!---->
                             </span></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                      <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                        <!---->
                        <!---->
                        <!---->
                        <div _ngcontent-hlh-c1="" class="row pt-2 ng-tns-c1-0 ng-star-inserted" style="display: block;">
                          <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-2">
                            <div _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                              <div _ngcontent-hlh-c1="" class="small-txt2"> Interests</div>
                              <!---->
                              <div _ngcontent-hlh-c1="" class="medium-txt1 ng-tns-c1-0 ng-star-inserted">Movies, Politics, Travel, Health &amp; Fitness, Learning New
                                Languages</div>
                            </div>
                          </div>
                        </div>
                      </span></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                      <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted" /></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                      <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                        <!---->
                        <!---->
                        <!---->
                        <div _ngcontent-hlh-c1="" class="row pt-2 ng-tns-c1-0 ng-star-inserted" style="display: block;">
                          <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-4">
                            <div _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                              <div _ngcontent-hlh-c1="" class="small-txt2"> Sports/Fitness Activities</div>
                              <!---->
                              <div _ngcontent-hlh-c1="" class="medium-txt1 ng-tns-c1-0 ng-star-inserted">Badminton, Card
                                Games, Football, Swimming / Water Sports, Volleyball</div>
                            </div>
                          </div>
                        </div>
                      </span></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                      <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                        <!---->
                        <!---->
                        <!---->
                        <div _ngcontent-hlh-c1="" class="row pt-2 ng-tns-c1-0 ng-star-inserted" style="display: block;">
                          <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-5">
                            <div _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                              <div _ngcontent-hlh-c1="" class="small-txt2"> Favourite Cuisine</div>
                              <!---->
                              <div _ngcontent-hlh-c1="" class="medium-txt1 ng-tns-c1-0 ng-star-inserted">Arabic, South
                                Indian, Mexican, Japanese</div>
                            </div>
                          </div>
                        </div>
                      </span></span>
                    <span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                      <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted" /></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                      <!----><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                        <!---->
                        <!---->
                        <!---->
                        <div _ngcontent-hlh-c1="" class="row pt-2 ng-tns-c1-0 ng-star-inserted" style="/* display: none; */">
                          <div _ngcontent-hlh-c1="" class="ng-tns-c1-0 col-lg-12 col-md-12 col-sm-12 d-inline-flex lifestyle-img-9">
                            <div _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                              <div _ngcontent-hlh-c1="" class="small-txt2"> Spoken Languages</div>
                              <!---->
                              <div _ngcontent-hlh-c1="" class="medium-txt1 ng-tns-c1-0 ng-star-inserted">English, Hindi,
                                Kannada, Telugu, Nepali</div>
                            </div>
                          </div>
                        </div>
                      </span></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                    <!----></span><span _ngcontent-hlh-c1="" class="ng-tns-c1-0 ng-star-inserted">
                    <!----></span></span>
                </div>
                <div id="vp-pp-det" _ngcontent-hlh-c1="" class="bx-shdw padd-6 mt-4 pb-5 ng-tns-c1-0 ng-star-inserted">
                  <div _ngcontent-hlh-c1="" class="row" />
                  <div _ngcontent-hlh-c1="" class="big-txt1 fw-black pb-3 ng-tns-c1-0 ng-star-inserted">
                    Looking for
                  </div>
                  <div _ngcontent-hlh-c1="" class="row medium-txt1 ng-tns-c1-0 ng-star-inserted">
                    <div _ngcontent-hlh-c1="" class="col-lg-11 col-md-11 col-sm-11 prof-edit d-inline-flex">
                      <div _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                        <span _ngcontent-hlh-c1="" class="ng-tns-c1-0">
                          Someone who is well educated, smart, mature and modern. <br>
                          Someone who is social and has lived overseas and understands the lifestyle.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
          </div><span id="rightpanelfixed" _ngcontent-hlh-c1="" class="ng-tns-c1-0" />
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
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_aQivH_14870_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_qnFDO_27840_TL_VP.webp' },
        { src: 'https://t-imgs.matrimonycdn.com/photos/2019/08/30/19/T5442156_xJOfH_7583_TL_VP.webp' },
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
