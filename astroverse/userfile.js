function formval(){
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var numb = document.getElementById("phoneno").value;
    var i=0;
    var a =0;
    if(name=""){
      alert("Please enter your name.")
    }
    else{
      a++;
    }
    if(email.substring(((email.length)-10),email.length) != "@gmail.com")
    {
        alert("Make sure to end the email with \"@gmail.com\"");
    }
    else{
      a++;
    }
    if(password.length < 6){
      alert("Password should be atleast 6 characters");
    }else{
      a++;
    }
    if(repassword != password){
      alert("password doesnt match");
    }
    else{
      a++;
    }
    for(i=0;i < numb.length;i++)
    {
      if(numb.charCodeAt(i) < '48' || numb.charCodeAt(i) > '57'){
          alert("please enter a valid no.");
          break;
      }
      else{
        a++;
      }
    }
    if(a==15){
      document.location = "./index.html";
    }
    else{
      document.reload();
    }
  }
