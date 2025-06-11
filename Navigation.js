const navsilde=()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.Nav_links');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav_active');

        burger.classList.toggle('toggle');
    });
}

navsilde();