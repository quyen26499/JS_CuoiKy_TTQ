$(document).ready(() => {
  $(listView);
});
let mockDataBlog = [
  {
    id: 1,
    title: "How to Plan Your Vacation",
    image: "images/hero_bg_1.jpg",
    author:"Theresa Winston",
    time:"Nov 01, 2020 at 2:00 pm",
    type:"News",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iure labore autem, temporibus ipsum ut, cumque sed quasi consequuntur facere harum doloribus. Provident ratione, rerum laborum earum voluptate nostrum vitae!",
  },
  {
    id: 2,
    title: "How to Plan Your Vacation",
    image: "images/hero_bg_2.jpg",
    author:"Theresa Winston",
    time:"Nov 01, 2020 at 2:00 pm",
    type:"News",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iure labore autem, temporibus ipsum ut, cumque sed quasi consequuntur facere harum doloribus. Provident ratione, rerum laborum earum voluptate nostrum vitae!",



  },
];
const viewMore = async () => {
  mockDataBlog = [...mockDataBlog];
  $(listView);
};
const blogItem = ({ id, title, image, author,time, type, content }) => {
  return `
  <div class="col-md-6 col-lg-6 mb-4 mb-lg-4">
                  <div class="h-entry">
                      <img src="${image}" alt="Image" class="img-fluid">
                      <h2 class="font-size-regular"><a href="#">${title}</a></h2>
                      <div class="meta mb-4">by ${author} <span class="mx-2">&bullet;</span> ${time} <span class="mx-2">&bullet;</span><a href="#">${type}</a></div>
                      <p>${content}</p>
                  </div>
              </div>
  `;
};
const listView = () => {
  mockDataBlog.map((item, index) => {
    $(".blog_landing").append(blogItem(item, index));
  });
};
