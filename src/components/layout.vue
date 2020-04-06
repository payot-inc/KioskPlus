<template>
  <div id="wrap">
    <Header />
    <slot />
    <Footer />
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
