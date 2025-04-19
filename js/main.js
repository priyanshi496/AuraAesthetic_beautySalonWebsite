function showAppointment(event) {
    event.preventDefault(); // Prevent form from refreshing

    // Extract form data
    document.getElementById("modalName").textContent = document.getElementById("name").value;
    document.getElementById("modalEmail").textContent = document.getElementById("email").value;
    document.getElementById("modalPhone").textContent = document.getElementById("phone").value;

    let selectedOptions = Array.from(document.getElementById("service").selectedOptions).map(option => option.value);
    document.getElementById("modalService").textContent = selectedOptions.join(", ");

    document.getElementById("modalDate").textContent = document.getElementById("appointmentDate").value;

    // Show Bootstrap Modal
    var myModal = new bootstrap.Modal(document.getElementById("appointmentModal"));
    myModal.show();
}

    
    // Initiate the wowjs
    new WOW().init();


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

