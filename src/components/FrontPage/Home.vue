<template>
    <div>
<Navbar />
<SlideShow />
<Hero />
   </div>
</template>
<script>
import Navbar from '../FrontPage/Navbar.vue';
import Hero from '../FrontPage/HomeCom/Hero.vue';
import SlideShow from '../FrontPage/HomeCom/SlideShow.vue';


export default{
    components:{
        Navbar,
        SlideShow,
        Hero
    }
}
</script>
<style scoped>
    
</style>