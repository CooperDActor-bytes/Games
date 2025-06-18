chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "index.html"
 });
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({ url: "index.html"});
    chrome.tabs.create({ url: "https://zillakgames.com/game/cars-movement/"});
});


if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://zillakgames.com/');
} else {
}