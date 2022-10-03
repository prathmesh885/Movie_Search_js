let moviesInfo = document.getElementById("getData");
let search = document.getElementById("search");

function movieThembnail(arry) {
  let result = "";
  arry.forEach((ele) => {
    result += `<div class="col-md-3">
    <div class="card cardheight mb-2">
      <figure class="imgInfo">
        <img
          src="${IMG_PATH}${ele.poster_path}"
          alt="${ele.original_title}"
          title="${ele.original_title}"
          class="img-fluid"
        />
        <figcaption class="fig p-3 ">
          <div class="row align-items-center">
            <div class="col-sm-9">
              <p class="movieName text-white">
                ${ele.original_title}
              </p>
            </div>
            <div class="col-sm-3">
              <p class="rating text-center ${colors(
                ele.vote_average
              )} font-weight-bold">
                ${ele.vote_average}
              </p>
            </div>
          </div>
        </figcaption>
        <div class="overview text-center">
          <h4>Overview</h4>
          <p>
            ${ele.overview}
          </p>
        </div>
      </figure>
    </div>
  </div>`;
  });
  return result;
}

moviesInfo.innerHTML = movieThembnail(results);

function colors(ele) {
  if (ele >= 8) {
    return "text-success";
  } else if (ele >= 5) {
    return "text-warning";
  } else {
    return "text-danger";
  }
}

search.addEventListener("keyup", onKeyUp);

function onKeyUp(event) {
  let movieArry = [];
  let inputVal = this.value;
  if (inputVal.length) {
    if (event.keyCode === 13) {
      results.forEach(function (ele) {
        if (ele.title.toLowerCase().includes(inputVal.toLowerCase())) {
          // console.log(ele);
          movieArry.push(ele);
          moviesInfo.innerHTML = movieThembnail(movieArry);
        }
      });
      console.log(movieArry);
      // moviesInfo.innerHTML = movieArry;
    }
  } else {
    moviesInfo.innerHTML = movieThembnail(results);
  }
}






// const movieThumbnail = document.getElementById("getData");
// const search = document.getElementById("search");

// function movieData(arr) {
//   let result = "";

//   arr.forEach((ele) => {
//     result += `
//     <div class="col-md-3">
//     <div class="card" >
//       <figure>
//         <img
//           class="imgFig img-fluid"
//           src="${IMG_PATH}${ele.poster_path}"
//           alt="${ele.original_title}"
//           title="${ele.original_title}",
//           target="imgFig"
//         />
//         <figcaption>
//           <div class="row">
//           <div class="col-sm-9"> ${ele.title}</div>
//             <div class="col-sm-3 ${colors(ele.vote_average)}">${
//       ele.vote_average
//     }</div>
//           </div>
//         </figcaption>
//         <div class="overview">
//           <h3 class="text-center">OverView</h3>
//           <p class="p-2 text-white">
//            ${ele.overview}
//           </p>
//         </div>
//       </figure>
//     </div>
//   </div>
// `;
//   });
//   return result;
// }

// movieThumbnail.innerHTML = movieData(results);

// function colors(e) {
//   if (e >= 8) {
//     return "text-success";
//   } else if (e >= 5) {
//     return "text-warning";
//   } else {
//     return "text-danger";
//   }
// }
// search.addEventListener("keyup", onKeyUp);






// function onKeyUp(e) {
//   let movieArr = [];
//   let inputValu = this.value;
//   if (inputValu.length) {
//     if (e.keyCode === 13) {
//       results.forEach(function (ele) {
//         if (ele.title.toLowerCase().includes(inputValu.toLowerCase())) {
//           console.log(ele);
//           movieArr.push(ele);
//           movieThumbnail.innerHTML = movieData(movieArr);
//           // e.preventDefault();
//           // console.log(movieArr);
//         }
//       });
//       console.log(inputValu);
//     }
//   } else {
//     movieThumbnail.innerHTML = movieData(results);
//   }
//   // console.log(e.target.value);
// }
