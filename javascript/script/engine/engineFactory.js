
/*
 * Factory used to create a specific Tile from a simple int value
 */
function TileFactory(){

}

TileFactory.prototype.constructTile = function(valeur, posX, posY){
    switch(valeur)
    {
        case 0:
            return new FreeCell(posX, posY,0);
        case 1:
            return new Weapon(posX, posY, 2, 3, 1);
        case 2:
            return new Gold(posX, posY, 2);
        case 3:
            return new Player(posX, posY, OrientationType.LEFT, 5, 3);
        case 4:
            return new Monster(posX,posY, OrientationType.LEFT, 5, 4);
        case 5:
            return new Ammo(posX, posY, 5);
        case 6:
            return new Road(posX,posY,6);
        case 7:
            return new Rock(posX, posY,7);
        case 8:
            return new Goal(posX, posY,8);
        case 9:
            return new Obstacle(posX, posY,9);
        case 10:
            return new River(posX, posY, 10);
        case 11:
            return new ObstacleUnmovable(posX,posY,11);
        case 12:
            return new WaterWalkable(posX, posY, 12);
    }
};

/*
 * Factory used to create an instruction from a single string value
 */
function InstructionFactory(){
    this.regexW = new RegExp(/^while/);
    this.regexI = new RegExp(/^if/);
}

InstructionFactory.prototype.constructInstruction = function(string){

    /* On gere les cas particuliers que sont le while et le if */
    if(string.search(this.regexW) >= 0){
        return new WhileInstruction(string);

    }
    else if(string.search(this.regexI) >= 0){
        return new IfInstruction(string);
    }

    /* On gere les autres cas basiques */
    switch(string)
    {
        case "endWhile":
            return new EndWhileInstruction();
        case "endIf":
            return new EndIfInstruction();
        case "move":
            return new MoveInstruction();
        case "jump":
            return new JumpInstruction();
        case "collect":
            return new CollectInstruction();
        case "rotateLeft":
            return new RotateLeftInstruction();
        case "rotateRight":
            return new RotateRightInstruction();
        case "push":
            return new PushInstruction();
    }
};

EntityType = {
    FREECELL : 0,
    WEAPON: 1,
    GOLD: 2,
    PLAYER: 3,
    MONSTER: 4,
    AMMO: 5,
    ROAD: 6,
    ROCK: 7,
    GOAL: 8,
    OBSTACLE: 9,
    RIVER: 10,
    OBSTACLEUNMOVABLE: 11,
    WATERWALKABLE: 12
};

OrientationType = {

    UP : 0,
    RIGHT : 1,
    DOWN: 2,
    LEFT: 3

};