// Aside Navbar
    const nav=document.querySelector(".nav-tbs"),
          navList=nav.querySelectorAll("li"),
          totalNavList=navList.length;

    for(let i=0; i<totalNavList; i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click", function(){
        this.classList.add("active")
        })
    }
