import { config } from "./config.js";
(()=>{
    var mykey = config.MY_KEY;
    var color = 'purple';
    var url = "https://pixabay.com/api/?key="+mykey+"&image_type=illustration&editors_choice=true&colors="+color
    fetch(url,{
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