export default {
    name: "custom-button",
    template: `
        <button :class="{
            'btn': true,
            'btn btn-primary': type === 'primary',
            'btn btn-success': type === 'secondary',
        }"><slot /></button>
    `,
    data() {
        return {
            active: true
        }
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },
    mounted() {
        // alert("Single Componet Working");
    },
}