import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {Type: String, required: true},
    text: {Type: String, required: true},
    price: {Type: Number, required: true},
    image: {Type: String, required: true},
    slug: { Type: String, required: true, unique: true },
},
{
    timestamps: true,
}
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;

export interface iProduct {
    name: string;
    text: string;
    price: number;
    image: string;
    slug: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}