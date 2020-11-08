function showBlog(){
    var blog = JSON.parse(localStorage.getItem("listBlog")) || [];

    for (let i in blog) {
        var html =`
            <tr>
                <td>${blog[i].id}</td>
                <td>${blog[i].title}</td>
                <td>
                    <img src="${blog[i].img}" width=50px; height=50px;>
                </td>

                <td>${blog[i].con}</td>
                <td>${blog[i].date}</td>
                

                <td>      
                    <button type="button" onclick="editBlog(${i})" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
                <td>      
                <button type="button" onclick="deleteBlog(${i})" class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
            </tr>
        `;
        
        document.getElementById("manager-blog").innerHTML += html;
    }
}

var id;
function addBlog(){
    var blog = JSON.parse(localStorage.getItem("listBlog")) || [];

    for (i = 0; i <= blog.length; i++) {
        id = i+1;
    }

    var objBlog = {
        id: id,
        title : document.getElementById("title").value,
        img: document.getElementById("img").value,
        date: document.getElementById("date").value,
        con: document.getElementById("con").value,
    }

    blog.push(objBlog);
    localStorage.setItem('listBlog', JSON.stringify(blog));
    // window.location.reload();
    console.log(blog);
}

//Xóa Blog 
function deleteBlog(id) {
    var tour = JSON.parse(localStorage.getItem("listBlog")) || [];

    tour = tour;
    tour.splice(id,1);
    localStorage.setItem('listBlog',JSON.stringify(tour));
    window.location.reload();
}

var submitUpdate = function(i){
var k = blog[i];
k.id= document.getElementById("idd").value;
k.title= document.getElementById("titled").value;
k.img= document.getElementById("imgd").value;
k.con= document.getElementById("cond").value;
k.dte= document.getElementById("dted").value;
//document.getElementById("idd").setAttribute("disabled","disabled");
localStorage.setItem('listBlog', JSON.stringify(blog));
window.location.reload();

}

// //hi

