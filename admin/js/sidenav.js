var html = `
<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">

                <a class="nav-link" href="user.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                    User
                </a>
                <a class="nav-link" href="tour.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-map-marked-alt"></i></div>
                    Tour
                </a>
                <a class="nav-link" href="booking.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-percent"></i></div>
                    Booking
                </a>
                <a class="nav-link" href="blog.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-blog"></i></div>
                    Blog
                </a>
                <a class="nav-link" href="contact.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-envelope-open-text"></i></div>
                    Contact
                </a>

                <a class="nav-link" href="../index.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-sign-out-alt"></i></div>
                    Log out
                </a>
            </div>
        </div>
    </nav>
</div>
`;

document.getElementById("sideNav").innerHTML = html;