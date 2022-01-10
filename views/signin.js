var user = document.getElementById('user');
user.addEventListener('keyup', function() {
    var u_check = document.getElementById('u_check');
    var u_times = document.getElementById('u_times');
    if(user.value.length == 0 || user.value.length == 1 || user.value.length == 2 || user.value.length == 3 || user.value.length == 4 || user.value.length == 5 || user.value.length == 6 || user.value.length == 7) {
        user.style.border = '2px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else {
        user.style.border = '2px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
});

var pass = document.getElementById('pass');
pass.addEventListener('keydown', function() {
    var p_check = document.getElementById('p_check');
    var p_times = document.getElementById('p_times');
    if(pass.value.length == 0 || pass.value.length == 1 || pass.value.length == 2 || pass.value.length == 3 || pass.value.length == 4 || pass.value.length == 5 || pass.value.length == 6 || pass.value.length == 7) {
        pass.style.border = '2px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
    } else {
        pass.style.border = '2px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';
    }
});

function validate() {
    if(user.value == 0 || user.value.length < 7) {
        document.getElementById('error').innerHTML = "Invalid email";
        return false;
    } else if (pass.value == 0 || pass.value.length < 7) {
        document.getElementById('error').innerHTML = "Please enter the password";
        return false;
    } else {
        window.location.href = 'https://www.crunchyroll.com/'
        alert('Logged in sucessfully')
    }
};



