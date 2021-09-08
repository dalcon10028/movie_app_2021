# 2021년 9월 8일 ( 2주차 )

## 리액트 기초개념

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/web-contents-programming/tree/master/docs/src/review-note/2021-09-08)
:::

## Create React App의 폴더 구조

```bash
movie-app/ # root 디렉토리
  README.md # 리드미
  node_modules/ # 의존성 모듈
  package.json # 의존성 모듈을 포함한 프로젝트 정보가 기록되어 있는 곳
  public/ # 페이지 템플릿파일
  src/ # 소스 디렉토리
```

## Git

### 최초설정

```bash
git config --global user.name "계정이름"
git config --global user.email "깃허브 이메일"
```

### 스테이징

```bash
git add .
```

### 커밋

```bash
git commit -m "커밋메시지"
```

### 푸시

```bash
git push origin master
```

## 리액트 최초 렌더링

`/public/index.html`파일에 `<div id="root"></div>`에 `App`컴포넌트를 삽입합니다.

```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```

## JSX

JavaScript를 확장한 문법입니다.

### 표현식 포함하기

```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById('root'));
```

### 자식 정의하기

```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### XSS 공격 방지

기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다.

```javascript
const title = response.potentiallyMaliciousInput;
// 아래 코드는 안전합니다.
const element = <h1>{title}</h1>;
```

### 객체 표현하기

아래 두 코드는 동일합니다.

```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

```javascript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!',
);
```

## Props

간단히 말하면 컴포넌트에서 컴포넌트로 전달하는 데이터를 말합니다.
컴포넌트를 효율적으로 재사용 하기위해 함수의 매개변수와 비슷한 역할을 합니다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
