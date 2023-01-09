
const wallet = () => {
    let walletConnection = () => {
        try {
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'itms-apps://itunes.apple.com/app/metamask/id1455363061';
            // window.location.href = deepLink;
            window.open('https://metamask.app.link/', '_blank');
        } catch (e) {
            console.log('error:', e);
        }
    }
    let walletInstall = () => {
        try {
            const deepLink = 'https://play.google.com/store/apps/details?id=io.metamask.metamask';
            //market://details?id=io.metamask.metamask
            window.location.href = deepLink;
        } catch (e) {
            console.log('error:', e);
        }
    }
    return (
        <>
            <div>
                <button onClick={walletConnection}>connect to metamask</button>
            </div>
            <div>
                <button onClick={walletInstall}>install metamask</button>
            </div>
        </>

    );
}

export default wallet;