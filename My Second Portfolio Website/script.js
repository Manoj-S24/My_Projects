console.log("js is running");
document.querySelector('.hamb').style.display='none';
// we created Arrow function with add event listener and using if condition
document.querySelector('.closebtn').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamb').style.display='inline';
        document.querySelector('.closebtn').style.display='none';
    }
    else{
        document.querySelector('.closebtn').style.display='inline';
        document.querySelector('.hamb').style.display='none';
    }
})
// document.querySelector('.closebtn').addEventListener('click',()=>{
//     document.querySelector('.closebtn').style.display='none';
// })
document.querySelector('.hamb').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamb').style.display='inline';
        document.querySelector('.closebtn').style.display='none';
    }
    else{
        document.querySelector('.closebtn').style.display='inline';
        document.querySelector('.hamb').style.display='none';
    }
})
