<template>
    <div>
<h1>Hello</h1>
<Navbar />
<Hero />
<SlideShow />
<Footer />

    </div>
</template>
<script>
import Navbar from './UI/Navbar.vue';
import Hero from './UI/Hero.vue';
import SlideShow from './UI/SlideShow.vue';
import Footer from './UI/Footer.vue';

export default{
    components:{
        Navbar,
        SlideShow,
        Footer,
        Hero
    }
}
</script>
<style scoped>
    
</style>