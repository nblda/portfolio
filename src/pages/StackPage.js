import React from 'react';
import NavArrow from '../components/NavArrow';
import Hero from '../components/Hero';
import { IoWarningOutline } from 'react-icons/io5';

// import Canvas from '../components/Canvas';
import image00 from '../assets/images/stack/image00.png';
import image01 from '../assets/images/stack/image01.png';
import image02 from '../assets/images/stack/image02.png';
import image10 from '../assets/images/stack/image10.png';
import image11 from '../assets/images/stack/image11.png';
import image12 from '../assets/images/stack/image12.png';
import image20 from '../assets/images/stack/image20.png';
import image21 from '../assets/images/stack/image21.png';
import image22 from '../assets/images/stack/image22.png';
import image30 from '../assets/images/stack/image30.png';
import image31 from '../assets/images/stack/image31.png';
import image32 from '../assets/images/stack/image32.png';
import image40 from '../assets/images/stack/image40.png';
import image41 from '../assets/images/stack/image41.png';
import image42 from '../assets/images/stack/image42.png';

import RKey from '../assets/images/icons/RKey.png';
import EnterKey from '../assets/images/icons/EnterKey.png';


class StackPage extends React.Component{

    componentDidMount(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    

    var x = canvas.width/2; //position x de depart de la balle
    var y = canvas.height-20; // position y de depart
    var dx = 0; //-2 mouvement de x a chaque frame de la balle
    var dy = 0; //2 mouvement de y a chaque frame
    var inGame = false;

    var ballRadius = 10;

    var colors = ["blue", "red", "yellow", "green"];
    var iColors = 0;

    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;

    var spaceBarPressed = false;
    var rightPressed = false;
    var leftPressed = false;
    var enterPressed = false;
    var restartPressed = false;

    var touching = false;

    var brickRowCount = 3;
    var brickColumnCount = 5;
    var brickWidth = 75;
    var brickHeight = 30;
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
            images[c][r] = {x: 0, y:0, status: 0, id: c+''+r};
        }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    document.addEventListener("touchmove", touchMoveHandler , false);
    document.addEventListener("touchstart", touchStartHandler , false);
    canvas.addEventListener("touchend", touchEndHandler , false);

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
            // moving = true;
        }
        // moving = false;
    }
    
    function touchMoveHandler(e){
        var relativeX = e.touches[0].clientX - canvas.offsetLeft;
        console.log(e);
        if(relativeX > 0 + paddleWidth/2 && relativeX < canvas.width - paddleWidth/2){
            paddleX = relativeX - paddleWidth/2;
            // console.log('ici');
        }
    }

    function touchStartHandler(e){
        // if(e.touches.length ===  ){
        //     touching = true;
        // }
        
        if(e.touches.length === 2){ //si on touche avec deux doigts on revele tout
            enterPressed = true;
        } else {
            enterPressed = false;
        }
        
        if(e.touches.length === 3){ //si on touche avec trois doigts on restart tout
            touching = false;
            restart();
        }



    }
    
    function touchEndHandler(e){
        if(e.touches.length===0){
            touching = false;
            spaceBarPressed = true;
        }
    }

    function keyDownHandler(e){
        // console.log(e);
        if(e.key === "Right" || e.key === "ArrowRight"){ //e.keycode ===39
            rightPressed = true;
        } else if(e.key === "Left" || e.key === "ArrowLeft"){//keycode ===37
            leftPressed = true;
        } else if (e.code === "Space"){ //spaceBarPressed
            spaceBarPressed = true;
        } else if (e.code === "Enter"){
            enterPressed = true;
        } else if (e.key === "r") {
            restartPressed = true;
        }
    }

    function keyUpHandler(e){
        if(e.key === "Right" || e.key === "ArrowRight"){
            rightPressed = false;
        } else if( e.key === "Left" || e.key === "ArrowLeft"){
            leftPressed = false;
        } else if (e.code === "Space"){ //spaceBarPressed
            spaceBarPressed = false;
        } else if(e.code === "Enter"){
            enterPressed = false;
        }  else if (e.key === "r") {
            restartPressed = false;
        }
     }

    function restart(){
        inGame = false; //etat initial
        touching = false;
        spaceBarPressed = false;
            dx=0;
            dy=0;
            x = paddleX-paddleWidth/2;
            y = canvas.height-20;
            lives = 3;
            score = 0;

            for(var c = 0; c < brickColumnCount; c++){
                for(var r = 0; r < brickRowCount; r++){
                    bricks[c][r].status = 1;
                    images[c][r].status = 0;
                }
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

    async function drawImages(){
        for(var c = 0; c < brickColumnCount; c++){
            for(var r = 0; r < brickRowCount; r++){
                if(images[c][r].status === 1){
                    //on prend en compte le nombre de column, la largeur d'une brique son padding et l'offset de depart a gauche
                    var img = images[c][r];
                    var imageX = (c*(brickPadding+brickWidth)+brickOffsetLeft);
                    var imageY = (r*(brickPadding+brickHeight)+brickOffsetTop);// pareil en hauteur
                    img.x = imageX;
                    img.y = imageY;
                    
                    // for(var imageIndex = 1; imageIndex<15; imageIndex++){
                        // console.log(img.id);
                        var image = document.getElementById(img.id);
                        // let image = await loadImage('image'+img.id);
                        console.log('image'+img.id);
                        ctx.drawImage(image, imageX, imageY, brickWidth, brickHeight);
                        // img.id++;
                    // }
                    
                }
            }
        }
    }

    // function loadImage(url) {
    //     return new Promise(r => { let i = new Image(); i.onload = (() => r(i)); i.src = url; });
    //   }

    function drawAllImages(){
        for(var c = 0; c < brickColumnCount; c++){
            for(var r = 0; r < brickRowCount; r++){
                //on prend en compte le nombre de column, la largeur d'une brique son padding et l'offset de depart a gauche
                var img = images[c][r];
                    var imageX = (c*(brickPadding+brickWidth)+brickOffsetLeft);
                    var imageY = (r*(brickPadding+brickHeight)+brickOffsetTop);// pareil en hauteur
                    img.x = imageX;
                    img.y = imageY;
                
                var image = document.getElementById(img.id);

                // let image = await loadImage('image'+img.id);
                console.log('image'+img.id);


                ctx.drawImage(image, imageX, imageY, brickWidth, brickHeight);
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

        if(!inGame){
            x = paddleX + paddleWidth/2;
            y = canvas.height-20;
        }

        // if(rightPressed && !inGame){
        //     x += 7;
        //     if(x + paddleWidth/2 > canvas.width){
        //         x = canvas.width-paddleWidth/2;
        //     }
        
        // }
        // if(leftPressed && !inGame){
        //     x -= 7;
        //     if(x-paddleWidth/2 < 0){
        //         x = paddleWidth/2;
        //     }
        // }
        
        //  console.log(touching);
        if(dx === 0 && dy === 0 && !inGame && (spaceBarPressed||touching)){
            dx = 3;
            dy = -2;
            inGame = true;
        }

        if(enterPressed){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAllImages();

            inGame = false; //etat initial
            dx=0;
            dy=0;
            x = paddleX;
            y = canvas.height-15;

        }

        if(restartPressed){
            restart();
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
            } else { // la balle est en dehors du champ du paddle
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
                    touching = false;
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

   draw();
    }

    render(){
        return(
            <>
                <NavArrow side="left" to="/"/>
                <NavArrow side="right" to="/projects"/>

                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} titleClassName="heroTitle" subTitleClassName="heroSubTitle"/>
                <div id="computer">
                    <p id="computer" className="d-flex justify-content-center parag computer">You can skip the game and see the result by pressing and holding <img src={EnterKey} alt="Enter Key" height="42px"></img></p>
                    <p className="d-flex justify-content-center warning parag computer"><IoWarningOutline size={32}/> Press <img src={RKey} alt="R Key" ></img> to restart the game before continuing your navigation!</p>
                </div>
                <div id="mobile">
                    <p id="mobile" className="d-flex justify-content-center parag mobile">You can skip the game and see the result by touching the screen with 2 fingers</p>
                    <p className="d-flex justify-content-center warning parag mobile"><IoWarningOutline size={32}/> Touch with 3 fingers outside game's windows to restart before continuing your navigation!</p>
                </div>

                <canvas id="myCanvas" width="480" height="320"></canvas>
                <div className="canvas-img" ><img id='00' src={image00} alt='image1' /></div>
                <div className="canvas-img" ><img id='01' src={image01} alt='image2' /></div>
                <div className="canvas-img" ><img id='02' src={image02} alt='image3' /></div>
                <div className="canvas-img" ><img id='10' src={image10} alt='image4' /></div>
                <div className="canvas-img" ><img id='11' src={image11} alt='image5'/></div>
                <div className="canvas-img" ><img id='12' src={image12} alt='image6' /></div>
                <div className="canvas-img" ><img id='20' src={image20} alt='image7' /></div>
                <div className="canvas-img" ><img id='21' src={image21} alt='image8' /></div>
                <div className="canvas-img" ><img id='22' src={image22} alt='image9' /></div>
                <div className="canvas-img" ><img id='30' src={image30} alt='image10' /></div>
                <div className="canvas-img" ><img id='31' src={image31} alt='image11' /></div>
                <div className="canvas-img" ><img id='32' src={image32} alt='image12' /></div>
                <div className="canvas-img" ><img id='40' src={image40} alt='image13' /></div>
                <div className="canvas-img" ><img id='41' src={image41} alt='image14' /></div>
                <div className="canvas-img" ><img id='42' src={image42} alt='image15' /></div>
                <div className="game-over-notify">Game Over</div>
                <div className="win-notify">Congratulation!</div>
            </>
        )
    }

}

export default StackPage;