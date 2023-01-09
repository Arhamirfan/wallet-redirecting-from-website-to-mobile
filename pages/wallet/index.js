
const wallet = () => {
    let walletConnection = () => {
        try {
            // const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            const deepLink = 'intent://scan/#Intent;package=io.metamask.metamask;scheme=metamask;end';
            // const deepLink = 'itms-apps://itunes.apple.com/app/metamask/id1455363061';
            window.location.href = deepLink;
        } catch (e) {
            console.log('error:', e);
        }
    }
    return (
        <div>
            <button onClick={walletConnection}>connect to metamask</button>
        </div>
    );
}

export default wallet;