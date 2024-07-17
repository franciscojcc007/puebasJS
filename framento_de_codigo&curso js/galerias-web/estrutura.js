document.addEventListener("DOMContentLoaded", function() {
   const modal = document.getElementById("gallery-modal");
   const modalImg = document.querySelector(".modal-img");
   const closeButton = document.querySelector(".close-button");

   document.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", function() {
         modal.style.display = "block";
         modalImg.src = this.src;
      });
   });

   closeButton.addEventListener("click", function() {
      modal.style.display = "none";
   });

   window.addEventListener("click", function(event) {
      if (event.target === modal) {
         modal.style.display = "none";
      }
   });
});
