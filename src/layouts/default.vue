<template>
  <v-app>
    <v-main>
      <router-view />
      <IntroductionCard />
      <MoreInformation />
      <MoreInformation2 />
      <MoreInformation3 />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import IntroductionCard from "../components/IntroductionCard.vue";
import MoreInformation from "../components/MoreInformation.vue";
import MoreInformation2 from "../components/MoreInformation2.vue";
import MoreInformation3 from "../components/MoreInformation3.vue";
</script>
