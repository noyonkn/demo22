var  slideItem  = document.querySelectorAll('.slider-item');
var  slideLeft  = document.querySelector('.slide-left');
var  slideRight = document.querySelector('.slide-right');

var  current = 0;

function reset(){
	for (var i = 0 ; i < slideItem.length;  i++) {
		slideItem[i].style.display = 'none';
	}
}



function startSlide(){
	reset();
	slideItem[0].style.display = 'block';
}

startSlide()

function leftSlide() {
	reset();
	slideItem[current - 1].style.display = 'block';
	current--;
}

function rightSlide() {
	reset();
	slideItem[current + 1].style.display = 'block';
	current++;
}

slideLeft.addEventListener('click' , function(){

	if(current === 0 ){
		current = slideItem.length ;
	}

	leftSlide();
})

slideRight.addEventListener('click' , function(){
	if(current === slideItem.length - 1){
		current = -1 ;
	}
	rightSlide();
})

// code-for -megamenu

const toggle_d = document.querySelector('.toggle');
const megaManu = document.querySelector('.mega-menu');
const close    = document.querySelector('.close');
const toggle_m = document.querySelector('.mobile_toogler');

close.onclick = function(){
	megaManu.classList.remove('active');
}

toggle_d.onclick = function(){

	megaManu.classList.toggle('active');
}

toggle_m.onclick = function(){

	megaManu.classList.toggle('active');
}


// coder-for-mobile-search-box

const srcBtnM = document.querySelector('.src_box_mobile');
const msrcbox = document.querySelector('.mobile_src_box');
const src     = document.querySelector('.span');

srcBtnM.onclick = function(){

	msrcbox.classList.toggle('active-mxb');
	src.classList.toggle('active-span');
}


// sospsjsns


const Accessories      = document.querySelector('.Accessorie');
const Accessories_menu = document.querySelector('.Accessories-menu');
const back             = document.querySelector('.back');


Accessories.onclick = function(){

	Accessories_menu.classList.add('open');
}
  back.onclick = function(){

	Accessories_menu.classList.remove('open');
}


