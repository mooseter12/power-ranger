
//canvas=document.getElementById('myCanvas');
var canvas=new fabric.Canvas(myCanvas);
ctx=canvas.getContext("2d")
 var block_y=1;
 var block_x=1;

var block_image_width = 350;
var block_image_height = 410;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set( {
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	if(keyPressed == '82' || keyPressed == '114') // add appropriate keycode
	{
		//uploadrr1_png();
		block_x = 1;
		new_image("rr1.png");
		console.log("r")
	}
	if(keyPressed == '71'|| keyPressed == '103')
	{
		//gr.png()
		block_x = 250;
		new_image("gr.png");
        console.log("g");
	}
	
	if(keyPressed == '89' || keyPressed == '121')
	{
		//yr.png()
		block_x = 400;
		new_image("yr.png");
        console.log("y");
	}
	if(keyPressed == '80' || keyPressed == '112')
	{
		block_x = 650;
		new_image("pr.png");
		console.log("p");
	}
	if(keyPressed == '66' || keyPressed == '98')
	{
		//br.png()
		block_x = 750;
		new_image("br.png");
        console.log("b");
	}
	
}

