var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_upadate()
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
        new_image('spider_body.png');
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