const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const urlParams = new URLSearchParams(window.location.search);
const successRes = urlParams.get('successRes');
const successLog = urlParams.get('successLog');
const error = urlParams.get('error');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Nếu đăng ký thành công, hiển thị hộp thoại thông báo

if (successRes === 'true') {
    showAlert('Đăng ký thành công!');
}
if (successLog === 'true') {
    showAlert('Đăng nhập thành công!');
    setTimeout(function() {
        window.location.href = '/';
    }, 1500);
}
// Nếu có lỗi đăng nhập, hiển thị thông báo lỗi
if (error === 'true') {
    document.getElementById('loginError').innerText = 'Đăng nhập không thành công!';
}

function showAlert(message) {
    // Hiển thị phần tử div
    document.getElementById('alertBox').style.display = 'block';
    // Đặt nội dung của cửa sổ thông báo
    document.getElementById('alertMessage').innerText = message;
}

// Hàm đóng cửa sổ thông báo
function closeAlert() {
    // Ẩn phần tử div
    document.getElementById('alertBox').style.display = 'none';
    
}
