(()=>{

    fetch("https://pixabay.com/api/?key=12063395-0b9e4926e63377c9059dd41ad&image_type=illustration&editors_choice=true&colors=white",{
        method:"GET"
    }).then(res=>res.json())
    .then(image=>{
        console.log(image);
        var img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        var bg = document.querySelector(".test1");
        bg.src = `${img}`
        
        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test2");
        bg.src = `${img}`

        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test3");
        bg.src = `${img}`

        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test4");
        bg.src = `${img}`

        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test5");
        bg.src = `${img}`

        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test6");
        bg.src = `${img}`

        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test7");
        bg.src = `${img}`

        img = image.hits[Math.floor(Math.random()*20)].largeImageURL;
        bg = document.querySelector(".test8");
        bg.src = `${img}`
    
    });
})();