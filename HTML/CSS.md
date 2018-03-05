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

> Font-family

- font-size
  - 글자 크기를 지정
- font-wieght
  - 글자 굵기를 지정
- text-align
  - 텍스트 정렬방법을 지정
- text-shadow
  - 택스트 그림자를 지정
- line-hight
  - 단락 안에서 줄 간격을 조절
- list-style
  - 불릿 유형과 위치를 조절하는 속성(이미지를 사용 할 수 있다.)