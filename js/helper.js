
var tour = [
  {
    id: 0,
    name: "Đà Nẵng",
    price: 4.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://travel.com.vn/Images/tour/tfd_200827051707_178318.jpg",
  },
  {
    id: 1,
    name: "Nha Trang",
    price: 7.900000,
    datetour: 1,
    note: "NDSGN905-008-301020VN",
    img: "https://travel.com.vn/Images/destination/tf_200724040240_477695.jpg",
  },
  {
    id: 2,
    name: "Phú Quốc",
    price: 10.000000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://travel.com.vn/Images/destination/tf_200811102233_209442.jpg",
  },
  {
    id: 3,
    name: "Huế",
    price: 5.790000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://travel.com.vn/Images/destination/tf_200618103347_749336.jpg",
  },
  {
    id: 4,
    name: "Hà Nội",
    price: 7.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://kiemtoannangluongvietnam.com/wp-content/uploads/2018/04/03.png",
  },
  {
    id: 5,
    name: "Hồ Chí Minh",
    price: 6.900000,
    datetour: 2,
    note: "NDSGN903-006-291020VN",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/02/1-10.png",
  },
  {
    id: 6,
    name: "Đà Lạt",
    price: 3.900000,
    datetour: 2,
    note: "NDSGN903-006-291020VN",
    img: "https://dalatdaily.com/wp-content/uploads/2017/07/70f1f0e91b85fedba794.jpg",
  },
  {
    id: 7,
    name: "Hạ Long",
    price: 5.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://owa.bestprice.vn/images/tours/uploads/ha-long-tuan-chau-2-ngay-1-dem-5e5642a3b1b03.jpg",
  },
  {
    id: 8,
    name: "SaPa",
    price: 5.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://www.kynghidongduong.vn/images/product/img1/3_fansipan-sapa-kynghidongduong-vn-03.jpg",
  },
  {
    id: 9,
    name: "Quy Nhơn",
    price: 3.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://saigonstartravel.com/wp-content/uploads/2019/03/18-2.jpg",
  },
  {
    id: 10,
    name: "Cao Bằng- Họ Lươn",
    price: 3.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://photo-1-baomoi.zadn.vn/w1000_r1/2018_11_06_207_28483133/e2fcacb179f190afc9e0.jpg",
  },
  {
    id: 11,
    name: "Đà Nẵng",
    price: 5.900000,
    datetour: 1,
    note: "NDSGN903-006-291020VN",
    img: "https://travel.com.vn/Images/tour/tfd_200827051707_178318.jpg",
  }
];
localStorage.setItem('listTour', JSON.stringify(tour));
function save() {
  localStorage.setItem('listTour', JSON.stringify(tour));
}
function load() {
  tour = JSON.parse(localStorage.getItem('listTour'));
}
if (localStorage.getItem('listTour') != null) {
  load();
}

function functionBooking() {
  var listTour = "";
  for (i in tour) {
    var data = JSON.parse(JSON.stringify(tour[i]));
    listTour += `
          <div class="card">
                    <img class="card-img-top" src=${tour[i].img}  alt="">
                    <div class="card-body">
                      <h4 class="card-title">${tour[i].name}</h4>
                      <p class="card-text">Giá tiền ${tour[i].price}</p>
                      <p class="card-text">Ngày ${tour[i].price}</p>
                      <p class="card-text">Mã Tour ${tour[i].price}</p>
                      <button onclick='order()'> Đặt ngay</button>
                    </div>
                  </div>
          `;
    document.getElementById("showtour").innerHTML = listTour;

  }
}