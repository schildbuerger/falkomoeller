<template>
    <section id="about" class="hero section is-primary is-bold">
        <div class="columns">
            <div class="column is-10 is-offset-1 ">
                <div class="columns">
                    <div class="column" v-for="item in items" :key="item">
                        <h3 class="title is-3">{{ item.title }}</h3>
                        <hr />
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'about',
  data () {
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
      }]
    }
  }
}
</script>
