let editUsrId = null;
async function formHandler(e){
    e.preventDefault();
    try{
        const name = e.target.name.value;
        const email = e.target.email.value;
        const age = e.target.age.value;

    const formData = {
        name: name,
        email: email,
        age: age
    }
    if(editUsrId){
        await axios.put(`/users/${editUsrId}`, formData);
        editUsrId = null;
        location.reload();
    }else{
        const response = await axios.post('/users', formData);
        showData(response.data.user);
        e.target.reset();
        console.log(response.data);
    }
    
    }
    catch(error){
        console.log(error);
    }
}

function showData(user){
    const id = user.id;
    const name = user.name;
    const email = user.email;
    const age = user.age;

    const li = ` <li>Id: ${id} - Name: ${name} - Email: ${email} - Age: ${age}
    <button onclick="editUsr(${id})" class="editBtn">Edit</button>
    <button onclick="dltUsr(${id})" class="dltBtn">Delete</button></li>
    `
    const parent = document.getElementById('userList');
    if(!parent){
        return;
    }
    parent.innerHTML +=li;
}

window.addEventListener('DOMContentLoaded', async ()=>{
   try{
    const response = await axios.get('/users', );
    response.data.users.forEach(user => {
        showData(user);
    })
   } catch(error){
    console.log(error);
   }
});

async function editUsr(id){
    try{
    const response = await axios.get(`/users/${id}`);
    const user = response.data.user;
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('age').value = user.age;
        editUsrId = id;
    }catch(error){
        console.log(error);
    }
}
async function dltUsr(id){
    try{
        await axios.delete(`/users/${id}`);
        location.reload();
    }
    catch(error){
        console.log(error);
    }
}