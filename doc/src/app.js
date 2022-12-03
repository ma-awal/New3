

// onscroll link
const myNav=document.querySelector(".my-nav")
 window.addEventListener('scroll',()=>{
   if(window.scrollY>myNav.offsetHeight+150){
      myNav.classList.add("show-nav")
   }else{
      myNav.classList.remove("show-nav")
   }
})
// active link
const links=document.querySelectorAll("nav ul li a")
links.forEach((link)=>{
   link.addEventListener("click",()=>{
      links.forEach((btn)=>{
         btn.classList.remove("active")
         
      })
     
      link.classList.add("active")
   })
})

const myBar=document.querySelector('.toggle-bar')
const navBar=document.querySelector(".collapsNav")
 
//toggole nav
myBar.addEventListener('click',()=>{
   navBar.classList.toggle("hidden")

})
const navLinks=navBar.querySelectorAll("ul li a")
    navLinks.forEach((navLink)=>{
      navLink.addEventListener('click',()=>{
         navBar.classList.add("hidden")
      })
    })