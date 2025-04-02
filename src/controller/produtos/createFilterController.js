import { createFilterServices } from "../../services/produtos/createFilterServices.js";

class createFilterController {
 async handle(req,res){
    const category = req.query.category;

       const produtoCategory = new createFilterServices();

         const filter = await produtoCategory.execute(
            {category})
         
            return res.json(filter)
         }};
         

export { createFilterController};
