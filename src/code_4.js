/*
 * @Descriptin:
 * @Autor: 蒋承志
 * @Date: 2023-10-12 17:06:47
 * @LastEditors: 蒋承志
 * @LastEditTime: 2023-10-18 17:01:42
 */
import { ethers } from "ethers";
import dotenv from "dotenv"; // 引入这个可以在这使用process
dotenv.config();
const provider = new ethers.JsonRpcProvider(`${process.env.INFURA_SEPOLIA_URL}`);


const pKey = '私钥'
// 创建关于钱包的对象
const wallet = new ethers.Wallet(pKey, provider);

const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function deposit() public payable",
    "function transfer(address, uint) public returns (bool)",
    "function withdraw(uint) public",
];

const addressWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'

// 声明可写合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)


const main = async () => {
  const address = await wallet.getAddress()
  console.log("\n1. 读取WETH余额")
  const balanceWETH = await contractWETH.balanceOf(address)
  console.log(`存款前WETH持仓: ${ethers.formatEther(balanceWETH)}\n`)
  console.log("\n2. 调用desposit()函数，存入0.001 ETH")
  // 发起交易
  const tx = await contractWETH.deposit({value: ethers.parseEther("0.001")})
  // 等待交易上链
  await tx.wait()
  console.log(`交易详情：`)
  console.log(tx)
  const balanceWETH_deposit = await contractWETH.balanceOf(address)
  console.log(`存款后WETH持仓: ${ethers.formatEther(balanceWETH_deposit)}\n`)

  console.log("\n3. 调用transfer()函数，给学习钱包转账0.001 WETH")
  // 发起交易
  const tx2 = await contractWETH.transfer("0x0cfC6394bD94415d3D9Da8a754B97B611f5C7E1f", ethers.parseEther("0.001"))
  // 等待交易上链
  await tx2.wait()
  const balanceWETH_transfer = await contractWETH.balanceOf(address)
  console.log(`转账后WETH持仓: ${ethers.formatEther(balanceWETH_transfer)}\n`)
}

main()
