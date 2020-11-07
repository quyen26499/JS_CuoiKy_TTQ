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
                <td>${blog[i].dte}</td>
                

                <td>      
                    <button type="button" onclick="editBlog(${blog[i].id})" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
                <td>      
                <button type="button" onclick="deleteBlog(${blog[i].id})" class="btn btn-danger">
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

var Blog = {
    id: id,
    title : document.getElementById("title").value,
    img: document.getElementById("img").value,
    dte: document.getElementById("dte").value,
    con: document.getElementById("con").value,
}
blog.push(Blog);
localStorage.setItem('listBlog', JSON.stringify(blog));
//Save();
window.location.reload();
console.log(blog);
}

//Xóa Blog 
var deleteBlog = function(i){
blog.splice(i,1);
localStorage.setItem('88',JSON.stringify(blog));
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



