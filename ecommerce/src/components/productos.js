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

    renderProduct = ({id_articulo, nombre_articulo, precio}) => <tr 
                        shadow={0} style={{width: '300px', height: '300px'}}
                        key={id_articulo} 
                        class = "mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp" >
                        <th>
                            {nombre_articulo}
                        </th>
                        <div style={{ width: '200px', height: '200px', textAlign: 'center', margin:"auto",background: 'url( http://www.audiomusica.com/catalogo/media/catalog/product/cache/1/small_image/190x190/9df78eab33525d08d6e5fb8d27136e95/2/0/209290.jpg) center / cover'}}/>
                        <div style={{textAlign: "center"}}>${precio}</div>   
                        </tr>
                    
   

    render(){
        
        const { products } = this.state;
    
        
        return(
            [<div class="row container" style={{justifyContent:"center"}}>

                <h1  style={{ textAlign: 'center', margin:"auto"}}>Productos</h1>
                    <tr>
                        <div class="mdl-android-card-container mdl-grid" style={{justifyContent: "center"}}>
                            {products.map(this.renderProduct)}
                        </div> 
                    </tr>
                               
            </div>]
        )
    }
}

export default Productos;