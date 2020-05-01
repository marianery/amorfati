function portuguese(){
	var en = document.querySelectorAll('.en');
	var pt = document.querySelectorAll('.pt');

	for(var i=0; i< en.length; i++){
		en[i].classList.add('invisible');
	}

	for(var j=0; j< pt.length; j++){
		pt[j].classList.remove('invisible');
	}

}

function english(){
	var en = document.querySelectorAll('.en');
	var pt = document.querySelectorAll('.pt');

	for(var i=0; i< en.length; i++){
		en[i].classList.remove('invisible');
	}

	for(var j=0; j< pt.length; j++){
		pt[j].classList.add('invisible');
	}
}