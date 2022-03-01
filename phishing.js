function showWinningsInDocument() {
    document.write("<h1><blink>" + getMessage() +
        "</blink></h1>");
}
function getMessage() {
    var amount = Math.round(Math.random() * 100000);
    var message =
        "You won " + amount + "\u20AC! \n" +
        "To collect you winnings, send your credit card\n" +
        "and bank details to michaela.bacikova@tuke.sk";
    return message;
}
function showWinningsAlert() {
    showWinningsInDocument();
    alert(getMessage());
}