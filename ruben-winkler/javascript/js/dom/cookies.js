"use strict";

let cookie = "";
function setCookies(name, value) {
  cookie = `${encodeURIComponent(name)}=`;
  if (value) {
    cookie += encodeURIComponent(value);
  }
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=3600`;
  return cookie;
}

setCookies("password", "%A$g[}hm;§8");
console.log(cookie);
