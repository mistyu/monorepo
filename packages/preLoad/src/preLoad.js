// 01 使用 Image 对象的方法

// 02 使用 ajax 有跨域限制
const xmlHttpRequest = new XMLHttpRequest()
xmlHttpRequest.onreadystatechange = callback
xmlHttpRequest.onprogress = progressCallback
xmlHttpRequest.open('GET', url， true)
xmlHttpRequest.send()
function callback () {
  if (XMLHttpRequestEventTarget.readyState === 4 && xmlHttpRequest.status === 200) {
    const responseText = xmlHttpRequest.responseText
  } else {
    console.log('fail')
  }
}

function progressCallback (e) {
  e = e || event
  if (e.lengthComputable) {
    console.log('change')
  }
}