<template>
  <div id="app">
    <Navbar/>
      <div class="container">
          <router-view></router-view>
      </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'

  export default {
      name: 'app',
      components: {
        Navbar,
        Footer
      }
  }
</script>

<style>
    * {
        font-family: 'Poppins';
        /*border-radius: 0px !important;*/
    }

    body {
        background-color: #f5f3ef;
        padding-top: 70px;
    }
</style>