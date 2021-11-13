# 2021년 11월 11일 ( 9주차 )

## Hook

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-11-10)
:::

Hook은 React 버전 16.8부터 React 요소로 새로 추가되었습니다.
Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.

Function 형태로 더 간결하고 짧은 코드를 작성할 수 있습니다.

## UseState

```jsx
mport React, { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

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

## 사용법

- `useState`는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공합니다. 우리는 이 함수를 이벤트 핸들러나 다른 곳에서 호출할 수 있습니다. 이것은 class의 `this.setState`와 거의 유사하지만, **이전 state와 새로운 state를 합치지 않는다**는 차이점이 있습니다.
- Hook은 클래스 안에서 동작하지 않습니다. 하지만 클래스를 작성하지 않고 사용할 수 있습니다.

### useState를 호출하는 것은 무엇을 하는 걸까요?

“state 변수”를 선언할 수 있습니다. 위에 선언한 변수는 count라고 부르지만 banana처럼 아무 이름으로 지어도 됩니다. useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 똑같습니다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다.

### useState의 인자로 무엇을 넘겨주어야 할까요?

useState()Hook의 인자로 넘겨주는 값은 state의 초기 값입니다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있습니다. 위의 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 0을 해당 state의 초기 값으로 선언했습니다. (2개의 다른 변수를 저장하기를 원한다면 useState()를 두 번 호출해야 합니다.)

### useState는 무엇을 반환할까요?

state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다. 이것이 바로 const [count, setCount] = useState()라고 쓰는 이유입니다. 클래스 컴포넌트의 this.state.count와 this.setState와 유사합니다.

### 참고

[Hook 소개](https://ko.reactjs.org/docs/hooks-overview.html)
