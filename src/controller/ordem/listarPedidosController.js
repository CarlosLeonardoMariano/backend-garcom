import { listarPedidosServices } from "../../services/ordem/listarPedidosServices.js";

class ListarPedidosController{
    async handle(req,res){

        const listServices = new listarPedidosServices();

          const listarPedidos = await listServices.execute();

          return res.json(listarPedidos);
    }
}

export {ListarPedidosController};