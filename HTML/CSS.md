>CSS(Cascading Style Sheet)

>`Inherit & Cascading`
>
>`Selector`
```css
*{
  universal selector
}

tag{
  tag selector
}

.class{
  class selector
}

#id{
  id selector
}

상위요소 하위요소{
  descendant selector
  //모든 하위 요소에 스타일 적용하기
}

부모요소 > 자식요소{
  child selctor  
}

요소1 + 요소2}{
  adjacent selector(인접 형제 선택자)
  // 구조상 같은 부모를 가진 형제 요소 중 첫 번째 요소에 스타일이 적용된다.
}

요소1 ~ 요소3{
  sibling selector(형제 선택자)
  // 요소1 이후에 오는 형제요소에 스타일이 적용된다.
}

요소1, 요소2{
group selector(그룹 선택자)
}
```

```css
tag [attribute]{
  [속성] 선택자
}

tag [attribute=value] {
  [속성=값] 선택자
}

tag [attribute~=value] {
  [속성~=값] 선택자
  //비교할 값이 여럿일 경우 하나만 일치해도 선택된다.
}

tag [attribute^=value] {
  [속성^=값] 선택자
  //^(캐럿)이 붙으면  지정한 문자로 시작하는 속성 값에 대해서만 스타일을 적용한다.
}

tag [attribute$=value] {
  [속성$=값] 선택자
  //지정한 문자로 끝나는 속성에 대해서 스타일을 적용한다.
}
tag [attribute=|value] {
  [속성=|값] 선택자
  //속성이 지정한 값으로 시작하면 스타일이 적용된다.
}

tag [attribute*=value] {
  [속성*=값] 선택자
  속성 값의 어느 위치든 해당값이 포함되어있으면 스타일이 적용된다.
}
```

```css
tag:link{
  
}
tag:visited{
  
}
tag:hover{
  
}
tag:focus{
  
}
```

```css
:root
tag :nth-child(n){
  //n번째 자식 요소에 스타일을 적용한다.
}

tag :nth-last-child(n){
  //역순으로 n번째 자식 요소에 스타일을 적용한다.
}

:nth-of-type(n){
  //앞에서 세어 몇번째 요소
}

:nth-last-of-type(n){
  //뒤에서 세어 몇번째 요소
}
:first-child{
  //첫번째 자식요소
}
:last-child{
  //마지막 자식요소
}
:first-of-child{
  //형제 관계에 있는 요소 중 첫번째 요소 
}
:last-of-child{
  //형제 관계에 있는 요소 중 마지막 요소
}
:only-child{
  //부모 요소 안의 자식 요소가 유일하게 하나일 때
}
:last-of-type{
  //해당 요소가 유일한 요소일 때 
}

:target{
  //
}
:enabled{
  //enabled 일 때
}
:disabled{
  //disabled 일 때
}
:checked{
  //체크되었을 때
}
::before{
  //특정 요소 뒤
}
::after{
  //특정 요소 앞
}
::selection{
  //마우스 커서로 드래그해서 선택된 영역
}
:not(tag){
  //(tag)를 제외한 외의 것들
}
```

---

> prefix

- -webkit- 사파리 크롬
- -moz- 모질라 파이어폭스 
- -o- 오페라
- -ms- 인터넷 익스플로러


---

#font-style 

> Font-family 글꼴 지정

- tag { font-family:"1", "2", "3"}

>영문 폰트의 종류

- sans-serif 글자 끝에 삐침이 없는(세리프 모양이 없는) 글꼴
  - serif 끌자 끝에 삐침이 있는(세리프 모양이 있는) 글꼴
- monospaced 자간이 일정한 글꼴
- cursive 손글씨같은 글꼴
- fantasy 주로 제목용으로 사용하는 굵고 특이한 글꼴

>@font-face

- `*.ttf` 컴퓨터에서 사용하는 글꼴로 트루타입(true type) 유형이다.

- `*.eot` `*.woff` 웹폰트 확장자

- ```css
  @font-face{
    font-family:"글꼴이름";
    src:url("글꼴경로") format("파일유형");
  }
  ```

>font-size 글자 크기를 지정

- 상대크기  xx-small < x-small < medium(default) < large < x-large < xx-large
  - 1.2x 증가 및 감소
  - 부모 요소의 글자크기가 상대크기 일때, 자식요소에 font-size: larger 또는 smaller을 사용 할 수 있다.
- 크기값 
  - `em` 대문자 M의 너비를 기준으로 한다.
  - `ex` x-height 핻ㅇ 글꼴의 소문자 x의 높이를 기준으로 한다.
  - `px` 픽셀 모니터에 따라 상대적인 크기
  - `pt` 포인트, 보통 문서에서 많이 사용하는 단위
- 백분율 `%`

> font-style

- normal 일반
- italic 이탤릭체
- oblique 이탤릭체

> font-variant 

- normal 일반
- Small-caps 작은 대문자로 표시

> font-wieght 글자 굵기를 지정

- normal 일반
- bold 볼드체
- lighter 원래 굵기보다 연하게 표시
- bolder 원래 굵기보다 진하게 표시
- 100~900 400 보통, 700 진하게

> Font(font-style font-variant font-weight font-size/line-height font-family)



#text-style

> direction 텍스트 방향

```css
tag{direction:rtl;}
```

- rtl 오른쪽에서 왼쪽으로 텍스트를 표시
- ​ltr (default) 왼쪽에서 오른쪽으로 텍스트를 표시


> text-align 텍스트 정렬방법을 지정

- 부모 요소의 값을 상속
- left 왼쪽 정렬 
- right 오른쪽 정렬 
- center 가운데 정렬
- justify 양쪽 정렬

> text-shadow 텍스트 그림자를 지정

```css
{text-shadow: h-shadow v-shadow  blur color}
```

- h-shadow 그림자의 가로 옵셋 (+는 글자 오른쪽 -는 글자 왼쪽) 


- v-shadow 그림자의 세로 옵셋 (+는 글자 아래쪽 -는 글자 위쪽) 


- blur 그림자가 번지는 정도 (옵션값으로 생략 가능, 적용하지 않으면 선명하게 표시된다.)


- color 그림자 색상

> text-overflow

- clip : 범위를 벗어나는 텍스트를 잘라버린다.
- ellipsis : 범위를 벗어나는 텍스트를 (…)로 표시한다.
- hidden : 범위를 벗어나는 텍스트를 숨김 처리한다.

> text-decoration 텍스트에 줄 표시하기

- none (default)
- underline 밑줄을 표시
- overline 윗줄을 표시
- line-through 취소선

> text-indent 텍스트 들여쓰기

- 크기값
- 백분율

> text-transform

- capitalize 시작하는 첫 글자를 대문자로 변환
- uppercase 
- lowercase 
- none



- line-hight
  - 단락 안에서 줄 간격을 조절
- list-style
  - 불릿 유형과 위치를 조절하는 속성(이미지를 사용 할 수 있다.)