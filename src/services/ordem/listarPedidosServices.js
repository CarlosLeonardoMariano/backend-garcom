import prisma from "../../prismas/index.js";


class listarPedidosServices{
    async execute(){
        const listarPedidos = await prisma.ordem.findMany({
            where :{
                rascunho:false,
                status:false
            },
            orderBy:{
                created_at: 'desc'
            }
        });
        return listarPedidos;
    }
}
export {listarPedidosServices};