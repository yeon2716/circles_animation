let circleArea=document.querySelector('.circle_container_inner');
console.log(document.querySelectorAll('.circle'))
let circles=[...document.querySelectorAll('.circle')]
circles.shift();
console.log(circles)

let positions={
    circleOne:{x:0,y:0},
    circleTwo:{x:0,y:0},
    circleThree:{x:0,y:0},
    circleFour:{x:0,y:0},
}

let width=window.innerWidth;//viewport의 넓이
let height=window.innerHeight;//viewport의 높이
let x=0;
let y=0;



circleArea.addEventListener('mousemove',(e)=>{
     x=e.clientX;
     y=e.clientY;
     console.log(`${x},${y}`)
})


function animate(){
    positions.circleOne.x=lerp(positions.circleOne.x,(x - (width/2)) * 0.2,0.1);
    positions.circleOne.y=lerp(positions.circleOne.y,(y - (height/2)) * 0.2,0.1);

    positions.circleTwo.x=lerp(positions.circleTwo.x,(-x + (width/2)) * 0.2,0.1);
    positions.circleTwo.y=lerp(positions.circleTwo.y,(y - (height/2)) * 0.2,0.1);

    positions.circleThree.x=lerp(positions.circleThree.x,(x - (width/2)) * 0.2,0.1);
    positions.circleThree.y=lerp(positions.circleThree.y,(-y + (height/2)) * 0.2,0.1);

    positions.circleFour.x=lerp(positions.circleFour.x,(-x + (width/2)) * 0.2,0.1);
    positions.circleFour.y=lerp(positions.circleFour.y,(-y + (height/2)) * 0.2,0.1);

    //console.log(positions.circleOne.x)

    circles[0].style.transform=`translate(-50%,-50%) translate3d(${positions.circleOne.x}px,${positions.circleOne.y}px,0)`;
    circles[1].style.transform=`translate(-50%,-50%) translate3d(${positions.circleTwo.x}px,${positions.circleTwo.y}px,0)`;
    circles[2].style.transform=`translate(-50%,-50%) translate3d(${positions.circleThree.x}px,${positions.circleThree.y}px,0)`;
    circles[3].style.transform=`translate(-50%,-50%) translate3d(${positions.circleFour.x}px,${positions.circleFour.y}px,0)`;

    requestAnimationFrame(animate)
}
animate()

function lerp(start, end , t){
    return start *(1 - t) + end * t

}

