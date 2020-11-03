function getInfo() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;;
  var date = document.getElementById("date").value;
  var email = document.getElementById("email").value;
  var d = document.getElementById("numPeople");
  var person = d.options[d.selectedIndex].text;
  var e = document.getElementById("destination");
  var destination = e.options[e.selectedIndex].text;
  var note = document.getElementById("note").value;
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

