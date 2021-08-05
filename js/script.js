window.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menuToggle');
	const navigation = document.querySelector('.navigation');
	const header = document.querySelector('header');



	menuToggle.addEventListener('click', () => {
		menuToggle.classList.toggle('active');
		navigation.classList.toggle('active');
	});

	window.addEventListener('scroll', () => {
		header.classList.toggle('sticky', window.scrollY > 0);
	});


});