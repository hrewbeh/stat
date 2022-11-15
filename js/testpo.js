function greatTest() {
 do {
   const question = [
        "Когда на Кубе произошел государственный переворот?(год)",
        "Кто организовал на Кубе государственный переворот?",
        "Где родился Фидель Кастро?",
        "Какой объект атаковали кубинские повстанцы в июле 1953 года?",
        "Как стала называться правящая партия Кубы с 1965 года?"
        ],
        answer = [
        "1952",
        "фульхенсио батиста",
        "куба",
          "казармы",
          "коммунистическая партия кубы",
     ],
     additionalAnswers = [
        "вопрос с подъвохом",
        "батиста",
        "на кубе",
        "казармы монкада",
        "коммунистическая партия"
     ];
let counterOfRightAnswers = 0,
    userAnswer;

    for(let i = 0; i < question.length; i ++) {
      userAnswer = prompt(question[i]);
      if (userAnswer != null) {
        if (userAnswer.toLowerCase() == answer[i] || userAnswer.toLowerCase() == additionalAnswers[i]) {
            counterOfRightAnswers ++;
            alert("Ответ верный!");
        } else {
          alert("Ответ неверный!");
        }
      } else {
        alert("Вы нажали Отмену");
        break;
      }
    }
    alert("Правильных ответов: " + counterOfRightAnswers);
 } while(confirm("Хотите повторить?"));
   alert("До пока!");
}
