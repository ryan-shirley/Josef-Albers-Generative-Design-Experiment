'use strict';

class Line {
    constructor(colour, thinkness, width, vertSpacing, initDrawX, initDrawY) {
        this.colour = colour
        this.thinkness = thinkness
        this.width = width
        this.vertSpacing = vertSpacing
        this.initDrawX = initDrawX
        this.initDrawY = initDrawY
    }

    /**
     * draw() Draws a line on the canvas a certain amount of times
     */
    draw(amount) {
        fill(this.colour)

        for (let i = 0; i < amount; i++) {
            // Initial position + vertical spacing + thickness of line
            let yPos = this.initDrawY + i * this.vertSpacing + i * this.thinkness

            rect(this.initDrawX, yPos, this.width, this.thinkness);
        }
    }
}

// Line widths
let yellow = 65
let red = 20
let grey = 80
let blue = 40
let green = 145

// Vetical Spacing
let thickBlackSpacing = 30
let thinBlackSpacing = 37.5
let thinWhiteSpacing = thinBlackSpacing

// Line thinknesses
let thinkness1 = 15
let thinkness2 = 7.5

// Colours
let colour1
let colour2

// Thick black lines
let line1
let line2

// Thin black
let line3

// Thin white line
let line4
let line5
let line6
let line7
let line8

/**
 * setup() Initial method run to setup project
 */
function setup() {
    createCanvas(1754, 1240)
    background(217, 106, 19)
    noStroke()

    // Init colour
    colour1 = color(255)
    colour2 = color(0)

    // Init Lines
    line1 = new Line(colour2, thinkness1, yellow, thickBlackSpacing, grey + red, 0)
    line2 = new Line(colour2, thinkness1, blue, thickBlackSpacing, grey + red + yellow + blue + grey + red + grey, 0)
    line3 = new Line(colour2, thinkness2, red + yellow + blue + grey + red + grey + green + green + grey + blue, thinBlackSpacing, grey, line1.vertSpacing * 2 + line1.thinkness * 3 + thickBlackSpacing / 2 - thinkness2 / 2)
    line4 = new Line(colour1, thinkness2, grey + red + yellow + blue, thinWhiteSpacing, 0, line1.vertSpacing * 2 + line1.thinkness * 3 + thickBlackSpacing / 2 + thinkness2 / 2 + 2)
    line5 = new Line(colour1, thinkness2, grey + red, thinWhiteSpacing * .92, line4.width, line1.vertSpacing * 5 + line1.thinkness * 6)
    line6 = new Line(colour1, thinkness2, grey, line3.vertSpacing, line4.width + line5.width + grey + yellow, line3.initDrawY - thinkness2 * 1.25)
    line7 = new Line(colour1, thinkness2, green + green, thinWhiteSpacing, grey + red + yellow + blue + grey + red + grey + green, line1.thinkness * 2 + line1.vertSpacing * 2 - thinkness2 * 1.3)
    line8 = new Line(colour1, thinkness2, yellow + yellow, thinWhiteSpacing, grey + red + yellow + blue + grey + red + grey + green + green + grey, line1.thinkness * 5 + line1.vertSpacing * 4 - thinkness2 * 1.25)


    // Draw line 1
    line1.draw(12)

    // Draw line 2
    line2.draw(10)

    // Draw line 2 - Third vert black block
    line2.initDrawX = grey + red + yellow + blue + grey + red + grey + yellow + blue
    line2.initDrawY = line2.thinkness * 2 + line2.vertSpacing * 2
    line2.draw(11)

    // Draw line 2 - Last vert black black
    line2.initDrawX = grey + red + yellow + blue + grey + red + grey + yellow + blue + blue + green
    line2.initDrawY = line2.thinkness + line2.vertSpacing
    line2.draw(8)

    // Draw line 3
    line3.draw(8)

    // Draw line 4
    line4.draw(6)

    //  Draw line 5
    line5.draw(5)

    // Draw line 5 - third white block
    line5.initDrawX = line4.width + line5.width - red
    line5.initDrawY = line3.initDrawY + line3.thinkness + line3.vertSpacing - line5.thinkness * 1.5
    line5.vertSpacing = line3.vertSpacing
    line5.draw(7)

    // Draw line 6
    line6.draw(6)

    // Draw line 7
    line7.draw(7)

    // Draw line 8
    line8.draw(8)
}

// function draw()	{

// }