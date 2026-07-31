/* ============ AI 상담 챗봇 플로팅 위젯 — Gemini Gem 연동 스크립트 ============ */
(function () {
  // 연동할 챗봇(Gemini Gem) 링크 — 나중에 이 값만 바꾸면 다른 챗봇으로 교체할 수 있습니다.
  var CHATBOT_URL = "https://gemini.google.com/gem/4099d8fbd553";

  // 챗봇 링크를 새 창으로 여는 명령
  function openChatbot() {
    window.open(CHATBOT_URL, "_blank", "noopener");
  }

  function initChatbotWidget() {
    var widget = document.getElementById("aiChatbotWidget");
    var btn = document.getElementById("aiChatbotBtn");
    var bubble = document.getElementById("aiChatbotBubble");
    if (!widget || !btn) return;

    // 버튼 또는 말풍선 클릭 시 Gemini Gem 열기
    btn.addEventListener("click", openChatbot);
    if (bubble) bubble.addEventListener("click", openChatbot);

    function wiggleOnce() {
      btn.classList.remove("is-wiggling");
      // 리플로우를 강제해 애니메이션을 처음부터 다시 재생
      void btn.offsetWidth;
      btn.classList.add("is-wiggling");
    }

    // 페이지 진입 1초 후 부드럽게 나타나고, 첫 방문 시 한 번 흔들어 시선을 끕니다.
    setTimeout(function () {
      widget.classList.add("is-visible");
      wiggleOnce();
      // 이후로는 5초마다 한 번씩만 살짝 흔들립니다.
      setInterval(wiggleOnce, 5000);
    }, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChatbotWidget);
  } else {
    initChatbotWidget();
  }
})();
