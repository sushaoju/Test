/**
 * Created by Administrator on 2016/9/9.
 */

function s1_tab(){

    /*
    * *****************��Ʊ
    * */
    var plan_nav = document.getElementsByClassName('in-tab-nav');
    var plan_tab = document.getElementsByClassName('sub-hs-tab-cont');

    for(i =0;i<plan_nav.length;i++){
        plan_nav[i].index = i;
        plan_nav[i].onmousedown = function(){
            tabDown(this.index);
        }
    }

    var tabDown = function(index){

        for(j  =0;j<plan_nav.length-1;j++){
            if(index == j){
                plan_nav[j].style.borderBottom="2px solid #5892e6";
                plan_tab[j].style.display="block";
            }else{
                plan_nav[j].style.borderBottom="2px solid #f4f4f4";
                plan_tab[j].style.display="none";
            }
        }
    }

    /*���ڻ�Ʊ*/

    var btnOneWay = document.getElementById('btnOneWay');
    var btnRound = document.getElementById('btnRound');
    var one_icon = btnOneWay.getElementsByTagName('i')[0];
    var round_icon = btnRound.getElementsByTagName('i')[0];

    btnOneWay.onclick = function(){
        one_icon.style.backgroundPosition = '-189px 0';  //ѡ��
        round_icon.style.backgroundPosition = '-203px 0';
    }
    btnRound.onclick = function(){
        one_icon.style.backgroundPosition = '-203px 0';
        round_icon.style.backgroundPosition = '-189px 0';
    }








    /*�ؼۻ�Ʊ*/


}