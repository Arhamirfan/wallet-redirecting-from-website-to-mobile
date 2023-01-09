
const wallet = () => {
    let walletConnection = async () => {
        try {
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'itms-apps://itunes.apple.com/app/metamask/id1455363061';
            // window.location.href = deepLink;
            // window.open('https://metamask.app.link/', '_blank');
            if (window.ethereum) {
                // Request the user to connect their MetaMask account
                await window.ethereum.enable();

                // Initialize the Web3 object using the injected provider
                const web3 = new Web3(window.ethereum);

                // Get the user's account
                const accounts = await web3.eth.getAccounts();
                const address = accounts[0];

                // Validate the address (optional)
                if (web3.utils.isAddress(address)) {
                    console.log(`The user's address is ${address}`);
                    alert(`The user's address is ${address}`)
                } else {
                    console.error(`Invalid address: ${address}`);
                    alert(`Invalid address ${address}`)
                }
            } else {
                // Open MetaMask on mobile
                const metamaskUrl = 'https://metamask.io';
                window.open(metamaskUrl, '_blank');
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
        </>

    );
}

export default wallet;