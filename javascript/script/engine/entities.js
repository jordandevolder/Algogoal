

/***********************/
/*                     */
/*       Entity        */
/*                     */
/***********************/
function Entity(x,y,reachable, gatherable, freecell, typeId){
    this.x = x;
    this.y = y;
    this.typeId = typeId;
    this.reachable = reachable;
    this.gatherable = gatherable;
    this.isFreeCell = freecell;
}

/***********************/
/*                     */
/*       FreeCell      */
/*                     */
/***********************/

function FreeCell(x,y,typeId){
    Entity.call(this,x,y,false, false,true,typeId)
}

/***********************/
/*                     */
/*         Road        */
/*                     */
/***********************/

function Road(x,y, typeId){
    Entity.call(this,x,y, true, false,true,typeId);
}

/***********************/
/*                     */
/*        River        */
/*                     */
/***********************/

function River(x,y, typeId){
    Entity.call(this,x,y, false, false,true,typeId);
}

/***********************/
/*                     */
/*    WaterWalkable    */
/*                     */
/***********************/

function WaterWalkable(x,y,typeId) {
    Entity.call(this, x, y, true, false, false, typeId);
}

/***********************/
/*                     */
/*         Goal        */
/*                     */
/***********************/

function Goal(x,y, typeId){
    Entity.call(this,x,y, true, false,true,typeId);
}

/***********************/
/*                     */
/*       Obstacle      */
/*                     */
/***********************/

function Obstacle(x,y, typeId){
    Entity.call(this,x,y, false, false,false,typeId);
}

/***********************/
/*                     */
/*  ObstacleUnmovable  */
/*                     */
/***********************/

function ObstacleUnmovable(x,y,typeId){
    Entity.call(this,x,y,false, false, false, typeId);
}

/***********************/
/*                     */
/*         Rock        */
/*                     */
/***********************/

function Rock(x,y, typeId){
    Entity.call(this,x,y, false, false,false,typeId);
}

/***********************/
/*                     */
/*         Ammo        */
/*                     */
/***********************/

function Ammo(x,y,typeId){
    Entity.call(this,x,y, true, true, false,typeId);
}

/***********************/
/*                     */
/*         Goal        */
/*                     */
/***********************/

function Gold(x,y,typeId){
    Entity.call(this,x,y, true, true, false,typeId);
}

/***********************/
/*                     */
/*        Weapon       */
/*                     */
/***********************/

function Weapon(x,y,damage,range,typeId){
    Entity.call(this,x,y, true, true, false, typeId);
    this.range = range;
    this.damage = damage;
}

/***********************/
/*                     */
/*        Monster      */
/*                     */
/***********************/

function Monster(x,y,orientation,hp,typeId){
    Entity.call(this,x,y,false, false, false, typeId);
    this.orientation = orientation;
    this.hp = hp;
}

Monster.prototype.getDamaged = function(quantity){
    this.hp = this.hp - quantity;
    if(this.hp < 0){
        hp = 0;
    }
};

/***********************/
/*                     */
/*        Player       */
/*                     */
/***********************/

function Player(x,y,orientation,hp){
    Entity.call(this,x,y,false, false, false);
    this.orientation = orientation;
    this.ammoQuantity = 0;
    this.weapon = undefined;
    this.hp = hp;
    this.dx = 0;
    this.dy = 0;
}

Player.prototype.updateSpeedDirection = function(){
    switch(this.orientation)
    {
        case OrientationType.UP:
            this.dx = -1;
            this.dy = 0;
            break;
        case OrientationType.DOWN:
            this.dx = 1;
            this.dy = 0;
            break;
        case OrientationType.RIGHT:
            this.dx = 0;
            this.dy = 1;
            break;
        case OrientationType.LEFT:
            this.dx = 0;
            this.dy = -1;
            break;
    }
};

Player.prototype.leftRotate = function (){
    if(this.orientation == OrientationType.UP){
        console.log("block");
        this.orientation = 3;
        this.updateSpeedDirection();
    }
    else{
        this.orientation = (this.orientation-1);
        this.updateSpeedDirection();
    }
};

Player.prototype.rightRotate = function(){
    this.orientation = (this.orientation+1)%4;
    this.updateSpeedDirection();
};

Player.prototype.move = function(){
    if(!physic.willCollided(map,this,1)){
        //game.isWorking = false;
        return;
    }
    this.x += this.dx;
    this.y += this.dy;
};


Player.prototype.jump = function(){
    if(!physic.willCollided(map,this,2)){
        //game.isWorking = false;
        return;
    }
    this.x += 2*this.dx;
    this.y += 2*this.dy;
};

Player.prototype.collect = function(){
    if(!physic.ableToGather(map,this)){
        return
    }

    switch(map.map[player.x][player.y].typeId)
    {
        case EntityType.AMMO:
            this.ammoQuantity+=3;
            map.map[player.x][player.y] = factoryTile.constructTile(EntityType.ROAD, player.x, player.y);
            hasCollectArrow = true;
            break;
        case EntityType.GOLD:
            hasCollectGold = true;
            break;
        case EntityType.WEAPON:
            this.weapon = map.map[player.x][player.y];
            this.ammoQuantity++;
            map.map[player.x][player.y] = factoryTile.constructTile(EntityType.ROAD,player.x, player.y);
            hasCollectWeapon = true;
            break;
    }
};

Player.prototype.showInformations = function(){
    console.log(
        "Player informations: \n"+
        "Position X: "+ this.x +"\n"+
        "Position Y: "+ this.y +"\n"+
        "Orientation: "+ this.orientation + "\n"+
        "Weapon : " + this.weapon + "\n"+
        "Ammo Quantity: " + this.ammoQuantity + "\n"+
        "HP : " + this.hp + "\n"
    );
};

Player.prototype.push = function(){
    if(!physic.ableToPush(map,this)) {
        return;
    }

    var x1 = player.x+player.dx;
    var y1 = player.y+player.dy;
    var x2 = player.x+(2*player.dx);
    var y2 = player.y+(2*player.dy);

    if(map.map[x2][y2].typeId == EntityType.ROAD){
        map.map[x2][y2] = factoryTile.constructTile(EntityType.OBSTACLE,x1,y1);
    }
    else if(map.map[x2][y2].typeId == EntityType.RIVER){
        map.map[x2][y2] = factoryTile.constructTile(EntityType.WATERWALKABLE,x1,y1);
    }
    else{
        map.map[x2][y2] = factoryTile.constructTile(EntityType.OBSTACLEUNMOVABLE,x1,y1);
    }

    map.map[x1][y1] = factoryTile.constructTile(EntityType.ROAD,x1,y1);

    this.move(map);

};

Player.prototype.lookAt = function(map){
    if(!physic.ableToLook(map,this)){
        return;
    }

    switch(map.map[this.x+this.dx][this.y+this.dy].typeId)
    {
        case EntityType.WEAPON:
            return "weapon";
        case EntityType.AMMO:
            return "ammo";
        case EntityType.GOLD:
            return "gold";
        case EntityType.OBSTACLE:
            return "obstacle";
        case EntityType.FREECELL:
            return "freeCell";
        case EntityType.RIVER:
            return "river";
        case EntityType.ROAD:
            return "road";
        case EntityType.MONSTER:
            return "monster";
        case EntityType.GOAL:
            return "goal";
        case EntityType.ROCK:
            return "rock";
        case EntityType.OBSTACLEUNMOVABLE:
            return "obstacleunmovable";
    }
};

/* Notice:  Les méthodes suivantes seront
 à implementer au fur et à mesure
 */

Player.prototype.fire = function(){
    if(this.ammoQuantity > 0){
        //Faire un tire
        this.ammoQuantity--;
    }
};

/***********************/
/*                     */
/*          Map        */
/*                     */
/***********************/

function Map (nbLine, nbCollumn, map){
    this.line = nbLine;
    this.collumn = nbCollumn;
    this.map = [];

    for(var i = 0; i < map.length; i++)
    {
        this.map[i] = [];
        for(var j = 0; j < map[i].length; j++)
        {
            this.map[i][j] = factoryTile.constructTile(map[i][j], i, j);
        }
    }
}

Map.prototype.show = function(){
    var toReturn = "";
    for(var i = 0; i < this.line; i++)
    {
        toReturn += "[";
        for(var j = 0; j < this.collumn; j++)
        {
            toReturn += this.map[i][j].typeId+" ,";
        }
        toReturn += "]\n";
    }
    return toReturn;
};
