'use strict';

class Line {
    constructor(colour, thinkness, width, vertSpacing) {
        this.colour = colour
        this.thinkness = thinkness
        this.width = width
        this.vertSpacing = vertSpacing
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
let thinBlackSpacing = 35
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
    line1 = new Line(colour2, thinkness1, yellow, thickBlackSpacing)
    line2 = new Line(colour2, thinkness1, blue, thickBlackSpacing)
    line3 = new Line(colour2, thinkness2, red + yellow + blue + grey + red + grey + green + green + grey + blue, thinBlackSpacing)
    line4 = new Line(colour1, thinkness2, grey + red + yellow + blue, thinWhiteSpacing)
    line5 = new Line(colour1, thinkness2, grey + red, thinWhiteSpacing)
    line6 = new Line(colour1, thinkness2, grey, thinWhiteSpacing)
    line7 = new Line(colour1, thinkness2, green + green, thinWhiteSpacing)

    // Draw line 1
    fill(line1.colour)
    rect(grey + red, 50, line1.width, line1.thinkness);

    // Draw line 2
    fill(line2.colour)
    rect(grey + red + yellow + blue + grey + red + grey, 50, line2.width, line2.thinkness)

    // Draw line 2
    fill(line2.colour)
    rect(grey + red + yellow + blue + grey + red + grey + yellow + blue, 50, line2.width, line2.thinkness)

    // Draw line 2
    fill(line2.colour)
    rect(grey + red + yellow + blue + grey + red + grey + yellow + blue + blue + green, 50, line2.width, line2.thinkness)

    // Draw line 3
    fill(line3.colour)
    rect(grey, 100, line3.width, line3.thinkness)

    // Draw line 4
    fill(line4.colour)
    rect(0, 150, line4.width, line4.thinkness)

    // Draw line 5
    fill(line5.colour)
    rect(line4.width, 180, line5.width, line5.thinkness)

    // Draw line 5
    fill(line5.colour)
    rect(line4.width + line5.width - red, 200, line5.width, line5.thinkness)

    // Draw line 6
    fill(line6.colour)
    rect(line4.width + line5.width + grey + yellow, 200, line6.width, line6.thinkness)

    // Draw line 7
    fill(line7.colour)
    rect(grey + red + yellow + blue + grey + red + grey + green, 220, line7.width, line7.thinkness)
}

// function draw()	{
    
// }