import{a as i,S as u,i as l}from"./assets/vendor-BBPOLzfb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const d="49376041-e249e8ece49f8c2dec7a331c4",p="https://pixabay.com";i.defaults.baseURL=p;function m(e){return i.get("/api/",{params:{key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c={gallery:document.querySelector(".gallery")};let f=new u("a.gallery-link",{captionDelay:250,captionsData:"alt"});function g(e){const o=e.tags.slice(0,20+e.tags.slice(20).indexOf(","));return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${o}"
    />
    <ul class="info-list">
    <li class="photo-info" data-likes>Likes<span>${e.likes}</span></li>
    <li class="photo-info" data-views>Views<span>${e.views}</span></li>
    <li class="photo-info" data-comments>Comments<span>${e.comments}</span></li>
    <li class="photo-info" data-downloads>Downloads<span>${e.downloads}</span></li>
    </ul>
  </a>
</li>`}function y(e){const o=e.reduce((r,a)=>r+g(a),"");c.gallery.innerHTML=o,f.refresh()}function h(){c.gallery.innerHTML="",f.refresh()}const L={form:document.querySelector("form")};L.form.addEventListener("submit",b);function b(e){e.preventDefault();const o=e.target;document.body.insertAdjacentHTML("afterBegin",'<span class="loader"></span>'),o.elements["search-text"].value.trim()?(h(),m(o.elements["search-text"].value).then(r=>{document.querySelector(".loader").remove(),r.data.hits.length==0&&l.error({message:"No resalt found",position:"topRight"}),y(r.data.hits)}).catch(r=>{console.log(r)}),o.reset()):l.show({message:"Please, enter something for us to look for",title:"Warning",backgroundColor:"yellow",position:"topRight"})}
//# sourceMappingURL=index.js.map
