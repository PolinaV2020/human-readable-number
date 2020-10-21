module.exports = function toReadable(number) {
let fromOneToNineteen = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let dozens = ['ten', 'twenty' , 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred','nine hundred']
let array = number.toString()
let a = Number(array.slice(0,1));
let b = Number(array.slice(1,2));
let c = Number(array.slice(-1));
if ((0 <= number) && (number <=20)) {
    return (fromOneToNineteen.slice(number,number+1));
} else if ((21<=number) && (number<=29)) {
    return ("twenty " + fromOneToNineteen.slice(b, b+1));
} else if ((30<number) && (number<=39)) {
    return ("thirty " + fromOneToNineteen.slice(b, b+1));
} else if ((40<number) && (number<=49)) {
    return ("forty " + fromOneToNineteen.slice(b, b+1));
}  else if ((50<number) && (number<=59)) {
    return ("fifty " + fromOneToNineteen.slice(b, b+1));
} else if ((60<number) && (number<=69)) {
    return ("sixty " + fromOneToNineteen.slice(b, b+1));
} else if ((70<number) && (number<=79)) {
    return ("seventy " + fromOneToNineteen.slice(b, b+1));
} else if ((80<number) && (number<=89)) {
    return ("eighty " + fromOneToNineteen.slice(b, b+1));
}  else if ((90<number) && (number<=99)) {
    return ("ninety " + fromOneToNineteen.slice(b, b+1));
}  else if ((number >= 30) && (number <=90) && (number % 10 === 0)) {
    return (dozens.slice((number / 10 - 1), (number / 10)));
}  else if ((number >= 100) && (number <=900) && (number % 100 === 0)) {
    return (hundreds.slice((number / 100 - 1), (number / 100)));
} else if ((100 < number) && (number <= 999) && (b === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 1)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred " + fromOneToNineteen.slice(Number(String(b) + String(c)), Number(String(b) + String(c))+1));
} else if ((100 < number) && (number <= 999) && (b === 2) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred twenty " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 2) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred twenty");
} else if ((100 < number) && (number <= 999) && (b === 3) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred thirty " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 3) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred thirty");
} else if ((100 < number) && (number <= 999) && (b === 4) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred forty " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 4) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred forty");
}  else if ((100 < number) && (number <= 999) && (b === 5) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred fifty " + fromOneToNineteen.slice(c, c+1));
}  else if ((100 < number) && (number <= 999) && (b === 5) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred fifty");
} else if ((100 < number) && (number <= 999) && (b === 6) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred sixty " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 6) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred sixty");
} else if ((100 < number) && (number <= 999) && (b === 7) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred seventy " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 7) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred seventy");
} else if ((100 < number) && (number <= 999) && (b === 8) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1)  + " hundred eighty " + fromOneToNineteen.slice(c, c+1));
} else if ((100 < number) && (number <= 999) && (b === 8) && (c === 0)) {
    return (fromOneToNineteen.slice(a,a+1)  + " hundred eighty");
}  else if((100 < number) && (number <= 999) && (b === 9) && (c !== 0)) {
    return (fromOneToNineteen.slice(a,a+1) + " hundred ninety " + fromOneToNineteen.slice(c, c+1));
}  else ((100 < number) && (number <= 999) && (b === 9) && (c === 0))
    return (fromOneToNineteen.slice(a,a+1) + " hundred ninety");
} 


