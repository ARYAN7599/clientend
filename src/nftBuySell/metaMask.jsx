import React, { useState } from "react";
import RLogin, { RLoginButton } from '@rsksmart/rlogin'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from "web3";
import './metaMask.scss';
import { ethers } from "ethers";

// var isDes = false;

const rLogin = new RLogin({
    cachedProvider: false,
    providerOptions: {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    60457: 'https://fufi.finance/rpc'
                }
            }
        }
    },
    supportedChains: [60457]
})
const MetaMask = () => {
    const [provider, setProvider] = useState(null);
    const [sessions, setSessions] = useState([]);
    let [account, setAccount] = useState('');
    const [txHash, setTxHash] = useState('');
    const [balance, setBalance] = useState();

    let Address1 = "0x7543F199B9e3b533131caAefD51ebc20E3d2DB3C";
    let Address2 = "0x4613bB88A3D1C9D4f6dB627F5d492dE1B42b3c7c";
    const ABI1 = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "decodeNFTurl",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_imageName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_tokenURI",
                    "type": "string"
                }
            ],
            "name": "NFTMint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_tokenIds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "encoded",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "encodeURI",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "i",
                    "type": "uint256"
                }
            ],
            "name": "getEncodedURL",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "nfts",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "imageName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "URIdecoded",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const ABI2 = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "buyerId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                }
            ],
            "name": "approveBuyer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "nftContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "listTheNFTs",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "NFTBuyersList",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "buyerIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                }
            ],
            "name": "paymentForNFT",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                }
            ],
            "name": "removeNFTList",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "_buyerList",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_itemsSold",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_tokenIds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllNFTs",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "itemId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "nftContract",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "currentlyListed",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct sellBuyNFT.listedToken[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "buyerId",
                    "type": "uint256"
                }
            ],
            "name": "getBuyerList",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "buyerId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "itemId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "nftContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "buyer",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "buyerPrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "buyerAppr",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct sellBuyNFT.sellerAprove",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "buyerId",
                    "type": "uint256"
                }
            ],
            "name": "getBuyerPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                }
            ],
            "name": "getItemById",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "itemId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "nftContract",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address payable",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "currentlyListed",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct sellBuyNFT.listedToken",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "listedTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "nftContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "currentlyListed",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "sellerAproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "buyerId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "nftContract",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "buyerPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "buyerAppr",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const connect = () => rLogin.connect()
        .then(({ provider }) => {
            // isDes = true;
            setProvider(provider)
            const accounts = provider.request({ method: 'eth_accounts' }).then(([account]) => setAccount(account))
            account = accounts[0];
        })
    const getBalance = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const bal = await provider.getBalance(account);
        let bals = parseInt(bal)
        setBalance(Web3.utils.fromWei(bals.toString(), 'ether'));
    };
    async function handleDisconnect() {
        try {
            await provider.disconnect({
                topic: sessions.topic,
                code: 6000,
                message: "User disconnected",
            });
            reset();
        } catch (e) {
        }
    }
    const reset = () => {
        setAccount([]);
        // setSessions([]);
    };
    const faucetAddress = '0x88250f772101179a4ecfaa4b92a983676a3ce445'
    const sendTransaction = () => provider.request({
        method: 'eth_sendTransaction',
        params: [{ from: account, to: faucetAddress, value: '10000' }]
    }).then(setTxHash)
    const connectContract1 = async () => {
        window.web3 = await new Web3(provider);
        window.contract1 = await new window.web3.eth.Contract(ABI1, Address1);
        document.getElementById("contract1Id").innerHTML = "Connection Status: Success";
    }
    const connectContract2 = async () => {
        window.web3 = await new Web3(provider);
        window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
        document.getElementById("contract2Id").innerHTML = "Connection Status: Success";
    }
    const owner = async () => {
        const data = await window.contract1.methods.owner().call();
        document.getElementById("ownerId").innerHTML = `Owner: ${data}`;
    }
    const NFt_Details = async () => {
        const Details = (document.getElementById("nftId").value);
        const nftDetail = await window.contract1.methods.nfts(Details).call();
        document.getElementById("detailsId").innerHTML = `${"ImageName:" + " " + nftDetail.imageName + " " + "tokenURI:" + "" + nftDetail.tokenURI}`;
    }
    const NFTMint = async () => {
        const Image = (document.getElementById("imageId").value);
        const myEntry = (document.getElementById("nftURI").value);
        if (Image === null || Image === "", myEntry === null || myEntry === "") {
            alert("Please Upload Nft using Upload Image");
            return false;
        }
        await window.contract1.methods.NFTMint(Image, myEntry).send({ from: account });
    }
    let encodeURL;
    const getEncodedURL = async () => {
        const myEntry = document.getElementById("encodeId").value;
        if (myEntry === null || myEntry === "") {
            alert("Please put Index");
            return false;
        }
        encodeURL = await window.contract1.methods.getEncodedURL(myEntry).call();
        document.getElementById("encodeIded").innerHTML = `encode: ${encodeURL}`;
    }
    const NFTdecode = async () => {
        const encode = document.getElementById("encodeIid").value;
        if (encode === null || encode === "") {
            alert("Please put Index");
            return false;
        }
        const myEntry = await window.contract1.methods.getEncodedURL(encode).call();
        await window.contract1.methods.decodeNFTurl(myEntry).send({ from: account });
    }
    const getURIdecoded = async () => {
        const data = await window.contract1.methods.URIdecoded().call();
        document.getElementById("URIdecodedId").innerHTML = `URIdecoded: ${data}`;
    }
    const mintedNFTtokenIds = async () => {
        const data = await window.contract1.methods._tokenIds().call();
        document.getElementById("tokenIds").innerHTML = `_tokenIds: ${data}`;
    }
    const listedNFTtokenIds = async () => {
        const data = await window.contract2.methods._tokenIds().call();
        document.getElementById("listedNFTId").innerHTML = `_tokenIds: ${data}`;
    }
    const numberOfNFTsolded = async () => {
        const data = await window.contract2.methods._itemsSold().call();
        document.getElementById("soldIds").innerHTML = `_tokenIds: ${data}`;
    }
    const NFTBuyered = async () => {
        const data = await window.contract2.methods._buyerList().call();
        document.getElementById("buyerIds").innerHTML = `_tokenIds: ${data}`;
    }
    const NFTtokenURL = async () => {
        const token = document.getElementById("mintedId").value;
        if (token === null || token === "") {
            alert("Please put token Index");
            return false;
        }
        const data = await window.contract1.methods.tokenURI(token).call();
        document.getElementById("mintedNFTId").innerHTML = `tokenURIs: ${data}`;
    }
    const ApproveTheNFt = async () => {
        const nftContract = Address2;
        const tokenIds = document.getElementById("approveMintId").value;
        if (nftContract === null || nftContract === "", tokenIds === null || tokenIds === "") {
            alert("Please fill field");
            return false;
        }
        await window.contract1.methods.approve(nftContract, tokenIds).send({ from: account });
    }
    const SellerListingNFT = async () => {
        const nftContract1 = Address1;
        const tokenIds1 = document.getElementById("sellerNFTId").value;
        const amount = document.getElementById("sellerGivenPrice").value;
        const balances = await Web3.utils.toWei(amount, 'ether');
        if (nftContract1 === null || nftContract1 === "", tokenIds1 === null || tokenIds1 === "") {
            alert("Please fill all fields");
            return false;
        }
        await window.contract2.methods.listTheNFTs(nftContract1, tokenIds1, balances).send({ from: account });
    }
    const SellerListedItemById = async () => {
        const token4 = document.getElementById("listedTokenId").value;
        if (token4 === null || token4 === "") {
            alert("Please put Index");
            return false;
        }
        const nftDetail = await window.contract1.methods.nfts(token4).call();
        const data = await window.contract2.methods.listedTokens(token4).call();
        document.getElementById("URIDetails").innerHTML = `${"nftContract:" + " " + data.nftContract + " " + "tokenId:" + "" + data.tokenId + " " + "ownerAddress:" + "" + data.owner + " " + "sellerAddress:" + "" + data.seller + " " + "price:" + "" + data.price + " " + "currentlyListed:" + "" + data.currentlyListed}`;
        document.getElementById("URIDetails").innerHTML = `${"itemId:" + " " + data.itemId + " " + "nftName:" + " " + nftDetail.imageName + " " + "nftContract:" + " " + data.nftContract + " " + "tokenId:" + "" + data.tokenId + " " + "ownerAddress:" + "" + data.owner + " " + "sellerAddress:" + "" + data.seller + " " + "price:" + "" + data.price + " " + "currentlyListed:" + "" + data.currentlyListed}`;
    }

    const removeNFTList = async () => {
        const deleteToken = document.getElementById("deletetokenId").value;
        if (deleteToken === null || deleteToken === "") {
            alert("Please put index which you want to delete");
            return false;
        }
        await window.contract2.methods.removeNFTList(deleteToken).send({ from: account });
    }
    const NFTBuyersList = async () => {
        const tokenIds12 = document.getElementById("buyerItemID").value;
        const amount = document.getElementById("buyerPrice").value;
        if (tokenIds12 === null || tokenIds12 === "") {
            alert("Please all fields");
            return false;
        }
        var balances = await Web3.utils.toWei(amount, 'ether');
        await window.contract2.methods.NFTBuyersList(tokenIds12, balances).send({ from: account });
    }

    const buyerLists = async () => {
        const token5 = document.getElementById("buyerId").value;
        if (token5 === null || token5 === "") {
            alert("Please put index");
            return false;
        }
        const data = await window.contract2.methods.sellerAproved(token5).call();
        document.getElementById("buyerDetails").innerHTML = `${"sellerAddress:" + " " + data.seller + " " + "buyerId:" + "" + data.buyerId + " " + "itemId:" + "" + data.itemId + " " + "nftContract:" + "" + data.nftContract + " " + "buyerAddress:" + "" + data.buyer + " " + "buyerPrice:" + "" + data.buyerPrice + " " + "buyerApproved:" + "" + data.buyerAppr}`;
    }
    const ApproveBuyerBySeller = async () => {
        const tokenIds123 = document.getElementById("selectedBuyerId").value;
        const itemIdApproved = document.getElementById("buyerselectedItemId").value;
        if (tokenIds123 === null || tokenIds123 === "", itemIdApproved == null || itemIdApproved === "") {
            alert("Please both fields");
            return false;
        }
        await window.contract2.methods.approveBuyer(tokenIds123, itemIdApproved).send({ from: account });
    }

    const FetchBuyerApprovedPrice = async () => {
        const token11 = document.getElementById("fetchedBuyerId").value;;
        if (token11 == null || token11 === "") {
            alert("Please put index");
            return false;
        }
        var datas = await window.contract2.methods.getBuyerPrice(token11).call();
        document.getElementById("selectedPrice").innerHTML = `tokenURIDetails: ${datas}`;
    }
    const paymentForNFT = async (req, res, next) => {
        const buyerIndex = document.getElementById("NFTpaymentId").value;
        const itemId = document.getElementById("NFTpaymentId1").value;
        if (buyerIndex == null || buyerIndex === "", itemId === null || itemId === "") {
            alert("Please fill both fields");
            return false;
        }
        const abiArray = ABI2;
        let myAddress = buyerIndex;
        if (myAddress == null || myAddress === "") {
            alert("fill buyerIndex");
            return false;
        }
        var contract = new window.web3.eth.Contract(abiArray, Address2);
        var getalluser = await contract.methods.getBuyerPrice(myAddress).call();
        await window.contract2.methods.paymentForNFT(buyerIndex, itemId).send({ from: account, value: getalluser.toString() });

    }
    return (
        <div className="nfts">
            <h4 className="title"><b><i>
                <center>NFT MarketPlace</center>
            </i></b></h4>
            <div id="example1">
                <br />
                <h1>MetaMask Wallet Connection</h1>
                <div className="column align-items-start">
                    <div className="col">
                        <RLoginButton onClick={connect} >Connect wallet Address</RLoginButton>
                        <p>wallet address: {account}</p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={getBalance}>Fufi Balance</button>
                        <p>Wallet_Balance: {balance}</p>
                    </div>
                    <br />
                    <div>
                        <button onClick={handleDisconnect}>Disconnect</button>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={sendTransaction} disabled={!account}>send transaction</button>
                        <p>txHash: {txHash}</p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={connectContract1}>CONNECT TO CONTRACT1</button>
                        <p id="contract1Id" className="inputs">Not Connected to the smart Contract</p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={connectContract2}>CONNECT TO CONTRACT2</button>
                        <p id="contract2Id" className="inputs">Not Connected to the smart Contract</p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={owner}>get owner of the Smart Contract</button>
                        <p id="ownerId" className="inputs">Owner of Smart Contract </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="NFTIndex" id="nftId" /><br />
                        <button onClick={NFt_Details}>get_NFTs</button>
                        <p id="detailsId" className="inputs">details NFt </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="ImageName" id="imageId" />
                        <input type="text" className="inputs" placeholder="nftURI" id="nftURI" />
                        <button onClick={NFTMint}>Mint CONTRACT URI</button>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="EncodedURIId" id="encodeId" /><br />
                        <button onClick={getEncodedURL}>get CONTRACT URI</button>
                        <p id="encodeIded" className="inputs">encode url of Smart Contract </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="decodeURIId" id="encodeIid" /><br />
                        <button onClick={NFTdecode}>decode CONTRACT URI</button>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={getURIdecoded}>get URIdecoded of the Smart Contract</button><br />
                        <p id="URIdecodedId" className="inputs">URIdecoded of Smart Contract </p>
                    </div>
                    <br />
                    {/* <div  className="row align-items-start"> */}
                    <div className="col">
                        <button onClick={mintedNFTtokenIds}>mintedNFT count </button><br />
                        <p id="tokenIds" className="inputs">mintedNFTtoken </p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={listedNFTtokenIds}>listedNFT count </button><br />
                        <p id="listedNFTId" className="inputs">listedNFT no. </p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={numberOfNFTsolded}>soldedNFT count </button><br />
                        <p id="soldIds" className="inputs">NFTsolded no. </p>
                    </div>
                    <br />
                    <div className="col">
                        <button onClick={NFTBuyered}>NFTBuyered </button><br />
                        <p id="buyerIds" className="inputs">NFTBuyered no. </p>
                    </div>
                    {/* </div> */}
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="tokenURIId" id="mintedId" /><br />
                        <button onClick={NFTtokenURL}>tokenURI CONTRACT URI</button>
                        <p id="mintedNFTId" className="inputs">tokenURI of Smart Contract </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="approveTokenId" id="approveMintId" /><br />
                        <button onClick={ApproveTheNFt}>Approve CONTRACT URI</button>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="listTheNFTId" id="sellerNFTId" />
                        <input type="text" className="inputs" placeholder="amount" id="sellerGivenPrice" /><br/>
                        <button onClick={SellerListingNFT}>listTheNFTs CONTRACT URI</button>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="tokenId" id="listedTokenId" /><br />
                        <button onClick={SellerListedItemById}>SellerListedItemById CONTRACT URI</button>
                        <p id="URIDetails" className="inputs">getItems of Smart Contract </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="number" className="inputs" placeholder="deletetoken" id="deletetokenId" /><br />
                        <button onClick={removeNFTList}>DeleteListedNft CONTRACT URI</button>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="itemId" id="buyerItemID" />
                        <input type="number" className="inputs" placeholder="_amount" id="buyerPrice" />
                        <button onClick={NFTBuyersList}>NFTBuyersList CONTRACT URI</button>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="buyerIndex" id="buyerId" /><br />
                        <button onClick={buyerLists}>get buyers list</button>
                        <p id="buyerDetails" className="inputs">sellerAproved of Smart Contract </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="buyerId" id="selectedBuyerId" />
                        <input type="text" className="inputs" placeholder="itemId" id="buyerselectedItemId" />
                        <button onClick={ApproveBuyerBySeller}>approveBuyer CONTRACT URI</button><br />
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="buyerIds" id="fetchedBuyerId" /><br />
                        <button onClick={FetchBuyerApprovedPrice}>getBuyerPrice CONTRACT URI</button>
                        <p id="selectedPrice" className="inputs">getBuyerPrice of Smart Contract </p>
                    </div>
                    <br />
                    <div className="col">
                        <input type="text" className="inputs" placeholder="buyerIndex" id="NFTpaymentId" />
                        <input type="text" className="inputs" placeholder="itemId" id="NFTpaymentId1" />
                        <button onClick={paymentForNFT}>paymentForNFT CONTRACT URI</button>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
export default MetaMask;