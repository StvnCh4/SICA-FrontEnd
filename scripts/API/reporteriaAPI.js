
const logBookUsers = async () => {

    try{
        const response = await fetch("http://localhost:3000/login");

        const dataUsers  = await response.json();
        console.log(dataUsers);
        return dataUsers;
    } catch(error){
        console.error(error);
    }
}

const logBookUserFilterName = async (name) => {

    const user = {
        $or: [
            {name: {$regex: search, $options: 'i'} },
            {lastName: {$regex: search, $options: 'i'} },
            {secondLastName: {$regex: search, $options: 'i'} }
        ]
    }
   
    try{
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
        },
            body: JSON.stringify(user)
        
    });
    const dataUser = await response.json();
        console.log(dataUser);
        return dataUser;
    } catch(error){
        console.error(error);
    }
}