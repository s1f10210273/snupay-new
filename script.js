document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
        "question": "Snu-pay Pantの読み方はどれですか",
        "options": ["サンペイパンツ", "スヌーピーパンツ", "スヌーペイパンツ", "クリーピーナッツ"],
        "answer": "スヌーペイパンツ"
    },
    {
        "question": "次のうち、レッド・ツェッペリンのメンバーではないのは誰ですか？",
        "options": ["ジミー・ペイジ", "ロバート・プラント", "ジョン・ポール・ジョーンズ", "ジミ・ヘンドリックス"],
        "answer": "ジミ・ヘンドリックス"
    },
    {
        "question": "次のアルバムのうち、ピンク・フロイドの作品はどれですか？",
        "options": ["The Wall", "Sgt. Pepper's Lonely Hearts Club Band", "Hotel California", "Born to Run"],
        "answer": "The Wall"
    },
    {
        "question": "クイーンのボーカリストは誰ですか？",
        "options": ["ミック・ジャガー", "フレディ・マーキュリー", "ロジャー・ダルトリー", "ロバート・プラント"],
        "answer": "フレディ・マーキュリー"
    },
    {
        "question": "次のうち、ニルヴァーナの代表曲はどれですか？",
        "options": ["Smells Like Teen Spirit", "Another Brick in the Wall", "Bohemian Rhapsody", "Hotel California"],
        "answer": "Smells Like Teen Spirit"
    },
    {
        "question": "ビートルズのメンバーで、ベースを担当していたのは誰ですか？",
        "options": ["ジョン・レノン", "ポール・マッカートニー", "ジョージ・ハリスン", "リンゴ・スター"],
        "answer": "ポール・マッカートニー"
    },
    {
        "question": "ジミ・ヘンドリックスが有名になった1969年の音楽フェスティバルは何ですか？",
        "options": ["モントレー・ポップ・フェスティバル", "ウッドストック", "コーチェラ", "グラストンベリー"],
        "answer": "ウッドストック"
    },
    {
        "question": "次のうち、ザ・ローリング・ストーンズの曲はどれですか？",
        "options": ["Paint It Black", "Stairway to Heaven", "Comfortably Numb", "Imagine"],
        "answer": "Paint It Black"
    },
    {
        "question": "次のバンドのうち、カート・コバーンが率いたのはどれですか？",
        "options": ["ニルヴァーナ", "ザ・フー", "レッド・ツェッペリン", "パール・ジャム"],
        "answer": "ニルヴァーナ"
    },
    {
        "question": "AC/DCの有名な曲「Back in Black」が収録されているアルバムは何ですか？",
        "options": ["Highway to Hell", "Back in Black", "Dirty Deeds Done Dirt Cheap", "The Razor's Edge"],
        "answer": "Back in Black"
    },
    {
        "question": "次のうち、メタリカのアルバムはどれですか？",
        "options": ["Master of Puppets", "Appetite for Destruction", "Blizzard of Ozz", "Ride the Lightning"],
        "answer": "Master of Puppets"
    },
    {
        "question": "次のうち、B'zのメンバーは誰ですか？",
        "options": ["稲葉浩志", "櫻井敦司", "布袋寅泰", "吉井和哉"],
        "answer": "稲葉浩志"
    },
    {
        "question": "スピッツの代表曲は次のうちどれですか？",
        "options": ["チェリー", "LOVE PHANTOM", "天体観測", "バンザイ"],
        "answer": "チェリー"
    },
    {
        "question": "ONE OK ROCKのボーカリストは誰ですか？",
        "options": ["TAKA", "Toru", "Ryota", "Tomoya"],
        "answer": "TAKA"
    },
    {
        "question": "L'Arc〜en〜Cielのデビュー曲は次のうちどれですか？",
        "options": ["Blurry Eyes", "DIVE TO BLUE", "虹", "flower"],
        "answer": "Blurry Eyes"
    },
    {
        "question": "次のバンドのうち、ASIAN KUNG-FU GENERATIONの代表曲はどれですか？",
        "options": ["リライト", "粉雪", "春よ、来い", "BLUE BIRD"],
        "answer": "リライト"
    },
    {
        "question": "GLAYの代表曲「HOWEVER」の発売年は次のうちどれですか？",
        "options": ["1994年", "1996年", "1998年", "2000年"],
        "answer": "1997年"
    },
    {
        "question": "次のうち、サザンオールスターズのボーカリストは誰ですか？",
        "options": ["桑田佳祐", "矢沢永吉", "甲本ヒロト", "藤原基央"],
        "answer": "桑田佳祐"
    },
    {
        "question": "BUMP OF CHICKENのデビューシングルは次のうちどれですか？",
        "options": ["天体観測", "ガラスのブルース", "ラフ・メイカー", "ハルジオン"],
        "answer": "ガラスのブルース"
    },
    {
        "question": "RADWIMPSの「前前前世」がテーマ曲となった映画は次のうちどれですか？",
        "options": ["君の名は。", "天気の子", "声の形", "バケモノの子"],
        "answer": "君の名は。"
    },
    {
        "question": "次のうち、ミスチル（Mr.Children）の代表曲はどれですか？",
        "options": ["花 -Memento-Mori-", "涙のキッス", "Tomorrow never knows", "名もなき詩"],
        "answer": "Tomorrow never knows"
    },
    {
        "question": "エレファントカシマシのボーカリストは誰ですか？",
        "options": ["宮本浩次", "志村正彦", "奥田民生", "吉井和哉"],
        "answer": "宮本浩次"
    },
    {
        "question": "次のうち、THE BLUE HEARTSの代表曲はどれですか？",
        "options": ["TRAIN-TRAIN", "粉雪", "LOVE PHANTOM", "紅"],
        "answer": "TRAIN-TRAIN"
    },
    {
        "question": "THE YELLOW MONKEYのボーカリストは誰ですか？",
        "options": ["吉井和哉", "桜井和寿", "TERU", "TOSHI"],
        "answer": "吉井和哉"
    },
    {
        "question": "次のうち、チャットモンチーのメンバーではないのは誰ですか？",
        "options": ["橋本絵莉子", "福岡晃子", "高橋久美子", "椎名林檎"],
        "answer": "椎名林檎"
    },
    {
        "question": "次のうち、B'zのギタリストは誰ですか？",
        "options": ["松本孝弘", "布袋寅泰", "TAKURO", "HIDE"],
        "answer": "松本孝弘"
    },
    {
        "question": "次のバンドのうち、ロックフェスティバル「ROCK IN JAPAN FESTIVAL」を主催しているのはどれですか？",
        "options": ["ROCKIN'ON JAPAN", "SPACE SHOWER TV", "WOWOW", "NHK"],
        "answer": "ROCKIN'ON JAPAN"
    },
    {
        "question": "次のうち、アジカン（ASIAN KUNG-FU GENERATION）のデビューアルバムはどれですか？",
        "options": ["崩壊アンプリファー", "ソルファ", "君繋ファイブエム", "マジックディスク"],
        "answer": "崩壊アンプリファー"
    }
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
