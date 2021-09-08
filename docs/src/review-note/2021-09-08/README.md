# 2021년 9월 8일 ( 2주차 )

# Create React App

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
