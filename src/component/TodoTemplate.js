import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

    // 서버에 할일 목록(json)을 요청해서 받아와야 함

    // todos배열을 상태관리
    const [todos, setTodos] = useState([
        {       // 변경을 할때는 setter를 통해서 사용 해야한다
            id: 1,
            title: '아침 산책하기',
            done: false
        },
        {
            id: 2,
            title: '오늘 주간 신문 읽기',
            done: true
        },
        {
            id: 3,
            title: '샌드위치 사먹기',
            done: false
        },
        {
            id: 4,
            title: '리액트 복습하기',
            done: false
        },
    ]);

    // id값 시퀀스 생성 함수
    const makeNewId = () => {
        if (todos.length === 0) return 1;
        return todos[todos.length - 1].id + 1;
    }

    // TodoInput에게 todoText를 받아오는 함수
    const addTodo = todoText => {
        console.log('할일 정보 in TodoTemplate: ', todoText);

        const newTodo = {
            id: makeNewId(),
            title: todoText,
            done: false
        };

        // todos.push(newTodo);

        // 리액트의 상태변수는 무조건 setter를 통해서만
        // 상태값을 변경해야 렌더링에 적용된다.
        // 다만 상태변수가 불변성(immutable)을 가지기 때문에
        // 기존의 상태에서 변경이 불가능하고
        // 새로운 상태를 만들어서 변경해야 한다.
        
        // setTodos(todos.concat(newTodo));
        setTodos([...todos, newTodo])
    };

    // 할 일 삭제 처리 함수
    const removeTodo = id => {
        // console.log(`삭제대상 id: ${id}`);

        setTodos(todos.filter(todo => todo.id !== id));
        // 삭제할 id와 다른것을 필터링해라
    };

 // 할 일 체크 처리 함수
 const checkTodo = id => {
    // console.log(`체크한 Todo id: ${id}`);

    // const copyTodos = [...todos];
    // for (const cTodo of copyTodos) {
    //   if (cTodo.id === id) {
    //     cTodo.done = !cTodo.done;
    //   }
    // }
    // setTodos(copyTodos);

    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));

  };

  // 체크가 안된 할 일의 개수 카운트하기
  const countRestTodo = () => {
    return todos.filter(todo => !todo.done).length;
  };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

  return (
    <div className='TodoTemplate'>
        <TodoHeader count={countRestTodo} />
        <TodoMain 
                todoList={todos} 
                remove={removeTodo} 
                check={checkTodo}/>
        <TodoInput addTodo={addTodo} />
    </div> // props 로 보내주기
  )
}

export default TodoTemplate