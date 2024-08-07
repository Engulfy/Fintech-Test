const { ethers } = require('ethers');

const walletAddress = '0xE3c2200996a83095099f2b8f69F39d1bBFa33456';

const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/7d6494978b0640baba69a97ac134a63f');

async function getBalance(address) {
    try {
        const balanceWei = await provider.getBalance(address);
        const balanceEther = ethers.formatEther(balanceWei);

        console.log(`Balance: ${balanceEther} ETH`);
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}

getBalance(walletAddress);