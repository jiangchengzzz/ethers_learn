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
const provider = new ethers.JsonRpcProvider(`${process.env.INFURA_GOERLI_URL}`);



const abi = [];


// 获取wtf信息
const abiWTF = [
  "function name() view returns (string)",
  "function balanceOf(address, uint256) external view returns (uint256)"
]

// 获取猴子信息
const abiMonkey = [
  "function name() view returns (string)",
  "function balanceOf(address) external view returns (uint256)"
]
// const contractWETH = new ethers.Contract('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', abi, provider)
// const contractDAI = new ethers.Contract('0xc778417e063141139fce010982780140aa0cd5ab', abi, provider)
const contractW = new ethers.Contract('0xDF9C19ceAdf7e4A9db07A57Fc0bFA246938e3BCA', abiWTF, provider)

const contractM = new ethers.Contract('0xE29F8038d1A3445Ab22AD1373c65eC0a6E1161a4', abiMonkey, provider)

const main = async () => {
    // 1. 读取WETH合约的链上信息（WETH abi）
    // const nameWETH = await contractWETH.name()
    // const symbolWETH = await contractWETH.symbol()
    // const totalSupplyWETH = await contractWETH.totalSupply()
    // console.log("\n1. 读取WETH合约信息")
    // console.log(`合约地址: ${addressWETH}`)
    // console.log(`名称: ${nameWETH}`)
    // console.log(`代号: ${symbolWETH}`)
    // console.log(`总供给: ${ethers.formatEther(totalSupplyWETH)}`)
    // const balanceWETH = await contractWETH.balanceOf('vitalik.eth')
    // console.log(`Vitalik持仓: ${ethers.formatEther(balanceWETH)}\n`)

    // // 2. 读取DAI合约的链上信息（IERC20接口合约）
    // const nameDAI = await contractDAI.name()
    // const symbolDAI = await contractDAI.symbol()
    // const totalSupplDAI = await contractDAI.totalSupply()
    // console.log("\n2. 读取DAI合约信息")
    // console.log(`合约地址: ${addressDAI}`)
    // console.log(`名称: ${nameDAI}`)
    // console.log(`代号: ${symbolDAI}`)
    // console.log(`总供给: ${ethers.formatEther(totalSupplDAI)}`)
    // const balanceDAI = await contractDAI.balanceOf('vitalik.eth')
    // console.log(`Vitalik持仓: ${ethers.formatEther(balanceDAI)}\n`)

    // const nameM = await contractM.name()
    // const symbolM = await contractM.symbol()
    // const totalSupplM = await contractM.totalSupply()
    // console.log("\n2. 读取DAI合约信息")
    // console.log(`合约地址: ${addressM}`)
    // console.log(`名称: ${nameM}`)
    // console.log(`代号: ${symbolM}`)
    // console.log(`总供给: ${ethers.formatEther(totalSupplM)}`)
    // const balanceM = await contractM.balanceOf('vitalik.eth')
  // console.log(`Vitalik持仓: ${ethers.formatEther(balanceM)}\n`)

  const balanceOf = await contractW.balanceOf('0xE143E7d0980834D24fe81DcaA3BDc3De4A195838', '82');
  console.log(' wtf-balanceOf', balanceOf)
  const name = await contractW.name()
  console.log('wtf-name', name)


  const balanceOfM = await contractM.balanceOf('0xE143E7d0980834D24fe81DcaA3BDc3De4A195838');
  console.log(' wtf-balanceOf', balanceOfM)
  const nameM = await contractM.name()
  console.log('wtf-name', nameM)
}

main()
