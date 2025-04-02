import { removerItemServices } from "../../services/ordem/removerItemServices.js";


class RemoverItemController{
    async handle(req,res){
        const item_id = req.query.item_id;

        const removerItens = new removerItemServices();

        const ordemItens = await removerItens.execute({
            item_id
        });
        return res.json(ordemItens);
}}

export {RemoverItemController};