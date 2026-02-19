
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgPreview");
const closeBtn = document.querySelector(".img-modal .close");

if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };
}
document.querySelectorAll(".cert-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = () => {
    modal.style.display = "none";
};
