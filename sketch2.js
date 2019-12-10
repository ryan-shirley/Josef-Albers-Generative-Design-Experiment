'use strict';

class Line {
    constructor(colour, width, height, vertSpacing, amount, startPosX, startPosY) {
        this.colour = colour
        this.height = height
        this.width = width
        this.vertSpacing = vertSpacing
        this.amount = amount
        this.startPosX = startPosX
        this.startPosY = startPosY
    }

    draw() {
        // Draw
        let yPos = this.startPosY
        for(let i = 0; i < this.amount; i++) {
            push()
            translate(this.startPosX * colWidth, yPos * rowHeight)
    
            fill(this.colour)
            rect(0, 0, this.width * colWidth, this.height * rowHeight);
            pop()

            // Add height of line + vertical spacing
            yPos += this.height + this.vertSpacing
        }
        
        
    }
}

// Colours
let colour1
let colour2

// Line height
let lineHeight1 = 1
let lineHeight2 = lineHeight1 * 3

// Grid
let gridSize = 300
let numCol = gridSize;
let numRows = gridSize;
let colWidth;
let rowHeight;

// Lines
let line1, line2, line3

/**
 * setup() Initial method run to setup project
 */
function setup() {
    // Base setup
    createCanvas(1754, 1240)
    background(217, 106, 19)
    noLoop()

    // Init colour
    colour1 = color(255)
    colour2 = color(0)

    // Get grid values
    colWidth = width/numCol;
    rowHeight = height/numRows;

    //  Draw Grid
    // fill(217, 106, 19)
    // for(let i = 0; i < numRows; i++) {
    //     for(let j = 0; j < numCol; j++) {
    //         push()
    //         translate(j*colWidth, i*rowHeight)

    //         rect(0, 0, colWidth, rowHeight);
    //         pop()
    //     }
    // }


    // ***************************************************************************
    // Think Black lines
    // --
    // Lines grouped either left or right
    // ***************************************************************************
    let blackGrouping = [2, 120]
    let amount = [6, 8, 10, 12]

    // Line 2 - Small
    let [startPos] = blackGrouping.splice(Math.floor(Math.random() * blackGrouping.length), 1)

    line2 = new Line(colour2, 8, lineHeight2, 7, 1, startPos, 1)
    for(let i = 0; i < 3; i++) {
        let [amt] = amount.splice(Math.floor(Math.random() * amount.length), 1)
        line2.amount = amt

        line2.startPosX += i !== 0 ? line2.width + i * 8 : 0
        line2.startPosY += i == 1 ? (line2.height + line2.vertSpacing) * 2 : i === 2 && - (line2.height + line2.vertSpacing)

        line2.draw()
    }

    // Line 1 - Large
    let [start] = blackGrouping.splice(Math.floor(Math.random() * blackGrouping.length), 1)
    let [amt] = amount.splice(Math.floor(Math.random() * amount.length), 1)

    line1 = new Line(colour2, 12, lineHeight2, 7, amt, start, 1)
    line1.draw()


    // ***************************************************************************
    // Thin Black line
    // ***************************************************************************
    line3 = new Line(colour2, 200, lineHeight1, 9, 8, 1, 7)
    line3.draw()
}

// function draw()	{
// }