const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const btnContainer = document.getElementById('chat-btn-container');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    btnContainer.classList.remove('show');
  } else {
    btnContainer.classList.add('show');
  }
  lastScrollTop = scrollTop;
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const icon = document.querySelector('.order-operation__icon');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    icon.classList.add('show');
  }
});
observer.observe(icon);