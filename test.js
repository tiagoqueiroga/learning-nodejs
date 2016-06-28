var width = 20;
var height = 20;
var game_over= false;



function draw(){
	var screen = "";

	for (i = 0; i < width; i++) { screen += "#";}
	
	for (i = 0; i < width; i++) {
		for(j = 0 < height; j++){
			if(i == 0 || i == width){
				screen += '#';
			}
			else{
				screen += " ";
			}
		}
	}

	for (i = 0; i < width; i++) { screen += "#";}

	

	console.log(screen);
}


while(!game_over){
	draw();
}







