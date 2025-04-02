import { createOrdemServices } from "../../services/ordem/createOrdemServices.js"; 

class CreateOrdemController{
    async handle(req,res){
        const {numero_mesa, name} = req.body;
        console.log('Nome do cliente:', name)

        console.log('Mesa Aberta:', numero_mesa)

        const ordemservices = new createOrdemServices();

        const ordem = await ordemservices.execute({
            numero_mesa,
            name
        });
        res.json(ordem);
    }
}

export {CreateOrdemController};