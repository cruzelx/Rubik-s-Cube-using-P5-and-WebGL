var offset=0;
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
     noStroke();
}
var angle1 = 0.0,angle2 = 0.0;
var cube = new Rubiks();

function draw() {
    // camera(0,0,(height/2)/tan(PI/3)+400,0,0,0,0,1,0);
    background(200);
    rectMode(CENTER);
    //translate(0,0,mouseX);
    ambientLight(255);
    pointLight(255,255,255,0,-300,0);
    point(0,-300,0);
    pointLight(255,255,255,0,300,0);
    pointLight(255,255,255,100,300,0);
    pointLight(255,255,255,-100,300,0);
    pointLight(255,255,255,-300,0,0);
    pointLight(255,255,255,300,0,0);
    pointLight(255,255,255,0,0,300);
    pointLight(255,255,255,100,0,300);
    pointLight(255,255,255,-100,0,300);



    //directionalLight(255, 255, 255,-(mouseX / width - 0.5) * 2,-(mouseY / height - 0.5) * 2,0)
    circle(mouseX-width/2,mouseY-height/2,20);
    //translate(mouseX-windowWidth/2,mouseY-windowHeight/2,0);
    noStroke();
    push();
    rotateX(angle1);
    console.log(angle1);
     angle1 += map(mouseX,0,windowWidth,0,0.09);
    rotateY(angle2);
    angle2 += map(mouseY,0,windowHeight,0,0.09);
    
    cube.drawCube();
    pop();
    push();
    translate(0,300);
    rotateX(HALF_PI);
    specularMaterial(50);
    plane(windowWidth,3*windowHeight);
    pop();
}

function Rubiks() {
    this.colors = [
        [
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ],
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ],
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ]
        ],[
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ],
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ],
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ]
        ],
        [
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ],
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ],
            [
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
                {R: Math.floor(Math.random()*256), G: Math.floor(Math.random()*256), B: Math.floor(Math.random()*256)
                },
            ]
        ]
    ];
    this.centers = [
        [
            [
                { x: -100, y: -100, z: 100 },{ x: 0, y: -100, z: 100 },{ x: 100, y: -100, z: 100 }
            ],
            [
                { x: -100, y: -100, z: 0 },{ x: 0, y: -100, z: 0 },{ x: 100, y: -100, z: 0 }
            ],
            [
                { x: -100, y: -100, z: -100 },{ x: 0, y: -100, z: -100 },{ x: 100, y: -100, z: -100 }
            ]

        ],
        [
            [
                { x: -100, y: 0, z: 100 },{ x: 0, y: 0, z: 100 },{ x: 100, y: -0, z: 100 }
            ],
            [
                { x: -100, y: 0, z: 0 },{ x: 0, y: 0, z: 0 },{ x: 100, y: 0, z: 0 }
            ],
            [
                { x: -100, y: 0, z: -100 },{ x: 0, y: 0, z: -100 },{ x: 100, y: 0, z: -100 }
            ]

        ],
        [
            [
                { x: -100, y: 100, z: 100 },{ x: 0, y: 100, z: 100 },{ x: 100, y: 100, z: 100 }
            ],
            [
                { x: -100, y: 100, z: 0 },{ x: 0, y: 100, z: 0 },{ x: 100, y: 100, z: 0 }
            ],
            [
                { x: -100, y: 100, z: -100 },{ x: 0, y: 100, z: -100 },{ x: 100, y: 100, z: -100 }
            ]

        ]
    ];
    console.log(this.centers);
this.drawCube = function(){
    for(let i=0;i<3;i++){
       rotateY(angle1);
        for(let j=0;j<3;j++){
            for(let k=0;k<3;k++){
                specularMaterial(this.colors[i][j][k].R,this.colors[i][j][k].B,this.colors[i][j][k].G);
                //fill(this.colors[i][j][k].R,this.colors[i][j][k].B,this.colors[i][j][k].G);
                stroke(30);
                strokeWeight(6);
                translate(this.centers[i][j][k].x+offset,this.centers[i][j][k].y+offset,this.centers[i][j][k].z+offset);
                box(100);
                translate(-this.centers[i][j][k].x-offset,-this.centers[i][j][k].y-offset,-this.centers[i][j][k].z-offset);
                //console.log(this.centers[i][j][k].x,this.centers[i][j][k].y,this.centers[i][j][k].z);
            }
        }
    }
};

}


