# Festa 웹 개발 과제

Festa는 이벤트를 생성하고 볼 수 있는 서비스 입니다.  여러분은 이벤트를 생성하고 생성된 이벤트 목록을 볼 수 있는 간이 Festa 웹을 과제로 만드실 예정입니다. CRUD중 'CR' 부분을 만들게 됩니다. 미리 만들어져있는 백엔드 API를 RESTful 한 형태로 드리며 이에 맞게 프런트엔드 코드를 작성 하시면 됩니다.

과제에서 구현해야할 스펙을 밑에 명시를 해드립니다. 모든 스펙을 완벽하게 구현하실 필요는 없으며, 구현 가능한 범위까지만 하면 됩니다. 필수/보너스 를 나눈 이유는 일단 필수에 집중을 하시고 시간이 되면 보너스 과제를 하시라는 의미에서 나누었습니다.   

  


### 디자인 및 목업

디자인 관련해서는 목업 디자인을 드리며, 이를 꼭 안 따라도 되며 형태만 비슷하면 디자인은 원하시는대로 하시면 됩니다. Bootstrap, Ant-design 등 원하시는 라이브러리를 쓰시거나, 그냥 CSS를 쓰셔도 무방합니다. 또한 CSS library로 추가적으로 사용을 하고 싶다면 사용해도 됩니다. 데스크탑만 기본적으로 지원 하면 됩니다. 

목업 디자인 URL : [목업 디자인](https://www.figma.com/file/3kUvYUStcUdkxTSQ92NaOt/Recruit-Assignment?node-id=0%3A1)  

  


### 해당 보일러플레이트 실행 과정 및 기초 설명

기본적인 Boilerplate를 React + TypeScript + Next.js로 드립니다. Dev mode에서 개발을 하시면 됩니다. 만약 이 boilerplate을 사용하고싶지 않으시다면 새로운 프로젝트를 생성하신 뒤에 다시 작성을 해도 무방합니다.  

먼저 해당 레포지토리를 클론 한 뒤 디렉토리로 이동하여 모든 디펜던씨를 설치 합니다.

```bash
npm install
```

그 뒤에 개발모드로 실행을 하여 개발을 진행하면 됩니다.

```bash
npm run dev
```

  

Next.js 프레임워크 기반의 boilerplate 이기 때문에 Next.js의 기본 규칙에 따라서 코드를 작성 하시면 됩니다.

`/components` 폴더에 React component를 만들면 됩니다. 
`/pages` 에는 실제 필요한 route 만 들어갑니다. 

  


### 안내 사항

- 필요한 라이브러리는 무엇이든 추가하여 자유롭게 사용 가능

- Git을 통한 코드 버전 관리를 해야 함

- 패키지 관리를 위해 `npm` 혹은 `yarn` 사용 - 프로젝트는 npm을 사용하였음

    

    
  
  ---
  
    


## 페이지 구성

- 이벤트 생성하기 페이지:  `/create`
- 이벤트 목록 보기 페이지: `/events`

  


### 이벤트 생성 하기 페이지 요구사항

다음 필드를 받아 이벤트를 생성하는 Form을 만들고, `이벤트 만들기` 버튼을 누르면 이벤트를 생성하는 api를 호출해서 이벤트가 생성 되도록 만드세요.

  

- Form의 필수 사항
  - 이벤트 제목:  `name: string!`
  - 호스트(주최자) 이메일: `hostEmail: string!`
  - 가격: `price: string!` - 티겟가격은 무료(0원) 이거나 최소 100원 이상, 최대 1,000,000원 이하, 
- 보너스 도전 과제
  - 이벤트 이미지 URL: `image:Url string? ` - 이미지를 업로드 하는 api를 통해서 이미지를 업로드 한 뒤 url을 받은 다음 해당 url까지 전송을 하세요.
  - 시작 날짜 및 시간: `startDate: Date?` - 시작 날짜를 안보내면, 서버에서 기본 으로 날짜를 넣어줍니다.

  


### 이벤트 목록 페이지

이벤트 list를 받아와서 이벤트의 정보를 표시해주는 리스트를 생성하세요. 다만 한 번에 보여주는 이벤트의 개수는 20개가 넘어가면 안되며, pagenation 혹은, infinte scoll(무한 스크롤)의 형태로 다음 이벤트가 보여지도록 해주세요.

- 필수 사항 - 이벤트 리스트 표시

  - 이벤트 제목

  - 호스트 이메일 

  - 가격 - 123,456원 형태로 표시

  - 이벤트 이미지:  이미지가 없는 이벤트도 있습니다. 이 경우에는 기본 이미지를 넣어주세요. 기본 이미지의 경우 boilerplate의 경로: `public/default.jpg` 로 있습니다

  - 시작 날짜 및 시간

  - Pagenation - 한 페이지당 이벤트가 최대 20개만 노출되도록 설정

    

- 보너스 도전 과제

  - 위의 필수사항에 pagenation 대신 infinite scroll로 다음 이벤트들을 불러오게 구현 해보세요.
  - 이벤트 시작 시간이 임박하면 날짜 대신 조금 더 친절하게 표시 해주세요.
    - ex) 오늘 오후 8시, 약 1시간 뒤 시작 등 
  - 이벤트 로딩 시에 로딩 스피너 혹은 적절한 에니메이션을 넣어 보세요.

    

  ---
  
  

## Backend API

**EndPoint = https://recruit.festa.dev/{uid}**

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

  위와 같은 객체들이 배열로 넘어옵니다. 

  순서는 id 가 큰 순서대로 내려옵니다.

    

- Query string

  pagination 기능을 위한 인자입니다. 

  ```js
  first= // 총 몇개의 이벤트를 가져올지 결정합니다.
  skip= // 최초의 몇개 이벤트를 건너 뛸지 결정합니다.
  ```

  예를 들어, 9 ~ 0 의 이벤트가 있다고 가정하고, skip=3, first=2 라면, 결과는 [6, 5]



#### 이벤트 생성 API

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
  
    
  
    

#### 이미지 업로드 API:  

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

  
  
  

---

  

## 기타 


### 코딩을 하면서 고려 해볼 만한 사항

- React/Next.js Component Lifecycle의 적절한 활용
- 각종 Form Validation 및 에러 메세지에 신경 쓰기
- 적절한 의존성 관리와 아키텍쳐 관련 방법론과 패턴에 대한 이해 및 적용
- 의미 있는/적절한 commit 및 commit message
- 가독성 있는 코드 및 가독성 있는 함수 변수 컴포넌트 이름 

  

  


### 초 울트라 보너스 도전 과제

혹시 과제가 너무 쉬웠다면 다음을 도전 해보세요.

- Unit Test 및 E2E testing
- Eslint 및 prettier 및 typescript 완벽 연동
- 반응형 (모바일) 지원
- Static Site Generation을 적용 할 수 있는 부분에 대해서 해보세요.
- 웹에 직접 deploy를 해서 production url 을 함께 보내주세요.



