const {ethers}= require("ethers");
require("dotenv").config();
console.log("Private Key Raw:", process.env.PRIVATE_KEY);
console.log("Length:", process.env.PRIVATE_KEY.length);
const provider= new ethers.JsonRpcProvider(process.env.RPC_URL);
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const wallet= new ethers.Wallet(PRIVATE_KEY,provider);
const CONTRACT_ADDRESS="0xb2A63962408E48E5E95feeD0821337804c261167";
const ABI=[
    "function transfer(address to, uint amount) public returns (bool)",
    "function balanceOf(address) view returns (uint)",
    "function faucet() public",
];
const contract=new ethers.Contract(CONTRACT_ADDRESS,ABI,wallet);
async function sendTokens(to, amount){
    const tx=await contract.transfer(to,ethers.parseUnits(amount,18));
    await tx.wait();
    return tx.hash;
}
module.exports={sendTokens};
