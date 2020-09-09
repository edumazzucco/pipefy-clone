import React, { useState } from 'react';
import produce from 'immer';
import { loadLists } from '../../services/api';
import BoardContext from './context';
import List from '../List';

import { Container } from './styles';

//To use with firestore I should use a async function inside the component
//Also eacg list should have a unique id
const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, from, toList, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
    <Container>
      {lists.map((list, index) => <List key={list.title} index={index} data={list}/>)}
      
    </Container>
    </BoardContext.Provider>
  );
}