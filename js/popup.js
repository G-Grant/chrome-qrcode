chrome.storage.sync.get('url', (data)=>{
    var typeNumber = 15;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(data.url);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag();
})