<template>
  <div id="app">
    <intro></intro>
    <expose></expose>
    <resume></resume>
    <vfooter></vfooter>
  </div>
</template>

<script>
import intro from './components/intro.vue';
import expose from './components/expose.vue';
import resume from './components/resume.vue';
import vfooter from './components/footer.vue';

export default {
  name: 'app',
  components: {intro, expose, resume, vfooter},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
