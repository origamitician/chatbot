var cookieCount = 0;
var randomFacts = ['Did you know that 30% of the world - 3 out of 10 people are overweight or obese?', 'More than 33% of the adults in the United States are obese.', 'About 2 in 3 - 66% of adults in the United States are considered overweight.','Obesity affects approximately 1 in 6 children in the United States.', 'Obesity is the cause of more that 60 different diseases.', 'Obesity causes more deaths than being underweight; it is one of the top 5 leading causes of death in the world.', 'Overweight or obese individuals missed 56% more days at work than normal individuals do.', 'All the states currently have an obesity rate of more than 22%.'];

var msgCnt = 1;
var usrMsgCnt = 0;
var userHistory = [];
var status = 'restricted';
var calculation = 0;
var level = 1;
var userHeight = '';
var userWeight = '';

function createUserChat(){
  var input = document.getElementById('answer').value;
  var newAnswer = document.createElement('p');
  newAnswer.className = 'userChat';
  newAnswer.innerHTML = input;
  document.getElementById('conversation').appendChild(newAnswer);
  usrMsgCnt+= 1;
  msgCnt += 1;

  var botAnswerReturn = '';
  
  userHistory.push(' | ' + usrMsgCnt + '. ' + input);
  var cleanList = userHistory.toString();
  
  if (input == 'C' || input == 'c'){
    calculation = 0;
    botAnswerReturn = 'Here is a list of responses: || C: Show all commands | !salad: Serves a salad for healthy eating (idk what it will do) | !about: Shows my bio | !history: Shows your chat history | !random: Tells a random startling fact about obesity | !calculate: calculate your BMI (body mass index)';
  }
  else if (input == '!about' || input == '!About'){
    calculation = 0;
    botAnswerReturn = 'I\'m a bot created by highschooler Micaiah Cape who is taking a coding class. I enjoy being a bot and am happy to listen to your commands. I was created about 1 year ago, and I was recognized globally as the quickest responding bot in the whole world. You can call me Chatbot.';
  }
  else if (input == '!salad' || input == '!Salad'){
    calculation = 0;
    cookieCount += 4357928375;
    botAnswerReturn = 'I\'m glad you are eating healthy! Here is a salad. 🥗' + (' ' + cookieCount + ' salads have been served! =)');
  }
  else if (input == '!chatbot' || input == '!Chatbot'){
    calculation =0 ;
    botAnswerReturn = 'What is it? I was just sleeping and you disturbed me.';
  }
  else if (input == '!random' || input == '!Random'){
    calculation = 0;
    botAnswerReturn = randomFacts[Math.floor((Math.random() * randomFacts.length) + 1) - 1];
  }
  else if (input == 'lorem' || input == 'Lorem'){
    calculation = 0;
    botAnswerReturn = 'AOOOOOOOOOOOOOOOOOO^RUUBKTJYERVHC$W^VJNWRTCNVENTJECRSEWEHRDFNGSDBW$TRBDBETRSDFABREHMNEYRBGSD!!!!!!! How did u know my name?'
  }
  else if (input == '!history' || input == '!History'){
    calculation = 0;
    botAnswerReturn = cleanList;
  }
  else if (input == '!calculate' || input == '!Calculate'){
    calculation = 1;
    level = 0;
    var botResponse = document.createElement('p');
    botResponse.className = 'botChat';
    botResponse.innerHTML = 'Please enter your height in inches.';
    document.getElementById('conversation').appendChild(botResponse);
  }
  else{
    if (calculation === 0){
      calculation = 0;
      botAnswerReturn = 'Sorry, I could not comprehend that. Please try again.'
    }else{
      level++;
      
      if (level === 1){
        userHeight = input;
        var botResponse = document.createElement('p');
        botResponse.className = 'botChat';
        botResponse.innerHTML = 'The height that you entered was ' + userHeight + ' inches.' + ' Please enter your weight in pounds.';
        document.getElementById('conversation').appendChild(botResponse);
      }
      else if (level === 2){
        userWeight = input;
        var userBMI = (703 * userWeight) / (Number(userHeight) * Number(userHeight));
        var botResponse = document.createElement('p');
        botResponse.className = 'botChat';
        if (userBMI == 'NaN'){
          botResponse.innerHTML = 'Oops, looks like you entered in something incorrectly.';
          document.getElementById('conversation').appendChild(botResponse);
        }else{
          botResponse.innerHTML = 'Your BMI was ' + userBMI;
          document.getElementById('conversation').appendChild(botResponse);
        }
        
        //alert(userBMI);
        
        if (Number(userBMI) < 15){
          botAnswerReturn = 'Uh oh, you are severely underweight.'
        }
        else if (Number(userBMI) >= 15 && Number(userBMI) < 18.5){
          botAnswerReturn = 'You are underweight. A few more pounds will do the trick!'
        }
        else if (Number(userBMI) >= 18.5 && Number(userBMI) < 24.5){
          botAnswerReturn = 'You are keeping a healthy weight! Great job on maintaining your health! Keep your body the way it is currently.'
        }
        else if (Number(userBMI) >= 24.5 && Number(userBMI) < 30){
          botAnswerReturn = 'You are overweight. However, youre almost to a healthy weight! Keep losing that body fat!'
        }
        else if (Number(userBMI) >= 30){
          botAnswerReturn = 'Uh oh, it seems you are obese.'
        }
        msgCnt += 1;
        
        calculation = 0;
        
      }
    
    //alert(level);
    //alert(userHeight);
    //alert(userWeight);
    //alert(userBMI);
    }
  }
  
  if (calculation === 0){
    var botResponse = document.createElement('p');
  botResponse.className = 'botChat';
  botResponse.innerHTML = botAnswerReturn;
  document.getElementById('conversation').appendChild(botResponse);
    
  }
  msgCnt += 1;
  //alert(calculation);
  document.getElementById('answer').value = '';
  
  document.getElementById('msgCount').innerHTML = msgCnt + ' total messages';
}

document.getElementById('submit').addEventListener('click', createUserChat);