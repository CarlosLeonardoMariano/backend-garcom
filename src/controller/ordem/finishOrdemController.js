import { finishOrdemServices } from "../../services/ordem/finishOrdemServices.js";

class FinishOrdemController{
    async handle(req,res){
        const {id} = req.body;
    
        const finashOrderServices = new finishOrdemServices();

        const finalizado = await finashOrderServices.execute({
            id
        });
        return res.json(finalizado);
    }
}

export {FinishOrdemController};