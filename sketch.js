var dog,happydog,database,foodS,foodStook;

function preload()
{
  img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(30,20,200,100);

  foodStock=database.ref('food');
  foodStock.on("value",readstock);

}


function draw(){
   
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writestock(foods);
    dog.addImage(doghappy);

    function readstock(data){
      food=data.val();
  }
     function writestock(x){
      
      if(x<=0){
        x=0;
      }else{
        x=x-1;
      }

    database.ref('/').update({
      food:x
    })
   
     } 
    }
    drawsprite();
}

