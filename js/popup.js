
chrome.storage.sync.get('activeInfo', (data)=>{
    var url = '';
    let activeInfo = data.activeInfo;
    chrome.tabs.get(activeInfo.tabId, (tab)=>{
        url = tab.url;
        chrome.storage.sync.set({url: url})
    });
})

chrome.storage.sync.get('url', (data)=>{
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(data.url);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag();
})