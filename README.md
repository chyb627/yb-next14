# yb-next14

- next14/ react18/ react-query5/ next-auth5/ msw2/ socket.io4/ zustand
- 트위터 (x.com) 클론 코딩

### setting

```bash
# 현재 폴더에 next, typescript 설치
$ npx create-next-app@latest --typescript ./

# prettier 설치
$ yarn add -D prettier

# prettierrc설정
# vscode setting파일 설정
# package.json scripts 명령어 설정
# tailwind.config.ts 파일 설정

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
