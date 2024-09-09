document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Thank you for your message we shall get back to you");
    this.reset();
    console.log('Message recived ');
    
});

document.getElementById('donateForm').addEventListener('submit',function(e){
    e.preventDefault();

    alert("Thank you for your donation, God bless you");
    this.reset();
    console.log('Donation received');
})