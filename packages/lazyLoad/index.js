const viewHeight = document.documentElement.clientHeight // 可视区高度

function lazyLoad () {
  const eles = document.querySelectorAll('img[data-original] [lazyload]')
  Array.prototype.forEach.call(eles, function (item, index) {
    let rect
    if (item.dataset.original === '') return
    rect = item.getBoundingClientRect()
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      !function() {
        // 通过 Image 将图片请求过来
        const img = new Image()
        img.src = item.dataset.original
        // 图片请求成功 地址赋给 item
        img.onload = function () {
          item.src = img.src
        }
        item.removeAttribute('data-original')
        item.removeAttribute('lazyload')
      }
    }
  })
}
// 首屏执行一次
lazyLoad()

document.addEventListener('scroll', lazyLoad)