document.addEventListener("DOMContentLoaded", function() {
    const showHiddenPass = (loginPass,loginEye) => {
        const input = document.getElementById(loginPass),
            iconEye = document.getElementById(loginEye)

        iconEye.addEventListener('click',() => {
            //pwd to txt
            if(input.type === 'password'){
                //to txt
                input.type = 'text'
                //icon
                iconEye.classList.add('bi-eye')
                iconEye.classList.remove('bi-eye-slash')
            }
            else{
                //to pwd
                input.type = 'password'
                //icon
                iconEye.classList.add('bi-eye-slash')
                iconEye.classList.remove('bi-eye')
            }
        })
    }

    showHiddenPass('login-pwd','login-eye')
});
