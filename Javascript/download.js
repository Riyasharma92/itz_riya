document.addEventListener('DOMContentLoaded', function() {
	const downloadBtn = document.getElementById('downloadBtn');
	downloadBtn.addEventListener('click', function(e) {
		e.preventDefault();
		alert('Thank you for your interest in CyberGuard! The download would start now if this were a real application.');
	});
});
