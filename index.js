window.onload=beginFun;
function beginFun(){
    var colors=["#FFDAB9","#F5F5DC","#E0FFFF","#CD00CD","#7CFC00","#97FFFF"];
    //var colors=["red","green"];
	var balls=[];
	var timer;
	var on=true;
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight+400;
	function draw(ball){
		ctx.beginPath();
		ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
		ctx.fillStyle=ball.coolor;
		ctx.globalCompositeOperation="lighter";
		ctx.fill();
		
	}
	function random(x,y){
		return Math.round(Math.random()*(y-x)+x);
	}
	//canvas 移动，画出，清空，画出
	canvas.onmousemove=function(ev){
		
		for (var i=0;i<1;i++) {
			var ball={
				x:ev.clientX+random(-5,5),
				y:ev.clientY+random(-5,5)+window.pageYOffset,
				r:random(10,45),
				vx:Math.random()-0.5,
				vy:Math.random()-0.5,
				coolor:colors[random(0,colors.length-1)]
			};
				balls.push(ball);
			if (balls.length>300) {
				balls.shift();			
	            }
		}			
			function drawBall(){
				ctx.clearRect(0,0,canvas.width,canvas.height);
				for (var i=0;i<balls.length;i++) {
					balls[i].x+=balls[i].vx*8;
					balls[i].y+=balls[i].vy*8;
					balls[i].r=balls[i].r*0.96;	
					draw(balls[i]);
						
				}			
			}
			//clearInterval(timer);//清除后续队列里面的set.表示set运行时再clear，队列里面的第一个set已经运行，clear是清除后面的
			//setInterval(drawBall,2000);
			//timer=setInterval(drawBall,2000);
			if (on) {
			  clearInterval(timer);   //再次移动已刷新函数，前面没有setInterval事件了
			setInterval(drawBall,30);//只是让set触发一次，并非每次move都触发
			
			on=false;
			}
			
			
			//drawBall();
					
	}	
	var lis=document.querySelectorAll("li"); 
	var ss=true;
	var dd=true;
	lis[lis.length-1].onclick=function(){
		for (var i = 0; i < lis.length; i++) {
			var n=i-lis.length/2;
			if (dd) {		
			n=n*15;			
			}	
			else{
				n=360;
			}
			lis[i].style.transition="1s";
			lis[i].style.transform="rotate("+n+"deg"+")";		
		};
		dd=!dd;
	}
    for (var i = 0; i < lis.length-1; i++) {   	
    	lis[i].index=i;
    	lis[i].onclick=function(){	
    		this.style.transform="rotate(0deg)";
    		for (var j =0; j <this.index; j++) {
                //alert(11)             
                var s=(j-this.index)*15;                       
    			lis[j].style.transform="rotate("+s+"deg)";//旋转到30；
    		}
    		for (var j = this.index+1; j < lis.length; j++) {
    			var m=(j-this.index+1)*15
    			lis[j].style.transform="rotate("+m+"deg)";
    		}
    		
    		}
    	}
   
}

//1.点击最后一个展开
//2.点击每一个时，被点击的居中，左边跟随往中间靠
//3.每个图片的导航。
//4，再次点击最后一个时图片合并还原




















