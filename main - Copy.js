var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var player_image = "";

function player_upadate()
{
    fabric.Image.fromURL("https://postimg.cc/ns3qHXnH", function(Img)
    {
        player_object = Img;

        player_object.scaleTowidth(150);
        player_object.scaleToheight(140);
        player_object.set({
        top:player_y,
        left:player_x
        })
        canvas.add(player_object);
    });
}

fabric.Image.fromURL("https://postimg.cc/Mnhm6g03", function(Img) {
    function new_image(get_image)
    {
        fabric.Image.fromURL(get_image, function(Img) {
            block_image_object = Img;

            block_img_object.scaleTowidth(block_image_width);
            block_img_object.scaleToheight(block_image_height);
            block_img_object.set({
            top:player_y,
            left:player_x
            });
            canvas.add(block_image_object);
        })
    }
})

window.addEventListener("keypress", my_keydown);

function my_keydown(e)
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (e.shiftKey == true && KeyPressed == '80')
    {
        console.log("shift and p is pressed together")
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && KeyPressed == '77')
    {
      console.log("shift and m is pressed together");
      block_image_width = block_image_width - 10;
      block_image_height = block_image_height - 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height; 
    }

    if ('38' == KeyPressed )
    {
        up();
        console.log("up")
    }
    if ('40'  == KeyPressed )
    {
        down();
        console.log("down")
    }
    if ('37'  == KeyPressed )
    {
        left();
        console.log("left")
    }
    if ('39' == KeyPressed )
    {
        right();
        console.log("right")
    }
    if ('70'  == KeyPressed )
    {
        new_image('ironman_face.png');
        console.log("f");
    }
    if ('66'  == KeyPressed )
    {
        new_image('spider_body.png');
        console.log("b");
    }
    if ('76'  == KeyPressed )
    {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if ('82'  == KeyPressed )
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if ('72'  == KeyPressed )
    {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
}