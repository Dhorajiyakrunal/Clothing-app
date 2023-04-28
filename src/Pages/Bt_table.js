import React from 'react'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import BootstrapTable from 'react-bootstrap-table-next';

const Bttable = () => {

  const columns = [{
    dataField: 'id',
    text: 'Product ID',
  }, {
    dataField: 'name',
    text: 'Product Name',
    // filter: textFilter()
  }, {
    dataField: 'price',
    text: 'Product Price',
    // filter: textFilter()
  }];

  return (
    <div>
      <BootstrapTable keyField='id' data={products} columns={columns} filter={filterFactory()} />
    </div>
  )
}

export default Bttable
