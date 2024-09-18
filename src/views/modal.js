import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

//FUNCIONES ABRIR Y CERRAR MODAL
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";


    if (productoActivo) {
        deleteButton.style.display = "block";
    }else{
        deleteButton.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;

        //Para cerrar el modal con la tecla esc
        document.addEventListener("keydown", (event)=>{
            if (event.key === "Escape") {
                closeModal();
            };
        })
    }
};

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};

const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        nombre.value = "";
        imagen.value = "";
        precio.value = 0;
        categoria.value = "Seleccione una categoría";
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handleDeleteProduct();
})

const buttonDelete = ()=> {
    handleDeleteProduct();
}