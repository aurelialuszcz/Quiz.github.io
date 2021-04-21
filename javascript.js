
var point=0,score=0;
     function q1(){
       if(document.getElementById("t_name").value=="")
         {
           alert("Please enter your name!");
         }
      else{ 
      document.getElementById("form").style.display='none';
      document.getElementById("quiz").style.display='block';
       document.getElementById("quiz1").style.display='block';
      }
     }

     function hint1() {
        document.getElementById("hint1").innerHTML = "The oldest book out of those four.";
     }

     function q2(){
        
       document.getElementById("quiz1").style.display='none';
       document.getElementById("quiz2").style.display='block';
       if(document.getElementById("moses").selected==true){
         point++;
         alert("Correct!");
     } 
     else {
         alert("NO!");
     }
     }

     function hint2() {
        document.getElementById("hint2").innerHTML = "Think Austin Powers.";
     }

      function q3(){
       
       document.getElementById("quiz2").style.display='none';
       document.getElementById("quiz3").style.display='block';
         if(document.getElementById("mike").checked==true){
         point++;
         alert("Correct!");
         } 
         else {
             alert("WOW, no...")
         }    
     }

     function hint3() {
        document.getElementById("hint3").innerHTML = "Starts with a 'c'.";
     }

      function q4(){
        
       document.getElementById("quiz3").style.display='none';
       document.getElementById("quiz4").style.display='block';
         if(document.getElementById("canberra").checked==true){
         point++;
         alert("Correct!");
         }
         else {
             alert("EEEEK no");
         }
     }

     function hint4() {
        document.getElementById("hint4").innerHTML = "X Æ A-12";
     }

      function q5(){
       
       document.getElementById("quiz4").style.display='none';
       document.getElementById("quiz5").style.display='block';
          if(document.getElementById("elon").checked==true){
         point++;
         alert("Correct!");
          } 
          else {
              alert("It's that man with firethrowers and tesla and stuff!")
          }
     }

     function hint5() {
        document.getElementById("hint5").innerHTML = "It's the place a lot of students travel to.";
     }

      function q6(){
       
       document.getElementById("quiz5").style.display='none';
       document.getElementById("quiz6").style.display='block';
          if(document.getElementById("holland").checked==true){
         point++;
         alert("Correct!");
          } 
          else {
              alert("It's the country that's famous for tulip fields!")
          }
     }

     function hint6() {
        document.getElementById("hint6").innerHTML = "It's the one with the active volcano.";
     }

      function q7(){
        
       document.getElementById("quiz6").style.display='none';
       document.getElementById("quiz7").style.display='block';
         if(document.getElementById("tenerife").selected==true){
         point++;
         alert("Correct!");
         }
         else {
             alert("You're wrong but it'd be nice to go on a holiday there!")
         }
     }

     function hint7() {
        document.getElementById("hint7").innerHTML = "It's the colour of love!";
     }

      function q8(){
        
       document.getElementById("quiz7").style.display='none';
       document.getElementById("quiz8").style.display='block';
         if(document.getElementById("red").checked==true){
         point++;
         alert("Correct!");
          
     }
     else {
         alert("NO :(");
     }
      }

      function hint8() {
        document.getElementById("hint8").innerHTML = "Piña colada!";
     }

      function q9(){
       
       document.getElementById("quiz8").style.display='none';
       document.getElementById("quiz9").style.display='block';
          if(document.getElementById("pineapple").checked==true){
         point++;
          alert("Correct!");
     }
     else {
         alert("Nope!");
     }
      }

      function hint9() {
        document.getElementById("hint9").innerHTML = "He's from Douglas!";
     }

      function q10(){
        
       document.getElementById("quiz9").style.display='none';
       document.getElementById("quiz10").style.display='block';
        if(document.getElementById("cillian").value=="a" || document.getElementById("cillian").value=="A"){
         point++;
         alert("Correct!");
         }
         else {
             alert("Tis that Irish fella!");
         }
         
     }

     function hint10() {
        document.getElementById("hint10").innerHTML = "It's not Irish!";
     }

      function done(){
        
       document.getElementById("quiz10").style.display='none';
       document.getElementById("complete").style.display='block';
        if(document.getElementById("india").checked==true){
         point++;
         alert("Correct!");
       }
       else {
           alert("You're wrong and you don't deserve one!");
       }
     }
    function result(){
        
      /*point=point.toFixed(2);*/
      
      document.getElementById("complete").style.display='none'; document.getElementById("result").style.display='block';
      document.getElementById("score").innerHTML="You got " + point +"/10!";
      var n=document.getElementById("t_name").value;
      document.getElementById("score_display").innerHTML=n +", you have scored "+point*10+"%.";

        if (point == 0) {
            document.getElementById("message").innerHTML="LOSER! BOOOOOOO!";
        }
        else if (point < 5) {
            document.getElementById("message").innerHTML="Meh, you could do better than this...";
        }
        else if (point >= 5 && point <= 8) {
            document.getElementById("message").innerHTML="Study a little more!";
        }
        else {
            document.getElementById("message").innerHTML="YOU'RE A GENIUS!";
        }

    }