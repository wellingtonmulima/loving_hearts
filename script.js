document.getElementById('donate-form').addEventListener('submit', function(e){
    e.preventDefault();

    alert('Thank you for the donation');
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    alert("Thank you for the feedback, we shall get back to you!")
    this.reset();
});