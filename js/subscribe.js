let email = document.getElementById('email').value
let n = document.getElementById('name')
let country = document.getElementById('country').value
let subscribe = document.getElementById('btn_subscribe')

subscribe.addEventListener('click', function subscribe() {
    let name = n.value

    let data = {
        email: email,
        name: name,
        country: country
    }

    console.log(data)

    fetch('http://localhost:3000/subscribers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json;charset=UTF-8' }
    }).then(res => {
        //redirect to "confirmation page"
        if (res.redirected) {
            const redirectUrl = res.url;

            window.location.href = redirectUrl;
        }
    })//.then(res => res.json())
    //.then(data => console.log(data));
})

