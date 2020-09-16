input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Fabulous)
})
basic.forever(function () {
	
})
