/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

if(pin.length >= 4) return;

pin += num;

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function clearPin(){

pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function checkPin(){

if(pin === "0725"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

document.getElementById("music")
.play().catch(()=>{});

}else{

alert("Wrong PIN 🩵🩷");

pin="";

document.getElementById("pinInput")
.value="";

}

}

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("bottleSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML =
["🩵","🩷","💙","💕"][
Math.floor(Math.random()*4)
];

heart.style.position="fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top="-30px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,700);

const style =
document.createElement("style");

style.innerHTML = `
@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(120vh);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.5);
}

100%{
opacity:0;
transform:
translate(var(--x),var(--y))
scale(1.5)
rotate(360deg);
}

}
`;

document.head.appendChild(style);

/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

if(bottleOpened) return;

bottleOpened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowerBurst();

setTimeout(()=>{

bottle.style.display="none";

document.getElementById(
"letterContainer"
).style.display="block";

typeLetter();

},1500);

}

function createFlowerBurst(){

const flowers =
document.getElementById("flowers");

const emojis = [
"🩷","🩵","💙","💕","✨","💫"
];

for(let i=0;i<18;i++){

const flower =
document.createElement("div");

flower.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

flower.style.position =
"absolute";

flower.style.left="0px";
flower.style.top="0px";

flower.style.fontSize =
(Math.random()*10+20)+"px";

flower.style.setProperty(
"--x",
(Math.random()*700-350)+"px"
);

flower.style.setProperty(
"--y",
(-Math.random()*450-50)+"px"
);

flower.style.animation =
"flowerBurst 2.5s forwards";

flower.style.willChange =
"transform, opacity";

flowers.appendChild(flower);

setTimeout(()=>{
flower.remove();
},2500);

}

}

/* =========================
   LETTER MESSAGE
========================= */

const message = `

happy birthday my victorrr. 🎂🩵🩷

today is your day and i just wanna remind you
how much you mean to me and how grateful i am
that the universe let me have you as mine.

thank you for being my safe place,
my person,
my home.

for listening to all my rambles,

for making me laugh when i'm overthinking,

for being patient with me
even when i'm a mess,

and for loving me
on my good days
and my bad days.

you make the most ordinary moments
feel so special just because you're there
and i don't think i say that enough.

i pray that god blesses you so much this year victor.

that he gives you good health,
a strong heart,
and a clear mind.

that he opens doors for you,
gives you success,
and protects you from anything
that tries to hurt you.

`;

const message2 = `

i pray that he fills your life
with peace,
joy,
opportunities,
and people who genuinely love you.

and for us, my love,

i pray that god keeps us together
and makes our love stronger
every single day.

that he gives us patience,
understanding,
and happiness
in all the little things.

i pray that we keep growing,
keep choosing each other,
keep laughing,

and keep building a future
full of love,
trust,
and our silly inside jokes.

i love you
in the most annoying,
clingy,
and cute way possible lol.

i'm so proud of the man
you're becoming.

and i can't wait to see
all the amazing things
you'll do this year.

thank you for choosing me.

thank you for being mine.

`;

const message3 = `

i'm wishing you
the happiest birthday,

the sweetest year ahead,

and a lifetime of blessings
with me by your side.

i love you so so much
my victor.

happy birthday,
my favorite person.

🩵🩷

- hazel

`;

function typeLetter(){

const target =
document.getElementById("letterText");

target.innerHTML="";

const fullMessage =
message +
message2 +
message3;

let i = 0;

const typing =
setInterval(()=>{

target.innerHTML +=
fullMessage.charAt(i);

i++;

if(i >= fullMessage.length){

clearInterval(typing);

}

},5);

}

/* =========================
   QUIZ
========================= */

let currentQuestion = 0;

const questions =
document.querySelectorAll(".question");

function checkAnswer(button,correct){

if(!correct){

alert("Oops! Try again 🩷");
return;

}

questions[currentQuestion]
.classList.remove("active");

currentQuestion++;

if(currentQuestion < questions.length){

questions[currentQuestion]
.classList.add("active");

}else{

document.getElementById("quizSuccess")
.classList.remove("hidden");

createConfetti();

document.getElementById("quizSuccess")
.scrollIntoView({
behavior:"smooth"
});

}

}

/* =========================
   SPECIAL PHOTO EFFECT
========================= */

function createConfetti(){

for(let i=0;i<180;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
[
"🩵",
"🩷",
"💙",
"💕",
"✨",
"💫",
"⭐"
][
Math.floor(Math.random()*7)
];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
(Math.random()*20+15)+"px";

confetti.style.zIndex =
"99999";

confetti.style.animation =
`fall ${Math.random()*5+5}s linear`;

confetti.style.pointerEvents =
"none";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},10000);

}

}
