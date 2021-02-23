import React from 'react';
import NavArrow from '../components/NavArrow';
// import Canvas from '../components/Canvas';

class StackPage extends React.Component{

    componentDidMount(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var x = canvas.width/2; //position x de depart de la balle
    var y = canvas.height-30; // position y de depart
    var dx = -2; // mouvement de x a chaque frame de la balle
    var dy = 2; // mouvement de y a chaque frame

    var ballRadius = 10;

    var colors = ["blue", "red", "yellow", "green"];
    var iColors = 0;

    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;

    var rightPressed = false;
    var leftPressed = false;

    var brickRowCount = 3;
    var brickColumnCount = 5;
    var brickWidth = 75;
    var brickHeight = 20;
    var brickPadding = 10;
    var brickOffsetTop = 30;
    var brickOffsetLeft = 30;

    var score = 0;
    var lives = 3;

    var gameOverNotify = document.querySelector('.game-over-notify');
    var winNotify = document.querySelector('.win-notify');
    // var interval;

    var bricks = [];
    
    for (var c=0; c < brickColumnCount; c++){
        bricks[c] = [];
        for (var r = 0; r < brickRowCount ; r++){
            bricks[c][r] = {x: 0, y: 0, status: 1};
        }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    gameOverNotify.addEventListener("click", function() {
        document.location.reload();
    });

    winNotify.addEventListener("click", function() {
        document.location.reload();
    });

    function mouseMoveHandler(e){
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 + paddleWidth/2 && relativeX < canvas.width - paddleWidth/2){
            paddleX = relativeX - paddleWidth/2;
        }
    }
    
    function keyDownHandler(e){
        //console.log(e);
        if(e.key === "Right" || e.key === "ArrowRight"){ //e.keycode ===39
            rightPressed = true;
        } else if(e.key === "Left" || e.key === "ArrowLeft"){//keycode ===37
            leftPressed = true;
        }      
    }

    function keyUpHandler(e){
        if(e.key === "Right" || e.key === "ArrowRight"){
            rightPressed = false;
        } else if( e.key === "Left" || e.key === "ArrowLeft"){
            leftPressed = false;
        }
     }

    function collisionDetection(){
        for( var c=0 ; c<brickColumnCount; c++){
            for( var r=0; r<brickRowCount; r++){
                var b = bricks[c][r]; //position d'une brick

                if(b.status===1){ //si la brick est troujours presente
                    if( x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){ //si la balle rentre dans le champ d'une brique
                        dy = -dy;
                        if(iColors === 3){
                            iColors = 0;
                        } else {
                            iColors++;
                        }
                    b.status = 0;
                    score++;
                    if(score === brickColumnCount*brickRowCount){
                        winNotify.style.display = 'flex';
                        //clearInterval(interval); 
                        return;
                    }
                    }
                }
            }
        }
    }

    function drawScore(){
        ctx.font = "16 px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20)
    }

    function drawLives(){
        ctx.font = "16 px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }

    function drawBricks(){
        for(var c = 0; c < brickColumnCount; c++){
            for(var r = 0; r < brickRowCount; r++){
                if(bricks[c][r].status === 1){
                    //on prend en compte le nombre de column, la largeur d'une brique son padding et l'offset de depart a gauche
                    var brickX = (c*(brickPadding+brickWidth)+brickOffsetLeft);
                    var brickY = (r*(brickPadding+brickHeight)+brickOffsetTop);// pareil en hauteur
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    function drawBall(){
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle =colors[iColors];
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle(){
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();
        

        //mouvement du paddle + definition des limites min et max
        if(rightPressed){
            paddleX += 7;
            if(paddleX + paddleWidth > canvas.width){
                paddleX = canvas.width-paddleWidth;
            }
        } else if(leftPressed){
            paddleX -= 7;
            if(paddleX < 0){
                paddleX = 0;
            }
        }
        

        //on verifiait la colision par rapport au centre de la balle, 
        //il faut donc ajuster le rayondans nos calcul
        if(y + dy - ballRadius < 0) { // si la nouvelle position de la balle sors en haut
            dy = -dy;
            //iColors = Math.floor(Math.random()*4);
        } else if(y + dy + ballRadius > canvas.height){ //si la nouvelle position de la balle sort en bas
            if( x > paddleX && x < paddleX + paddleWidth ){// si elle est entre le debut et la fin du paddle
                dy = -dy;
                //dy--;
                //dx++;
            } else {
                lives--;
                if(lives === 0){
                    gameOverNotify.style.display = 'flex';
                    //clearInterval(interval); 
                    
                    dx=0;
                    dy=0;

                    return;
                } else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 2;
                    dy = -2;
                    paddleX = (canvas.width-paddleWidth)/2;
                }
            }          
        }
    
        if(x + dx - ballRadius < 0 || x + dx + ballRadius > canvas.width){
            dx = -dx;
            //iColors = Math.floor(Math.random()*4);
        }

        x += dx;
        y+= dy;
        requestAnimationFrame(draw);

    } //end fonction draw


   // var interval = setInterval(draw, 10);
   draw();
    }

    render(){
        return(
            <>
                <NavArrow side="left" to="/"/>
                <NavArrow side="right" to="/projects"/>

                <canvas id="myCanvas" width="480" height="320"></canvas>
                <div className="game-over-notify">Game Over</div>
                <div className="win-notify">Congratulation!</div>
            </>
        )
    }

}

export default StackPage;