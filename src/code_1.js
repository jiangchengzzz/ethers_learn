/*
 * @Descriptin:
 * @Autor: 蒋承志
 * @Date: 2023-10-12 17:06:47
 * @LastEditors: 蒋承志
 * @LastEditTime: 2023-10-12 18:45:49
 */
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
console.log('first', process.env.INFURA_GOERLI_URL)
// const provider_1 = ethers.getDefaultProvider(`${process.env.INFURA_MAINNET_URL}`);
const provider_2 = ethers.getDefaultProvider(`${process.env.INFURA_GOERLI_URL}`);
const gerNum = async (account) => {
  // const balance1 = await provider_1.getBalance(account);
  const balance2 = await provider_2.getBalance(account);
  // console.log(`主网eth余额:${ethers.formatEther(balance1)}`)
  console.log(`测试网eth余额:${ethers.formatEther(balance2)}`)
}
//  查询v神的账户余额
gerNum('vitalik.eth')
gerNum('0xE143E7d0980834D24fe81DcaA3BDc3De4A195838')