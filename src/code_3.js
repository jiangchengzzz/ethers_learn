/*
 * @Descriptin:
 * @Autor: 蒋承志
 * @Date: 2023-10-12 17:06:47
 * @LastEditors: 蒋承志
 * @LastEditTime: 2023-10-27 17:55:09
 */
import { ethers } from "ethers";
import dotenv from "dotenv"; // 引入这个可以在这使用process
dotenv.config();
// 实在是因为领不到GOERLI水 所以这次用SEPOLIA测试网
const provider = new ethers.JsonRpcProvider(`${process.env.INFURA_SEPOLIA_URL}`);

// 发送钱包
const wallet1 = new ethers.Wallet('私钥', provider)
// 随机生成一个钱包
const wallet2 = ethers.Wallet.createRandom()
const w2WithPro = wallet2.connect(provider); // 链接provider
const w2Mne = wallet2.mnemonic  // 获取助记词
const transf = async () => {
  const wallet2Address = await wallet2.getAddress()
  console.log('新钱包助记词', w2Mne);
  console.log('新钱包助记词序列化', wallet2.mnemonic.phrase)
  console.log('新钱包私钥', wallet2.privateKey)
  console.log('新钱包地址', wallet2Address);
  const wallet1Address = await wallet1.getAddress()
  console.log('老钱包地址', wallet1Address);

  // const w1TN = await wallet1.getTransactionCount()
  // console.log('老钱包交一次数', w1TN);

  console.log('发送前--老', ethers.formatEther(await provider.getBalance(wallet1)))
  console.log('发送前--新', ethers.formatEther(await provider.getBalance(w2WithPro)))

  const tx = {
    to: wallet2Address,
    value: ethers.parseEther('0.001')
  }

  console.log('开始')
  const receipt = await wallet1.sendTransaction(tx); // 去链上发起
  await receipt.wait() // 等链上确认
  console.log('receipt', receipt);

  console.log('结束')
  console.log('发送后--老', ethers.formatEther(await provider.getBalance(wallet1)))
  console.log('发送后--新', ethers.formatEther(await provider.getBalance(w2WithPro)))
}
// 会新生成钱包， 先注释
// transf()
