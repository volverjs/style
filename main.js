let windowHash = this.window.location.hash
console.log(windowHash)
console.log(this.document.querySelectorAll(`a[href="${windowHash}"`))

let element = this.document.querySelectorAll(`a[href="${windowHash}"`)
element.classList.add('active')
