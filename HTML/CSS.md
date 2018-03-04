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