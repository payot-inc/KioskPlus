<template>
  <v-app>
    <LayoutView>
      <router-view />
    </LayoutView>
  </v-app>
</template>

<script>
import LayoutComponent from '@/components/layout.vue';

export default {
  name: 'App',
  components: {
    LayoutView: LayoutComponent,
  },
};
</script>
