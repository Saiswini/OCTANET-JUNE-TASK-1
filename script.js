function order_validate(){
    var name=document.getElementById("name");
    var no=document.getElementById("no.");
    var add=document.getElementById("add");
    var bname=document.getElementById("bname");
    if(name.value=="" && no.value==""&& add.value==""&&bname.value==""){
        alert("Please enter the info.")
        return false;
    }
    else if(no.value.length<10){
        alert("Enter 10 digits of ur phone number");
        return false
    }
    else{
        return true;
    }

}
function validate(){
    var fname=document.getElementById("name");
        var fno=document.getElementById("no");
        var fadd=document.getElementById("add");
        var femail=document.getElementById("email");
        var fcomment=document.getElementById("comment");
        if(fname.value=="" && fno.value==""&& fadd.value==""&&femail.value==""&& fcomment.value==""){
            alert("Please enter the info.")
            return false;
        }
        //     else if(no.value!=""){
            //         if(isNaN(no.value)){
            //         alert("Please enter no. only");
            //         return false;
            //         }
    //         else{
        //             if(no.value.length!=10){
    //         alert("Enter 10 digits of ur phone number");
    //         return false;
    //         }
    //         else{
        //             return true;
        //         }
    //     }
    // }
    else if(fno.value.length<10){
        alert("Please enter 10 digits")
        return false;
    }
    else{
        return true;
    }
}
