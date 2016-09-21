/**
 * Created by Administrator on 2016/9/17.
 */

function holiday_lunbo(){
    var  pic_lunbo = document.getElementsByClassName("im-lf-pic")[0];
    var positionArr = (getStyle(pic_lunbo,"backgroundPosition")).split(",");

    var dots =document.getElementById("dots");
    var os = dots.getElementsByClassName("o");
    var left = document.getElementsByClassName("ind-icon arr al")[0];
    var right = document.getElementsByClassName("ind-icon arr al")[1];

    var list = document.getElementById("holiday_left_title");
    var titles = list.getElementsByTagName("li");


    var num = 0;
    var clickFlag=true;//设置左右切换标记位防止连续按,效果有点不同


    for(i =0;i<titles.length;i++){
        titles[i].index = i;
        titles[i].onmousedown = function(){
            tabDown(this.index);
        }
    }
    var tabDown = function(index){
        for(j  =0;j<titles.length;j++){
            if(index == j){
                titles[j].style.color = "white";
                titles[j].style.backgroundColor = "#71b7a2";
                positionArr[j]="0px 0px";
                os[j].style.backgroundColor = "#71b7a2";
                //clearInterval(time);
            }else{
                titles[j].style.color = "#71b7a2";
                titles[j].style.backgroundColor = "white";
                os[j].style.backgroundColor = "#d7dcda";
                positionArr[j]="-500px -500px";
            }
        }
        pic_lunbo.style.backgroundPosition = positionArr.join(",");
    }


    time= setInterval(function(){

        if(num == positionArr.length){
            num = 0;
        }
        for(var i=0;i<positionArr.length;i++){
            if(i == num){
                positionArr[i]="0px 0px";

                titles[i].style.color = "white";
                titles[i].style.backgroundColor = "#71b7a2";
                os[i].style.backgroundColor = "#71b7a2";
            }else{
                positionArr[i]="-500px -500px";

                titles[i].style.color = "#71b7a2";
                titles[i].style.backgroundColor = "white";
                os[i].style.backgroundColor = "#d7dcda";

            }
        }
        pic_lunbo.style.backgroundPosition = positionArr.join(",");
        num++;
    },2000);
}

function getStyle(obj,attr){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}




var holiday_right = function(){

    var list = document.getElementById("holiday_right_title");
    var titles = list.getElementsByTagName("li");
    var uls = document.getElementById("holiday_RContent");
    var contents = uls.getElementsByClassName("is-list-b");


    for(i =0;i<titles.length;i++){
        titles[i].index = i;
        titles[i].onmousedown = function(){
            tabDown(this.index);
        }
    }
    var tabDown = function(index){
        for(j  =0;j<titles.length;j++){
            if(index == j){
                titles[j].style.color = "white";
                titles[j].style.backgroundColor = "#71b7a2";
                contents[j].style.display = "block";

            }else{
                titles[j].style.color = "#71b7a2";
                titles[j].style.backgroundColor = "white";
                contents[j].style.display = "none";

            }
        }
    }
}

