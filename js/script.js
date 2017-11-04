// var navbar = document.getElementsById('navbar');
// var sticky = navbar.offsetTop;

// function stickNavbar() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//       } else {
//         navbar.classList.remove("sticky");
//       }
// }



// $('#addPet').click(() => {

//     var $name = $('#name');
//     var $species = $('#species');
//     var $notes = $('#notes');

//     var $newPet = '<div class="container newPet">' + '<b>' + $name.val() +':</b> ' + $species.val() + '</br>' + $notes.val() +
//     '<button class="btn btn-danger" id="deleteBtn">Remove this object</button> </div>';

//     $('#newPet').append($newPet).css('display', 'none').fadeIn(2000);
// });

// $('.btn-danger').click(function() {
//     $(this).parent().remove();
// });



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        } else {
            alert(xhr.statusText);
    }
}

xhr.open('GET', 'sidebar.html');
$('h1').click(function() {
    xhr.send();
});