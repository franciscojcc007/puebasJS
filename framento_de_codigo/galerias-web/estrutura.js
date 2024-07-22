document.addEventListener("DOMContentLoaded", function() {
   const d = document;
   const modal = d.getElementById("gallery-modal");
   const modalImg = d.querySelector(".modal-img");
   const closeButton = d.querySelector(".close-button");
   let currentIndex = -1;

   const images = Array.from(d.querySelectorAll(".gallery-item"));

   const updateModalImage = (index) => {
         modalImg.src = images[index].src;
         currentIndex = index;
   };

   images.forEach((item, index) => {
         item.addEventListener("click", function() {
            modal.style.display = "block";
            updateModalImage(index);
         });
   });

   closeButton.addEventListener("click", function() {
         modal.style.display = "none";
   });

   window.addEventListener("click", function(e) {
         if (e.target === modal) {
            modal.style.display = "none";
         }
   });

   window.addEventListener("keydown", function(e) {
         if (modal.style.display === "block") {
            if (e.key === "ArrowRight") {
               updateModalImage((currentIndex + 1) % images.length);
            } else if (e.key === "ArrowLeft") {
               updateModalImage((currentIndex - 1 + images.length) % images.length);
            } else if (e.key === "Escape") {
               modal.style.display = "none";
            }
         }
   });
});
