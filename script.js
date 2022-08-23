var div=document.createElement("div")
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
input.setAttribute("placeholder","ex:john 3:12");


var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="search";
button.addEventListener("click",foo);

let bible=document.createElement("div");
bible.setAttribute("id","bible");
let para=document.createElement("p");
para.setAttribute("id","para");
para.innerHTML="JESUS ALWAYS LOVES YOU!!!<br>Hallelujah!!!"

div.append(input,button,bible,para);
document.body.append(div);

async function foo(){
    try{
    let res=document.getElementById("name").value;
    var url=`https://bible-api.com/${res}`;
    // console.log(url)

    let result=await fetch(url)
    let result1=await result.json();
    console.log(result1.text)
bible.innerHTML=`<div class="card">
<div class="card-body">
${res}<br>${result1.text}
</div>
</div>
  `

    }

    catch(error){
         console.log("Enter the valid detail");
    }
}
