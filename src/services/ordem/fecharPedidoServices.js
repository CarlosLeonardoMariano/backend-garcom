import prisma from "../../prismas/index.js";

class fecharPedidoServices{
    async execute({id}){
        const pedidos = await prisma.ordem.update({
            where: {
                id:id
            },
            data:{
                rascunho: false
            }
        });
        
        return pedidos;
    }}


export {fecharPedidoServices};