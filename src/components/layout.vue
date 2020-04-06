<template>
  <div id="wrap">
    <Header v-if="!['Login','Examine'].includes($route.name)" />
    <slot />
    <Footer v-if="!['Login','Examine'].includes($route.name)" />
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue';
import CustomFooter from '@/components/CustomFooter.vue';

export default {
  components: {
    Header: CustomHeader,
    Footer: CustomFooter,
  },
};
</script>
