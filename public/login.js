const formSubmit = document.getElementById('login-form')
formSubmit.addEventListener('submit', login)


function login(e) {
    e.preventDefault();

    const loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    console.log(loginDetails)
    axios.post('/user/login', loginDetails).then(response => {
        if(response.status === 200){
            alert(response.data.message)
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            window.location.href = "/views/index.html"
        } else {
            throw new Error(response.data.message)
        }
    }).catch(err => {
        console.log(JSON.stringify(err))
        document.body.innerHTML += `<div style="color:red;">${err.message} <div>`
    })
}

function forgotpassword() {
    window.location.href = "/views/forgot-password.html"
}