import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { closeModal, openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import "./style.css";

/*===APLICACIÓN===*/

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn;
};

handleGetProductToStore();
renderCategories();


/*=====POPUP=====*/


const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    closeModal();
});


//HEADER

const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () =>{
    openModal();
});


//buttonSearch 
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", ()=>{
    handleSearchProductByName();
});