let your_score=0;
let comp_score=0;

const choices1 = document.querySelectorAll(".img1");

const msg = document.querySelector("#msg");
const your_score_para = document.querySelector(".score_you");
const comp_score_para= document.querySelector(".score_comp");

const Gencomp_choice =()=>{
    const option = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random()*3);
    return option[random];
};
const draw=(() =>{
    console.log("It is draw");
    msg.innerText="Its Draw ... Play again";
    msg.style.backgroundColor="grey";
});
const showWinner=((userwin, img , Comp_choice)=>{
    if(userwin){
        your_score ++;
        your_score_para.innerText= your_score;
        console.log("user win");
        msg.innerText="You win !!";
        msg.style.backgroundColor = "green";
    }
    else{
        comp_score++;
        comp_score_para.innerText = comp_score;
        console.log("You lose");
        msg.innerText="You Lose !!";
        msg.style.backgroundColor = "red";
    }
});

const playgame1 = (id1)=>{
    console.log("user choice = ", id1);
    const Comp_choice = Gencomp_choice();
    console.log("computer choice = ", Comp_choice);

    if(id1 == Comp_choice){
        draw();
    }
    else{
        let userwin = true;
        if(id1 == "rock"){
            userwin = Comp_choice == "paper" ? false: true;
        }
        else if(id1 == "paper"){
            userwin = Comp_choice == "scissor" ? false : true;
        }
        else{
            userwin = Comp_choice == "rock" ? false : true;
        }
        showWinner(userwin)
    }
};

const playgame2 = (id2)=>{
    console.log("user choice = ", id2);
    const Comp_choice = Gencomp_choice();
    console.log("computer choice = ", Comp_choice);

    if(id2 == Comp_choice){
        draw();
    }
    else{
        let userwin = true;
        if(id2 == "rock"){
            userwin = Comp_choice == "paper" ? false: true;
        }
        else if(id2 == "paper"){
            userwin = Comp_choice == "scissor" ? false : true;
        }
        else{
            userwin = Comp_choice == "rock" ? false : true;
        }
        showWinner(userwin)
    }
};

const playgame3 = (id3)=>{
    console.log("user choice = ", id3);
    const Comp_choice = Gencomp_choice();
    console.log("computer choice = ", Comp_choice);
    if(id3 == Comp_choice){
        draw();
    }
    else{
        let userwin = true;
        if(id3 == "rock"){
            userwin = Comp_choice == "paper" ? false: true;
        }
        else if(id3 == "paper"){
            userwin = Comp_choice == "scissor" ? false : true;
        }
        else{
            userwin = Comp_choice == "rock" ? false : true;
        }
        showWinner(userwin)
    }
};

choices1.forEach((img1)=>{
    
    img1.addEventListener("click", ()=>{
        const id1 = img1.getAttribute("id"); 
        playgame1(id1);
        // console.log("Choice was clicked", id1);
    });
});

const choices2 = document.querySelectorAll(".img2");
choices2.forEach((img2)=>{
    
    img2.addEventListener("click", ()=>{
        const id2 = img2.getAttribute("id"); 
        playgame2(id2);
        // console.log("Choice was clicked", id2);
    });
});

const choices3 = document.querySelectorAll(".img3");
choices3.forEach((img3)=>{
    
    img3.addEventListener("click", ()=>{
        const id3 = img3.getAttribute("id"); 
        playgame3(id3);
        // console.log("Choice was clicked", id3);
    });
});