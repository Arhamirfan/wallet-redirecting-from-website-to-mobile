import React, { useState, useEffect } from 'react';
const wallet = () => {
    const [account, setAccount] = useState('');
    let walletConnection = async () => {
        try {
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'itms-apps://itunes.apple.com/app/metamask/id1455363061';
            // window.location.href = deepLink;
            // window.open('https://metamask.app.link/', '_blank');
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                if (web3.currentProvider.isMetaMask) {
                    window.ethereum.enable().then(() => {
                        setAccount(web3.eth.getAccounts().then(accounts => accounts[0]));
                    });
                } else {
                    web3.currentProvider.openMetaMask().then(() => {
                        window.ethereum.enable().then(() => {
                            setAccount(web3.eth.getAccounts().then(accounts => accounts[0]));
                        });
                    });
                }
            }
        } catch (e) {
            console.log('error:', e);
        }
    }
    // let walletInstall = () => {
    //     try {
    //         const deepLink = 'https://play.google.com/store/apps/details?id=io.metamask.metamask';
    //         //market://details?id=io.metamask.metamask
    //         window.location.href = deepLink;
    //     } catch (e) {
    //         console.log('error:', e);
    //     }
    // }
    return (
        <>
            <div>
                <button onClick={walletConnection}>connect to metamask</button>
            </div>
            {/* <div>
                <button onClick={walletInstall}>install metamask</button>
            </div> */}
            <div>
                {account ? (
                    <p>Your Ethereum address: {account}</p>
                ) : (
                    <p>Please install MetaMask to use this feature</p>
                )}
            </div>
        </>

    );
}

export default wallet;