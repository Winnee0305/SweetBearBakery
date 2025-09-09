function loadFunctionalities(){
    var functionalitiesHTML = `
    <div class="navbar">
        <div class="logo-container">
            <a href="./home.html"><img src="./source/nav-logo.png" class="nav-logo"></a>
        </div>
        <ul class="links">
            <li class="tabs"><a href="./home.html#about-us">about</a></li>
            <li class="tabs"><a href="./catalogue.html">products</a></li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('cakes')">cakes</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('cookies')">cookies</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('tarts')">tarts</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('ice-cream')">ice-cream</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('pastries')">pastries</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('dessert-cups')">dessert cups</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('cupcakes')">cupcakes</li>
            <li class="hyperlinks-sorted-products medium-vp tabs" onclick="redirectToCatalogue('macaroons')">macaroons</li>
            <li class="tabs"><a href="./contact.html">contact</a></li>
            <li><img src="./source/user.png" class="icon" onclick="showLoginWindow(); showLogin()"></li>
            <li><img src="./source/shopping-cart.png" class="icon cart-button"></li>
        </ul>
        <div class="dropdown-button">
            <img src="./source/menu-burger.png" class="icon" id="dropdown-icon">
        </div>
    </div>

    <div class="dropdown-menu">
        <ul class="dropdown-content">
            <li><a href="#">about</a></li>
            <li><a href="./catalogue.html">products</a></li>
            <li><a onclick="redirectToCatalogue('cakes')">cakes</a></li>
            <li><a onclick="redirectToCatalogue('cookies')">cookies</a></li>
            <li><a onclick="redirectToCatalogue('tarts')">tarts</a></li>
            <li><a onclick="redirectToCatalogue('ice-cream')">ice-cream</a></li>
            <li><a onclick="redirectToCatalogue('pastries')">pastries</a></li>
            <li><a onclick="redirectToCatalogue('dessert-cups')">dessert cups</a></li>
            <li><a onclick="redirectToCatalogue('cupcakes')">cupcakes</a></li>
            <li><a onclick="redirectToCatalogue('macaroons')">macaroons</a></li>
            <li><a href="./contact.html">contact</a></li>
            <li><a onclick="showLoginWindow(); showLogin()">profile</a></li>
            <li><a class="cart-button">shopping cart</a></li>
        </ul>
    </div>

    <div class="sidebar-cart">
        <div class="cart-content">
            <table>
                <tr class="bottom-line top-line">
                    <th><div class="box">product</div></th>
                    <th><div class="box">flavour</div></th>
                    <th><div class="box">shape</div></th>
                    <th><div class="box">size</div></th>
                    <th><div class="box">price</div></th>
                    <th><div class="box">quantity</div></th>
                    <th><div class="box">total</div></th>
                </tr>
                <tr>
                    <td colspan="7">
                        <div class="empty-container">
                            <div class="empty">
                                <img src="./source/empty-cart.png" class="empty-cart-icon">
                                your cart is empty! 
                                <a href="./catalogue.html">shop now</a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="top-line">
                    <td colspan="5"></td>
                    <th colspan="2" class="thin-bottom"><div class="box">subtotal</div></td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                    <th colspan="2"><div class="box">delivery fees</div></th>
                </tr>
                <tr>
                    <td colspan="5"></td>
                    <th colspan="2" class="double-line"><div class="box">grand total</div></th>
                </tr>
            </table>
            <div class="sticky-buttons">
                <a><img src="./source/cross.png" class="icon" id="closeCartBtn"></a>
                <div class="checkOut" onclick="alert('This is just a dummy check out shopping cart button. \nThe feature will be ready soon!')">
                    check out
                </div>
            </div>
        </div>
    </div>

    <div id="login-register-window">
        <div id="login-register-container">
            <div id="login-container">
                <div class="cross-icon">
                    <img src="./source/cross.png" class="icon" onclick="hideLoginWindow()">
                </div>
                <div class="center-container">
                    <h1>welcome to <span class="brand-name">sweet bear!</span></h1>
                    <h2> - satisfying your sweet tooth, one treat at a time at sweet bear -</h2>
                    <form method="get" class="userinput-container" onsubmit="return validateLogin()">
                        <div class="left-container">
                            <div class="ques-container">
                                <p>email address</p>
                                <input type="email" label="email" class="userinput" id="login_email">
                                <p id="login_invalid_email">**please enter a valid email address</p>
                            </div>
                            <div class="ques-container">
                                <p>password</p>
                                <input type="password" label="password" class="userinput" id="login_password">
                                <p id="login_invalid_password">**please enter a valid password</p>
                            </div> 
                        </div>
                        <div class="button-container">
                            <button type="submit" value="submit button" class="login-button">log in</button>
                        </div>
                    </form>
                </div>
                <div class="bottom-container">
                    <p>new to sweet bear? <a onclick="showRegister()">join now</a></p>
                </div>
            </div>
            <div id="register-container">
                <div class="cross-icon">
                    <img src="./source/cross.png" class="icon" onclick="hideLoginWindow()">
                </div>
                <div class="center-container">
                    <h1>join the <span class="brand-name">sweet bear!</span></h1>
                    <h2> - unlock the magic of sweet moments -</h2>
                    <form method="get" class="userinput-container" onsubmit="return validateSignup()">
                        <div class="left-container">
                            <div class="ques-container">
                                <p>first name</p>
                                <input type="name" label="first-name" class="userinput" id="signup_firstname">
                                <p id="signup_invalid_firstname">**please enter a valid firstname</p>
                            </div>
                            <div class="ques-container">
                                <p>last name</p>
                                <input type="name" label="last-name" class="userinput" id="signup_lastname">
                                <p id="signup_invalid_lastname">**please enter a valid lastname</p>
                            </div>
                            <div class="ques-container">
                                <p>email address</p>
                                <input type="email" label="email" class="userinput" id="signup_email">
                                <p id="signup_invalid_email">**please enter a valid email address</p>
                            </div>
                            <div class="ques-container">
                                <p>date of birth</p>
                                <input type="date" label="dob" class="userinput" id="signup_dob">
                                <p id="signup_invalid_dob">**please select your date of birth</p>
                            </div>
                            <div class="ques-container">
                                <p>gender</p>
                                <select size="1" label="gender" class="userinput" id="signup_gender">
                                    <option value="select">Select your gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                <p id="signup_invalid_gender">**please select your gender</p>
                            </div>
                            <div class="ques-container">
                                <p>phone number</p>
                                <input type="tel" lbale="phone-number" class="userinput" id="signup_phone">
                                <p id="signup_invalid_phone">**please enter a valid phone number</p>
                            </div>
                            <div class="ques-container">
                                <p>password</p>
                                <input type="password" label="password" class="userinput" id="signup_password">
                                <p id="signup_invalid_password">**please enter a valid password</p>
                            </div>
                        </div>
                        <div class="button-container">
                            <button type="submit" value="submit button" class="login-button">create an accont</button>
                        </div>
                    </form>
                </div>
                <div class="bottom-container">
                    <p>already have an account? <a onclick="showLogin()">sign in</a></p>
                </div>
            </div>
            <div class="logo-container">
                <img src="./source/logo.png" class="logo"> 
            </div>
        </div>
    </div>
    `;
    document.getElementById("functionalities").innerHTML = functionalitiesHTML;
}

function loadFooter(){
    var footerHTML = `
    <footer>
    <div class="container1">
        <div class="social-media-container">
            <ul class="icon">
                <li>
                    <a><img src="./source/facebook.png" class="social-media-icon"></a>
                </li>
                <li>
                    <a><img src="./source/instagram.png" class="social-media-icon"></a>
                </li>
                <li>
                    <a><img src="./source/google.png" class="social-media-icon"></a>
                </li>
            </ul>
            <div class="text">
                connect with dessert lovers!
            </div>
        </div>

        <div class="logo-container">
            <img src="./source/nav-logo.png" class="footer-logo">
        </div>
    </div>

    <div class="container2">
        <div class="site-map-container">
            <p class="text"><b>learn more</b></p>
            <ul class="hyperlinks">
                <li><a href="./home.html">home</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a href="#">about</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('cakes')">cakes</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./blackForest.html">black forest</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./redVelvet.html">red velvet</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./fruitCake.html">fruit cake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./cheesecake.html">cheesecake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./operaCake.html">opera cake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="strawberryCake.html">strawberry cake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('cookies')">cookies</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./chocolateChipCookie.html">chocolate chip cookie</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./icingCookie.html">icing cookie</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./oatmealCookie.html">oatmeal cookie</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('tarts')">tarts</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./fruitTart.html">fruit tart<a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./chocolateTart.html">chocolate tart</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('ice-cream')">ice-cream</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./iceCream.html">chocolate</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./iceCream.html">mint</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./iceCream.html">strawberry</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./iceCream.html">vanilla</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./iceCream.html">matcha</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('pastries')">pastries</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./creamPuff.html">cream puff</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./crossaint.html">crossaint</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('dessert-cups')">dessert cups</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./tiramisu.html">tiramisu</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="chocolateMousse.html">chocolate mousse</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a onclick="redirectToCatalogue('cupcakes')">cup-cakes</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="hokkaidoCupcake.html">hokkaido cupcake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./frostedCupcake.html">frosted cupcake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li class="sub-hyperlinks"><a href="./fruitCupcake.html">fruit cupcake</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a href="./macaroon.html">macaroons</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
                <li><a href="./contact.html">contact</a>&nbsp<img src="./source/arrow-up-right.png" class="hyperlinks-icon"></li>
            </ul>
        </div>

        <div class="contact-container">
            <div class="address-container">
                <p class="text"><b>address</b></p>
                <div class="details-container">
                    5, Jalan Universiti<br>Bandar Sunway<br>47500 Petaling Jaya, Selangor<br>Malaysia
                </div>
            </div>
            <div class="business-hour-container">
                <p class="text"><b>business hour</b></p>
                <div class="time-container">
                    <div class="time">
                        mon-fri<br>sat-sun
                    </div>
                    <div class="time">
                        10:00am - 08:00pm<br>08:00am - 10:00pm
                    </div>
                </div>
            </div>
            <div class="contact-us-container">
                <p class="text"><b>contact us</b></p>
                <div class="contacts">
                    <ul class="phone-mail">
                        <li>
                            <img src="./source/phone.png" class="icon">
                            012-3456789
                        </li>
                        <li>    
                            <img src="./source/mail.png" class="icon">
                            sweet.bear@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container3">
        <div class="dates">
            <p>creation date: 25-10-2023</p>
            <p>last updated: <span id=last_updated></span></p>
            <p>last data collection: <span id="date_collect">-</span></p>
        </div>
        <div class="copyright-container">
            Copyright &copy; 2023 SweetBear. all copyright served.
        </div>
    </div>

    </footer>
    `;
    document.getElementById("footer").innerHTML = footerHTML;
}

if ((!window.location.pathname.endsWith('/home.html')) && !(window.location.pathname.endsWith('/catalogue.html'))){
    loadFunctionalities();
    loadFooter();
}

const currentDate = new Date();

document.getElementById('last_updated').textContent = currentDate.getDate() + "-" + 
(currentDate.getMonth() + 1) + "-" + currentDate.getFullYear() + " " + 
currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

const submitDate = localStorage.getItem('dataCollectionDate');
if (submitDate) {
    const submitTime = new Date(submitDate);
    document.getElementById('date_collect').textContent = submitTime.getDate() + "-" + (submitTime.getMonth() + 1) + "-" + submitTime.getFullYear() + " " + submitTime.getHours() + ":" + submitTime.getMinutes() + ":" + submitTime.getSeconds();
}

// For navigation bar drop down menu
const dropdownBtn = document.querySelector('.dropdown-button');
const dropdownBtnIcon = document.getElementById('dropdown-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownContentItems = document.querySelectorAll('.dropdown-content a');

dropdownBtn.onclick = function (){
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    dropdownBtnIcon.src = isOpen ? './source/cross.png'  : './source/menu-burger.png' ;
}

dropdownContentItems.forEach(item => {
    item.addEventListener('click', function () {
        dropdownMenu.classList.remove('open');
        dropdownBtnIcon.src = './source/menu-burger.png'; 
    });
});

// For side bar shopping cart
const sidebarBtn = document.querySelectorAll('.cart-button');
const sidebarMenu = document.querySelector('.sidebar-cart');
const sideBarItems= document.querySelectorAll('.sidebar-cart a');

sidebarBtn.forEach(button => {
    button.addEventListener('click', function () {
        sidebarMenu.classList.toggle('open');
    });
});


sideBarItems.forEach(item => {
    item.addEventListener('click', function(){
        sidebarMenu.classList.remove('open');
    })
});

// For items page - price
var productPrices = {
    blackForest: {
        slice: 11.9,
        inch6: 89,
        inch7: 98,
        inch8: 128,
        inch9: 140,
        inch10: 179,
    },
    redVelvet: {
        slice: 11.9,
        inch6: 89,
        inch7: 98,
        inch8: 128,
        inch9: 140,
        inch10: 179,
    },
    fruitCake: {
        slice: 13.9,
        inch6: 90,
        inch7: 112,
        inch8: 130,
        inch9: 145,
        inch10: 189,
    },
    cheesecake: {
        slice: 15.9,
        inch6: 92,
        inch7: 112,
        inch8: 130,
        inch9: 150,
        inch10: 176,
    },
    operaCake: {
        slice: 12.9,
        inch6: 89,
        inch7: 98,
        inch8: 128,
        inch9: 140,
        inch10: 179,
    },
    strawberryCake: {
        slice: 15.9,
        inch6: 98,
        inch7: 112,
        inch8: 130,
        inch9: 145,
        inch10: 189,
    },
    chocolateChipCookie: {
        g100: 12.9,
        g250: 25.9,
        g430: 40.9,
    },
    icingCookie: {
        mini: 2.3,
        normal: 4.9,
    },
    oatmealCookie: {
        g100: 10.9,
        g250: 22.9,
        g430: 35.9,
    },
    fruitTart: {
        mini: 4.8,
        normal: 9.9,
        large: 16.9,
    },
    chocolateTart: {
        mini: 3.8,
        normal: 8.9,
        large: 15.9,
    },
    iceCream_chocolate: {
        ml130: 4.5,
        ml290: 9.5,
        ml500: 15.0,
        ml725: 20.9,
        ml1000: 26.9,
    },
    iceCream_mint: {
        ml130: 4.5,
        ml290: 9.5,
        ml500: 15.0,
        ml725: 20.9,
        ml1000: 26.9,
    },
    iceCream_strawberry: {
        ml130: 4.5,
        ml290: 9.5,
        ml500: 15.0,
        ml725: 20.9,
        ml1000: 26.9,
    },
    iceCream_vanilla: {
        ml130: 4.5,
        ml290: 9.5,
        ml500: 15.0,
        ml725: 20.9,
        ml1000: 26.9,
    },
    iceCream_matcha: {
        ml130: 4.5,
        ml290: 9.5,
        ml500: 15.0,
        ml725: 20.9,
        ml1000: 26.9,
    },
    creamPuff: {
        mini: 1.9,
        normal: 4.5,
    },
    crossaint: {
        mini: 3.9,
        normal: 6.8, 
        large: 8.9,
    },
    tiramisu: {
        cup: 12.9,
        slice: 13.9,
        inch6: 89,
        inch7: 98,
        inch8: 119,
        inch9: 149,
        inch10: 189,
    },
    chocolateMousse: {
        cup: 12.9,
        slice: 13.9,
        inch6: 79,
        inch7: 89,
        inch8: 109,
        inch9: 139,
        inch10: 179,
    },
    hokkaidoCupcake: {
        normal: 4.5,
    },
    frostedCupcake: {
        mini: 2.3,
        normal: 4.5,
    },
    fruitCupcake: {
        mini: 3.3,
        normal: 5.5,
    },
    macaroon: {
        mini: 2.3,
        normal: 4.8,
    }
}

function displayLowestPrice(product){
    var id = 'price_' + product;
    var priceSpan = document.getElementById(id);
    var prices = Object.values(productPrices[product])
    var minPrice = Math.min(...prices);
    priceSpan.textContent = minPrice.toFixed(2);
}

var products = Object.keys(productPrices);

if (window.location.pathname.endsWith('/catalogue.html')){
    for (var i of products){
        displayLowestPrice(i);
    }
}
else{
    for (var i of products){
        var currentPage  = "/" + i + ".html"
        if (window.location.pathname.endsWith(currentPage)){
            displayLowestPrice(i);
        }
    }
    if (window.location.pathname.endsWith('/iceCream.html')){
        displayLowestPrice('iceCream_chocolate');
    }
}

// For the login pop up window

function showLoginWindow(){
    document.getElementById('login-register-window').style.display = 'flex';
}

function hideLoginWindow(){
    document.getElementById('login-register-window').style.display = 'none';
}

function showLogin(){
    document.getElementById('login-register-container').style.flexDirection = 'row';
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('register-container').style.display = 'none';
}

function showRegister(){
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'flex';
    document.getElementById('login-register-container').style.flexDirection = 'row-reverse';
}

//For filter function in the catalogue page
function filterCategory(category){
    const allProducts = document.querySelectorAll('.products-container');

    const selectedCategory = document.getElementById(category);

    if (category === 'all'){
        allProducts.forEach(container => {
            container.style.display='block';
        })
    }
    else{
        allProducts.forEach(container => {
            container.style.display='none';
        })
        if (selectedCategory) {
            selectedCategory.style.display = 'block';
        }
    }
}

// For the navigation bar short cut to products category catalogue
function redirectToCatalogue(category) {
    var url = "./catalogue.html#" + category;
    window.location.href = url;
}

// To handle the element shown after directed to another html
document.addEventListener('DOMContentLoaded', function(){
    var page = window.location.pathname;
    var hash = window.location.hash.substring(1);

    if (page.endsWith('/catalogue.html')){
        if (hash){
            filterCategory(hash);
        }
    }
    if (page.endsWith('/products.html')){
        document.getElementById(hash).style.display = "flex";
    }
});

// For tabs in product page
function showTab(tabName, clickedTab, product){
    var tabs = ['about', 'ingredient', 'details'];
    tabs.splice(tabs.indexOf(tabName),1);
    for (var i of tabs){
        var tab = i + 'Tab_' + product;
        var tabDetails = i + '_' + product;
        document.getElementById(tabDetails).style.display = "none";
        document.getElementById(tab).style.borderBottom = "none";
    }
    var selectedTab = tabName + '_' + product;
    document.getElementById(selectedTab).style.display = "block";
    clickedTab.style.borderBottom = "2px solid var(--black)";
}

// For items page - img
function expandImg(img, product){
    var expandImg = document.getElementById("expandedImg" + "_" + product);
    expandImg.src = img.src;
}

function updatePrice(product){
    var sizeSelect = document.querySelector('input[name="size"]:checked')
    var sizeSelected = sizeSelect ? sizeSelect.value : null;
    var id = 'price_' + product;
    var priceSpan = document.getElementById(id);
    if (sizeSelected){
        var price = productPrices[product][sizeSelected];
        priceSpan.textContent = price.toFixed(2);
    }
}

// Validate log in
function validateLogin(){
    document.getElementById('login_invalid_email').style.display = "none";
    document.getElementById('login_invalid_password').style.display = "none";

    var valid = true;
    if (document.getElementById('login_email').value == ""){
        document.getElementById('login_invalid_email').style.display = "block";
        valid = false;
    }
    if (document.getElementById('login_password').value == ""){
        document.getElementById('login_invalid_password').style.display = "block";
        valid = false;
    }
    if (valid){
        const submitTime = new Date();
        localStorage.setItem('dataCollectionDate', submitTime.toISOString());
        alert('Sucessfully logged in! \nWelcome back!');
    }
    return valid;
}

// Validate sign up
function validateSignup(){
    document.getElementById('signup_invalid_firstname').style.display = "none";
    document.getElementById('signup_invalid_lastname').style.display = "none";
    document.getElementById('signup_invalid_email').style.display = "none";
    document.getElementById('signup_invalid_dob').style.display = "none";
    document.getElementById('signup_invalid_gender').style.display = "none";
    document.getElementById('signup_invalid_phone').style.display = "none";
    document.getElementById('signup_invalid_password').style.display = "none";

    var dobInput = document.getElementById('signup_dob').value;

    var valid = true;
    if (document.getElementById('signup_firstname').value == ""){
        document.getElementById('signup_invalid_firstname').style.display = "block";
        valid = false;
    }
    if (document.getElementById('signup_lastname').value == ""){
        document.getElementById('signup_invalid_lastname').style.display = "block";
        valid = false;
    }
    if (document.getElementById('signup_email').value == ""){
        document.getElementById('signup_invalid_email').style.display = "block";
        valid = false;
    }
    if (dobInput == "") {
        document.getElementById('signup_invalid_dob').style.display = "block";
        valid = false;
    }
    if (currentDate.getFullYear() - new Date(dobInput).getFullYear() < 18) {
        document.getElementById('signup_invalid_dob').style.display = "block";
        document.getElementById('signup_invalid_dob').textContent = "**Age must be 18 or above";
        valid = false;
    }
    if (document.getElementById('signup_gender').value == "select"){
        document.getElementById('signup_invalid_gender').style.display = "block";
        valid = false;
    }
    if (document.getElementById('signup_phone').value == ""){
        document.getElementById('signup_invalid_phone').style.display = "block";
        valid = false;
    }
    else if (!/^0\d{9,10}$/.test(document.getElementById('signup_phone').value)){
        document.getElementById('signup_invalid_phone').style.display = "block";
        document.getElementById('signup_invalid_phone').textContent = "**The phone number should be Malaysia phone number and start with a 0";
        valid = false;
    }
    if (document.getElementById('signup_password').value == ""){
        document.getElementById('signup_invalid_password').style.display = "block";
        valid = false;
    }
    if (valid){
        const submitTime = new Date();
        localStorage.setItem('dataCollectionDate', submitTime.toISOString());
        alert('Thank you for signing up! \nYour account have been succesfully created!');
    }
    return valid;
}

// Validate contact form
function validateContactForm(){
    document.getElementById('contact_invalid_firstname').style.display = "none";
    document.getElementById('contact_invalid_lastname').style.display = "none";
    document.getElementById('contact_invalid_email').style.display = "none";
    document.getElementById('contact_invalid_subject').style.display = "none";
    document.getElementById('contact_invalid_message').style.display = "none";

    var valid = true;
    if (document.getElementById('contact_firstname').value == ""){
        document.getElementById('contact_invalid_firstname').style.display = "block";
        valid = false;
    }
    if (document.getElementById('contact_lastname').value == ""){
        document.getElementById('contact_invalid_lastname').style.display = "block";
        valid = false;
    }
    if (document.getElementById('contact_email').value == ""){
        document.getElementById('contact_invalid_email').style.display = "block";
        valid = false;
    }
    if (document.getElementById('contact_subject').value == "select"){
        document.getElementById('contact_invalid_subject').style.display = "block";
        valid = false;
    }
    if (document.getElementById('contact_message').value == ""){
        document.getElementById('contact_invalid_message').style.display = "block";
        valid = false;
    }
    if (valid){
        const submitTime = new Date();
        localStorage.setItem('dataCollectionDate', submitTime.toISOString());
        alert('Message submitted succesfully! \nThank you for contact us, we will get in touch with you as soon as possible!');
    }
    return valid;
}

function validateShape() {
    var size = document.getElementsByName("size");
    var shape = document.getElementsByName("shape");
    document.getElementById('invalid_shape').style.display = "none";
    document.getElementById('invalid_size').style.display = "none";

    var valid = false;

    for (var i = 0; i < shape.length; i++) {
        if (shape[i].checked) {
            valid = true;
            break;  
        }
    }
    if (!valid) {
        document.getElementById('invalid_shape').style.display = "block";
    } 
    else {
        valid = false;
        for (var i = 0; i < size.length; i++) {
            if (size[i].checked) {
                valid = true;
                break;  
            }
        }
        if (!valid) {
            document.getElementById('invalid_size').style.display = "block";
        } else {
            const submitTime = new Date();
            localStorage.setItem('dataCollectionDate', submitTime.toISOString());
            alert('Your item is added to shopping cart!');
        }
    }
    return valid;
}

function validateSize() {
    var size = document.getElementsByName("size");
    document.getElementById('invalid_size').style.display = "none";

    var valid = false;
    
    for (var i = 0; i < size.length; i++) {
        if (size[i].checked) {
            valid = true;
            break;  
        }
    }
    if (!valid) {
        document.getElementById('invalid_size').style.display = "block";
    } else {
        const submitTime = new Date();
        localStorage.setItem('dataCollectionDate', submitTime.toISOString());
        alert('Your item is added to shopping cart!');
    }
    return valid;
}

function validateFlavour() {
    var size = document.getElementsByName("size");
    var flavour = document.getElementsByName("flavour");
    document.getElementById('invalid_flavour').style.display = "none";
    document.getElementById('invalid_size').style.display = "none";

    var valid = false;

    for (var i = 0; i < flavour.length; i++) {
        if (flavour[i].checked) {
            valid = true;
            break;  
        }
    }
    if (!valid) {
        document.getElementById('invalid_flavour').style.display = "block";
    } 
    else {
        valid = false;
        for (var i = 0; i < size.length; i++) {
            if (size[i].checked) {
                valid = true;
                break;  
            }
        }
        if (!valid) {
            document.getElementById('invalid_size').style.display = "block";
        } else {
            const submitTime = new Date();
            localStorage.setItem('dataCollectionDate', submitTime.toISOString());
            alert('Your item is added to shopping cart!');
        }
    }
    return valid;
}