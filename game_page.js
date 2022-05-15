player1_name = localStorage.getItem("name-1");
player2_name = localStorage.getItem("name-2");

player1_namescore = 0;
player2_namescore = 0;

document.getElementById("player1_name").innerHTML = player1_name +": "+ player1_namescore;
document.getElementById("player2_name").innerHTML = player2_name +": "+ player2_namescore;
document.getElementById("Q").innerHTML = "Question turn : " + player1_name;
document.getElementById("A").innerHTML = "Answer turn : " + player2_name;

function send (){
 get_word  = document.getElementById("word").value;
 word = get_word.toLowerCase();
 
 charAt1 = word.charAt(1);

 length_divided_2 = Math.floor(word.length/2);
 charAt2 = word.charAt(length_divided_2);

 lenght_minus_1 = word.length - 1
 charAt3 = word.charAt(lenght_minus_1);

 remove_charAt1 = word.replace(charAt1,"_");
 remove_charAt2 = remove_charAt1.replace(charAt2,"_");
 remove_charAt3 = remove_charAt2.replace(charAt3,"_");
 console.log(remove_charAt3);

 question_word = "<h4 id='word display'>Q."+remove_charAt3+"</h4>";
 input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
 check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
 row = question_word + input_box + check_button;
 document.getElementById("output").innerHTML = row;
 document.getElementById("word").value = "";
}
answerTurn = "player_2";
questionTurn = "player_1";
function check(){
getAnswer = document.getElementById("input_check_box").value;
answer = getAnswer.toLowerCase();

if (answer == word){
 if (answerTurn == "player_1"){
 player1_namescore = player1_namescore + 1;
 document.getElementById("player1_name").innerHTML = player1_name +": "+ player1_namescore;

 }else {
player2_namescore = player2_namescore + 1;
 document.getElementById("player2_name").innerHTML = player2_name +": "+ player2_namescore;
 
 }
 }
 if (questionTurn == "player_1"){
  questionTurn = "player_2";
  document.getElementById("Q").innerHTML = "Question turn : " + player2_name; 
 }else{
    questionTurn = "player_1";
    document.getElementById("Q").innerHTML = "Question turn : " + player1_name;
 }
 if (answerTurn == "player_1"){
    anwerTurn = "player_2";
    document.getElementById("A").innerHTML = "Answer turn : " + player2_name; 
   }else{
      answerTurn = "player_1";
      document.getElementById("A").innerHTML = "Answer turn : " + player1_name;
   }
 document.getElementById("output").innerHTML = "";
}