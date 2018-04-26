<template>
    <section id="portfolio" class="hero section is-light is-bold">
        <div class="columns">
            <div class="column is-10 is-offset-1">
                <h2 class="title is-2 has-text-centered">Exposé</h2>
                <div class="columns is-multiline">
                    <article class="column is-one-third " v-for="item in items" :key="item">
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
</template>

<script>
export default {
  name: 'expose',
  data () {
    return {
      hoverClass: 'is-primary',
      items: [
        {
          name: 'Sparwelt',
          img: require('../assets/images/sparwelt.png'),
          link: 'https://www.sparwelt.de/',
          descr: '// Affiliate Voucher & Coupon Portal'
        },
        {
          name: 'Mister Spex',
          img: require('../assets/images/misterspex.png'),
          link: 'https://www.misterspex.de/',
          descr: '// Online-Shop for Eyewear'
        },
        {
          name: 'Lokal',
          img: require('../assets/images/lokal.png'),
          link: 'https://de.lokal.com/',
          descr: '// Classified Ads Community Platform'
        },
        {
          name: 'Bargainmoose',
          img: require('../assets/images/bargainmoose.png'),
          link: 'https://www.bargainmoose.ca/',
          descr: '// Affiliate Voucher & Coupon Portal'
        },
        {
          name: 'Wareable',
          img: require('../assets/images/wareable.png'),
          link: 'https://www.wareable.com/',
          descr: '// Tech-Blog about Wearable Technology'
        },
        {
          name: 'Wunderkarten',
          img: require('../assets/images/wunderkarten.png'),
          link: 'https://www.wunderkarten.de/',
          descr: '// Web to Print Online-Shop'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
    transition: transform .2s;
}
.card:hover{
    transform: scale(1.1);
    z-index: 5;
}
</style>
