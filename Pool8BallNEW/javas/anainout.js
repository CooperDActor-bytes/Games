chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "index.html"
 });
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({ url: "index.html"});
    chrome.tabs.create({ url: "https://724fun.com/pool-8-ball/"});
});


if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://724fun.com/');
} else {
}