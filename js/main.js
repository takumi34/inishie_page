var visits_count = getCookie("count");
let message = document.getElementById("message");
if (!visits_count) {
  visits_count = 1;
  message.innerHTML = "はじめまして" + visits_count + "回目の訪問です。";
} else {
  message.innerHTML = "おひさしぶりです。" + visits_count + "回目の訪問です。";
  visits_count += 1;
}
setCookie("count", visits_count)
