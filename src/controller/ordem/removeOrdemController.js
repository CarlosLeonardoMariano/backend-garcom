import { removeOrdemServices } from "../../services/ordem/removeOrdemServices.js";


class RemoveOrdemController{
    async handle(req,res){
        const id = req.query.id;
        console.log('Mesa Fechada:', id)

        const removeservices = new removeOrdemServices();

        const remover = await removeservices.execute( {id} )
            return res.json(remover)
    }};

    export {RemoveOrdemController};