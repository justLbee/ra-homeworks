'use strict';

// const Video = props => {
//     return (
//         <div className="video">
//             <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//             <DateTime date={props.date} />
//         </div>
//     )
// };

const Video = props => {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
};