// Show style Scroll top on scroll

window.addEventListener("scroll",()=>{
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
	{
		document.querySelector(".scroller").style.display="block";
	}
	else{
		document.querySelector(".scroller").style.display="none";
	}
})
