const allSeat = document.getElementsByClassName('seats');
console.log(allSeat);
let seats = 40;
let select = 0;
let count = 0;
let seatSelect = [];
for (const seat of allSeat) {

    seat.addEventListener('click', function (e) {
        
        if (count >= 4) {
            return alert('already 4 seat selected');
        }
        count++;
        if(seats === 0){
            return alert('all seats booked');
        }
        seats = seats - 1;
        setInnerText('seat_left', seats);
        select = select + 1;
        setInnerText('selected_seat', select);
        // set seat bg color
        e.target.style.backgroundColor = "#1DD100";
        e.target.style.color = '#fff';
        // create element
        const selectedSeat = e.target.innerText;
        const seatPrice = document.getElementById('seat_price');
        const selectedSeatPrice = document.createElement('li')
        const p1 = document.createElement('p');
        p1.innerText = selectedSeat;
        const p2 = document.createElement('p');
        p2.innerText = 'Economic';
        const p3 = document.createElement('p');
        p3.innerText = 550;
        selectedSeatPrice.appendChild(p1);
        selectedSeatPrice.appendChild(p2);
        selectedSeatPrice.appendChild(p3);
        seatPrice.appendChild(selectedSeatPrice);
        // total price
        const totalPrice = document.getElementById('total_price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        const totalSum = convertedTotalPrice + parseInt(p3.innerText);
        setInnerText('total_price', totalSum);

        // grand total
        const grandTotal = document.getElementById('grand_total').innerText;
        const convertedGrandTotalPrice = parseInt(grandTotal);
        let grandTotalSum = convertedGrandTotalPrice + parseInt(p3.innerText);
        setInnerText('grand_total', grandTotalSum);
        // coupon 
        document.getElementById('apply').addEventListener('click', function () {
            const couponInput = document.getElementById('coupon_input').value;
            if (couponInput === 'NEW15') {
                grandTotalSum = grandTotalSum - grandTotalSum*0.15;
                hideElementById('coupon_section');
            }else if(couponInput === 'Couple 20'){
                grandTotalSum = grandTotalSum - grandTotalSum*0.20;
                hideElementById('coupon_section');
            }else{
                return alert('this coupon is not valid');
            }
            setInnerText('grand_total', grandTotalSum);
            console.log(grandTotalSum);
        })
        // next btn click
        const success = document.getElementById('next_btn').addEventListener('click', function () {
            success.classList.remove('hidden');
        });
    })
}

// set inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// hide element
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}