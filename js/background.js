chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.onActivated.addListener((activeInfo)=>{
        chrome.tabs.get(activeInfo.tabId, (tab)=>{
            chrome.storage.sync.set({url: tab.url})
        })
    })
})