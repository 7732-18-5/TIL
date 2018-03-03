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
- &lt;aside&gt;
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

>- &lt;form&gt;
>  - 폼 전체를 감싸는 태그
>- &lt;fieldset&gt; &lt;legend&gt;
>  - 폼 요소를 그룹으로 묶고 제목을 붙이는 태그
>- &lt;label&gt;
>  - 폼 요소에 캡션을 붙이는 태그
>- &lt;input&gt;
>  - 사용자가 입력할 수 있도록 여러 요소를 삽입하는 태그
>- &lt;select&gt; &lt;option&gt;
>  - 드롭다운 목록을 넣는 태그
>- &lt;textarea&gt;
>  - 여러줄의 텍스트를 입력하는 텍스트 영역을 넣는 태그
>- &lt;button&gt;
>  - 버튼을 넣는 태그



