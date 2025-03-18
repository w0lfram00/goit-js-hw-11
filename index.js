import{a as c,S as p,i}from"./assets/vendor-BBPOLzfb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="49376041-e249e8ece49f8c2dec7a331c4",g="https://pixabay.com";c.defaults.baseURL=g;function h(e){return c.get("/api/",{params:{key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const f={gallery:document.querySelector(".gallery")};let u=new p("a.gallery-link",{captionDelay:250,captionsData:"alt"});function y(e){const o=e.tags.slice(0,20+e.tags.slice(20).indexOf(","));return`<li class="gallery-item">
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
</li>`}function L(e){const o=e.reduce((s,a)=>s+y(a),"");f.gallery.innerHTML=o,u.refresh()}function w(){f.gallery.innerHTML="",u.refresh()}const n={form:document.querySelector("form"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",b);d();function b(e){e.preventDefault();const o=e.target;S(),o.elements["search-text"].value.trim()?(w(),h(o.elements["search-text"].value).then(s=>{d(),s.data.hits.length==0&&i.error({message:"No resalt found",position:"topRight"}),L(s.data.hits)}).catch(s=>{console.log(s)}),o.reset()):i.show({message:"Please, enter something for us to look for",title:"Warning",backgroundColor:"yellow",position:"topRight"})}function S(){n.loader.className="loader"}function d(){n.loader.className=""}
//# sourceMappingURL=index.js.map
