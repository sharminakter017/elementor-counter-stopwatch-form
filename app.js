const headicon = document.querySelector('#headicon');
const head = document.querySelector('.head');
const myrow = document.querySelector('.myrow');
const heading = document.querySelector('#heading');
const alignment = document.querySelector('#alignment-icon-div');
const text_align = document.querySelector('.text-align');
const align1 = document.querySelectorAll('.align1');
const textsize = document.querySelector('#textsize');
const my_font = document.querySelector('.my-font');
const font_size = document.querySelector('#font_size');
const color = document.querySelector('#color');
const picker = document.querySelector('.picker');
const color_picker = document.querySelector('#color_picker');
const fontfamily = document.querySelector('#fontfamily');
const family = document.querySelector('.family');
const ff = document.querySelector('#ff');
const fw = document.querySelector('#fw');
const bold = document.querySelector('#bold');
const fweight = document.querySelector('.fweight');
const save = document.querySelector('.save');
const tone = document.querySelector('#tone');
const start = document.querySelector('#start');
const back = document.querySelector('#back');
const reset = document.querySelector('#reset');
const output = document.querySelector('.output');
const p = document.querySelector('p');
const underoutput = document.querySelector('#underoutput');
const couterWithBell = document.querySelector('.couterWithBell');
const fontcounter = document.querySelector('#fontcounter');
const count_start = document.querySelector('#count_start');
const count_stop = document.querySelector('#count_stop');
const remove = document.querySelector('#remove');
const watchoutput = document.querySelector('#watchoutput');
const stopp = document.querySelector('#stopp');
const sw = document.querySelector('.sw');
const swatch = document.querySelector('#swatch');
const wform = document.querySelector('#wform');
const my_form = document.querySelector('.my-form');


headicon.onclick = () =>{
    head.style.display = "block";
    myrow.style.display = "block";
}

heading.onkeyup = () =>{
    myrow.innerHTML = heading.value;
}
alignment.onclick = () =>{
    text_align.style.display = "block"
    myrow.style.display = "block";

}

align1.forEach (item => {
    item.onchange = () => {
        myrow.style.textAlign = item.value;

    }
})



textsize.onclick = () => {
    my_font.style.display = "block"



}

font_size.oninput = () => {
    myrow.style.fontSize = font_size.value + 'px'

}
color.onclick = () => {
    picker.style.display = "block"

}
color_picker.oninput = () => {
    myrow.style.color = color_picker.value;

}
fontfamily.onclick = () => {
    family.style.display = "block"

}

ff.onchange = () => {
    myrow.style.fontFamily = ff.value;

}
fw.onchange = () =>{
    myrow.style.fontWeight = fw.value;

}
bold.onclick = () => {
    fweight.style.display = "block";
}

wform.onclick = () => {
    my_form.style.display = "block";

}



save.onclick = () => {
    tone.play();
    head.innerHTML = '';
    text_align.innerHTML = '';
    my_font.innerHTML = '';
    picker.innerHTML = '';
    family.innerHTML = '';
    fweight.innerHTML = '';
    myrow.innerHTML = 'Thank you so much for using my eLementer Page Builder!!'
}



// Counter with bell====================================================>

let load = '';
start.onclick = () => {
  load++;
  if(load <= 10){
    output.innerHTML = load;
    ring.play();

  }else{
    underoutput.innerHTML = 'You can no longer move forward!!';
    underoutput.style.color = "green"
    bell.play();

  }
  

}


//back==============>



back.onclick = () => {
  load--;
  if(load >= 0){
    ring.play();
    output.innerHTML = load;


  }else{
    underoutput.innerHTML = 'You can\'t go back anymore!!';
    underoutput.style.color = "red"
    bell.play()

  }
  

}

//reset================> 

reset.onclick = () => {
    
   
      output.innerHTML = 0;
      underoutput.innerHTML = 'All files reset done!!';
      underoutput.style.color = "orange"
      bell.play();
  
    }


    fontcounter.onclick = () => {
        couterWithBell.style.display = "block"

    }


    // stop-watch==================> 

    let stopwacths = 0;
    let fulstop ;

    count_start.onclick = () => {
        fulstop = setInterval(() => {
            if(stopwacths <=19){
                ring.play();
                stopwacths++;
                watchoutput.innerHTML = stopwacths;
            }else{
                stopp.innerHTML = 'Successfully completed!!!!';
                stopp.style.color = "green"
                watchoutput.style.color = "green"
               
               

            }
            
        }, 1000);

       }



       count_stop.onclick = () => {
           clearInterval(fulstop);
           watchoutput.innerHTML = stopwacths;
           ring.play();
       }

       remove.onclick = () => {
        clearInterval(fulstop);
        watchoutput.innerHTML = 0;
        stopp.innerHTML = "Nothing Else Here!!"
        stopp.style.color = "red"
        bell.play();
        

       }


       swatch.onclick = () => {
        sw.style.display = "block"

       }




       // form-validation ===================================================>

       const user_form = document.getElementById('user_form');
       const uname = document.getElementById('uname');
       const uemail = document.getElementById('uemail');
       const ucell = document.getElementById('ucell');
       const uuser = document.getElementById('uuser');
       const msg = document.querySelector('.msg');
       const name_req = document.querySelector('.name_req');
       const email_req = document.querySelector('.email_req');
       const cell_req = document.querySelector('.cell_req');
       const user_req = document.querySelector('.user_req');



       user_form.onsubmit = (e) => {
           e.preventDefault();

           // keyup event ===========================>

           uname.onkeyup = () => {
            if(uname.value == ''){
                name_req.innerHTML = `<span>*Required</span>`;
                name_req.style.color = "red";
                name_req.style.fontWeight = "600";
                name_req.style.fontFamily = "poppins";

            }else{
                name_req.innerHTML = '';
            }
            

           }


           uemail.onkeyup = () => {
            if(uemail.value == ''){
                email_req.innerHTML = `<span>*Required</span>`;
                email_req.style.color = "red";
                email_req.style.fontWeight = "600";
                email_req.style.fontFamily = "poppins";

            }else{
                email_req.innerHTML = '';
            }

           }


           ucell.onkeyup = () => {
            if(ucell.value == ''){
                cell_req.innerHTML = `<span>*Required</span>`;
                cell_req.style.color = "red";
                cell_req.style.fontWeight = "600";
                cell_req.style.fontFamily = "poppins";

            }else{
                cell_req.innerHTML = '';
            }

           }

           uuser.onkeyup = () => {
            if(uuser.value == ''){
                user_req.innerHTML = `<span>*Required</span>`;
                user_req.style.color = "red";
                user_req.style.fontWeight = "600";
                user_req.style.fontFamily = "poppins";

            }else{
                user_req.innerHTML = '';
            }

           }

           //=======================if else ==================>




           
            

           
           if(uname.value == ''){
            name_req.innerHTML = `<span>*Required</span>`;
            name_req.style.color = "red";
            name_req.style.fontWeight = "600";
            name_req.style.fontFamily = "poppins";

        }else{
            name_req.innerHTML = '';
        }

           

            if(uemail.value == ''){
                email_req.innerHTML = `<span>*Required</span>`;
                email_req.style.color = "red";
                email_req.style.fontWeight = "600";
                email_req.style.fontFamily = "poppins";

            }else{
                email_req.innerHTML = '';
            }

            if(ucell.value == ''){
                cell_req.innerHTML = `<span>*Required</span>`;
                cell_req.style.color = "red";
                cell_req.style.fontWeight = "600";
                cell_req.style.fontFamily = "poppins";

            }else{
                cell_req.innerHTML = '';
            }


            if(uuser.value == ''){
                user_req.innerHTML = `<span>*Required</span>`;
                user_req.style.color = "red";
                user_req.style.fontWeight = "600";
                user_req.style.fontFamily = "poppins";

            }else{
                user_req.innerHTML = '';
            }





           if(uname.value == '' || uemail.value == '' || ucell.value == '' || uuser.value == ''){
            msg.innerHTML = setalert('Field must not be empty!!');

           }else if(emailcheck(uemail.value) == false){
            msg.innerHTML = setalert('Invalid Email Address!!','warning')

           }else if(cellcheck(ucell.value) == false){
            msg.innerHTML = setalert('Invalid Phone Number!!','info')

           }
           else{
            msg.innerHTML = setalert('Data Stable here.','success')

           }

       }

   


    
  

