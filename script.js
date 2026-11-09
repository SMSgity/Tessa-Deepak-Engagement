const envelopeScreen = document.getElementById("envelopeScreen");
const openInvitation = document.getElementById("openInvitation");

function openInvite(){
  if(envelopeScreen.classList.contains("opening")) return;
  envelopeScreen.classList.add("opening");
  setTimeout(()=>{document.body.classList.add("invitation-open");document.body.style.overflow="auto";},850);
  setTimeout(()=>{envelopeScreen.classList.add("opened");},1450);
}
openInvitation.addEventListener("click",openInvite);
openInvitation.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openInvite();}});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show");}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const target=new Date("2026-12-26T11:45:00+05:30").getTime();
const ids={days:document.getElementById("days"),hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")};
const note=document.getElementById("countdownNote");
function updateCountdown(){
 let diff=target-Date.now();
 if(diff<=0){diff=0;note.textContent="The celebration day is here!";}
 const values={days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};
 Object.keys(values).forEach(key=>ids[key].textContent=String(values[key]).padStart(2,"0"));
}
updateCountdown();setInterval(updateCountdown,1000);
