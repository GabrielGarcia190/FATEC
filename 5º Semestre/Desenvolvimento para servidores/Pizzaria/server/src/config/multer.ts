import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (req, file, cb) => {
                    const filehash = crypto.randomBytes(16).toString('hex');
                    const filename = `${filehash}-${file.originalname}`;

                    return cb(null, filename);
                }
            })
        }
    }
}