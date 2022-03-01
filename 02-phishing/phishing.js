'use strict';

function getMessage() {
    let amount = Math.round(Math.random() * 100000);
    let message =
        'You won ' + amount + '\u20AC! \n' +
        'To collect you "winnings", send your credit card\n' +
        'and bank details to michaela.bacikova@tuke.sk';
    return message;
}
console.log(getMessage);
function showWinningsAlert() {
    showWinningsInDocument();
    alert(getMessage());
}
function showWinningsInDocument() {
    document.write('<h1>' + getMessage() + '</h1>');
}