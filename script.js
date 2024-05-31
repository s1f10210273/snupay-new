document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "アメリカ合衆国の首都はどこですか？",
      options: ["ニューヨーク", "ロサンゼルス", "ワシントンD.C.", "シカゴ"],
      answer: "ワシントンD.C.",
    },
    {
      question: "ピカソはどの国の出身ですか？",
      options: ["フランス", "スペイン", "イタリア", "ドイツ"],
      answer: "スペイン",
    },
    {
      question: "酸素の化学記号は何ですか？",
      options: ["O", "H", "C", "N"],
      answer: "O",
    },
    {
      question: "ピタゴラスの定理で有名なギリシャの哲学者は誰ですか？",
      options: ["アリストテレス", "ソクラテス", "ピタゴラス", "プラトン"],
      answer: "ピタゴラス",
    },
    {
      question: "第二次世界大戦は何年に始まりましたか？",
      options: ["1935年", "1939年", "1941年", "1945年"],
      answer: "1939年",
    },
    {
      question: "エベレスト山の高さは約何メートルですか？",
      options: [
        "6,500メートル",
        "7,800メートル",
        "8,000メートル",
        "8,848メートル",
      ],
      answer: "8,848メートル",
    },
    {
      question: "E=mc²の式を提唱した物理学者は誰ですか？",
      options: ["ニュートン", "ガリレオ", "アインシュタイン", "ホーキング"],
      answer: "アインシュタイン",
    },
    {
      question: "世界で最も人口が多い国はどこですか？",
      options: ["インド", "アメリカ", "中国", "ロシア"],
      answer: "中国",
    },
    {
      question: "イギリスがEUを離脱したことを示す言葉は何ですか？",
      options: ["Brexit", "Frexit", "Italexit", "Grexit"],
      answer: "Brexit",
    },
    {
      question: "太陽系で最も大きな惑星は何ですか？",
      options: ["地球", "火星", "木星", "土星"],
      answer: "木星",
    },
  ];

  const quizContainer = document.getElementById("quiz-container");
  const submitBtn = document.getElementById("submit-btn");

  function loadQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((quizItem, index) => {
      const quizDiv = document.createElement("div");
      quizDiv.classList.add("quiz-item", "mb-4");
      quizDiv.innerHTML = `
              <h5>${index + 1}. ${quizItem.question}</h5>
              ${quizItem.options
                .map(
                  (option, i) => `
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="quiz${index}" id="quiz${index}option${i}" value="${option}">
                      <label class="form-check-label" for="quiz${index}option${i}">
                          ${option}
                      </label>
                  </div>
              `
                )
                .join("")}
          `;
      quizContainer.appendChild(quizDiv);
    });
  }

  function showResults() {
    let score = 0;
    quizData.forEach((quizItem, index) => {
      const selectedOption = document.querySelector(
        `input[name="quiz${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === quizItem.answer) {
        score++;
      }
    });
    window.location.href = `result.html?score=${score}&total=${quizData.length}`;
  }

  submitBtn.addEventListener("click", showResults);

  loadQuiz();
});
