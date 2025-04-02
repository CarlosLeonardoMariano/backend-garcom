import { detalhesOrderServices } from "../../services/ordem/detalhesOrderServices.js";

class DetalhesOrderController{
    async handle(req,res){
        const item_id = req.query.item_id;

        const detalhesServices = new detalhesOrderServices();

        const detalhesPedidos = await detalhesServices.execute({
            item_id
        });
        return res.json(detalhesPedidos);
    }
}

export {DetalhesOrderController};