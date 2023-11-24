import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProductos() {
  try {
    const response = await axios({
      url: `${baseUrl}/productos`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function saveProductos(productosData) {
  
  try {
    const response = await axios({
      url: `${baseUrl}/productos`,
      method: "POST",
      data: {
        title: productosData.title,
        price: productosData.price,
        Categoria: productosData.Categoria,
        descripcion: productosData.descripcion,
        image: productosData.image,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function updateProductos(_id, datosNuevo) {
  try {
    const response = await axios({
      url: `${baseUrl}/productos/${_id}`,
      method: "PUT",
      data: datosNuevo,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function deleteProductos(_id) {
  try {
    const response = await axios({
      url: `${baseUrl}/productos/${_id}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}