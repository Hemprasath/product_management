
import {create} from "zustand";

export const useProductStore = create((set) =>({
    Products : [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) =>{
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message: "please fill all the fields!"}
        }
        const res = await fetch("/api/products",{
            method: "POST",
            headers: {
                "content-Type":"application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state)=> ({products: [...state.Products,data.data]}));
        return {success: true, message: "product created successfully"}
    },
    fetchProducts: async()=>{
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products: data.data})
    },
    deleteProducts: async(pid) => {
        const res = await fetch(`/api/products/${pid}`,{
            method: "DELETE",
    });
    const data = await res.json();
    if(!data.success) return{success: false, message: data.message};
    set(state => ({products: state.products.filter(product => product._id !== pid)}));
    return {successful: true, message: data.message}
    },
    updateProduct: async(pid, updatedProduct) =>{
        const res = await fetch(`/api/products/${pid}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(updatedProduct),
            
        });
        const data = await res.json();
        if(!data.success) return{
            success:false,
            message: data.message
        };
        set(state =>({
            products: state.products.map(product => (product._id === pid ? data.data : product)),
        }));
        return{success: true, message:data.message};
    },
}));

