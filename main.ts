input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    or = randint(0, 1)
    if (or == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    arrow = randint(0, 4)
    if (arrow == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (arrow == 1) {
        basic.showArrow(ArrowNames.East)
    } else if (arrow == 2) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
let arrow = 0
let or = 0
basic.showString("Truth or Dare")
