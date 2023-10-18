/*
 * @Descriptin:
 * @Autor: 蒋承志
 * @Date: 2023-10-12 17:06:47
 * @LastEditors: 蒋承志
 * @LastEditTime: 2023-10-17 16:40:08
 */
import { ethers } from "ethers";
import dotenv from "dotenv"; // 引入这个可以在这使用process
dotenv.config();
// const provider_1 = ethers.getDefaultProvider(`${process.env.INFURA_MAINNET_URL}`); // 不知道为啥连不上主网
const provider_2 = new ethers.getDefaultProvider(`${process.env.INFURA_GOERLI_URL}`);
const getBaseData = async () => {
  const netWork = await provider_2.getNetwork();  // 获取网络
  const blockNumber = await provider_2.getBlockNumber();  // 获取区块高度
  const feeData = await provider_2.getFeeData();  // 获取gas建议情况
  const block = await provider_2.getBlock(0);  // 获取某区块高度比如0
  const code = await provider_2.getCode("0xc778417e063141139fce010982780140aa0cd5ab");  // 获取合约 -》weth

  // ethers版本6以上 netWork不能直接打印
  console.log(`测试网${netWork.toJSON().name}, 区块高度${blockNumber}, 建议gas${feeData.toJSON()}`)
  console.log(`0区块信息${block.toJSON()}`)
  console.log(`weth合约${code}`)
}
const gerNum = async (name,account) => {
  // const balance1 = await provider_1.getBalance(account);
  // console.log(`主网eth余额:${ethers.formatEther(balance1)}`)

  const balance2 = await provider_2.getBalance(account);
  const historyTime = await provider_2.getTransactionCount(account);

  console.log(`${name}, eth余额:${ethers.formatEther(balance2)},一共交易了${historyTime}次`)
}
getBaseData()
//  查询v神的账户余额
// gerNum('v神' ,'vitalik.eth')
gerNum('我' ,'0xE143E7d0980834D24fe81DcaA3BDc3De4A195838')