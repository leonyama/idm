document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector(".modal");
    var images = document.querySelectorAll('.gallery-photo');
    var modalImg = document.querySelector(".modal-content");
    var captionText = document.querySelector(".caption");

    images.forEach(function(img) {
        img.addEventListener('click', function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.body.style.overflow = "hidden"; 
        });
    });

    var span = document.querySelector(".close");
    span.addEventListener('click', function() { 
        modal.style.display = "none";
        modalImg.src = "";  
        captionText.innerHTML = "";  
        document.body.style.overflow = ""; 
    });

    modalImg.addEventListener('click', function() {
        modal.style.display = "none";
        modalImg.src = "";  
        captionText.innerHTML = "";  
        document.body.style.overflow = ""; 
    });
});
