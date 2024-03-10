function changeSize(size, button) {
    document.getElementById('sizeDisplay').innerText = size;
    
    // Xóa lớp 'active' khỏi tất cả các nút
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    
    // Thêm lớp 'active' vào nút được click
    button.classList.add('active');
  }

    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        return new bootstrap.Offcanvas(offcanvasEl);
    });
