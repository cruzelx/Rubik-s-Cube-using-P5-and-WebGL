var offset = 0.0;
function setup() {
    createCanvas(windowWidth, windowHeight-20, WEBGL);
    noStroke();
    
}
var controls = ["left","right","top","bottom","front","back"];
var angle1 = 0.0;
var angle2 = 0.0;
var angle3 = 0.0;
var rotnum=[1,1,1];
var chosen = "left";
var cube = new Rubiks();

function rotagain(){
    if(chosen == "left" || chosen == "right"){
        rotnum[0] +=1; 
    }else if(chosen == "top" || chosen == "bottom"){
        rotnum[1] += 1; 
    }else if(chosen == "front" || chosen == "back"){
        rotnum[2] += 1;
    }
    chosen = controls[Math.floor(Math.random()*controls.length)];
    document.getElementById('display').innerHTML = chosen;
}
function switchRot(angle,rotnum){
    if(angle >= (PI/2)*rotnum){
        angle = angle;
    }else{
        angle += PI/180;
    }
    return angle;
      
}

function draw() {
    // camera(0,0,(height/2)/tan(PI/3)+400,0,0,0,0,1,0);
    // offset += 0.01;
    background(200);
    rectMode(CENTER);
    //translate(0,0,mouseX);
    
    ambientLight(255);
    pointLight(255, 255, 255, 0, -300, 0);
    point(0, -300, 0);
    pointLight(255, 255, 255, 0, 300, 0);
    pointLight(255, 255, 255, 103, 300, 0);
    pointLight(255, 255, 255, -103, 300, 0);
    pointLight(255, 255, 255, -300, 0, 0);
    pointLight(255, 255, 255, 300, 0, 0);
    pointLight(255, 255, 255, 0, 0, 300);
    pointLight(255, 255, 255, 103, 0, 300);
    pointLight(255, 255, 255, -103, 0, 300);



    directionalLight(255, 255, 255,-(mouseX / width - 0.5) * 2,-(mouseY / height - 0.5) * 2,0)
    circle(mouseX - width / 2, mouseY - height / 2, 20);
    noStroke();
    push();
    rotateX(-PI/6);
    rotateY(PI/4);

    if(chosen == "left" || chosen == "right"){
        angle1 = switchRot(angle1,rotnum[0]);
    }else if(chosen == "top" || chosen == "bottom"){
        angle2 = switchRot(angle2,rotnum[1]);
    }else if(chosen == "front" || chosen == "back"){
        angle3 = switchRot(angle3,rotnum[2]);
    }

    cube.drawCube(chosen);
    pop();
    push();
    translate(0, 300);
    rotateX(HALF_PI);
    specularMaterial(50);
    plane(windowWidth, 3 * windowHeight);
    pop();
}

function Rubiks() {
    this.colors = [
        [
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ],
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ],
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ]
        ], [
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ],
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ],
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ]
        ],
        [
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ],
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ],
            [
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
                {
                    R: Math.floor(Math.random() * 256), G: Math.floor(Math.random() * 256), B: Math.floor(Math.random() * 256)
                },
            ]
        ]
    ];
    this.centers = [
        [
            [
                { x: -103, y: -103, z: 103 }, { x: 0, y: -103, z: 103 }, { x: 103, y: -103, z: 103 }
            ],
            [
                { x: -103, y: -103, z: 0 }, { x: 0, y: -103, z: 0 }, { x: 103, y: -103, z: 0 }
            ],
            [
                { x: -103, y: -103, z: -103 }, { x: 0, y: -103, z: -103 }, { x: 103, y: -103, z: -103 }
            ]

        ],
        [
            [
                { x: -103, y: 0, z: 103 }, { x: 0, y: 0, z: 103 }, { x: 103, y: -0, z: 103 }
            ],
            [
                { x: -103, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, { x: 103, y: 0, z: 0 }
            ],
            [
                { x: -103, y: 0, z: -103 }, { x: 0, y: 0, z: -103 }, { x: 103, y: 0, z: -103 }
            ]

        ],
        [
            [
                { x: -103, y: 103, z: 103 }, { x: 0, y: 103, z: 103 }, { x: 103, y: 103, z: 103 }
            ],
            [
                { x: -103, y: 103, z: 0 }, { x: 0, y: 103, z: 0 }, { x: 103, y: 103, z: 0 }
            ],
            [
                { x: -103, y: 103, z: -103 }, { x: 0, y: 103, z: -103 }, { x: 103, y: 103, z: -103 }
            ]

        ]
    ];

    this.vertices = [
        
    ];
    console.log(this.centers);

    this.rotateL = function () {
        rotateX(angle);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                specularMaterial(this.colors[i][j][0].R, this.colors[i][j][0].B, this.colors[i][j][0].G);
                //fill(this.colors[i][j][k].R,this.colors[i][j][k].B,this.colors[i][j][k].G);
                stroke(30);
                strokeWeight(6);
                translate(this.centers[i][j][0].x + offset, this.centers[i][j][0].y + offset, this.centers[i][j][0].z + offset);
                box(100);
                translate(-this.centers[i][j][0].x - offset, -this.centers[i][j][0].y - offset, -this.centers[i][j][0].z - offset);
            }

        }
    }
    this.internal = function (i, j, k) {
        specularMaterial(this.colors[i][j][k].R, this.colors[i][j][k].B, this.colors[i][j][k].G);
        //fill(this.colors[i][j][k].R,this.colors[i][j][k].B,this.colors[i][j][k].G);
        stroke(30);
        strokeWeight(6);
        translate(this.centers[i][j][k].x + offset, this.centers[i][j][k].y + offset, this.centers[i][j][k].z + offset);
        box(100);
        translate(-this.centers[i][j][k].x - offset, -this.centers[i][j][k].y - offset, -this.centers[i][j][k].z - offset);
        //console.log(this.centers[i][j][k].x,this.centers[i][j][k].y,this.centers[i][j][k].z);
    }

    this.rotateLeftClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(k==0){
                        push();
                        rotateX(-angle1);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateLeftAntiClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(k==0){
                        push();
                        rotateX(angle1);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateRightClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(k==2){
                        push();
                        rotateX(angle1);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateRightAntiClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(k==2){
                        push();
                        rotateX(-angle1);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateTopClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(i==0){
                        push();
                        rotateY(-angle2);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateTopAntiClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(i==0){
                        push();
                        rotateY(angle2);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateBottomClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(i==2){
                        push();
                        rotateY(angle2)
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateBottomAntiClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(i==2){
                        push();
                        rotateY(-angle2)
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateFrontClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(j==0){
                        push();
                        rotateZ(angle3);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateFrontAntiClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(j==0){
                        push();
                        rotateZ(-angle3);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateBackClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(j==2){
                        push();
                        rotateZ(-angle3);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }
    this.rotateBackAntiClockwise = function(){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if(j==2){
                        push();
                        rotateZ(angle3);
                        this.internal(i,j,k);
                        pop();
                    }else{
                        this.internal(i,j,k);
                    }
                }
            }
        }
    }

    this.drawCube = function (chosen) {
       if(chosen == "left")
       this.rotateLeftClockwise();
       else if(chosen == "right")
       this.rotateRightClockwise();
       else if(chosen == "top")
       this.rotateTopClockwise();
       else if(chosen == "bottom")
       this.rotateBottomClockwise();
       else if (chosen == "front")
       this.rotateFrontClockwise();
       else if(chosen == "back")
       this.rotateBackClockwise();
         //this.rotateFrontAntiClockwise();
         //this.rotateFrontClockwise();
         //this.rotateBackAntiClockwise();
        // this.rotateBackClockwise();
         //this.rotateLeftAntiClockwise();
        // this.rotateLeftClockwise();
         //this.rotateRightAntiClockwise();
        // this.rotateRightClockwise();
        // this.rotateTopAntiClockwise();
         //this.rotateTopClockwise();
         //this.rotateBottomAntiClockwise();
         //this.rotateBottomClockwise();
        
    };

}

