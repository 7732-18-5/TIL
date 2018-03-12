>`CSS`(Cascading Style Sheet)

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

> font-weight 글자 굵기를 지정

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



>letter-spcaing

- 낱글자 사이의 간격을 (크기값으로) 조절

> word-spcaing

- 단어 사이의 간격을 (크기값으로) 조절 

> line-hight 단락 안에서 줄 간격을 조절

> white-space 텍스트와 함께 입력한 공백처리

- normal (default) 연속하는 공백을 하나로 처리


- nowrap 연속하는 공백을 하나로 처리하고 줄바꿈을 하지않는다.

- Pre 연속하는 공백을 표시하고 줄바꿈을 하지 않는다.

- pre-line 연속하는 공백을 하나로 취급하고 줄바꿈을 한다.

- pre-wrap 연속하는 공백을 표시하고 줄바꿈도 한다

- inherit 부모요소의 값을 상속받는다.

- initial 초기

- ```css
  tag {white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;}
  ```

> list-style-type 불릿 유형과 번호 스타일 지정

> lisy-style-position

- inside 불릿이나 숫자를 안으로 들여쓴다
- outside (default)

> list-style-image

```css
tag(list-style-image:url();)
```

> list-style (list-style-type / list-style-position / list-style-image)

# Quiz

> font-variant



> text-decoreation

> text-indent

> letter-spacing



> list-style-position

---

# Color

> 16진수 표기법 (1~f)

```css
tag{ color: #ffffff; } // r g b
```

> rgb 표기법 / rgba (css3+)

```css
tag{ background-color:rgb(255 255 255); } // r g b

tag{ background-color:rgba(255 255 255 투명도); }
//alpha(투명도) : 0~1
```

> hsl표기법 / hsla (css3+)

 ```css
tag{ background:hsl(색상 채도 밝기); } 
// 색상: 0~360도 채도: 0~100% 밝기: 0~100%
//360도 red
//240도 blue
//120도 green

tag{ background:hsla(색상 채도 밝기 투명도); }
//alpha(투명도) : 0~1
 ```

#background-color

> background-color

```css
tag{
  background-color:#ffffff;
  background-color:rgba(255, 255, 255, 0.5);
  background-color:green;
}
```

> background-image

```scss
tag{ background-image:url(파일경로); }
// '', "" 생략가능하다.
```
> background-repeat

```css
tag{ background-repeat:property value; }
```

- repeat 너비x높이에 가로 세로반복
- repeat-x 너비에 가로반복
- repeat-y 높이에 세로반복
- no-repeat 한번만 표시한다.

> background-position

```css
tag{ background-position: % % } // (x축 y축)
tag{ background-position: px px } // (x축 y축)
tag{ background-position: keyword }

// x축 left center right 
// y축 top bottom center
```

> background-attachement

```css
tag{ background-attachement: fix|scroll; }
```

> background

```css
tag{ background: image repeat position attachment;}
```

> background-size

- auto
- 크기값
- 백분율
- cover 너비와 높이중 큰 값을 배경이미지가 삽입되는 요소에 맞춘다.
- contain 너비와 높이중 작은 값을 배경이미지가 삽입되는 요소에 맞춘다.

> background-clip

- Border-box
- Padding-box
- Content-box

> background-origin

- `background-origin` 은 `background-position` 속성을 이용해 배경 이미지를 원하는곳에 배치하려고 할 때 어디를 기준으로 할 것인지 지정하는 것이다. 
- Border-box
- Padding-box
- Content-box

#gradient

> linear-gradient (각도 또는 위치, color-start, color-stop)

- to top 아래에서 위로
- to left 오른쪽에서 왼쪽으로
- to right 왼쪽에서 오른쪽으로
- To bottom 위에서 아래로

> radial-gradient (위치, 모양(및 크기), color-start, color-stop)

- circle, ellipse
- closest
  - closest-side
  - closest-corner
- farthest
  - farthest-side
  - farthest-corner

```css
tag { background: radial-gradient(30% 40%, circle farthest-corner, white, green 20%, yellow); }

//시작위치의 20% 에서 green 색상이 적용된다.
```

#Quiz

> 선형 (linear) deg

> to

> 원형 (radial) 

>ellipse

---

#boxmodel

<p> 태그를 사용한 텍스트는 단락형태를 가진다. 즉 텍스트 단락 앞뒤에 빈 줄이 생기고 텍스트 단락이 하나의 박스 형태를 가진다. 스타일시트에서는 이렇게 박스 형태를 가지는 요소를 '박스 모델 요소' 라고 한다.

박스모델은 텍스트나 이미지 등이 표시되는, 실제 콘텐츠 영역 박스와 콘텐츠 영역 사이의 여백인 `패딩(padding)`, 박스의 `테두리(border)` 그리고 여러 박스 모델간의 여백인 `마진(margin)` 등의 요소로 구성되어있다.



> `width` `height` 박스 모델 크기 지정

- 크기값 px, cm (브라우저 창의 너비를 조절해도 너비가 변하지 않는다.)
- % 박스 모델을 포함하고 있는 부모 요소를 기준으로 너비와 높이 값을 %로 지정한다.
- auto 박스 모델의 너비와 높이 값이 콘텐츠 양에 따라 자동으로 결정된다 (default)



> `margin`

- 입력값 4개 일 때 { margin: top right bottom left ; } 
- 입력값 3개 일 때 { margin: top right-left bottom; }
- 입력값 2개 일 때 { margin: top-bottom right-left ; } 
- top > right > bottom > left
- 크기값
- %
- auto

> `padding`

> `border`

- border-width
  - 크기값
  - Keyword : thin medium(default) thick
- border-color 
  - top > right > bottom > left
  - 색상 값
  - Transparent (default) : 투명하게 나타낸다.
- border-style 
  - `none` 과 `hidden` 의 차이는 무엇인가?
  - dotted
  - dashed
  - soild
  - double
  - groove 음각
  - ridge 양각
  - inset ?
  - outset ?

`border-collapse:seperate` 은 무엇인가?

`border-collapse:collapse` 은 무엇인가?

- border

  - Top > right > bottom > left

  - ```css
     { Border: width color style; }
     ```
    ```

    ```

- border-radius

  - 크기값 px em
  - % 반지름의 크기
  - top-left > top-right > bottom-left > bottom-right

- border-(top|bottom)-(left|right)-radius

- `border-radius: 가로값/세로값` '/'로 가로값, 세로값을 구분한다.

> box-shadow: 수평거리 값|수직거리 값|blur|확장거리|그림자색상|inset

- 수평거리 값, 수직거리 값 : 필수값
- blur (default: 0)
  - '0' 진한 그림자를 표시한다.  
  - 값이 클수록 커질수록 부드러운 그림자을 표시한다.
- 확장거리 (default 0)
  - 그림자가 얼마나 번지는 지를 나타낸다.
  - '+' 는 그림자가 확대되고 '-' 는 그림자가 축소된다.
- color (default:black)
  - rgb, hex-color
- inset
  - 'inset' 사용시 박스 안쪽에 그림자를 표시한다.

---

#block-level-element

혼자서 한 줄을 차지하는 요소이다. 따라서 해당 요소의 왼쪽이나 오른쪽에 다른 요소가 올 수 없다.

- Ex)<div><p><ul><ol><h$><blockquote><from><hr><table><fieldset><address>

<blockquote> 는 감싸진 텍스트가 긴 인용문임을 가리킨다. 일반적으로 이것은 들여쓰기로 렌더링 된다.

#inline-level-element

반면 , 줄을 차지않는 요소이다. 즉 화면에 표시되는 콘텐츠만큼만 영역을 차지하고, 그 외의 공간에는 다른 요소가 와도 상관없다.

- Ex)<img> <strong> <br><object> <sub> <sup> <span> <input> <textarea> <label> <button>

> display: 해당 요소가 화면에 어떻게 보여질 것인지 지정하는 것이다.

- block
- inline
- Inline-block 블록레벨 박스지만, 인라인 레벨 박스처럼 배치한다.
- none 박스를 만들지 않으며 시각적으로 표시하지 않는다.
- inherit 상위 요소의 `display` 속성을 상속한다.
- table 블록 레벨의 표로 만든다.
- inline-table 인라인 레벨의 표를 만든다.



- table-row
- table-row-group
- table-header-group
- table-footer-group
- table-columm
- table-columm-group
- table-cell
- table-caption


- list-item 목록의 항목을 표시할 수 있도록 기본적인 블록 박스와 표시자 박스를 만든다. (html li에 해당한다.)

> Position 웹 문서 안의 요소들을 자유자재로 배치해 주는 속성이기 때문이다.

- static 요소를 문서의 흐름에 맞춰 배치한다.
- relative 이전 요소에 자연스럽게 연결해서 배치한다.
- absolute 원하는 위치를 지정하여 배치한다.
  - 부모 요소를 기준으로 위치를 지정하여 배치한다.
  - 부모 요소가 없을 때, 브라우저의 왼쪽 최상단을 기준으로 위치를 지정하여 배치한다.
- fixed 지정한 위치에 고정해서 배치한다. 요소가 화면에서 잘릴 수도 있다
  - 'absolute'의 위치에 고정된다.

> Z-index 

- 생성시 값은 `z-index: 1` 이고, 그 이후에 삽입하는 요소들은 값이 점점 증가한다.
- 값이 작을 수록 z축 상에서 뒤에 값이 클수록 z 축 상 앞에 위치한다.

> float

- `float` 는 문서의 레이아웃을 조절하려고 할 때 많이 사용한다. 이때 요소가 떠 있으려면 위치가 고정되면 안되기 때문에 position: absolute 를 사용하면 안된다.

- left
- right
- none (default)

> Clear 

- left
- right


- both left right 양쪽에 떠 있지 않도록 한다.
- none (default)

> Visibility

- visible (default) 요소를 화면에 표시한다.
- hidden 요소가 화면에서 감춰진다. 하지만 크기는 유지되기 때문에 배치에 영향을 준다
- collapse 표의 행이나 열, 행 그룹, 열 그룹 등에서 지정하면 서로 겹치도록 조절한다.
- inherit

---

> Cloumn-width 단의 너비 지정하기

- 한 화면을 여러개의 단(column)으로 구성할 때, 단의 너비를 고정해 놓고 화면을 분할할 수 있습니다. 화면 크기에 따라 단의 개수가 유동적이다.
- 값 : 단 너비를 직접 지정한다. 
- auto : 단의 개수를 column-count 같은 속성을 이용해 단의 너비를 결정한다.

> Column-count

- 화면에, 단의 개수를 정해놓고 화면을 분할한다. 단의 개수가 고정적적이다.


- 개수 0보다 큰 값으로, 단의 개수를 지정한다.
- auto 단의 너비같은 다른 속성으로 단의 개수를 정한다.

```css
tag{
  column: auto 3
}
//column-width : auto, column-count : 3
```

> Column-gap 단과 단 사이 여백 지정하기

- 값 단과 단 사이의 여백을 숫자로 표시한다.
- normal  자동으로 여백을 지정한다. (W3C 권장은 1em)

> Column-rule {width style color}

- Column-rule-width
- Column-rule-style
  - thin
  - medium
  - thick
  - 크기값 (px em )
- Column-rule-color 
  - none
  - hidden
  - dotted
  - dashed
  - solid
  - double
  - groove
  - ridge
  - inset
  - outset

> 다단(Column) 위치 지정하기

웹 문서의 경우 문서 전체에서 내비게이션이나 사이드바, 푸터 등의 영역은 제외하고 대부분 실제 콘텐츠 부분만 다단으로 구성한다.

- Break-before : column 특정 요소 앞부분에서 단을 나눌 때
  - Break-before : avoid-column 특정 요소 앞부분에서 단을 나눌 때
- Break-after : column 특정 요소 뒷부분에서 단을 나눌 때
  - Break-before : avoid-column 특정 요소 뒷부분에서 단을 나눌 때
- Break-inside : avoid-column 해당 요소 안에서 강제로 단을 나누지 않도록 할 때
- Break-inside : column 해당 요소 안에서 강제를 나누도록 할 때

> Column-span 여러 단을 하나로 합치기

- 여러 개로 나누어진 단의 흐름을 따라서 단을 합쳐서 내용을 표시해야 할 때
- 1 : 하나로 합치는 것으로, 합치지 않는 다는 의미이다. (default)
- all : 전체 단을 하나로 합쳐서 표현한다. (단의 일부만 합칠 수 없다.)

---

> Table-layout 

- fixed 셀 너비를 고정한다.
- auto (default) 셀 내부의 콘텐츠의 길이에 따라 너비가 달라진다. 
- inherit 

> Word-break : break-all

> Text-align

- left
- right
- center (<th> 태그를 사용한 제목셀은 'text-align:center' 가 'default' 이다.)
- justify

> Vertical-align

- baseline
  - 셀 박스의 baseline이 첫 번째 행을 확장한 baseline과 같은 높이로 배치된다.
- top
  - top 셀 박스의 top 부분이 첫 번째 행을 확장한 top에 맞춰 배치된다.
- bottom 
  - 셀 박스의 bottom 부분이 마지막 행을 확장한 bottom에 맞춰 정렬된다.
- middle
  - 셀의 center 부분이 확장한 핻을의 중앙에 맞춰 정렬된다.
- Sub,super, text-top, text-bottom, 길이값, % 
  - 이 값들은 셀에 적용되지 않는다. 셀에서 이 값들은 baseline로 대체된다.

> Border-collapse 속성

- 표에 테두리를 그리기 위해 <table> 태그와 <td> 태그에서 border 속성을 사용하면 표 전체의 바깥 테두리와 각 셀의 테두리가 모두 화면에 표시되어 두 줄의 테두리가 그려진 것 처럼 보인다. 

- collapse

  - 테두리가 통합된다.

- separate (default)

  - 테두리가 분리된다 

    > Border-spacing

    - border-collapse를 사용하여 셀들을 분리했을 때 인접한 셀 테두리 사이의 거리를 지정한다.
    - 크기값
    - inherit
    - Border-spacing: (1) (2); 
      - 값 하나를 지정하면 수평거리와 수직거리를 한번에 지정한 것이다.
      - 값 두개를 지정하면 첫번째 값은 수평거리 두번째 값은 수직거리이다.

    > Empty-cells 빈셀의 표시 여부 지정하기

    - show (defaut) 빈 셀을 표시한다.
    - hide  빈 셀의 테두리를 그리지 않는다.
    - inherit

- inherit

> caption-side 

- top
  - 캡션을 표의 윗부분에 표시한다.
- bottom
  - 캡션을 표의 아랫부분에 표시한다.

> transform

- translate(tx ty)
- translate3d(tx ty tz)
  - 지정한 크기 만큼 수평 수직 (앞뒤)로 이동한다.
- scale(sx sy)
- scale 3d(sx sy sz)
  - 지정한 크기만큼 수평 수직 앞뒤로 확대 및 축소한다.
- rotate(rx ry deg)
  - 주어진 각도 만큼 2차원 회전을 한다.
- rotate3d(rx ry rz deg)
  - 지정한 각도만큼 수평 수직 앞뒤로 회전한다.
  - 방향 벡터와 방향이 같은 직선을 기준으로 주어진 각도만큼 회전한다.
- skew(x deg, y deg)
  - 지정한 각도만큼 수평 수직으로 왜곡한다.
  - x : 우상단 -deg ,좌하단 +deg
  - y: 우상단 -deg, 좌하단 +deg
  - z: 좌상단 z축 왜곡, 우하단 z축 왜곡



> 벡터란 무엇인가?
>
> 벤터란 크기와 방향을 나타낼 수 있는 물리량을 말한다. 예를 들어 '가속도'는 크기와 방향을 모두 가지고 있는 벡터입니다. 벡터중에서 방향을 가리키는 벡터를 '방향벡터'라고 합니다.

---

> Transform-origin 변형 원점설정

- x축 
  - 길이값
  - %
  - left
  - center
  - right
- y축
  - 크기값
  - %
  - top
  - center
  - bottom
- z축
  - 크기값

```css
tag {transform-origin: x축 y축 z축;}
```

> perspective 원근감 표현하기

- 크기 px
- none (default) perspective를 지정하지 않는다. 

> perspective-origin

- x축 
  - 길이값
  - %
  - left
  - right
  - center
  - top
  - bottom
- y축
  - 크기값
  - %
  - top
  - center
  - bottom

> transform-style

- flat 하위 요소를 평면으로 처리한다.
- perspective-3d 하위 요소들에 3d 효과를 적용한다.

> backface-visibility 요소의 뒷면 표시하기

- visible 뒷면을 표시한다.


- hidden 뒷면을 표시하지 않는다.

> 접두사(prefix)

---

> Transition 

- {transition: property | duration | timing-function | delay }
  - property 트랜지션이 적용될 css 속성의 이름
  - duration 트랜지션 실행시간
  - timing-function 트랜지션 효과의 곡선형태
  - delay 트랜지션 지연시간 


- 한 스타일에서 다른 스타일로 바뀌는 것을 의미한다.
- 바뀌는 시간을 조절함으로써 애니메이션 효과를 낼 수 있다.

> Transition-property 적용할 트랜지션 지정하기

- none 트렌지션 동안 아무 속성되 바뀌지 않는다.


- all (default) 요소의 모든 속성이 트랜지션의 대상이 된다. 


- property name 트렌지션 효과를 적용할 속성 이름을 지정한다.

> transition-duration 트랜지션 진행시간 지정하기

- Transition-duration: 0s(default)
- 시간 단위는 초(seconds) 또는 밀리초(milliseconds)이다.

> Transition-timing-function 트랜지션 형태 선택하기

- 트랜지션 효과의 시작과 중간, 그리고 끝에서의 속도 곡선을 선택한다.
- linear 시작에서 끝까지 똑같은 속도로 트랜지션을 진행한다.
- ease (default) 처음에는 천천히 시작해서 점차 빨라지다가 마지막엔 천천히 종료된다.
- ease-in 트랜지션 시작을 느리게 한다.
- ease-out 트랜지션을 느리게 종료한다.
- ease-in-out 느리게 시작하고 느리게 종료한다.
- cubic-bezrier(n, n, n, n, n) 직접 베지에 함수를 정의해서 사용한다. 
  - n에 사용 할수 있는 값은 0~1 사이 값입니다.

> transition-delay 지연시간 설정하기

- Transition-delay: 0s(default)
- 시간 단위는 초(seconds) 또는 밀리초(milliseconds)이다.

---

> animation

- {animation: name | duration | timing-function | delay | iteration-count | direction}
- ​

> animation-duration (default: 0s)

- 애니메이션을 얼마 동안 재생할 것인지를 설정한다. 필수값으로 설정하지 않으면 기본값이 0s로 애니메이션 효과를 볼 수 없다.
- 초(s) 밀리초(ms)

> animation-name

> @keyframes란 무엇인가?

- @keyframes을 이용해 애니메이션을 정의 할 때, 시작과 끝을 설정해야 한다.

- ```
  @keyframes case1{
    0%{ left:10px; }
    100%{ right:500px; } 
  }

  @keyframes case2{
    from{ left:10px; }
    to{ right:500px; } 
  }
  ```

> animation-iteration-count 반복횟수 지정하기

- Ex)animation-iteration-count:infinite; 
  - 반복횟수 무제한
- 숫자나 'infinite keyword' 를 사용한다.

> animation-direction 애니메이션 실행방향을 지정한다.

- 애니메이션 반대 방향으로 실행
- normal (default)
- alternate 역방향으로 실행

---

> @media 

- `Media query` 구문은 대 소문자를 구분하지 않는다.


- 기본으로 미디어 유형이 지정되어야 하고 필요한 경우 and 연산자로 조건을 적용한다.

```css
media screen and (min-width: 200px) and (max-width: 360px) {
  
}
```

> 미디어 유형의 종류

- `Media query`는 미디어별로 적용할 css를 따로 작성하는 것이기 때문에
  - @media 속성 다음에 미디어 유형을 지정해야 한다.


- all 모든 미디어 유형
- print 인쇄 장치
- screen 컴퓨터 스크린
- tv 음성과 영상이 동시에 출력되는 tv
- aural 음성합성 장치
- braille 점자 표시 장치
- handheld 패드처럼 손에 들고 다니는 장치
- projection 프로젝터
- tty 디스플레이 기능이 제한된 장치(px 단위를 사용 할 수 없다.)
- embossed 점자 프린트

> `Media query`에서 사용하는 조건 
> viewport 너비와 높이

- 웹 문서 내용이 화면에 보여지는 영역을 'viewport' 라고 하는데, 뷰포트의 너비와 높이를 조건으로 미디어 쿼리를 지정 할 수 있다.


- width height
- min-width 최소 너비
- max-width 최대 너비
- min-height 최소 높이
- max-height 최대 높이

```css
@midea all (min-width:600px) and (max-width:959px) {
...
} //viewport 너비 600이상 높이 959 이하에서 실행된다.
```

> `Media query`에서 사용하는 조건 
> 단말기의 너비와 높이

- device-width device-height
- device-min-width 단말기 최소 너비
- device-max-width 단말기 최대 너비
- device-min-height 단말기 최소 높이
- device-max-height 단말기 최대 높이

> 화면 회전속성

- orientation
  - landscape (default) (풍경화; 세로보다 가로가 넓다)
  - portrait (초상화; 가로보다 세로가 넓다) 

> 화면비율

- 브라우져 화면 너비값을 높이 값으로 나눈 것으로 숫자값을 사용하거나, 계산식을 사용 할 수 있다.


- aspect-ratio 화면 비율(width/height)
- min-aspect-ratio 최소 화면 비율
- max-aspect-ratio 최대 화면 비율

> 단말기의 물리적 화면 비율

- device-aspect-ratio
- min-device-aspect-ratio
- max-device-aspect-ratio

> 색상당 비트수 

- color
- Min-color
- Max-color

---

```css
<link herf="css 파일 경로" rel="stylesheet" type="text/css" media="미디어 쿼리조건">

각 조건별로 스타일시트 파일을 따로 저장하고, <link> 태그나 @import 문을 사용해서 미디어 유형에 따라 css 파일을 가져와 연결한다.
  
  
@import url(css파일 경로) 미디어 쿼리조건
@import url("css/tablet.css") screen and (min-width:321px) and (max-width:768px);
```

```css
<meta name="viewport" content="width=device-width">
//뷰포트의 너비를 디바이스 너비로 지정하기
```

> viewport

- width device-height 뷰포트의 너비지정
- height device-height 뷰포트의 높이지정
- initial-scale (default: 1) 초기 배율
- User-scaleable (default: yes) 사용자가 페이지를 확대 및 축소 할 수 있는지를 결정 (User-scaleable: "yes" User-scaleable: "no")
- Minimum-scale (default: 0.25) 사용자가 축소 할 수 있는 최소값
- Maximum-scale (default: 5.0) 사용자가 확대 할 수 있는 최대값 

---

```css
img {
  max-width: 100%
}
```

반응형웹

Media query

all print screen

width height

Device-width

Device-height

? landscape

Viewport 뷰포트

width device-width

Initial-scale

유동형 레이아웃

100%

---

