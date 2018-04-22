# 1. Angular 소개

[Angular](https://angular.io/)는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹 애플리케이션은 물론 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 제공한다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경을 제공한다.

> AngularJS
> - 구글직원 `미스코 헤브리(Miško Hevery)` 의 개인 프로젝트 결과물

- 2009 AngularJS 
- 2012 AngularJS 1.0
- 2017 AngularJS 1.6.2 

> Angular 
>
> - AngularJS 1.0 의 후속버전으로 [ng-conf](https://www.ng-conf.org/) 에서 처음으로 소개되었다. 

- 2014 Angular1
- 2016 09 14 Angular2 
  - Angular3은 출시되지 않았다.
- 2017 03 23 Angular4
- 2017 11 01 Angular5(pentagonal-donut) (정식버전)

> 브레이킹 체인지(Breaking Change)란 무엇인가?

# 2. Angular와 AngulaJS의 차이점

Angular는 AngulaJS의 단순한 업그레이드 버전이 아니다. Angular는 정적 타이핑과 ECMAScript6 스펙을 충족시키기 위해 TypeScript로 재작성되었고 AngulaJS와는 호환성이 없는 브레이킹 체인지를 다수 포함하고 있다.

Angular와 AngulaJS의 차이점을 정리하면 아래와 같다.

- AngularJS의 Controller와 $scope 기반 개발에서 컴포넌트 기반 개발(CBD, Component Based Development)로 전환되었다.
- AngularJS의 angular.module과 jQlite보다 향상된 모듈 시스템과 DOM 제어 기능을 제공하며 API 또한 단순화되었다.
- 선택적 바인딩(one-way, two-way *Angular는 더 이상 양방향 데이터 바인딩을 빌트인으로 제공하지 않는다.)을 지원하고 디렉티브(Directive)와 서비스, 의존성 주입(dependency injection)은 간소화 되었다.
- 주력 개발 언어로써 TypeScript를 도입하여 대규모 개발에 적합한 정적 타입과 인터페이스, 제네릭 등 타입 체크 지원 기능을 제공한다.
- ECMAScript6에서 새롭게 도입된 모듈, 클래스 등과 ECMAScript7의 데코레이터를 지원한다.
- 강력한 개발환경 지원 도구인 Angular CLI를 제공한다.

Angular은 AngularJS의 후속 버전이기는 하지만 호환성이 없는 새로운 프레임워크로 이해하는 것이 좋다. Angular는 AngularJS보다 배우기 쉬우며 성능은 향상되었고 애플리케이션 구조는 보다 단순해졌다.

# 3. Angular의 장점

Angular의 장점을 개발 생산성의 측면과 성능의 관점에서 살펴보도록 하자.

## 3.1 개선된 개발 생산성

### 3.1.1 컴포넌트 기반 개발

AngularJS의 경우 Controller와 $scope가 개발의 중심이었지만 Angular에서는 컴포넌트가 개발의 중심이다. 컴포넌트 기반 개발(CBD: Component Based Development)은 개발 생산성을 향상시키며 대규모 애플리케이션에 적합한 구조이다.

### 3.1.2 TypeScript의 도입

[TypeScript](http://poiemaweb.com/typescript-introduction)는 2012년 Microsoft에서 발표한 오픈소스로 강력한 정적 타이핑 그리고 ECMAScript6(ECMAScript 2015)의 클래스, 모듈 등과 ECMAScript7의 데코레이터를 지원한다.

TypeScript를 사용하는 이유는 여러가지 있지만 가장 큰 장점은 다양한 도구의 지원을 받을 수 있다는 것이다. TypeScript는 정적 타이핑을 지원하므로 높은 수준의 IntelliSense, 코드 어시스트, 타입 체크, 리팩토링 등을 지원하며 이러한 도구의 지원은 대규모 프로젝트를 위한 필수적 요소이기도 하다.

또한 명시적인 정적 타입 지정은 코드의 가독성을 향상시키고 예측을 가능하게 하며 컴파일 단계에서 오류를 포착할 수 있는 장점을 가지고 있다.

TypeScript의 모듈, 클래스, 인터페이스 등의 강력한 Object Oriented Programming 지원은 크고 복잡한 프로젝트의 코드 기반을 쉽게 구성할 수 있도록 돕는다.

Angular는 TypeScript 뿐만 아니라 JavaScript, Dart로도 작성할 수 있지만 Angular 공식 문서, 커뮤니티 활동에서 가장 많이 사용되고 있는 것은 TypeScript이다. Angular 공식 문서의 예제 등도 TypeScript로 작성된 것이 대부분이어서 관련 정보 취득에도 이점이 있으며 이러한 현상은 앞으로도 지속될 것으로 예상된다.

### 3.1.3 개발 도구의 통합 및 개발 환경 구축 자동화

프레임워크를 도입할 때 개발 환경 구축은 하나의 큰 장벽이다. 폴더 구조와 기본 파일 생성, 빌드를 위한 설정, 디펜던시, 트랜스파일러, 번들러, 테스팅 환경과 디버깅, 배포 등 설정해야 할 도구는 많고 설정 방법은 익숙하지 않기 때문이다.

Angular CLI contributor인 Mike Brocchi‏의 보고에 따르면 개발 환경 구축이 Angular의 도입의 큰 장벽 중 하나로 조사되었다.

![largest-barrier-to-getting-started-with-Angular 2](http://poiemaweb.com/img/largest-barrier-to-getting-started-with-Angular2.png)

Angular는 [Angular CLI](https://cli.angular.io/)를 통해 간편한 개발 환경 구축을 지원한다. 간단한 명령어를 사용하여 간편하게 프로젝트 생성에서 빌드, 테스트, 구성요소 추가를 할 수 있으며 개발용 서버를 내장하고 있어 실행까지 가능하다. 이것은 개발환경 구축에 소요되는 시간을 최소화할 수 있어서 개발작업에 집중할 수 있도록 돕는다.

## 3.2 성능의 향상

### 3.2.1 Digest Loop로 인한 성능저하 문제의 해결

AngularJS의 단점 중 대표적인 것이 Digest Loop(Model의 변화를 View에 반영시키는 과정)로 인한 성능저하였다. 양방향 바인딩(Two-way binding)을 위해서는 watcher가 추가되어야 하고 watcher에 대해 Digest Loop가 실행되기 때문에 watcher가 늘어날수록 성능은 저하하게 된다. Angular에서는 Digest Loop로 인한 성능저하가 개선되어 AngularJS에 비교할 때 첫 페이지 로딩시간은 2.5배, 리렌더링도 4.2배 정도 빨라졌다.(ng-conf 2016 기준)

### 3.2.2 AoT 컴파일(ahead of time compilation)

AoT 컴파일은 사전 컴파일 방식을 의미한다. 예를 들어 ngIf, ngFor, ngSwitch와 같은 구조 디렉티브(Structural directive)를 브라우저가 실행 가능한 코드로 변환하여야 하는데 이러한 과정을 런타임에서 실시하지 않고 사전에 컴파일하여 실행 속도를 향상시키는 기법이다. AoT 컴파일의 또다른 이점은 JIT(just-in-time) 컴파일러를 필요로 하지 않기 때문에 프레임워크 크기를 기존 AngularJS보다 50% 정도 줄일 수 있다는 것이다.

### 3.2.3 Lazy Loading

Lazy Loading(지연 로딩)은 SPA의 태생적 단점을 극복하기 위한 하나의 대안으로 애플리케이션 실행 시점에 애플리케이션에서 사용되는 모든 모듈을 한꺼번에 로딩하지 않고 필요한 시점에 필요한 모듈만을 로딩하는 방식이다. 현재 페이지에서 불필요한 모듈까지 로딩하는 낭비를 방지하여 페이지 로딩 속도를 향상시킬 수 있다.

### 3.2.4 코드 최적화

Angular 코드 자체도 지속적인 최적화가 수행되고 있어 45KB 정도의 크기로 축소되었다고 한다.(ng-conf 2016 기준) Angular는 Mobile First를 지향하는 고성능 프레임워크를 표방하고 있기 때문에 지속적인 코드 최적화가 진행될 것으로 예상된다.



---

# 1. 컴포넌트 소개

컴포넌트는 Angular의 핵심 구성 요소로서 Angular 애플리케이션은 컴포넌트를 중심(CBD, Component Based Development)으로 구성된다. 컴포넌트의 역할은 애플리케이션의 화면을 구성하는 **뷰(View)**를 생성하고 관리하는 것이다.

## 1.1 웹 컴포넌트

웹 애플리케이션의 뷰는 내용(content)과 구조(structure)을 담당하는 HTML과 스타일(디자인, 레이아웃 등)을 담당하는 CSS의 조합으로 생성되며 DOM과 이벤트의 관리를 위해서 JavaScript가 필요하다.

기존의 객체지향개발(Object Oriented Programming)의 경우 로직을 클래스 단위로 부품화할 수 있지만 뷰를 부품화는 것은 곤란하다. HTML의 경우는 어느 정도 템플릿화가 가능하지만 CSS의 경우 HTML 요소간 상속(Inheritance)과 캐스케이딩(Cascading)이 적용되어 HTML 요소가 배치되는 위치에 따라 스타일이 영향을 받기 때문이다.

컴포넌트는 동작 가능한 하나의 부품이다. 부품화를 위해서는 다른 컴포넌트에 간섭을 받지 않도록 독립된 스코프를 가져야 한다. 다시 말해 컴포넌트 내에서만 유효한 상태 정보와 로직, 스타일을 소유한 완결된 뷰를 생성하기 위한 것이 바로 컴포넌트이다. **컴포넌트는 독립적이고 완결된 뷰를 생성하기 위하여 “HTML, CSS, JavaScript를 하나의 단위로 묶는 것”**으로 W3C 표준인 [웹 컴포넌트(Web Component)](https://www.webcomponents.org/introduction)를 기반으로 한다. Angular는 이러한 컴포넌트를 조립하여 하나의 완성된 애플리케이션을 작성한다.

![web-component](http://poiemaweb.com/img/web-component.png)

웹 컴포넌트(Web Component)

웹 컴포넌트는 웹 애플리케이션에서 재사용이 가능하도록 캡슐화된 HTML 커스텀 요소(Custom element)를 생성하는 웹 플랫폼 API의 집합이다. 웹 컴포넌트가 제공하여야 하는 기능은 아래와 같다.

1. 컴포넌트의 뷰를 생성할 수 있어야 하며(HTML Template)
2. 외부로부터의 간섭을 제어하기 위해 스코프(scope)를 분리하여 DOM을 캡슐화(Encapsulation)할 수 있어야 하며(Shadow DOM)
3. 외부에서 컴포넌트를 호출할 수 있어야 하고(HTML import)
4. 컴포넌트를 명시적으로 호출하기 위한 명칭(alias)을 선언하여 마치 HTML 요소와 같이 사용할 수 있어야 한다(Custom Element).

위에서 설명한 HTML Template, Shadow DOM, HTML import, Custom Element가 바로 웹 컴포넌트의 4대 기술 스펙이다.

![web component browser support](http://poiemaweb.com/img/web-component-browser-support.png)

[각 브라우저의 웹컴포넌트 지원 상황](https://www.webcomponents.org/)

## 1.2 컴포넌트 트리

어떠한 복잡한 화면이라도 컴포넌트 하나로 생성하고 관리할 수 있다. 하지만 재사용이 가능한 부분이 존재하기 마련이기 때문에 하나의 컴포넌트로 화면 전체를 구성하는 것은 컴포넌트를 사용하는 취지에 부합하지 않는다. 컴포넌트는 재사용이 용이한 구조로 분할하여 작성하며 이렇게 분할된 컴포넌트를 조립하여 중복없이 UI를 생성한다.

대부분의 웹 애플리케이션은 아래와 같이 블록 구조(Block structure)를 갖는다. HTML5의 시멘틱 태그를 사용하면 의미론적으로 명확한 구조를 가질 수 있다.

![HTML5 semantic elements](http://poiemaweb.com/img/building-structure.png)

블록 구조(Block structure)

위 블록 구조의 경우, 헤더(header), 사이드바(aside), 푸터(footer) 영역은 모든 화면에서 공통으로 사용되고 본문(section)만 변경될 가능성이 높다. 이러한 경우 컴포넌트를 분할하고 컴포넌트를 조립하여 화면을 구성하는 것은 재사용과 유지보수의 관점에서 매우 바람직하다.

위의 블록 구조를 컴포넌트로 전환하면 아래와 같은 구조를 갖는다. 흡사 DOM 트리와 유사한 형태를 가지게 되는데 이를 **컴포넌트 트리**라고 한다.

![component tree](http://poiemaweb.com/img/component-tree.png)

컴포넌트 트리

Angular 애플리케이션은 분할된 컴포넌트로 구성되기 때문에 컴포넌트 간에는 컴포넌트 트리로 표현되는 부모-자식 관계가 형성된다. 컴포넌트 간의 부모-자식 관계는 데이터와 이벤트가 왕래하는 정보 흐름의 통로가 되며 이를 통해 상태 공유가 이루어지기 때문에 컴포넌트 간의 부모-자식 관계는 Angular 애플리케이션에서 중요한 의미를 갖는다. 따라서 설계 시점부터 화면을 어떠한 컴포넌트 단위로 분할할 것인지에 대한 검토가 필요하다.