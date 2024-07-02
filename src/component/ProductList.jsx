import React from 'react';
import ItemList from './ItemList';

function ProductList(props) {
    const products=[
        {id:1,name:"product1" ,price:40.99, product:"clothes"},
    {id:2,name:"product2" ,price:2.99, product:"jewellery"},
    {id:3,name:"product3" ,price:23.99, product:"men's clothes"},
    {id:4,name:"product4" ,price:4.99, product:"women's clothes"}
    ]
    return (
        <div  className='container'>

        <div >
       
<table class="table-primary">HELLO</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>


<tr class="table-primary">hello</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>


<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
        </div>


            {
            products.map((item)=>{
                    return(
                        <tr>
                       <ItemList  key={item.id} data={item} ></ItemList>
                        </tr>
                    )
            })
                }


            
            
        </div>
    );
}

export default ProductList;