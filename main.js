Vue.component('intro', {

    template: `

        <section id="intro" class="hero section is-bold is-dark is-fullheight">
            <div class="columns hero-body">
                <div class="column is-6 is-offset-6 ">
                    <h1 class="title is-1">Falko Möller</h1>
                    <h2 class="subtitle is-3">Product Management</h2>
                </div>
            </div>
        </section>
`,

})

Vue.component('portfolio', {

    template: `

        <section id="portfolio" class="hero section is-light is-bold">
            <div class="columns">
                <div class="column is-10 is-offset-1 ">
                    <h2 class="title is-2 has-text-centered">Exposé</h2>
                    <div class="columns is-multiline">
                            <article class="column is-one-third " v-for="item in items">
                                <a target="_blank" :href="item.link">
                                    <div class="card">
                                        <div class="card-image">
                                            <div class="image">
                                                <img :src="item.img" alt="Placeholder image">
                                            </div>
                                        </div>

                                        <div class="card-content hero is-dark">
                                            <p class="title is-4">
                                                {{ item.name }}
                                                    <span class="icon is-pulled-right">
                                                    <i class="fa fa-external-link"></i>
                                                    </span>
                                            </p>
                                            <p class="">{{ item.descr }}</p>
                                        </div>
                                    </div>
                                </a>

                            </article>
                    </div>
                </div>
            </div>
        </section>

`,

    data() {

        return {

            hoverClass: 'is-primary',

            items: [{
                name: 'Sparwelt',
                img: '/assets/images/expose/sparwelt.png',
                link: 'https://www.sparwelt.de/',
                descr: '// Affiliate Voucher & Coupon Portal'
        }, {
                name: 'Mister Spex',
                img: '/assets/images/expose/misterspex.png',
                link: 'https://www.misterspex.de/',
                descr: '// Online-Shop for Eyewear'
        }, {
                name: 'Lokal',
                img: '/assets/images/expose/lokal.png',
                link: 'https://de.lokal.com/',
                descr: '// Classified Ads Community Platform'
        }, {
                name: 'Bargainmoose',
                img: '/assets/images/expose/bargainmoose.png',
                link: 'https://www.bargainmoose.ca/',
                descr: '// Affiliate Voucher & Coupon Portal'
        }, {
                name: 'Wareable',
                img: '/assets/images/expose/wareable.png',
                link: 'https://www.wareable.com/',
                descr: '// Tech-Blog about Wearable Technology'
        }, {
                name: 'Wunderkarten',
                img: '/assets/images/expose/wunderkarten.png',
                link: 'https://www.wunderkarten.de/',
                descr: '// Web to Print Online-Shop'
        }],

        };

    },

})

Vue.component('skills', {

    template: `

    <section id="skills" class="section">

        <h2 class="title">Skills</h2>
        <div class="columns">
            <div class="column"></div>
            <div class="column">
                <p>haha</p><progress class="progress is-medium is-primary" value="15" max="100">30%</progress>
                <p>haha</p><progress class="progress is-medium is-link" value="30" max="100">30%</progress>
                <p>haha</p><progress class="progress is-medium is-info" value="45" max="100">45%</progress>
                <p>haha</p><progress class="progress is-medium is-success" value="60" max="100">60%</progress>
                <p>haha</p><progress class="progress is-medium is-warning" value="75" max="100">75%</progress>
                <p>haha</p><progress class="progress is-medium is-danger" value="90" max="100">90%</progress>
            </div>
        </div>

    </section>

`,

    data() {

        return {

            items: [{
                name: 'Very long title for this card - 1',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
            }, {
                name: 'Very long title for this card - 2',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
            }, {
                name: 'Very long title for this card and an outlier as well, so I can see how this thing behaves- 3',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
            }, {
                name: 'Very long title for this card and an outlier as well, so I can see how this thing behaves- 4',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
            }, {
                name: 'Very long title for this card - 5',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
            }],

        };

    },

})

Vue.component('about', {

    template: `

        <section id="about" class="hero section is-primary is-bold">
            <div class="columns">
                <div class="column is-10 is-offset-1 ">
                    <div class="columns">
                        <div class="column" v-for="item in items">
                            <h3 class="title is-3">{{ item.title }}</h3>
                            <hr />
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

`,

    data() {

        return {

            items: [{
                title: 'Product',
                text: 'Minions ipsum aaaaaah uuuhhh consequat para tú et. Chasy aute me want bananaaa! Wiiiii consectetur et tank yuuu! Hana dul sae belloo! Ad. Veniam tulaliloo dolore veniam belloo! Adipisicing. Bananaaaa me want bananaaa! Irure po kass tank yuuu! Occaecat. Incididunt wiiiii cillum la bodaaa.'
        }, {
                title: 'UX',
                text: 'Minions ipsum aaaaaah uuuhhh consequat para tú et. Chasy aute me want bananaaa! Wiiiii consectetur et tank yuuu! Hana dul sae belloo! Ad. Veniam tulaliloo dolore veniam belloo! Adipisicing. Bananaaaa me want bananaaa! Irure po kass tank yuuu! Occaecat. Incididunt wiiiii cillum la bodaaa.'
        }, {
                title: 'Agile',
                text: 'Minions ipsum aaaaaah uuuhhh consequat para tú et. Chasy aute me want bananaaa! Wiiiii consectetur et tank yuuu! Hana dul sae belloo! Ad. Veniam tulaliloo dolore veniam belloo! Adipisicing. Bananaaaa me want bananaaa! Irure po kass tank yuuu! Occaecat. Incididunt wiiiii cillum la bodaaa.'
        }],

        };

    },

})

Vue.component('contact', {

    template: `

        <section id="contact" class="hero section is-light is-bold">
            <div class="columns is-variable is-centered">
                <div class="column is-narrow">
                    <div class="columns is-variable is-8 is-vcentered">
                        <div class="column is-narrow has-text-centered">
                            <div class="columns is-variable">
                                <div class="column is-narrow" v-for="item in items" >
                                    <a class="" :href="item.link" target="_blank"><span :class="item.class" class="fa-5x fa is-mobile"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="column is-narrow has-text-centered">
                            <div class="">
                                <h3 class="title is-2">Get in Touch!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

`,

    data() {

        return {

            items: [{
                link: 'https://www.xing.com/profile/Falko_Moeller2',
                class: 'fa-xing'
        }, {
                link: 'https://www.linkedin.com/in/falkomoeller',
                class: 'fa-linkedin'
        }, {
                link: 'mailto:contact@falkomoeller.de',
                class: 'fa-envelope'
        }],

        };

    },

})

Vue.component('contact-form', {

    template: `

        <form>
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Name">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Your message..."></textarea>
              </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <button class="button is-danger">Send Message</button>
              </div>
            </div>
        </form>

`

})

Vue.component('end', {

    template: `

        <footer class="hero section is-dark is-bold">
          <div class="">
            <div class="content has-text-centered">
              <p>
                Build by <a class="button is-small is-outlined is-primary" href="https://">Someone</a> with nice <a class="button is-small is-outlined is-primary" @click="showModal = true">Things</a>.
              </p>
            </div>
          </div>


            <section id="modal-build" class="modal is-active" v-if="showModal">
                <div>
                  <div class="modal-background"></div>
                  <div class="modal-content box">
                        <h2 class="title is-2">Title</h2>
                  </div>
                  <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
                </div>
            </section>

        </footer>

`,

    data() {

        return {

            showModal: false

        }

    }

})

Vue.component('cv', {

    template: `

        <section class="hero section is-primary is-bold">
            <div class="columns">
                <div class="column is-8 is-offset-2 has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <h2 class="title is-2">Find my Resume here</h2>
                        </div>
                        <div class="column">
                            <a target="_blank" href="/assets/cv-falko-moeller.pdf" class="button is-link is-large">
                                <span class="icon is-large">
                                  <i class="fa fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

`

})

// New Vue Instance
new Vue({

    el: '#vapp',
    created: function () {
        console.log('// Proudly presented by Falko Möller')
    },

})
