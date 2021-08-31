function preload(){
}

function setup(){
    canvas = createCanvas(640 , 480);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color1="";
    tint_color2="";
}

    

    function draw(){
        image(video,70,40,640,480);
        tint(tint_color1);

        image(video,70,40,320,240);
        tint(tint_color2);

        fill(255,0,0);
        stroke(255,0,0);
        circle(20,20,100);
        
        circle(20,460,100);
        circle(620,20,100);
        circle(620,460,100)
        
        fill(0,255,0);
        stroke(0,255,0);
        rect(75,0,490,20);
        
        rect(75,460,490,20);
        }

        function take_snapshot(){
            save('Student.png');
        }

function filter_tint()
{
    tint_color1 = document.getElementById("color_name1").value;
    tint_color2 = document.getElementById("color_name2").value;
}