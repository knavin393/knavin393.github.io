

let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/f12f13ab77d8826dec7916d907e9caa1/trainBooking/booking';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.booking);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for (let i = 0; i < json.booking.length; i++) {
                let gName = json.booking[i].name;
                let gEmail = json.booking[i].email;
                let gDate = json.booking[i].date;
                let gTime = json.booking[i].time;
                let gPax = json.booking[i].pax;
                
                let gId = json.booking[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                 row.insertCell(3).innerHTML = gDate
                  row.insertCell(4).innerHTML = gTime
                row.insertCell(5).innerHTML = gPax
                
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/f12f13ab77d8826dec7916d907e9caa1/trainBooking/booking/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}