var div1=document.createElement("div")
    div1.className="container"
var div2=document.createElement("div")
    div2.className="parent-div d-flex align-items-center justify-content-center"
    div2.style.height="600px"
    div3=document.createElement("div")
    div3.className="child-div d-flex flex-column"
var heading=document.createElement("div")
    heading.className="heading m-2 p-2 text-primary"
    heading.innerHTML="<h1>QUICK QUIZ</h1>"
div3.append(heading)
var game=document.createElement("a")
    game.className="btn btn-primary m-2 p-2"
    game.href="game.html"
    game.innerHTML="PLAY"
div3.append(game)
var highscores=document.createElement("a")
    highscores.className="btn btn-primary m-2 p-2"
    highscores.href="highscores.html"
    highscores.innerHTML="High Scores"
div3.append(highscores)
div2.appendChild(div3)
div1.append(div2)
document.body.style.backgroundImage="url(background.jpg)"
document.body.append(div1)
    
    