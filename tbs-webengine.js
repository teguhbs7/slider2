// Navbar
    const nav=document.querySelector('.nav-tbs'),
          navList=nav.querySelectorAll('li'),
          totalNavList=navList.length;

    for(let i=0; i<totalNavList; i++){
        const li=navList[i].querySelector('li');
        li.addEventListener('click', function(){
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("li").classList.remove('active');
            }
            
        this.classList.add('active');
        })
    }
