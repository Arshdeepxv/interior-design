document.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.classList.contains("gallery-item")){
        const src=e.target.getAttribute("src");
        // console.log(src);
        document.querySelector(".modal-img").src=src;
        const galleryModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        galleryModal.show();
    }
})