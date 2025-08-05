const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener("click", function(e){

    e.preventDefault();

    const inputUserName = document.querySelector("#username");
    const inputPassword = document.querySelector("#password");

    if (!inputUserName.value) {
        alert("Ko để trống username");
        inputUserName.focus();
        return;
    }
    if (!inputPassword.value.trim()) {
        alert("Ko để trống password");
        inputPassword.focus();
        return;
    }
    if (inputPassword.value.trim() && inputPassword.value.trim().length < 6) {
        alert("Cần tối thiểu 6 ký tự");
        inputPassword.focus();
        return;
    }
    if (inputUserName.value == 'admin' && inputPassword.value == "123456") {
        alert("Đăng nhập thành công");

        localStorage.setItem('username', inputUserName.value)


        window.location.href = 'index.html';
    }else{
        alert("Sai tài khoản mk");
    }
    
})