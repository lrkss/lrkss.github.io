// <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
//      data-wp-preserve="%3Cscript%20src%3D%22js%2Fquiz.js%22%3E%3C%2Fscript%3E" data-mce-resize="false"
//      data-mce-placeholder="1" className="mce-object" width="20" height="20" alt="&lt;script&gt;"
//      title="&lt;script&gt;"/>

$(function () {
    //Hauptfunktion
});

var currentQuestionNo = 0;
var points = 0;
var rightAnswerPoints = 10;
var currentQuestion;

var questions = [
    {
        "id": "1",
        "question": "Was macht man mit einer Programmiersprache?",
        "answers": {
            "A": "Wandern",
            "B": "Kochen",
            "C": "Programmieren",
            "D": "Zeichnen"
        },
        "right": "C"
    }
];

function getRightAnswer() {
    return currentQuestion.right;
}

function showNextQuestion() {
    if (currentQuestionNo >= questions.length) {
        showEnd();
        currentQuestionNo = 0;
    }

    $(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
    $(".answer").addClass("btn-default");

    console.log("Loading Question:" + currentQuestionNo);
    currentQuestion = questions[currentQuestionNo];

    $("#qno").text(currentQuestionNo + 1);
    $("#question_text").text(currentQuestion.question);
    $("#answer_a").text(currentQuestion.answers.A);
    $("#answer_b").text(currentQuestion.answers.B);
    $("#answer_c").text(currentQuestion.answers.C);
    $("#answer_d").text(currentQuestion.answers.D);
}

function showEnd() {
    $("#endpoints").text(points);
    $("#possiblepoints").text(rightAnswerPoints * questions.length);
    $("#question").fadeOut(function () {
        $(".quiz_end").fadeIn();
    });
}