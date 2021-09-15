# 2021년 9월 15일 ( 3주차 )

## 컴포넌트간 데이터 전달하기

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/web-contents-programming/tree/master/docs/src/review-note/2021-09-15)
:::

## Props

간단히 말하면 컴포넌트에서 컴포넌트로 전달하는 데이터를 말합니다.
컴포넌트를 효율적으로 재사용 하기위해 함수의 매개변수와 비슷한 역할을 합니다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 구조분해 할당

교재에서 자주 사용되는 객체 구조분해 할당
```javascript
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

## Map
`map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

## 이모지 키보드 단축키

`window + ;`

## function vs Component
function은 소문자로 시작 React Component는 대문자로 시작합니다.

```javascript
function App() {} // React Component
function renderFood() {} // function
```

## refesh
`F5`를 누르면 캐시에 있는 데이터를 사용해서 새로고침 됩니다.

`Ctrl + F5`를 누르면 캐시를 사용하지 않고 소스를 다시 내려 받습니다.


### 참고
[구조분해 할당 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)