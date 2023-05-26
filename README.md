# Ethereum Mini Wallet

This script allows you to send Ethereum transactions from one account to another on the Goerli network using the `web3` library. It acts as a mini wallet and uses a private key and API key provided in the `.env` file to interact with the Ethereum network.

## Prerequisites

- Node.js installed on your machine
- Ethereum account with a private key
- API key from getblock.io

## Installation

1. Clone the repository or download the script file.
2. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```
3. Create a .env file in the project's root directory and add the following variables:
    ```shell
    apiKey=<your_getblock_io_api_key>
    privateKey=<your_ethereum_private_key>
    ```
 Replace <your_getblock_io_api_key> with your actual API key from getblock.io and <your_ethereum_private_key> with your Ethereum account's private key.

 ## Usage
 1. Open a terminal or command prompt and navigate to the project's directory.
 2. Run the following command to execute the script:

```shell
node MiniWallet.js
```
The script create a signed transaction, and send it to the Ethereum Test network - Goerli.

Note: The default amount to send is set to "0.00001" Ether. You can modify the amountTo variable in the code to change the amount before executing.