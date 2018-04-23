'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.tabs.onUpdated.removeRules(undefined, function() {
    chrome.tabs.onUpdated.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'linkedin'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
