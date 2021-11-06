# 2021년 10월 6일 ( 5주차 )

## Component LifeCycle

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-10-06)
:::

## 클래스형 컴포넌트

### Constructor

- 클래스의 인스턴스 객체를 생성하고 초기화 할 때 실행되는 메서드 입니다.

- React.Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때 `super(props)` 선언을 권고하는 이유는 `this.props` 사용시 생성자 내에서 정이되지 않아 버그 발생 가능성이 있기 때문입니다.

- 자바스크립트에서 `super`는 부모클래스의 생성자를 참조한다는 의미입니다.

- `super`를 호출하기 전에는 this를 사용할 수 없다.

- 생성자 내에서는 setState를 사용하지 않고, this.state를 사용하여 state의 초기값을 할당한다.

- 생성자 내에서는 외부 API를 직접 호출할 수 없다.

<br />

## LifeCycle Methods

[자주 사용하는 라이프 사이클 메서드](https://ko.reactjs.org/docs/react-component.html)

### 마운트

- constructor() **생성자 메서드**
- render() **렌더링**
- componentDidMount() **렌더링 후**

### 업데이트

- render() **렌더링**
- componentDidUpdate() **재렌더링 후**

### 마운트 해제

- componentWillUnmount() **컴포넌트 DOM에서 제거**

## Axios

`javascript`에서는 네트워크 통신을 포함한 리소스 취득을 위해 [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)를 사용합니다.

[Axios](https://axios-http.com/)는 [Axios](https://axios-http.com/)는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이며 fetch API보다 많은 기능 지원과 문법적 간소화를 시켜줍니다.

## JSON Viewer

브라우저 상에서 JSON 데이터를 보기 쉽게 포맷팅 해주는 Chrome extension

[다운로드](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?info=EXLINK&hl=ko)

## API 앱에 호출하기

API를 호출하려면 `axios` import 후 componentDidMount() 메소드에서 호출하면 된다.

컴포넌트가 mount 되자마자 데이터 state에 데이터를 fetch 한다.
