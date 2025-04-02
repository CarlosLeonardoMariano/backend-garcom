import prisma from "../../prismas/index.js";

class createFilterServices{
async execute({category}){
    const findcategory = await prisma.produto.findMany({
        where:{
            category:{
                id: category
            }
        }
    })
            return findcategory;
}
}



export {createFilterServices};