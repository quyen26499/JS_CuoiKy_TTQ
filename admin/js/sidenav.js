var html = `
<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </a>
                <a class="nav-link" href="user.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                    User
                </a>
                <a class="nav-link" href="tour.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-map-marked-alt"></i></div>
                    Tour
                </a>
                <a class="nav-link" href="discount.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-percent"></i></div>
                    Discount
                </a>
                <a class="nav-link" href="blog.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-blog"></i></div>
                    Blog
                </a>
                <a class="nav-link" href="contact.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-envelope-open-text"></i></div>
                    Contact
                </a>
                <a class="nav-link" href="charts.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-line"></i></div>
                    Charts
                </a>
            </div>
        </div>
    </nav>
</div>
`;

document.getElementById("sideNav").innerHTML = html;