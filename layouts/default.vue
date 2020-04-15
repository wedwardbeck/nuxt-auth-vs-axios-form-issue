<template>
  <div>
    <TheNavbar />
    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>
    <mainFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/Navigation/TheNavbar"
import mainFooter from "@/components/UI/mainFooter"

export default {
  components: {
    TheNavbar,
    mainFooter
  },
  data() {
    return {
      items: [

      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: "has-navbar-fixed-top"
      }
      // bodyAttrs: {
      // class: 'has-navbar-fixed-top'
      // }
    }
  }
}
</script>
