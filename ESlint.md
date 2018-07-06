### 로컬 설치 및 사용

ESLint를 프로젝트 빌드 시스템의 일부로 포함 시키려면 로컬로 설치하는 것이 좋습니다. npm을 사용하면 이렇게 할 수 있습니다.

```
$ npm install eslint --save-dev

```

그런 다음 구성 파일을 설정해야합니다.

```
$ ./node_modules/.bin/eslint --init

```

그런 다음 프로젝트의 루트 디렉토리에서 다음과 같이 ESLint를 실행할 수 있습니다.

```
$ ./node_modules/.bin/eslint yourfile.js

```

사용하는 모든 플러그인 또는 공유 가능 구성은 또한 로컬로 설치된 ESLint로 작업하기 위해 로컬로 설치되어야합니다.

### 전역 설치 및 사용

모든 프로젝트에서 실행되는 도구에서 ESLint를 사용할 수있게하려면 ESLint를 전체적으로 설치하는 것이 좋습니다. npm을 사용하면 이렇게 할 수 있습니다.

```
$ npm install -g eslint

```

그런 다음 구성 파일을 설정해야합니다.

```
$ eslint --init

```

그 후에는 다음과 같은 파일이나 디렉토리에서 ESLint를 실행할 수 있습니다.

```
$ eslint yourfile.js

```

전역 적으로 설치된 ESLint와 작동하려면 사용하는 모든 플러그인 또는 공유 구성을 전역으로 설치해야합니다.

**참고 :** `eslint --init` 프로젝트별로 ESLint를 설정 및 구성하기위한 것이며 ESLint와 해당 플러그인이 실행되는 디렉토리에 로컬 설치를 수행합니다. ESLint의 글로벌 설치를 선호하는 경우 구성에 사용 된 모든 플러그인을 전역으로 설치해야합니다.

## 구성

**참고 :** 1.0.0 이전 버전을 사용하는 경우 [마이그레이션 가이드](https://eslint.org/docs/user-guide/migrating-to-1.0.0) 를 참조하십시오 .

실행 후에 `eslint --init`는 `.eslintrc`디렉토리에 파일이 있습니다. 여기에 다음과 같이 구성된 규칙이 표시됩니다.

```
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}

```

이름 `"semi"`과 `"quotes"`는 ESLint 의 [규칙](https://eslint.org/docs/rules) 이름입니다 . 첫 번째 값은 규칙의 오류 수준이며 다음 값 중 하나 일 수 있습니다.

- `"off"`또는 `0`- 규칙을 해제하십시오.
- `"warn"`또는 `1`- 규칙을 경고로 사용합니다 (이탈 코드에는 영향을주지 않음).
- `"error"`또는 `2`- 규칙을 오류로 켭니다 (종료 코드는 1이됩니다)

세 가지 오류 수준을 통해 ESLint가 규칙을 적용하는 방법을 세부적으로 제어 할 수 있습니다 (자세한 구성 옵션 및 세부 사항은 [구성 문서](https://eslint.org/docs/user-guide/configuring) 참조 ).

귀하의 `.eslintrc`구성 파일에는 줄을 포함합니다 :

```
    "extends": "eslint:recommended"

```

이 줄로 인해 "" [규칙 페이지](https://eslint.org/docs/rules) 가 켜집니다. 양자 택일로, 당신은 다른 사람의 "eslint-설정"을 검색하여 만든 구성을 사용할 수 있습니다 [npmjs.com을](https://www.npmjs.com/search?q=eslint-config) . ESLint는 공유 구성에서 확장하거나 구성에서 규칙을 명시 적으로 설정하지 않는 한 코드를 보완하지 않습니다.



ESLint 구성ESLint는 완전히 구성 가능하도록 설계되었으므로 모든 규칙을 끄고 기본 구문 검증만으로 실행하거나 번들 된 규칙과 사용자 정의 규칙을 혼합하여 일치시켜 프로젝트에 완벽한 ESLint를 만들 수 있습니다. ESLint를 구성하는 주요 방법에는 두 가지가 있습니다.**구성 주석** - JavaScript 주석을 사용하여 구성 정보를 파일에 직접 포함시킵니다.**구성 파일** - JavaScript, JSON 또는 YAML 파일을 사용하여 전체 디렉토리 (홈 디렉토리 제외) 및 모든 하위 디렉토리에 대한 구성 정보를 지정합니다. 이것은 [`.eslintrc.*`](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)파일이나 파일의 `eslintConfig`필드 형식 일 수 있으며 [`package.json`](https://docs.npmjs.com/files/package.json)둘 다 ESLint가 자동으로 찾아서 읽거나 [명령 줄](https://eslint.org/docs/user-guide/command-line-interface) 에 구성 파일을 지정할 수 있습니다 .홈 디렉토리 (일반적으로 `~/`) 에 구성 파일이있는 경우 , ESLint는 다른 구성 파일을 찾을 수없는 경우 **에만**이를 사용 합니다.구성 할 수있는 몇 가지 정보가 있습니다.**환경** - 스크립트가 실행되도록 설계된 환경 각 환경에는 사전 정의 된 전역 변수 집합이 있습니다.**전역** - 스크립트가 실행 중에 액세스하는 추가 전역 변수.**규칙** - 어떤 규칙이 사용 가능한지, 어떤 오류 수준인지.이 모든 옵션을 통해 ESLint가 코드를 처리하는 방법을 세밀하게 제어 할 수 있습니다.파서 옵션 지정하기ESLint를 사용하면 지원하려는 JavaScript 언어 옵션을 지정할 수 있습니다. 기본적으로 ESLint는 ECMAScript 5 구문을 필요로합니다. 파서 옵션을 사용하여 JSM뿐만 아니라 다른 ECMAScript 버전을 지원하도록 설정을 재정의 할 수 있습니다.JSX 구문 지원은 React를 지원하는 것과 같지 않습니다. React는 ESLint가 인식하지 못하는 JSX 구문에 특정 의미를 적용합니다. React 및 React 의미를 사용하는 경우 [eslint-plugin-react를](https://github.com/yannickcr/eslint-plugin-react) 사용하는 것이 좋습니다 . 같은 토큰으로 ES6 구문 지원은 새로운 ES6 전역 (예 :와 같은 새로운 유형 `Set`) 지원과 동일하지 않습니다 . ES6 구문의 경우에는 `{ "parserOptions": { "ecmaVersion": 6 } }`; 새 ES6 전역 변수의 경우 use `{ "env": { "es6": true } }`(이 설정은 자동으로 ES6 구문을 사용 가능하게합니다). 파서 옵션은 속성 `.eslintrc.*`을 사용 하여 파일에 설정됩니다 `parserOptions`. 사용 가능한 옵션은 다음과 같습니다.`ecmaVersion`- 3, 5 (기본값), 6, 7, 8 또는 9로 설정하여 사용하려는 ECMAScript 구문의 버전을 지정하십시오. 연도 기반 이름 지정을 사용하려면 2015 (6과 동일), 2016 (7과 동일), 2017 (8과 동일) 또는 2018 (9와 동일)으로 설정할 수도 있습니다.`sourceType`- `"script"`(기본값)으로 설정 하거나 `"module"`코드가 ECMAScript 모듈에있는 경우.`ecmaFeatures` - 사용하려는 추가 언어 기능을 나타내는 객체입니다.`globalReturn`- `return`전역 범위의 명령문 허용`impliedStrict`- 전역 [엄격 모드 사용](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) ( `ecmaVersion`5 이상인 경우)`jsx`- [JSX 사용](https://facebook.github.io/jsx/)다음은 예제 `.eslintrc.json`파일입니다.`{
​    "parserOptions": {
​        "ecmaVersion": 6,
​        "sourceType": "module",
​        "ecmaFeatures": {
​            "jsx": true
​        }
​    },
​    "rules": {
​        "semi": 2
​    }
}
`파서 옵션을 설정하면 ESLint가 파싱 오류를 판별하는 데 도움이됩니다. 모든 언어 옵션은 `false`기본적으로 있습니다.더 이상 사용되지 않는`ecmaFeatures.experimentalObjectRestSpread`- 실험 [객체의 rest / spread 속성에](https://github.com/tc39/proposal-object-rest-spread) 대한 지원을 활성화 [합니다](https://github.com/tc39/proposal-object-rest-spread) . 이 구문은에서 지원되었습니다 `ecmaVersion: 2018`. 이 옵션은 앞으로 제거 될 것입니다.파서 지정하기기본적으로 ESLint는 사용 [Espree을](https://github.com/eslint/espree) 그 파서로. 파서가 다음 요구 사항을 충족하는 한 구성 파일에 다른 파서를 사용해야한다고 선택적으로 지정할 수 있습니다.로컬로 설치된 npm 모듈이어야합니다.Esprima 호환 인터페이스가 있어야합니다 ( `parse()`메서드 를 내 보내야합니다 ).Esprima 호환 AST 및 토큰 객체를 생성해야합니다.이러한 호환성이 있어도 외부 파서가 ESLint에서 올바르게 작동한다는 보장은 없으며 ESLint는 다른 파서와의 비 호환성 문제를 해결하지 않습니다.파서로 사용할 npm 모듈을 지정하려면 파일 의 `parser`옵션을 사용하여 지정 `.eslintrc`하십시오. 예를 들어, 다음은 Espree 대신 Esprima를 사용하도록 지정합니다.`{
​    "parser": "esprima",
​    "rules": {
​        "semi": "error"
​    }
}
`다음 구문 분석기는 ESLint와 호환됩니다.[에스 피리 마](https://www.npmjs.com/package/esprima)[Babel-ESLint](https://www.npmjs.com/package/babel-eslint) - [바벨](https://babeljs.io/) 파서를 둘러싼 ESLint와 호환되는 래퍼입니다.[typescript-eslint-parser (Experimental)](https://www.npmjs.com/package/typescript-eslint-parser) - TypeScript를 ESTree 호환 형식으로 변환하여 ESLint에서 사용할 수있는 파서입니다. 목표는 TypeScript 파일이 ESLint로 구문 분석되도록 허용하는 것입니다 (모든 ESLint 규칙을 반드시 통과 할 필요는 없음).사용자 정의 파서를 사용할 때 `parserOptions`ECLint가 기본적으로 ECMAScript 5가 아닌 기능으로 제대로 작동하려면 구성 등록 정보가 필요합니다. 구문 분석기는 모두 전달 `parserOptions`되며 사용할 수있는 기능을 결정하는 데 사용할 수도 있고 사용하지 않을 수도 있습니다.환경 지정환경은 사전 정의 된 전역 변수를 정의합니다. 사용 가능한 환경은 다음과 같습니다.`browser` - 브라우저 전역 변수.`node` - Node.js 전역 변수 및 Node.js 범위 지정.`commonjs` - CommonJS 전역 변수 및 CommonJS 범위 지정 (Browserify / WebPack을 사용하는 브라우저 전용 코드에이 변수를 사용).`shared-node-browser` - Node.js와 Browser 모두에 공통되는 전역 변수.`es6`- 모듈을 제외한 모든 ECMAScript 6 기능을 사용 가능하게합니다 (자동으로 `ecmaVersion`파서 옵션을 6 으로 설정 함 ).`worker` - 웹 노동자 전역 변수.`amd`- 정의 `require()`및 `define()`당 등 글로벌 변수 [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) 사양.`mocha` - 모든 모카 테스트 전역 변수를 추가합니다.`jasmine` - 1.3 및 2.0 버전의 모든 재스민 테스트 전역 변수를 추가합니다.`jest` - Jest 전역 변수.`phantomjs` - PhantomJS 전역 변수.`protractor` - 분도기 전역 변수.`qunit` - 글로벌 변수를 QUnit하십시오.`jquery` - jQuery 전역 변수.`prototypejs` - Prototype.js 전역 변수.`shelljs` - ShellJS 전역 변수.`meteor` - 유성 글로벌 변수.`mongo` - MongoDB 전역 변수.`applescript` - AppleScript 전역 변수.`nashorn` - Java 8 Nashorn 전역 변수.`serviceworker` - 서비스 작업자 전역 변수.`atomtest` - Atom 테스트 도우미 전역.`embertest` - Ember 테스트 도우미 전역.`webextensions` - WebExtensions 전역.`greasemonkey` - GreaseMonkey 전역.이러한 환경은 상호 배타적이지 않으므로 한 번에 둘 이상을 정의 할 수 있습니다.환경은 파일 내부, 구성 파일 또는 `--env` [명령 행](https://eslint.org/docs/user-guide/command-line-interface) 플래그를 사용하여 지정할 수 있습니다 .자바 스크립트 파일의 주석을 사용하여 환경을 지정하려면 다음 형식을 사용하십시오.`/* eslint-env node, mocha */
`이를 통해 Node.js 및 Mocha 환경을 사용할 수 있습니다.구성 파일에 환경을 지정하려면 `env`키를 사용하고 각각을 설정하여 활성화 할 환경을 지정하십시오 `true`. 예를 들어, 다음은 브라우저 및 Node.js 환경을 활성화합니다.`{
​    "env": {
​        "browser": true,
​        "node": true
​    }
}
`또는 `package.json`파일에서`{
​    "name": "mypackage",
​    "version": "0.0.1",
​    "eslintConfig": {
​        "env": {
​            "browser": true,
​            "node": true
​        }
​    }
}
`그리고 YAML :`---
  env:
​    browser: true
​    node: true
`플러그인에서 환경을 사용하려면 `plugins`배열에 플러그인 이름을 지정한 다음 고정되지 않은 플러그인 이름과 슬래시, 환경 이름을 차례로 사용하십시오. 예 :`{
​    "plugins": ["example"],
​    "env": {
​        "example/custom": true
​    }
}
`또는 `package.json`파일에서`{
​    "name": "mypackage",
​    "version": "0.0.1",
​    "eslintConfig": {
​        "plugins": ["example"],
​        "env": {
​            "example/custom": true
​        }
​    }
}
`그리고 YAML :`---
  plugins:

    - example
        env:
        ​    example/custom: true
        `전역 지정[없는 미확정의](https://eslint.org/docs/rules/no-undef) 규칙은 액세스하지만 같은 파일 내에서 정의되지 않은 변수에 경고합니다. 파일 내에서 전역 변수를 사용하는 경우, ESLint가 사용법에 대해 경고하지 않도록 전역 변수를 정의하는 것이 좋습니다. 파일의 주석 또는 구성 파일의 주석을 사용하여 전역 변수를 정의 할 수 있습니다.자바 스크립트 파일의 주석을 사용하여 전역을 지정하려면 다음 형식을 사용하십시오.`/* global var1, var2 */
        `이 두 개의 전역 변수를 정의 `var1`하고 `var2`. 선택적으로이 전역 변수에 절대로 쓰지 않아야한다는 것을 지정하려면 (읽기 전용) 각 `false`플래그를 다음 과 같이 설정할 수 있습니다 .`/* global var1:false, var2:false */
        `구성 파일 내에서 전역 변수를 구성하려면 `globals`키를 사용하고 사용할 전역 변수를 지정하십시오. `true`변수를 겹쳐 쓰거나 겹쳐 쓰기 `false`를 허용하지 않으 려면 각 전역 변수 이름을 같게 설정하십시오 . 예 :`{
        ​    "globals": {
        "var1": true,
        "var2": false
        ​    }
        }
        `그리고 YAML :`---
          globals:
        ​    var1: true
        ​    var2: false
        `이 예제는 `var1`코드에서 덮어 쓰지만 허용하지 않습니다 `var2`.**참고 :** 코드에 읽기 전용 전역 변수에 대한 수정을 허용하지 않으 려면 [no-global-assign](https://eslint.org/docs/rules/no-global-assign) 규칙을 사용하십시오.플러그인 설정하기ESLint는 타사 플러그인 사용을 지원합니다. 플러그인을 사용하기 전에 npm을 사용하여 플러그인을 설치해야합니다.구성 파일 내에 플러그인을 구성하려면 `plugins`플러그인 이름 목록이 들어있는 키를 사용하십시오 . `eslint-plugin-`접두사 플러그인 이름에서 생략 할 수 있습니다.`{
        ​    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
        ​    ]
        }
        `그리고 YAML :`---
          plugins:
    - plugin1
    - eslint-plugin-plugin2
  `**참고 :** Node `require`기능 의 작동으로 인해 ESLint의 전역 설치 인스턴스는 전역 설치 ESLint 플러그인 만 사용할 수 있으며 로컬 설치 버전은 *로컬 설치* 플러그인 만 사용할 수 있습니다. 로컬 및 글로벌 플러그인 혼합은 지원되지 않습니다.규칙 구성ESLint에는 많은 수의 규칙이 있습니다. 구성 주석이나 구성 파일을 사용하여 프로젝트에서 사용하는 규칙을 수정할 수 있습니다. 규칙 설정을 변경하려면 규칙 ID를 다음 값 중 하나와 같게 설정해야합니다.`"off"`또는 `0`- 규칙을 해제하십시오.`"warn"`또는 `1`- 규칙을 경고로 사용합니다 (이탈 코드에는 영향을주지 않음).`"error"`또는 `2`- 규칙을 오류로 켭니다 (트리거 될 때 종료 코드는 1 임)구성 주석을 사용하여 파일 내부에서 규칙을 구성하려면 다음 형식의 주석을 사용하십시오.`/* eslint eqeqeq: "off", curly: "error" */
  `이 예에서는 [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)꺼지고 [`curly`](https://eslint.org/docs/rules/curly)오류로 켜집니다. 규칙 심각도에 해당하는 숫자를 사용할 수도 있습니다.`/* eslint eqeqeq: 0, curly: 2 */
  `이 예제는 마지막 예제와 동일하지만 문자열 값 대신 숫자 코드 만 사용합니다. `eqeqeq`규칙은 꺼져 있고 `curly`규칙 오류로 설정됩니다.규칙에 추가 옵션이있는 경우 다음과 같이 배열 리터럴 구문을 사용하여 규칙을 지정할 수 있습니다.`/* eslint quotes: ["error", "double"], curly: 2 */
  `이 주석은 [`quotes`](https://eslint.org/docs/rules/quotes)규칙에 대한 "이중"옵션을 지정합니다 . 배열의 첫 번째 항목은 항상 규칙의 심각도 (번호 또는 문자열)입니다.구성 파일 내에서 규칙을 구성하려면 `rules`오류 수준 및 사용할 모든 옵션과 함께 키를 사용하십시오. 예 :`{
  ​    "rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"]
  ​    }
  }
  `그리고 YAML :`---
  rules:
    eqeqeq: off
    curly: error
    quotes:
    - error
    - double
  `플러그인 내에서 정의 된 규칙을 구성하려면 규칙 ID에 플러그인 이름과 접두사를 추가해야합니다 `/`. 예 :`{
  ​    "plugins": [
    "plugin1"
  ​    ],
  ​    "rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"],
    "plugin1/rule1": "error"
  ​    }
  }
  `그리고 YAML :`---
  plugins:
  - plugin1
  rules:
    eqeqeq: 0
    curly: error
    quotes:
  - error
  - "double"
    plugin1/rule1: error
    `이 구성 파일에서 규칙 `plugin1/rule1`은 명명 된 플러그인에서옵니다 `plugin1`. 다음과 같은 구성 주석과 함께이 형식을 사용할 수도 있습니다.`/* eslint "plugin1/rule1": "error" */
    `**참고 :** 플러그인에서 규칙을 지정할 때 반드시 생략하십시오 `eslint-plugin-`. ESLint는 내부적으로 접두사가없는 이름 만 사용하여 규칙을 찾습니다.인라인 주석으로 규칙 사용 불가파일의 규칙 경고를 일시적으로 사용하지 않으려면 다음 형식의 블록 주석을 사용하십시오.`/* eslint-disable */

alert('foo');

/* eslint-enable */
`특정 규칙에 대한 경고를 사용 또는 사용하지 않도록 설정할 수도 있습니다.`/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
`전체 파일에서 규칙 경고를 사용하지 않으려면 파일 `/* eslint-disable */`맨 위에 블록 주석을 넣으십시오 .`/* eslint-disable */

alert('foo');
`전체 파일에 대해 특정 규칙을 사용하거나 사용하지 않도록 설정할 수도 있습니다.`/* eslint-disable no-alert */

alert('foo');
`특정 행의 모든 규칙을 사용하지 않으려면 다음 형식 중 하나에서 행 또는 블록 주석을 사용하십시오.`alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo');

alert('foo'); /* eslint-disable-line */
`특정 라인에서 특정 규칙을 비활성화하려면 다음을 수행하십시오.`alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert('foo');
`특정 라인에서 여러 규칙을 사용하지 않으려면 다음을 수행하십시오.`alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

alert('foo'); /* eslint-disable-line no-alert, quotes, semi */

/* eslint-disable-next-line no-alert, quotes, semi */
alert('foo');
`위의 모든 방법은 플러그인 규칙에도 적용됩니다. 예를 들어, 비활성화 `eslint-plugin-example`의의 `rule-name`플러그인의 이름 (결합 규칙 `example`) 및 규칙의 이름을 ( `rule-name`에) `example/rule-name`:`foo(); // eslint-disable-line example/rule-name
foo(); /* eslint-disable-line example/rule-name */
`**참고 :** 파일의 일부에 대한 경고를 비활성화하는 주석은 ESLint가 비활성화 된 코드에 대한 규칙 위반을보고하지 않도록합니다. 그러나 ESLint는 여전히 전체 파일을 구문 분석하므로 사용하지 않는 코드는 여전히 구문 적으로 유효한 JavaScript이어야합니다.공유 설정 추가ESLint는 공유 설정을 구성 파일에 추가하는 것을 지원합니다. `settings`ESLint 구성 파일 에 객체를 추가 할 수 있으며, 실행될 모든 규칙 에 객체가 제공됩니다. 이는 사용자 정의 규칙을 추가하고 동일한 규칙에 액세스하여 쉽게 구성 할 수 있도록하려는 경우 유용 할 수 있습니다.JSON :`{
​    "settings": {
​        "sharedData": "Hello"
​    }
}
`그리고 YAML :`---
  settings:
​    sharedData: "Hello"
`구성 파일 사용구성 파일을 사용하는 두 가지 방법이 있습니다.구성 파일을 사용하는 첫 번째 방법은 via `.eslintrc.*`및 `package.json`파일입니다. ESLint는 자동적으로 linted 될 파일의 디렉토리에서 그리고 파일 시스템의 루트 디렉토리까지 연속적인 부모 디렉토리에서 찾는다 `root: true`. 이 옵션은 프로젝트의 다른 부분에 대해 다른 구성을 원하거나 다른 사용자가 구성 파일을 전달하지 않고 ESLint를 직접 사용할 수있게하려는 경우에 유용합니다.두 번째 방법은 원하는 위치에 파일을 저장하고 다음과 같은 `-c`옵션을 사용하여 위치를 CLI에 전달하는 것입니다 .`eslint -c myconfig.json myfiletotest.js
`하나의 구성 파일을 사용하고 ESLint가 `.eslintrc.*`파일 을 무시 하도록하려면 플래그 `--no-eslintrc`와 함께 사용해야 합니다 `-c`.각각의 경우 구성 파일의 설정이 기본 설정보다 우선합니다.구성 파일 형식ESLint는 여러 가지 형식의 구성 파일을 지원합니다.**JavaScript** - `.eslintrc.js`구성을 포함하는 객체를 사용 하고 내 보냅니다.**YAML** - 사용 `.eslintrc.yaml`또는 `.eslintrc.yml`구성 구조를 정의 할 수 있습니다.**JSON** - `.eslintrc.json`구성 구조를 정의하는 데 사용 됩니다. ESLint의 JSON 파일은 또한 JavaScript 스타일의 주석을 허용합니다.**Deprecated** - use `.eslintrc`는 JSON 또는 YAML 중 하나 일 수 있습니다.**package.json** - 파일에 `eslintConfig`속성을 만들고 `package.json`거기에 구성을 정의하십시오.동일한 디렉토리에 여러 구성 파일이있는 경우 ESLint는 하나만 사용합니다. 우선 순위는 다음과 같습니다.`.eslintrc.js``.eslintrc.yaml``.eslintrc.yml``.eslintrc.json``.eslintrc``package.json`구성 계단식 및 계층 구조구성 `.eslintrc.*`및 `package.json`파일을 사용하여 구성을 계단식으로 사용할 수 있습니다. 예를 들어, 다음 구조가 있다고 가정합니다.`your-project
├── .eslintrc
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
`구성 캐스케이드는 `.eslintrc`linted 될 파일에 가장 가까운 파일을 최우선 순위로 사용하고 상위 디렉토리에있는 모든 구성 파일을 사용하여 작동합니다. 이 프로젝트에 ESLint를 실행하면 모든 파일이 `lib/`사용됩니다 `.eslintrc`자신의 구성과 프로젝트의 루트에 파일을. ESLint가 `tests/`디렉토리를 가로 지르면 ESLint 가 다음을 사용 `your-project/tests/.eslintrc`합니다 `your-project/.eslintrc`. 따라서 디렉터리 계층 구조에서 `your-project/tests/test.js`두 `.eslintrc`파일 의 조합에 따라 가장 가까운 것을 우선적으로 사용하여 linted 됩니다. 이 방법으로 프로젝트 레벨의 ESLint 설정을 가질 수 있으며 디렉토리 별 재정의도 할 수 있습니다.같은 방법으로, 필드 `package.json`가있는 루트 디렉토리에 파일 이 있으면 그 디렉토리가 `eslintConfig`설명하는 구성은 그 아래의 모든 하위 디렉토리에 적용되지만 `.eslintrc`테스트 디렉토리 의 파일에 설명 된 구성 은 충돌하는 사양이있는 곳 의 파일보다 우선합니다.`your-project
├── package.json
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
`이 생길 경우 `.eslintrc`와 `package.json`같은 디렉토리에있는 파일을, `.eslintrc`우선 순위를 취할 것이며, `package.json`파일이 사용되지 않습니다.**주 :** 홈 디렉토리 ( `~/.eslintrc`) 에 개인 구성 파일이 있으면 다른 구성 파일이없는 경우에만 사용됩니다. 개인 구성은 제 3 자 코드를 포함하여 사용자 디렉토리의 모든 것에 적용되므로 ESLint를 실행할 때 문제가 발생할 수 있습니다.기본적으로 ESLint는 모든 상위 폴더에서 루트 디렉토리까지의 구성 파일을 찾습니다. 모든 프로젝트가 특정 규칙을 따르기를 원할 때 유용하지만 예기치 않은 결과가 발생할 수 있습니다. ESLint를 특정 프로젝트로 제한하려면 파일 `"root": true`의 `eslintConfig`필드 `package.json`또는 `.eslintrc.*`프로젝트의 루트 수준 에있는 파일에 배치하십시오. ESLint는 구성을 찾으면 상위 폴더를 찾지 `"root": true`않습니다.`{
​    "root": true
}
`그리고 YAML :`---
  root: true
`예를 들어, 고려 `projectA`시킨 `"root": true`설정 `.eslintrc`에서 파일 `lib/`디렉토리. 이 경우 linting하는 동안 `main.js`구성 `lib/`은 사용되지만 `.eslintrc`파일 `projectA/`은 들어 가지 않습니다.`home
└── user
​    ├── .eslintrc <- Always skipped if other configs present
​    └── projectA
​        ├── .eslintrc  <- Not used
​        └── lib
​            ├── .eslintrc  <- { "root": true }
​            └── main.js
`가장 높은 우선 순위에서 가장 낮은 우선 순위까지 전체 구성 계층 구조는 다음과 같습니다.인라인 구성`/*eslint-disable*/` 과 `/*eslint-enable*/``/*global*/``/*eslint*/``/*eslint-env*/`명령 행 옵션 (또는 이에 상응하는 CLIEngine) :`--global``--rule``--env``-c`, `--config`프로젝트 수준 구성 :`.eslintrc.*`또는 `package.json`linted 파일과 같은 디렉토리에있는 파일검색을 계속 `.eslintrc`하고 `package.json`루트 디렉토리를 포함하여 위 또는과 설정 될 때까지, (부모가 가장 높은 다음 우선 순위, 조부모 등이있다) 상위 디렉토리에 파일을 `"root": true`찾을 수 있습니다.(1)에서 (3)까지의 구성이 없으면에있는 개인 기본 구성으로 되돌아갑니다 `~/.eslintrc`.구성 파일 확장구성 파일은 기본 구성에서 사용 가능한 규칙 세트를 확장 할 수 있습니다.`extends`속성 값 중 하나입니다 :구성을 지정하는 문자열문자열 배열 : 각 추가 구성은 앞의 구성을 확장합니다.ESLint는 구성을 재귀 적으로 확장하므로 기본 구성에도 `extends`속성 이있을 수 있습니다.이 `rules`속성은 다음을 수행하여 규칙 집합을 확장 (또는 재정의) 할 수 있습니다.추가 규칙 사용옵션을 변경하지 않고 상속 된 규칙의 심각도를 변경하십시오.기본 설정 : `"eqeqeq": ["error", "allow-null"]`유도 설정 : `"eqeqeq": "warn"`결과 실제 설정 : `"eqeqeq": ["warn", "allow-null"]`기본 구성의 규칙에 대한 옵션 재정의 :기본 설정 : `"quotes": ["error", "single", "avoid-escape"]`유도 설정 : `"quotes": ["error", "single"]`결과 실제 설정 : `"quotes": ["error", "single"]`사용 `"eslint:recommended"``extends`속성 값은 `"eslint:recommended"`체크 표시가 일반적인 문제를보고 핵심 규칙의 일부를 수상의 [규칙 페이지](https://eslint.org/docs/rules/) . 권장 하위 집합은 ESLint의 주요 버전에서만 변경할 수 있습니다.구성에서 권장되는 규칙을 확장하는 경우 : 새로운 ESLint 버전으로 업그레이드 한 후 [명령 줄](https://eslint.org/docs/user-guide/command-line-interface#fix) 에서 `--fix`옵션을 사용하기 전에보고 된 문제를 검토하여 새로운 수정 가능 권장 규칙에 따라 코드가 변경되는지 확인하십시오.이 `eslint --init`명령은 권장 규칙을 확장 할 수 있도록 구성을 만들 수 있습니다.JavaScript 형식의 구성 파일 예제 :`module.exports = {
​    "extends": "eslint:recommended",
​    "rules": {
​        // enable additional rules
​        "indent": ["error", 4],
​        "linebreak-style": ["error", "unix"],
​        "quotes": ["error", "double"],
​        "semi": ["error", "always"],

​        // override default options for rules from base configurations
​        "comma-dangle": ["error", "always"],
​        "no-cond-assign": ["error", "always"],

​        // disable rules from base configurations
​        "no-console": "off",
​    }
}
`공유 가능한 구성 패키지 사용[공유 가능한 구성은](https://eslint.org/docs/developer-guide/shareable-configs) 구성 개체를 내보내는 NPM 패키지입니다. 패키지가 ESLint가 요구할 수있는 디렉토리에 설치되었는지 확인하십시오.`extends`속성 값은 생략 할 수 있습니다 `eslint-config-`패키지 이름의 접두사.이 `eslint --init`명령은 구성을 작성하여 인기있는 스타일 지침 (예 :)을 확장 할 수 있습니다 `eslint-config-standard`.YAML 형식의 구성 파일 예제 :`extends: standard
rules:
  comma-dangle:
    - error
    - always
        no-empty: warn
        `플러그인의 구성 사용[플러그인은](https://eslint.org/docs/developer-guide/working-with-plugins) 일반적으로 규칙을 내보내는 NPM 패키지입니다. 일부 플러그인은 하나 이상의 명명 된 [구성을](https://eslint.org/docs/developer-guide/working-with-plugins#configs-in-plugins) 내 보냅니다 . 패키지가 ESLint가 요구할 수있는 디렉토리에 설치되었는지 확인하십시오.`plugins` [속성 값](https://eslint.org/docs/user-guide/configuring#configuring-plugins) 생략 할 수 있습니다 `eslint-plugin-`패키지 이름의 접두사.`extends`속성 값은 다음과 같이 구성 할 수 있습니다 :`plugin:`패키지 이름 (예 : 접두어를 생략 할 수 있음 `react`)`/`구성 이름 (예 `recommended`:)JSON 형식의 구성 파일 예제 :`{
        ​    "plugins": [
        "react"
        ​    ],
        ​    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
        ​    ],
        ​    "rules": {
        ​       "no-set-state": "off"
        ​    }
        }
        `구성 파일 사용`extends`속성 값은 기지국의 절대 또는 상대 경로 일 수있는 [구성 파일](https://eslint.org/docs/user-guide/configuring#using-configuration-files) .ESLint는 해당 파일이 홈 디렉토리에 있거나 ESLint가 설치된 디렉토리의 상위가 아닌 디렉토리 (로컬 또는 전역)에있는 **경우** 를 **제외** 하고 는 기본 구성 파일에 대한 상대 경로를 사용하여 구성 파일을 기준으로 해석합니다 . 이러한 경우 ESLint는 linted **프로젝트** 디렉토리 (일반적으로 현재 작업 디렉토리)를 기준으로 기준 파일에 대한 상대 경로를 결정합니다 .JSON 형식의 구성 파일 예제 :`{
        ​    "extends": [
        "./node_modules/coding-standard/eslintDefaults.js",
        "./node_modules/coding-standard/.eslintrc-es6",
        "./node_modules/coding-standard/.eslintrc-jsx"
        ​    ],
        ​    "rules": {
        "eqeqeq": "warn"
        ​    }
        }
        `사용 `"eslint:all"`이 `extends`속성 값은 `"eslint:all"`현재 설치된 ESLint 버전의 모든 핵심 규칙을 활성화 할 수 있습니다 . ESLint의 주요 버전 또는 주요 버전에서 핵심 규칙 집합이 변경 될 수 있습니다.**중요 :** 이 구성은 **프로덕션 용도로 권장되지 않습니다 ****.** 이는 ESLint의 모든 마이너 및 주요 버전에 따라 변경되기 때문입니다. 자신의 책임하에 사용하십시오.업그레이드 할 때 자동으로 새 규칙을 사용하도록 ESLint를 구성하면 ESLint는 소스 코드에 변경 사항이 없을 때 새로운 문제를보고 할 수 있습니다. 따라서 ESLint의 새로운 하위 버전은 변경 사항이있는 것처럼 행동 할 수 있습니다.프로젝트의 구성을 결정할 때 규칙 및 옵션을 탐색하기위한 바로 가기로 모든 핵심 규칙을 사용할 수 있습니다 (특히 옵션을 거의 무시하거나 규칙을 사용하지 않는 경우). 규칙의 기본 옵션은 ESLint가 보증하지 않습니다 (예 : `quotes`규칙 의 기본 옵션이 큰 따옴표가 작은 따옴표보다 낫다는 것을 의미하지는 않음).구성에서 모든 핵심 규칙을 확장하는 경우 : 새로운 주요 또는 부 버전의 ESLint로 업그레이드 한 후 [명령 줄](https://eslint.org/docs/user-guide/command-line-interface#fix) 에서 `--fix`옵션을 사용하기 전에보고 된 문제를 검토하여 수정 가능 규칙으로 코드가 변경되는지 확인하십시오.JavaScript 형식의 구성 파일 예제 :`module.exports = {
        ​    "extends": "eslint:all",
        ​    "rules": {
        // override default options
        "comma-dangle": ["error", "always"],
        "indent": ["error", 2],
        "no-cond-assign": ["error", "always"],

        // disable now, but enable in the future
        "one-var": "off", // ["error", "never"]

        // disable
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
        ​    }
        }
        `글로브 패턴에 기반한 구성때로는 같은 디렉토리에있는 파일의 구성이 달라야하는 경우와 같이 더 세부적인 구성이 필요합니다. 따라서 `overrides`명령 줄에서 전달할 것과 동일한 형식 (예 :)을 사용하여 특정 glob 패턴과 일치하는 파일에만 적용 되는 키 아래에 구성을 제공 할 수 있습니다 `app/**/*.test.js`.작동 원리Glob 패턴 재 지정은 구성 파일 ( `.eslintrc.*`또는 `package.json`) 내에서만 구성 할 수 있습니다 .패턴은 설정 파일의 디렉토리에 상대적인 파일 경로에 적용됩니다. 예를 들어 설정 파일에 경로가 `/Users/john/workspace/any-project/.eslintrc.js`있고 lint하려는 파일에 경로 가 있으면 `/Users/john/workspace/any-project/lib/util.js`제공된 패턴 `.eslintrc.js`이 상대 경로에 대해 실행됩니다 `lib/util.js`.Glob 패턴 재 지정은 동일한 구성 파일의 일반 구성보다 우선 순위가 높습니다. 동일한 구성 내의 여러 재정의가 순서대로 적용됩니다. 즉, 구성 파일의 마지막 대체 블록이 항상 가장 높은 우선 순위를 갖습니다.glob 특정 구성은 다른 ESLint 구성과 거의 동일하게 작동합니다. 무시 블록을 제외하고 일반 설정에 유효한 모든 구성 옵션을 포함 할 수 있습니다 `extends`, `overrides`하고 `root`.하나의 재정의 블록 내에 여러 glob 패턴을 제공 할 수 있습니다. 파일은 적용 할 구성에 대해 제공된 패턴 중 적어도 하나와 일치해야합니다.재정의 블록은 일치에서 제외 할 패턴을 지정할 수도 있습니다. 파일이 제외 된 패턴 중 하나와 일치하면 구성이 적용되지 않습니다.상대적인 그록 패턴`project-root
        ├── app
        │   ├── lib
        │   │   ├── foo.js
        │   │   ├── fooSpec.js
        │   ├── components
        │   │   ├── bar.js
        │   │   ├── barSpec.js
        │   ├── .eslintrc.json
        ├── server
        │   ├── server.js
        │   ├── serverSpec.js
        ├── .eslintrc.json
        `config in `app/.eslintrc.json`은 glob 패턴 을 정의합니다 `**/*Spec.js`. 이 패턴은의 기본 디렉토리에 상대적입니다 `app/.eslintrc.json`. 그래서,이 패턴은 일치합니다 `app/lib/fooSpec.js`하고 `app/components/barSpec.js`있지만 **NOT** `server/serverSpec.js` . 폴더 `.eslintrc.json`내의 파일에서 동일한 패턴을 정의한 경우 `project-root`세 `*Spec`파일 모두와 일치 합니다.구성 예귀하의 `.eslintrc.json`:`{
          "rules": {
        ​    "quotes": [ 2, "double" ]
          },

  "overrides": [
​    {
​      "files": [ "bin/*.js", "lib/*.js" ],
​      "excludedFiles": "*.test.js",
​      "rules": {
​        "quotes": [ 2, "single" ]
​      }
​    }
  ]
}
`구성 파일의 주석JSON 및 YAML 구성 파일 형식 모두 주석을 지원합니다 ( `package.json`파일에 포함하지 말아야합니다). 두 가지 유형의 파일에서 JavaScript 스타일 주석 또는 YAML 스타일 주석을 사용할 수 있으며 ESLint는 안전하게 무시합니다. 이렇게하면 구성 파일을보다 인간 친화적으로 만들 수 있습니다. 예 :`{
​    "env": {
​        "browser": true
​    },
​    "rules": {
​        // Override our default settings just for this directory
​        "eqeqeq": "warn",
​        "strict": "off"
​    }
}
`Lint에 대한 파일 확장자 지정하기현재 lint에 대해 파일 확장자를 ESLint에게 알려주는 유일한 방법은 [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#ext)명령 행 옵션을 사용하여 쉼표로 구분 된 확장자 목록을 지정하는 것입니다. 이 플래그는 디렉토리와 연계해서 만 적용되며 파일 이름이나 glob 패턴과 함께 사용하면 무시됩니다.파일과 디렉토리 무시하기`.eslintignore`프로젝트의 루트 디렉토리에 파일 을 생성하여 특정 파일과 디렉토리를 무시하도록 ESLint에 지시 할 수 있습니다 . `.eslintignore`파일은 각 라인 linting 경로를 생략되어야 하는지를 나타내는 글롭 패턴 인 일반 텍스트 파일이다. 예를 들어, 다음은 모든 JavaScript 파일을 생략합니다.`**/*.js
`ESLint가 실행되면 현재 작업 디렉토리에서 `.eslintignore`파일 을 찾아서 어떤 파일을 보풀 처리할지 결정합니다. 이 파일이 있으면 디렉토리를 이동할 때 해당 기본 설정이 적용됩니다. 한 번에 하나의 `.eslintignore`파일 만 사용할 수 있으므로 `.eslintignore`현재 작업 디렉토리에있는 파일 이외의 파일은 사용되지 않습니다.글로브는 [node-ignore를](https://github.com/kaelzhang/node-ignore) 사용하여 일치 하므로 많은 기능을 사용할 수 있습니다.로 시작하는 줄 `#`은 주석으로 처리되고 패턴 무시에 영향을 미치지 않습니다.경로는 `.eslintignore`위치 또는 현재 작업 디렉토리에 상대적 입니다. 이는 경로를 통해 전달 된 경로에도 영향을 미칩니다 `--ignore-pattern`.무시 패턴은 [사양](https://git-scm.com/docs/gitignore) 에 따라 동작합니다.`.gitignore`앞에 선은 `!`이전의 패턴에 의해 무시 된 패턴을-포함 다시 부정 패턴입니다.`.eslintignore`파일의 모든 패턴 외에도 ESLint는 `/node_modules/*`및의 파일을 항상 무시합니다 `/bower_components/*`.예를 들어, 다음과 같은 배치 `.eslintignore`를 모두 무시 현재 작업 디렉토리에 파일을 `node_modules`, `bower_components`의 프로젝트 루트와 아무것도 `build/`를 제외하고 디렉토리 `build/index.js`:`# /node_modules/* and /bower_components/* in the project root are ignored by default

# Ignore built files except build/index.js
build/*
!build/index.js
`**중요** : `node_modules`예를 들어, `packages`모노 저장소 의 디렉토리는 기본적으로 무시 *되지 않으므로*`.eslintignore` 명시 적으로 추가해야합니다 .대체 파일 사용`.eslintignore`현재 작업 디렉토리에서와 다른 파일을 사용하려면 `--ignore-path`옵션을 사용하여 명령 행에 지정할 수 있습니다. 예를 들어, `.jshintignore`파일 형식이 동일하기 때문에 file 을 사용할 수 있습니다 .`eslint --ignore-path .jshintignore file.js
``.gitignore`파일을 사용할 수도 있습니다 .`eslint --ignore-path .gitignore file.js
`표준 무시 파일 형식을 따르는 파일을 사용할 수 있습니다. 지정 `--ignore-path`은 기존 `.eslintignore`파일이 사용되지 않는다는 것을 의미 함을 명심하십시오 . globbing 규칙은 `.eslintignore`다음 규칙을 따르십시오 `.gitignore`.package.json에서 eslintIgnore 사용경우 `.eslintignore`파일을 찾을 수없는 및 대체 파일이 지정되지 않은, ESLint는 대한 package.json에서 찾게됩니다 `eslintIgnore`무시하는 파일을 확인 키.`{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
​      "env": {
​          "browser": true,
​          "node": true
​      }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
`무시 된 파일 경고ESLint에 디렉토리를 전달하면 파일과 디렉토리가 자동으로 무시됩니다. 특정 파일을 ESLint에 전달하면 파일을 건너 뛴 것을 나타내는 경고가 표시됩니다. 예를 들어 `.eslintignore`다음과 같은 파일이 있다고 가정 해보십시오 .`foo.js
`그런 다음 실행합니다.`eslint foo.js
`이 경고가 표시됩니다.`foo.js
  0:0  warning  File ignored because of your .eslintignore file. Use --no-ignore to override.

✖ 1 problem (0 errors, 1 warning)
`이 메시지는 ESLint가 실제로 파일을 보풀이하려하는지 확신 할 수 없기 때문에 발생합니다. 메시지에 표시된대로 `--no-ignore`무시 규칙 사용 을 생략 할 수 있습니다 .