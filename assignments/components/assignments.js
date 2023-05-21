import assignmentList from "./assignmentList.js"
import addNewAssignment from "./addNewAssignment.js"

export default {
    name: 'assignments',
    components: {
        assignmentList,
        addNewAssignment
    },
    template: `
        <assignmentList class="text-danger p-2" v-if="inProgressAssignments.length" :assignments="inProgressAssignments" heading="In Progress Assignments"></assignmentList>
        <assignmentList class="text-success p-2" v-if="completedAssignments.length" :assignments="completedAssignments" heading="Completed Assignments"></assignmentList>
        <addNewAssignment @add="add"></addNewAssignment>
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
        add(name) {
            this.assignments.push({
                listItem: name,
                complete: false,
                id: name.length + 1
            })
            this.newAssignment = ''
        },
    }
}