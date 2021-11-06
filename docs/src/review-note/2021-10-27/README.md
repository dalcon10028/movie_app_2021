# 2021년 10월 27일 ( 7주차 )

## 영화 앱 다듬기

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-10-27)
:::

## 영화 앱 스타일링 하기

### **App.css** 파일 수정

`App.css`파일을 수정하여 영화 앱 전체에 적용할 글꼴, 배경색 등을 적용합니다.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eff3f7;
  height: 100%;
}
```

### **Movie.css** 파일 수정

`Movie.css`파일을 수정하여 컴포넌트의 스타일링의 합니다.

```css
.movies .movie {
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movies .movie a {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
}

.movie img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie .movie__title,
.movie .movie__year {
  margin: 0;
  font-weight: 300;
}

.movie .movie__title {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
}

.movie .movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
}

.movie__genres li,
.movie .movie__year {
  margin-right: 10px;
  font-size: 14px;
}
```

## 문자열 자르기

영화 요약정보(`summary`)의 글자수를 제한하기 위해 `slice`메소드를 사용합니다.

```jsx
<p className="movie_summary">{summary.slice(0, 180)}...</p>
// summary 문자열이 최대 180자까지 보여지고 항상 뒤에 ...이 붙게됨
```

## 영화 앱 제목 바꾸기

`public` 디렉토리에 `index.html`파일을 열어 `title`을 변경하면 됩니다.

```html
...
<title>Movie Apps</title>
...
```

## react-router-dom

SPA에서 `hash`또는 `history API`를 이용하여 페이지 전환하는 기능을 편리하게 구현할 수 있게 해주는 라이브러리 입니다.

`App.js` 파일에 관련 라이브러리를 추가하여 네비게이션을 구현할 수 있습니다.

```jsx
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
```
