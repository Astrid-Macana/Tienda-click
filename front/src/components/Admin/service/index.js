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
  const formData = new FormData();
  formData.append("title", productosData.title);
  formData.append("price", productosData.price);
  formData.append("Categoria", productosData.Categoria);
  formData.append("descripcion", productosData.descripcion);
  formData.append("image", productosData.image);
  try {
    const response = await axios({
      url: `${baseUrl}/productos`,
      method: "POST",
      data: formData,
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