# react-hook-tutorial
react hook 연습을 위한 tutorial code

_참조 : https://velog.io/@velopert/react-hooks_

## useState
- 가장 기본적인 Hook, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 함.
- 하나의 useState 함수는 하나의 상태 값만 관리. 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용
```javascript
import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
}
```

## useEffect
- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방
```javascript
import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });
```

## useContext
