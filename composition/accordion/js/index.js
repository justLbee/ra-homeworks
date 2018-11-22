'use strict';
const Article = props => {
  return (
    <section className="section" onClick={props.clickSection}>
      <button>toggle</button>
      <h3 className="sectionhead">{props.data.title}</h3>
      <div className="articlewrap">
        <div className="article">{props.data.message}</div>
      </div>
    </section>
  )
};

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.content = [
      {
        title: 'Компоненты',
        message: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим\n' +
          '          состоянием,\n' +
          '          а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом,\n' +
          '          создается\n' +
          '          иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход\n' +
          '          позволяет\n' +
          '          строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
      },
      {
        title: 'Выучил раз, используй везде!',
        message: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке\n' +
          '              мобильных приложений с использованием React Native.'
      },
      {
        title: 'Использование JSX',
        message: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код\n' +
          '              в\n' +
          '              JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
      }
    ]
  }

  clickHandle(event) {
    event.currentTarget.classList.toggle('open');
  }

  articleMaker(article, index) {
    return <Article key={index} data={article} clickSection={this.clickHandle.bind(this)}/>
  }

  render() {
    return (
      <main className="main">
        <h2 className="title">{this.props.header}</h2>
        { this.content.map((article, index) => this.articleMaker(article, index)) }
      </main>
    )
  }
}

ReactDOM.render(
  <Accordion header={'React'}/>,
  document.getElementById('accordian')
);