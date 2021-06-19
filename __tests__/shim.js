//setup callbqck fn
global.requestAnimationFrame = callback => {
	setTimeout(callback, 0)
}
