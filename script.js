document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question:
        "次のうち、レッド・ツェッペリンのメンバーではないのは誰ですか？",
      options: [
        "ジミー・ペイジ",
        "ロバート・プラント",
        "ジョン・ポール・ジョーンズ",
        "ジミ・ヘンドリックス",
      ],
      answer: "ジミ・ヘンドリックス",
    },
    {
      question: "次のアルバムのうち、ピンク・フロイドの作品はどれですか？",
      options: [
        "The Wall",
        "Sgt. Pepper's Lonely Hearts Club Band",
        "Hotel California",
        "Born to Run",
      ],
      answer: "The Wall",
    },
    {
      question: "クイーンのボーカリストは誰ですか？",
      options: [
        "ミック・ジャガー",
        "フレディ・マーキュリー",
        "ロジャー・ダルトリー",
        "ロバート・プラント",
      ],
      answer: "フレディ・マーキュリー",
    },
    {
      question: "次のうち、ニルヴァーナの代表曲はどれですか？",
      options: [
        "Smells Like Teen Spirit",
        "Another Brick in the Wall",
        "Bohemian Rhapsody",
        "Hotel California",
      ],
      answer: "Smells Like Teen Spirit",
    },
    {
      question: "ビートルズのメンバーで、ベースを担当していたのは誰ですか？",
      options: [
        "ジョン・レノン",
        "ポール・マッカートニー",
        "ジョージ・ハリスン",
        "リンゴ・スター",
      ],
      answer: "ポール・マッカートニー",
    },
    {
      question:
        "ジミ・ヘンドリックスが有名になった1969年の音楽フェスティバルは何ですか？",
      options: [
        "モントレー・ポップ・フェスティバル",
        "ウッドストック",
        "コーチェラ",
        "グラストンベリー",
      ],
      answer: "ウッドストック",
    },
    {
      question: "次のうち、ザ・ローリング・ストーンズの曲はどれですか？",
      options: [
        "Paint It Black",
        "Stairway to Heaven",
        "Comfortably Numb",
        "Imagine",
      ],
      answer: "Paint It Black",
    },
    {
      question: "次のバンドのうち、カート・コバーンが率いたのはどれですか？",
      options: [
        "ニルヴァーナ",
        "ザ・フー",
        "レッド・ツェッペリン",
        "パール・ジャム",
      ],
      answer: "ニルヴァーナ",
    },
    {
      question:
        "AC/DCの有名な曲「Back in Black」が収録されているアルバムは何ですか？",
      options: [
        "Highway to Hell",
        "Back in Black",
        "Dirty Deeds Done Dirt Cheap",
        "The Razor's Edge",
      ],
      answer: "Back in Black",
    },
    {
      question: "次のうち、メタリカのアルバムはどれですか？",
      options: [
        "Master of Puppets",
        "Appetite for Destruction",
        "Blizzard of Ozz",
        "Ride the Lightning",
      ],
      answer: "Master of Puppets",
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
