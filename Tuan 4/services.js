export const getProducts = async () => {
    try{
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        return data
    }
    catch(error){
        console.log(error);
    }
}

export const addProduct = async (data) => {
    try{
        const res = await fetch('http://localhost:3000/products',{
            method: 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        return res;
    }
    catch(error){
        console.log(error);
    }
}
export const updateProduct = async (id, data) => {
    try{
        const res = await fetch('http://localhost:3000/products/'+ id,{
            method: 'put',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        return res;
    }
    catch(error){
        console.log(error);
    }
}
export const getProductById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/products/${id}`)
        const data = await res.json()
        return data
    }
    catch(error){
        console.log(error);
    }
}
export const deleteProduct = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/products/${id}`,{
            method:'DELETE',
        })
        return res;
    }
    catch(error){
        console.log(error);
    }
}