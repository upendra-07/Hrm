
function validation(){

    //  storing input values in diff variables

    let bankName = document.getElementById("bname").value;
    let accountNo = document.getElementById("acc-nu").value;
    let ifsc_code = document.getElementById("ifsc").value;
    let holder = document.getElementById("ho-name").value;
    let branch = document.getElementById("type1").value;

    // JavaScript RegExp 

    let regName = /\d/;
    let regNumber = (/^\d+$/);
    let regIfsc =( /^[A-Z]{4}0[A-Z0-9]{6}$/);
    let regSplchar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    let isValid = false;

    // checking bank name 

    if (bankName=="" || regName.test(bankName) || regSplchar.test(bankName)){
        document.getElementById("error1").style.display = "block";
        document.getElementById("error1").innerHTML = "This field contains only alphabets [a-z/A-Z]";
        isValid = true;
    } else {
        document.getElementById("error1").innerHTML="";
        document.getElementById("error1").style.display="none";
    }
    

    //  Account number

    if (accountNo=="" || !regNumber.test(accountNo)|| regSplchar.test(accountNo)){
        document.getElementById("error2").style.display = "block";
        document.getElementById("error2").innerHTML = "This field contains only numbers [0-9]";
        isValid = true;
    } else {
        document.getElementById("error2").innerHTML="";
        document.getElementById("error2").style.display="none";
    }
    
    //  for IFSC code

    if (ifsc_code=="" ||!regIfsc.test(ifsc_code)|| regSplchar.test(ifsc_code)){
        document.getElementById("error3").style.display = "block";
        document.getElementById("error3").innerHTML = `This field contains only alphanumeric value [a-z/A-Z/0-9]`;
        isValid = true;
    } else {
        document.getElementById("error3").innerHTML="";
        document.getElementById("error3").style.display="none";
    }
    
    //  for branch name

    if (branch=="" ||regName.test(branch)|| regSplchar.test(branch)){
        document.getElementById("error4").style.display = "block";
        document.getElementById("error4").innerHTML = "This field contains only alphabets [a-z/A-Z]";
        isValid = true;
    } else {
        document.getElementById("error4").innerHTML="";
        document.getElementById("error4").style.display="none";

    }


    //  for holder name

    if (holder=="" ||regName.test(holder)|| regSplchar.test(holder)){
        document.getElementById("error5").style.display = "block";
        document.getElementById("error5").innerHTML = "This field contains only alphabets[a-z/A-Z]";
        isValid = true;
    } else {
        document.getElementById("error5").innerHTML="";
        document.getElementById("error5").style.display="none";

    }


    if (isValid===false){
        return true;        
    }

    else{
        return false;
    }

}

function submitForm(){
    let x = true;
    if (x===true){
        document.getElementsByClassName('acc-det').style.display = "none";
}
}

 


 

