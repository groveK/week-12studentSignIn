<template>
  <tr v-bind:class="{ present: student.present, absent: !student.present }"> <!--add class for styles-->
    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>
    <td>
      <input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student, $event.target.checked)"></td>
    <td v-show="edit">
      <img class="delete-icon" v-on:click="deleteStudent" src="@/assets/deleteMan.png">
    </td>
  </tr>

</template>

<script>

export default {
  name: "StudentRow",
  emits: ['student-arrived-or-left', 'delete-student'],
  props: {
    students: Object,
    edit: Boolean
  },
  methods: {
    arrivedOrLeft(student, present) {
      this.$emit('student-arrived-or-left', student, present)
    },
    deleteStudent() {
      if (confirm(`Delete ${this.student.name}?`)) {
        this.$emit('delete-student', this.student)
      }
    }
  }
}

</script>

<style>

.present{
  color: grey;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;

}

.delete-icon {
  height: 20px
}

</style>