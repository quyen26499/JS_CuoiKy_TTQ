/* header */
var html = `
    <header class="site-navbar py-1" role="banner">
        <div class="container">
            <div class="row align-items-center">
            
                <div class="col-6 col-xl-2">
                    <h1 class="mb-0"><a href="index.html" class="text-black h2 mb-0">Travelers</a></h1>
                </div>

                <div class="col-10 col-md-8 d-none d-xl-block">
                    <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">
                        <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                            <li><a href="index.html">Home</a></li>

                            <li><a href="tour.html">Tour</a></li>
                            
                            <li><a href="discount.html">Discount</a></li>
                            
                            <li><a href="blog.html">Blog</a></li>
                            
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="col-6 col-xl-2 text-right">
                    <div class="d-none d-xl-inline-block">
                        <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                            <li>
                                <a href="#" class="pl-3 pr-3 text-black"><span class="icon-search"></span></a>
                            </li>
                            <li>
                                <a href="#" class="pl-3 pr-3 text-black" onclick="myModal()" data-toggle="modal" data-target="#myModal">
                                    <span class="icon-user"></span>
                                </a>
                            </li>         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

document.getElementById("header").innerHTML = html;


/* modal login - register */
function myModal() {
    var html = `
    <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content card" 
                style="background-image: linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.8)),url(images/everest.png);
                        background-repeat: round;
                        height: 520px;">
          
                <div class="modal-header font-weight-bold w-100">
                    <div id="btn" style="left:70px;"></div>  
                    <button class="modal-title w-50 text-white toggle-btn" onclick="btnRegister()"><strong>Register</strong></button>
                    <button class="modal-title w-50 text-white toggle-btn" onclick="btnLogin()"><strong>Log in</strong></button>
                    <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            
                <div class="modal-body">
                    <form id="register" class="input-group">
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 pb-5 w-100">
                            <label>Your email</label>
                            <input type="email" id="email" class="form-control" required>
                        </div>
    
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 w-100">
                            <label>Your password</label>
                            <input type="password" id="pass" class="form-control" required>
    
                            <label>Re-Enter Your password</label>
                            <input type="password" id="repass" class="form-control" required>
    
                            <div class="modal-form text-white p-4 mt-2">
                                <input class="form-check-input" type="checkbox" id="checkbox" required>
                                <label class="white-text form-check-label">Accept the
                                    <a href="#" class="green-text font-weight-bold" style="color: #0000FF">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center w-100">
                            <div class="col-md-12 text-center ml-3">
                                <button class="btn btn-light" onclick="register()">Register</button>
                            </div>
                        </div>
                    </form>
                
                    <form id="login" class="input-group">
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 pb-5 w-100">
                            <label>Your email</label>
                            <input type="email" id="userEmail" class="form-control" required>
                        </div>
    
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 w-100">
                            <label>Your password</label>
                            <input type="password" id="userPass" class="form-control" required>
    
                            <div class="modal-form text-white p-4 mt-2">
                                <input class="form-check-input" type="checkbox" id="rememberMe">
                                <label class="white-text form-check-label">
                                    Remember Password
                                </label>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center w-100">
                            <div class="col-md-12 text-center ml-3">
                                <button class="btn btn-light" onclick="login()">Log in</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    `
    
    document.getElementById("modal").innerHTML = html;
}


function btnRegister() {    
    var x = document.getElementById("register");
    var y = document.getElementById("login");
    var z = document.getElementById("btn");

    x.style.left = "0px"
    y.style.left = "500px"
    z.style.left = "75px"
}

function btnLogin() {
    var x = document.getElementById("register");
    var y = document.getElementById("login");
    var z = document.getElementById("btn");

    x.style.left = "500px"
    y.style.left = "0px"
    z.style.left = "290px"
}

