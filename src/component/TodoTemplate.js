import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

    // 서버에 할일 목록(json)을 요청해서 받아와야 함
    const todos = [
        {
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
    ];

    // TodoInput에게 todoText를 받아오는 함수
    const addTodo = todoText => {
        console.log('할일 정보 in TodoTemplate: ', todoText);
    };

  return (
    <div className='TodoTemplate'>
        <TodoHeader />
        <TodoMain todoList={todos} />
        <TodoInput addTodo={addTodo} />
    </div> // props 로 보내주기
  )
}

export default TodoTemplate