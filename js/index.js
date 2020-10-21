function myModal() {
    var html = `
    <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content card" 
                style="background-image: linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.8)),url(images/everest.png);
                        background-repeat: round;
                        height: 520px;">
          
                <div class="modal-header font-weight-bold w-75">
                    <div id="btn" style="left:30px;"></div>  
                    <button class="modal-title w-20 text-white toggle-btn" onclick="register()"><strong>Register</strong></button>
                    <button class="modal-title w-20 text-white toggle-btn" onclick="login()"><strong>Log in</strong></button>
                </div>
            
                <div class="modal-body">
                    <form id="register" class="input-group">
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 pb-5 w-100">
                            <label>Your email</label>
                            <input type="email" id="email" class="form-control">
                        </div>
    
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 w-100">
                            <label>Your password</label>
                            <input type="password" id="pass" class="form-control">
    
                            <label>Re-Enter Your password</label>
                            <input type="password" id="repass" class="form-control">
    
                            <div class="modal-form text-white p-4 mt-2">
                                <input class="form-check-input" type="checkbox" id="checkbox">
                                <label class="white-text form-check-label">Accept the
                                    <a href="#" class="green-text font-weight-bold" style="color: #0000FF">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center w-100">
                            <div class="col-md-12 text-center ml-3">
                                <button class="btn btn-light">Register</button>
                            </div>
                        </div>
                    </form>
                
                    <form id="login" class="input-group">
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 pb-5 w-100">
                            <label>Your email</label>
                            <input type="email" id="email" class="form-control">
                        </div>
    
                        <div class="modal-form text-white font-weight-bold pr-5 pl-5 w-100">
                            <label>Your password</label>
                            <input type="password" id="pass" class="form-control">
    
                            <div class="modal-form text-white p-4 mt-2">
                                <input class="form-check-input" type="checkbox" id="checkbox">
                                <label class="white-text form-check-label">
                                    Remember Password
                                </label>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center w-100">
                            <div class="col-md-12 text-center ml-3">
                                <button class="btn btn-light">Log in</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    `
    var x = document.getElementById("register");
    var y = document.getElementById("login");
    var z = document.getElementById("btn");

    function register() {
        x.style.left = "0px"
        y.style.left = "500px"
        z.style.left = "20px"
    }
    
    function login() {
        x.style.left = "500px"
        y.style.left = "0px"
        z.style.left = "130px"
    }
    
    document.getElementById("modal").innerHTML = html;
}

/* login - register */


function register() {
    var x = document.getElementById("register");
    var y = document.getElementById("login");
    var z = document.getElementById("btn");

    x.style.left = "0px"
    y.style.left = "500px"
    z.style.left = "30px"
}

function login() {
    var x = document.getElementById("register");
    var y = document.getElementById("login");
    var z = document.getElementById("btn");

    x.style.left = "500px"
    y.style.left = "0px"
    z.style.left = "255px"
}