(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{383:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2021년-9월-29일-4주차"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021년-9월-29일-4주차"}},[t._v("#")]),t._v(" 2021년 9월 29일 ( 4주차 )")]),t._v(" "),a("h2",{attrs:{id:"prop-types-도입하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop-types-도입하기"}},[t._v("#")]),t._v(" prop-types 도입하기")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dalcon10028.github.io/movie_app_2021/tree/master/docs/src/review-note/2021-09-29",target:"_blank",rel:"noopener noreferrer"}},[t._v("깃허브에서 보기"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"git-브랜치-관련-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-브랜치-관련-설정"}},[t._v("#")]),t._v(" Git 브랜치 관련 설정")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version // "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.28")]),t._v(".0이상인지 확인\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global init.defaultBranch main\n")])])]),a("p",[t._v("모든 설정을 확인")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --list\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m 이전이름 바꿀이름\n")])])]),a("h2",{attrs:{id:"react-project-clone-하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-project-clone-하기"}},[t._v("#")]),t._v(" React Project Clone 하기")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 레포지토리 이름\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" 레포지토리 이름\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i // 의존성 모듈 설치\n")])])]),a("h2",{attrs:{id:"map-함수로-만든-컴포넌트에-key-props-추가하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-함수로-만든-컴포넌트에-key-props-추가하기"}},[t._v("#")]),t._v(" map() 함수로 만든 컴포넌트에 key props 추가하기")]),t._v(" "),a("p",[t._v("리스트의 각 원소는 유일한 key prop을 가져야 합니다. 리액트에서의 원소들은 구분을 위해 유일해야하기 때문에 unique한 key 값을 넘겨 주도록 합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  movies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("movie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Grid item xs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" sm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Movie\n        key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        year"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        summary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("summary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        poster"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("medium_cover_image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        genres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("genres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        rating"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("movie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Grid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"public-디렉터리로-assets-활용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-디렉터리로-assets-활용하기"}},[t._v("#")]),t._v(" public 디렉터리로 assets 활용하기")]),t._v(" "),a("p",[t._v("외부 경로를 사용하지 않고 내부 자원의 상대 경로를 활용하고 싶을 때\n"),a("code",[t._v("public")]),t._v(" 디렉토리에 자원들을 저장하면 상대 경로로 사용가능합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─public\n| ├─assets\n| └─ ...\n└─src\n    ├─components\n    ├─routes\n    └─ ...\n")])])]),a("h2",{attrs:{id:"prop-types-도입하기-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop-types-도입하기-2"}},[t._v("#")]),t._v(" prop-types 도입하기")]),t._v(" "),a("p",[t._v("컴포넌트 간의 데이터를 전달할 때 제대로 된 타입으로 전달되는지 확인하기 위한 모듈입니다.\n"),a("code",[t._v("typescript")]),t._v("의 "),a("code",[t._v("interface")]),t._v(" 역할을 하는 것 같습니다.")]),t._v(" "),a("h3",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save prop-types\n")])])]),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prop-types")]),t._v("\nMovie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  year"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  summary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  poster"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  genres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arrayOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rating"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"class형-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class형-컴포넌트"}},[t._v("#")]),t._v(" Class형 컴포넌트")]),t._v(" "),a("p",[t._v("리액트에서 클래스형 컴포넌트를 만들기 위해서는 Component클래스를 상속받아야 합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h3",{attrs:{id:"state-변경하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-변경하기"}},[t._v("#")]),t._v(" state 변경하기")]),t._v(" "),a("p",[t._v("class형 컴포넌트에서 state를 변경하기 위해서는 setState 메서드를 사용해야 합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// state 초기화")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);