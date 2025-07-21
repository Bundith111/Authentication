<template>
  <div class="bg-gray-200 py-150 h-120 gap-10">
    <div class="container mx-auto px-20">
      <div class="lg:flex items-center justify-between">

        <!-- Video Section (Left) -->
        <div class="lg:w-1/3 mt-10 lg:mt-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XqZsoesa55w?si=zn5Pe-HLO_S1Jtso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <!-- <video
            src=""
            alt="Hero Video"
            class="rounded-lg shadow-lg transition-all duration-500"
            autoplay
            loop
            muted
          /> -->
        </div>

        <!-- Text Content Section (Right) -->
        <div class="lg:w-1/2 text-center lg:text-left lg:pl-10 mb-10 lg:mb-0">
          <h1 class="text-6xl font-bold text-gray-800 mb-10 leading-tigh ">
            hello world
          </h1>
          <p class="text-gray-600 text-lg mb-8">
            This is some descriptive text that goes alongside the video. You can
            add more details about your product, service, or company here.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoHero',
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>