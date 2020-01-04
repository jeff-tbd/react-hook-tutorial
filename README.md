# react-hook-tutorial
react hook 연습을 위한 tutorial code

_참조 : https://velog.io/@velopert/react-hooks_

## useState
- 파라미터로 default값을 받고 배열 [값, setter함수]을 반환한다.
- 가장 기본적인 Hook, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 함.
- 하나의 useState 함수는 하나의 상태 값만 관리. 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용
```javascript
import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
}
```

## useEffect
- 파라미터로 함수를 전달받는다, 렌더링 될 때 마다 전달받은 함수를 실행한다
- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방
```javascript
import React, { useState, useEffect } from 'react';

const Info = () => {  
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');    
  });
}
```

- componentDidMount로만 동작시키려면, 두번째 인자로 빈 배열을 넣는다

```javascript
useEffect(() => {
  console.log('마운트 될 때만 실행됩니다.')
}, []);
```

- componentDidUpdate로만 동작시키려면, 두번째 인자에 검사하고 싶은 값을 담을 배열을 넣는다.

```javascript
useEffect(() => {
  console.log('name is updated')
}, [name]);
```

- 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect 에서 뒷정리(cleanup) 함수 반환

```javascript
useEffect(() => {
  console.log('effect');
  //cleanup함수 반환
  return () => console.log('cleanup');
});
```

- 언마운트 될 때만 뒷정리 함수를 호출하고 싶으시다면 useEffect 함수의 두번째 파라미터에 비어있는 배열을 넣으면 된다

```javascript
useEffect(() => {
  console.log('effect');
  //cleanup함수 반환
  return () => console.log('cleanup');
}, []);
```



## useContext

- 상태가 많아지고 전달해야 할 props가 늘어난다면 props를 계속 전달해줘야 하는 불편함도 생긴다.
- Provider와 Consumer관계를 통해서, props전달 없이 필요한 자식 component에서 필요한 Provider를 직접 불러서 사용하면 된다.
- createContext 함수를 호출하면 Provider 와 Consumer 라는 컴포넌트들이 반환