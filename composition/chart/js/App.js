function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const Charts = props => {
  const typeProps = {
    labels: props.labels,
    max: props.max,
    colors: props.colors,
    type: props.type,
    series: props.series,
    isOpacity: props.opacity,
    isRight: props.isRight,
    isSmall: props.isSmall,
    isWidth: props.isWidth,
    height: props.height || 250
  };

  return (
    <div className={`Charts ${props.isHorizontal ? props.isHorizontal : ''}`}>
      {props.data.map((serie, serieIndex) => {
        let sortedSerie = serie.slice(0),
          sum;

        sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return <ChartType {...typeProps} serieIndex={serieIndex} serie={serie} sortedSerie={sortedSerie} sum={sum}/>
      })}
    </div>
  )
};

const ChartType = props => {
  return (
    <div className={`Charts--serie ${props.type ? props.type : ''}`}
         key={props.serieIndex}
         style={{height: props.height}}
    >
      <label>{props.isWidth ? props.series[props.serieIndex] : props.labels[props.serieIndex]}</label>
      {props.serie.map((item, itemIndex) => {
        let color = props.colors[itemIndex], style,
          size = props.isSmall ? (item / props.sum * 100) : (item / (props.max) * 100);

        style = {
          backgroundColor: color,
          opacity: props.opacity || (item / props.max + .05),
          zIndex: item,
          height: !props.isWidth ? size + '%' : '',
          right: props.isRight ? ((props.sortedSerie.indexOf(item) / (props.serie.length + 1)) * 100) + '%' : '',
          width: props.isWidth ? size + '%' : ''
        };

        return (
          <div
            className={`Charts--item ${props.type ? props.type : ''}`}
            style={style}
            key={itemIndex}
          >
            <b style={{color: color}}>{item}</b>
          </div>
        );
      })}
    </div>
  );
};

const Legend = props => (
  <div className="Legend">
    {props.labels.map((label, labelIndex) => {
      return (
        <div>
          <span className="Legend--color" style={{backgroundColor: props.colors[labelIndex % props.colors.length]}}/>
          <span className="Legend--label">{label}</span>
        </div>
      );
    })}
  </div>
);

class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({data});
  }

  render() {
    const {data, colors, labels, series} = this.state;
    const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
    return (
      <section>
        <Charts {...this.state} max={max}/>
        <Charts {...this.state} max={max} type='stacked' opacity={1} isSmall={true}/>
        <Charts {...this.state} max={max} type='layered' isRight={true}/>
        <Charts {...this.state} max={max} isHorizontal={'horizontal'} isWidth={true} height='auto'/>

        <Legend {...this.state}/>
      </section>
    );
  }
}

// class App extends React.Component {
//   componentWillMount() {
//     this.setState({
//       data: [],
//       series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
//       labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
//       colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
//     })
//   }
//
//   componentDidMount() {
//     this.populateArray();
//     setInterval(this.populateArray.bind(this), 2000);
//   }
//
//   populateArray() {
//     const series = 5;
//     const serieLength = 5;
//
//     let data = new Array(series).fill(new Array(serieLength).fill(0));
//     data = data.map(serie => serie.map(item => getRandomInt(0, 20)));
//
//     this.setState({data});
//   }
//
//   render() {
//     const {data, colors, labels, series} = this.state;
//     const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
//
//     return (
//       <section>
//         <div className="Charts">
//           {data.map((serie, serieIndex) => {
//             var sortedSerie = serie.slice(0),
//               sum;
//
//             sum = serie.reduce((carry, current) => carry + current, 0);
//             sortedSerie.sort(compareNumbers);
//
//             return (
//               <div className="Charts--serie"
//                    key={serieIndex}
//                    style={{height: 250}}
//               >
//                 <label>{labels[serieIndex]}</label>
//                 {serie.map((item, itemIndex) => {
//                   var color = colors[itemIndex], style,
//                     size = item / (max) * 100;
//
//                   style = {
//                     backgroundColor: color,
//                     opacity: item / max + .05,
//                     zIndex: item,
//                     height: size + '%'
//                   };
//
//                   return (
//                     <div
//                       className="Charts--item"
//                       style={style}
//                       key={itemIndex}
//                     >
//                       <b style={{color: color}}>{item}</b>
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//
//         <div className="Charts">
//           {data.map((serie, serieIndex) => {
//             var sortedSerie = serie.slice(0),
//               sum;
//
//             sum = serie.reduce((carry, current) => carry + current, 0);
//             sortedSerie.sort(compareNumbers);
//
//             return (
//               <div className="Charts--serie stacked"
//                    key={serieIndex}
//                    style={{height: 250}}
//               >
//                 <label>{labels[serieIndex]}</label>
//                 {serie.map((item, itemIndex) => {
//                   var color = colors[itemIndex], style,
//                     size = item / sum * 100;
//
//                   style = {
//                     backgroundColor: color,
//                     opacity: 1,
//                     zIndex: item,
//                     height: size + '%'
//                   };
//
//                   return (
//                     <div
//                       className="Charts--item stacked"
//                       style={style}
//                       key={itemIndex}
//                     >
//                       <b style={{color: color}}>{item}</b>
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//
//         <div className="Charts">
//           {data.map((serie, serieIndex) => {
//             var sortedSerie = serie.slice(0),
//               sum;
//
//             sum = serie.reduce((carry, current) => carry + current, 0);
//             sortedSerie.sort(compareNumbers);
//
//             return (
//               <div className="Charts--serie layered"
//                    key={serieIndex}
//                    style={{height: 250}}
//               >
//                 <label>{labels[serieIndex]}</label>
//                 {serie.map((item, itemIndex) => {
//                   var color = colors[itemIndex], style,
//                     size = item / (max) * 100;
//
//                   style = {
//                     backgroundColor: color,
//                     opacity: (item / max + .05),
//                     zIndex: item,
//                     height: size + '%',
//                     right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
//                   };
//
//                   return (
//                     <div
//                       className="Charts--item layered"
//                       style={style}
//                       key={itemIndex}
//                     >
//                       <b style={{color: color}}>{item}</b>
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//
//         <div className="Charts horizontal">
//           {data.map((serie, serieIndex) => {
//             var sortedSerie = serie.slice(0),
//               sum;
//
//             sum = serie.reduce((carry, current) => carry + current, 0);
//             sortedSerie.sort(compareNumbers);
//
//             return (
//               <div className="Charts--serie"
//                    key={serieIndex}
//                    style={{height: 'auto'}}
//               >
//                 <label>{series[serieIndex]}</label>
//                 {serie.map((item, itemIndex) => {
//                   var color = colors[itemIndex], style,
//                     size = item / (max) * 100;
//
//                   style = {
//                     backgroundColor: color,
//                     opacity: (item / max + .05),
//                     zIndex: item,
//                     width: size + '%'
//                   };
//
//                   return (
//                     <div
//                       className="Charts--item"
//                       style={style}
//                       key={itemIndex}
//                     >
//                       <b style={{color: color}}>{item}</b>
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//
//         <div className="Legend">
//           {labels.map((label, labelIndex) => {
//             return (
//               <div>
//                 <span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}}/>
//                 <span className="Legend--label">{label}</span>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     );
//   }
// }
