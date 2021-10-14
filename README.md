# Festa Frontend 개발자 전용 과제

## 기본 안내

- 과제 제출 방법: 본 레포지토리를 개인 계정으로 fork 뜬 후 Pull Request 전송
- 과제 진행 중 문의 사항은 **메일을 받은 쓰레드로 문의 하세요.** 메일을 보낼 때 **cc포함 전체 답장** 은 필수 입니다.
- 과제 수행 기간: 처음 레포지토리 개설 후 **4일(96시간**) 내
- 과제는 총 2 개 입니다.
- 본 과제의 저작권은 Festa에 있으며 외부에 유출 해서는 안됩니다.



## 1번 과제 - Datepicker 만들기

<img src="https://user-images.githubusercontent.com/18115360/137238042-5dbd1f5d-1c33-4f60-8240-4337a9de03cc.png" alt="image" style="zoom:47%;" />

다음과 같은 컴포넌트를 만들어 `storybook` 에 나올 수 있도록 `/components/DatePicker` 안에 코드를 작성하세요. 

`DatePicker` 컴포넌트의 완성본은 다음 url에서 확인 할 수 있습니다.
 https://storybook.festa.dev/?path=/story/molecules-datepicker--date-picker-default

`yarn storybook` 을 실행 했을 때, 위의 DatePicker과 같은 컴포넌트 형태가 나와야 하며, 동작 로직 또한 같아야 합니다.

- 시작 날짜와 끝 날짜 지정을 할 수 있어야 하며, 월이 바뀌어도 지정 가능 해야함
- 세부적인 동작 원리는 위의 url의 DateComponent 를 참고해주세요.
- 디자인만 같으면 html, css 는 위 컴포넌트와 동일하지 않아도 되며 자율적으로 작성 가능



## 2번 과제 - 이벤트 목록과 생성 페이지 만들기

![image](https://user-images.githubusercontent.com/18115360/137247176-c101302b-1ae2-49e5-9b60-dc0326b70763.png)

Festa는 이벤트를 생성하고 참여하고 볼 수 있는 서비스 이기 때문에 CRUD기능이 모두 포함되어 있습니다.

여러분은 이**벤트를 생성하고 생성된 이벤트 목록을 볼 수 있는 간이 Festa 웹**을 과제로 만드실 예정입니다. CRUD중 'CR' 부분을 만들게 됩니다. 이벤트 목록을 볼 수 있는 페이지와 이벤트를 직접 만들 수 있는 페이지, 총 두 페이지를 만드는 것이 여러분의 과제 입니다. 백엔드 API의 경우 미리 만들어져 있으며 RESTful한 형태로 드리며 이에 맞추어 프런트엔드 코드를 작성 하시면 됩니다.

여러분이 구현해야할 스펙을 밑에 자세하게 명시 해드립니다. 과제는 필수 사항과, 보너스 사항으로 나뉩니다.

### 디자인 및 목업

디자인 관련해서는 목업 디자인을 Figma (아래의 링크)로 드리며, 디자인은 이와 유사하게 만 하면 되며, 꼭 정밀하게 따르지 않아도 무방합니다.  
Bootstrap, Ant-design 등 원하시는 라이브러리를 쓰시거나, 그냥 CSS를 쓰셔도 무방합니다. 또한 CSS library(styled-components, emotion 기타)를 추가적으로 사용을 하고 싶다면 사용해도 됩니다.

목업 디자인 URL : [목업 디자인](https://www.figma.com/file/3kUvYUStcUdkxTSQ92NaOt/Recruit-Assignment?node-id=0%3A1)

### 고려사항

- React/Next.js Component Lifecycle의 적절한 활용
- 각종 Form Validation 및 Error Message에 신경 쓰기
- 적절한 상태관리, 의존성 관리, 아키텍쳐 관련 방법론과 디자인 패턴에 대한 이해 및 적용
- 버전 관리, 의미 있는/적절히 분리된 commit 및 commit message
- 가독성 있는 코드 및 가독성 있는 함수/변수/컴포넌트 이름
- 패키지 관리를 위해 `npm` 혹은 `yarn` 사용 - 현재 프로젝트는 `yarn` 을 사용하였음



### 브라우저 지원 범위

- Chrome/Firefox/Safari/Edge 지원
- IE는 지원하지 않아도 됨



### Boilerplate 안내

Boilerplate는 Festa 실제 서비스에 가장 가까운 형태인 React + TypeScript + Next.js로 구성됩니다. 만약 이 boilerplate을 사용하고싶지 않으시다면 사용하지 않으시고 새로운 Boilerplate를 사용 가능 합니다. 다른 Boilerplate를 사용하고 싶으시다면 (ex: create-react-app) 사용 해도 무방 합니다.

만약에 React 말고 다른 라이브러리/프레임워크를 사용 하거나, Vanilla JavaScript를 사용 하고 싶으시다면 그래도 무방합니다.

#### 프로젝트 셋업 방법

먼저 해당 레포지토리를 클론 한 뒤 디렉토리로 이동하여 모든 디펜던씨를 설치 합니다. 컴퓨터에는 Node.js v12.0 이상이 설치 되어 있어야 합니다.

```bash
yarn install
```

그 뒤에 개발모드로 실행을 하여 개발을 진행하면 됩니다.

```bash
yarn dev
```

Next.js 프레임워크 기반의 boilerplate 이기 때문에 Next.js의 기본 규칙에 따라서 코드를 작성 하시면 됩니다.

### 기타 안내 사항

- 필요한 라이브러리는 무엇이든 추가하여 자유롭게 사용 가능 (다만 본인이 사용하는 라이브러리가 채점 과정에 반영됨은 인지 하세요)

- React 말고 다른 라이브러리/프레임워크 사용 가능

- 언어는 TypeScript를 추천하며 대체 언어는 JavaScript 로 제한함.

## 페이지 구성

- 이벤트 생성하기 페이지: `/create`
- 이벤트 목록 보기 페이지: `/events`

### 이벤트 생성 하기 페이지 요구사항

다음 필드를 받아 이벤트를 생성하는 Form을 만들고, `이벤트 만들기` 버튼을 누르면 이벤트를 생성하는 api를 호출해서 이벤트가 생성 되도록 만드세요.

- Form의 필수 사항
  - 이벤트 제목: `name: string!`
  - 호스트(주최자) 이메일: `hostEmail: string!`
  - 가격: `price: number!` - 티겟가격은 무료(0원) 이거나 최소 100원 이상, 최대 1,000,000원 이하,
- 보너스 도전 과제
  - 이벤트 이미지 URL: `image:Url string? ` - 이미지를 업로드 하는 api를 통해서 이미지를 업로드 한 뒤 url을 받은 다음 해당 url까지 전송을 하세요.
  - 시작 날짜 및 시간: `startDate: Date?` - 시작 날짜를 안보내면, 서버에서 기본 으로 날짜를 넣어줍니다.

### 이벤트 목록 페이지

이벤트 list를 받아와서 이벤트의 정보를 표시해주는 리스트를 생성하세요. 다만 한 번에 보여주는 이벤트의 개수는 20개가 넘어가면 안되며, pagenation 혹은, infinte scoll(무한 스크롤)의 형태로 다음 이벤트가 보여지도록 해주세요.

- 필수 사항 - 이벤트 리스트 표시

  - 이벤트 제목

  - 호스트 이메일

  - 가격 - 123,456원 형태로 표시

  - 이벤트 이미지: 이미지가 없는 이벤트도 있습니다. 이 경우에는 기본 이미지를 넣어주세요. 기본 이미지의 경우 boilerplate의 경로: `public/default.jpg` 로 있습니다

  - 시작 날짜 및 시간

  - Pagenation - 한 페이지당 이벤트가 최대 20개만 노출되도록 설정

- 도전 과제

  - 위의 필수사항에 pagenation 대신 infinite scroll로 다음 이벤트들을 불러오게 구현 해보세요.
  - 이벤트 시작 시간이 임박하면 날짜 대신 조금 더 친절하게 표시 해주세요.
    - ex) 오늘 오후 8시, 약 1시간 뒤 시작 등
  - 이벤트 로딩 시에 로딩 스피너 혹은 적절한 에니메이션을 넣어 보세요.

  ***

## Backend API

**EndPoint = http://13.124.24.197/{uid}**

uid 의 경우 이메일을 통해 미리 제공된 개별 id를 이용하시면 됩니다.

```sh
https://recruit.festa.dev/{uid}/

## 예를 들어 uid=ABCDE 인 경우 events를 불러오는 api는 다음과 같습니다.
https://recruit.festa.dev/ABCDE/events
```

### 이벤트 목록 호출 API

**GET** ` /events?first=0&skip=0`

전체 이벤트를 불러오는 API 입니다.

- Response Body (json)

  ```json
  [
      {
          "id": 1,
          "name": "이벤트",
          "email": "jdd04026@gmail.com",
          "price": 100,
          "imageUrl": "https://s3.ap-northeast-2.amazonaws.com/festa-temp/devfest-cover.jpg",
          "startDate": "2020-08-03T11:36:11.552Z",
      }
      ...
  ]
  ```

  위와 같은 객체들이 배열로 넘어옵니다. 순서는 id 가 큰 순서대로 내려옵니다.

- Query string

  pagination 기능을 위한 인자입니다.

  ```js
  first= // 총 몇개의 이벤트를 가져올지 결정합니다.
  skip= // 최초의 몇개 이벤트를 건너 뛸지 결정합니다.
  ```

  예를 들어, 9 ~ 0 의 이벤트가 있다고 가정하고, skip=3, first=2 라면, 결과는 [6, 5] 입니다.

### 이벤트 생성 API

**POST** `/event`

특정 이벤트를 생성하는 API 입니다.

- Request Body

  ```json
  {
    "name": "이벤트",
    "email": "jdd04026@gmail.com",
    "price": 100,
    "startData": "2020-08-03T11:36:11.552Z",
    "imageUrl": "https://s3.ap-northeast-2.amazonaws.com/festa-temp/devfest-cover.jpg"
  }
  ```

  name, email, price 는 필수 입력 데이터 입니다.

  startDate, ImageUrl 은 선택 입력 데이터이며, 기본값은 위와 동일합니다.

### 이미지 업로드 API (보너스)

**POST**: `/image?name=image_name.png&width={number}&height={number}`

이미지를 업로드 하는 URL 입니다. 이벤트를 생성하기에 앞서, 먼저 이미지를 업로드 해놓은 뒤에, 반환되는 String 값을 이벤트 생성시 입력해야 합니다. 확장자는 jpg, png, jpeg 만을 지원해야 합니다.

- Request

  - Query string

    ```js
    name= // [필수] 이미지의 확장자를 포함한 이름을 넣습니다.
    width= // 이미지 크기를 조절하기 위한 width 사이즈를 입력합니다.
    height= // 이미지 크기를 조절하기 위한 height 사이즈를 입력합니다.
    ```

    name에 반드시 파일 이름을 넣어서, 서버가 확장자를 인지할 수 있도록 해줍니다.

  form, multipart 등의 방법을 사용하지 않으며, 단순히 Body 에 직접 파일을 보내면 됩니다.
  단, Query string 의 name 필드에 반드시 파일명과 확장자를 입력해줘야 합니다.

---

### 기타 도전 보너스 도전과제

- Unit Test 및 E2E testing
- Eslint 및 prettier 및 TypeScript 완벽 연동
- 반응형 (모바일) 지원
- Static Site Generation을 적용 할 수 있는 부분에 대해서 해보세요.
- 웹에 직접 deploy를 해서 production url을 함께 보내주세요.
