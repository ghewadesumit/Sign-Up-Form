document.querySelector('.banner-btn').addEventListener('click',()=>{

    document.querySelector('.banner').style.display='none';
    document.querySelector('.form-container').style.cssText='opacity:1; visibility:visible';
    document.querySelector('.container').style.background='#f57242';
})

document.querySelector('.x-btn').addEventListener('click',()=>{
    document.querySelector('.banner').style.display='flex';
    document.querySelector('.form-container').style.cssText='opacity:0; visibility:hidden';
    document.querySelector('.container').style.cssText="background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('images/bg1.jpeg') no-repeat center; background-size:cover";
})