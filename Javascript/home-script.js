document.addEventListener('DOMContentLoaded', function() {
	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	// Add a simple animation to expertise cards
	const expertiseCards = document.querySelectorAll('.expertise-card');
	expertiseCards.forEach(card => {
		card.addEventListener('mouseover', () => {
			card.style.transform = 'scale(1.05)';
			card.style.transition = 'transform 0.3s ease';
		});
		card.addEventListener('mouseout', () => {
			card.style.transform = 'scale(1)';
		});
	});
});
