import singleAssignment from "./singleAssignment.js"
import assignmentsTags from "./assignmentsTags.js"
export default {
    name: 'assignmentList',
    components: {
        singleAssignment,
        assignmentsTags
    },
    template: `
        <section class="inProgressAssignments">
            <h2><small>({{assignments.length}})</small> {{heading}}</h2>
            <assignments-tags :currentTag="currentTag" :initialTags="assignments.map(a => a.tag)" 
            @change="currentTag = $event"
            ></assignments-tags>
            <ul class="list-unstyled mt-3">
                <singleAssignment v-for="items in fiteredAssignments" :key="items.id" :items="items"></singleAssignment>
            </ul>
        </section>
    `,
    data() {
        return {
            currentTag: 'all'
        }
    },
    methods: {
    },
    props: {
        assignments: Array,
        heading: String,
    },
    computed: {
        fiteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}