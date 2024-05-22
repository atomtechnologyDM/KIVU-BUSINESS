
document.addEventListener('DOMContentLoaded',function(){

    var bt_mn = document.getElementById("button-menu");
    bt_mn.addEventListener("click",()=>{
      
    
    
    var button_menu = document.getElementById("icon-m");
    
    
    var menu_bar = document.getElementById("menu-bar");
    var styleFinder = getComputedStyle(menu_bar);
    let spliter = styleFinder.top.split(".");
    let toper = parseInt(spliter);
    if(toper <= 0){
      menu_bar.style.top = "18vh";
      menu_bar.style.zIndex = "999";
       menu_bar.style.opacity = "1";
       button_menu.style.transform = "rotate(90deg)";
      
    }else{
      menu_bar.style.top = "-80vh";
      menu_bar.style.zIndex = "0";
      menu_bar.style.opacity = "0.1";
      button_menu.style.transform = "rotate(180deg)";
      
    }
    
    })
    
    
    
    
      });
    
    