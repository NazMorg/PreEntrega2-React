const productos = [
  {
    id: 1,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 1",
    categoryId:"comida",
    price: 19.99,
    stock: 10,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 2,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 2",
    categoryId:"varios",
    price: 9.99,
    stock: 5,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 3,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 3",
    categoryId:"bebida",
    price: 24.99,
    stock: 2,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 4,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 4",
    categoryId:"ingredientes",
    price: 14.99,
    stock: 8,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 5,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 5",
    categoryId:"comida",
    price: 29.99,
    stock: 3,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 6,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 6",
    categoryId:"bebida",
    price: 12.99,
    stock: 15,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 7,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 7",
    categoryId:"varios",
    price: 17.99,
    stock: 6,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 8,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 8",
    categoryId:"ingredientes",
    price: 22.99,
    stock: 12,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 9,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 9",
    categoryId:"comida",
    price: 8.99,
    stock: 20,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 10,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 10",
    categoryId:"ingredientes",
    price: 11.99,
    stock: 4,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 11,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 11",
    categoryId:"ingredientes",
    price: 7.99,
    stock: 10,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  },
  {
    id: 12,
    img: "https://placekitten.com/g/200/300",
    title: "titulo 12",
    categoryId:"varios",
    price: 14.99,
    stock: 10,
    description:"Un producto elegante y práctico con una imagen única. Perfecto para complementar tu estilo. "
  }
];

//getData
function getData() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    },200);
  });
}

//getProduct
export function getProduct(productID) {
  return new Promise((resolve) => {
    const userProduct = productos.find(
      (item) => item.id === parseInt(productID)
    );

    setTimeout(() => {
      resolve(userProduct);
    },200);
  });
}

//getCategory
export function getCategory(categoryData) {
  return new Promise((resolve) => {
    const userCategory = productos.filter((item) => {
      return item.categoryId === categoryData;
    });

    setTimeout(() => {
      resolve(userCategory);
    },200);
  });
}

export default getData;