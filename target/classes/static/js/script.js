$(function () {
    //Hauptfunktion
});

$(".start").click(function () {
    console.log("Start");
    $(".quiz_start").fadeOut(function () {
        startQuiz();
    });
});

$("#answer_a_btn").click(function () {
    selectAnswer("#answer_a_btn");
    deselectAnswer("#answer_b_btn");
    deselectAnswer("#answer_c_btn");
    deselectAnswer("#answer_d_btn");
});

$("#answer_b_btn").click(function () {
    deselectAnswer("#answer_a_btn");
    selectAnswer("#answer_b_btn");
    deselectAnswer("#answer_c_btn");
    deselectAnswer("#answer_d_btn");
});

$("#answer_c_btn").click(function () {
    deselectAnswer("#answer_a_btn");
    deselectAnswer("#answer_b_btn");
    selectAnswer("#answer_c_btn");
    deselectAnswer("#answer_d_btn");
});

$("#answer_d_btn").click(function () {
    deselectAnswer("#answer_a_btn");
    deselectAnswer("#answer_b_btn");
    deselectAnswer("#answer_c_btn");
    selectAnswer("#answer_d_btn");
});

$("#answer_commit_btn").click(function () {
    validateAnswer();
});

$("#continue_btn").click(function () {
    $("#continue_btn").hide();
    $("#answer_commit_btn").show();
    currentQuestionNo++;
    showNextQuestion();
});

$(".restart").click(function () {
    $(".quiz_end").fadeOut(function () {
        startQuiz();
    });
});

function selectAnswer(id) {
    $(id).addClass("btn-primary");
    $(id).removeClass("btn-default");
}

function deselectAnswer(id) {
    $(id).addClass("btn-default");
    $(id).removeClass("btn-primary");
}

function validateAnswer() {
    $("#answer_commit_btn").hide();
    var rightAnswer = getRightAnswer();
    var selectedAnswerId = $(".answer.btn-primary").attr("id");
    $(".answer.btn-primary").removeClass("btn-primary");
    $(".answer.btn-default").removeClass("btn-default");
    var selectedAnswer = $(".answer.btn-primary").text()[0];
    if (selectedAnswer == rightAnswer) {
        points += rightAnswerPoints;
        $("#" + selectedAnswerId).addClass("btn-success");
    } else {
        $("#" + selectedAnswerId).addClass("btn-danger");
    }
    $("#continue_btn").show();
}

function startQuiz() {
    showNextQuestion();
    $("#continue_btn").hide();
    $("#question").fadeIn();

}