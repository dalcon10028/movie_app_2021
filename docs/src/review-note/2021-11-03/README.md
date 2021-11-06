# 2021년 11월 3일 ( 8주차 )

## 영화 앱에 여러 기능 추가하기

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-11-03)
:::

## Route 컴포넌트에 exact props 추가해 보기

`path props`가 "/"인 **Route 컴포넌트**에 `exact={true}`를 추가해 봅니다.
`exact={true}`를 사용하여 "/" url이 경확하게 매칭이 되었을 경우에만 `Home`컴포넌트로
라우팅 됩니다.

```jsx
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/" component={About} />
    </HashRouter>
  );
}
```

## 네비게이션 만들기

네비게이션 컴포넌트 입니다. 라우팅되어 SPA내에 페이지가 바뀌어도 사라지지않고 존재합니다.

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </div>
  );
}

export default Navigation;
```

## 영화 상세정보 기능 만들어 보기

영화 상세정보를 위해 `Route`를 추가해주고 `Detail` 컴포넌트를 작성합니다.

```jsx
//
function Navigaion() {
  return (
    <div className="nav">
      ...
      <Route path="/movie-detail" component={Detail} />;
    </div>
  );
}

export default Navigation;
```

```jsx
class Detail extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      const { year, title, summary, poster, genres } = state;
      return (
        <div>
          <h1>{title}</h1>
          <p>{year}</p>
          <p>{summary}</p>
          <p>{genres}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
```
