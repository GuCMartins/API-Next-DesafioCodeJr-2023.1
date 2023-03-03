import mongoose, {LeanDocument} from 'mongoose';

const dbName = process.env.MONGODB_URL as string;

const connection: { isConnected: number | boolean | undefined } = {
    isConnected: undefined,
};

async function connect() {
    if (connection.isConnected) {
        console.log('Using existing connection')
        return;
    }

    if(mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1) {
            console.log('Using existing connection')
            return;
        }
        await mongoose.disconnect();
    }
}