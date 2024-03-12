//Pop up
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }
  function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
  }

  //Kiem Tra Form Dang Nhap
function Kiemtra(){
  if(document.frmDangnhap.txtTen.value==""){			
   alert("Nhập tên!");      
   return false;
  }
  if(document.frmDangnhap
     .txtMatkhau.value=="")
  {     
   alert("Nhập mật khẩu!");      
   return false;
  }
  return true;		
 }

//  Kiem Tra Form Dang Ky
 function Kiemtra2()
{
     let ten=document.getElementById("txtTen2");
     let pass=document.getElementById("txtPassword2");
     let dienthoai=document.getElementById("txtDienthoai"); 
     let email=document.getElementById("txtEmail"); 
 
     if(ten.value=="")
     {
         alert("Nhập tên!");
         ten.focus();
         return false;
     }
 
     if (pass.value=="")
     {
         alert("Nhập mật khẩu!");
         pass.focus();
         return false;
     }
 
     if(dienthoai.value=="")
     {
         alert("Nhập điện thoại!");
         dienthoai.focus();
         return false;
     }else if(isNaN(dienthoai.value))
     {
         alert("Nhập điện thoại là một số"); dienthoai.focus();
         return false;
     }

    if(email.value=="")
    {
        alert("Nhập email nhé bạn!");
        email.focus();
        return false;
    }else{
        let vitri = email.value.indexOf("@"); if(vitri==-1){
            alert("Email phải đúng định dạng!"); email.focus();
            return false;
        }
    }
}