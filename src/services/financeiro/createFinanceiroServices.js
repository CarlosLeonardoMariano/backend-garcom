import prisma from "../../prismas/index.js";

class CreateFinanceiroServices{
        async execute({ descricao, valor, tipo }) {
            const adicionarFinanceiro = await prisma.financeiro.create({
                data: {
                    descricao,
                    valor,
                    tipo
                }
            });
        
            return adicionarFinanceiro;
        }
        
}

export {CreateFinanceiroServices};
