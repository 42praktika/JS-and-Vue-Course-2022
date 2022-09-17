const isTicketHappy = (num) => {
    let Before=num.length;
    let newNum = Number(num);
    let massiv=Array.from(String(newNum),Number);
    let After=massiv.length;
    let need=Before-After;
    for (var k=0;k<need;k++) {
        massiv.unshift(0)
    }
    let first=0;
    let second=0;
    for (var i=0;i<massiv.length/2;i++) {
        first+=massiv[i];
    }
    for (var j=massiv.length/2;j<massiv.length;j++) {
        second+=massiv[j];
    }
    return first===second


};
isTicketHappy('211003')
isTicketHappy('1552');
isTicketHappy('044503');
isTicketHappy('00');
isTicketHappy('060006');
isTicketHappy('123321');
isTicketHappy('341800');
isTicketHappy('812146');
isTicketHappy('000001');
isTicketHappy('123567');
isTicketHappy('213612');

export default isTicketHappy;

