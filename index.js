$(document).ready(function() {
    //Adding Inputted Numbers
    $(".number").click(function() {
        if (!$(this).hasClass("not")) {
            if ($("#inputted-numbers").val() == 0)
                $("#inputted-numbers").val($(this).text());
            else
                $("#inputted-numbers").val($("#inputted-numbers").val() + $(this).text());
        }
    });

    //Delete
    $('#delete').click(function() {
        let value = $("#inputted-numbers").val();
        if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
            $("#inputted-numbers").val(value.slice(0, value.length - 1));
        if (value.length == 1)
            $("#inputted-numbers").val("0");
    });
});

// All Clear
$("#clear").click(function() {
    $("#inputted-numbers").val("0");
    $("#solution").val("0");
});

//Evaluation
$("#equal").click(function() {
    let result;
    try {
        result = (eval(($("#inputted-numbers").val())));
    } catch (error) {
        if (error instanceof SyntaxError) {
            alert("Error! Resetting values.");
            $("#inputted-numbers").val("0");
            $("#solution").val("0");
        }
        if (error instanceof TypeError) {
            alert("Error! Resetting values.");
            $("#inputted-numbers").val("0");
            $("#solution").val("0");
        }
    }

    // Append if the result is correct
    $("#solution").val(result);
    $("#inputted-numbers").val("0");
});