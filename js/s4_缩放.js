/**
 * Created by Administrator on 2016/9/13.
 */

function suoFang(){
    var section = document.getElementById("s4");
    //var hotePics = section.getElementsByClassName('ih-fold-wrap');
    var hoteUl = section.getElementsByClassName('s4Pics')[0];
    //alert(hoteUl.innerHTML);

    var hoteLi = hoteUl.getElementsByTagName('li');
    var mask = document.getElementsByClassName('mask');

    for(i =0;i<hoteLi.length;i++){
        hoteLi[i].index = i;
        hoteLi[i].onmouseover = function(){
            Over(this.index);
        }
        hoteLi[i].onmouseout = function(){
            Out();
        }
    }

    var Over = function(index){
        for(j  =0;j<hoteLi.length;j++){
            if(index == j){
                hoteLi[j].style.width="400px";
                hoteLi[j].style.transition="width 0.5s ease-out";
                mask[j].style.display="none";
            }else{
                hoteLi[j].style.width="156px";
                hoteLi[j].style.transition="width 0.8s ease-out";
                mask[j].style.display="block";
            }
        }
    }

    var Out = function(){
        for(j  =0;j<hoteLi.length;j++){
            hoteLi[j].style.width="196px";
            mask[j].style.display="block";
        }
    }
}


var hotel_tab = function(){

    var list_hotel = document.getElementById("hotel_content");
    var titles_hotel = list_hotel.getElementsByTagName("li");

    var contents_hotel = document.getElementsByClassName("ih-fold-wrap");

    for(i =0;i<titles_hotel.length;i++){
        titles_hotel[i].index = i;
        titles_hotel[i].onmouseover = function(){
            tabChange(this.index);
        }
    }
    var tabChange = function(index){
        for(j  =0;j<titles_hotel.length;j++){
            if(index == j){
                titles_hotel[j].style.color = "white";
                titles_hotel[j].style.backgroundColor = "#4F8CE4";
                contents_hotel[j].style.display = "block";
                //debugger;
                //suoFang();
            }else{
                titles_hotel[j].style.color = "#4F8CE4";
                titles_hotel[j].style.backgroundColor = "white";
                contents_hotel[j].style.display = "none";

            }
        }

    }


}