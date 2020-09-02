// Navbar
const nav=document.querySelector(".nav-tbs"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".sections"),
      totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
const a=navList[i].querySelector("a");
a.addEventListener("click", function(){
  // remove back-section
  removeBackSectionClass();

  for(let j=0; j<totalNavList; j++){
    if(navList[j].querySelector("a").classList.contains("active")){
        // add back section class
        addBackSectionClass(j)
  }
  navList[j].querySelector("a").classList.remove("active");
}
this.classList.add("active");
showSection(this);
})
}

function showSection(element){
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove("active");
  }
  
    const target=element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active")

}
function addBackSectionClass(num){
  allSection[num].classList.add("back-section");
}
function removeBackSectionClass(){
  for(let i=0; i<totalSection; i++){
      allSection[i].classList.remove("back-section");
  }
}

// Loader
window.addEventListener("load", function(){
    document.querySelector(".loader-wrapper").classList.add("opacity-0");
        
    setTimeout(function(){
        document.querySelector(".loader-wrapper").style.display="none";
    },1000)
})
