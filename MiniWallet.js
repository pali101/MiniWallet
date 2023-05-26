require('dotenv').config();

const Web3 = require('web3');
const apikey = process.env['apiKey'];
const network = 'goerli';
const node = `https://eth.getblock.io/${apikey}/${network}`;
const web3 = new Web3(node);
const accountTo = web3.eth.accounts.create();
const privateKey = process.env['privateKey']
const accountFrom = web3.eth.accounts.privateKeyToAccount(privateKey);

const createSignedTx = async (rawTx) => {
    rawTx.gas = await web3.eth.estimateGas(rawTx);
    return await accountFrom.signTransaction(rawTx);
}

const sendSignedTx = async (signedTx) => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction).then(console.log);
}

const amountTo = "0.00001";
const amount = web3.utils.toWei(amountTo, 'ether');
const rawTx = {
    to: accountTo.address,
    value: amount
}

createSignedTx(rawTx).then(sendSignedTx);

// Trial run result - https://goerli.etherscan.io/tx/0x3b4f9cc2552dddedf9ece5dd26699054923e413f8542f15544b469284a607cdc