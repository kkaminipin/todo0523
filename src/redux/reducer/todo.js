const initialState = {
  todoItems: [],
  todoSave: [],
  todoNotProgressed: [],
  todoOngoing: [],
  todoCompletion: [],
  todoStatus: '전체',
};

function todo(state = initialState, action) {
  // console.log('payload', action.payload);
  // console.log('state', state);

  let newTodo = [];
  switch (action.type) {
    case 'todoTitle':
      return { ...state, todoTitle: action.payload };
    case 'todoCreate':
      console.log('create called');
      newTodo = [
        ...state.todoItems,
        {
          id: Math.random(),
          todoTitle: state.todoTitle,
          modify: false,
          status: '미진행',
        },
      ];
      return {
        ...state,
        todoItems: newTodo,
        todoSave: newTodo,
        todoTitle: '',
      };
    case 'todoReDraw':
      return {
        ...state,
        todoItems: [...action.payload],
      };
    case 'todoUpdate':
      console.log('update called');
      newTodo = state.todoSave.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return action.payload;
        }
        return todoItem;
      });
      return {
        ...state,
        todoItems: newTodo.filter((todoItem) => {
          const result =
            todoItem.status === state.todoStatus || state.todoStatus === '전체';
          return result;
        }),
        todoSave: newTodo,
      };
    case 'todoSave':
      /*
        1. 투두 리스트를 생성시 리스트에 3가지 상태버튼 중 존재하는 상태버튼의 색상에 opacity가 1이 된다.

        1. 처음  상태 버튼을 클릭 하면 해당 상태 버튼의 값만 나온다.
          1-1. 다른 버튼을 또 클릭하면 이전 상태 버튼 값 +  현재 선택한 버튼의 값이 나온다.
          1-2. 선택한 버튼을 다시 클릭하면 이전 값이 나와야한다. 
          1-3. 
        

      */
      return {
        ...state,
        todoItems: state.todoSave.filter(
          (todoItem) => todoItem.status === action.payload
        ),
      };

    /*
    case 'todoNotProgressed':
      console.log(action.payload);
      return {
        ...state,
        todoNotProgressed: [...action.payload],
      };
    case 'todoOngoing':
      console.log(action.payload);
      return {
        ...state,
        todoOngoing: [...action.payload],
      };
    case 'todoCompletion':
      console.log(action.payload);
      return {
        ...state,
        todoCompletion: [...action.payload],
      };
    */

    default:
      return { ...state };
  }
}

export default todo;
