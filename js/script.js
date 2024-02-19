const allSeat = document.getElementsByClassName('seats');
let count = 40;
let select = 0;
let seatSelect = [];
for(const seat of allSeat){

    seat.addEventListener('click', function(e){
        if(count == 36){
            return alert('already 4 seat selected');
        }
        count = count -1;
        setInnerText('seat_left', count);
        select = select + 1;
        setInnerText('selected_seat', select); 
        // set seat bg color
        e.target.style.backgroundColor = "#1DD100";
        e.target.style.color='#fff'
        // create element
        const selectedSeat = e.target.innerText;
        const seatPrice = document.getElementById('seat_price');
        const selectedSeatPrice =document.createElement('li')
        const p1 = document.createElement('p');
        p1.innerText =selectedSeat;
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
        const totalSum = convertedTotalPrice+parseInt(p3.innerText);
        setInnerText('total_price', totalSum);
        // coupon 
        const couponInput = document.getElementById('coupon_input').value;
        if(couponInput === 'NEW15'){
            showElementById('apply');
        }
        // grand total
        const grandTotal = document.getElementById('grand_total').innerText;
        const convertedGrandTotalPrice = parseInt(grandTotal);
        const grandTotalSum = convertedGrandTotalPrice + parseInt(p3.innerText);
        setInnerText('grand_total', grandTotalSum);
        // next btn click
        const success = document.getElementById('next_btn').addEventListener('click', function() {
            success.classList.remove('hidden');
        });
    })
}
// set inner text
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
// set seat bg
function seatBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
}
// show element
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// hide element
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

