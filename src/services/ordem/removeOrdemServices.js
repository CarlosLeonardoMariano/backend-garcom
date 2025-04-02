import prisma from "../../prismas/index.js";
class removeOrdemServices {
    async execute({ id }) {
        
      if (!id) {
        throw new Error("ID não fornecido.");
      }
  

  
      const removerOrdem = await prisma.ordem.delete({
        where: {
          id: id,
        }
      });
  
      return removerOrdem;
    }
  }
  
  


export {removeOrdemServices};
