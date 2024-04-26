let name = 'Alex'
let money = 10000
let account = 7777
const sing = prompt('Как вас зовут?')
const acc = prompt('Номер счета')
if (acc != account){
    console.log('Пользователь не найден, досвидули');
}
const how = prompt('Сколько обналичть?')
if (money < 10000){
    console.log('Все отлично');
} else {
    console.log('Недостаточно средств');
}