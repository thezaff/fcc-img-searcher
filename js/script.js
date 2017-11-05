/* var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var workerDiv = '<ul class="list-group">';
        var batteryEmpty = '<i class="fa fa-battery-empty" aria-hidden="true"></i>';
        var batteryFull = '<i class="fa fa-battery-full" aria-hidden="true"></i>';
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].inoffice === false) {
                workerDiv += '<li class="list-group-item">' + employees[i].name + ' ' + batteryEmpty + '</li>';
            } else {
                workerDiv += '<li class="list-group-item">' + employees[i].name + ' ' + batteryFull + '</li>';
            }
        }
        workerDiv += '</ul>';
        $('#workers').html(workerDiv);
        console.log(workerDiv);
    }
}


xhr.open('GET', 'data.json');
xhr.send();
 */
/* 
function sendAJAX() {
    $.get('data.json', function(response) {
        $('#jajax').HTML(response);
    });
    $('#req').hide();
} */

/* $(document).ready(function () {
    var url = 'data.json'
    $.getJSON(url, function (response) {
        var tab = '<ul class="list-group">';
        $.each(response, function(index, employee) {
            if (employee.inoffice === true) {
                tab += '<li class="list-group-item" id="in">';
            } else {
                tab += '<li class="list-group-item" id="out">';
            }
            tab += employee.name + '</li>';
        })
        tab += '</ul>';
        $('#jajax').html(tab);
    }).fail(function (jqXHR) {
        alert(jqXHR.statusText + " Error on the page blya");
    });
});
 */

/* $(document).ready(function () {
///////////////////// NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET NE RABOTAET ///// 
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne";
    $('#searchBtn').click( function() {
        var flickrInput = document.getElementById('flickrInput');
        var tag = {
            tags : flickrInput.value,
            format : "json"
        }
        console.log(tag);
        function jsonFlickrFeed(json) {
            console.log(json);
            var photoHTML = '';
            $.each(json.items, function(i, photo) {
                photoHTML += '<a class="col-xs-4" href="' + photo.link + '">';
                photoHTML += '<img src="' + photo.media.m + '">';
                photoHTML += '</a>';
            });
            $(photoHTML).appendTo('#imgBoard');
        }
        $.ajax({
            url: "https://api.flickr.com/services/feeds/photos_public.gne",
            dataType: "jsonp",
            data: {
                tags : "cats",
                format : "json"
            }
        });
    });
}); */
$("#searchBtn").on(("click" || "keypress"), handleButtonClick);
var flickrInput = document.getElementById('flickrInput');

function jsonFlickrFeed(json) {
var photoHTML = '';
  console.log(json);
  $.each(json.items, function(i, item) {
    photoHTML += '<a class="col-xs-4" href="' + item.link + '">';
    photoHTML += '<img class="thumbnail" style="width, 100%" src="' + item.media.m + '">';
    photoHTML += '</a>';
  });
  $("#imgBoard").html(photoHTML);
  console.log("searching");
};

function handleButtonClick() {  
  $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": flickrInput.value, "format": "json" }
  });
}
/* var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }

};

xhr.open('GET', 'sidebar.html');
$('h1').click(function() {
    xhr.send();
    console.log(typeof xhr.responseText);
});
 */

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('OPEN', 'data.json')
// xhr.send();

/* var navbar = document.getElementsById('navbar');
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}



$('#addPet').click(() => {

    var $name = $('#name');
    var $species = $('#species');
    var $notes = $('#notes');

    var $newPet = '<div class="container newPet">' + '<b>' + $name.val() +':</b> ' + $species.val() + '</br>' + $notes.val() +
    '<button class="btn btn-danger" id="deleteBtn">Remove this object</button> </div>';

    $('#newPet').append($newPet).css('display', 'none').fadeIn(2000);
});

$('.btn-danger').click(function() {
    $(this).parent().remove();
});
 */