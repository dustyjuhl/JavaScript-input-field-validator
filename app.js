function do_verify()
  {
    var i_error_cnt;
    var e_input;
    var e_div;
    var s_confirm;

    i_error_cnt=0;
    e_input= document.getElementById("id_context");

    if(e_input.value.length == 0)
    { 
      e_input.className="btn-red";
      ++i_error_cnt;
    }
    else
    {
       e_input.style.display = 'none';
    }
      
    
    e_input=document.getElementById("id_uname");
    if(e_input.value.length == 0)
    {  
      e_input.className="btn-red";
      ++i_error_cnt;
    }
    else
    {
       e_input.style.display = 'none';
    }


    e_input=document.getElementById("id_passwd");
    if(e_input.value.length == 0)
    {  
      e_input.className="btn-red";
      ++i_error_cnt;
    }
    else
    {
       e_input.style.display = 'none';
    }
 }
    
                                                       //e_input.type="checkbox";
                                                       //alert("length is " + e_input.value.length);
    

    
                                                       //alert("value is " + e_input.value);
                                                       //alert("length is " + e_input.value.length);
                                                       //alert("char 2 is " + e_input.value.charAt(2));
  
    //  if(e_input.value==" ")
   //    {
   //      e_input.className="btn-red";
   //      alert("ima blank");
   //    }