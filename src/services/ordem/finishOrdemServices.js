import prisma from "../../prismas/index.js";

class finishOrdemServices{
    async execute({id}){

        const finalizar = await prisma.ordem.update({
          
            where:{
                id:id
            },
              data:{
                status:true,
              }
        });
        return finalizar;
    }
}
export {finishOrdemServices};