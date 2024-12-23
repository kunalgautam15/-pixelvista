function loog() {
    const user= 
    document.getElementById('username').value;
    const pass= 
    document.getElementById('password').value;
    const error= 
    document.getElementById('error-msg').value;
    const validUser ='Nileshstack';
    const validpass ='#Aa123456';
    if(user===validUser&&pass===validpass)
        {
        window.open('portfolio.html');
        errorMessage.style.display ='none';
    }
        else{
            alert('incorrect password/username');
          
            error.style.display ='block';
          
        }
    }
