import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from './controller/usuario/CreateuserController.js';
import { LoginUserController } from "./controller/usuario/LoginUserController.js";
import { DetalhesController } from './controller/usuario/DetalhesController.js';
import { CreateCategoriaController } from './controller/categoria/CreateCategoriaController.js';
import { ListaCategoriaControler } from './controller/categoria/listaCategoriaController.js'; 
import { CreateProdutosController } from './controller/produtos/createProdutosController.js';
import { createFilterController } from './controller/produtos/createFilterController.js'; 
import { CreateOrdemController } from './controller/ordem/createOrdemController.js';
import { RemoveOrdemController } from './controller/ordem/removeOrdemController.js';
import { AddItemController } from './controller/ordem/addItemController.js';
import { RemoverItemController } from './controller/ordem/removerItemController.js';
import { FecharPedidoController } from './controller/ordem/fecharPedidoController.js';
import { ListarPedidosController } from './controller/ordem/listarPedidosController.js';
import { DetalhesOrderController } from './controller/ordem/detalhesOrderController.js';
import { FinishOrdemController } from './controller/ordem/finishOrdemController.js';
import { CreateFinanceiroController } from './controller/financeiro/createFinanceiroController.js';



import IsAutenticantion from './middlewares/isAuteticantion.js';
import uploadConfig from './config/multer.js';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));  // Configura o upload de arquivos

// Rota de usuários
router.post('/usuarios', new CreateUserController().Handle);
router.post('/login', new LoginUserController().handle);
router.get('/info', IsAutenticantion, new DetalhesController().Handle);

// Rota de categorias
router.post('/categorias', IsAutenticantion, new CreateCategoriaController().Handle);

// Rota para listar produtos dentro de categorias
// Aqui o upload de arquivo é opcional, caso esteja enviando algo como parte da requisição
router.get('/categorias', IsAutenticantion, new ListaCategoriaControler().Handle);

// Rotas para criar produtos


// A rota agora inclui o upload de arquivo
//outer.post('/produtos', IsAutenticantion, upload.single('file'), new CreateProdutosController().Handle);
router.post('/produtos', IsAutenticantion, new CreateProdutosController().Handle);


router.get('/filter', IsAutenticantion, new createFilterController().handle);

//ROTA PARA ABRIR MESAS
router.post('/ordem', IsAutenticantion, new CreateOrdemController().handle);

//ROTA PARA REMOVER MESAS ABERTA
router.delete('/ordem', IsAutenticantion, new RemoveOrdemController().handle);

router.post('/ordem/adicionar', IsAutenticantion, new AddItemController().handle);

//ROTA PARA REMOVER ITENS DA MESA
router.delete('/ordem/deletaritens', IsAutenticantion, new RemoverItemController().handle);

//ROTA PARA TIRAR DO RASCUNHO === PUT ATUALIZA
router.put('/ordem/pedidos', IsAutenticantion, new FecharPedidoController().handle);

//ROTA PARA LISTAR TODOS OS PEDIDOS FEITOS
router.get('/ordems', IsAutenticantion, new ListarPedidosController().handle);

router.get('/ordem/detalhes', IsAutenticantion, new DetalhesOrderController().handle);

//ROTA DE FINALIZACÃO NA COZINHA DA PIZZARIA
router.put('/order/finalizado', IsAutenticantion, new FinishOrdemController().handle);

router.post('/financeiro', IsAutenticantion, new CreateFinanceiroController().handle);

export { router };
