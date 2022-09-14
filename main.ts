let steps = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("not there yet!")
    basic.showNumber(steps)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(steps)
    steps = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
