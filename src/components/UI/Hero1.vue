<template>
  <div class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
      <div class="lg:flex items-center justify-between">
        <div class="lg:w-1/2 text-center lg:text-left lg:pr-10 mb-10 lg:mb-0">
          <h1 class="font-2 wixui-rich-text" style="text-align: center;">
            <br class="font-bold text-40 text-gray-800 mb-10">
            WELCOME TO
            <br class="font-bold text-4xl text-gray-800 mb-1">
            Meow business school
          </h1>
          <p class="text-gray-600 text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi tempora distinctio sed. Rem tenetur temporibus ut ex et
            cupiditate vel molestiae aperiam labore, nesciunt quisquam. Sequi,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur aliquid atque quae esse quam aliquam dicta nesciunt quia
            dolore , vero cupiditate iusto reprehenderit saepe libero officiis
            enim culpa iure?2 Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Rerum dicta eveniet facilis blanditiis nulla
            voluptatem ad, quia numquam, non, repellendus aperiam in ipsum
            doloremque. At, voluptas. Tempora et animi in!tenetur.
          </p>
          <div class="flex justify-center">
            <div style="align-items: center;" class="bg-blue-400 text-white hover:text-black p-1 rounded-lg hover:bg-white shadow-md w-12"@click="handleLogin" >
              <button>
                <span class="text-lg font-semibold">Login</span>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-120 mt-5 lg:mt-0">
          <video
            src="/public/video/Meow.mp4"
            alt="Hero Video"
            class="rounded-lg shadow-lg transition-all duration-500 hover:scale-110"
            autoplay
            loop
            muted
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      alert('Login clicked');
    },
  },
};
</script>

<style lang=""></style>