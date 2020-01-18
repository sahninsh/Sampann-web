let hamburger = document.querySelector('.hamburger');
	hamburger.onclick = function(){
		document.querySelector('.bar1').classList.toggle('bar1--ac');
		document.querySelector('.bar2').classList.toggle('bar2--ac');
		document.querySelector('.bar3').classList.toggle('bar3--ac');
		document.querySelector('.sidepanel').classList.toggle('active');
		this.classList.toggle('ham--ac');
	}

	let cart = document.querySelector('.cart');
	cart.onclick = function(){
		document.querySelector('.cart-panel').classList.add('active');
	}

	let backArrow = document.querySelector('.close-cart');
	backArrow.onclick = () => {
		document.querySelector('.cart-panel').classList.remove('active');
	}

	let plus = document.querySelectorAll('.plus');
	let minus = document.querySelectorAll('.minus');
	const dot = document.querySelector('.dot');

	let quantity = 1;

	let p = 1;
	let b = 1;
	let f = 1;


	plus[0].onclick = function(){
		document.querySelectorAll('.quantity')[0].textContent = p++;
	}
	minus[0].onclick = function(){
		document.querySelectorAll('.quantity')[0].textContent = p--;
		if ( p < 0 ){
			document.querySelectorAll('.quantity')[0].textContent = 0;
			alert("Please select an item")
		}
	} 
	plus[1].onclick = function(){
		document.querySelectorAll('.quantity')[1].textContent = b++;
	}
	minus[1].onclick = function(){
		document.querySelectorAll('.quantity')[1].textContent = b--;
		if ( b < 0 ){
			document.querySelectorAll('.quantity')[1].textContent = 0;
			alert("Please select an item")
		}
	} 

	plus[2].onclick = function(){
		document.querySelectorAll('.quantity')[2].textContent = f++;
	}
	minus[2].onclick = function(){
		document.querySelectorAll('.quantity')[2].textContent = f--;
		if ( f < 0 ){
			document.querySelectorAll('.quantity')[2].textContent = 0;
			alert("Please select an item")
		}
	} 

	$(document).ready(function(){
		$('.butt').click(function(e){
			$("body,html").animate({ scrollTop : $('.menu').offset().top + 20 },1000);
		});
		$('.s1').click(function(e){
			$("body,html").animate({ scrollTop : $('.land').offset().top },1000);
		});
		$('.s2').click(function(e){
			$("body,html").animate({ scrollTop : $('#two').offset().top },1000);
		});
		$('.s3').click(function(e){
			$("body,html").animate({ scrollTop : $('#three').offset().top },1000);
		});
		$('.s4').click(function(e){
			$("body,html").animate({ scrollTop : $('.menu').offset().top },1000);
		});
		$('.s5').click(function(e){
			$("body,html").animate({ scrollTop : $('.contact-container').offset().top },1000);
		});
	});





	// OBSFUCATE CODE >>??>>

/*for( var xz = 0; xz < plus.length; xz++){
	plus[xz].onclick = function(){
		dot.textContent = quantity++ ;
	}
}

for (var xy = 0; xy < minus.length; xy++){
	minus[xy].onclick = function(){ 
		dot.textContent = quantity--;
		if (dot.textContent < 0){
			dot.textContent = "0";
			alert("Please add a item")

		}
	}
}

 */

//	minus.onclick = function(){
//		dot.textContent = quantity--;
//		if (dot.textContent < 0){
//	}
//	}


/*	 $(document).ready(function(){
	 	$('.hamburger').on('click',function(){
	 		$('.bar1').toggleClass('bar1--ac');
	 		$('.bar2').toggleClass('bar2--ac');
	 		$('.bar3').toggleClass('bar3--ac');
	 		$('.bar').toggleClass('bar--ac');
	 		$('.hamburger').toggleClass('ham--ac');
	 		$('.sidepanel').toggleClass('active');
	 	});

	 	$('.cart').click(function(){
	 		$('.cart-panel').toggleClass('active');
	 	});
	 });

*/

/* const _0x21ca=['.butt','click','body,html','animate','offset','top','.s1','.land','.s2','#two','.s3','#three','.s4','.menu','.s5','.contact-container','.hamburger','querySelector','toggle','bar1--ac','.bar2','classList','bar2--ac','.bar3','bar3--ac','.sidepanel','active','ham--ac','.cart','onclick','.cart-panel','add','.close-cart','remove','querySelectorAll','.plus','.minus','.dot','.quantity','textContent','Please\x20select\x20an\x20item','ready'];(function(_0x3bf328,_0xd6fdac){const _0x26363d=function(_0x2d0b16){while(--_0x2d0b16){_0x3bf328['push'](_0x3bf328['shift']());}};_0x26363d(++_0xd6fdac);}(_0x21ca,0xe2));const _0x4640=function(_0x3bf328,_0xd6fdac){_0x3bf328=_0x3bf328-0x0;let _0x26363d=_0x21ca[_0x3bf328];return _0x26363d;};let hamburger=document['querySelector'](_0x4640('0x0'));hamburger['onclick']=function(){document[_0x4640('0x1')]('.bar1')['classList'][_0x4640('0x2')](_0x4640('0x3'));document[_0x4640('0x1')](_0x4640('0x4'))[_0x4640('0x5')]['toggle'](_0x4640('0x6'));document[_0x4640('0x1')](_0x4640('0x7'))[_0x4640('0x5')][_0x4640('0x2')](_0x4640('0x8'));document[_0x4640('0x1')](_0x4640('0x9'))['classList'][_0x4640('0x2')](_0x4640('0xa'));this['classList']['toggle'](_0x4640('0xb'));};let cart=document['querySelector'](_0x4640('0xc'));cart[_0x4640('0xd')]=function(){document[_0x4640('0x1')](_0x4640('0xe'))[_0x4640('0x5')][_0x4640('0xf')](_0x4640('0xa'));};let backArrow=document[_0x4640('0x1')](_0x4640('0x10'));backArrow[_0x4640('0xd')]=()=>{document[_0x4640('0x1')](_0x4640('0xe'))[_0x4640('0x5')][_0x4640('0x11')]('active');};let plus=document[_0x4640('0x12')](_0x4640('0x13'));let minus=document[_0x4640('0x12')](_0x4640('0x14'));const dot=document[_0x4640('0x1')](_0x4640('0x15'));let quantity=0x1;let p=0x1;let b=0x1;let f=0x1;plus[0x0][_0x4640('0xd')]=function(){document[_0x4640('0x12')](_0x4640('0x16'))[0x0][_0x4640('0x17')]=p++;};minus[0x0]['onclick']=function(){document[_0x4640('0x12')](_0x4640('0x16'))[0x0][_0x4640('0x17')]=p--;if(p<0x0){document[_0x4640('0x12')](_0x4640('0x16'))[0x0][_0x4640('0x17')]=0x0;alert(_0x4640('0x18'));}};plus[0x1][_0x4640('0xd')]=function(){document[_0x4640('0x12')](_0x4640('0x16'))[0x1][_0x4640('0x17')]=b++;};minus[0x1][_0x4640('0xd')]=function(){document[_0x4640('0x12')](_0x4640('0x16'))[0x1]['textContent']=b--;if(b<0x0){document[_0x4640('0x12')](_0x4640('0x16'))[0x1]['textContent']=0x0;alert('Please\x20select\x20an\x20item');}};plus[0x2][_0x4640('0xd')]=function(){document[_0x4640('0x12')](_0x4640('0x16'))[0x2][_0x4640('0x17')]=f++;};minus[0x2]['onclick']=function(){document[_0x4640('0x12')](_0x4640('0x16'))[0x2][_0x4640('0x17')]=f--;if(f<0x0){document[_0x4640('0x12')](_0x4640('0x16'))[0x2][_0x4640('0x17')]=0x0;alert(_0x4640('0x18'));}};$(document)[_0x4640('0x19')](function(){$(_0x4640('0x1a'))[_0x4640('0x1b')](function(_0x24d02c){$(_0x4640('0x1c'))[_0x4640('0x1d')]({'scrollTop':$('.menu')[_0x4640('0x1e')]()[_0x4640('0x1f')]+0x14},0x3e8);});$(_0x4640('0x20'))[_0x4640('0x1b')](function(_0x24d537){$(_0x4640('0x1c'))[_0x4640('0x1d')]({'scrollTop':$(_0x4640('0x21'))[_0x4640('0x1e')]()[_0x4640('0x1f')]},0x3e8);});$(_0x4640('0x22'))[_0x4640('0x1b')](function(_0x44f836){$(_0x4640('0x1c'))[_0x4640('0x1d')]({'scrollTop':$(_0x4640('0x23'))[_0x4640('0x1e')]()[_0x4640('0x1f')]},0x3e8);});$(_0x4640('0x24'))[_0x4640('0x1b')](function(_0x49d65a){$(_0x4640('0x1c'))[_0x4640('0x1d')]({'scrollTop':$(_0x4640('0x25'))[_0x4640('0x1e')]()[_0x4640('0x1f')]},0x3e8);});$(_0x4640('0x26'))[_0x4640('0x1b')](function(_0x119f25){$(_0x4640('0x1c'))['animate']({'scrollTop':$(_0x4640('0x27'))[_0x4640('0x1e')]()['top']},0x3e8);});$(_0x4640('0x28'))[_0x4640('0x1b')](function(_0x4ae7f0){$('body,html')[_0x4640('0x1d')]({'scrollTop':$(_0x4640('0x29'))[_0x4640('0x1e')]()[_0x4640('0x1f')]},0x3e8);});}); */