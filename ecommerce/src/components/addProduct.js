import React, {Component } from 'react';

class addProduct extends  Component {


    state = {
        product: {
            id_articulo: 22,
            id_compania: 0,
            id_categoria: 0,
            nombre_articulo: 'sample_article',
            precio: 0,
            stock: 0
        }
    }
    


    addProduct = _ => {
        const {  product } = this.state;
        fetch(`http://localhost:4000/products/add?id_Product=${product.id_articulo}&id_Company=${product.id_compania}&id_Category=${product.id_compania}&name=${product.nombre_articulo}&price=${product.precio}&stck=${product.stock}`)

            .then(this.getProducts)
            .catch(err => console.error(err))
    }

    render(){
        const {  product } = this.state;
        return(
            [<div>
                <h1>Add Product</h1>
                <div>
            
          <input 
                    value={product.id_articulo} 
                    onChange={ e => this.setState({ product: { ...product, id_articulo: e.target.value }})}/>
           <input 
                    value={product.id_compania} 
                    onChange={ e=> this.setState({ product: { ...product, id_compania: e.target.value}})}/>
          <input 
                    value={product.id_categoria} 
                    onChange={ e=> this.setState({ product: { ...product, id_categoria: e.target.value}})}/>
          <input 
                    value={product.nombre_articulo} 
                    onChange={ e=> this.setState({ product: { ...product, nombre_articulo: e.target.value}})}/>
          <input 
                    value={product.precio} 
                    onChange={ e=> this.setState({ product: { ...product, precio: e.target.value}})}/>
           <input 
                    value={product.stock} 
                    onChange={ e=> this.setState({ product: { ...product, stock: e.target.value}})}/>
          <button onClick={this.addProduct}>Add Product</button>
        </div>
            </div>]
        )
    }
}

export default addProduct;