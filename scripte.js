let events = [];
let archive = [];
     
   function switchScreen(){
   const btn=document.querySelectorAll('.sidebar__btn')
    const screen=document.querySelectorAll('.screen')

   btn.forEach(btnsidebar => {
       btnsidebar.addEventListener('click',()=>{

            btn.forEach(btne => {
               btne.classList.remove("is-active");
            });
    
            btnsidebar.classList.add("is-active");
            screen.forEach(scre => {
                scre.classList.remove("is-visible");
    });
    screen.forEach(screenvisible => {
        if(btnsidebar.dataset.screen==screenvisible.dataset.screen){
            screenvisible.classList.add("is-visible");
        }
    });
    
    
    });
  });
}
 switchScreen();

 function handleFormSubmit(e) {
    // TODO:
    // 1. Prevent default
    // 2. Validate form inputs
    // 3. If valid: create new event object, add to events array, save data, reset form
    // 4. If invalid: show errors in #form-errors

    e.preventDefault();
    const eventtitle =document.querySelector('#event-title');
    const eventimage =document.querySelector('#event-image');
    const eventdescription =document.querySelector('#event-description');
    const eventseatsn =document.querySelector('#event-seats');
    const eventprice =document.querySelector('#event-price');
    const regextitle=/^(?!\s*$)[A-Za-zÀ-ÖØ-öø-ÿ0-9 ,.'-]{3,100}$/
    const regeximage =/^(https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?(?:\.(?:png|jpg|jpeg|gif|svg|webp))?\/?)$/
    const regexdiscription =/^(?!\s*$)[A-Za-zÀ-ÿ0-9.,!?()'"\-:; ]{10,500}$/
    const regexseatsn=/^[1-9]\d*$/
    const regexprice=/^(0|[1-9]\d*)(\.\d{1,2})?$/
    
    


    if(!regextitle.test(eventtitle.value)){
        document.querySelector('#form-errors').innerHTML="title invalide";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        return;

    }else{
        document.querySelector('#form-errors').innerHTML="";
        document.querySelector('#form-errors').classList.add('is-hidden')
    }
    if(!regeximage.test(eventimage.value)){
        document.querySelector('#form-errors').innerHTML="URL-image invalide";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        return;

    }else{
        document.querySelector('#form-errors').innerHTML="";
        document.querySelector('#form-errors').classList.add('is-hidden')
    }
     if(!regexdiscription.test(eventdescription.value)){
        document.querySelector('#form-errors').innerHTML="descsription invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        return;

    }else{
        document.querySelector('#form-errors').innerHTML="";
        document.querySelector('#form-errors').classList.add('is-hidden')
    }
   
     if(! regexseatsn.test(eventseatsn.value)){
        document.querySelector('#form-errors').innerHTML="seatsn invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        return;

    }else{
        document.querySelector('#form-errors').innerHTML="";
        document.querySelector('#form-errors').classList.add('is-hidden')
    }
   
     if(!regexprice.test(eventprice.value)){
        document.querySelector('#form-errors').innerHTML="price invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        return;

    }else{
        document.querySelector('#form-errors').innerHTML="";
        document.querySelector('#form-errors').classList.add('is-hidden')
    }
    
    const event ={
        title :eventtitle.value,
        image :eventimage.value,
        discription :eventdescription.value,
        seats:eventseatsn.value,
        price:eventprice.value
    }
    events.push(event);
   console.log(events);
   document.getElementById('event-form').reset();
}
document.getElementById('event-form').addEventListener('submit', handleFormSubmit);



