'use strict';

function simpleColumnChart(Component, componentType) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        list: []
      };
    }

    componentWillReceiveProps(nextProps) {
      let list = [];
      if (componentType === 'date') {
        list = nextProps.list.sort((a,b) => {
          return new Date(b.date) - new Date(a.date);
        })
      } else {
        nextProps.list.forEach(element => {
          list.push({
            [componentType]: this.componentHandler(element.date, componentType),
            amount: element.amount
          })
        })
      }

      this.setState({
        list: list
      });
    }

    componentHandler(date, type) {
      if (type === 'month') {
        const monthNames = ["Janu", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        return monthNames[new Date(date).getMonth()];
      }

      if (type === 'year') {
        return new Date(date).getFullYear();
      }
    }

    render() {
      return <Component list={this.state.list}/>
    }
  }
}

const MonthWrapped = simpleColumnChart(MonthTable, 'month');
const YearWrapped = simpleColumnChart(YearTable, 'year');
const DateWrapped = simpleColumnChart(SortTable, 'date');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <MonthWrapped list={this.state.list}/>
        <YearWrapped list={this.state.list}/>
        <DateWrapped list={this.state.list}/>
      </div>
    );
  }
}