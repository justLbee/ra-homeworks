'use strict';

function componentWrapper(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        popular: false,
        newOne: false,
        regular: true
      }
    }

    componentDidMount() {
      this.checkViews(this.props.views);
    }

    checkViews(views) {
      if(views > 1000) {
        this.setState({
          popular: true,
          newOne: false,
          regular: false
        })
      }
      else if(views < 100) {
        this.setState({
          popular: false,
          newOne: true,
          regular:false
        })
      }
      else {

      }
    }

    render() {
      if(this.state.regular) {
        return <Component {...this.props}/>
      }
      if(this.state.popular) {
        return <Popular><Component{...this.props}/></Popular>
      }
      if(this.state.newOne) {
        return <New><Component {...this.props}/></New>
      }
    }
  }
}

const WrappedVideo = componentWrapper(Video);
const WrappedArticle = componentWrapper(Article);

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <WrappedVideo {...item} />
        );

      case 'article':
        return (
          <WrappedArticle {...item} />
        );
    }
  });
};

// const List = props => {
//     return props.list.map(item => {
//         switch (item.type) {
//             case 'video':
//                 return (
//                     <Video {...item} />
//                 );
//
//             case 'article':
//                 return (
//                     <Article {...item} />
//                 );
//         }
//     });
// };
