$('#start').on('click', function(){
    $('#start').remove();
    game.loadQuestion();

})

$(document).on('click','.answer-button',function(e){
    game.clicked(e);

}
$(document).on('click', '.answer-button',function(e){
    game.clicked(e);
})

($document).on('click', '#reset', function(){
    game.reset();
}

var questions = [{}
question: "what was the first full length CGI movie?"
answers: "A Bug's Life", "Monster's Inc.", "Toy Story", "The Lion King"],
correctAnswer: "ToyStory",
image: ""
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    
    correctAnswer: "Fred Spice",
    image:""
}, {
    question: "Which NBA team won the most titles in the 90?s"
    answers: ["New York Knicks", "Portland Trailblazer", "Los Angeles Lakers", "Chicago Bulls"],
coorectAnswer: "Chicago Bulls"],
image:""

}, {
    question: "Which group released the hit song, "Smells Like Teen Spirit"?',
    answers: ["Nirvana", "Backstreet Boys" ,"The Offspring", "No Doubt"]
,

correct answer: "Nirvana",
image:""
},{
    question: 'Which popular Disney movie featured the song, "Circle of Life?"',
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King",
    image: ""
}, {
    question: 'Finish this line from the Fresh Prince of Bel-Air them song: 
    "I whistled for a cab and when it came near, the license plate said..
    answers:["Dice","Mirror","Fresh","Cab"],
    correctAnswer: "Skeeter",
    image: ""
}, {
    question: "What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter",
    image: ""
}, {
    question: "What was the name of the principal at Bayside High in Saved By The Bell?",
    answers: ["Mr. Zhou", "Mr. Driggers","Mr. Belding", "Mr. Page"],
    correctAnswer: "Mr. Belding",
    image: ""
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("TIME UP!");
            game.timeUp();
        }

    },
    loadquestion: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').html("<span id-'counter'>30</span> Seconds</h2>");
        $('#subwrapper').html('<h2>'+question[game.currentQuestion].
            question+'</h2>');

        for(var i=0;i<questions[game.currentQuestion].answers.length,i++[{
            $('#subwrapper').append('<button class="answer-button" id="button-'+i+'"data-name="'+questions[game.currentQuestion].answers[i]+'" >'+questions[game.currentQuestion][i])
        }

    },
    nextQuestion: function(){
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadquestion();

    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++
        $('#subwrapper').html('<h2>OUT OF TIME!</h2>');
        $('#subwrapper').append('<h3>The Correct Answer Was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        if(game.currentQuestion==questions.length+1){
            setTimeout(game.results,3*1000);
        }
    
    },
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html(<h2>"ALL DONE!"</h2>);
        $('#subwrapper').append("<h3>Correct: "+game.correct+"</h3>");
        $('#subwrapper').append("<h3>incorrect: "+game.incorrect+"</h3>);
        $('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>");
        $()

        )

    }

    },

    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
             } else{
                 game.answeredIncorrectly();
             }

    },
    answeredCorrectly: function(){
        console.log("YOU GOT IT!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2>YOU GOT IT RIGHT</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else{
            setTimeout(game.nextQuestion,3*1000); 
        }
    },
    answeredIncorrectly: function(){
        console.log("WRONG!");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
        setTimeout(game.nextQuestion,3*1000);
        }

    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;

    }
}