<template>
  <div>
    <div class="card student-list m-2 p-2">
      <h4 class="card-title">Student List</h4>

      <div class="edit-table-toggle form-check">
        <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
        <label for="edit-table" class="form-check-label">Edit table?</label>
      </div>

      <div id="student-table">
        <table class="table">
          <tr>
            <th>Name</th>
            <th>StarID</th>
            <th>Present?</th>
            <th v-show="editTable">Delete</th>
          </tr>
          <StudentRow
              v-for="student in students" v-bind:key="student.name"
              v-bind:student="student"
              v-bind:edit="editTable"
              v-on:student-arrived-or-left="arrivedOrLeft"
              v-on:delete-student="studentDeleted">

          </StudentRow>

        </table>
      </div>
    </div>
  </div>
</template>

<script>

import StudentRow from "@/components/StudentRow.vue";

export default {
  name: 'StudentTable',
  components: {StudentRow},
  emits: ['student-present', 'delete-student'],
  data() {
    return {
      editTable: false
    }
  },
  props: {
    students: Array
  },
  methods: {
    arrivedOrLeft(student, present){
      //emit message
      this.$emit('student-arrived-or-left', student, present)
    },
    studentDeleted(student) {
      this.$emit('delete-student', student)
    }
  }
}

</script>

<style scoped>

#student-table {
  max-height: 500px;
  overflow: scroll;
}
.present-true {
  color: gray;
  font-style: italic;
}
.present-false {
  font-weight: bold;
}


</style>
