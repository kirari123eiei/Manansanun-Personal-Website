const hamburger = document.querySelector('#toggle-btn');
hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});

const overlay = document.getElementById("overlay");
const content = document.getElementById("overlayContent");
const closeBtn = document.getElementById("closeOverlay");

document.querySelectorAll(".sidebar-link[data-overlay]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const key = link.dataset.overlay;
    const template = document.querySelector(
      `#overlay-templates [data-template="${key}"]`
    );

    if (template) {
      overlayContent.innerHTML = template.innerHTML;
      overlay.classList.add("active");
    }

    const type = link.dataset.overlay;
    content.innerHTML = content(type);
    overlay.classList.add("active");
  });
});

closeBtn.onclick = () => overlay.classList.remove("active");

