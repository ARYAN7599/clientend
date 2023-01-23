export const ABI2 = [
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