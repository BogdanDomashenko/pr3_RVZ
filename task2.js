let number = prompt('Введите номер', '+71234567890');

function formattedPhone(phone) {
    let newPhone = '';
    if(phone.length == 12 || phone.length == 11) {
        if(phone.charAt(0) != '+') phone = '+' + phone;
        for(i in phone) {            
            newPhone = newPhone + phone.charAt(i);
            if(i == 1) {
                newPhone += ' ('
            }
            else if(i == 4) {
                newPhone += ') '
            }
            else if(i == 7) {
                newPhone += '-'
            }
            else if(i == 9) {
                newPhone += '-'
            }
        }
    }
    else {
        alert('Неверный номер');
    }
    return newPhone;
}

alert(formattedPhone(number));