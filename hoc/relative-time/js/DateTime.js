'use strict';

const DateTime = props => {
  return (
    <p className="date">{props.date}</p>
  )
};

function widthDateTime(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        stringDate: ''
      }
    }

    componentDidMount() {
      this.setState({
        stringDate: this.daysHandler(),
      });
    }

    daysHandler() {
      const todayObj = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
      };

      const publishObj = {
        year: new Date(this.props.date).getFullYear(),
        month: new Date(this.props.date).getMonth() + 1,
        day: new Date(this.props.date).getDate(),
        hour: new Date(this.props.date).getHours(),
        minute: new Date(this.props.date).getMinutes()
      };

      if(todayObj.year !== publishObj.year || todayObj.month !== publishObj.month || todayObj.day !== publishObj.day) {
        return this.daysCounter();
      }
      if(todayObj.hour !== publishObj.hour) {
        return this.hoursCounter(todayObj.hour, publishObj.hour);
      }
      if((todayObj.hour - publishObj.hour) < 1) {
        return this.minutesCounter(todayObj.minute, publishObj.minute);
      }
    }

    daysCounter() {
      const today = new Date();
      const publish = new Date(this.props.date);

      const subtraction = Math.ceil(Math.abs(publish.getTime() - today.getTime()) / (1000 * 3600 * 24));

      return `${subtraction} дней назад`
    }

    hoursCounter(todayHours, publishHours) {
      return `${todayHours - publishHours} часов назад`
    }

    minutesCounter(todayMinutes, publishMinutes) {
      return `${todayMinutes - publishMinutes} минут назад`
    }

    render() {
      return <Component date={this.state.stringDate} />
    }
  }
}

const DateTimePretty = widthDateTime(DateTime);