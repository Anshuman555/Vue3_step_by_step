import assignmentList from "./assignmentList.js"

export default {
    name: 'assignments',
    components: {
        assignmentList
    },
    template: `
        <assignmentList class="text-danger p-2" v-if="inProgressAssignments.length" :assignments="inProgressAssignments" heading="In Progress Assignments"></assignmentList>
        <assignmentList class="text-success p-2" v-if="completedAssignments.length" :assignments="completedAssignments" heading="Completed Assignments"></assignmentList>
    `,
    data() {
        return {
            assignments: [
                {listItem: "HTML 5", complete: false, id: "1"},
                {listItem: "CSS 3", complete: false, id: "2"},
                {listItem: "Javascript", complete: false, id: "3"},
                {listItem: "Vue", complete: false, id: "4"},
                {listItem: "Bootstrap", complete: false, id: "5"}
            ]
        }
    },
    computed: {
        completedAssignments(){
            return this.assignments.filter(a => a.complete);
        },
        inProgressAssignments(){
            return this.assignments.filter(a => ! a.complete);
        }
    }
    
}