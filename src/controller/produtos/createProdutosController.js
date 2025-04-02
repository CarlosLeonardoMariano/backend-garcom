import { json, response } from "express";
import { CreateProdutosServices } from "../../services/produtos/createProdutosServices.js";

import { v2 as cloudinary } from "cloudinary"; // Importando o Cloudinary

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

class CreateProdutosController {
    async Handle(req, res) {
        const { name, price, descricao, category } = req.body;
        const createProdutosControll = new CreateProdutosServices();

        // Verifique se o arquivo foi enviado
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ error: "Nenhum arquivo de imagem enviado!" });
        }

        const file = req.files['file'];  // Pega o arquivo enviado

        try {
            // Realizando o upload para o Cloudinary
            const resultsFile = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function (error, results) {
                    if (error) {
                        reject(error);  // Se ocorrer erro, rejeita a promessa
                        return;
                    }
                    resolve(results);  // Resolve com os resultados do upload
                }).end(file.data);
            });

           // console.log(resultsFile);  // Verifique os resultados do upload

            // Agora que temos o link da imagem, criamos o produto
            const produtos = await createProdutosControll.execute({
                name,
                price,
                descricao,
                banner: resultsFile.url,
                category
            });

            return res.json(produtos);  // Retorne o produto criado com a imagem

        } catch (error) {
            console.error("Erro ao criar o produto:", error);
            return res.status(500).json({ error: "Erro ao cadastrar o produto. Tente novamente mais tarde." });
        }
    }
}

export { CreateProdutosController };