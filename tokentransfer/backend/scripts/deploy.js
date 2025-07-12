const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy();
  await token.waitForDeployment(); 
  const address = await token.getAddress(); 
  console.log(`Deployed to: ${address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
