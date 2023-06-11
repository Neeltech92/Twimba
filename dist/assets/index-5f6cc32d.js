import{v4 as o}from"https://jspm.dev/uuid";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();const r=[{handle:"@TrollBot66756542 💎",profilePic:"images/troll.jpg",likes:27,retweets:10,tweetText:`Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,replies:[],isLiked:!1,isRetweeted:!1,uuid:"4b161eee-c0f5-4545-9c4b-8562944223ee"},{handle:"@Elon ✅",profilePic:"images/musk.png",likes:6500,retweets:234,tweetText:"I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀",replies:[{handle:"@TomCruise ✅",profilePic:"images/tcruise.png",tweetText:"Yes! Sign me up! 😎🛩"},{handle:"@ChuckNorris ✅",profilePic:"images/chucknorris.jpeg",tweetText:"I went last year😴"}],isLiked:!1,isRetweeted:!1,uuid:"3c23454ee-c0f5-9g9g-9c4b-77835tgs2"},{handle:"@NoobCoder12",profilePic:"images/flower.png",likes:10,retweets:3,tweetText:"Are you a coder if you only know HTML?",replies:[{handle:"@StackOverflower ☣️",profilePic:"images/overflow.png",tweetText:"No. Obviosuly not. Go get a job in McDonald's."},{handle:"@YummyCoder64",profilePic:"images/love.png",tweetText:"You are wonderful just as you are! ❤️"}],isLiked:!1,isRetweeted:!1,uuid:"8hy671sff-c0f5-4545-9c4b-1237gyys45"}];document.addEventListener("click",function(t){t.target.dataset.like?c(t.target.dataset.like):t.target.dataset.retweet?u(t.target.dataset.retweet):t.target.dataset.reply?f(t.target.dataset.reply):t.target.id==="tweet-btn"?g():t.target.id==="trash-btn"?m(t.target.dataset.remove):t.target.dataset.addReply&&p(t.target.dataset.addReply)});function c(t){const e=r.filter(function(s){return s.uuid===t})[0];e.isLiked?e.likes--:e.likes++,e.isLiked=!e.isLiked,d()}function u(t){const e=r.filter(function(s){return s.uuid===t})[0];e.isRetweeted?e.retweets--:e.retweets++,e.isRetweeted=!e.isRetweeted,d()}function f(t){document.getElementById(`replies-${t}`).classList.toggle("hidden")}function p(t){for(let e of r){const s=document.getElementById(`${e.uuid}`),a=r.filter(function(i){return i.uuid===t})[0];s.value&&a.replies.unshift({handle:"@Scrimba",profilePic:"images/scrimbalogo.png",tweetText:`${s.value}`})}d()}function g(){const t=document.getElementById("tweet-input");t.value&&(r.unshift({handle:"@Scrimba",profilePic:"images/scrimbalogo.png",likes:0,retweets:0,tweetText:t.value,replies:[],isLiked:!1,isRetweeted:!1,uuid:o()}),d(),t.value="")}function m(t){let e=r.filter(function(s){return s.uuid===t})[0];for(let s=0;s<r.length;s++)r[s]===e&&r.splice(s,1);d()}function w(){let t="";return r.forEach(function(e){let s="";e.isLiked&&(s="liked");let a="";e.isRetweeted&&(a="retweeted");let i="";e.handle==="@Scrimba"&&(i=`<span class="tweet-detail">
                <i class="fa-solid fa-trash-can red"
                id = 'trash-btn'
                data-remove="${e.uuid}"
                ></i>
            </span>`);let l="";e.replies.length>0&&e.replies.forEach(function(n){l+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${n.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${n.handle}</p>
                <p class="tweet-text">${n.tweetText}</p>
            </div>
        </div>
</div>
`}),t+=`
<div class="tweet">
    <div class="tweet-inner">
        <img src="${e.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${e.handle}</p>
            <p class="tweet-text">${e.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${e.uuid}"
                    ></i>
                    ${e.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${s}"
                    data-like="${e.uuid}"
                    ></i>
                    ${e.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${a}"
                    data-retweet="${e.uuid}"
                    ></i>
                    ${e.retweets}
                </span>
                ${i}
            </div>   
        </div>            
    </div>
    <div class="hidden" id='replies-${e.uuid}'>
        <textarea class='reply-input' id='${e.uuid}' placeholder='Click to reply'></textarea>
        <button class='reply-btn' id='reply-btn' data-add-reply="${e.uuid}">Reply</button>
        ${l}
    </div>   
</div>
`}),t}function d(){document.getElementById("feed").innerHTML=w()}d();
