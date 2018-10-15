$(document).ready(function () {

    var correctcount = 0;
    var wrongcount = 0;
    var count = 30;
    var counter = setInterval(timer, 1000);
    var resetbutton = $("<button>Reset</button>").click(reset)


    function timer() {

        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            $("#rightcount").text("You got " + correctcount + " right!")
            $("#wrongcount").text("You got " + wrongcount + " wrong!")
            $("#reset").append(resetbutton)
        }


        $("#timer").text("Time left " + count);
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

    $('input[type=radio][name=answer2]').change(function () {

        if (this.value === "two") {

            correctcount++



            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++



            console.log("Wrong count" + wrongcount)
        }
    });

    $('input[type=radio][name=answer3]').change(function () {

        if (this.value === "two") {

            correctcount++


            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++

     

            console.log("Wrong count" + wrongcount)
        }
    });

    $('input[type=radio][name=answer4]').change(function () {

        if (this.value === "two") {

            correctcount++

  


            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++


            console.log("Wrong count" + wrongcount)
        }
    });

    $('input[type=radio][name=answer5]').change(function () {

        if (this.value === "two") {

            correctcount++

    

            console.log(correctcount)
        }
        else if (this.value !== "two") {
            wrongcount++


            console.log("Wrong count" + wrongcount)
        }
    });

    function reset() {
        correctcount = 0;
        wrongcount = 0;
        count = 30;
        counter = setInterval(timer, 1000);
        resetbutton = $("<button>Reset</button>").click(reset)
        $('input[name="answer1"]').prop('checked', false);
        $('input[name="answer2"]').prop('checked', false);
        $('input[name="answer3"]').prop('checked', false);
        $('input[name="answer4"]').prop('checked', false);
        $('input[name="answer5"]').prop('checked', false);
        $("#rightcount").empty()
        $("#wrongcount").empty()
        $("#reset").empty()



    }
});

