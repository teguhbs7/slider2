// Aside Navbar
    const nav=document.querySelector(".nav-tbs"),
          navList=nav.querySelectorAll("li"),
          totalNavList=navList.length,
          allSection=document.querySelectorAll(".sections"),
          totalSection=allSection.length;

    for(let i=0; i<totalNavList; i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click", function(){
            // remove back section class
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

            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function addBackSectionClass(num){
        allSection[num].classList.add("back-section");
    }
    function removeBackSectionClass(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function showSection(element){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
        const target=element.getAttribute("href").split("#")[1];
      document.querySelector("#"+target).classList.add("active")
    }

    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");

        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
