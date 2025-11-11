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
            const pagetitle=document.querySelector('.page-title');
            const pagesubtitle=document.querySelector('.page-subtitle');
            screenvisible.classList.add("is-visible");
           
             if(screenvisible.dataset.screen=="stats"){
               pagetitle.textContent="Statistics";
               pagesubtitle.textContent="Overview of your events";
            }
            if(screenvisible.dataset.screen=="add"){
               pagetitle.textContent="Add-event";
               pagesubtitle.textContent="add  a new events";
            }
            if(screenvisible.dataset.screen=="list"){
               pagetitle.textContent="Event";
               pagesubtitle.textContent="list of your events";
            }
            if(screenvisible.dataset.screen=="archive"){
               pagetitle.textContent="Archive";
               pagesubtitle.textContent="archive of your events";
            }
        }
    });
    
    
    });
  });
}
 switchScreen();
// validation function 
let contur=1;
 function handleFormSubmit(e){
  e.preventDefault();
const btnedit=document.querySelector('.btn--primary')
if(btnedit.textContent!="Edit"){
    let event=validationevent();
    if(event){
         
   
        
    events.push(event);
      contur++;
        }
    
    }
}
//validationevent function
function validationevent(){
    
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
        id: contur,
        title: eventtitle.value,
        image: eventimage.value,
        discription: eventdescription.value,
        seats: eventseatsn.value,
        price: eventprice.value,
        variantrow:variants

    }
    document.getElementById('event-form').reset();
    return event;
}
document.querySelector('.btn--primary').addEventListener('click', handleFormSubmit);
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

//event list funtion 

function eventlist(evnts){
   const tablebody =document.querySelector('#events-table tbody');
  
tablebody.innerHTML='';

 evnts.forEach(evt =>{
      tablebody.innerHTML+=`
    <tr class="table__row" data-event-id="1">
         <td>${evt.id}</td>
        <td>${evt.title}</td>
         <td>${evt.seats}</td>
         <td>$${evt.price}</td>
        <td><span class="badge">${evt.variantrow.length}</span></td>
         <td>
            <button class="btn btn--small" data-action="details" data-event-id="1">Details</button>
            <button class="btn btn--small" data-action="edit" data-event-id="1">Edit</button>
            <button class="btn btn--danger btn--small" data-action="archive" data-event-id="1">Delete</button>
        </td>
     </tr> 
   `
  
 })
  
}
 document.getElementById('sidebar-btn').addEventListener('click',()=>{
    eventlist(events);
 });
 function eventDelete(){
    const Delete=document.querySelectorAll('[data-action="archive" ]');
    Delete.forEach(evt =>{
        evt.addEventListener('click',()=>{

             

        })
    }

    )
 }
//add function renderStats
 function renderStats() {
    // Calculate from events array:
    const totalEvents = events.length;
    const totalSeats = events.reduce((sum, e) => sum + Number(e.seats), 0);
    const totalPrice = events.reduce((sum, e) => sum + Number(e.price )*Number( e.seats), 0);
    
    // Update DOM:
    document.getElementById('stat-total-events').textContent =totalEvents;
    document.getElementById('stat-total-seats').textContent=totalSeats;
    document.getElementById('stat-total-price').textContent =totalPrice.toFixed(2);
}

const statsbtn=document.getElementById("stats-btn").addEventListener('click',renderStats);

//searchEvents function 
function searchEvents(query) {
   
    let eventfilter;
    eventfilter=events.filter(evt=>evt.title.toLowerCase().includes(query.toLowerCase()));
    eventlist(eventfilter);
}
document.getElementById("search-events").addEventListener('input',()=>{
    const query=document.getElementById("search-events").value;
    searchEvents(query);
});
//handleTableActionClick function
function handleTableActionClick(e) {
    if(e.target.dataset.action=="details"){
       let eventId= e.target.parentElement.parentElement.firstElementChild.textContent;
       showEventDetails(eventId);
    
    }
     if(e.target.dataset.action=="edit"){
        let eventId= e.target.parentElement.parentElement.firstElementChild.textContent;
         editEvent(eventId);
        
    }
     if(e.target.dataset.action=="archive"){
         let eventId= e.target.parentElement.parentElement.firstElementChild.textContent;
       archiveEvent(eventId);
        
    }
}
document.getElementById('events-table').addEventListener('click', handleTableActionClick)
// showEventDetails function
function showEventDetails(eventId) {
    let  event1;
    events.forEach(evt=>{
        if(evt.id==eventId){
     event1=evt;
            
        }
    })
   
    
    const modalbody=document.getElementById("modal-body");
    let contenu='';
    for(evt of event1.variantrow){
        contenu+="name:&nbsp;"+evt.varianttiile+"&nbsp;&nbsp;&nbsp;&nbsp;Quntité:&nbsp;"+evt.varianQty+"&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;"+evt.variantvalue+"&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;"+evt.varianttype+"<br>" 
    }
    modalbody.innerHTML=`
            id: ${event1.id}<br>
            title:  ${event1.title}<br>
            image:  ${event1.image}<br>
            description: ${event1.discription}<br>
            seats:  ${event1.seats}<br>
            price:  $${event1.price}<br>
            variants:<br>
            ${contenu}    
            
    ` 
    
document.getElementById("event-modal").classList.remove('is-hidden');
document.querySelector('.modal__close').addEventListener('click',()=>{
document.getElementById("event-modal").classList.add('is-hidden');
})

}
//archiveEvent function 

function archiveEvent(eventId){
      let even;
     let  event1;
     events.forEach(evt=>{
        if(evt.id==eventId){
         even=evt;
           
        }
    })
     event1=events.filter((evt)=>
        evt.id!=eventId
    )
    events=event1;

archive.push(even);
  eventlist(events); 

}
//showeventsarchive function 
function showeventsarchive(archive){
   const tablebody =document.querySelector('#archive-table tbody');
   
tablebody.innerHTML='';

 archive.forEach(evt =>{
   
      tablebody.innerHTML+=`
    <tr class="table__row" data-event-id="1">
        <td>${evt.id}</td>
         <td>${evt.title}</td>
        <td>${evt.seats}</td>
        <td>$${evt.price}</td>
        <td>
          <button class="btn btn--small" data-action="restore" data-event-id="1">Restore</button>
        </td>
    </tr>
   `
 })
  
}
document.getElementById('archive-btn').addEventListener('click',()=>{
    showeventsarchive(archive);
 });
 //editEvent function 
 function editEvent(eventId){
   
    let  event1;
    events.forEach(evt=>{
        if(evt.id==eventId){
     index=events.indexOf(evt);
            
        }
    })
    const form=document.querySelector('.form');
    form.querySelector('#event-title').value=events[index].title;
    form.querySelector('#event-seats').value=events[index].seats;
    form.querySelector('#event-description').value=events[index].discription;
    form.querySelector('#event-price').value=events[index].price;
    form.querySelector('#event-image').value=events[index].image;
    if(events[index].variantrow){
        events[index].variantrow.forEach((evt,ind)=>{
           form.querySelectorAll('.variant-row__name')[ind].value=evt.varianttiile;
           form.querySelectorAll('.variant-row__qty')[ind].value=evt.varianQty;
           form.querySelectorAll('.variant-row__value')[ind].value=evt.variantvalue;
           form.querySelectorAll('.variant-row__type')[ind].value=evt.varianttype;
           
        })
    }

   const screen=document.querySelector('.screens');
   screen.children[2].classList.remove("is-visible");
   screen.children[1].classList.add("is-visible");
   const btnedit=document.querySelector('.btn--primary')
   btnedit.textContent="Edit";
  document.querySelector('.btn--primary').addEventListener('click',()=>{
   
    if(btnedit.textContent=="Edit"){
     editEventvalidation(index)
    }

   })

}
//editEventvalidation function 
function editEventvalidation(index){
    let event=validationevent();
    
     if(event){
        event.id= events[index].id;
        events[index]=event;


    const btnedit=document.querySelector('.btn--primary')
   btnedit.textContent="Create Event";
    const screen=document.querySelector('.screens');
   screen.children[1].classList.remove("is-visible");
   screen.children[2].classList.add("is-visible");
     }
      eventlist(events); 

}