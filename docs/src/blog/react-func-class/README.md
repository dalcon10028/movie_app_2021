# 클래스형 컴포넌트 vs 함수형 컴포넌트

![리액트](https://media.vlpt.us/images/asas33/post/d6858e05-a9a5-4b3d-9a52-14f35fd53f15/react-logo.png)

리액트를 사용하여 컴포넌트를 생성할 때는 **클래스형**과 **함수**형 두 가지 방법으로 작성할 수 있습니다.

과거에는 클래스형 컴포넌트를 주로 사용했지만 함수형 컴포넌트에 리액트 훅(hook)을 지원해줘서 현재 공식문서에는 함수형 컴포넌트와 훅을 함께 사용할 것을 권장하고 있습니다.

## 컴포넌트의 선언

**클래스형 컴포넌트**와 **함수형 컴포넌트**의 역할을 동일 하지만 클래스형의 컴포넌트의 경우 state기능 및 라이프 사이클 기능을 사용할 수 있으며 임의 메서드를 정의할 수 있습니다.

그리고 render함수가 꼭 있어야 하고, 그 안에서 보여주어야 할 JSX를 반환해야합니다.

함수형 컴포넌트는 클래스형 컴포넌트 보다 선선하기가 좀 더 편하고 메모리 자원을 덜 사용한다고 합니다.


### 클래스형
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = '리액트';
    return <div>{name}</div>;
  }
}

export default App;
```

### 함수형
```javascript
import React from 'react';

function App() {
  const name = '리액트';
  return <div>{name}</div>;
}

export default App;
```

## props
**props**는 부모 컴포넌트에서 전달받은 readonly한 값입니다.

클래스형 컴포넌트에서는 constructor 메서드에서 super(props)를 반드시 호출해주어야 합니다.

그리고 state를 변경하기 위해서는 state를 직접 조작하는 것이 아닌 setState나 useState같은 setter 메서드를 통해서 바꾸어 주도록 합니다.

### 클래스형

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = { number: 0 };
  constructor(props) {
    super(props);
  }
  add() {
    this.setState(cur => ({ number: cur.number + 1 }));
  }
  render() {
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={this.add}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

### 참고
- [[React] 클래스형 컴포넌트 vs 함수형 컴포넌트](https://devowen.com/298)
- [React Functional Components VS Class Components](https://medium.com/wesionary-team/react-functional-components-vs-class-components-86a2d2821a22)