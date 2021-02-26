    let textRandom = Array("J'aime le Chocolat", "Je vais engager Yeun", "J'adore JavaScript", "Je trouverais", "J'ai envie de rire");
    let btnChance = document.querySelector('#chance');
    let btnResearch = document.getElementById('research');
    console.log(btnResearch);
    console.log(btnChance);

    btnResearch.addEventListener('click',(e)=>{
        e.preventDefault();
        location.assign('https://www.lilo.org');
    })
    btnChance.addEventListener('mouseover',(e)=>{
        e.preventDefault();
        let i = Math.floor(Math.random()*Math.floor(5));
        btnChance.textContent= textRandom[i];
    })
    btnChance.addEventListener('mouseout',()=>{
        btnChance.textContent="J'ai de la Chance";
    })
    


