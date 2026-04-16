/*=============SHOW MENU===========*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==============REMOVE MENU MOBILE============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*=============ADD SHADOW HEADER ==============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       :header.classList.remove('shadow-header')
    }
window.addEventListener('scroll', shadowHeader)

/*===============SHOW SCROLL UP =============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*============ SCROLL SECTIONS ACTIVE LINK ===========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*====== SCROLL REVEAL ANIMATION ========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true
})

sr.reveal('.home_data, footer')
sr.reveal('.home_dish', {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal('.home_burger', {delay: 1200, distance: '100px', duration: 1500})
sr.reveal('.ing', {delay: 1600, interval: 1003})
sr.reveal('.recipe_img, delivery_img, .contact_image', {origin: 'left'})
sr.reveal('.recipe_data, .delivery_data, .contact_data', {origin: 'right'})
sr.reveal('.popular_card', {interval: 100})
sr.reveal('.order_container', {interval: 100})

/*============= ORDER ==============*/
/*var Chicken_Burger_butt = document.querySelector('#Chicken_Burger');
var Meat_Burger_butt = document.getElementById("Meat_Burger");
var Grill_Burger_butt = document.getElementById("Grill_Burger");
var Classic_Burger_butt = document.getElementById("Classic_Burger");
var Big_Burger_butt = document.getElementById("Big_Burger");*/
const addButton = document.getElementsByClassName('popular_button');
const deleteButton = document.getElementsByClassName('popular_button_delete');
var meatb = document.getElementById('Meat_Burger');   
var num_Chicken_Burger  = 0;
addButton[0].onclick = function(){
    num_Chicken_Burger += 1;
};
var num_Meat_Burger  = 0;
/*meatb.addEventListener("click", function(){
    num_Meat_Burger += 1;
});*/
addButton[1].onclick = function(){
    num_Meat_Burger += 1;
};

var num_Grill_Burger = 0;
addButton[2].onclick = function(){
    num_Grill_Burger += 1;
};

var num_Classic_Burger = 0;
addButton[3].onclick = function(){
    num_Classic_Burger += 1;
};

var num_Big_Burger = 0;
addButton[4].onclick = function(){
    num_Big_Burger += 1;
};


deleteButton[0].onclick = function () {
    if (num_Chicken_Burger > 0) num_Chicken_Burger -= 1;
    console.log("Chicken Burger: " + num_Chicken_Burger);
};
deleteButton[1].onclick = function () {
    if (num_Meat_Burger > 0) num_Meat_Burger -= 1;
    console.log("Meat Burger: " + num_Meat_Burger);
};
deleteButton[2].onclick = function () {
    if (num_Grill_Burger > 0) num_Grill_Burger -= 1;
    console.log("Grill Burger: " + num_Grill_Burger);
};
deleteButton[3].onclick = function () {
    if (num_Classic_Burger > 0) num_Classic_Burger -= 1;
    console.log("Classic Burger: " + num_Classic_Burger);
};
deleteButton[4].onclick = function () {
    if (num_Big_Burger > 0) num_Big_Burger -= 1;
    console.log("Big Burger: " + num_Big_Burger);
};

var grill_ = 0;
var classic_ = 0;             
var big_ = 0;
var Chicken_ = 0;
var meat_ = 0;

var order_area = document.getElementById("adding_customer_order_here");
var show_order=document.getElementById("Show");
var p_text = document.createElement("p");
var total=0 ;

show_order.addEventListener("click" , function(){
    classic_= num_Classic_Burger*8;
    big_=num_Big_Burger*15;
    grill_ = num_Grill_Burger * 12;
    Chicken_ = num_Chicken_Burger *6;
    meat_ = num_Meat_Burger * 10;
           
    total= classic_ + big_ + grill_ + Chicken_ + meat_;

    p_text.innerHTML = "------------------------<br>"+
                        "Chicken Burger: "+num_Chicken_Burger+"<br>"+
                        "Meat Burger: "+num_Meat_Burger+"<br>"+
                        "Grill Burger: "+num_Grill_Burger+"<br>"+
                        "Classic Burger: "+num_Classic_Burger+"<br>"+
                        "Big Burger: "+num_Big_Burger+"<br>"+
                        "------------------------<br>"+
                        "Total Prcie: "+ total +" SAR";
             
    order_area.innerHTML = "";
    order_area.appendChild(p_text);
});

var cunfirm_button = document.getElementById("conf_button");
var confirm_text = document.createElement("p");
var confirm_div_adding_text = document.getElementById("conf_div");

//confirm_text="";
         
cunfirm_button.addEventListener("click" , function(){
    if(total >0){
    confirm_text.innerHTML="Thank you for your order! 🎉 We're preparing your delicious meal with love and care. 🍔🥤";
    confirm_div_adding_text.appendChild(confirm_text);
    }else {
        alert("Please select at least one burger before confirming your order.");
    }
               
});

