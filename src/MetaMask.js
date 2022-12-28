import React, { useState } from "react";
import RLogin, { RLoginButton } from '@rsksmart/rlogin'
import WalletConnectProvider from '@walletconnect/web3-provider'
import axios from 'axios';
import Web3 from "web3";
import './App.css';

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
    const [imagePath, setPath] = useState('');
    const [imageName, setImageName] = useState('');
    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });

    const imageUpload = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });

    }

    const [isSucces, setSuccess] = useState(null);

    const submit = async () => {
        const formdata = new FormData();
        formdata.append('myFile', userInfo.file);

        axios.post("http://139.59.65.197:5000/imageupload", formdata, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => {
                setPath(`${"http://139.59.65.197:5000/public/uploads/" + res.data.file}`);
                setImageName(`${res.data.file}`);
                if (res.data.success === 1) {
                    setSuccess("Image upload successfully");
                    alert("Your file is being uploaded!")
                }
            });
        // console.log(userInfo.file);

    }


    let Address1 = "0x7ae377A5a1C04411dc2b2E9c71199f5091aB2962";
    let Address2 = "0x4BDe51392fd947aed028a1d0afd3C2Ac774f9C64";


    const ABI1 = [
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
            "stateMutability": "nonpayable",
            "type": "constructor"
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
            setProvider(provider)
            const accounts = provider.request({ method: 'eth_accounts' }).then(([account]) => setAccount(account))
            account = accounts[0];

        })
    async function handleDisconnect() {
        try {
            await provider.disconnect({
                topic: sessions.topic,
                code: 6000,
                message: "User disconnected",
            });
            reset();
        } catch (e) {
            // console.log(e);
        }
    }
    const reset = () => {
        setAccount([]);
        setSessions([]);
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
        document.getElementById("detailsId").innerHTML = `${"ImageName:"+" "+nftDetail.imageName+ " " + "tokenURI:"+""+nftDetail.tokenURI}`;
    }

    const NFTMint = async () => {
        const Image = (document.getElementById("imageId").value);
        const myEntry = imagePath;
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
        if (nftContract === null || nftContract === "",tokenIds === null || tokenIds === "") {
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
        if (nftContract1 === null || nftContract1 === "",tokenIds1 === null || tokenIds1 === "") {
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
        const data = await window.contract2.methods.getItemById(token4).call();
        document.getElementById("URIDetails").innerHTML = `tokenURIDetails: ${data}`;
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
        document.getElementById("buyerDetails").innerHTML = `tokenURIDetails: ${Object.values(data)}`;
    }
    let tokenIds123;
    let itemIdApproved;
    const ApproveBuyerBySeller = async () => {
         tokenIds123 = document.getElementById("selectedBuyerId").value;
         itemIdApproved = document.getElementById("buyerselectedItemId").value;
        if (tokenIds123 === null || tokenIds123 === "" ,itemIdApproved == null || itemIdApproved === "") {
            alert("Please both fields");
            return false;
        }
        await window.contract2.methods.approveBuyer(tokenIds123, itemIdApproved).send({ from: account });
    }
   
    const FetchBuyerApprovedPrice = async () => {
        const token11 = tokenIds123;
        if (token11 == null || token11 === "") {
            alert("Please put index");
            return false;
        }
        var datas = await window.contract2.methods.getBuyerPrice(token11).call();
        document.getElementById("selectedPrice").innerHTML = `tokenURIDetails: ${datas}`;

    }

    const paymentForNFT = async (req, res, next) => {
        const buyerIndex = tokenIds123;
        const itemId = itemIdApproved;
        if (buyerIndex == null || buyerIndex === "" , itemId === null || itemId === "") {
            alert("Please fill both fields");
            return false;
        }
        const abiArray = ABI2;
        let myAddress = buyerIndex;
        if (myAddress == null || myAddress === "" ) {
            alert("fill buyerIndex");
            return false;
        }
        var contract = new window.web3.eth.Contract(abiArray, Address2);
        var getalluser = await contract.methods.getBuyerPrice(myAddress).call();
        let addressFrom = await window.contract1.methods.owner().call();

        let params = [{
            "from": account,
            "to": addressFrom,
            "gas": Number(21000).toString(16),
            "gasPrice": Number(2500000).toString(16),
            "value": Number(getalluser).toString(16),
        }]

        await window.ethereum.request({ method: "eth_sendTransaction", params }).catch((err => {
            // console.log(err)
        }));
        await window.contract2.methods.paymentForNFT(buyerIndex, itemId).send({ from: account });

    }

    return (
        <div>

            <h4><b><i>
                <center>NFT MarketPlace</center>
            </i></b></h4>
            <div id="example1">
                <br />
                <div className="container mr-60">
                    <h3 className="text-white">Upload Image</h3>
                    <div className="formdesign">
                        {isSucces !== null ? <h4> {isSucces} </h4> : null}
                        <div className="form-row">
                            <label className="text-white">Select Image :</label>
                            <input type="file" className="form-control" name="myFile" autoComplete="off" onChange={imageUpload} />
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-dark" onClick={() => submit()} > Save </button>
                        </div>
                    </div>

                    <img className="previewimg" src={imagePath} alt="UploadImage" />
                    <p>{imageName}</p>

                </div>

                <h1>MetaMask Wallet Connection</h1>

                <div className="row align-items-start">
                    <RLoginButton onClick={connect}>Connect wallet Address</RLoginButton>
                    <p>wallet address: {account}</p>
                    <button onClick={handleDisconnect}>Disconnect</button>
                    <div className="col">

                        <button onClick={sendTransaction} disabled={!account}>send transaction</button>
                        <p>txHash: {txHash}</p>

                    </div>
                    <div className="col">
                        <button onClick={connectContract1}>CONNECT TO CONTRACT1</button>
                        <p id="contract1Id" className="inputs">Not Connected to the smart Contract</p>
                    </div>
                    <div className="col">
                        <button onClick={connectContract2}>CONNECT TO CONTRACT2</button>
                        <p id="contract2Id" className="inputs">Not Connected to the smart Contract</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <button onClick={owner}>get owner of the Smart Contract</button>
                        <p id="ownerId" className="inputs">Owner of Smart Contract </p>
                    </div>

                    <div className="col">
                        <button onClick={NFt_Details}>get_NFTs</button>
                        <input type="text" className="inputs" placeholder="NFTIndex" id="nftId" />
                        <p id="detailsId" className="inputs">details NFt </p>
                    </div>

                    <div className="col">
                        <button onClick={NFTMint}>Mint CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="ImageName" id="imageId" />
                    </div>
                    <div className="col">
                        <button onClick={getEncodedURL}>get CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="EncodedURIId" id="encodeId" />
                        <p id="encodeIded" className="inputs">encode url of Smart Contract </p>
                    </div>

                    <div className="col">
                        <button onClick={NFTdecode}>decode CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="decodeURIId" id="encodeIid" />
                    </div>
                    <div className="col">
                        <button onClick={getURIdecoded}>get URIdecoded of the Smart Contract</button>
                        <p id="URIdecodedId" className="inputs">URIdecoded of Smart Contract </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <button onClick={mintedNFTtokenIds}>mintedNFT count </button>
                        <p id="tokenIds" className="inputs">mintedNFTtoken </p>
                    </div>
                    <div className="col">
                        <button onClick={listedNFTtokenIds}>listedNFT count </button>
                        <p id="listedNFTId" className="inputs">listedNFT no. </p>
                    </div>
                    <div className="col">
                        <button onClick={numberOfNFTsolded}>soldedNFT count </button>
                        <p id="soldIds" className="inputs">NFTsolded no. </p>
                    </div>
                    <div className="col">
                        <button onClick={NFTBuyered}>NFTBuyered </button>
                        <p id="buyerIds" className="inputs">NFTBuyered no. </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <button onClick={NFTtokenURL}>tokenURI CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="tokenURIId" id="mintedId" />
                        <p id="mintedNFTId" className="inputs">tokenURI of Smart Contract </p>
                    </div>
                    <div className="col">
                        <button onClick={ApproveTheNFt}>Approve CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="approveTokenId" id="approveMintId" />
                    </div>
                    <div className="col">
                        <button onClick={SellerListingNFT}>listTheNFTs CONTRACT URI</button>

                        <input type="text" className="inputs" placeholder="listTheNFTId" id="sellerNFTId" />
                        <input type="text" className="inputs" placeholder="amount" id="sellerGivenPrice" />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <button onClick={SellerListedItemById}>SellerListedItemById CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="tokenId" id="listedTokenId" />
                        <p id="URIDetails" className="inputs">getItems of Smart Contract </p>
                    </div>
                    <div className="col">
                        <button onClick={removeNFTList}>DeleteListedNft CONTRACT URI</button>
                        <input type="number" className="inputs" placeholder="deletetoken" id="deletetokenId" />
                    </div>
                    <div className="col">
                        <button onClick={NFTBuyersList}>NFTBuyersList CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="itemId" id="buyerItemID" />
                        <input type="number" className="inputs" placeholder="_amount" id="buyerPrice" />
                    </div>
                    <div className="col">
                        <button onClick={buyerLists}>get buyers list</button>
                        <input type="text" className="inputs" placeholder="buyerIndex" id="buyerId" />
                        <p id="buyerDetails" className="inputs">sellerAproved of Smart Contract </p>
                    </div>
                </div>
                <br />
                <div className="row align-items-start">
                    <div className="col">
                        <button onClick={ApproveBuyerBySeller}>approveBuyer CONTRACT URI</button>
                        <input type="text" className="inputs" placeholder="buyerId" id="selectedBuyerId" />
                        <input type="text" className="inputs" placeholder="itemId" id="buyerselectedItemId" />
                    </div>
                </div>
                <br />
                <div className="row align-items-start">
                    <div className="col">
                        <button onClick={FetchBuyerApprovedPrice}>getBuyerPrice CONTRACT URI</button>
                        <p id="selectedPrice" className="inputs">getBuyerPrice of Smart Contract </p>
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col-md-6 offset-md-3">
                        <button onClick={paymentForNFT}>paymentForNFT CONTRACT URI</button><br />
                    </div>


                </div>
            </div>

        </div>

    )
}



export default MetaMask;
