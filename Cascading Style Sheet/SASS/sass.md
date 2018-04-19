> Sass란 무엇인가?

[Sass(Syntactically Awesome StyleSheets)](http://sass-lang.com/)는 CSS `pre-processor`로서 CSS의 한계와 단점을 보완하여 보다 가독성이 높고 코드의 재사용에 유리한 CSS를 생성하기 위한 CSS의 확장(extension)이다.

> `pre-processor`

입력 데이터를 처리하여, 다른 프로그램에 대한 입력으로서 사용되는 '전처리된 형태의 입력데이터'를 만들어내는 프로그램이다. 

> Sass가 제공하는 기능들

- 변수의 사용
- 조건문과 반복문
- Import
- Nesting
- Mixin
- Extend/Inheritance

> Sass 사용시 장점은 무엇인가?

- CSS의 코드의 가독성을 높이고 구조화 할 수 있다.
- 프로젝트 진행시 구문 수준의 차이를 평준화 할 수 있다.
- Sass에서 Mixin 등의 기능을 활용하여, CSS 유지보수의 편의성을 대폭 향상시킬 수 있다.

> SASS vs. SCSS

Sass는 SASS 표기법(.sass)과 SCSS 표기법(.scss)이 있다. 이전 버전에서는 SASS 표기법이 기본 표기법이었으나 Sass 3.0부터 CSS 친화적인 SCSS（Sassy CSS） 표기법이 기본 표기법이 되었다.

|         | SCSS     | SASS                        | CSS  |
| ------- | -------- | --------------------------- | ---- |
| 중괄호 {}  | 필요       | 불필요（공백 2문자 들여쓰기가 코드 블록을 의미) | 필요   |
| 세미콜론 ;  | 필요       | 불필요                         | 필요   |
| : 뒤의 공백 | 불필요      | 필요                          | 불필요  |
| Mixin   | @mixin   | =                           | 없음   |
| Include | @include | +                           | 없음   |
| 확장자     | .scss    | .sass                       | .css |

SASS 표기법은 보다 코딩을 간략화할 수 있는 장점이 있지만 CSS 친화적인 SCSS 표기법를 사용하는 경우가 더 많으므로 본 Post에서는 SCSS 표기법을 기준으로 한다.

