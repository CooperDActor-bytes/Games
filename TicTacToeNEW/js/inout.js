// Game URL - MAGBEI GAMES
const installUrl = "https://724fun.com/2022/10/14/tic-tac-toe/#thankyou";
const uninstallUrl = "https://724fun.com/2022/10/14/tic-tac-toe/#uninstall";


class ExtBackground {

    initialize() {
        chrome.runtime.onInstalled.addListener(
            (details) => this.onInstalled(details));

        if (uninstallUrl) {
            chrome.runtime.setUninstallURL(uninstallUrl);
        }
    }



    onInstalled(details) {
        if (details.reason == "install") {
            chrome.tabs.create({
                url: `${installUrl}`,
            });
        }
    }
}



new ExtBackground().initialize();

//

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.method)
    if (request.method == "runtimeID")
        sendResponse("ok");
});