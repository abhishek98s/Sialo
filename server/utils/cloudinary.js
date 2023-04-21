import cloudinary from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config();

cloudinary.v2.config({
    cloud_name: "dxsqdqnoe",
    api_key: "563637871336394",
    api_secret: "tmSUj-ZPldck9aDtFe7b445P1pw"
})


export default cloudinary