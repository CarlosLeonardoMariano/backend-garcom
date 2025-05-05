
import { CreateFinanceiroServices } from "../../services/financeiro/createFinanceiroServices.js";

class CreateFinanceiroController {
    async handle(req, res) {
        const { descricao, valor, tipo } = req.body;

        const Financeiro = new CreateFinanceiroServices();

        const novoFinanceiro = await Financeiro.execute({
            descricao,
            valor,
            tipo
        });

        res.json(novoFinanceiro);
    }
}

export { CreateFinanceiroController };

