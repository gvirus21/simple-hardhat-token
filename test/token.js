const { expect } = require("chai");


describe("Hardhat token", () => {
    it("Deployment should assign total supply tokens to the owner", async () => {
        const [owner] = await ethers.getSigners();
        console.log(`Signers: ${owner}`);

        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address)

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
    })
})