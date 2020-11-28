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
                <div class='col-md-4 col-sm-6 single'>
                    <div class='product'>
                        <a href='detail.html?tour_id=${tour[i].id}'>
                            <img class='img-fluid' src="${tour[i].img}">
                        </a>
                        
                        <div class='text-center mt-3'>
                            <h3>            
                                <a href='details.php?pro_id=$pro_id'>
                                    ${tour[i].name}
                                </a>
                            </h3>
                            
                            <p class='price'>      
                            $<del style="color: black"> ${tour[i].price1} USD </del> <br>              
                                $ ${tour[i].price} USD                   
                            </p>
    
                            <p class='date'>                    
                                ${tour[i].date}               
                            </p>
                            
                            <button onclick="order(${tour[i].id})" class="btn btn-primary text-white mb-2">
                                Đặt ngay
                            </button>                 
                        </div>            
                    </div>        
                </div>
            `;
            document.getElementById("showtour").innerHTML = listTour ;
        }
        
    }
    function order(id) {
        const tourBooking = tour.filter(data => data.id === id)
        localStorage.setItem('tourBooking', JSON.stringify(tourBooking));
        alert("Đã thêm tour! Vui lòng kiểm tra giỏ hàng!")
    }
    