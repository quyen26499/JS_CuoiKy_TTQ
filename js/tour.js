function getInfo() {
  var date = document.getElementById("date").value;
  var d = document.getElementById("numPeople");
  var person = d.options[d.selectedIndex].text;
  var e = document.getElementById("destination");
  var destination = e.options[e.selectedIndex].text;
  const listTour = JSON.parse(localStorage.getItem('listTour'));

  const listTourChoice = listTour.filter(data => {
    if (data.name == destination ) {
      console.log(destination )
      return true;

    }
    return false;
  })
  console.log(listTourChoice)
  if (listTourChoice.length) {
    localStorage.setItem('listTourChoice', JSON.stringify(listTourChoice));
     window.location.href = 'booking.html';
  } else {
    alert('Đã hết tour')
  }
}

function load() {
  tour = JSON.parse(localStorage.getItem('listTour'));
}
if (localStorage.getItem('listTour') != null) {
  load();
}

    function functionBooking(){
        var listTour = "";
        for ( i in tour) {
          var data =JSON.parse(JSON.stringify(tour[i])) ;
           listTour += `

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <a href="#" class="unit-1 text-center">
                    <img src="${tour[i].img}" alt="Image" class="img-fluid">
                    <div class="unit-1-text">
                      <strong class="text-primary mb-2 d-block">${tour[i].price}</strong>

                        <h3 class="unit-1-heading">${tour[i].img}</h3>
                    </div>
                    </a>
                </div>
               <div class="product-button">                                                         
                   <button onclick="order(${tour[i].id})" class="btn btn-primary py-2 px-4 text-white">
                       Đặt ngay
                   </button>
               </div>

       `;
          document.getElementById("showtour").innerHTML = listTour ;
          
    }
    
}
function order() {
    const tourBooking = tour.filter(data => data.id === id)
    localStorage.setItem('tourBooking', JSON.stringify(tourBooking));
    window.location.href = 'payment.html';
  }

