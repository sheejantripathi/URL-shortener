import mongoose, { Document } from 'mongoose';
import { customAlphabet } from 'nanoid';

//using a dynamic import for NanoID because of Error [ERR_REQUIRE_ESM]: require() of ES Module
// const nanoidImport = import('nanoid');
// const nanoid = (await nanoidImport).customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*', 8);//customAlphabet returns a function that allows you to create nanoid with your own alphabet and ID size.

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*', 8); 

export interface IShortUrl extends Document {
    shortId: string;
    destination: string;
}

const schema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required:true,
        default: () => nanoid(),
    },
    destination: { type: String, required: true },
});

const shortUrl = mongoose.model<IShortUrl>('ShortUrl', schema);

export default shortUrl;