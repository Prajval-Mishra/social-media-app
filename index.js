//MESSAGES
const messagesNotification =document.querySelector('#messages-notifications');
const notifications =document.querySelector('#notification-popup');
const ns= document.querySelector('.ns');

 
const messages= document.querySelector('.messages');
const message =messages.querySelectorAll('.message');


//THEME
const theme=document.querySelector('#theme');
const themeModel =document.querySelector('.customize-theme');
const fontSizes =document.querySelectorAll('.choose-size span');
var root =document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 =document.querySelector('.bg-1');
const Bg2 =document.querySelector('.bg-2');
const Bg3 =document.querySelector('.bg-3');



//NOTIFICATION POPUP
function myFunction() {
    var x = document.getElementById("notifications");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  notifications.addEventListener('click',()=>{
    ns.style.boxShadow ='0 0 1rem var(--color-primary)';
   
})

  //MESSAGE POPUP
function myFunction1() {
    var x = document.getElementById("Message-popup");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //REQUEST
  function myFunction2() {
    var x = document.getElementById("reuest-popup");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }  
//SEARCHES CHATS
function search_message() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('message');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

//HIGHLIGHT MESSAGES BOX WHEN CLICK ON MESSAGES
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow ='0 0 1rem var(--color-primary)';
    
})

//THEME COUSTOMIZATION

//opens modal
const openThemeModal =()=>{
    themeModel.style.display='grid';
}
//close modal
const closeThemeModal=(e)=>{
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display='none';        
    }
}

//close modal
themeModel.addEventListener('click',closeThemeModal);

theme.addEventListener('click',openThemeModal);



//FONT SIZE
//REMOVE active class font
const removeSizeSelector= ()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => { 
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size1')){
            fontSize='10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }
        else if (size.classList.contains('font-size2')){
            fontSize='13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }
        else if (size.classList.contains('font-size3')){
            fontSize='15px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size4')){
            fontSize='17px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }
        else if (size.classList.contains('font-size5')){
            fontSize='18px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }
        //change font size of the root html
    document.querySelector('html').style.fontSize = fontSize;
    })
})

//Remove active color class
const changeActiveColorClass=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

//color
colorPalette.forEach(color =>{
    color.addEventListener('click',()=>{
        let primary;
        //remove action class from color
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue =252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

//Theme BACKGROUND value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background color
const changeBG =() =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    //add active class
    Bg1.classList.add('active');
    //remove active from class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click',()=>{
    darkColorLightness='95%'
    whiteColorLightness='20%'
    lightColorLightness='15%'

    //add active class
    Bg2.classList.add('active');
    //remove active from class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click',()=>{
    darkColorLightness='95%'
    whiteColorLightness='10%'
    lightColorLightness='0%'

    //add active class
    Bg3.classList.add('active');
    //remove active from class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();


})