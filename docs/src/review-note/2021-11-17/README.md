# 2021년 11월 17일 ( 10주차 )

## UseEffect

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-11-17)
:::

*Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.*

## 정리(Clean-up)를 이용하지 않는 Effects

**React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있습니다.** 

네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들입니다. 이러한 예들은 실행 이후 신경 쓸 것이 없기 때문입니다. `class`와 `hook`이 이러한 side effects를 어떻게 다르게 구현하는지 비교해봅시다.

### Class를 사용하는 예시

React의 `class` 컴포넌트에서 `render` 메서드 그 자체는 side effect를 발생시키지 않습니다. 이때는 아직 이른 시기로서 이러한 effect를 수행하는 것은 React가 DOM을 업데이트하고 난 이후입니다.

React class에서 side effect를 `componentDidMount`와 `c`omponentDidUpdate`에 두는 것이 바로 이 때문입니다. 예시로 돌아와서 React가 DOM을 바꾸고 난 뒤 문서 타이틀을 업데이트하는 React counter 클래스 컴포넌트를 봅시다.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

이는 컴포넌트가 이제 막 마운트된 단계인지 아니면 업데이트되는 것인지에 상관없이 같은 side effect를 수행해야 하기 때문입니다. 개념적으로 렌더링 이후에는 항상 같은 코드가 수행되기를 바라는 것이죠. 하지만 React 클래스 컴포넌트는 그러한 메서드를 가지고 있지 않습니다. 함수를 별개의 메서드로 뽑아낸다고 해도 여전히 두 장소에서 함수를 불러내야 합니다.

### Hook을 이용하는 예시

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**useEffect가 하는 일은 무엇일까요?** 

useEffect Hook을 이용하여 우리는 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다. React는 우리가 넘긴 함수를 기억했다가(이 함수를 ‘effect’라고 부릅니다) DOM 업데이트를 수행한 이후에 불러낼 것입니다. 위의 경우에는 effect를 통해 문서 타이틀을 지정하지만, 이 외에도 데이터를 가져오거나 다른 명령형(imperative) API를 불러내는 일도 할 수 있습니다.

**useEffect를 컴포넌트 안에서 불러내는 이유는 무엇일까요?** 

`useEffect`를 컴포넌트 내부에 둠으로써 effect를 통해 `count` state 변수(또는 그 어떤 prop에도)에 접근할 수 있게 됩니다. 함수 범위 안에 존재하기 때문에 특별한 API 없이도 값을 얻을 수 있는 것입니다. Hook은 자바스크립트의 클로저를 이용하여 React에 한정된 API를 고안하는 것보다 자바스크립트가 이미 가지고 있는 방법을 이용하여 문제를 해결합니다.

**useEffect는 렌더링 이후에 매번 수행되는 걸까요?** 

네, 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행됩니다.(나중에 effect를 필요에 맞게 수정하는 방법에 대해 다룰 것입니다.) 마운팅과 업데이트라는 방식으로 생각하는 대신 effect를 렌더링 이후에 발생하는 것으로 생각하는 것이 더 쉬울 것입니다. React는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장합니다.


## 상세 예제

```jsx
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}
```

`count` state 변수를 선언한 뒤 React에게 effect를 사용함을 말하고 있습니다. `useEffect` Hook에 함수를 전달하고 있는데 이 함수가 바로 effect입니다. 이 effect 내부에서 `document.title`이라는 브라우저 API를 이용하여 문서 타이틀을 지정합니다. 같은 함수 내부에 있기 때문에 최신의 `count`를 바로 얻을 수 있습니다. 컴포넌트를 렌더링할 때 React는 우리가 이용한 effect를 기억하였다가 DOM을 업데이트한 이후에 실행합니다. 이는 맨 첫 번째 렌더링은 물론 그 이후의 모든 렌더링에 똑같이 적용됩니다.

숙련된 자바스크립트 개발자라면 `useEffect`에 전달된 함수가 모든 렌더링에서 다르다는 것을 알아챘을지도 모릅니다. 이는 의도된 것으로서, `count` 값이 제대로 업데이트 되는지에 대한 걱정 없이 effect 내부에서 그 값을 읽을 수 있게 하는 부분이기도 합니다. 리렌더링하는 때마다 모두 이전과 다른 effect로 교체하여 전달합니다. 이 점이 렌더링의 결과의 한 부분이 되게 만드는 점인데, 각각의 effect는 특정한 렌더링에 속합니다.


### 참고

[Effect Hook 사용하기](https://ko.reactjs.org/docs/hooks-effect.html)
