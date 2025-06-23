<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      The curved ridge thrives, and the joints are treated with care. The course progresses with smooth coordination. Let him stand from the laughter of youth, gaining strength from discipline as the tide swells. Sit at the edge with dignity when tired. Conduct progresses through passion and attention. Movement grows flexible. No place is too high, even the steepest path can be tackled with the right rhythm and intent. Stand firm in time and balance. In the mountains, we are born with awe and wonder.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Jitegemee</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>