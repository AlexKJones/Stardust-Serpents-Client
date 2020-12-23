// import React, { Component } from 'react'
// import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from 'mdbreact'
//
// class Cart extends Component {
// state = {
//   data: [
//     {
//       src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg',
//       title: 'iPhone',
//       subTitle: 'Apple',
//       color: 'White',
//       price: '800',
//       qty: '2'
//     },
//     {
//       src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg',
//       title: 'Headphones',
//       subTitle: 'Sony',
//       color: 'Red',
//       price: '200',
//       qty: '2'
//     },
//     {
//       src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg',
//       title: 'iPad Pro',
//       subTitle: 'Apple',
//       color: 'Gold',
//       price: '600',
//       qty: '1'
//     }
//   ],
//   columns: [
//     {
//       label: '',
//       field: 'img'
//     },
//     {
//       label: <strong>Product</strong>,
//       field: 'product'
//     },
//     {
//       label: <strong>Color</strong>,
//       field: 'color'
//     },
//     {
//       label: <strong>Price</strong>,
//       field: 'price'
//     },
//     {
//       label: <strong>QTY</strong>,
//       field: 'qty'
//     },
//     {
//       label: <strong>Amount</strong>,
//       field: 'amount'
//     },
//     {
//       label: '',
//       field: 'button'
//     }
//   ]
// }
//
// render () {
//   const rows = []
//   const { columns, data } = this.state
//
//   data.map(row => {
//     return rows.push(
//       {
//         'img': <img src={row.src} alt="" className="img-fluid z-depth-0" />,
//         'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.title}</strong></h5>, <p key={new
//         Date().getDate} className="text-muted">{row.subTitle}</p>],
//         'color': row.color,
//         'price': `$${row.price}`,
//         'qty':
//       <MDBInput type="number" default={row.qty} className="form-control" style={{ width: '100px' }} />,
//         'amount': <strong>${row.qty * row.price}</strong>,
//         'button':
//       <MDBTooltip placement="top">
//         <MDBBtn color="primary" size="sm">
//               X
//         </MDBBtn>
//         <div>Remove item</div>
//       </MDBTooltip>
//       }
//     )
//   })
//
//   return (
//     <MDBRow className="my-2" center>
//       <MDBCard className="w-100">
//         <MDBCardBody>
//           <MDBTable className="product-table">
//             <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
//             <MDBTableBody rows={rows} />
//           </MDBTable>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBRow>
//   )
// }
// }
//
// export default Cart
