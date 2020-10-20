module.exports = function toReadable(number) {
    let fromOneToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    if (number <= 20) {
        let result = fromOneToNineteen.slice(number - 1, number);
        return result;
    } else if (21 <= number <= 99) {
        let dozens = Math.trunc(number / 10);
        let units = number % 10;
        resultForDozens = fromOneToNineteen.slice(dozens - 1 , dozens) + "ty " + fromOneToNineteen.slice(units - 1, units)
        return resultForDozens;
    } else (number >= 100) 
        let hundreds = Math.trunc(number / 100);
        let dozen = (number - hundreds * 100) / 10;
        let dozens = Math.trunc(dozen)
        let units = number - hundreds * 100 - dozens * 10;
        let fromHundredToThousand = (fromOneToNineteen.slice(hundreds - 1, hundreds)) + " hundred" + ((fromOneToNineteen.slice(dozens - 1, dozens)) + "ty " + units;
        return fromHundredToThousand;
}
