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