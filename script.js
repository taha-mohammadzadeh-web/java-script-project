


confirm("are you +18?")

const alertTag = document.querySelector('.alert')
const alertCloseBtn = document.querySelector('.alert>button')

alertCloseBtn.addEventListener('click', hideAlert)

function hideAlert() {


    alertTag.style.transform = 'scale(0)'
}  




  const swiper = new Swiper('.swiper', {
    loop: true,

    
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

const btn = document.querySelector(".btn");
const iconList = document.querySelector(".bi-1");
const iconX = document.querySelector(".bi-2");
const submenu = document.querySelector(".submenu");



btn.addEventListener("click", showSubmenu);



let flag = 0;

function showSubmenu() {
  if (flag == 0) {
  
    iconList.style.display = "none";
    iconX.style.display = "block";
    
    submenu.style.opacity = "1";
    flag = 1;
  } else {
    
    iconList.style.display = "block";
    iconX.style.display = "none";
    
    submenu.style.opacity = "0";
    flag = 0;
  }
}


