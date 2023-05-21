import singleAssignment from "./singleAssignment.js"
export default {
    name: 'assignmentList',
    components: {
        singleAssignment
    },
    template: `
        <section class="inProgressAssignments">
            <h2>{{heading}}</h2>
            <ul class="list-unstyled mt-3">
                <singleAssignment v-for="items in assignments" :key="items.id" :items="items"></singleAssignment>
            </ul>
        </section>
    `,
    data() {
        return {

        }
    },
    props: {
        assignments: Array,
        heading: String,
    }
}