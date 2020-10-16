import Image from "../models/Image"

const BASE_IP_ADRESS = process.env.BASE_IP_ADRESS;


export default {
    render(image: Image) {
        return {
            id: image.id,
            path: `http://${BASE_IP_ADRESS}/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => {
            return this.render(image);
        });
    }
}