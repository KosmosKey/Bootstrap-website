console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked button')

        var email = $('.email').val()
        statusElm.empty()

        
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is  not valid</div>')
        }
    })
})