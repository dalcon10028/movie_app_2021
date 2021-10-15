# 2021년 10월 13일 ( 6주차 )

## Movie 컴포넌트 수정하기

::: tip
[깃허브에서 보기](https://dalcon10028.github.io/movie_app_2021/tree/master/docs/src/review-note/2021-10-13)
:::

## 영화 앱 전체 모습 수정하기

### App.css 내용 모두 지우기

만일 삭제했거나 없다면 새로 생성합니다.

### Movie 컴포넌트에 genres props 넘겨주기

런타임(runtime) 아래 있는 장르(genres)를 추가해줍니다.

### Movie 컴포넌트 수정하기

**App 컴포넌트**에서 **Movie 컴포넌트**에 `genres props`를 넘겨줍니다.  
`console`을 확인해보면 두가지의 warning을 확인할 수 있습니다.

- JSX에 사용한 속성 중 class 속성이 className으로 사용되어야 합니다.
- genres props가 required로 되어 있는데 Movie 컴포넌트에 undefined로 넘어 왔습니다.

```jsx
function Movie({ title, year, summary, poster, genres }) { ... }
// genres: PropTypes.arrayOf(PropTypes.string).isRequired
```

## class 속성 이름 className으로 바꿔주기

html의 `class속성`과 javascript에서의 `class 키워드`가 동일한 단어기 때문에 겹치면 리액트가 혼란스럽습니다.

유사한 예를 하나 보면 label문의 `for`가 있습니다.

### html for 속성의 사용

`input태그`의 `id속성`과 연계하여 클릭편의성을 높일 수 있습니다.

```html
<form>
  <input type="radio" id="html" /><label>HTML</label>
  <input type="radio" id="css" /><label for="css">CSS</label>
</form>
```
