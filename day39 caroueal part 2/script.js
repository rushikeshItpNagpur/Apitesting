let arr=[
    "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/GW/NOV/BAU/GW_HERO_PC_1_2x._CB542130280_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/June/HMD/Under_499_Rec_PC_HMD_NOV__3000X1200_1_rec._CB541547203_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
]
let root=document.getElementById('root')



let i=0
let timer;
let status=true
   if(status)
   {
    startCaroseal()
    status=false
   }

  



   appendimg(0)
 function appendimg(z){
    let img=document.createElement("img")
    img.src=arr[z]
  
   
    root.innerHTML=""
    root.append(img)
 }



function startCaroseal(){
 var timer=setInterval(function(){
       
        if(i==arr.length)
            {
             i=0
           
            }
            appendimg(i)
            i++
    
      
    },2000)


}




//loogic for prev 


function prev()
{    
        if(i==0)
        {
            i=arr.length-1
        }else{

            i--
        }  
         appendimg(i)
         clearInterval(timer)
        
       
      console.log(i)

     setTimeout(()=>{
        startCaroseal()
     },4000)


}


function next()
{     
        if(i==arr.length-1)
        {
            i=0
        }else{

            i++
        }  
         appendimg(i)
         clearInterval(timer)
         setTimeout(()=>{
            startCaroseal()
         },4000)

      console.log(i)




}



