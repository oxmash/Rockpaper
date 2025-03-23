console.log("Hello World");

let humanscore = 0;
let computerscore =0;   

function getComputerChoice() {
    let mynumber = Math.random();

    if (mynumber >= 0.666) {
        return "rock";
    } else if (mynumber >= 0.3333) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let sign = prompt("What's your sign?");
    
    if (sign=="rock"|| sign=="scissors"|| sign=="paper")
    {return sign.toLowerCase();}
    
    else
    {return "error"}
    }



function playround(HumanChoice,ComputerChoice)
{

    if (HumanChoice==ComputerChoice)
    {return "Draw";}
    else if(HumanChoice=="rock")
    {
      if(ComputerChoice=="paper")
      {
        computerscore++;
        return "loss";}
      else 
      { humanscore++;
        return "win";}

    }
    else if(HumanChoice=="scissors")
        {
          if(ComputerChoice=="rock")
          {computerscore++;
            return "loss";}
          else 
          { humanscore++;
            return "win";}
    
        }
        else if(HumanChoice=="paper")
            {
              if(ComputerChoice=="scissors")
              {computerscore++;
                return "loss";}
              else 
              { humanscore++;
                return "win";}
        
            }
}


for (let i = 0  ; i < 3; i++)
{   let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playround(humanChoice,computerChoice);
    console.log(`Round ${i+1}: You chose ${humanChoice}, Computer chose ${computerChoice}. Result: ${result}`);

}


    if (humanscore>computerscore)

            {
                console.log("you win");

            }
    else if (humanscore<computerscore)
            {
                console.log("you lose");
            }
    else
    {
        console.log("draw");

    }        
     
