var active = "mechanical-engineering-detail";

function openDetail(name){
    $('.overlay').show();
    $("#" + active).removeClass('active');
    $('#' + name).addClass('active');
    active = name;
}

function closeDetail(){
    $('.overlay').hide();
}

window.onload = function(){
    var detail = document.getElementById('detail-view')
    detail.addEventListener('click', function(evt){
        evt.stopPropagation()
    })
}