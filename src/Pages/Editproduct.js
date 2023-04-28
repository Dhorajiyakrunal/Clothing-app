import React from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const EditProduct = ({ display, setdisplay, SelectedData }) => {

    const handleClose = () => setdisplay(false);

    const onSubmithandler = (event) => {

        event.preventDefault()
        const product = {
            id: SelectedData.id,
            img: event.target.img.value,
            size: event.target.size.value,
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }


        const data = JSON.parse(localStorage.getItem('Productedata'))

        const update = data.map((i) => {
            if (i.id == SelectedData.id) {
                i = product;
            }
            return i;
        })

        localStorage.setItem('Productedata', JSON.stringify(update))
        setdisplay(false)
    }


    return (
        <Modal show={display} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmithandler} >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Image Url</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Product Name"
                            autoFocus
                            name='img'
                            defaultValue={SelectedData.img}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Product Name"
                            autoFocus
                            name='name'
                            defaultValue={SelectedData.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Size</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Product Size"
                            autoFocus
                            name='size'
                            defaultValue={SelectedData.size}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entre Product Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Product Quantity"
                            autoFocus
                            name='quantity'
                            defaultValue={SelectedData.quantity}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entre Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Product Price"
                            autoFocus
                            name='price'
                            defaultValue={SelectedData.price}
                        />
                    </Form.Group>
                    <Modal.Footer className='product-btn'>
                        <button variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button type="submit" className='btn btn-primary'>
                            SUBMIT
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditProduct