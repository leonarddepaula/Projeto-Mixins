export default {
    methods: {
        removerItem() {
            this.itens.pop()
            console.log("Remover item ", this.item );

        }
    },
}