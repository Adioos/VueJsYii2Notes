<template>
  <div class="home">
    <notes-component />
  </div>
</template>

<script>
// @ is an alias to /src

import NotesComponent from "@/components/NotesComponent";
export default {
  name: 'HomeView',
  components: {
    NotesComponent
  }
}
</script>
