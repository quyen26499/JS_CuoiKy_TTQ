var html = `
    <div class="pt-4 pb-4 bg-white">
        <center>
            <img class="img-responsive" src="" alt="" id="imgUser" width="80%">
        </center>
        <h6 class="user-title p-3" align="center" id="nameUser">
            
        </h6>

        <ul class="list-unstyle" style="list-style: none;">
            <li class="pb-3">
                <a href="user.html">
                    <span class="icon-list"></span>
                    My order
                </a>
            </li>
            <li class="pb-3">
                <a href="editUser.html">
                    <span class="icon-edit"></span>
                    Edit account
                </a>
            </li>
            <li class="pb-3">
                <a href="changePass.html">
                    <span class="icon-refresh"></span>
                    Change password
                </a>
            </li>
            <li class="pb-3">
                <a href="deleteUser.html">
                    <span class="icon-delete"></span>
                    Delete account
                </a>
            </li>
            <li>
                <a href="#" onclick="signOut()">
                    <span class="icon-sign-out"></span>
                    Log out
                </a>
            </li>
        </ul>
    </div>
`;

document.getElementById("sidebar").innerHTML = html;