import{S as u,a as g,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let c;function m(s){const l=s.map(r=>`<li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
        width="360" height="152"
      />  </a>
      <ul class="gallery-list">
      <li class="gallery-item-desc"><p  class="gallery-descr">Likes</p>
      <p  class="gallery-count">${r.likes}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Views</p>
      <p class="gallery-count">${r.views}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Comments</p>
      <p class="gallery-count">${r.comments}</p>
      </li>
      <li class="gallery-item-desc"><p class="gallery-descr">Downloads</p>
      <p class="gallery-count">${r.downloads}</p>
      </li>
      </ul>
    </li>`).join("");a.galleryElem.innerHTML=l,c?c.refresh():c=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function d(){a.galleryElem.innerHTML=""}function y(){a.loaderJs.classList.add("loader")}function p(){a.loaderJs.classList.remove("loader")}function f(s){const l="https://pixabay.com",r="/api/",o=new URLSearchParams({q:s,key:"51658185-19ae36e73b0aa030a4154053e",image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${l}${r}?${o}`;return g.get(e).then(t=>t.data.hits)}const a={galleryElem:document.querySelector(".gallery"),loaderJs:document.querySelector(".loader-js"),formEl:document.querySelector(".form")};a.formEl.addEventListener("submit",s=>{s.preventDefault();const l=s.target.elements["search-text"].value.trim();d(),y(),l.length!==0&&f(l).then(r=>{r.length>0?m(r):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"})}).catch(r=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:"error",backgroundColor:"#ef4040",iconColor:"white",messageColor:"white"}),console.error(r)}).finally(()=>{p()}),s.currentTarget.reset()});
//# sourceMappingURL=index.js.map
