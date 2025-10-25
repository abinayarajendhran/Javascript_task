 function fun(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const userdata = {
    name: name,
    email: email,
    password: password,
    role: role,
  };
  const storeddata = localStorage.getItem("data");
  const data = storeddata ? JSON.parse(storeddata) :[];
  data.push(userdata);
  localStorage.setItem("data", JSON.stringify(data));

  alert("Registration Successful!");
  window.location.href = "login2.html";
}
function sub(event) {
  event.preventDefault();
  console.log("trigger");
  
  const lemail = document.getElementById("email").value;
  const lpassword = document.getElementById("password").value;
  const lrole=document.getElementById("role").value
  const storeddata = JSON.parse(localStorage.getItem("data"));
  console.log(storeddata);
  const userdata = storeddata.filter((x) => x.email == lemail);
  console.log(userdata);
  if (userdata.length > 0) { 

    if (userdata[0].password == lpassword) {
      
      if(userdata[0].role==lrole){
       if (userdata[0].role == "admin") {
        window.location.href = "ADMINS.html";
      } else if (userdata[0].role == "staff") {
        window.location.href = "STAFFS.html";
      } else if (userdata[0].role == "user") {
        let a={
          name:userdata[0].name
        }
        console.log(a);
        
        localStorage.setItem("user",JSON.stringify(a))
        window.location.href = "USERS.html";
      }
      }else{
        window.alert("please check your role")
      }

    } else {
      window.alert("hey sorry abinaya please the check password");
    }
  } else {
    window.alert("sorry abinaya please check the email");
  }
}
