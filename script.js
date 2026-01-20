let classes = ["gitHub", "js", "css", "java", "python", "nodejs", "cpp", "mongo", "react", "sql", "vue", "spring", "django", "bootstrap", "tailwind", "kotlin"];

let occur = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let pair = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[],
    11:[],
    12:[],
    13:[],
    14:[],
    15:[],
    16:[],
};
let chance = 1;
let flips = 0;
let flipped1 = [];
let p1Score = document.querySelector("#p1");
let p2Score = document.querySelector("#p2");

let cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
    let rand = Math.floor(Math.random() * 16);
    if (occur[rand] == 2) {
        while (occur[rand] == 2) {
            rand = Math.floor(Math.random() * 16);
        }
    }
    let content = cards[i].children[0].children[0];
    content.classList.add(classes[rand]);
    let arr = pair[rand+1];
    arr.push(i+1);
    pair[rand+1] = arr;
    occur[rand]++;
}

console.log(pair);

cards.forEach(card => {
    card.addEventListener("click", () => {
        if(flips == 2) return;
        if (card.classList.contains("flipped")) return;
        card.classList.add("flipped");
        flips++;
        flipped1.push(card);
        if (flips == 2) {
            setTimeout(() => {
                if(checkSuccess(flipped1[0].getAttribute("id"), flipped1[1].getAttribute("id"))){
                    flipped1[0].remove();
                    flipped1[1].remove();
                    (chance == 1)? p1Score.innerText = `${parseInt(p1Score.innerText)+1}` : p2Score.innerText = `${parseInt(p2Score.innerText)+1}`;
                } else{
                    flipped1[0].classList.remove("flipped");
                    flipped1[1].classList.remove("flipped");
                    (chance == 1) ? chance = 2 : chance = 1;
                }
                flipped1.splice(0, 2);
                flips = 0;
                if(parseInt(p1Score.innerText) + parseInt(p2Score.innerText) == 16){
                    if(parseInt(p1Score.innerText) > parseInt(p2Score.innerText)) document.querySelector("h3").innerText = `Congratulations! player 1 has won`;
                    else if(parseInt(p1Score.innerText) < parseInt(p2Score.innerText)) document.querySelector("h3").innerText = `Congratulations! player 2 has won`;
                    else document.querySelector("h3").innerText = `Its a draw`;
                    return;
                }
                document.querySelector("h3").innerText = `Chance of Player${chance}`;
            }, 1000);
        }
    });
});

function checkSuccess(c1, c2){
    c1 = parseInt(c1.slice(4));
    c2 = parseInt(c2.slice(4));
    console.log(c1, c2);
    for(let key in pair){
        if((pair[key][0] == c1 || pair[key][1] == c1) && (pair[key][0] == c2 || pair[key][1] == c2)) return true;
    }
    console.log("returning false");
    return false;
}
