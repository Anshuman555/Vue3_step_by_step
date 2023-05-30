import singleAssignment from "./singleAssignment.js"
export default {
    name: 'assignmentList',
    components: {
        singleAssignment
    },
    template: `
        <section class="inProgressAssignments">
            <h2><small>({{assignments.length}})</small> {{heading}}</h2>
            <div class="button-wrapper d-flex">
                <button @click="currentTag = tag" :class="{'btn-success text-white': tag === currentTag}" class="btn btn-sm btn-outline-success me-2" v-for="tag in tags">{{tag}}</button>
            </div>
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
        fiteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags(){
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}