input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.happy.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        # . . . #
        `)
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.sad.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
	
})
