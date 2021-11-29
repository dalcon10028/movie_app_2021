# 2021년 11월 24일 ( 11주차 )

## hook 규칙

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-11-24)
:::

그리고 Hook을 사용할 때는 두 가지 규칙을 준수해야 합니다.

이러한 규칙들을 강제하기 위한 linter 플러그인을 제공합니다.

## 최상위(at the Top Level)에서만 Hook을 호출해야 합니다.

**반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안됩니다.** 그렇게 해야 컴포넌트가 렌더링 될 때 항상 동일한 순서로 Hook이 호출되는 것이 보장됩니다.

이러한 규칙은 React가 `useState`와 `useEffect`가 여러 번 호출되는 중에서도 Hook의 상태를 올바르게 유지할 수 있도록 해줍니다.

## 오직 React 함수 내에서 Hook을 호출해야합니다.

한 컴포넌트에서 state나 effect hook을 여러개 사용할 수 있습니다.

```jsx
const Form = () => {
  // 1. name이라는 state 변수를 사용하세요.
  const [name, setName] = useState('Mary');

  // 2. Effect를 사용해 폼 데이터를 저장하세요.
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. surname이라는 state 변수를 사용하세요.
  const [surname, setSurname] = useState('Poppins');

  // 4. Effect를 사용해서 제목을 업데이트합니다.
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
};
```

위 코드와 같은 상황에서 어떻게 특정 state가 어떤 useState 호출에 해당하는지 알 수 있는 방법은 React가 Hook이 호출되는 순서에 의존한다는 것 입니다.

모든 렌더링에서 Hook의 호출 순서는 같기 때문에 다음과 같이 동작합니다.

```jsx
// ------------
// 첫 번째 렌더링
// ------------
useState('Mary'); // 1. 'Mary'라는 name state 변수를 선언합니다.
useEffect(persistForm); // 2. 폼 데이터를 저장하기 위한 effect를 추가합니다.
useState('Poppins'); // 3. 'Poppins'라는 surname state 변수를 선언합니다.
useEffect(updateTitle); // 4. 제목을 업데이트하기 위한 effect를 추가합니다.

// -------------
// 두 번째 렌더링
// -------------
useState('Mary'); // 1. name state 변수를 읽습니다.(인자는 무시됩니다)
useEffect(persistForm); // 2. 폼 데이터를 저장하기 위한 effect가 대체됩니다.
useState('Poppins'); // 3. surname state 변수를 읽습니다.(인자는 무시됩니다)
useEffect(updateTitle); // 4. 제목을 업데이트하기 위한 effect가 대체됩니다.

// ...
```

하지만 Hook을 조건문 안에서 호출한다면 어떤 일이 일어날까요?

```jsx
// 🔴 조건문에 Hook을 사용함으로써 첫 번째 규칙을 깼습니다
if (name !== '') {
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });
}
```

`name ≠ ''` 조건은 첫 번째 랜더링에서 true기 때문에 Hook은 동작합니다. 하지만 사용자가 그 다음 렌더링에서 폼을 초기화하면서 조건을 false로 만들어 버립니다. 렌더링 간에 Hook을 건너뛰기 때문에 Hook 호출순서는 달라지게 됩니다.

```jsx
useState('Mary'); // 1. name state 변수를 읽습니다. (인자는 무시됩니다)
// useEffect(persistForm)  // 🔴 Hook을 건너뛰었습니다!
useState('Poppins'); // 🔴 2 (3이었던). surname state 변수를 읽는 데 실패했습니다.
useEffect(updateTitle); // 🔴 3 (4였던). 제목을 업데이트하기 위한 effect가 대체되는 데 실패했습니다.
```

React는 두 번째 `useState` 호출에 대해 무엇을 반환할지 몰랐습니다. React는 이전 렌더링 때처럼 컴포넌트 내에서 두 번째 Hook 호출이 `persistForm` effect와 일치할 것이라 예상했지만 그렇지 않았습이다. 그 시점부터 건너뛴 Hook 다음에 호출되는 Hook이 순서가 하나씩 밀리면서 버그를 발생시키게 됩니다.

**이것이 컴포넌트 최상위(the top of level)에서 Hook이 노출되어야만 하는 이유입니다.**

조건부로 effect를 실행하기 원한다면, 조건문을 Hook 내부에 넣을 수 있습니다.

```jsx
useEffect(function persistForm() {
  if (name !== '') {
    localStorage.setItme('formData', name);
  }
});
```

### 참고

[Hook의 규칙](https://ko.reactjs.org/docs/hooks-rules.html)
