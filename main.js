var canvas = new fabric.Canvas('myCanvas');

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_upadate()
{
    fabric.Image.fromURL("player.png", function(Img)
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

fabric.Image.fromURL("player.png", function(Img) {
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