"use strict"

class Line {
    constructor(
        colour,
        width,
        height,
        vertSpacing,
        amount,
        startPosX,
        startPosY
    ) {
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
        for (let i = 0; i < this.amount; i++) {
            push()
            translate(this.startPosX * colWidth, yPos * rowHeight)

            fill(this.colour)
            rect(0, 0, this.width * colWidth, this.height * rowHeight)
            pop()

            // Add height of line + vertical spacing
            yPos += this.height + this.vertSpacing
        }
    }
}

// Colours
let colour1, colour2

// Line height
let lineHeight1 = 1
let lineHeight2 = lineHeight1 * 3

// Grid
let gridSize = 200
let numCol = gridSize
let numRows = gridSize
let colWidth, rowHeight

// Painting Start Position
let initX = 30
let initY = 40

// Lines
let line1, line2, line3, line4, line5, line6, line7, line8

// Random Seed
let ranSeed = 0

// Overhang Amount
let overhangDif

/**
 * setup() Initial method run to setup project
 */
function setup() {
    // Base setup
    let canvas = createCanvas(1754, 1240)
    canvas.parent("canvas-container") // Move canvas to container element
    noStroke()

    // Init colour
    colour1 = color(255)
    colour2 = color(0)

    // Get grid values
    colWidth = width / numCol
    rowHeight = height / numRows
}

/**
 * draw() Continuously Executes
 */
function draw() {
    // Mouse X positon
    let posX = width / 2 - mouseX
    posX = posX * -1 // Make moving mouse to right postive instead of negative
    posX > width / 2
        ? (posX = width / 2)
        : posX < -width / 2 && (posX = -width / 2) // Constrain to canvas
    // document.getElementById("mouseX").innerHTML = posX

    // Mouse Y positon
    let posY = height / 2 - mouseY
    posY = posY * -1 // Make moving mouse to right postive instead of negative
    posY > height / 2
        ? (posY = height / 2)
        : posY < -height / 2 && (posY = -height / 2) // Constrain to canvas
    // document.getElementById("mouseY").innerHTML = posY

    // Overhang Difference
    overhangDif = floor(map(posX, 0, 877, 0, 5))
    overhangDif < -3 && (overhangDif = -3)
    document.getElementById("differenceX").innerHTML = overhangDif

    // Draw artwork on canvas
    drawArt()
}

/**
 * drawArt() Draws the artwork on the canvas
 */
function drawArt() {
    background(217, 106, 19)
    randomSeed(ranSeed)
    const rand = random()

    // ***************************************************************************
    // Think Black lines
    // --
    // Lines grouped either left or right
    // ***************************************************************************
    let blackGrouping = [2, 58]
    let amount = [6, 8, 10, 12]

    // Line 2 - Small
    let [startPos] = blackGrouping.splice(
        Math.floor(random() * blackGrouping.length),
        1
    )

    line2 = new Line(colour2, 8, lineHeight2, 7, 1, startPos + initX, 1 + initY)
    for (let i = 1; i <= 3; i++) {
        let [amt] = amount.splice(Math.floor(random() * amount.length), 1)
        line2.amount = amt

        line2.startPosX += i !== 1 && line2.width + i * 8
        line2.startPosY +=
            i == 2
                ? (line2.height + line2.vertSpacing) * 2
                : i === 3 && -(line2.height + line2.vertSpacing)

        line2.draw()

        // ***************************************************************************
        // Thin white line middle of thick black grouping
        // ***************************************************************************
        var middleXPos
        if (i === 2) {
            // Line 6
            line6 = new Line(
                colour1,
                line2.width * 2 + overhangDif,
                lineHeight1,
                9,
                line2.amount - 4,
                line2.startPosX - line2.width,
                35 + initY
            )
            line6.draw()

            middleXPos = line2.startPosX + line2.width
        } else if (i === 3) {
            // Line 7
            line7 = new Line(
                colour1,
                50 + overhangDif / 2,
                lineHeight1,
                9,
                line2.amount - 3,
                middleXPos - overhangDif / 2,
                initY + 9
            )
            line7.draw()
        }
    }

    // Line 1 - Large
    let [start] = blackGrouping.splice(
        Math.floor(random() * blackGrouping.length),
        1
    )
    let [amt] = amount.splice(Math.floor(random() * amount.length), 1)

    let l1largeStart = start === 58 ? start + 55 + line2.width : start

    line1 = new Line(
        colour2,
        12,
        lineHeight2,
        7,
        amt,
        l1largeStart + initX,
        1 + initY
    )
    line1.draw()

    // ***************************************************************************
    // Thin Black line
    // ***************************************************************************
    line3 = new Line(colour2, 135, lineHeight1, 9, 8, 1 + initX, 17 + initY)
    line3.draw()

    // ***************************************************************************
    // Thin White lines
    // ***************************************************************************
    // Line 5
    let l5Start =
        start === 2
            ? line1.startPosX + line1.width + line2.width
            : line1.startPosX - 36

    let l5initLength = 20
    line5 = new Line(
        colour1,
        l5initLength + overhangDif,
        lineHeight1,
        9,
        line1.amount - 5,
        l5Start,
        43 + initY
    )
    line5.draw()

    // Second line 5 in gap
    line5.startPosX += line5.width - 4 - overhangDif - overhangDif / 2
    line5.startPosY += line5.height - 19
    line5.width = l5initLength + overhangDif / 2
    line5.amount += 2
    line5.draw()

    // Line 4 - Far left
    line4 = new Line(
        colour1,
        30 + overhangDif,
        lineHeight1,
        9,
        floor(random() * (6 - 3) + 3),
        initX - 12,
        initY + 19
    )
    line4.draw()

    // Line 8 - Far right
    let l8Y = start === 2 ? initY + 32 : initY + 29
    line8 = new Line(
        colour1,
        20 + overhangDif,
        lineHeight1,
        9,
        floor(random() * (7 - 2) + 2),
        initX + 133 - overhangDif,
        l8Y
    )
    line8.draw()
}

/**
 * drawGrid() Draws the Grid on the canvas
 */
function drawGrid() {
    //  Draw Grid
    fill(217, 106, 19)
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCol; j++) {
            push()
            translate(j * colWidth, i * rowHeight)

            rect(0, 0, colWidth, rowHeight)
            pop()
        }
    }
}

/**
 * keyReleased() Special actions to do when a
 * certain key is pressed
 */
function keyReleased() {
    key.toUpperCase() === "R" && ranSeed++ && drawArt() // Regenerate drawing with new randomPositions
    key.toUpperCase() === "S" && saveCanvas('Generative-Design-Output-Josef-Albers-' + new Date().toISOString(), 'png')
}
