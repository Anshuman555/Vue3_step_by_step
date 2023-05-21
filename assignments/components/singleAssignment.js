export default {
    name: 'singleAssignment',
    template: `
        <li class="h6">
            <label :for="items.id">
                <input class="me-2" type="checkbox" v-model="items.complete" :id="items.id">
                {{items.listItem}}
            </label>
        </li>
    `,
    data() {
        return {

        }
    },
    props: {
        items: Object
    }
}