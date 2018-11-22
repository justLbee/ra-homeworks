'use strict';

// const App = ({items}) => (
//   <main>
//     {items.map(item => {
//       switch(item.type) {
//         case 'unisex':
//           return <Item color="black" item={item} />;
//         case 'male':
//           return <Item color="blue" item={item} />;
//         case 'female':
//           return <Item color="orange" item={item} />;
//       }
//     })}
//   </main>
// );

const App = ({items}) => (
  <ColorHandler {...items} />
);

function ColorHandler() {
  return (
    <main>
      {items.map(item => {
        switch(item.type) {
          case 'unisex':
            return <Item color="black" item={item} />;
          case 'male':
            return <Item color="blue" item={item} />;
          case 'female':
            return <Item color="orange" item={item} />;
        }
      })}
    </main>
  )
}