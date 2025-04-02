import { addItemServices } from "../../services/ordem/addItemServices.js";


class AddItemController{
    async handle(req,res){
        const {item_id,produto_id,quantidade} = req.body;

        const addServices = new addItemServices();
         const addItem = await addServices.execute({
            item_id,
            produto_id,
            quantidade
         });
        return res.json(addItem);
        }
}

export {AddItemController};