document.getElementById('cta-button').addEventListener('click', function() {
    window.scrollTo({ top: document.getElementById('features').offsetTop, behavior: 'smooth' });
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}, 3000);

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
