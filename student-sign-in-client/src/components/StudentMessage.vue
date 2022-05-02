<template>
  <div v-if="student.name">
    <div class="alert alert-info" v-if="student.present">
      Welcome, {{student.name}}
    </div>

    <div class="alert alert-success" v-else="mostRecentStudent.name">
      Goodbye, {{student.name}}
    </div>
  </div>


</template>

<script>
export default {
  //create component here
  name: 'StudentMessage',
  props: {
    student: Object
  }
}

</script>

<style scoped>

</style>