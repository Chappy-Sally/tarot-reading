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

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function drawCards(count, title) {
  const selected = shuffle(cards).slice(0, count);
  showResult(title, selected);
}

function drawChoice() {
  const selected = shuffle(cards).slice(0, 2);
  showResult("しあわせスイッチ2択", selected, true);
}

function showResult(title, selected, isChoice = false) {
  showPage("result");

  document.getElementById("spreadTitle").textContent = title;

  const cardsArea = document.getElementById("cardsArea");
  cardsArea.innerHTML = "";

  let text = `【${title}】\n\n`;

  selected.forEach((card, index) => {
    const direction = Math.random() > 0.5 ? "正位置" : "逆位置";

    const label = isChoice
      ? index === 0 ? "Aの選択" : "Bの選択"
      : `${index + 1}枚目`;

    cardsArea.innerHTML += `
      <div class="card">
        <img src="Images/${card[0]}" alt="${card[1]}">
        <p>${label}<br>${card[1]}（${direction}）</p>
      </div>
    `;

    text += `${label}：${card[1]}（${direction}）\n`;
  });

  text += `\nこのカードをもとに、今の私に必要な気づきを、やさしく分かりやすく教えてください。`;

  document.getElementById("resultText").value = text;
}

function copyText(id) {
  const text = document.getElementById(id).value;
  navigator.clipboard.writeText(text);
  alert("コピーしたよ💕");
}

function copyCustomPrompt() {
  const question = document.getElementById("customQuestion").value;

  if (!question.trim()) {
    alert("質問を入力してね😊");
    return;
  }

  const text = `テーマは「${question}」です。

このテーマについて、今の私に必要な気づきをやさしく教えてください。

・怖がらせない
・否定しない
・未来を断定しない
・安心できる言葉で
・最後に小さな一歩を教えてください`;

  navigator.clipboard.writeText(text);
  alert("その他の質問プロンプトをコピーしたよ💕");
}

function copyResult() {
  const text = document.getElementById("resultText").value;
  navigator.clipboard.writeText(text);
  alert("結果をコピーしたよ💕");
}
