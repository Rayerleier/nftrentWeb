import { publicClient } from "./client"
import { parseAbiItem } from 'viem'

async function main() {
    const latestBlockNumber = await publicClient.getBlockNumber();
    const startBlockNumber = latestBlockNumber - BigInt(100); //最近100个里面没有usdc交易
    console.log(`latestBlockNumber${latestBlockNumber}`)
    const filter = await publicClient.createEventFilter({
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'),
        fromBlock: startBlockNumber,
        toBlock: latestBlockNumber
    })


    const logs = await publicClient.getFilterLogs({ filter });
    logs.forEach((log) => {
        console.log(
            `从${log.args.from} 转账给 ${log.args.to} ${log.args.value! / BigInt(1e6)}
             USDC,https://etherscan.io/tx/${log.transactionHash}`
        )
    })
}

main();