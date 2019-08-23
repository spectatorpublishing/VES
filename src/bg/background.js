// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return {
    redirectUrl : chrome.extension.getURL("js/VES_0.0.1.js")
  };
}, {
urls : ["https://vergil.registrar.columbia.edu/scripts.js"]
}, ["blocking"]);

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  return {
    redirectUrl : chrome.extension.getURL("js/gVES_0.0.1.js")
  };
}, {
urls : ["https://vergil.registrar.columbia.edu/min/g=js"]
}, ["blocking"]);

chrome.browserAction.onClicked.addListener((tab) => {

  chrome.tabs.create({ 'url': "http://upgradevergil.com" });
  chrome.tabs.update({ 'url': "http://upgradevergil.com" });

})

chrome.runtime.setUninstallURL("http://upgradevergil.com/feedback/");
