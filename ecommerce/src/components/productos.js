import React, {Component } from 'react';
import {Card, CardTitle, Grid} from 'react-mdl';
import {Link} from 'react-router-dom';

class Productos extends  Component {

     state = {
        products: [],
        product: {
        id_articulo: 22,
        id_compania: 0,
        id_categoria: 0,
        nombre_articulo: 'sample_article',
        precio: 0,
        stock: 0
        }
    }
    
    componentDidMount(){
        this.getProducts();
    }

    getProducts = _ => {
        fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(response => this.setState({ products: response.data}))
        .catch( err => console.log(err))
    }

    addProduct = _ =>{
        const {product} = this.state;
        fetch(`http://localhost:4000/products/add?id_Product=${product.id_articulo}&id_Company=${product.id_compania}&id_Category=${product.id_compania}&name=${product.nombre_articulo}&price=${product.precio}&stck=${product.stock}`)
        .then(this.getProducts)
        .catch(err => console.error(err))
    }

    renderProduct = ({id_articulo, nombre_articulo, precio}) => <div 
                        shadow={0} style={{width: '256px', height: '256px'}}
                        key={id_articulo} 
                        class = "mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp" >
                        <h1>
                            {nombre_articulo}
                        </h1>

                        ${precio}
                        </div>
                    
   

    render(){
        
        const { products } = this.state;
    
        
        return(
            [<div class="row container">
                <h1 cstyle={{margin:"auto"}}>Productos</h1>
                
                    <div class="mdl-android-card-container mdl-grid">

                    </div>{products.map(this.renderProduct)}
                
                
            
                
        {/* <div>
            <h2> Agregar Productos</h2>
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
        </div> */}
           
            </div>]
        )
    }
}

export default Productos;