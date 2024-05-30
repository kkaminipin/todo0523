const initialState = {
  todoItems: [],
  todoSave: [],
  todoStatus: '전체',
  test: [],
  status: '',
};

function todo(state = initialState, action) {
  // console.log('payload', action.payload);
  // console.log('state', state);

  let newTodo = [];
  switch (action.type) {
    case 'getStatus':
      console.log(state.status);
      state.status = action.payload,

    case 'todoTitle':
      return { ...state, todoTitle: action.payload };

    case 'todoCreate':
      newTodo = [
        ...state.todoItems,
        {
          id: Math.random(),
          todoTitle: state.todoTitle,
          modify: false,
          status: action.payload,
        },
      ];

      console.log('newTodo11', newTodo);

      return {
        ...state,
        todoItems: newTodo,
        todoSave: newTodo,
      };
    case 'todoReDraw':
      return {
        ...state,
        todoItems: [...action.payload],
      };
    case 'todoUpdate':
      console.log('gg');
      newTodo = state.todoSave.map((todoItem) => {
        // ▼ 클릭한 상태 버튼의 투두 객체를 return 해주는 로직
        if (todoItem.id === action.payload.id) {
          return action.payload;
        }
        // ▼ 클릭하지 않은 다른 투두 객체를 리턴해준다.
        return todoItem;
      });
      // console.log('newTodo', newTodo);
      // console.log('todoItems', state.todoItems);
      // console.log('todoSave', state.todoSave);
      // console.log('state test : ', state.test);
      return {
        ...state,
        /*
        ...state, // 없어도 정상적으로 나옴
        수업때 작성한 코드 240523
        todoItems: newTodo.filter((todoItem) => {
          // ▼ state.todoStatus는 항상 전체이기 때문에 항상 || 뒤에 코드가 실행된다.
          return todoItem.status === state.todoStatus || state.todoStatus === '전체';
        }),
        */
        todoItems: newTodo,
        todoSave: newTodo,
      };

    case 'todoSave': // 클릭한 상태 버튼만 보여주는 로직
      // console.log('newTodo : ', newTodo);
      // console.log('todoItems : ', state.todoItems);
      // console.log('todoSave : ', state.todoSave);

      /*
        1. 여러 투두 리스트를 만들고 각각 미진행, 진행중, 완료를 준다.
        2. 그 상태에서 클릭한 상태 버튼의 리스트만 보이는 버튼을 클릭한다. 
        3. 그 후에 다시 투두 리스트를 생성한다.
        4. 다시 클릭한 상태 버튼의 리스트만 보이는 버튼을 클릭하면 이전의 투두 리스트들이 없어진다. 
       
        5. 
        6. 그 이유는 위에서 newTodo = [] 를 주고 있고
        7. 투두 리스트를 Create 하면  todoItems와 todoSave에  newTodo를 할당하기 때문이다.
      */

      return {
        ...state,
        todoItems: state.todoSave.filter((todoItem) => {
          return todoItem.status === action.payload;
        }),
      };

    case 'todoAll': // 모든 상태버튼을 보여주는 로직
      return {
        ...state,
        todoItems: state.todoSave,
      };

    default:
      return { ...state };
  }
}

export default todo;
