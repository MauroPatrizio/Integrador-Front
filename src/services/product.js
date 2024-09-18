/*=====PRODUCT=====*/

import Swal from 'sweetalert2';
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";

//guardar
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", ()=>{
    handleSaveOrModifyElements();
});


//funcion guardar
export const handleSaveOrModifyElements = ()=> {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categoria").value;

    let object =  null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre, 
            imagen, 
            precio, 
            categoria
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre, 
            imagen, 
            precio, 
            categoria
        }
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });

    setInLocalStorage(object);

    handleGetProductToStore();

    closeModal();
};


//eliminar elemento

export const handleDeleteProduct = ()=> {
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "¡Si lo eliminas será permanente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id );
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
    });

}