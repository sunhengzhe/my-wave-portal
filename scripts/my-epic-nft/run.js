const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  console.log("Contract deployed to:", nftContract.address);

  const txt = await nftContract.makeAnEpicNFT()
  await txt.wait()

  txn = await nftContract.makeAnEpicNFT()
  await txn.wait()
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();