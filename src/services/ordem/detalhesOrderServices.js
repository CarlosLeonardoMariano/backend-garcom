import prisma from "../../prismas/index.js";


class detalhesOrderServices{

    async execute({item_id}){

        const detalhesPedidos = prisma.item.findMany({
            where: {
                item_id:item_id
            }, include:{
                produts:true,
                ordem:true,
            }
        });
        return detalhesPedidos;
    }
}
export {detalhesOrderServices};