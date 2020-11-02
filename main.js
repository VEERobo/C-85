canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array=["mars 1.jpg", "mars 2.jpg", "mars 3.jpg", "mars 4.jpg"]
random_number=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=nasa_mars_images_array[random_number];
console.log("background image="+background_image);
rover_image="rover.png";
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;
    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover;
    rover_imageTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
}
function up(){
    if(rover_y >=0){
        rover_y= rover_y-10;
        console.log("up arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <=510){
        rover_y= rover_y+10;
        console.log("down arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x= rover_x-10;
        console.log("left arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <=600){
        rover_x= rover_x+10;
        console.log("right arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
