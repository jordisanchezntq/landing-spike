import {singularSdk, SingularConfig} from "singular-sdk";

const config = new SingularConfig(sdkKey, sdkSecret, productId);

// Singular SDK
console.log(config)
singularSdk.init(config)