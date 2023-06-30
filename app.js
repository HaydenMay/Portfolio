const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransitions(){
    //button click active class
    for(let i = 0; i< sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }

        
    })
}

   const themeBtn = document.querySelector('.theme-btn');
   let i = 0
   themeBtn.addEventListener('click', () => {
       let element = document.body
       if(i == 0){
        element.classList.remove('green')
        element.classList.toggle('purple')
       }
       if(i == 1){
        element.classList.remove('purple')
        element.classList.add('pink')
       }
       if(i == 2){
        element.classList.remove('pink')
        element.classList.add('blue')
       }
       if(i == 3){
        element.classList.remove('blue')
        element.classList.add('yellow')
       }
       if(i == 4){
        element.classList.remove('yellow')
        element.classList.add('grey')
       }
       if(i== 5){
        element.classList.remove('grey')
        element.classList.add('green')

        i = -1
       }
       i++
   })

   const darkBtn = document.querySelector('.dark-btn');
   const lightBtn = document.querySelector('.light-btn');
   lightBtn.addEventListener('click', () => {
       let element = document.body
        element.classList.add('light-mode')
        darkBtn.classList.remove('hidden')
        lightBtn.classList.add('hidden')
   })

   darkBtn.addEventListener('click', () => {
       let element = document.body
        element.classList.remove('light-mode')
        darkBtn.classList.add('hidden')
        lightBtn.classList.remove('hidden')
   })

pageTransitions();