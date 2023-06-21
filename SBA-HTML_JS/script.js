function submit_by_id() {
    var FirstName = document.getElementById("fName").value;
    var LastName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
   // if (validation()) // Calling validation function
   // {
   // document.getElementById("form_id").submit(); //form submission
    //alert(" First Name : " + FirstName + " Last Name : " + LastName +" n Email : " + email + " n Form Id : "  + "nn Form Submitted Successfully......");
   // }
   //Logic 1
   
    if(sameNameValidation(FirstName,LastName)){
        if(alpha(FirstName,LastName)){

        }
    }
    
    return false;

    

   function sameNameValidation(FirstName,LastName)
   {
        if(FirstName==LastName)
        {
            alert('First Name: '+FirstName +' and Last Name: '+LastName + ' Cannot be same, Please change First/Last Name');
            return false;
        }
        else
        {
            return true;
        }
    }

   function alpha(FirstName, LastName)
   { 
    
        var letters = /^[A-Za-z]+$/;
        if(letters.test(FirstName) && letters.test(LastName))
        {
           
           window.location.href='User_login.html';
           alert('Registration Sucessful');
           return true;
        }
        else
        {
        alert('Name must have alphabets only');
        return false;
        }
   }

    }
   