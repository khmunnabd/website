const mainVideos = [
  ["Ij_LOz28HrY","Documentary Stories"],["MuVsM3MAETM","Visual Campaign"],["buBHo_-JWZE","Film Production"],
  ["0ZJYg8fB0gY","Creative Storytelling"],["P00Wb3JBZr0","Institutional Film"],["5Y8XrMCr9I8","Visual Communication"],
  ["ejFWOKgYVVY","Campaign Film"],["Ooq73PBJDy0","ISD Stories"],["JalicjB1dt0","Documentary"],
  ["WNxVmywmTXY","Brand Story"],["cYTL9H1oslw","Creative Film"],["lsXfPTPgfZc","DIU Stories"],
  ["dG4F94TcNpo","Campus Film"],["Qi8aZeirOQE","Promotional Film"],["Tl--MDLKMMA","Visual Story"],
  ["50yPaqX1aOg","Documentary Film"],["6coEQyPbFtQ","Creative Production"],["Uabvc3WAWCo","Campaign Story"],["swoGcGk-SsM","Film Project"]
];
const animationVideos = [
  ["Rl47Ye5U1aQ","Animation 01"],["1L_orFryEgM","Animation 02"],["5Y8XrMCr9I8","Animation 03"],["kb-eYcSpuWM","Animation 04"]
];
const reelsVideos = [
  ["OWlM8wKTfDQ","Reel 01"],["yCs9N6S5IOI","Reel 02"],["KWIYW7uGXF0","Reel 03"],["qRBp88c4-Ms","Reel 04"]
];
function addVideos(targetId, items, prefix){
  const target=document.getElementById(targetId);
  target.innerHTML=items.map(([id,title],i)=>`
    <article class="mosaic-card">
      <iframe loading="lazy" src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="mosaic-label"><small>${prefix} / ${String(i+1).padStart(2,"0")}</small><strong>${title}</strong></div>
    </article>`).join("");
}
addVideos("videoMosaic",mainVideos,"SELECTED WORK");
addVideos("animationMosaic",animationVideos,"MOTION DESIGN");
addVideos("reelsMosaic",reelsVideos,"SHORT FORM");
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".hero-photo,.hero-copy,.section-heading,.reel-card,.destination,.mosaic-card,.footer").forEach(el=>{el.classList.add("reveal");observer.observe(el)});
