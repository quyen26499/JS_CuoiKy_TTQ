function load() {
    tour = JSON.parse(localStorage.getItem('listTourChoice'));
  }
  if (localStorage.getItem('listTourChoice') != null) {
    load();
  }
  
  function functionBooking() {
    var listTour = "";
    for (i in tour) {
      var data = JSON.parse(JSON.stringify(tour[i]));
      
      listTour = `
     
      <!-- The Modal -->
      <div class="modal-content">
       <div class="row">
         <!-- single card -->
         
           <div class="card" >
             <img class="card-img-top" src="${tour[i].img}" style="height: 500px;width: 700px;">
           </div>
         <!-- end of single card --> 
         <div class="col-lg-5">
           <div class="modal-content-detail-product">
             <h2 class="card-text"> ${tour[i].name}</h2> <br>
             <p class="product-text-price">
               <i class="fa fa-dollar" style="font-size:24px"></i>
               Giá :                            
                   ${tour[i].price} VND
                                            
               </p>
             <p class="product-text-price">
               <i class="fa fa-calendar" style="font-size:24px"></i>
               Thời gian :                           
                   ${tour[i].datetour} ngày
                                            
               </p>
                 <p><i class="fa fa-barcode" style="font-size:24px"></i> Mã tour:${tour[i].note}</p>
           </div>
           <a href="contact.html"><i class="fa fa-comments" style="font-size:34px"></i>-Gửi yêu cầu hổ trợ ngay</a> <br><br>
           <div class="product-button">                                                         
               <button onclick="order(${tour[i].id})" class="btn btn-primary py-2 px-4 text-white">
                   Đặt ngay
               </button>
           </div>
           </div>
         </div>
       </div>

<!-- end of modal -->
         `;
      document.getElementById("detailtour").innerHTML = listTour;
      
    }
  }
function order(id) {
    const tourBooking = tour.filter(data => data.id === id)
    localStorage.setItem('tourBooking', JSON.stringify(tourBooking));
    window.location.href = 'payment.html';
  }