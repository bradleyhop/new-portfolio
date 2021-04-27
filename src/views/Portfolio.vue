<script>
import PortCard from '@/components/PortCard.vue';

export default {
  name: 'Portfolio',
  components: {
    PortCard,
  },
};
</script>

<template>
  <v-container
    class="fill-height"
    fluid>
    <v-row>
      <v-col>
        <PortCard />
      </v-col>
    </v-row>
  </v-container>
</template>
