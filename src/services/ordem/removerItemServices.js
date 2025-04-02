import prisma from "../../prismas/index.js";


class removerItemServices{
    async execute({item_id}){
        const removerItem = await prisma.item.delete({
            where: {
                id:item_id
            }
        });
        return removerItem;
    }
}

export {removerItemServices};