function validation(){

    var a=  document.getElementById("formm").value;
    var customername= document.getElementById("passengername").value;
    var phonenumber=document.getElementById("phonenumber").value;
    var yourfrom =document.getElementById("splace").value;
    var yordestination=document.getElementById("eplace").value;
    var date =document.getElementById("day").value;
    var hour = document.getElementById("hh").value;
    var dd_hour = document.getElementById("dd").value;
    var no_passanger=document.getElementById("passenger").value;
    var mailformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;
    var emailvalidate =document.getElementById("email").value;
 
   


    
    if(customername ==""){
        document.getElementById("passengername").style.borderColor="red";
        document.getElementById("error").innerHTML="**Fill The Name**";
        return false
    }
    else{
        document.getElementById("passengername").style.borderColor="green" 
        document.getElementById("error").innerHTML="";
    }
    // phone number validation
    
if (phonenumber.length !==10) {
    document.getElementById("phonenumber").style.borderColor = "red";
    document.getElementById("phonenumbererror").innerHTML = "**Enter The correct format number**";
    return false;
} else {
    document.getElementById("phonenumber").style.borderColor = "green";
    document.getElementById("phonenumbererror").innerHTML = "";
}

    // from validation
    if(yourfrom ==""){
        document.getElementById("splace").style.borderColor="red";
        document.getElementById("splaceerror").innerHTML="**Enter The Your From**";
        return false
    }
    else{
        document.getElementById("splace").style.borderColor="green";
        document.getElementById("splaceerror").innerHTML="";
    }
    // to validation
    if(yordestination==""){

        document.getElementById("eplace").style.borderColor="red";
        document.getElementById("eplaceerror").innerHTML="**Enter The Your Detination**";
        return false

    }
    else{
        document.getElementById("eplace").style.borderColor="green";
        document.getElementById("eplaceerror").innerHTML="";
    }
    // date-and-time validation
    if(date==""){

        document.getElementById("day").style.borderColor="red";
        document.getElementById("dayerror").innerHTML="**Enter The current Date**";
        return false

    }
    else{
        document.getElementById("day").style.borderColor="green";
        document.getElementById("dayerror").innerHTML="";
    }
    // hour-hh validation
    if(hour==""){

        document.getElementById("hh").style.borderColor="red";
        document.getElementById("hherror").innerHTML="**Enter The Time**";
        return false

    }
    else{
        document.getElementById("hh").style.borderColor="green";
        document.getElementById("hherror").innerHTML="";
    }
    // dd valiadation
    if(dd_hour==""){

        document.getElementById("dd").style.borderColor="red";
        document.getElementById("dderror").innerHTML="**Enter The Time**";
        return false

    }
    else{
        document.getElementById("dd").style.borderColor="green";
        document.getElementById("dderror").innerHTML="";
    }
    // passanger validation

    if(no_passanger==""){

        document.getElementById("passenger").style.borderColor="red";
        document.getElementById("passangererror").innerHTML="**Enter The Passenger**";
        return false

    }
    else{
        document.getElementById("passenger").style.borderColor="green";
        document.getElementById("passangererror").innerHTML="";
       
    }
if(emailvalidate==""||emailvalidate.match(mailformat) ){

    document.getElementById("email").style.borderColor="red";
    document.getElementById("emailerror").innerHTML="**Enter The Correct Email**";
    return false

}
else{
    document.getElementById("email").style.borderColor="green";
    document.getElementById("emailerror").innerHTML="";
}

}