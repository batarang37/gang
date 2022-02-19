var audio=document.getElementById("audio");
var abtn=document.getElementById("audiobtn");
var pbtn=document.getElementById("pbtn");
var timeheader=document.getElementById("timeheader");
var qndiv=document.getElementById("qndiv");
var timeout=document.getElementById("timeout");
var passagebtn=document.getElementById("passagebtn");
var fifteen=document.getElementById("fivet");
var confirm1=document.getElementById("confirm");
var username=document.getElementById("name");
var comment=document.getElementById("comment");
var one=document.getElementById("first");
var second=document.getElementById("second");
var student='';
//Turning points

var nbtn=document.getElementById("btn");
var f=document.getElementById("first");
var prei=document.getElementById("leftic");
var nexi=document.getElementById("rightic");

pbtn.addEventListener('click',previous);
nbtn.addEventListener('click',next);
var con=document.getElementById("container");
var div=con.querySelectorAll("[flag=true]")
var len=div.length;

console.log(div);
function next(e)
{
    console.log("mascara");
    for(var i=0;i<len;i++)
    {
        if(div[i].hasAttribute("one")){
           
            
            var temp=i+1;
            if(i==len-1)
                var temp=0;
            
            console.log(div[i]);
            div[i].removeAttribute("one");
            div[i].setAttribute('class','zero');
            div[temp].setAttribute('class','one');
            div[temp].setAttribute("one","hello");
            console.log(div[temp]);
            break;
        }
    }
    
    
}
function previous(e)
{
   
    console.log("Jingunamani");
    for(var i=0;i<len;i++)
    {
        if(div[i].hasAttribute("one")){
            var temp=i-1;
        
            if(i==0)
                temp=len-1;
            
            console.log(div[i]);
            div[i].removeAttribute("one");
            div[i].setAttribute('class','zero');
            div[temp].setAttribute('class','one');
            div[temp].setAttribute('one','hello');
            
            console.log(div[temp]);
            break;
        }
    }

}
var namecomments=['Cool name','Pretty name','Awful name'];
var ivec=0;
var jvec=0;
//Validating name
confirm1.addEventListener('click',function(e) {
    var temp=username.value;
    if(temp.search(/[^A-Za-z\s]/)==-1)
    {
        if (temp.length>2 && temp.length<17)
        {
            student=temp;
            comment.innerHTML=namecomments[Math.floor(Math.random()*3)];
            comment.style.color="blue";
            pbtn.addEventListener('click',()=>{
               
                ivec=1;    
                console.log("ia"+ivec);
            });
            setTimeout(function () {
                
                console.log(ivec);
                if (ivec==1 ) {
                    ivec=0;
                   // jvec=1;
                   console.log("i am ivec");
                   
                }
                else
                {
                    //One
                    one.removeAttribute('one');
                    one.setAttribute('class','zero');
                    second.setAttribute('class','one');
                    second.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log(one);
                    console.log(second);
                    
                    
                }
            },2000);
        }
        else
        {
            comment.innerText="Name should be greater than 2 and lesser than 17";
            comment.style.color="red";
            
           
        }
    }
    else
    {
        comment.innerText="Enter a valid name";
        comment.style.color="red";
    }
});

//Validating Fine or Not Fine

var fnfs=document.querySelectorAll('input[name="fnf"]');
var comment2=document.getElementById("comment2");
var third=document.getElementById("third");
var fnfvalue='';
//ivec=0;
for (const fnf of fnfs) {
    fnf.addEventListener('click',function() {
        fnfvalue=fnf.value;
        console.log(fnfvalue);
        if (fnf.value=="fine") {
            console.log("theivam valvadhu yenge");
            comment2.innerText="That's good";
            comment2.style.color="blue";
        }
        else
        {
            comment2.innerText="Just chill,hear some music..";
            comment2.style.color="blue";
        }
        pbtn.addEventListener('click',()=>{
            console.log("two");
            ivec=1;
        });
        setTimeout(() => {
            console.log(ivec);
            if (ivec==1 ) {
                 ivec=0;
            }
            else
            {
                //Two
                second.removeAttribute('one');
                second.setAttribute('class','zero');
                third.setAttribute('class','one');
                third.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
                console.log(second);
                
                
            } 
        }, 2000);        
    });
}      

//Friend Validation
var fr1=document.querySelectorAll('input[name="fr1"]');
var comment3=document.getElementById("comment3");
var fourth=document.getElementById("fourth");
var frhead=document.getElementById("frhead");

for (const fr of fr1) {
    fr.addEventListener('click',function() {
        
            if (fr.value=="fyes") {
                comment3.innerText="Cool..."
                comment3.style.color="blue";
               setTimeout(() => {
                console.log("theivam valvadhu yenge");
               //Creating lover window
                third.innerHTML='<h1 id="lovehead" style="font-size: 1.5rem;position:relative;top:9%;text-align: center;">Do you ever love someone?</h1><br>'+
                '<br><br>'+
                '<input type="radio" name="love1"value="lyes" id="lyes" />'+
                '<label for="lyes" style="font-size: 1rem;position: relative;top:-13%;">Yes</label><br><br>'+
                '<input type="radio" name="love1"value="lno" id="lno"/>'+
                '<label for="lno" style="font-size: 1rem;position: relative;top:-16%;">No</label>'+
                '<p style="font-size: 1rem;text-align: center;position: relative;top: -15%;"id="comment4"></p>'
                //Lover Validation
                var love1=document.querySelectorAll('input[name="love1"]');
                for (const love of love1) {
                    love.addEventListener('click',function () {
                        if (love.value=="lyes") {
                            comment4.innerText="Ok the next question going to be tough";
                            comment4.style.color="blue";
                            //Creating prefer window
                            setTimeout(() => {
                                third.innerHTML='<h1 id="lovehead" style="font-size: 1.5rem;position:relative;top:9%;text-align: center;">Who do you prefer:Lover or Friend</h1><br>'+
                                '<br><br>'+
                                '<input type="radio" name="prefer1"value="lover" id="lprefer" />'+
                                '<label for="lyes" style="font-size: 1rem;position: relative;top:-13%;">Lover</label><br><br>'+
                                '<input type="radio" name="prefer1"value="friend" id="fprefer"style="position:relative;left:0.5%;"/>'+
                                '<label for="lno" style="font-size: 1rem;position: relative;top:-16%;left:1%;">Friend</label>'+
                                '<p style="font-size: 1rem;text-align: center;position: relative;top: -15%;"id="comment5"></p>' 
                                var prefer1=document.querySelectorAll('input[name="prefer1"]');
                                var comment5=document.getElementById("comment5");
                                for (const prefer of prefer1) {
                                    prefer.addEventListener('click',function() {
                                        if (prefer.value=="lover") {
                                            comment5.innerText="Nothing to say...";
                                            comment5.style.color="red"; 
                                            pbtn.addEventListener('click',()=>{
                                                ivec=1;
                                            });
                                            setTimeout(() => {
                                                if (ivec==1) {
                                                    ivec=0;
                                               }
                                                else
                                                {
                                                    //Third
                                                    third.removeAttribute('one');
                                                    third.setAttribute('class','zero');
                                                    fourth.setAttribute('class','one');
                                                    fourth.setAttribute('one','hello');
                                                    pbtn.addEventListener('click',()=>{ivec=2;});
                                                    console.log('vangana vankamana');
                                                    console.log(second);
                                                } 
                                            }, 2000);   
                                        }
                                        else
                                        {
                                            comment5.innerText="Attaboy...!";
                                            comment5.style.color="blue";
                                            pbtn.addEventListener('click',()=>{
                                                ivec=1;
                                            });
                                            setTimeout(() => {
                                                if (ivec==1) {
                                                    ivec=0;
                                                }
                                                else
                                                {
                                                    //four
                                                    third.removeAttribute('one');
                                                    third.setAttribute('class','zero');
                                                    fourth.setAttribute('class','one');
                                                    fourth.setAttribute('one','hello');
                                                    pbtn.addEventListener('click',()=>{ivec=2;});
                                                    console.log('vangana vankamana');
                                                    console.log(second);
                                                }
                                            }, 2000);
                                        } 
                                    });
                                    
                                }
                            }, 2000);
                        }
                        else
                        {
                            console.log("hi");
                            comment4.innerText="That's good for you";
                            comment4.style.color="blue";
                            pbtn.addEventListener('click',()=>{
                                ivec=1;
                            });
                            setTimeout(() => {
                                if (ivec==1) {
                                    ivec=0;
                                }
                                else
                                {
                                    //five
                                    third.removeAttribute('one');
                                    third.setAttribute('class','zero');
                                    fourth.setAttribute('class','one');
                                    fourth.setAttribute('one','hello');
                                    pbtn.addEventListener('click',()=>{ivec=2;});
                                    console.log('vangana vankamana');
                                    console.log(second);
                                } 
                            }, 2000);                
                          
                        }
                    });
                }
               }, 1000);
            }
            else
            {
            comment3.innerText="Horrible to Hear";
            comment3.style.color="red";
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(() => {
                if (ivec==1) {
                    ivec=0;
                }
                else
                {
                    //six
                    third.removeAttribute('one');
                    third.setAttribute('class','zero');
                    fourth.setAttribute('class','one');
                    fourth.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log('vangana vankamana');
                    console.log(second);
                }
            }, 2000);  
            }
    });
}      
//Validation of shapes
var shapes=document.querySelectorAll('input[name="shapes"]');
var shapevalue=''
var five=document.getElementById("five");
for (const shape of shapes) {
    shape.addEventListener('click',function() {
        shapevalue=shape.value;
        console.log(shapevalue);
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
            }
            else
            {
                //seven
                fourth.removeAttribute('one');
                fourth.setAttribute('class','zero');
                five.setAttribute('class','one');
                five.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
                console.log(second);
            }
        }, 2000);  
    })
}

//Validation of colors

var colors=document.querySelectorAll('input[name="colour"]');
var colorvalue=''
var six=document.getElementById("six");
for (const color of colors) {
    color.addEventListener('click',function() {
        colorvalue=color.value;
        console.log(colorvalue);
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
            }
            else
            {
                //eight
                five.removeAttribute('one');
                five.setAttribute('class','zero');
                six.setAttribute('class','one');
                six.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
                console.log(second);
            }
        }, 2000);  
    })
}

//Validation of Fruit
var confirm2=document.getElementById('confirm2');
var fruit=document.getElementById('fruit');
var seven=document.getElementById('seven');
var comment6=document.getElementById('comment6');
var fruitname='';
confirm2.addEventListener('click',function(e) {
    var temp2=fruit.value;
    temp2=temp2.toLowerCase();
    if(temp2.search(/[^A-Za-z\s]/)==-1)
    {
        if (temp2.length>2 && temp2.length<10)
        {
            fruitname=temp2;
            if (fruitname=='banana') {
                comment6.innerText="That's cool go on...";
                comment6.style.color="blue";
            }
            else
            {
                comment6.innerText="Ok,go on...";
                comment6.style.color="blue";
            }
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(function () {
                if (ivec==1) {
                    ivec=0;
                }
                else
                {
                    //Nine
                    six.removeAttribute('one');
                    six.setAttribute('class','zero');
                    seven.setAttribute('class','one');
                    seven.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log(one);
                    console.log(second);
                }

            },2000);
        }
        else
        {
            comment6.innerText="Fruit name should be greater than 2 and less than 10";
            comment6.style.color="red";
            
           
        }
    }
    else
    {
        comment6.innerText="Alphabet only allowed";
        comment6.style.color="red";
    }
});

//Validation of clock;
var eight=document.getElementById("eight");
var clocks=document.querySelectorAll('input[name="clock"]');
var clockvalue=''

for (const clock of clocks) {
    clock.addEventListener('click',function() {
        clockvalue=clock.value;
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
            }
            else
            {
                //eleven
                seven.removeAttribute('one');
                seven.setAttribute('class','zero');
                eight.setAttribute('class','one');
                eight.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            }    
           
        }, 2000);  
    })
}


//Validation of Math

var maths=document.querySelectorAll('input[name="math"]');
var mathvalue=''
var nine=document.getElementById("nine");
for (const math of maths) {
    math.addEventListener('click',function() {
        mathvalue=math.value;
        console.log(mathvalue);
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
            }
            else
            {
                //twelve
                eight.removeAttribute('one');
                eight.setAttribute('class','zero');
                nine.setAttribute('class','one');
                nine.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            }            
           
        }, 2000);  
    })
}

//Validation for voice word
var ten=document.getElementById('ten');
var k=0;
var speakword=document.getElementById("speakword");
var wordheader=document.getElementById("wordheader");

var SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
var voicecomments=['cool voice','pretty voice','awful voice'];
var recognition =new SpeechRecognition();  
var d=0;

recognition.onstart=function(){
   
    console.log("startedD");
    var comment9=document.getElementById('comment9');
    comment9.innerText="Recognition started,speak now...";
    comment9.style.color="blue";
     
      
    //recognition.stop();
    //start();
};

recognition.onend=function(event) {
    console.log("hi");
    if (k==1) {
        console.log("we get a result");
    }
    else
    {
        comment9.innerText="Just talk something...";
        comment9.style.color="red";
    }
}
recognition.onerror=function () {
    console.log("error");
    comment9.innerText="Something went wrong!,Try again";
    comment9.style.color="red";
}

recognition.onresult=function(event)
{
    
    //console.log(event);
    console.log("i am result bro");
    var transcript1 = event.results[0][0].transcript;
    k=1;
    //console.log(transcript);
    transcript1=transcript1.toLowerCase();
    if (transcript1.indexOf("helicopter")==0) {

        speakword.style.visibility="hidden";
        wordheader.style.visibility="hidden";
        comment9.innerText="You pronounced correctly and you have a "+voicecomments[Math.floor(Math.random()*3)];
        comment9.style.top="-20%";
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
            }
            else
            {
                //Thirteen
                nine.removeAttribute('one');
                nine.setAttribute('class','zero');
                ten.setAttribute('class','one');
                ten.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            }
           
        }, 3000);
    }
    else
    {
       
        if (d==0) {
            comment9.innerText="Try again,you are pronouncing wrong";
            comment9.style.color="red";
            d++;
        }
        else
        {
            speakword.style.visibility="hidden";
            wordheader.style.visibility="hidden";
            comment9.innerText="Ok...Try next one";
            comment9.style.color="blue";
            comment9.style.top="-20%";
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(() => {
                if (ivec==1) {
                    ivec=0;
                }
                else
                {
                    //fourteen
                    nine.removeAttribute('one');
                    nine.setAttribute('class','zero');
                    ten.setAttribute('class','one');
                    ten.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log('vangana vankamana');
                }
            
            }, 3000);
                
        }
        
        
    }
};



var sword=document.getElementById("speakword");
sword.addEventListener('click',start)
function start()
{
    recognition.start();

}

    
//Voice recogonition sentence
var eleven=document.getElementById('eleven');
var j=0;
var speaksen=document.getElementById("speaksen");
var senheader=document.getElementById("senheader");

var recognition1=new SpeechRecognition();  
var d=0;

recognition1.onstart=function(){
    
    console.log("startedrgd");
    var comment10=document.getElementById("comment10");
    comment10.innerText="Recognition started,speak now...";
    comment10.style.color="blue";
     
      
    //recognition.stop();
    //start();
};

recognition1.onend=function(event) {
    console.log("hi");
    if (j==1) {
        console.log("we get a result");
    }
    else
    {
        comment10.innerText="Just talk something...";
        comment10.style.color="red";
    }
}
recognition1.onerror=function () {
    console.log("error");
    comment10.innerText="Something went wrong!,Try again";
    comment10.style.color="red";
}

recognition1.onresult=function(event)
{
    
    //console.log(event);
    console.log("i am result bro");
    var transcript2 = event.results[0][0].transcript;
    j=1;
    console.log(transcript2);
    transcript2=transcript2.toLowerCase();
    transcript2=transcript2.split(" ").join("");
    if (transcript2.indexOf("catsatonthemat")==0) {

        speaksen.style.visibility="hidden";
        senheader.style.visibility="hidden";
        comment10.innerText="You pronounced correctly and you have a "+voicecomments[Math.floor(Math.random()*3)];
        comment10.style.top="-20%";
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
           }
            else
            {
                //fiveteen
                ten.removeAttribute('one');
                ten.setAttribute('class','zero');
                eleven.setAttribute('class','one');
                eleven.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            
            }
        }, 3000);
    }
    else
    {
       
        if (d==0) {
            comment10.innerText="Try again,you are pronouncing wrong";
            comment10.style.color="red";
            d++;
        }
        else
        {
            speaksen.style.visibility="hidden";
            senheader.style.visibility="hidden";
            comment10.innerText="Ok...Try next one";
            comment10.style.color="blue";
            comment10.style.top="-20%";
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(() => {
                if (ivec==1) {
                    ivec=0;
               }
                else
                {
                    //sixteen
                    ten.removeAttribute('one');
                    ten.setAttribute('class','zero');
                    eleven.setAttribute('class','one');
                    eleven.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log('vangana vankamana');
                }
            }, 3000);
                
        }
        
        
    }
};




speaksen.addEventListener('click',start1)
function start1()
{
    recognition1.start();

}





//Validation of nine
var confirm3=document.getElementById("confirm3");
var no=document.getElementById('num');
var comment7=document.getElementById('comment7');
var ninevalue='';
var twelve=document.getElementById('twelve');
confirm3.addEventListener('click',function(e) {
    var temp3=no.value;
    if (temp3.length<1 || temp3.length>5) {
        comment7.innerText="Number length should be less than 5 and greater than 1";
        comment7.style.color="red";
    }
    else
    {
        if (isNaN(temp3)==0) {
            ninevalue=temp3;
            console.log(ninevalue);
            if (ninevalue%10==9) {
               comment7.innerText="Cool,Try next one";
               comment7.style.color="blue";
            }
            else
            {
                comment7.innerText="Ok..Try next one";
                comment7.style.color="blue";
            }
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(() => {
                if (ivec==1) {
                    ivec=0;
               }
                else
                {
                    //seventeen
                    eleven.removeAttribute('one');
                    eleven.setAttribute('class','zero');
                    twelve.setAttribute('class','one');
                    twelve.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log('vangana vankamana');
                }
               
            }, 2000);  

        }
        else
        {
            comment7.innerText="I asked for number";
            comment7.style.color="red";
        }
    }
});

//Validation for stress
var stress=document.querySelectorAll('input[name="stress"]');
var stressvalue=''
var thirt=document.getElementById("thirt");
var comment8=document.getElementById('comment8');
for (const stres of stress) {
    stres.addEventListener('click',function() {
        stressvalue=stres.value;
        console.log(stressvalue);
        if (stressvalue=="syes") {
            comment8.innerText="Spend some time with friends...";
            comment8.style.color="blue";
        }
        else
        {
            comment8.innerText="You are not a humman";
            comment8.style.color="red";
        }
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
           }
            else
            {
                //eighteen
                twelve.removeAttribute('one');
                twelve.setAttribute('class','zero');
                thirt.setAttribute('class','one');
                thirt.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            }
        }, 2000);  
    })
}

//Validation for Hug
var hug=document.querySelectorAll('input[name="hug"]');
var hugvalue=''
var fourt=document.getElementById("fourt");
var comment9=document.getElementById('comment9');
for (const hugg of hug) {
    hugg.addEventListener('click',function() {
        hugvalue=hugg.value;
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
           }
            else
            {
                //nineteen
                thirt.removeAttribute('one');
                thirt.setAttribute('class','zero');
                fourt.setAttribute('class','one');
                fourt.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            }

        }, 1500);  
    })
}

//Validation for sentence text
qndiv.style.display='none';
timeout.style.display='none';
console.log(abtn);
var avalue=''
abtn.addEventListener('click',play);
var auname=document.getElementById('auname');
var confirm4=document.getElementById('confirm4');
var comment11=document.getElementById('comment11');
var fivet=document.getElementById('fivet');
console.log(audio);
function play(e)
{
    audio.play();
}
confirm4.addEventListener('click',function (e) {
    var temp4=auname.value;
    //console.log(temp4);
    if(temp4.search(/[^A-Za-z\s]/)==-1)
    {
        if (temp4.length>7 && temp4.length<15)
        {
            avalue=temp4;
            avalue=avalue.toLowerCase(avalue);
            avalue=avalue.split(" ").join("");
            comment11.innerText="Cool...Try next one";
            comment11.style.color="blue";
            if (avalue=="boxwithfox") {
                console.log("Lost stars");
            }
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(function () {
                if (ivec==1) {
                    ivec=0;
               }
                else
                {
                    //twenty
                    fourt.removeAttribute('one');
                    fourt.setAttribute('class','zero');
                    fivet.setAttribute('class','one');
                    fivet.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                }    
            },2000);
        }
        else
        {
            comment11.innerText="Sentence should be greater than 6 and lesser than 15";
            comment11.style.color="red";
            
           
        }
    }
    else
    {
        comment11.innerText="Enter a valid sentence";
        comment11.style.color="red";
    }
    
})



//timeout


let sec='60';
var min='2';
console.log(sec.length);
var sixteen=document.getElementById('sixteen');
passagebtn.onclick=function () {
    passagebtn.style.display='none';
    qndiv.style.display='block';
    timeout.style.display='block';
    qndiv.style.font
    
    myin=setInterval(() => {
        var lens=sec.length;
        sec--;
        if(sec==9)
            timeout.innerHTML=min+':'+'0'+sec;
        else if(lens==1)
            timeout.innerHTML=min+':'+'0'+sec;
        else
            timeout.innerHTML=min+':'+sec;
        
        if(sec==0)
        {
            
            if(min!=0)
                min--;
            timeout.innerHTML=min+':'+'0'+sec;
            sec='60'
            
        }
    
        sec=''+sec+'';
        console.log(min);
        console.log(sec);
        stop();
    }, 1000);
}
function stop()
{
    if (min==0) 
        timeout.style.color='red';      
    
    if(min==2 && sec==58)
    {
        clearInterval(myin);
        timeheader.style.display='none';
        timeout.style.display='none';
        qndiv.style.display='none';
        var div='<h1 style="font-size: 1.2rem;position:relative;top:11%;text-align: center;">Answer the question</h1>'+
        '<h3 style="font-size:0.9rem;position:relative;top:8%;text-align:center;"id="bqn1">Bruce wayne is a...</h3>'+
        '<div id="richdiv" style="text-align: center; position:  relative; top:8%; left:-1%;">'+
        
        '<input type="radio" name="bruce1"value="milli" id="milli" style="position:relative;left:0.3%"/>'+
        '<label for="milli" style="font-size: 0.7rem; position:relative;">&nbsp;&nbsp;Millionarie and playboy</label><br>'+
        '<input type="radio" name="bruce1"value="billi" id="billi" style="position:relative;"/>'+
        '<label for="billi" style="font-size: 0.7rem; position: relative;">&nbsp;&nbsp;Billionarie and playboy</label><br>'+
        '</div>'+
        '<h3 style="font-size:0.9rem;position:relative;top:8%;text-align:center;visibility:hidden;"id="bqn2">Name of the superhero mention in the passage</h3>'+
        '<div id="superdiv" style="text-align: center; position:  relative; top:8%; left:-1%;visibility:hidden;">'+
        
        '<input type="radio" name="bruce2"value="batman" id="batman" style="position:relative;"/>'+
        '<label for="batman" style="font-size: 0.7rem; position:relative;">&nbsp;&nbsp;Batman</label><br>'+
        '<input type="radio" name="bruce2"value="ironman" id="ironman" style="position:relative;"/>'+
        '<label for="ironman" style="font-size: 0.7rem; position: relative;">&nbsp;Ironman</label><br>'+
        '</div>';
        
        fifteen.innerHTML=div;
        var batradio=document.querySelectorAll('input[name="bruce1"]');
        var batdiv1=document.getElementById('richdiv'); 
        var batqn1=document.getElementById('bqn1');
        console.log(batdiv1);
        var batqn2=document.getElementById('bqn2');
        var batdiv2=document.getElementById('superdiv');
        console.log(batdiv2);
        for (const bat of batradio) {
            bat.addEventListener('click',function() {
                //Validation of 1qn
                console.log(bat.value);
                console.log("hi");
                setTimeout(() => {
                    batdiv1.style.display='none';
                    batqn1.style.display='none';
                    batqn2.style.visibility='visible';
                    batdiv2.style.visibility='visible';

                    var batradio2=document.querySelectorAll('input[name="bruce2"]');
                    for (const bat1 of batradio2) {
                        bat1.addEventListener('click',function () {
                            console.log(bat1.value);
                            if (bat1.value=="batman") {
                                console.log("HI");
                                pbtn.addEventListener('click',()=>{
                                    ivec=1;
                                });
                                setTimeout(() => {
                                    console.log(ivec);
                                    if (ivec==1) {
                                        ivec=0;
                                   }
                                    else
                                    {
                                        //21
                                        fivet.removeAttribute('one');
                                        fivet.setAttribute('class','zero');
                                        sixteen.setAttribute('class','one');
                                        sixteen.setAttribute('one','hello');
                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                        console.log('vangana vankamana');
                                    }
                                }, 2000);
                            }
                            else
                            {
                                console.log("I think you don't like batman");
                                pbtn.addEventListener('click',()=>{
                                    ivec=1;
                                });
                                setTimeout(() => {
                                    console.log(ivec);
                                    
                                    if (ivec==1) {
                                        ivec=0;
                                    }
                                    else
                                    {
                                        //22
                                        
                                        fivet.removeAttribute('one');
                                        fivet.setAttribute('class','zero');
                                        sixteen.setAttribute('class','one');
                                        sixteen.setAttribute('one','hello');
                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                        console.log('vangana vankamana');
                                    }
                                }, 1500);
                            }
                        });
                    }

                }, 1000);


            });
        }        
        
        
    }

}       

//Hand validation
var showbtn=document.getElementById('show');
var hand=document.getElementById('hand');
var seventeen=document.getElementById('seventeen');
var flags=0;
var facecomments=['Cool face','Pretty face','Awful face'];
var fc=facecomments[Math.floor(Math.random()*3)];
showbtn.addEventListener('click',function click(e) {
    hand.style.visibility="hidden";
    showbtn.style.visibility="hidden";


    var camera=
    
    '<video id="video" style="width:400%;height:auto;position:relative;left:-150%;top:15%;object-fit:contain;"></video>'+
    
    '<h3 id="handcomment"style="position:relative;top:15%;font-size:1rem;text-align:center;"></h3>';
    sixteen.innerHTML=camera;
    navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;
    var lmodel;
    var temp=0;
    const video = document.getElementById('video');
    console.log(handTrack);
    console.log(navigator.getUserMedia);
    handTrack.startVideo(video).then(status=>{
        if(status)
        {
            navigator.getUserMedia({video:true},stream=>{
                
                video.srcObject=stream;
                
                var calldetect=setInterval(detect,1000);
                setTimeout(() => {
                    clearInterval(calldetect);
                    handTrack.stopVideo();
                    if (stream!=null) {
                        stream.getTracks().map(function(val){
                            val.stop();
                        });
                    }
                    video.style.visibility="hidden";
                    console.log(temp);
                    if (temp<5) {
                        console.log("hellods");
                        //setTimeout(() => {
                           
                            if(flags<1)
                            {
                                flags++;
                                console.log("h1");
                                sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;'>Not recogonized</h1>"+
                                                   '<input type="button" value="Try Again" id="try">';
                                var trybtn=document.getElementById('try');
                                trybtn.addEventListener('click',function (e) {
                                    click();
                                });
                            } 
                            else{
                                sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;color:blue;'>Cool move on...</h1>";
                                //write here  
                                pbtn.addEventListener('click',()=>{
                                    ivec=1;
                                }); 
                                setTimeout(() => {
                                    if (ivec==1) {
                                        ivec=0;
                                   }
                                    else
                                    {
                                        //23
                                        sixteen.removeAttribute('one');
                                        sixteen.setAttribute('class','zero');
                                        seventeen.setAttribute('class','one');
                                        seventeen.setAttribute('one','hello');
                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                        console.log('vangana vankamana');
                                    }
                                }, 1500);     
                            }   
                       // },500);
                        
                    }
                    else
                    {
                        sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;color:blue;'>Cool move on...</h1>";
                        pbtn.addEventListener('click',()=>{
                            ivec=1;
                        });
                        setTimeout(() => {
                            if (ivec==1) {
                                ivec=0;
                           }
                            else
                            {
                                //24
                                sixteen.removeAttribute('one');
                                sixteen.setAttribute('class','zero');
                                seventeen.setAttribute('class','one');
                                seventeen.setAttribute('one','hello');
                                pbtn.addEventListener('click',()=>{ivec=2;});
                                console.log('vangana vankamana');
                            }
                        }, 1500);
                    }
                }, 10000);


            },err=>{
                sixteen.innerHTML="<h1 style='font-size: 1rem;position:relative;top:20%;text-align: center;color:red;'>Something went wrong,Try again</h1>"+
                                '<input type="button" value="Try Again" id="try2">';
                                var trybtn2=document.getElementById('try2');
                                trybtn2.addEventListener('click',function (e) {
                                    click();
                                });
            });
        }
        
    });
            
    function detect()
    {
        lmodel.detect(video).then(predictions=>
        {
                console.log(predictions);

            if (predictions[0]["label"]=="face") {
                handcomment.innerText="Avoid your"+' '+fc;
                handcomment.style.color="red";

            }
            if (predictions[0]["label"]=="open") {
                handcomment.innerText="Recogonizing..."
                handcomment.style.color="blue";
                temp++;
            }
            
        });
        
        
    }
        
    handTrack.load().then(model => { 
        lmodel=model;
        
    }); 


});

//Audio to Voice
var listen=document.getElementById('Listen');
var speaks=document.getElementById('speaks');
var lr=document.getElementById('l/r');
var audio2=document.getElementById('audio2');
var eighteen=document.getElementById('eighteen');
listen.addEventListener('click',function(e){
    audio2.play();
});
var a=0;
var speaks=document.getElementById("speaks");
var SpeechRecognition= SpeechRecognition ||webkitSpeechRecognition;
var recognition2 =new SpeechRecognition();  
var d=0;
recognition2.onstart=function(){
   
    var comment12=document.getElementById('comment12');
    comment12.innerText="Recognition started,speak now...";
    comment12.style.color="blue";
    
    //recognition.stop();
    //start();
};

recognition2.onend=function(event) {
    console.log("hi");
    if (a==1) {
        console.log("we get a result");
    }
    else
    {
        comment12.innerText="Just talk something...";
        comment12.style.color="red";
    }
}
recognition2.onerror=function (err) {
    console.error(err);
    comment12.innerText="Something went wrong!,Try again";
    comment12.style.color="red";
}

recognition2.onresult=function(event)
{
  
    //console.log(event);
    console.log("i am result bro");
    var transcript3 = event.results[0][0].transcript;
    a=1;
    console.log(transcript3);
    transcript3=transcript3.toLowerCase();
    transcript3=transcript3.split(" ").join("");
    if (transcript3.indexOf("helloworld")==0) {

        listen.style.visibility="hidden";
        speaks.style.visibility="hidden";
        lr.style.visibility="hidden";
        comment12.innerText="You pronounced correctly ";
        comment12.style.top="-9%";
        pbtn.addEventListener('click',()=>{
            ivec=1;
        });
        setTimeout(() => {
            if (ivec==1) {
                ivec=0;
           }
            else
            {
                //24
                seventeen.removeAttribute('one');
                seventeen.setAttribute('class','zero');
                eighteen.setAttribute('class','one');
                eighteen.setAttribute('one','hello');
                pbtn.addEventListener('click',()=>{ivec=2;});
                console.log('vangana vankamana');
            }
        }, 1500);
    }
    else
    {
       
        if (d==0) {
            comment12.innerText="Try again,you are pronouncing wrong";
            comment12.style.color="red";
            d++;
        }
        else
        {
            listen.style.visibility="hidden";
            speaks.style.visibility="hidden";
            lr.style.visibility="hidden";
            comment12.innerText="Ok...Try next one";
            comment12.style.color="blue";
            comment12.style.top="-9%";
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(() => {
                if (ivec==1) {
                    ivec=0;
               }
                else
                {
                    //24
                    seventeen.removeAttribute('one');
                    seventeen.setAttribute('class','zero');
                    eighteen.setAttribute('class','one');
                    eighteen.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log('vangana vankamana');
                }
            }, 1500);    
        }
        
        
    }
};
speaks.addEventListener('click',start2)
function start2()
{
    recognition2.start();
     
}
//Audio and Read
var nineteen=document.getElementById('nineteen');
var lrbtn=document.getElementById('lrbtn');
var lread=document.getElementById('l/read');
var reader=document.getElementById('reader');
var ooo=0;
console.log(reader);
var chirp=document.getElementById('chirp')
lrbtn.addEventListener('click',function xname(e) {
    lrbtn.style.visibility="hidden";
    chirp.play();
    reader.style.visibility="visible";
    setTimeout(() => {
        lread.style.visibility="hidden";
        reader.style.visibility="hidden";
        var hiddendiv=document.getElementById('hiddendiv');
        hiddendiv.style.visibility="visible";
        
        hiddendiv.style.textAlign="center";
        function conn() {
            eighteen.innerHTML='<h1 style="font-size: 1.3rem;position:relative;top:5%;text-align: center;">Yesterday I saw a lion kiss a ______</h1>'+
                                '<input type="radio" name="lion"value="Lioness" id="ls"/>'+
                                '<label for="Lioness" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Lioness</label><br><br>'+
                                '<input type="radio" name="lion"value="Deer" id="deer"/>'+
                                '<label for="Deer" style="font-size: 1rem; position: relative;top:2%;left:45%;">Deer</label>';
            var lionnames=document.querySelectorAll('input[name="lion"]');
            for (const lionname of lionnames) {
                lionname.addEventListener('click',function () {
                    if (lionname.value=="Lioness") {

                    }
                    else
                    {
                        
                    }
                    setTimeout(() => {
                        eighteen.innerHTML='<h1 style="font-size: 1.3rem;position:relative;top:5%;text-align: center;">________ chirping outside the window</h1>'+
                        '<input type="radio" name="birds"value="lbirds" id="lb"/>'+
                        '<label for="lbirds" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Love Birds</label><br><br>'+
                        '<input type="radio" name="birds"value="parrot" id="parr"/>'+
                        '<label for="parrot" style="font-size: 1rem; position: relative;top:2%;left:45%;">Parrot</label>';  
                        var birds=document.querySelectorAll('input[name="birds"]');
                        for (const bird of birds) {
                            bird.addEventListener('click',function () {
                                pbtn.addEventListener('click',()=>{
                                    ivec=1;
                                });
                                setTimeout(() => {
                                    if (ivec==1) {
                                        ivec=0;
                                   }
                                    else
                                    {
                                        //24
                                        eighteen.removeAttribute('one');
                                        eighteen.setAttribute('class','zero');
                                        nineteen.setAttribute('class','one');
                                        nineteen.setAttribute('one','hello');
                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                        console.log('vangana vankamana');
                                    }
                                }, 1500);              
                            });
                        }    
                        
                    }, 1000);
                    
                });
            }
        }

        if (ooo==0) {
            hiddendiv.innerHTML='<input type="button" value="Try again" id="why"></br></br>'+
            ' <input type="button" value="Continue" id="continue">';
            var why=document.getElementById('why');
            var continues=document.getElementById('continue');
            continues.addEventListener('click',conn);
            why.addEventListener('click',function (e) {
                hiddendiv.innerHTML=" ";
                hiddendiv.style.visibility="hidden";
                lread.style.visibility="visible";
                //reader.style.visibility="visible";
                lrbtn.style.visibility="visible";
                ooo=1;
            });
        }
        else
        {
            
            conn();
        }
        
    
    }, 4000);


});
//Nineteen
var twenty=document.getElementById('twenty');




//Teacher/Relatives

//started
//Dysgraphia
var teach=document.getElementById('teach');
var started=document.getElementById('Started');
var twentyone=document.getElementById('twentyone');
started.addEventListener('click',function (e) {
    pbtn.style.visibility="hidden";
    teach.style.visibility="hidden";
    
    twenty.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid have poor handwritting and poor spacing</h1>'+
                    '<input type="radio" name="handwri"value="Yeshand" id="yhand"/>'+
                    '<label for="Yeshand" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Yes</label><br><br>'+
                    '<input type="radio" name="handwri"value="Nohand" id="nhand"/>'+
                    '<label for="Nohand" style="font-size: 1rem; position: relative;top:2%;left:45%;">No</label>';
    var hands=document.querySelectorAll('input[name="handwri"]');
    for (const hand of hands) {
        hand.addEventListener('click',function () {
            if (hand.value=="Yeshand") {
                setTimeout(() => {
                    twenty.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid has difficulty in holding a pen while writing</h1>'+
                                    '<input type="radio" name="hold"value="Yeshold" id="yhold"/>'+
                                    '<label for="Yeshold" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Yes</label><br><br>'+
                                    '<input type="radio" name="hold"value="Nohold" id="nhold"/>'+
                                    '<label for="Nohold" style="font-size: 1rem; position: relative;top:2%;left:45%;">No</label>';
                    var holds=document.querySelectorAll('input[name="hold"]');
                    for (const hold of holds) {
                        hold.addEventListener('click',function () {
                            if (hold.value=="Yeshold") {
                                setTimeout(() => {
                                    twenty.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid has difficulty in coloring or avoid coloring</h1>'+
                                    '<input type="radio" name="kidcolor"value="Yescolor" id="ycolor"/>'+
                                    '<label for="Yescolor" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Yes</label><br><br>'+
                                    '<input type="radio" name="kidcolor"value="Nocolor" id="ncolor"/>'+
                                    '<label for="Nocolor" style="font-size: 1rem; position: relative;top:2%;left:45%;">No</label>';
                                    var kidcolors=document.querySelectorAll('input[name="kidcolor"]');
                                    for (const kidcolor of kidcolors) {
                                        kidcolor.addEventListener('click',function () {
                                            console.log("inniya thanimaye");
                                            if (kidcolor.value=="Yescolor") {
                                                
                                                pbtn.addEventListener('click',()=>{
                                                    ivec=1;
                                                });
                                                setTimeout(() => {
                                                    if (ivec==1) {
                                                        ivec=0;
                                                    }
                                                    else
                                                    {
                                                        //24
                                                        twenty.removeAttribute('one');
                                                        twenty.setAttribute('class','zero');
                                                        twentyone.setAttribute('class','one');
                                                        twentyone.setAttribute('one','hello');
                                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                                        console.log('vangana vankamana');
                                                    }
                                                }, 1500);  
                                            }
                                            else
                                            {
                                                pbtn.addEventListener('click',()=>{
                                                    ivec=1;
                                                });
                                                setTimeout(() => {
                                                    if (ivec==1) {
                                                        ivec=0;
                                                    }
                                                    else
                                                    {
                                                        //24
                                                        twenty.removeAttribute('one');
                                                        twenty.setAttribute('class','zero');
                                                        twentyone.setAttribute('class','one');
                                                        twentyone.setAttribute('one','hello');
                                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                                        console.log('vangana vankamana');
                                                    }
                                                }, 1500);       
                                            }
                                        });
                                    }
                                }, 1000);
                                    
                            }
                            else
                            {
                                
                                pbtn.addEventListener('click',()=>{
                                    ivec=1;
                                });
                                setTimeout(() => {
                                    if (ivec==1) {
                                        ivec=0;
                                    }
                                    else
                                    {
                                        //24
                                        twenty.removeAttribute('one');
                                        twenty.setAttribute('class','zero');
                                        twentyone.setAttribute('class','one');
                                        twentyone.setAttribute('one','hello');
                                        pbtn.addEventListener('click',()=>{ivec=2;});
                                        console.log('vangana vankamana');
                                    }
                                }, 1500);  
                            }
                        });
                    }


                },1000);
            }       
            else
            {
                pbtn.addEventListener('click',()=>{
                    ivec=1;
                });
                setTimeout(() => {
                    if (ivec==1) {
                        ivec=0;
                    }
                    else
                    {
                        //24
                        twenty.removeAttribute('one');
                        twenty.setAttribute('class','zero');
                        twentyone.setAttribute('class','one');
                        twentyone.setAttribute('one','hello');
                        pbtn.addEventListener('click',()=>{ivec=2;});
                        console.log('vangana vankamana');
                    }
                }, 1500);  
            }
        });
    }
});
//Dyspraxia
var twentytwo=document.getElementById('twentytwo');
var sits=document.querySelectorAll('input[name="sit"]');
for (const sit of sits) {
    sit.addEventListener('click',function () {
        if (sit.value=="Yessit") 
        {
            setTimeout(() => {
                twentyone.innerHTML=' <h1 style="font-size: 1.2rem;position:relative;top:5%;text-align: center;">Do the kid disturbs others in the class</h1>'+
                                    '<input type="radio" name="disturb"value="yesdisturb" id="ydisturb"/>'+
                                    '<label for="yesdisturb" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Yes</label><br><br>'+
                                    '<input type="radio" name="disturb"value="nodisturb" id="ndisturb"/>'+
                                    '<label for="nodisturb" style="font-size: 1rem; position: relative;top:2%;left:45%;">No</label>';
                var disturbs=document.querySelectorAll('input[name="disturb"]');
                for (const disturb of disturbs) {
                    disturb.addEventListener('click',function (e) {
                        if (disturb.value=="yesdisturb") {
                            setTimeout(() => {
                                twentyone.innerHTML=' <h1 style="font-size: 1.1rem;position:relative;top:5%;text-align: center;">Do the kid be in motion especially while in silence surrounding</h1>'+
                                '<input type="radio" name="motion"value="yesmotion" id="ymotion"/>'+
                                '<label for="yesdisturb" style="font-size: 1rem;position: relative; top:5%;left: 45%;">Yes</label><br><br>'+
                                '<input type="radio" name="motion"value="nomotion" id="nmotion"/>'+
                                '<label for="nodisturb" style="font-size: 1rem; position: relative;top:2%;left:45%;">No</label>';
                                var motions=document.querySelectorAll('input[name="motion"]');
                                for (const motion of motions) 
                                {
                                    motion.addEventListener('click',function (e) {
                                    if (motion.value=="yesmotion") {
                                            pbtn.addEventListener('click',()=>{
                                                ivec=1;
                                            });
                                            setTimeout(() => {
                                                if (ivec==1) {
                                                    ivec=0;
                                                }
                                                else
                                                {
                                                    //24
                                                    twentyone.removeAttribute('one');
                                                    twentyone.setAttribute('class','zero');
                                                    twentytwo.setAttribute('class','one');
                                                    twentytwo.setAttribute('one','hello');
                                                    pbtn.addEventListener('click',()=>{ivec=2;});
                                                    console.log('vangana vankamana');
                                                }
                                            }, 1500);      
                                    } 
                                    else
                                    {
                                            pbtn.addEventListener('click',()=>{
                                                ivec=1;
                                            });
                                            setTimeout(() => {
                                                if (ivec==1) {
                                                    ivec=0;
                                                }
                                                else
                                                {
                                                    //24
                                                    twentyone.removeAttribute('one');
                                                    twentyone.setAttribute('class','zero');
                                                    twentytwo.setAttribute('class','one');
                                                    twentytwo.setAttribute('one','hello');
                                                    pbtn.addEventListener('click',()=>{ivec=2;});
                                                    console.log('vangana vankamana');
                                                }
                                            }, 1500);
                                    }
                                    });
                                }
                            }, 1000);
                            
                        }
                        else
                        {
                            pbtn.addEventListener('click',()=>{
                                ivec=1;
                            });
                            setTimeout(() => {
                                if (ivec==1) {
                                    ivec=0;
                                }
                                else
                                {
                                    //24
                                    twentyone.removeAttribute('one');
                                    twentyone.setAttribute('class','zero');
                                    twentytwo.setAttribute('class','one');
                                    twentytwo.setAttribute('one','hello');
                                    pbtn.addEventListener('click',()=>{ivec=2;});
                                    console.log('vangana vankamana');
                                }
                            }, 1500);   
                        }
                    });    
                }
                
            },1000);
            
        }
        else
        {
            pbtn.addEventListener('click',()=>{
                ivec=1;
            });
            setTimeout(() => {
                if (ivec==1) {
                    ivec=0;
                }
                else
                {
                    //24
                    twentyone.removeAttribute('one');
                    twentyone.setAttribute('class','zero');
                    twentytwo.setAttribute('class','one');
                    twentytwo.setAttribute('one','hello');
                    pbtn.addEventListener('click',()=>{ivec=2;});
                    console.log('vangana vankamana');
                }
            }, 1500);             
        }
    });
}