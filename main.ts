input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    or = randint(0, 1)
    if (or == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
let or = 0
basic.showString("Truth or Dare")
