<template>
  <Navbar />
  
  <section class="about-section">
    <!-- Full-width background image -->
    <div class="about-bg">
      <img
        src="/img/bg/bcc4ca6dab222fba4ba42481e1239750.jpg"
        alt="About Us Main"
        class="main-img"
      />

      <!-- Overlapping smaller image -->
      <div
        class="overlay-img"
        :style="{ bottom: bottomOffset + 'px' }"
      >
        <img
          src="/img/bg/pexels-pavel-danilyuk-8422248.jpg"
          alt="Overlay"
          class="small-img"
        />
      </div>
    </div>
  </section>
    <section class="about-section">
    <div class="text-wrapper">
      <h2 class="main-title">About Our Kindergarten</h2>
      <div class="paragraphs">
        <p>
          Kindergarten Buddy was founded in 2010 by a group of passionate educators and parents who believed that early childhood education should be filled with joy, creativity, and care. What started as a small classroom with just 12 children has grown into a thriving community where over 100 little learners come every day to explore, play, and discover.
        </p>
        <p>
        From the very beginning, our mission has been to create a nurturing environment where every child feels valued and inspired to learn. Over the years, we have expanded our facilities to include bright classrooms, a safe outdoor play area, and specialized activity zones for arts, music, and science.
        </p>
        <p>Throughout our journey, we have stayed true to our core values of kindness, curiosity, and respect. We continue to evolve our curriculum and teaching methods to meet the needs of modern families, while keeping the warmth and personal touch that make us feel like a family.</p>
        <p>We are proud of the countless friendships, smiles, and milestones that have been part of our story—and we look forward to many more years of growing together with our wonderful children and families.

</p>
      </div>
    </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../FrontPage/Navbar.vue'

export default {
  components: {
    Navbar,
  },
  setup() {
    const bottomOffset = ref(-100) // Initial bottom position of small img

    const handleScroll = () => {
      const scrollY = window.scrollY
      // Calculate new bottom position: starts at -100, max at 50
      bottomOffset.value = Math.min(50, -100 + scrollY / 5)
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      bottomOffset,
    }
  },
}
</script>

<style scoped>
.about-section {
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
}

.about-bg {
  position: relative;
  width: 100%;
  height: 670px; /* adjusted main img height */
}

.main-img {
  position:absolute;
  width: 100%;
  height: 670px;
  object-fit: cover;
  padding: 0;
  margin: 0;
  z-index: 0;
}

.overlay-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 800px; /* smaller than main image */
  height: 270px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 3rem;
  opacity: 1;
  transition: bottom 0.3s ease;
}

.small-img {
  width: 900px;
  height: auto;
  border-radius: 1rem;
}
/* Text Content */
.text-wrapper {
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 20rem auto 2rem;
  padding: 0 0.5rem;
  text-align: center;
  position: relative; /* Required for z-index to work */
  z-index: 10;         /* Higher than the image */
  color: rgb(0, 0, 0);
}

.main-title {
  text-align: left;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.paragraphs {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  text-align: left;
  justify-content: center;
  flex-wrap: wrap;
}

.paragraphs p {
  flex: 1 1 45%;
  font-size: 1.125rem;
  line-height: 1.8;
}
</style>
