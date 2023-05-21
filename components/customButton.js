export default {
    name: "custom-button",
    template: `
        <button class="btn btn-primary" :class="active ? 'is-disabled' : ''"><slot /></button>
    `,
    data() {
        return {
            active: true
        }
    },
    mounted() {
        alert("Single Componet Working");
    },
}