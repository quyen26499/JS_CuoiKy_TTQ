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
           <div class="col-md-4 col-sm-6 single">
           <div class="product">
           <a href="detail.html" class="text-center">
               <div class="product-img">
                   <img class="img-responsive" src="${tour[i].img}" style="height: 400px;width: 415px;">                            
               </div>
                       
               <div class="product-text">                            
                   <h6 class="product-text-title" style="color: black;">                      
                       ${tour[i].name}
                   </h6>
                   <p class="product-text-price">
                   <i class="fa fa-dollar" style="font-size:24px"></i> 
                   Giá cũ:  
                    <span><strike style="color: red;">${tour[i].price1}</strike></span>  
                   Giá :                            
                       ${tour[i].price} VND
                                                
                   </p>
                   <p class="product-text-price"> 
                   <i class="fa fa-calendar" style="font-size:24px"></i>
                   Thời gian :                           
                       ${tour[i].datetour} ngày
                                                
                   </p>
                   <p class="product-text-price"> 
                   <i class="fa fa-barcode" style="font-size:24px"></i>
                   Mã tour :                              
                   ${tour[i].note}
                                            
               </p>
               </div>
               </a>
               <div class="product-button">                                                         
                   <button onclick="order(${tour[i].id})" class="btn btn-primary py-2 px-4 text-white">
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
