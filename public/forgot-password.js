function forgotpassword(e) {
    e.preventDefault();
    console.log(e.target.name);
    const form = new FormData(e.target);

    const userDetails = {
        email: form.get("email"),

    }
    console.log(userDetails)
    const token = localStorage.getItem('token')
    axios.post('/password/forgotpassword',userDetails, { headers: { "Authorization": token } }).then(res => {
        if(res.status === 202){
            document.body.innerHTML += '<div style="color:red;">Mail Successfuly sent <div>'
        } else {
            throw new Error('Something went wrong!!!')
        }
    }).catch(err => {
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    })
}