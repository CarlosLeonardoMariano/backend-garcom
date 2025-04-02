import prisma from "../../prismas/index.js";

class addItemServices{
    async execute({item_id,produto_id,quantidade}){
        const adicionarItens = await prisma.item.create({
            data: {
                item_id:item_id,
                produto_id:produto_id,
                quantidade:quantidade
            }
        });
        return adicionarItens;

    }
}

export {addItemServices};