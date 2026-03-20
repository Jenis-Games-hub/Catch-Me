const canvas=document.getElementById('canvas');
const can=canvas.getContext('2d');
canvas.height=550
canvas.width=1366
canvas.style.marginLeft=((window.innerWidth-canvas.width)/2)+'px';
canvas.style.marginTop=((window.innerHeight-75-canvas.height)/2)+'px';
const bear=document.getElementById('bear');
const animal=document.getElementById('animal');
const hole=new Image();
hole.src='hole.png';
const holew=250,holeh=150
const fholex=(canvas.width-(holew*4))/5;
const fholey=((canvas.height-(holeh*2))/3)+30;
let bearx,beary,berah,bearw;
let loc,i=0,j=-1,last=0,aloc,alast=0;
let score=0,hscr=[];
let ii,jj,temp;
let started=false,paused=false,out=false;
let key;

window.addEventListener('keydown',clicked)

function clicked(event)
{
    key=event.keyCode
    if(key===32 && !started && !paused && !out)
    {
        started=true;
        requestAnimationFrame(run);
    }
    else if(key===32 && started && !paused && !out)
    {
        paused=true;
    }
    else if(key===32 && started && paused && !out)
    {
        paused=false;
        requestAnimationFrame(run)
    }
    else if(key==82 && out)
    {
        started=false;
        out=false;
        can.clearRect(0,0,canvas.width,canvas.height);
        create(1);
        hscr.push(score);
        for (ii = 0; ii < hscr.length - 1; ii++) 
        {
            for (jj = ii + 1; jj < hscr.length; jj++) 
            {
                if (hscr[ii] > hscr[jj]) 
                {
                    temp = hscr[ii];
                    hscr[ii] = hscr[jj];
                    hscr[jj] = temp;
                }
            }
        }
        hscr.reverse();
        document.getElementById('hscr').innerHTML='High Score : '+hscr[0];

        score=0;
        document.getElementById('scr').innerHTML='Score : '+score;
    }
}

function create(n=0)
{
        can.drawImage(hole,fholex,fholey,holew,holeh);
        can.drawImage(hole,(fholex*2)+holew,fholey,holew,holeh);
        can.drawImage(hole,(fholex*3)+(holew*2),fholey,holew,holeh);
        can.drawImage(hole,(fholex*4)+(holew*3),fholey,holew,holeh);

        can.drawImage(hole,fholex,(fholey*2)+holeh,holew,holeh);
        can.drawImage(hole,(fholex*2)+holew,(fholey*2)+holeh,holew,holeh);
        can.drawImage(hole,(fholex*3)+(holew*2),(fholey*2)+holeh,holew,holeh);
        can.drawImage(hole,(fholex*4)+(holew*3),(fholey*2)+holeh,holew,holeh);

        if(n==1)
        {
            can.font = "50px Arial";
            can.align-'center';
            can.fillStyle = "#000000";
            can.fillText("!Click space to Start!", 480, 290);
            can.fillText("!While Playing, Click Space for Pause and Play!", 160, 360);
            bear.style.marginLeft='80px';
            bear.style.marginTop='8px';
            animal.style.marginLeft='1020px';
            animal.style.marginTop='50px';
            
        }
}

function decidelocation()
{
    loc=((Math.random()*8)|0)+1;
    aloc=((Math.random()*8)|0)+1;
    if(last==loc || alast==aloc || loc==aloc)
    {
        return decidelocation();
    }
    
    alast=aloc;
    last=loc;
}
hole.onload=()=>{create(1)};

function run()
{
    i+=.0166666666666667;
    // console.log(i,j);
    
    if((i|0)==j+1)
    {
        can.clearRect(0,0,canvas.width,canvas.height);
        create();
        decidelocation();
        // loc=8
          if(loc==1)
        {
            // can.drawImage(bear,80,8,270,220)
            bear.style.marginLeft='80px';
            bear.style.marginTop='8px';
        }
        else if(loc==2)
        {
            // can.drawImage(bear,400,8,270,220)
            bear.style.marginLeft='400px';
            bear.style.marginTop='8px';
        }
        else if(loc==3)
        {
            // can.drawImage(bear,720,8,270,220);
            bear.style.marginLeft='720px';
            bear.style.marginTop='8px';
        }
        else if(loc==4)
        {
            // can.drawImage(bear,1040,8,270,220);
            bear.style.marginLeft='1040px';
            bear.style.marginTop='8px';
        }
        else if(loc==5)
        {
            // can.drawImage(bear,80,270,270,220)
            bear.style.marginLeft='80px';
            bear.style.marginTop='270px';
        }
        else if(loc==6)
        {
            // can.drawImage(bear,400,270,270,220)
            bear.style.marginLeft='400px';
            bear.style.marginTop='270px';
        }
        else if(loc==7)
        {
            // can.drawImage(bear,720,270,270,220)
            bear.style.marginLeft='720px';
            bear.style.marginTop='270px';
        }
        else if(loc==8)
        {
            // can.drawImage(bear,1040,270,270,220)
            bear.style.marginLeft='1040px';
            bear.style.marginTop='270px';
        }
        // aloc=5
        if(aloc==1)
        {
            // can.drawImage(bear,80,8,270,220)
            animal.style.marginLeft='50px';
            animal.style.marginTop='50px';
        }
        else if(aloc==2)
        {
            // can.drawImage(bear,400,8,270,220)
            animal.style.marginLeft='380px';
            animal.style.marginTop='50px';
        }
        else if(aloc==3)
        {
            // can.drawImage(bear,720,8,270,220);
            animal.style.marginLeft='700px';
            animal.style.marginTop='50px';
        }
        else if(aloc==4)
        {
            // can.drawImage(bear,1040,8,270,220);
            animal.style.marginLeft='1020px';
            animal.style.marginTop='50px';
        }
        else if(aloc==5)
        {
            // can.drawImage(bear,80,270,270,220)
            animal.style.marginLeft='50px';
            animal.style.marginTop='315px';
        }
        else if(aloc==6)
        {
            // can.drawImage(bear,400,270,270,220)
            animal.style.marginLeft='380px';
            animal.style.marginTop='315px';
        }
        else if(aloc==7)
        {
            // can.drawImage(bear,720,270,270,220)
            animal.style.marginLeft='700px';
            animal.style.marginTop='315px';
        }
        else if(aloc==8)
        {
            // can.drawImage(bear,1040,270,270,220)
            animal.style.marginLeft='1020px';
            animal.style.marginTop='315px';
        }
        
        j=(i|0);
    }
    if(paused)
    {}
    else if(out)
    {
        can.font = "50px Arial";
        // can.align='center';
        can.fillStyle = "#000000";
        can.fillText("Game Over", 575, 290);
        can.fillText("Click 'R' to Re-Start", 480, 360);

    }
    else
    {
        requestAnimationFrame(run);
    }  
}

bear.addEventListener('mousedown',()=>{
    if(started && !paused && !out)
    {
        score++;
        document.getElementById('scr').innerHTML='Score : '+score;
    }
    
})
animal.addEventListener('mousedown',()=>{
    if(started && !paused)
    {
        // alert('Game Over');
        out=true;
    }
})