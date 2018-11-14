'use strict';

function MessageHistory({list}) {
  if (!list || list.length === 0) {
    return null;
  }

  return (
    <ul>
      {
        list.map(el => {
          const message = {
            time: el.time,
            text: el.text
          };

          switch(el.type) {
            case 'message':
              return <Message key={el.id} from={el.from} message={message} />;
            case 'response':
              return <Response key={el.id} from={el.from} message={message} />;
            case 'typing':
              return <Typing key={el.id} from={el.from} message={message}/>;
          }})}
    </ul>
  )

}