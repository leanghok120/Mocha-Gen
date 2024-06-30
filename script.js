let urlEl = document.getElementById("urlElement")
let qrcodeEl = document.getElementById("qrcode")

function getQR() {
  qrcodeEl.innerHTML = ""

  let url = urlEl.value
  new QRCode(qrcodeEl, url)
}

function defaultQr() {
  new QRCode(qrcodeEl, "https://github.com/leanghok120")
}

defaultQr()
