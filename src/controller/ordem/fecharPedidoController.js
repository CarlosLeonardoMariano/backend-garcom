import { fecharPedidoServices } from "../../services/ordem/fecharPedidoServices.js";


class FecharPedidoController{
    async handle(req, res){
        const {id} = req.body;
        const fecharServices = new fecharPedidoServices();
        
            const pedidos = await fecharServices.execute({ id });
            
            return res.json(pedidos);
    }
}

export {FecharPedidoController};