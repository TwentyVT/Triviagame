$(document).ready(function () {

    var correctcount = 0;
    var wrongcount = 0;
    var time = 0;
    var count = 30;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count = 0) {
            clearInterval(counter);
            //counter ended, do something here
            return;
        }


        $("#timer").text(count);
    }

    $('input[type=radio][name=answer1]').change(function () {

        if (this.value === "two") {

            correctcount++

            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++
            console.log("Wrong count" + wrongcount)
        }

    });

    $('input[type=radio][name=answer1]').change(function () {

        if (this.value === "two") {

            correctcount++

            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++
            console.log("Wrong count" + wrongcount)
        }
    });

    $('input[type=radio][name=answer1]').change(function () {

        if (this.value === "two") {

            correctcount++

            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++
            console.log("Wrong count" + wrongcount)
        }
    });

    $('input[type=radio][name=answer1]').change(function () {

        if (this.value === "two") {

            correctcount++

            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++
            console.log("Wrong count" + wrongcount)
        }
    });

    $('input[type=radio][name=answer1]').change(function () {

        if (this.value === "two") {

            correctcount++

            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++
            console.log("Wrong count" + wrongcount)
        }
    });
    // $('input[type=radio][name=answer1]').change(function() {

    //     if (this.value === "one") {

    //     correctcount++

    //     console.log(correctcount)
    // }

    // var question1a = $('<input type="radio" name="rbtnCount" />');
    // question1a.appendTo('#question1');

    // var question1b = $('<input type="radio" name="rbtnCount" />');
    // question1b.appendTo('#question1');

    // var question1c = $('<input type="radio" name="rbtnCount" />');
    // question1c.appendTo('#question1');

    // var question1d = $('<input type="radio" name="rbtnCount" />');
    // question1d.appendTo('#question1');

});

