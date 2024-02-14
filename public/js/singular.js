import {singularSdk, SingularConfig} from "singular-sdk";

const config = new SingularConfig(sdkKey, sdkSecret, productId);

// Singular SDK
singularSdk.init(config)