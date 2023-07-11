# Mini-Shopping
바닐라 JS로 쇼핑몰 미니게임 만들기 <br/>
**배포주소** : https://circleyoo.github.io/Mini-Shopping/ <br/>

<img src="https://github.com/CircleYoo/Mini-Shopping/blob/master/asset/%EC%8B%9C%EC%95%88.png" width="100%"/> <br/>

### 💼 작업기간
> 1인 제작 <br/>
  2023.07.06 ~ 2023.07.11
  
### ⚙ 개발환경
> `JavaScript(ES6)` <br/>
  `HTML5` <br/>
  `CSS3`

## ✔ 주요기능
**데이터 받아오기**
* 비동기 통신을 위해 fetch API를 사용하여 JSON파일에서 데이터를 요청하고 받아옴

**목록 필터링**
* 총 3가지 타입 필터링 구현  |  전체보기, 타입별, 색상별
* 버튼 클릭이벤트를 처리하여 필터링된 아이템 목록 표시

**버튼 호버 및 클릭 이벤트**
* 클릭한 버튼에 active 클래스를 추가하여 스타일 변경
* 동시에 다른 버튼들에서는 active 클래스 제거

**아이템 스크롤링**
* 아이템 목록이 넘칠 경우, ul 태그에 overflow-y: scroll을 적용
* 커스텀 스타일링을 통해 스크롤바 디자인 변경
