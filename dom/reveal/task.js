const reveal = document.querySelectorAll('.reveal')

document.addEventListener('scroll', function (e){
    reveal.forEach((element) => {
    	const {top, bottom} = element.getBoundingClientRect()
    	if (bottom < window.innerHeight && top > 0) {
        	console.log("Видно")
        	element.classList.add('reveal_active');
        };
    //else удаляем если надо чтобы не показывалось
    })
});
