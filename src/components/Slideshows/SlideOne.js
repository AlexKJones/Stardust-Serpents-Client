// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import './style.scss'
//
// class SlideOne extends Component {
//   constructor () {
//     super() {
//
//     render () {
//       return (
//         <div className='container'>
//           <h3 className='text-center mb-4'>React with Bootstrap 4 Modal & Carousel</h3>
//
//           <div className='row mb-4'>
//             <div className='col text-center'>
//               <button
//                 type='button'
//                 className='btn btn-primary '
//                 data-toggle='modal'
//                 data-target='#largeModal'
//               >
//                               Open Modal
//               </button>
//             </div>
//           </div>
//
//           {/* Modal */}
//           <div
//             className='modal fade'
//             id='largeModal'
//             tabIndex='-1'
//             role='dialog'
//             aria-labelledby='basicModal'
//             aria-hidden='true'
//           >
//             <div className='modal-dialog modal-lg'>
//               <div className='modal-content'>
//                 <div className='modal-body'>
//                   {/* Carousel */}
//                   <div
//                     id='myCarousel'
//                     className='carousel slide'
//                     data-ride='carousel'
//                   >
//                     <ol className='carousel-indicators'>
//                       <li
//                         data-target='#myCarousel'
//                         data-slide-to='0'
//                         className='active'
//                       ></li>
//                       <li
//                         data-target='#myCarousel'
//                         data-slide-to='1'
//                       ></li>
//                       <li
//                         data-target='#myCarousel'
//                         data-slide-to='2'
//                       ></li>
//                     </ol>
//                     <div className='carousel-inner'>
//                       <div className='carousel-item active'>
//                         <img
//                           className='img-size'
//                           src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80'
//                           alt='First slide'
//                         />
//                       </div>
//                       <div className='carousel-item'>
//                         <img
//                           className='img-size'
//                           src='https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
//                           alt='Second slide'
//                         />
//                       </div>
//                       <div className='carousel-item'>
//                         <img
//                           className='img-size'
//                           src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
//                           alt='Third slide'
//                         />
//                       </div>
//                     </div>
//                     <a
//                       className='carousel-control-prev'
//                       href='#myCarousel'
//                       role='button'
//                       data-slide='prev'
//                     >
//                       <span
//                         className='carousel-control-prev-icon'
//                         aria-hidden='true'
//                       >
//                         {' '}
//                       </span>
//                       <span className='sr-only'>Previous</span>
//                     </a>
//                     <a
//                       className='carousel-control-next'
//                       href='#myCarousel'
//                       role='button'
//                       data-slide='next'
//                     >
//                       <span
//                         className='carousel-control-next-icon'
//                         aria-hidden='true'
//                       ></span>
//                       <span className='sr-only'>Next</span>
//                     </a>
//                   </div>
//                 </div>
//                 <div className='modal-footer'>
//                   <button
//                     type='button'
//                     className='btn btn-default'
//                     data-dismiss='modal'
//                   >
//                                       Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }
// }
//
// render(<App />, document.getElementById('root'))
//
// export default SlideOne
