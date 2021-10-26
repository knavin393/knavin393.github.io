let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value


    let userDate = document.getElementById("userDate")
    let userDateVal = userDate.value

 let userDeparture = document.getElementById("userDeparture")
    let userDepartureVal = userDeparture.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    BookNow(userNameVal, userEmailVal, userDateVal, userDepartureVal, userPaxVal)
})

function BookNow(userName, userEmail, userDate, userDeparture, userPax) {
    let url = 'https://api.sheety.co/f12f13ab77d8826dec7916d907e9caa1/trainBooking/booking';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            date:userDate,
            time:userDeparture,
            pax: userPax
         
        }
    }


fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(json => {
        // Do something with object
        console.log(json.bookings);
        alert(json.booking.name + " added in the list!")
    });
}

