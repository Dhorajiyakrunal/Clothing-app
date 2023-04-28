import React  from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Addtoproduct = ({ display1, setdisplay1 }) => {
    const handleClose = () => setdisplay1(false);


    const onSubmithandler = (event) => {
        event.preventDefault()
        const product = {
            id: new Date().getTime(),
            img: event.target.img.value,
            size: event.target.size.value,
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }

        if (localStorage.getItem('Productedata')) {
            const data = JSON.parse(localStorage.getItem('Productedata'))
            data.push(product)
            localStorage.setItem('Productedata', JSON.stringify(data))
        }
        else {
            const productarray = JSON.stringify([product])
            localStorage.setItem('Productedata', productarray)
        }
        
        setdisplay1(false)
    }
    return (
        <div>
            <>
                <Modal show={display1} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={onSubmithandler}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Add Product Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    placeholder="Enter Image Url"
                                    name='img'
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Product Name"
                                    autoFocus
                                    name='name'
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Product Size</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoFocus
                                    placeholder="Product Size"
                                    name='size'
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Entre Product Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Product Quantity"
                                    autoFocus
                                    name='quantity'
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Entre Product Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Product Price"
                                    autoFocus
                                    name='price'
                                />
                            </Form.Group>
                            <Modal.Footer className='product-btn'>
                                <button variant="secondary" onClick={handleClose}>
                                    Close
                                </button>
                                <button type="submit" variant="primary">
                                    Submit
                                </button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default Addtoproduct
