

import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export default {
    upload(folder) {
        return {
            storage: multer.diskStorage({
                destination: (req, file, callback) => {
                    const __filename = fileURLToPath(import.meta.url);
                    const __dirname = dirname(__filename);
                    callback(null, resolve(__dirname, '..', '..', folder)); // Caminho da pasta tmp
                },
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;
                    callback(null, fileName);
                }
            })
        };
    }
};
