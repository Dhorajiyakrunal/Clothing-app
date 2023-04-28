import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Addtoproduct from './Addtoproduct';
import EditProduct from './Editproduct';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';



const Cart = () => {
    const [display, setdisplay] = useState(false)
    const [ProductList, setProductList] = useState([])
    const [EditModal, setEditModal] = useState(false)
    const [SelectedData, setSelectedData] = useState([])

    const onClickHandler = () => {
        setdisplay(true)
    }

    useEffect(() => {
        setProductList(JSON.parse(localStorage.getItem('Productedata')) || [])
    }, [display, EditModal])


    const onclikdelete = (event) => {
        const filter = ProductList.filter((i) => {
            return i.id !== event
        })
        setProductList(filter);
        localStorage.setItem('Productedata', JSON.stringify(filter));
    }

    const onclickEdit = (data) => {
        setSelectedData(data)
        setEditModal(true)

    }

    const columns = [
        {
            dataField: 'id',
            text: 'Product ID',
            filter: textFilter()

        },
        {
            dataField: 'name',
            text: 'Product Name',
            filter: textFilter()
        },
        {
            dataField: 'price',
            text: 'Product Price',
            filter: textFilter()
        },
        {
            dataField: 'size',
            text: 'Product Size',
            filter: textFilter()
        },
    ];
    return (
        <div>
            <div>
                <div className="title">
                    <h2>SERCHING PRODUCT</h2>
                </div>
                <br />
                <BootstrapTable keyField='id' data={ProductList} columns={columns} filter={filterFactory()} />
                <Addtoproduct display1={display} setdisplay1={setdisplay} />
                <EditProduct display={EditModal} setdisplay={setEditModal} SelectedData={SelectedData} />
                <section>
                    <div className="container">
                        <div className="title">
                            <h2>PRODUCT DISPLAY</h2>
                        </div>
                        <div className="product-btn btn6 text-center">
                            <button onClick={onClickHandler} className="my-5" variant="primary">Add Product</button>{''}
                        </div>
                        <Table className='mt-5' variant="dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ProductList.map((i) => {
                                    return (
                                        <tr>
                                            <td>{i.id}</td>
                                            <td>
                                                <img src={i.img} width='100px' height='100px' />
                                            </td>
                                            <td>{i.name}</td>
                                            <td>{i.size}</td>
                                            <td>{i.price}</td>
                                            <td>{i.quantity}</td>
                                            <td className='product-btn'>
                                                <button className='btn btn-success me-3' onClick={() => onclickEdit(i)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => onclikdelete(i.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Cart
