class support {
    constructor(x, y) {
        var options = {
            'isStatic': true,
            'restitution': 0.5,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, 350, 15, options);
        this.width = 350;
        this.height = 15;
        this.angle = 0;
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("#BB4240");
        rect(0, 0, 350, 15);
        pop();
    }
};
