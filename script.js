/*              *\
 //------------\\
||  Constantes  ||
 \\------------//
\*              */

var orientation = {
  
}


/*         *\
 //-------\\
||  Class  ||
 \\-------//
\*         */

function Cell(x,y){
  this.x = x;
  this.y = y;
  this.getPos = function(){
    return [this.x,this.y];
  };
}

function Ammo(x,y,degats){
  Cell.call(this,x,y);
  this.degats = degats;
}

function Weapons(x,y,degats,portee){
  Ammo.call(this,x,y,degats);
  this.portee = portee;
}

function Mob(x,y,orientation,pv){
  Cell.call(this,x,y);
  this.orientation = orientation;
  this.pv = pv;
}

function Player(x,y,orientation,pv){
  Mob.call(this,x,y,orientation,pv);
  this.munition = null;
  this.arme = null;
  
  // Methodes
  this.avancer= function(){
    switch(this.orientation){
      case NORD:
        this.y++;
        break;
      case SUD:
        this.y--;
        break;
      case EST:
        this.x++;
        break;
      case OUEST:
        this.x--;
        break;
    }
  }
  
  this.sauter = function(){
    switch(this.orientation){
      case NORD:
        this.y = this.y+2;
        break;
      case SUD:
        this.y = this.y-2;
        break;
      case EST:
        this.x = this.x+2;
        break;
      case OUEST:
        this.x = this.x-2;
        break;
    }
  }
  
  this.pivoterG = function(){
    if( this.orientation == NORD )
      this.orientation = OUEST;
    else 
      this.orientation = (this.orientation-1)%4;
  }
  
  this.pivoterD = function(){
    this.orientation = (this.orientation+1)%4
  }
}

function test(){
  alert("Test");
}
