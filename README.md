# yb-next14

- next14/ react18/ react-query5/ next-auth5/ msw2/ socket.io4/ zustand
- 트위터 (x.com) 클론 코딩
- app router 사용

###

```bash
# 프론트 실행
$ yarn dev
# msw 실행
$ yarn mock
```

### setting

```bash
# 현재 폴더에 next, typescript 설치
$ npx create-next-app@latest --typescript ./

# prettier 설치
$ yarn add -D prettier
$ yarn add -D @typescript-eslint/eslint-plugin

# prettierrc설정
# vscode setting파일 설정
# package.json scripts 명령어 설정
# tailwind.config.ts 파일 설정

```

- .eslintrc.json 설정

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["next/core-web-vitals", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {}
}
```

### CSS

1. tailwind : 호불호 심함, 가독성 좋지 않음.
2. Styled Component or Emotion : Server Component SSR 좋지 않음.
3. vanilla extract : windows와 문제 있음.
4. sass
5. css module : 간단함.

### 패러렐 라우트 (Parallel Routes)

- 메인 페이지가 바탕이되고 그 위에 로그인 모달을 얹어서 띄우려면 메인 페이지와, 로그인 페이지를 (한페이지에서 두 화면을) 동시에 보여줄 수 있도록 하는 것이 페러렐 라우트.
- 폴더 앞에 @modal 이런식으로 @를 붙여서 만든다.
- 폴더가 다르면 페러렐이 될 수 없음.

### 인터셉팅 라우트 (Intercepting Routes)

- 라우터가 다른 두개의 페이지가 같이 뜨게 하는 것.

### 프라이빗 폴더 (Private folder(\_폴더))

- 공통이 되는 코드가 있으면 컴포넌트를 만들어서 관리.

### Server Component, Client Component

- React 18에서 새롭게 생긴 개념
- 서버 컴포넌트는 클라이언트 컴포넌트를 import 할 수 있다.
- 클라이언트 컴포넌트는 서버 컴포넌트를 import하면 안된다. (import 하면 서버 컴포넌트가 클라이언트 컴포넌트로 바뀜.)

### msw (Mock Service Worker) setting

```bash
# 설치 (public 폴더에)
$ npx msw init public/ --save
$ yarn add -D msw

```

### App Router

- pages router는 구조상의 문제로 부족한점을 개선할 수 없어서 app router가 출시되었다.
- 디렉토리 기능이 많이 달라졌음 (프라이빗 폴더, ()폴더는 주소창에관여x 등)
- layout 기능이 생김 (여러페이지의 공통적인 부분)
- 페이지별 권한체크도 앱라우터 미들웨어로 쉽게 할 수 있다.
- react 18 버전을 쓴다. 서버컴포넌트가 생겼고, 서버컴포넌트를 적극적으로 사용.
  넥스트서버에서 리액트를 미리 랜더링해서 프론트, 브라우저, 클라이언트로 보내줄 때 완성된 HTML을 보내줌.
  프론트 입장에서는 HTML 로딩시간이 대폭 줄어들었고, 완성된 HTML이 오니까 용량이 줄어들었다.
  하지만 브라우저에서 했던일을 넥스트서버에서 다하므로 넥스트서버에 부담이 늘었다.
  서버에 부담을 줄이고자 넥스트에서 서버에 캐시를 적극적으로 사용하고 있다.

### layout.tsx vs template.tsx

- 리랜더링이 되게 하고싶으면 template
- 리랜더링이 안되게 하고싶으면 layout
- template은 거의 사용하지 않지만, 페이지에서 무언가를 기록해야할때 사용한다. 즉, 페이지 넘나들때 리랜더링이 필요할때 사용한다.

### msw (mock service worker)

- 백엔드 api가 없을때 mock service로 요청을 보낼 수 있다.
- 요청에 대한 응답값을 미리 만들어야한다.

```sh
# msw 설치
$ npx msw init public/ --save
$ yarn add -D msw

```

### redux 대신 왜 react-query를 쓰는가?

- react-query의 핵심은 서버의 데이터를 가져오는 것.
- redux의 핵심은 데이터를 컴포넌트간에 공유한느 것.
- react-query는 가져오면서 캐싱을 잘해준다.
- 사용자 요청량이 커지면서 트래픽 관리를 잘해야한다.
- 트래픽 관리를 하기위해서는 최대한 캐싱을 해야한다.
- 캐싱을 잘하면 비용 절감으로 이어진다.
- redux는 캐싱이 약함.
- react-query는 서버쪽 데이터를 가져오는데 필요한 모든게 표준화가 잘되어 있다.
- fresh : 최신데이터. 업데이트할 필요가 없다는 의미. 캐시에 들어있는 데이터를 계속 사용해도 된다.
- stale : 기회가 되면 새로운 데이터를 가져오란 의미.
  - refetchOnWindowFocus: 다른탭 갔다가 다시 돌아왔을 때 (탭 전환시)
  - retryOnMount: 컴포넌트가 언마운트 되었다 다시 마운트 되는 경우
  - refetchOnReconnect: 인터넷 연길이 끊겼다가 다시 접속이 되는 순간
