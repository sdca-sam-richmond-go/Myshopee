let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;


    index += step;

    
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

   
    const newTransform = -index * 100; 
    document.querySelector(".slides").style.transform = `translateX(${newTransform}%)`;
}
