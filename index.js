const fs = require('fs')
const { createCanvas } = require('canvas');
const { randomInt } = require('crypto');
// canvas height and width
const width = 120
const height = 50
// transaction snippet
availableBal = 1000;
tranastionAmt = -20;
availableBal+=tranastionAmt;
// canvas creation
const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')
// If credited background will be green and if debited background will be blue
// -ve transaction amount reflects debit and +ve reflects credit
if(tranastionAmt>0){
  context.fillStyle = '#00FF00';
}
else{
  context.fillStyle = '#FF0000'
}
context.fillRect(0, 0, width, height)
context.textAlign = 'center'
context.textBaseline = 'top'
const message = "available balance is "
const textWidth = context.measureText(availableBal).width
context.fillRect(300 - textWidth / 2 - 10, 85 - 5, textWidth + 20, 60)
context.fillStyle = '#fff'
context.fillText(message, 50, 10)
context.fillText(availableBal, 50, 20)
const buffer = canvas.toBuffer('image/png')
fs.writeFileSync('./test' + randomInt(1,100)+ '.png', buffer)