function popup(things) {
    $('body').find('.wrap-popup').remove();
    let p;
    switch (things) {
        case 'search':
            p = createPopupSearch().hide();
            $('body').append(p.clone(true).fadeIn(500));
            break;
        case 'download':
            p = createPopupDownload().hide();
            $('body').append(p.clone(true).fadeIn(500));
            break;
        case 'document':

            break;
    }
    console.log('create'+things);
}

function createPopup() {
    var wrapOfPopup = $('<div/>').addClass('wrap-popup');
    var exitButton = $('<div/>').addClass('wrap-popup-exit')
                                    .html('X')
                                    .appendTo(wrapOfPopup);
    var thePopup = $('<div/>').addClass('popup')
                                .appendTo(wrapOfPopup);
    var title = $('<h1/>').addClass('popup-title')
                            .appendTo(thePopup);
    var containOfPopup = $('<div/>').addClass('popup-container')
                                    .appendTo(thePopup);

    exitButton.on('click', function() {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
            console.log('close popup');
        })
    })
    return wrapOfPopup;
}

function createPopupDownload() {
    var thePopup = createPopup();
    thePopup.find('.popup-title').html("DOWNLOAD");
    var contain = thePopup.find('.popup-container');

    var listOfLink = $('<ul/>').appendTo(contain);
    $('<li/>').html("Windows 64bit: <a href='#'>&#10149</a>")
                .appendTo(listOfLink);
    $('<li/>').html("Windows 32bit: <a href='#'>&#10149</a>")
                .appendTo(listOfLink);
    $('<li/>').html("Linux: <a href='#'>&#10149</a>")
                .appendTo(listOfLink);
    return thePopup;
}
function createPopupSearch() {
    var thePopup = createPopup();
    thePopup.find('.popup-title').html("SEARCH");
    var contain = thePopup.find('.popup-container');

    $('<textarea/>').attr('placeholder','Keyword')
                    .attr('rows','1')
                    .attr('cols','50')
                    .appendTo(contain);
    $('<button/>').attr('type','button')
                    .html('FIND')
                    .css('display','block')
                    .css('margin','auto')
                    .css('padding','1em 2em')
                    .appendTo(contain);
    return thePopup;
}
