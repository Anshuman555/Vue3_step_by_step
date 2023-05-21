export default{
    name: 'addNewAssignment',
    template: `
    <form @submit.prevent="add">
        <div class="d-inline-flex">
        <button class="btn btn-success btn-sm rounded-0">Add</button> 
        <input v-model="newAssignment" placeholder="Add New" class="form-control border-success rounded-0" type="text">
        </div>
    </form>
    `,
    data(){
        return{

        }
    },
    emits: ['add'],
    methods: {
        add(){
            this.$emit('add', this.newAssignment);
            this.newAssignment= ''
        }
    }
}