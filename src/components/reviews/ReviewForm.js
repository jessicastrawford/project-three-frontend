// import React from 'react'
// import ReactStars from 'react-star-rating-component'

// function ReviewForm({ handleChange, formData, errors }) {
//   return (
//     <form>
//       <label>
//         Enter your review below: 
//       </label>
//       <div>
//         <input 
//           className=""
//           type="text"
//           name="name"
//           placeholder="Add a comment..."
//           onChange={handleChange}
//           // value={formData.text}
//         />
//         {errors && !errors.text && <small className="help is-danger">Comment is required</small>}     
//       </div>
//       <div>
//         {errors && !errors.rating && <small className="help is-danger">Rating is required</small>}
//         <label>
//           <ReactStars
//             count={5}
//             size={20}
//             half={false}
//             name="rating"
//             value={parseInt(this.state.rating)}
//             onChange={calcRating => {
//               this.handleRating(calcRating)
//             }}
//             fullIcon={<i className="fa fa-star"></i>}
//             emptyIcon={<i className="far fa-star"></i>}
//           />
//         </label>
//       </div>
//       <div>
//         <button type="submit" className="reviewBtn">
//           Submit Review
//         </button>
//       </div>
      
//     </form>
//   )
// }

// export default ReviewForm 