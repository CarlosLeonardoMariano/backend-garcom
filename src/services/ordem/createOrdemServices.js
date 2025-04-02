import prisma from "../../prismas/index.js";

class createOrdemServices{
    async execute({numero_mesa,name}){
        const ordem = await prisma.ordem.create({
            data: {
                numero_mesa:numero_mesa,
                name:name
            }
        });
        return ordem;
    }
}

export {createOrdemServices};