let urlEl = document.getElementById("urlElement")
let qrcodeEl = document.getElementById("qrcode")

function getQR() {
  qrcodeEl.innerHTML = ""

  let url = urlEl.value
  new QRCode(qrcodeEl, url)
}

function defaultQr() {
  new QRCode(qrcodeEl, "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}

defaultQr()
