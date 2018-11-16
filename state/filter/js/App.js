'use strict'

// const App = props => (
//   <div>
//     <Toolbar
//       filters={props.filters}
//       selected={'All'}
//       onSelectFilter={(filter) => console.log(filter)} />
//     <Portfolio projects={props.projects} />
//   </div>
// );

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      selected: 'All',
      projects: this.props.projects
    }
  }

  selectFilter = (filter) => {
    console.log(this.props);

    let filteredProjects;

    if(filter === 'All') {
      filteredProjects = this.props.projects;
    } else {
      filteredProjects = this.props.projects.filter(project => {
        if(project.category.includes(filter)) {
          return project
        }
      });
    }

    this.setState({
      selected: filter,
      projects: filteredProjects
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={this.selectFilter}/>
        <Portfolio projects={this.state.projects}/>
      </div>
    )
  }
}
