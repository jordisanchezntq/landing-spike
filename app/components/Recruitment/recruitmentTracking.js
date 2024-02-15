import {singularSdk, SingularConfig} from "singular-sdk";

const sdkKey = process.env.NEXT_PUBLIC_SINGULAR_SDK_KEY
const sdkSecret = process.env.NEXT_PUBLIC_SINGULAR_SDK_SECRET
const productId = process.env.NEXT_PUBLIC_SINGULAR_PRODUCT_ID

export async function initSingular() {
    const config = new SingularConfig(sdkKey, 
        sdkSecret, productId);
    const res = await singularSdk.init(config);
    console.log(res);
}