const firstRow = prompt('firstRow', 'мама мыла раму');
const secondRow = prompt('secondRow', 'собака друг человека');
const letterToCheck = prompt('secondRow', 'а')

function getRow(firstRow, secondRow, letterToCheck) {
    let firstRowA = 0, secondRowA = 0;
    for(let i = 0; i<firstRow.length; i++) {
        if (firstRow.charAt(i) == letterToCheck) {
            firstRowA++;
        }
    }
    for(let i = 0; i<secondRow.length; i++) {
        if (secondRow.charAt(i) == letterToCheck) {
            secondRowA++;
        }
    }
    
    if (firstRowA > secondRowA) return firstRow
    else if (secondRowA > firstRowA) return secondRow
    else return 'Значения равны';
}

alert(getRow(firstRow, secondRow, letterToCheck));