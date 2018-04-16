chrome.runtime.onInstalled.addListener(() => {
    // 当 tabs 发生改变时候，对改变的 tab 显示 pageAction
    chrome.tabs.onUpdated.addListener((tabId)=>{
        chrome.pageAction.show(tabId);
    })
    chrome.tabs.onActivated.addListener((activeInfo)=>{
        chrome.tabs.get(activeInfo.tabId, (tab)=>{
            chrome.storage.sync.set({url: tab.url})
        })
    })
})