var assignmentPercent = .50
var grpProjectPercent = .1
var quizPercent = .1
var midtermPercent = .1
var finalPercent = .1
var intexPercent = .1


$("#calculate").click(function () {
    
    var assignments = parseInt($("#assignments").val());
    var groupProject = parseInt($("#grpProject").val());
    var quizzes = parseInt($("#quizzes").val());
    var midterm = parseInt($("#midterm").val());
    var final = parseInt($("#final").val());
    var intex = parseInt($("#intex").val());
    var final_grade = assignments * assignmentPercent
        + groupProject * grpProjectPercent + quizzes * quizPercent
        + midterm * midtermPercent + final * finalPercent
        + intex * intexPercent;
    final_grade = Math.round(final_grade * 10) / 10;
    $(".score").html(final_grade);

    if (final_grade >= 94) {
        $(".letter_grade").html("A");
    }
    else if (final_grade >= 90) {
        $(".letter_grade").html("A-");
    }
    else if (final_grade >= 87) {
        $(".letter_grade").html("B+");
    }
    else if (final_grade >= 84) {
        $(".letter_grade").html("B");
    }
    else if (final_grade >= 80) {
        $(".letter_grade").html("B-");
    }
    else if (final_grade >= 77) {
        $(".letter_grade").html("C+");
    }
    else if (final_grade >= 74) {
        $(".letter_grade").html("C");
    }
    else if (final_grade >= 70) {
        $(".letter_grade").html("C-");
    }
    else if (final_grade >= 67) {
        $(".letter_grade").html("D+");
    }
    else if (final_grade >= 64) {
        $(".letter_grade").html("D");
    }
    else if (final_grade >= 60) {
        $(".letter_grade").html("D-");
    }
    else {
        $(".letter_grade").html("E");
    }
})


$("#btnSend").click(function () {
    alert("From: " + $("#textFrom").val() +
        ", Subject: " + $("textSubject").val() +
        ", Message: " + $("textMessage").val());
    $("#picganderson").fadeToggle();
})

$("#mytextfield").on('keyup', function () {
    var totalcost = $("#totaldays").val() * $(this).val()
    $(".total_cost").html(totalcost);
})
