import React from 'react';
import NavArrow from '../components/NavArrow';
// import Canvas from '../components/Canvas';
import image1 from '../assets/images/image1.png';

class StackPage extends React.Component{

    componentDidMount(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var x = canvas.width/2; //position x de depart de la balle
    var y = canvas.height-30; // position y de depart
    var dx = 0; //-2 mouvement de x a chaque frame de la balle
    var dy = 0; //2 mouvement de y a chaque frame
    var inGame = false;

    var ballRadius = 10;

    var colors = ["blue", "red", "yellow", "green"];
    var iColors = 0;

    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;

    var spaceBar = false;
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
    var images = [];
    
    for (var c=0; c < brickColumnCount; c++){
        bricks[c] = [];
        images[c] = [];
        for (var r = 0; r < brickRowCount ; r++){
            bricks[c][r] = {x: 0, y: 0, status: 1}; //status = 'a afficher?' par defaut on affichera les briques et pas les images 
            images[c][r] = {x: 0, y:0, status: 0};
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
        console.log(e);
        if(e.key === "Right" || e.key === "ArrowRight"){ //e.keycode ===39
            rightPressed = true;
        } else if(e.key === "Left" || e.key === "ArrowLeft"){//keycode ===37
            leftPressed = true;
        } else if (e.code === "Space"){ //spacebar
            spaceBar = true;
        }
    }

    function keyUpHandler(e){
        if(e.key === "Right" || e.key === "ArrowRight"){
            rightPressed = false;
        } else if( e.key === "Left" || e.key === "ArrowLeft"){
            leftPressed = false;
        } else if (e.code === "Space"){ //spacebar
            spaceBar = false;
        }
     }

    function collisionDetection(){
        for( var c=0 ; c<brickColumnCount; c++){
            for( var r=0; r<brickRowCount; r++){
                var b = bricks[c][r]; //position d'une brick
                var img = images[c][r]; //position d'une image

                if(b.status===1){ //si la brick est troujours presente
                    if( x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){ //si la balle rentre dans le champ d'une brique
                        dy = -dy;
                        if(iColors === 3){
                            iColors = 0;
                        } else {
                            iColors++;
                        }
                    b.status = 0;
                    img.status = 1;
                    score++;
                    if(score === brickColumnCount*brickRowCount){
                        winNotify.style.display = 'flex';
                        inGame = false;
                        dx = 0;
                        dy = 0;
                        x = paddleX; //position x de depart de la balle
                        y = canvas.height-30; // position y de depart
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

    function drawImages(){
        for(var c = 0; c < brickColumnCount; c++){
            for(var r = 0; r < brickRowCount; r++){
                if(images[c][r].status === 1){
                    //on prend en compte le nombre de column, la largeur d'une brique son padding et l'offset de depart a gauche
                    var imageX = (c*(brickPadding+brickWidth)+brickOffsetLeft);
                    var imageY = (r*(brickPadding+brickHeight)+brickOffsetTop);// pareil en hauteur
                    images[c][r].x = imageX;
                    images[c][r].y = imageY;
                    
                    var image = document.getElementById('test');

                    ctx.drawImage(image, imageX, imageY, brickWidth, brickHeight);
                }
            }
        }
    }

    function drawBall(){
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = colors[iColors];
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
        drawImages();
        drawPaddle();
        drawBall();
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

        if(rightPressed && !inGame){
            x += 7;
            if(x + paddleWidth/2 > canvas.width){
                x = canvas.width-paddleWidth/2;
            }
        
        }
        if(leftPressed && !inGame){
            x -= 7;
            if(x-paddleWidth/2 < 0){
                x = paddleWidth/2;
            }
        }
        
        if(dx === 0 && dy === 0 && !inGame && spaceBar){
            dx = -3;
            dy = 2;
            inGame = true;
        }

        //on verifiait la colision par rapport au centre de la balle, 
        //il faut donc ajuster le rayondans nos calcul
        if(y + dy - ballRadius < 0) { // si la nouvelle position de la balle sors en haut
            dy = -dy;
            //iColors = Math.floor(Math.random()*4);
        } else if(y + dy + ballRadius > canvas.height){ //si la nouvelle position de la balle sort en bas
            if( x > paddleX && x < paddleX + paddleWidth ){// si elle est entre le debut et la fin du paddle
                switch(true){
                    case x < paddleX+paddleWidth/3 : //contact dans le premier tier du paddle
                        dy = -dy;
                        dx = -Math.abs(dx);
                        console.log("contact premier tier");
                        break;
                    case x > paddleX + paddleWidth/3 && x < paddleX + 2*paddleWidth/3: //contact au mileu
                        dy = -dy;
                        console.log("contact milieu");
                        break;
                    case x > paddleX + 3*paddleWidth/4: //contact dans le dernier tier 
                        dy = -dy;
                        dx = Math.abs(dx);
                        console.log("contact dernier tier");
                        break;
                    default:
                        dy = -dy;
                        break;
                }
                
                //dy--;
                //dx++;
            } else {
                lives--;
                if(lives === 0){
                    gameOverNotify.style.display = 'flex';
                    //clearInterval(interval); 
                    
                    inGame = false;
                    dx=0;
                    dy=0;
                    x = paddleX;
                    y = canvas.height-30;

                    return;
                } else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 0;
                    dy = 0;
                    inGame = false;
                    paddleX = (canvas.width-paddleWidth)/2;
                    x = paddleX;
                    y = canvas.height-30;
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
                <div className="canvas-img" ><img id='test' src={image1} alt='imgTest' /></div>
                <div className="game-over-notify">Game Over</div>
                <div className="win-notify">Congratulation!</div>
            </>
        )
    }

}

export default StackPage;