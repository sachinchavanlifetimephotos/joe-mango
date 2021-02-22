class Stone{ 
   constructor(x,y,width,height,angle){ 
       var Stone_options={ 
      isStatic:false, 
      restitution:0, 
      friction:1, 
      density:1.2 
       } 
       this.width=width; 
       this.height=height; 
       this.image=loadImage("sprites/base.png"); 
       World.add(world,this.body); 
   } 

} 


