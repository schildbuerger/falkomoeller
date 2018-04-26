<template>
    <section class="hero section is-primary is-bold">
        <div class="columns">
            <div class="column is-8 is-offset-2 has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column">
                        <h2 class="title is-2">Find my Resume here</h2>
                    </div>
                    <div class="column">
                        <a target="_blank" href="/static/cv-falko-moeller.pdf" class="button is-link is-large">
                            <span class="icon is-large">
                                <i class="fa fa-download"></i>
                            </span>
                            <span>cv-falko-moeller.pdf</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'resume'
}
</script>

<style scoped>
.button {
    transition: transform .2s;
}
.button:hover{
    transform: scale(1.1);
    z-index: 5;
}
</style>
