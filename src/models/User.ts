import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { Type: String, required: true },
    email: { Type: String, required: true, unique: true },
    aniversario: { Type: String, required: true },
    image: { Type: String, required: true },
    cargo: { Type: String, required: true },
    salario: { Type: Number, required: true },
    slug: { Type: String, required: true, unique: true },
},
{
    timestamps: true,
}
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

export interface iUser {
    name: string;
    email: string;
    aniversario: string;
    image: string;
    cargo: string;
    salario: number;
    slug: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}
