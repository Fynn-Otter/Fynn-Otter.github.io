//Player 1 Functions

// Adds 5 health to Player 1
function p1_add5_hp() {
    var element = document.getElementById("health_1")
    var hp = parseInt(element.textContent) + 5
    element.textContent = hp
   
   

}

// Adds 1 health to Player 1
function p1_add1_hp() {
    var element = document.getElementById("health_1")
    var hp = parseInt(element.textContent) + 1
    element.textContent = hp
    
}


// Subtracts 5 health from Player 1
function p1_sub5_hp() {
    var element = document.getElementById("health_1")
    var hp = parseInt(element.textContent) - 5
    element.textContent = hp
    
    if (hp <= 0) {
        var name = document.getElementById("name2").value
        var button1 = document.getElementsByClassName("button_Circle")
        var button2 = document.getElementsByClassName("end_Game")
        var scoreElement = document.getElementById("p2_Score")
        var score = parseInt(scoreElement.textContent)

        alert(name + " is victorious");
        score++
        scoreElement.textContent = score
        //Iterates through each button and disables them
        for (var i = 0; i < button1.length; i++) {
            button1[i].disabled = true;
        }
       for (var j = 0; j < button2.length; j++) {
            button2[j].disabled = true;
        }

    }

}

// Subtracts 1 health from Player 1
function p1_sub1_hp() {
    var element = document.getElementById("health_1")
    var hp = parseInt(element.textContent) - 1
    element.textContent = hp
    if (hp <= 0) {
        var name = document.getElementById("name2").value
        var button1 = document.getElementsByClassName("button_Circle")
        var button2 = document.getElementsByClassName("end_Game")
        var scoreElement = document.getElementById("p2_Score")
        var score = parseInt(scoreElement.textContent)

        alert(name + " is victorious");
        score++
        scoreElement.textContent = score

        //Iterates through each button and disables them
        for (var i = 0; i < button1.length; i++) {
            button1[i].disabled = true;
        }
       for (var j = 0; j < button2.length; j++) {
            button2[j].disabled = true;
        }

    }

}


function p1_add1_po(){
    var element = document.getElementById("poison_1")
    var poison = parseInt(element.textContent) + 1
    element.textContent = poison
    if (poison >= 10) {
        var name = document.getElementById("name2").value
        var button1 = document.getElementsByClassName("button_Circle")
        var button2 = document.getElementsByClassName("end_Game")
        var scoreElement = document.getElementById("p2_Score")
        var score = parseInt(scoreElement.textContent)

        alert(name + " is victorious");
        score++
        scoreElement.textContent = score

        //Iterates through each button and disables them
        for (var i = 0; i < button1.length; i++) {
            button1[i].disabled = true;
        }
       for (var j = 0; j < button2.length; j++) {
            button2[j].disabled = true;
        }
    }
}


function p1_sub1_po(){
    var element = document.getElementById("poison_1")
    var poison = parseInt(element.textContent) - 1
    //Checks if poison isnt negative
    if (poison > -1) {
        element.textContent = poison

    }    
    
}

//Player 2 Functions


// Adds 5 health to Player 2
function p2_add5_hp() {
    var element = document.getElementById("health_2")
    var hp = parseInt(element.textContent) + 5
    element.textContent = hp
   

}


// Adds 1 health to Player 2
function p2_add1_hp() {
    var element = document.getElementById("health_2")
    var hp = parseInt(element.textContent) + 1
    element.textContent = hp
    
}


// Subtracts 5 health from Player 2
function p2_sub5_hp() {
    var element = document.getElementById("health_2")
    var hp = parseInt(element.textContent) - 5
    element.textContent = hp
    if (hp <= 0) {
        var name = document.getElementById("name1").value
        var button1 = document.getElementsByClassName("button_Circle")
        var button2 = document.getElementsByClassName("end_Game")
        var scoreElement = document.getElementById("p1_Score")
        var score = parseInt(scoreElement.textContent)

        alert(name + " is victorious");
        score++
        scoreElement.textContent = score

        //Iterates through each button and disables them
        for (var i = 0; i < button1.length; i++) {
            button1[i].disabled = true;
        }
       for (var j = 0; j < button2.length; j++) {
            button2[j].disabled = true;
        }

    }

}


//Subtracts 1 health from Player 2
function p2_sub1_hp() {
    var element = document.getElementById("health_2")
    var hp = parseInt(element.textContent) - 1
    element.textContent = hp
    if (hp <= 0) {
        var name = document.getElementById("name1").value
        var button1 = document.getElementsByClassName("button_Circle")
        var button2 = document.getElementsByClassName("end_Game")
        var scoreElement = document.getElementById("p1_Score")
        var score = parseInt(scoreElement.textContent)

        alert(name + " is victorious");
        score++
        scoreElement.textContent = score

        //Iterates through each button and disables them
        for (var i = 0; i < button1.length; i++) {
            button1[i].disabled = true;
        }
       for (var j = 0; j < button2.length; j++) {
            button2[j].disabled = true;
        }
       

    }

}

function p2_add1_po(){
    var element = document.getElementById("poison_2")
    var poison = parseInt(element.textContent) + 1
    element.textContent = poison
    if (poison >= 10) {
        var name = document.getElementById("name1").value
        var button1 = document.getElementsByClassName("button_Circle")
        var button2 = document.getElementsByClassName("end_Game")
        var scoreElement = document.getElementById("p1_Score")
        var score = parseInt(scoreElement.textContent)

        alert(name + " is victorious");
        score++
        scoreElement.textContent = score

        //Iterates through each button and disables them
        for (var i = 0; i < button1.length; i++) {
            button1[i].disabled = true;
        }
       for (var j = 0; j < button2.length; j++) {
            button2[j].disabled = true;
        }

    }
}


function p2_sub1_po(){
    var element = document.getElementById("poison_2")
    var poison = parseInt(element.textContent) - 1
    //Checks if poison isnt negative
    if (poison > -1) {
        element.textContent = poison

    }    
    
}


function p1_Game_Loss(){
    var name = document.getElementById("name2").value
    var button1 = document.getElementsByClassName("button_Circle")
    var button2 = document.getElementsByClassName("end_Game")
    var scoreElement = document.getElementById("p2_Score")
    var score = parseInt(scoreElement.textContent)

    alert(name + " is victorious");
    score++
    scoreElement.textContent = score

    //Iterates through each button and disables them
    for (var i = 0; i < button1.length; i++) {
        button1[i].disabled = true;
    }
   for (var j = 0; j < button2.length; j++) {
        button2[j].disabled = true;
    }
}

function p2_Game_Loss(){
    var name = document.getElementById("name1").value
    var button1 = document.getElementsByClassName("button_Circle")
    var button2 = document.getElementsByClassName("end_Game")
    var scoreElement = document.getElementById("p1_Score")
    var score = parseInt(scoreElement.textContent)

    alert(name + " is victorious");
    score++
    scoreElement.textContent = score

    //Iterates through each button and disables them
    for (var i = 0; i < button1.length; i++) {
        button1[i].disabled = true;
    }
    for (var j = 0; j < button2.length; j++) {
        button2[j].disabled = true;
    }
}

// Resets Health,Poison and reactivates Buttons
function reset_Game() {
    var button1 = document.getElementsByClassName("button_Circle")
    var button2 = document.getElementsByClassName("end_Game")

    document.getElementById("health_1").textContent = "20";
    document.getElementById("poison_1").textContent = "0";
    document.getElementById("health_2").textContent = "20";
    document.getElementById("poison_2").textContent = "0";

    for (var i = 0; i < button1.length; i++) {
        button1[i].disabled = false;
    }
    for (var j = 0; j < button2.length; j++) {
        button2[j].disabled = false;
    }

}