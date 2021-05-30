// import assert library 
const assert = require('assert');
const ganache = require('ganache-cli');
/*This is a constructor function. It's purpose
is to create instances of the web 3 library.
Each instance can connect to an ethereum network. 
Multiple instances can connect to different networks.
*/
const Web3 = require('web3');
//lower case web3 = instance
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');
/*
You always need to provide a provider. 
This is a communication layer that connects web3 library
to the ethereum network.
*/

// first create a beforeEach function that grabs an account to use
let accounts;
let inbox;
beforeEach(async () => {
    //Get a list of all accounts from the ethereum module
    accounts = await web3.eth.getAccounts();
    //Use an account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        /* This allows use to deploy a copy
        of the contract with an initalized message 
        of Hi there. In our contract file, we needed
        to pass in an initial message */
        .deploy({ data: bytecode, arguments: ['Hi There!'] })
        /* This tells web3 to send out a transaction 
        that creates the contract. We also need to specify
        the gas limit that this contract can use */
        .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox Contract', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});