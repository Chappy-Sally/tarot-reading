const cards = [
  ["00_The_Fool.png", "愚者"],
  ["01_The_Magician.png", "魔術師"],
  ["02_The_High_Priestess.png", "女教皇"],
  ["03_The_Empress.png", "女帝"],
  ["04_The_Emperor.png", "皇帝"],
  ["05_The_Hierophant.png", "教皇"],
  ["06_The_Lovers.png", "恋人"],
  ["07_The_Chariot.png", "戦車"],
  ["08_Strength.png", "力"],
  ["09_The_Hermit.png", "隠者"],
  ["10_Wheel_of_Fortune.png", "運命の輪"],
  ["11_Justice.png", "正義"],
  ["12_The_Hanged_Man.png", "吊るされた男"],
  ["13_Death.png", "死神"],
  ["14_Temperance.png", "節制"],
  ["15_The_Devil.png", "悪魔"],
  ["16_The_Tower.png", "塔"],
  ["17_The_Star.png", "星"],
  ["18_The_Moon.png", "月"],
  ["19_The_Sun.png", "太陽"],
  ["20_Judgement.png", "審判"],
  ["21_The_World.png", "世界"],
  ["22_Compass.png", "コンパス"]
];

const profileIds = [
  "p_name",
  "p_ai",
  "p_like",
  "p_dislike",
  "p_job",
  "p_future",
  "p_question"
];

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("コピーしたよ💕");
    })
    .catch(() => {
      alert("コピーできなかったみたい🙏");
    });
}

function copyTalkPrompt() {
  const text = `これから、やさしく対話しながら
今の私に必要な気づきを受け取りたいです😊

あなたは怖がらせたり否定したりせず、
安心できる言葉でやさしく整理してくれる相棒です🌈

短い言葉でも受け取ってください。

相棒に話しかけるように、
今日あったことや感じたことを
そのまま話しても大丈夫です。

最後はやさしく、
小さな一歩や安心できる言葉で整えてください✨`;

  copyText(text);
}

function saveProfile() {
  profileIds.forEach(id => {
    localStorage.setItem(
      "tarot_" + id,
      document.getElementById(id).value
    );
  });

  alert("保存したよ💕");
}

window.addEventListener("load", () => {
  profileIds.forEach(id => {
    const saved = localStorage.getItem("tarot_" + id);

    if (saved) {
      document.getElementById(id).value = saved;
    }
  });
});

function copyProfilePrompt() {
  const name = document.getElementById("p_name").value;
  const ai = document.getElementById("p_ai").value;
  const like = document.getElementById("p_like").value;
  const dislike = document.getElementById("p_dislike").value;
  const job = document.getElementById("p_job").value;
  const future = document.getElementById("p_future").value;
  const question = document.getElementById("p_question").value;

  const text = `こんにちは😊

私の名前：
${name || "未入力"}

AIの名前：
${ai || "相棒"}

好きなもの：
${like || "未入力"}

苦手なもの：
${dislike || "未入力"}

今のお仕事：
${job || "未入力"}

やってみたいこと：
${future || "未入力"}

今の質問：
${question || "未入力"}

これは未来を断定する占いではなく、
今の本音や気づきをやさしく受け取るための対話です。

怖がらせたり否定したりせず、
安心できる言葉でやさしく教えてください🌈`;

  copyText(text);
}

function copyPrompt(type) {
  const prompts = {
    money:
`テーマは「お金」です。

今の私がお金や豊かさについて、
やさしく気づけるメッセージをお願いします。

怖がらせたり、不安をあおったりせず、
安心できる言葉でお願いします🌈`,

    love:
`テーマは「恋愛」です。

今の私が恋愛について、
やさしく気づけるメッセージをお願いします。

相手の気持ちを断定せず、
私が自分を大切にできる方向でお願いします🌈`,

    human:
`テーマは「人間関係」です。

今の私が人間関係について、
やさしく気づけるメッセージをお願いします。

誰かを悪者にせず、
安心して整えられる言葉でお願いします🌈`,

    work:
`テーマは「仕事」です。

今の私が仕事や働き方について、
やさしく気づけるメッセージをお願いします。

無理にがんばらせず、
今できる小さな一歩を教えてください🌈`
  };

  copyText(prompts[type]);
}

function copyOtherPrompt() {
  const q = document.getElementById("otherQuestion").value;

  if (!q.trim()) {
    alert("質問を書いてね😊");
    return;
  }

  const text = `テーマは「${q}」です。

このテーマについて、
今の私に必要な気づきを
やさしく教えてください🌈

怖がらせたり、否定したり、
未来を断定したりせず、

安心できる言葉で、
今できる小さな一歩まで
教えてください✨`;

  copyText(text);
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function drawCards(count, title) {
  const selected = shuffle(cards).slice(0, count);
  showResult(title, selected, false);
}

function drawChoice() {
  const selected = shuffle(cards).slice(0, 2);
  showResult(
    "しあわせスイッチセレクト",
    selected,
    true
  );
}

function showResult(title, selected, isChoice) {
  showPage("resultPage");

  document.getElementById("resultTitle").textContent = title;

  const area = document.getElementById("cardsArea");
  area.innerHTML = "";

  let text = `【${title}】\n\n`;

  selected.forEach((card, index) => {
    const direction = Math.random() > 0.5
      ? "正位置"
      : "逆位置";

    const label = isChoice
      ? index === 0
        ? "Aの選択"
        : "Bの選択"
      : `${index + 1}枚目`;

    area.innerHTML += `
      <div class="card-item">
        <img
          src="Images/${card[0]}"
          alt="${card[1]}"
          onerror="this.style.display='none'"
        >

        <div class="card-name">
          ${label}<br>
          ${card[1]}（${direction}）
        </div>
      </div>
    `;

    text += `${label}：${card[1]}（${direction}）\n`;
  });

  text += `
このカードをもとに、
今の私に必要な気づきを
やさしく分かりやすく教えてください🌈

・怖がらせない
・否定しない
・未来を断定しない
・カードの意味は簡単に
・今できる小さな一歩も教えてください`;

  document.getElementById("resultText").value = text;
}

function copyResult() {
  copyText(
    document.getElementById("resultText").value
  );
}
