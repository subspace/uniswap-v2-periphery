const { ethers } = require("hardhat");
const ConstructorParams = require('../constructor.js');

async function main() {
    const [deployer] = await ethers.getSigners();

    const [FACTORY_v2, WETH] = ConstructorParams

    console.log("Deploying contracts with the account:", deployer.address);

    const UniswapV2Router01 = await ethers.getContractFactory("UniswapV2Router01");
    const router_one = await UniswapV2Router01.deploy(FACTORY_v2, WETH);

    await router_one.deploymentTransaction();

    console.log("UniswapV2Router01 deployed to:", await router_one.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
