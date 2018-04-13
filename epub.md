> EPUB란 무엇인가?

```
EPUB(electronic publication)은 국제 디지털 출판 포럼(IDPF, International Digital Publishing Forum)에서 제정한 개방형 자유 전자서적 표준이다. EPUB은 자동공간조정(reflowable)(1)이 가능하게 디자인 되었다. 이는 EPUB으로 만들어진 내용을 볼 때 디스플레이하는 기계의 형식, 크기에 자동으로 최적화되어 보여줄 수 있다는 뜻이다. EPUB는 2007년 9월 이전에 있던 open eBook standard를 대체하기 위해 국제 디지털 출판 포럼에서 공식 표준으로 채택되었다. 

출처 : http://ko.wikipedia.org/wiki/EPUB
```

> 1. OPS (Open Publication Structure)
>
> OPS는 콘텐츠 편집에 사용할 수 있는 HTML 태그, CSS, 사용 가능한 미디어 타입(이미지, 동영상, 음성 등) 및 포멧 등을 정의합니다. EPUB을 제작할 때 OPF와 OCF에 있는 내용은 주로 저작 도구가 자동으로 처리해 주는 반면 OPS에 정의된 사항은 편집자가 처리하기 때문에 EPUB에서 발생하는 오류는 주로 이 부분의 규칙을 잘못 적용해서 생깁니다.

> 2. OPF(Open Packaging Format)
>
> OPF는 EPUB 파일 내에 있는 ‘.opf’(파일명은 임의로 지정 가능하나 주로 content.opf로 사용) 파일에 대해 설명한 파일입니다. 이 파일은 EPUB 패키지 내에 어떤 파일들이 들어있고 파일 종류는 무엇인지에 대한 정보를 담고 있습니다. 예를 들어 콘텐츠를 만들 때 ‘cover.jpg’라는 이름으로 표지 이미지와, ‘UnBatang.ttf’를 사용했다면 EPUB 파일 안에 있는 ‘content.opf’ 파일 안에 두개의 파일이 어느 위치에 있으며 각각 어떤 종류인지를 명시해야합니다. 
>
> 이 규칙을 통해 뷰어는 EPUB 콘텐츠 내에 어떤 파일이 어디 있는지를 확인해서 콘텐츠를 열 수 있게 됩니다. 그 외에 목차 정보를 담고 있는 NCX파일과 메타데이터 등 콘텐츠의 기본 골격을 이루는 정보에 대한 요구사항을 담고 있습니다. 
>
> OPF는 주로 뷰어를 개발할 때 참고하는 항목이고, content.opf 파일이나 NCX 파일은 EPUB 저작툴이 자동으로 생성을 하기 때문에 출판 편집자라면 개념만 알고 넘어가도 되는 항목입니다. 

> 3. OCF(Open eBook Publication Structure Container Format)
>
> OCF는 EPUB파일을 만들기 위한 규칙을 담고 있는 파일입니다. EPUB은 하나의 파일처럼 보이지만 압축 파일로 많이 사용하는 ZIP파일 안에 일정한 규칙에 의해 여러개의 이미지, 폰트, 텍스트(html/xhtml)파일 등이 패키지로 압축된 파일입니다. OCF는 여러개의 파일을 ZIP파일로 압축할 때 필요한 규칙을 정리하고 있습니다. 
>
> OCF 역시 뷰어나 저작 도구를 개발할 때 참고하는 항목으로 EPUB 저작 도구는 이 규칙을 기준으로 해서 편집자가 편집한 콘텐츠를 ‘.epub’을 확장자로 갖는 하나의 파일로 저장합니다. OCF 역시 OPF처럼 기본 개념만 알고 있어도 EPUB을 만드는데 문제가 되지 않습니다. 하지만 EPUB의 기본 구조를 알아두면 EPUB을 제작시 유용하게 활용할 수 있습니다.



> sample.epub

- Mimetype
- [META-INF}
  - container.xml
    - sample.epub의  `root folder` 위치를 알려주고, content.opf 파일의 위치를 지정한다. 
    - container.xml에서 지정된 내용에 따라서 [OEBPS] 폴더 명이 달라질 수 있다. 또한 container.xml에 적혀있는 파일명과 위치에 정확히 content.opf 파일이 존재해야한다. 즉 content.opf 파일명은 container.xml파일의 정보에 따라 변경 될 수 있다. 
- [OEBPS] ePub 의 `root folder` 역할을 하한다. 실제 콘텐츠가 위치하는 폴더이다.
  - content.opf 모든 파일의 위치와 콘텐츠에 대한 정보를 담고있다. 뷰어가 제일먼저 확인하는 파일로서 저작도구가 자동생성한다.
  - toc.ncx 책의 목차 정보를 담고있다. 저작도구가 자동생성한다.
  - [text]
  - [img]
  - [fonts]
  - [css]

