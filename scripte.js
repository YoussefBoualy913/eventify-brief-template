let events = [];
let archive = [];
// switchScreen function 
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
// validation function 
 function handleFormSubmit(e) {
    
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
    const regexvariantrowvalue=/^-?(0|[1-9]\d*)(\.\d+)?$/
    
    if(!regextitle.test(eventtitle.value)){
        document.querySelector('#form-errors').innerHTML="title invalide";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;

    }
    if(!regeximage.test(eventimage.value)){
        document.querySelector('#form-errors').innerHTML="URL-image invalide";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;
     
    }
     if(!regexdiscription.test(eventdescription.value)){
        document.querySelector('#form-errors').innerHTML="descsription invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;

    }
   
     if(! regexseatsn.test(eventseatsn.value)){
        document.querySelector('#form-errors').innerHTML="seatsn invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;

    }
   
     if(!regexprice.test(eventprice.value)){
        document.querySelector('#form-errors').innerHTML="price invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;

    }
     let variants=[];
     const variantrow =document.querySelectorAll('.variant-row');
     for(const varint of variantrow){
        
          if(varint){
           
          const    variantrow__name=varint.querySelector('.variant-row__name') 
          const    variantrow__qty=varint.querySelector('.variant-row__qty') 
          const    variantrow__value=varint.querySelector('.variant-row__value') 
          const    variantrow__type=varint.querySelector('.variant-row__type') 
          if(!regextitle.test(variantrow__name.value)){
        document.querySelector('#form-errors').innerHTML="variant_title invalide";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        ) 
        console.log("truve");
       return;

       }
        if(! regexseatsn.test(variantrow__qty.value)){
        document.querySelector('#form-errors').innerHTML="variant Qty invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;

    }
    if(! regexvariantrowvalue.test(variantrow__value.value)){
        document.querySelector('#form-errors').innerHTML="variant value  invalide ";
        document.querySelector('#form-errors').classList.remove('is-hidden')
        setTimeout(()=>{
             document.querySelector('#form-errors').classList.add('is-hidden');
        },3000
        )
        return;

    }
       const  variant={
             varianttiile :variantrow__name.value,
             varianQty :variantrow__qty.value,
             variantvalue :variantrow__value.value,
             varianttype :variantrow__type.value,
        }
        variants.push(variant);
 
          }
     }
    const event ={
        title: eventtitle.value,
        image: eventimage.value,
        discription: eventdescription.value,
        seats: eventseatsn.value,
        price: eventprice.value,
        variantrow: variants
       
    }
   
     console.log();


    events.push(event);
    addeventtolist(events);
   document.getElementById('event-form').reset();
}
document.getElementById('event-form').addEventListener('submit', handleFormSubmit);
//add variant function 
function addVariantRow() {
   
const variantslist =document.querySelector('#variants-list');
variantslist.innerHTML+=`
    <div class="variant-row">
     <input type="text" class="input variant-row__name" placeholder="Variant name (e.g., 'Early Bird')" />
     <input type="number" class="input variant-row__qty" placeholder="Qty" min="1" />
     <input type="number" class="input variant-row__value" placeholder="Value" step="0.01" />
     <select class="select variant-row__type">
         <option value="fixed">Fixed Price</option>
         <option value="percentage">Percentage Off</option>
     </select>
      <button type="button" class="btn btn--danger btn--small variant-row__remove">Remove</button>
</div> 
`


variantrow__remove=document.querySelectorAll('.variant-row__remove');
variantrow__remove.forEach(variantremove =>{
      variantremove.addEventListener('click', removeVariantRow);

})

}
document.getElementById('btn-add-variant').addEventListener('click', addVariantRow);
// remove variant funcution 
function removeVariantRow() {
    const variantrow__remove =document.querySelector('.variant-row__remove')
    variantrow__remove.parentElement.remove();
}
// add event to event list 
function addeventtolist(evnts){
   const tablebody =document.querySelector('.table__body');
   console.log(evnts[(evnts.length)-1].title);

    
      tablebody.innerHTML+=`
    <tr class="table__row" data-event-id="1">
         <td>1</td>
        <td>${evnts[(evnts.length)-1].title}</td>
         <td>${evnts[(evnts.length)-1].seats}</td>
         <td>$${evnts[(evnts.length)-1].price}</td>
        <td><span class="badge">${evnts[(evnts.length)-1]. variantrow.length}</span></td>
         <td>
            <button class="btn btn--small" data-action="details" data-event-id="1">Details</button>
            <button class="btn btn--small" data-action="edit" data-event-id="1">Edit</button>
            <button class="btn btn--danger btn--small" data-action="archive" data-event-id="1">Delete</button>
        </td>
     </tr> 
   `
  
}

