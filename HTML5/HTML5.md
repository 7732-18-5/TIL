> Tim Berners-Lee 1989 HTML 

> Tim Berners-Lee  1994 W3C 발족

> W3C 1995 HTML 2

> W3C 1997 HTML 3.2

> W3C 1997.12 HTML 4.0

> W3C 1999 HTML 4.01

> W3C 2000 XHTML1 

> Browser Ent  2004 WHATWG 발족

- Browser Ent : mozilla chrome apple  opera 

> W3C 2007 `HTML Working Group` 발족

> W3C 2014.10.28 `HTML5 표준안 확정`



> `FTP(File Transfer Protocol)` 

> 추천검색어 `HTML Entitiy Table`

> `BOM(Byte Order Mark)`



> ?

- `<html lang="ko">` `<meta charset="utf-8">`
  - 위 둘의 차이는 무엇인가? (언어지정과 문자인코딩의 차이는 무엇인가?)
  - `Lang (attribute)` 를 사용하지 않았을 때 default 이 있는가? (무엇인가?)

> Comment

- <!— —>
- /* */

---

> HTML Semantic Tag

- &lt;header&gt;
  - 머리말, 사이트 전체의 제목이 될 수도 있고, &lt;article&gt; 의 제목부분이 될 수도 있다.
  - &lt;header&gt; 내부에 &lt;form&gt; &lt;nav&gt; 를 사용해 사이트 메뉴를 넣을 수 있다
- &lt;nav&gt;
  - 네비게이션 :  메뉴부분으로 사용된다.
  - &lt;Header&gt; &lt;footer&gt; &lt;aside&gt; 태그 안에 포함해서 사용할 수 있다. 독립해서 사용 할 수 있다.
- &lt;iframe src=""&gt;&lt;/iframe&gt;
  - 웹 문서 안에 다른 웹문서를 가져와 표시하는 인라인 프레임을 삽입하는 태그이다.
- &lt;section&gt;
  - <section> 태그 안에 <section> 태그를 넣을 수도 있고, <article> 태그를 넣을 수도 있다.
  - <section>를 사용해 <header> <footer> 와 콘텐츠 영역을 구분 짓는 용도로 사용한다.
  - 실제 콘텐츠 내용은 <article> 태그를 이용해서 표시한다.
- &lt;article&gt; 
  - <section> 와 <article>을 혼동해서 사용하는데, 독립적으로 배포하거나 재사용하더라도 완전히 하나의 콘텐츠가 된다면 <article> 태그를 사용하면 된다.
- &lt;asidef&gt;
  - 본문 내용 외에 주변에 표시되는 기타 내용들을 표시한다.
- &lt;footer&gt;
  - <footer> 태그 안에 <header> 태그를 비롯하여 <section> , <article> 등 다양한 레이아웃 태그들을 모두 사용할 수 있다.
- &lt;address&gt; 
  - <address> 는 주로 <footer> 태그안에서 사용된다.
  - 이름, 주소, 연락처 등의 정보를 넣기위해 사용된다.
  - E-mail은 <p> 태그를 사용해서 표시한다.
- &lt;div&gt;
  - HTML5에서 주로 콘텐츠를 묶어 CSS 를 적용하려고 할 때 사용한다. 

> Vscode

| 단축키                        | 기능                                       |
| -------------------------- | ---------------------------------------- |
| F1, Ctrl+Shift+P           | 명령 표시 및 실행                               |
| Ctrl+/, Ctrl+K+C, Ctrl+K+U | 주석달기 토글                                  |
| Ctrl+Space                 | 코드 제안 표시                                 |
| Ctrl+Tab                   | 현재 열린 에디터 화면간 전환                         |
| Ctrl+Shift+L, Ctrl+F2      | 현재 문서에서 현재 선택한 단어와 동일한 단어 동시에 편집         |
| Ctrl+D                     | 현재 문서에서 현재 선택한 단어와 동일한 바로 다음 단어 동시에 편집   |
| Ctrl+K+T                   | 테마 선택창 열기                                |
| Ctrl+Shift+F               | 현재 프로젝트 전체 파일에서 검색                       |
| Ctrl+Shift+H               | 현재 프로젝트 전체 파일에서 바꾸기                      |
| Ctrl+Shift+V               | 현재 에디터 우측에 Preview 창 열기                  |
| Ctrl+`                     | 터미널 열기/닫기 토글                             |
| Ctrl+]                     | 들여쓰기                                     |
| Ctrl+[                     | 내어쓰기                                     |
| Ctrl+Alt+↑, Ctrl+Alt+↓     | 위 혹은 아랫쪽으로 복수 개의 캐럿 만들기(여러 줄을 한번에 편집할 때 사용) |
| Ctrl+F                     | 검색                                       |
| Ctrl+H                     | 바꾸기                                      |
| Ctrl+Alt+Enter             | 바꾸기 창에서 바꿀 검색어 입력한 후 이 단축키를 누르면 모두 바꾸기가 실행됨. |
| Alt+↑, Alt+↓               | 단축키를 누르면 해당 줄 전체를 위 혹은 아랫 줄로 이동함.        |

> Browser Engine

Browser는 자신이 인식하지 못하는 태그를 inline level 태그로 취급한다.하지만 <header> <article> <footer> 같은 태그들은 block level 태그로, 영역이 있어야 위치를 옮길 수 있다. 그래서 호환성 문제가 있을 때 아래와 같은 소스코드를 이용해서 강제로 block level tag로 설정해야한다.

```css
header, section, nav, article, footer {
	display:block;
}
```

> Block level 의 종류 숙지
>
> Inline level 의 종류 숙지

> 텍스트를 묶어서 처리하는 태그들

> <p> 구(phrase) 
>
> <blockquote> 인용문 넣기
>
> <pre>
>
> - 접근성을 생각하고 사용하도록 한다.  스크린리더(screen reader) 가 접근하지 않고 건너뛴다. 따라서 내용을 알 수 있도록 텍스트를 추가하는 것이 좋다.

> 다양한 텍스트 관련 태그들

> <mark>  형광펜 효과
>
> <time datetime="YYYY-MM-DDThh:mm:ssZ">
>
> - <time>태그나 datetime 속성을 사용한다고 해서 날짜나 시간이 자동으로 표시되는 것은 아니다. 다만 날짜나 시간 정보를 브라우져가 인식하게 하여 웹 표준 문서를 만드는데 도움이 된다.
> - <strong>
>   - 강조를 위해 볼드체로 표시할 때 사용한다.
> - <em>
>   - 강조를 위해 이탤릭체로 표시할 때 사용한다.
> - <b>
>   - 뜻 없이 볼드체로 표시할 때 사용하다.
> - <i>
>   - 뜻 없이 이탤릭체로 표시할 때 사용한다.
> - <q> 인용한 내용을 표시한다.
>   - <q> 태그를 사용하면 브라우저에서 자동으로 따옴표("")를 붙인다.
>   - 인용문을 사용할 때 <blockquote>를 사용할 수 있는데, `block level tag` 이라서 인용된 내용은 줄 바꿈이 되고 다른 내용과 구별되도록 안에 들여써집니다. 그에 반해 <q> 는  `inline level tag` 로 줄바꿈 없이 다른 내용과 구별되도록 안으로 들여써집니다. 따라서 인용된 내용이 구분되도록 인용내용에 따옴표를 붙여서 표시한다.
>   - 특정 웹페이지를 인용했을 경우 cite 속성을 이용해 URL을 표시할 수 있다. (해당 사이트로 링크가 되는 것은 아니다. 시맨틱 태그의 로서, 인용할 때 출처를 남기는 것이 정보공유의 원칙이기 때문에 해당 속성이 추가되었다.)
> - <ruby> `_<rt>~</rt>_<rt>~</rt>_<rt>~</rt>` </ruby>
>   - 일본어의 발음을 '히라가나'를 표시하는 방법으로 주석으로 표시할 부분을 <rt>로 감싼다.
> - <span>
>   - 태그 자체로는 아무런 의미가 없다.
>   - 텍스트 단락 안에서 줄바꿈 없이 일부 텍스트 만을 묶어서 스타일을 적용하려고 할 때 주로 사용한다.
> - <kbd> 사용자 입력내용을 표시하는 태그
> - <code> 소스 태그를 표시하는 태그
> - <samp> 프로그램 처리 결과를 표시하는 태그
> - <sup> 수식의 위 첨자를 표시하는 태그
> - <sub> 수식의 아래 첨자를 표시하는 태그
> - <s> 취소선
>

> 목록을 만드는 태그들 
>
> - <ul>
> - <ol>
>   - <ol type="" start"" reversed""> 사용 할 수 있다.
>     - Type 1(default), a(소문자), A(대문자), i(로마숫자 소문자), I(로마숫자 대문자)
> - <li>
>   - 불릿 기호는 CSS list-style-type 를 이용해서 수정한다.
> - <dl> 
>   - <dt> 제목 지정
>   - <dd> 설명(내용) 지정
>
> 표 관련 태그들
>
> - <table> 
>   - 웹 문서 구조를 표로 만드는 것은 내용과 디자인을 분리할 수 없기 때문에 바람직 하지않다.
>   - 표를 만들기 위해서 가장 먼저 사용하는 태그
>   - <tr> 행을 추가한다.
>   - <td>셀을 추가한다.
>   - <th>제목이 들어갈 셀을 추가한다.
>     - 행/열 병합
>     - <td rowspan="합칠 행의 개수"> 
>     - <td colspan="합칠 열의 개수">
>     - <th rowspan="합칠 행의 개수">
>     - <th colspan="합칠 열의 개수">
> - <table>
>   - <caption> 표의 제목
>   - <table summary> 표의 요약내용
>     - <table> 태그에 caption 태그, summary 속성 둘중 하나는 반드시 사용해야된다.
> - <col> <colgroup>
>   - 전체 열의 갯수와 일치해야한다.
>   - `<table> <caption>` 이후에 `<col>` `<colgroup>` 을 사용한다.
> - <thead> <tfooter> <tbody>
>   - `<table> <caption>` `<col>` `<colgroup>` 이후에 사용한다.
>   - `<thead> <tfooter> <tbody>` 순서로 사용하도록 한다.
>
> 하이퍼링크
>
> - <a>
>
>   - <a href="경로" target="_blank" title="툴팁">
>     - _blank 새탭
>   - <a name="앵커이름">
>   - <a href="#앵커이름">
>     -  한페이지 안에서 지정한 위치로 이동 할 수 있는 앵커

> dl dt dd 을 구분하고 설명하라

> tr td th 을 구분하고 설명하라

---

> - &lt;img src="경로" alt="설명" title="툴팁" usemap="">
>   - 경로는 웹 페이지 문서파일을 기준으로 결정된다.
>     - 동일한 폴더에 위치할 때 `"sample.png"`
>     - 하위 폴더 "image" 에 위치할 때 `"/image/sample.png"`
>   - `Inline level tag`  
> - &lt;figure&gt;
>   - 캡션 대상지정하기
> - &lt;figcaption&gt; 
>   - 캡션 설명 붙이기
>   - <figure> 태그에 <figcaption> 태그를 반드시 사용해야 하는 것은 아닙니다. 캡션을 표시하지 않더라도 <figure> 태그를 사용하는 것은 그 부분에 이미지, 다이어그램, 비디오 같은 것들이 있다는 사실을 브라우져에게 알리기 위한 것이다. 단지 이미지를 묶어서 표시하고 싶다면 <div>를 사용하면 된다.

> 멀티미디어 재생
>
> - <embed src="경로" [width="" height=""]> 
>   - html4
>
>
> - <object [width="" height=""]> 
>
>   - <param name="패러미터 이름" value ="값" > 
>   - html4
>
> -  &lt;video src="경로" &lsqb;속성&rsqb;[속성="속성값"]&gt;
>
>   - html5
>   - <video scr="" width="" height="" controls>
>
> - &lt;audio  src="경로" &lsqb;속성&rsqb;&lsqb;속성="속성값"&rsqb;&gt; 
>
>   - controls	 재생을 제어하는 속성
>
>     ​
>
>   - preload (속성) 재생하기 전 오디오파일을 모두 다운로드할 것인지 일부 정보만 다운로드 할 것인지 여부를 묻는다.
>
>     - preload="none" 재생버튼을 눌르면 다운로드
>     - preload="metadata" 메타 정보만 다운로드
>     - preload="auto" 페이지가 열리면 즉시 다운로드한다.
>     - preload="autoplay" 자동실행
>       - 모바일 기기에서는 자동 실행되지 않는다.
>       - HTML5에서는 자동 재생을 사용하지 않기를 권장한다.
>     - Loop 
>       - 미디어 파일 재생이 끝났을 때, 처음부터 다시 재생한다.
>
> - <source src="경로" type="파일의 형식" 

---

>- &lt;form&gt; 여러 폼 요소 &lt;/form&gt;
>  - 폼 전체를 감싸는 태그
>  - `<form action=`"폼을 전송할 서버 스크립트 지정" `name=`"한 문서에 여럿의 폼이 있을 경우를 대비하여, 폼을 식별하기 위한 이름" `method=`"폼을 전송할 방식을 선택하는 속성으로 get과 post가 있다. " `taget:`"action 에서 지정한 스크립트 파일이 현재의 창이 아닌 다른 위치에서 열리도록 지정"
>- &lt;fieldset&gt; &lt;legend&gt; 필드세트제목 &lt;/legend&gt; &lt;/fieldset&gt; 
>  - 폼 요소를 그룹으로 묶고 제목을 붙이는 태그
>- &lt;label&gt;
>  - 폼 요소에 캡션을 붙이는 태그, 폼 요소와 캡션으로 사용하는 텍스트가 짝을 이루고 있다. 따라서 폼 요소의 위치가 바뀌더라도 캡션이 항상 따라다니게 된다.
>
>  - Ex1)<label>아이디(6자 이상)<input type="text" id="id"></label>
>
>  - Ex2)<label for="user_id">아이디(6자 이상)</label>
>
>    <input="text" id="user_id">
>
>    - label과 form 요소를 따로 사용하더라도 for와 id로 연결 할 수 있다.
>
>  - Ex3)<label><input type="radio" name="spk" id="spk value="low" checked>영어회화(초급)</label>
>
>    - 텍스트를 눌러도 버튼이 선택된다.
>
>  - Ex4)<input type="checkbox" name="pre" id="pre"  value="grammar">문법
>
>    - <label> 태그를 사용하지 않아, 텍스트를 눌러도 버튼이 선택되지 않는다.

>웹에서 폼은 항상 일정한 형태를 가지고 있다. 사용자가 내용을 입력하거나 어떤 항목을 선택하기 위한 것이기 때문에, 폼의 내용은 크게 사용자 입력부분과 입력한 내용을 서버로 보내주는 버튼 부분으로 나눌 수 있다.

>- &lt;input&gt;
>  - 사용자가 입력할 수 있도록 여러 요소를 삽입하는 태그
>  - 사용자가 입력 할 내용이 어떤 정보인지는 <input> 태그의 type 속성을 통해서 지정 할 수 있다.
>  - Ex1)<input type="text">
>    - 텍스트 상자
>  - Ex2)<input type="radio">
>    - 라디오버튼
>  - Ex3)<input type="sumbut" value="가입하기">
>    - 서버 전송버튼
>
>- &lt;input type=""&gt; 
>
>  - hiddent 사용자에게 보이지 않지만 서버로 전송되는 값을 가지는 필드
>    - 사용자에게 보이지 않지만, 사용자가 입력을 마치고 폼을 서버에 전송할 때 함께 서버에 전송되는 요소이다. (가입날짜, 가입 경로 등)
>    - <input type="hidden" name="emailchk" value="N">
>  - text 텍스트 상자
>    - 주로 아이디, 이름, 주소 등 텍스트를 입력 할 때 사용한다.
>    - name 텍스트 필드를 구별할 수 있도록 붙이는 이름
>    - size 텍스트 필드의 길이
>    - value 텍스트 필드에 표시될 내용이다. 이 속성을 사용하지 않으면 빈 텍스트 필드가 표시된다.
>    - maxlength 텍스트 필드에 입력할 수 있는 최대 문자 개수를 지정한다.
>  - password 비밀번호 입력 필드
>    - 텍스트 필드와 거의 유사하다. 사용자가 입력하는 내용이 "*"로 표시된다.
>    - Value 속성이 없다는 점을 제외하면 동일하다
>  - search 검색 상자
>    - html5 이전에는 텍스트 필드를 이용해서 표시했다.
>  - tel 전화번호 입력 필드
>    - html5에서 추가되었다.
>  - url 주소 입력 필드
>    - html5 이전에는 아이디 이름 전화번호 이메일 등은 모두 텍스트 필드를 이용해서 입력했지만, html5 부터는 각 정보에 맞게 텍스트 필드 요소가 분화되었다.
>  - email 이메일 입력 필드
>    - html5 이전에는 텍스트 필드를 사용해 사용자가 입력하면 자바스크립트를 이용해 @ 라는 문자가 들어가 있는지 확인했다.
>    - 하지만 html5에서는 <input type="email">을 사용하면, 사용자가 입력한 내용이 이메일 주소 형식에 맞는지 자동으로 체크한다.
>  - number 숫자를 조절 할 수 있는 화살표
>    - min 최소값 
>    - max 최대값
>    - step 짝수나 홀수등 특정 숫자로 제한하려고 할 때 숫자의 간격을 지정 할 수 있다. 기본값은 1이고 생략가능하다.
>    - value 필드에 표시할 초기값
>  - range 숫자를 조절 할 수 있는 슬라이드 막대
>    - min 최소값 (default 0)
>    - max 최대값 (default 0)
>    - step 짝수나 홀수등 특정 숫자로 제한하려고 할 때 숫자의 간격을 지정 할 수 있다. (default 1, 생략가능)
>    - value 필드에 표시할 초기값
>  - color 색상표
>  - checkbox 
>    - 여러 항목 중 원하는 항목을 선택 할 수 있는 체크박스 (두개 이상도 선택 할 수 있다.)
>    - name 체크박스가 여러 개 있을 때 구분 하기 위해 사용한다. 관련 항목이라고 하더라도 라디오 버튼처럼 반드시 그룹으로 묶어주지 않아도 된다.
>    - value 라디오 버튼을 선택했을 때 그 항목이 선택되었다고 서버에 전달하기 위해서 value를 통하여 서버에 전송할 값을 지정한다. 이값은 숫자 혹은 영문이여야한다. 필수 속성이다.
>    - checked 라디오 버튼은 항목들은 처음에 항목들이 선택되지 않은 상태로 표시되는데, 'checked'를 사용하면 처음에 선택된 상태로 표시된다.
>  - radio 
>    - 여러 항목 중 한가지를 선택 할 때 사용하는 버튼이다. 이미 선택된 항목이 있을 경우 다른 항목을 선택하면 기존에 선택한 항목은 취소된다.
>    - name 라디오 버튼이 여러 개 있을 때 구분하기 위해 사용한다. 라디오 버튼은 여러개중에서 한가지만 선택하는 것이기 때문에 관련있는 것은 name 속성 값을 똑같이 지정한다.
>    - value 라디오 버튼을 선택했을 때 그 항목이 선택되었다고 서버에 전달하기 위해서 value를 통하여 서버에 전송할 값을 지정한다. 이값은 숫자 혹은 영문이여야한다. 필수 속성이다.
>    - checked 라디오 버튼은 항목들은 처음에 항목들이 선택되지 않은 상태로 표시되는데, 'checked'를 사용하면 처음에 선택된 상태로 표시된다.
>  - datatime 국제표준시(UTC) 로 설정된 날짜와 시간(연/월/일/시/분/초/분할초)
>  - datatime-local 사용자가 있는 지역을 기준으로 날짜와 시간(연/월/일/시/분/초/분할초)
>  - data 날짜(연/월/일)
>  - month (연/월)
>  - week (연/주)
>  - time 시간 (시/분/초/분할초)
>
>  ​
>
>  - file 파일첨부 가능한 버튼
>  - sumbit 서버전송버튼
>    - <input type="submit" value="버튼명">
>  - image 'submit' 대신 사용할 이미지
>  - reset 초기화버튼
>    - <input type="reset" value="다시입력">
>  - button 버튼
>    - <input type="button" value="버튼명" oneclick="실행 할 함수">
>    - 폼 안에 버튼을 생성한다. submit, reset 같은 자체 기능을 가지고 있지 않고 버튼을 생성하기 때문에 스크립트 함수를 연결해서 사용한다.
>
>- &lt;input&gt;
>
>  - <input readonly> 입력 및 수정 삭제 불가능 
>  - <input placeholder=""> 힌트 표시하기| 요소의 필드 안에 적당한 힌트 내용을 표시하고 있다가 그 필드를 클릭하면 내용이 사라지는 기능
>  - <input autofocus> 입력 커서표시| 페이지를 불러오자마자 폼의 요소에 마우스가 표시되도록 한다.
>  - <input autocomplete="on/off/default">
>    - on 자동완성기능 켜기
>    - off 자동완성기능 끄기
>    - default
>  - min, max, maxLength, step
>  - <input type="email" required>
>    - 필수 필드로 지정| 폼에 내용을 입력 후 서버로 전송하게 되면, 필수 필드에 필요한 내용이 모두 채워졌는지 검사를 한다. html5 이전에는 자바스크립트를 통해서 처리했었다.
>
>- &lt;select&gt; &lt;option&gt;
>  - 여러 데이터를 나열해서 보ㅕ주고 사용자가 선택할 수 있게 해주는 폼 요소들이 있다. (드롭다운 목록을 넣는 태그)
>
>  - ```html 
>    <select id="class">
>      <option value=""></option>
>      <option value=""></option>
>      <option value=""></option>
>      <option value=""></option>
>    </selct>
>    ```
>
>  - <select size=""> 한 화면에 표시 될 드롭박스의 크기를 지정한다.
>
>  - <select multiple> 
>
>    - default : 1 , 숫자를 지정하면 여러개의 옵션을 선택 할 수 있다.
>
>  - <option>
>
>    - value 서버로 전송될 값을 지정한다.
>    - selected 화면에 표시 될 때 기본으로 선택될 옵션을 지정한다.
>
>  - <optgroup>
>
>  - ```html
>    <select id="class">
>      <optgroup label="공과대학">
>        <option value="archi">건축공학과</option>
>        <option value="mechanic">기계공학과</option>
>        <option value="indust">산업공학과</option>
>        <option value="elec">전기전자공학과</option>
>        <option value="computer">컴퓨터공학과</option>
>        <option value="chemical">화학공학과</option>
>      </optgroup>
>    </selct>
>    ```
>
>- &lt;datalist&gt;
>
>  - 사용자가 텍스트 필드에 직접 값을 입력하는 것이 아니라, 제시한 값중에서 선택하면 그 값이 자동으로 입력된다.
>
>  - 텍스트 필드와 함께 사용하기 때문에 <input> 태그를 같이 사용한다.
>
>  - <input list="_"> <detalist id="_">
>
>    - "_" 를 일치시켜서 연결시킨다. 
>
>  - ```HTML
>    <input list="mobileOS"> // list 속성 - datalist id
>    <datalist id="mobileOS"> // id 속성 - input list 
>    	<option value="IOS"></option>
>      	<option value="Android"></option>
>      	<option value="Windows10"></option>
>    </datalist>
>    ```
>
>- &lt;option&gt; 
>
>  - value 서버에 넘겨질 값을 지정한다.
>  - label 사용자를 위해 브라우저에 표시할 라벨
>
>- &lt;textarea&gt;
>
>  - 여러줄의 텍스트를 입력하는 텍스트 영역을 넣는 태그
>
>  - ```html
>    <textarea cols="50" rows="5"></textarea>
>    ```
>
>  - name
>
>  - cols 가로 너비를 문자 단위로 지정한다. 
>
>  - rows 세로 길이를 줄 단위로 지정한다. (지정한 줄단위 초과시:스크롤 생성)
>
>- &lt;button&gt;
>  - 버튼을 넣는 태그
>  - type="submit/reset/button"
>    - submit 폼을 제출한다. 
>    - reset 폼의 내용을 리셋한다.
>    - button 버튼의 형태를 생성한다.
>
>- <input type="submit" value="전송하기">
>
>- <button type="submit">전송하기</button>
>
>  - Input 태그를 이용한 버튼과 달리, button 태그는 콘텐츠를 포함 할 수 있기 때문에 CSS를 사용해 버튼을 스타일링 할 수 있다.
>
>- &lt;output&gt; 결과출력
>
>- &lt;progress&gt; 진행상태 표시
>
>  - Value 작업이 진행된 정도를 (부동소수점으로) 표시
>    - 0 =< value =< max(default : 1.0)
>  - Max 작업이 완료되려면 수행해야 하는 작업을 부동 소수점으로 표현한다.
>
>- &lt;meter&gt; 값이 차지하는 크기 표시하기
>
>  - 외관상 <progress> 와 <meter> 는 동일하다. 따라서 혼동하기 쉽다. <meter>은 진행의 의미보다, 지정된 범위 내에서 해당 값이 어느정도의 비율을 차지하고 있는지를 표시하기 위해 사용한다.
>  - min, max (default 0,1) 범위의 최소값 최대값
>  - value 범위 안에서 차지하는 값
>  - low high 하한값, 상한값의 기준을 범위에 지정한다.
>  - optimum 최적값의 기준을 범위에 지정한다.

---

`<br>` 은 `a forced line-break` 의 줄임말이다.

외관상 줄간격은 '&lt;br&gt;&lt;br&gt; = &lt;p&gt;' 이다.

`<p>` 는 `paragraph` 의 줄임말이다.

`<alt>` `alternative text` 의 줄임말이다.



> Method

- `form` 사용자가 입력한 정보를 브라우져를 통해서 서버로 전송하는 것이다.
- 데이터를 전송하는 방법은 여러가지가 있다.
- get/post

```html
<form action="http://localhost/login.php" method="post">
```

```c
int main() {}  

int var = 0;  
```

```html
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <form action="http://localhost/upload.php" method="post" enctype="multipart/form-data">
            <input type="file" name="profile">
            <input type="submit">
        </form>
    </body>
</html>
```

> 스큐어모피즘(skeuomorphism)

스큐어모프(skeuomorph)란 대상을 원래 그대로의 모습으로 사실적으로 표현하는 디자인 기법으로 3차원적이고 사실주의적이다.