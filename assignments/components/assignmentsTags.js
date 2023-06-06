export default {
    name: 'assignments-tags',
    template: `
        <div class="button-wrapper d-flex">
            <button @click="$emit('change', tag)" :class="{'btn-success text-white': tag === currentTag}" class="btn btn-sm btn-outline-success me-2" v-for="tag in tags">{{tag}}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}