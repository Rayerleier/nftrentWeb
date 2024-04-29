import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export const publicClient = createPublicClient({
    chain:mainnet,
    transport: http("https://rpc.particle.network/evm-chain?chainId=1&projectUuid=a8d9f2d6-12bf-493e-8b5e-cef99f704f5c&projectKey=cgVh0K0W7mIHW1WDuroh2olOQsK1ijnqjJy9ia3t")})