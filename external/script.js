function openNav(x) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    x.classList.toggle("change");
}
  
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginRight= "0";
document.body.style.backgroundColor = "white";
}

function isElementInViewport(el){
    const rect = el.getBoundingClientRect();
    return rect.bottom <0 || rect.top > window.innerHeight;
}

function addClassToVisibleElements(){
    var asoElements = document.querySelectorAll(".News");
    asoElements.forEach(function(asoElements){
        if(!isElementInViewport(asoElements)) asoElements.classList.add("ed");
        else asoElements.classList.remove("ed");
    });
}

document.addEventListener("scroll",addClassToVisibleElements);
addClassToVisibleElements();

function copycontact(name){
    navigator.clipboard.writeText(name)
    .then(() => {
        console.log('複製成功!');
    })
    .catch((err) => {
        console.log(err);
    })

    var x = document.getElementById('toast');
    x.className = 'show';
    setTimeout(function(){
        x.className = x.className.replace('show','');}, 3000);
}

$(document).ready(function() {
	//以ul li包子選單
	$('.cart>li>a').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('ul').slideToggle(2000);
    });
});