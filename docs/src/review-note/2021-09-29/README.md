# 2021년 9월 29일 ( 4주차 )

## prop-types 도입하기

::: tip
[깃허브에서 보기](https://dalcon10028.github.io/movie_app_2021/tree/master/docs/src/review-note/2021-09-29)
:::

## Git 브랜치 관련 설정

```bash
git version // 2.28.0이상인지 확인
git config --global init.defaultBranch main
```

모든 설정을 확인

```
git config --list
```

```bash
git branch -m 이전이름 바꿀이름
```

## React Project Clone 하기

```bash
git clone 레포지토리 이름
cd 레포지토리 이름
npm i // 의존성 모듈 설치
```

## map() 함수로 만든 컴포넌트에 key props 추가하기

리스트의 각 원소는 유일한 key prop을 가져야 합니다. 리액트에서의 원소들은 구분을 위해 유일해야하기 때문에 unique한 key 값을 넘겨 주도록 합니다.

```javascript
{
  movies.map((movie) => (
    <Grid item xs={12} sm={4} key={movie.id}>
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        rating={movie.rating}
      />
    </Grid>
  ));
}
```

## public 디렉터리로 assets 활용하기

외부 경로를 사용하지 않고 내부 자원의 상대 경로를 활용하고 싶을 때
`public` 디렉토리에 자원들을 저장하면 상대 경로로 사용가능합니다.

```
├─public
| ├─assets
| └─ ...
└─src
    ├─components
    ├─routes
    └─ ...
```

## prop-types 도입하기

컴포넌트 간의 데이터를 전달할 때 제대로 된 타입으로 전달되는지 확인하기 위한 모듈입니다.
`typescript`의 `interface` 역할을 하는 것 같습니다.

### Install

```bash
npm i --save prop-types
```

### Usage

```javascript
// prop-types
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};
```

## Class형 컴포넌트

리액트에서 클래스형 컴포넌트를 만들기 위해서는 Component클래스를 상속받아야 합니다.

```javascript
import React, { Component } from React;

class App extends Component {

}
...
```

### state 변경하기

class형 컴포넌트에서 state를 변경하기 위해서는 setState 메서드를 사용해야 합니다.

```javascript
class App extends Component {
  state = {
    count: 0, // state 초기화
  };

  add = () => this.setState({ count: 1 });
}
```
