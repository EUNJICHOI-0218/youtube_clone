const but = document.querySelector(".info .metadata .titlebtn");
const title= document.querySelector(".info .metadata .title");
const share= document.querySelector(".infoAndNext .actions .fa-share");
const add= document.querySelector(".infoAndNext .actions .fa-plus");
const pop1=document.querySelector(".pop1");
const pop2=document.querySelector(".pop2");
const pop1_close=document.querySelector(".pop1 .pop1_top .fa-window-close");
const pop2_close=document.querySelector(".pop2 .pop2_top .fa-times");
const black=document.querySelector(".dark");
const thumbs_up=document.querySelector(".actions .fa-thumbs-up");
const thumbs_down=document.querySelector(".actions .fa-thumbs-down");
const sub=document.querySelector(".info .channel .sub");
const sub_ing=document.querySelector(".info .channel .sub_ing");
const sub_ing_but=document.querySelector(".info .channel .sub_ing .sub_ing_but");
const like_num=10; 
const dislike_num=2;


sub.addEventListener("click",()=>{
    sub.style.display='none';
    sub_ing.style.display='flex';
});

sub_ing_but.addEventListener("click",()=>{

    const result=confirm("구독을 취소하시겠습니까?");

    if(result)
    {
        sub.style.display='inline-block';
        sub_ing.style.display='none';
    }
});


function upup() {

    if(thumbs_down.classList.contains("active_red"))
    {
        downdown();
    }

    let num=document.querySelector(".actions .like_num").innerHTML;

    if(num==like_num){

        document.querySelector(".actions .like_num").innerHTML=parseInt(num)+1;

    } else if(num==like_num+1)
    {
        document.querySelector(".actions .like_num").innerHTML=parseInt(num)-1;
    }
    thumbs_up.classList.toggle("active_blue");  
};



function downdown(){

        if(thumbs_up.classList.contains("active_blue"))
        {
            upup();
        }

        let num=document.querySelector(".actions .dislike_num").innerHTML;

        if(num==dislike_num){

            document.querySelector(".actions .dislike_num").innerHTML=parseInt(num)+1;

        } else if(num==dislike_num+1)
        {
            document.querySelector(".actions .dislike_num").innerHTML=parseInt(num)-1;
        }
        thumbs_down.classList.toggle("active_red");
};


but.addEventListener("click",()=>{
    but.classList.toggle("clicked");
    title.classList.toggle("clamp");
    
});

share.addEventListener("click",()=>{
    pop1.style.display='block';
    black.style.display='block';

});

pop1_close.addEventListener("click",()=>{
    pop1.style.display='none';
    black.style.display='none';

});

add.addEventListener("click",()=>{
    pop2.style.display='block';
    black.style.display='block';
});

pop2_close.addEventListener("click",()=>{
    pop2.style.display='none';
    black.style.display='none';

});

