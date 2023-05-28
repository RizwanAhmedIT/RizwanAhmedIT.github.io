    
// nav bar active coller chnage 
let navBarActive = '.nav li a';

$(navBarActive).on('click',function(){
    $(navBarActive).removeClass('active');
    $(this).addClass('active');
});