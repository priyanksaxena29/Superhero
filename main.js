var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

    function new_image(get_image)
    {
        fabric.Image.fromURL(get_image, function(Img) {
            block_image_object = Img;

            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
            top:player_y,
            left:player_x
            });
            canvas.add(block_image_object);
        });
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
 keyPressed = e.keyCode;
 console.log(keyPressed);
 if (e.shiftKey == true && keyPressed == '80')
 {
  console.log("p and shift  press together")
  block_image_width = block_image_width + 10;
  block_image_height = block_image_height + 10;
  document.getElementById("current_width").innerHTML = block_image_width;
  document.getElementById("current_height").innerHTML = block_image_height;
 }
 if (e.shiftKey == true && keyPressed == '77')
 {
  console.log("m and shift is press together");
  block_image_width = block_image_width - 10;
  block_image_height = block_image_height - 10;
  document.getElementById("current_width").innerHTML = block_image_width;
  document.getElementById("current_height").innerHTML = block_image_height; 
    }

    if ('38' == keyPressed )
    {
        up();
        console.log("up")
    }
    if ('40'  == keyPressed )
    {
        down();
        console.log("down")
    }
    if ('37'  == keyPressed )
    {
        left();
        console.log("left")
    }
    if ('39' == keyPressed )
    {
        right();
        console.log("right")
    }
    if ('70'  == keyPressed )
    {
        new_image('ironman_face.png');
        console.log("f");
    }
    if ('66'  == keyPressed )
    {
        new_image('spiderman_body.png');
        console.log("b");
    }
    if ('76'  == keyPressed )
    {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if ('82'  == keyPressed )
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if ('72'  == keyPressed )
    {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
}



function up()
{
    if (player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if (player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if (player_x >=0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if (player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}