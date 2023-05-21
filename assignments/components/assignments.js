import assignmentList from "./assignmentList.js"

export default {
    name: 'assignments',
    components: {
        assignmentList
    },
    template: `
        <assignmentList class="text-danger p-2" v-if="inProgressAssignments.length" :assignments="inProgressAssignments" heading="In Progress Assignments"></assignmentList>
        <assignmentList class="text-success p-2" v-if="completedAssignments.length" :assignments="completedAssignments" heading="Completed Assignments"></assignmentList>
        <form @submit.prevent="add">
            <div class="d-inline-flex">
            <button class="btn btn-success btn-sm rounded-0">Add</button> 
            <input v-model="newAssignment" placeholder="Add New" class="form-control border-success rounded-0" type="text">
            </div>
        </form>
    `,
    data() {
        return {
            assignments: [
                { listItem: "HTML 5", complete: false, id: "1" },
                { listItem: "CSS 3", complete: false, id: "2" },
                { listItem: "Javascript", complete: false, id: "3" },
                { listItem: "Vue", complete: false, id: "4" },
                { listItem: "Bootstrap", complete: false, id: "5" }
            ],
            newAssignment: ''
        }
    },
    computed: {
        completedAssignments() {
            return this.assignments.filter(a => a.complete);
        },
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete);
        },
    },
    methods: {
        add() {
            this.assignments.push({
                listItem: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = ''
        },
    }
}