// return (
//     <div>
//       <h1>Products Page</h1>
//       <button onClick={openModal}>Add Product</button>
//     <ProductAddModal
//       isOpen={isModalOpen}
//       onClose={() => setIsModalOpen(false)}
//       onSubmit={selectedProduct ? (productData) => handleUpdateProduct(selectedProduct.id, productData) : handleAddProduct}
//       initialProduct={selectedProduct}
//     />
//       {products.map((product) => (
//         <section
//           key={product.id}
//           class="text-gray-700 body-font overflow-hidden bg-white"
//         >
//           <div class="container px-5 py-24 mx-auto">
//             <div class="lg:w-4/5 mx-auto flex flex-wrap">
//               <Image
//                 style={{ width: "300px" }}
//                 alt="ecommerce"
//                 class="lg:w-1/4 w-full object-cover object-center rounded border border-gray-200"
//                 src={product.image}
//               />
//               <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                 <h2 class="text-sm title-font text-gray-500 tracking-widest">
//                   Category: {product.category}
//                 </h2>
//                 <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
//                   {product.name}
//                 </h1>
//                 <div class="flex mb-4">
//                   <span class="flex items-center">
//                     <div className="p-1 justify-between flex">
//                       <Rating
//                         className="mr-auto ml-1"
//                         name="read-only"
//                         value={product.rate}
//                         readOnly
//                       />
//                     </div>
//                     <span class="text-gray-600 ml-3">{product.rate}</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 inline mr-1 ml-1 text-amber-400"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"
//                       />
//                     </svg>
//                     <span class="text-gray-600">rate</span>
//                   </span>
//                   <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
//                     <span class="text-gray-600">owner:</span>
//                   </span>
//                 </div>
//                 <p class="leading-relaxed">
//                   description : {product.description}
//                 </p>
//                 <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
//                   <div class="flex">
//                     <span class="mr-3">Quantity : {product.quantity}</span>
//                     <span class="mr-3">Orders : {product.orderCount}</span>
//                   </div>
//                   <div class="flex ml-6 items-center">
//                     <div class="relative">
//                       <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="flex">
//                   <span class="title-font font-medium text-2xl text-gray-900">
//                     ${product.price}
//                   </span>
//                   <button onClick={() => handleDeleteProduct(product.id)} class="flex ml-auto text-white bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-100 rounded">
//                     🗑
//                   </button>
//                   <button onClick={() => openEditModal(product)} class="flex  text-white bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-100 rounded">
//                     🖊
//                   </button>
//                   <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                     ♥️
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//       ;
//     </div>