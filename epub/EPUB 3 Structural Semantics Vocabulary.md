## About this vocabulary

This vocabulary, a part of EPUB® 3, defines a set of properties relating to the description of structural semantics of written works. While the vocabulary is generally host language agnostic, it has been constructed primarily to enable semantic inflection of elements in the HTML vocabulary.

The *HTML usage context* fields indicate contexts in HTML documents where the given property is considered relevant. Authors may use the properties on HTML markup elements not specifically listed, but must ensure that the semantics they express represent a subset of the carrying element's semantics and do not attach an existing element's meaning to a semantically neutral element.

When processing HTML documents, Reading Systems may ignore such non-compliant properties, unless their usage context is explicitly overridden or extended by the host specification.

The *Usage Details* sections identify IDPF specifications that define or utilize the specified properties.

## Document partitions

- cover

  A section that introduces the work, often consisting of a marketing image, the title, author and publisher, and select quotes and reviews.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- frontmatter

  Preliminary material to the main content of a publication, such as tables of contents, dedications, etc.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- bodymatter

  The main content of a publication.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- backmatter

  Ancillary material occurring after the main content of a publication, such as indices, appendices, etc.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

## Document divisions

- volume

  A component of a collection.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- part

  A major structural division in a work that contains a set of related sections dealing with a particular subject, narrative arc or similar encapsulated theme.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- chapter

  A major thematic section of content in a work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- subchapter [DEPRECATED]

  A major sub-division of a chapter.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

- division

  A major structural division that may also appear as a substructure of a part (esp. in legislation).

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

## Document sections and components

Sections and components that typically occur in the publication bodymatter.

- abstract [DRAFT]

  A short summary of the principle ideas, concepts and conclusions of the work, or of a section or excerpt within it.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- foreword

  An introductory section that precedes the work, typically not written by the author of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- preface

  An introductory section that precedes the work, typically written by the author of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- prologue

  An introductory section that sets the background to a work, typically part of the narrative.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- introduction

  A preliminary section that typically introduces the scope or nature of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- preamble

  A section in the beginning of the work, typically containing introductory and/or explanatory prose regarding the scope or nature of the work's content

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- conclusion

  A concluding section or statement that summarizes the work or wraps up the narrative.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- epilogue

  A concluding section of narrative that wraps up or comments on the actions and events of the work, typically from a future perspective.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- afterword

  A closing statement from the author or a person of importance, typically providing insight into how the content came to be written, its significance, or related events that have transpired since its timeline.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- epigraph

  A quotation set at the start of the work or a section that establishes the theme or sets the mood.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

## Document navigation

- toc

  A navigational aid that provides an ordered list of links to the major sectional headings in the content. A table of contents may cover an entire work, or only a smaller section of it.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- toc-brief [DRAFT]

  An abridged version of the table of contents.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- landmarks

  A collection of references to well-known/recurring components within the publication

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- loa

  A listing of audio clips included in the work.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- loi

  A listing of illustrations included in the work.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- lot

  A listing of tables included in the work.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- lov

  A listing of video clips included in the work.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

## Document reference sections

- appendix

  A section of supplemental information located after the primary content that informs the content but is not central to it.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- colophon

  A short section of production notes particular to the edition (e.g., describing the typeface used), often located at the end of a work.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- credits [DRAFT]

  A collection of [credits](https://idpf.github.io/epub-vocabs/structure/#credit).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- keywords [DRAFT]

  A collection of [keywords](https://idpf.github.io/epub-vocabs/structure/#keyword).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

### Indexes

- index

  A navigational aid that provides a detailed list of links to key subjects, names and other important topics covered in the work.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [body](https://www.w3.org/TR/html/sections.html#the-body-element)

  Usage details: [EPUB Indexes – index property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-index)

- index-headnotes

  Narrative or other content to assist users in using the index.

  Required parent context: [index](https://idpf.github.io/epub-vocabs/structure/#index)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [header](https://www.w3.org/TR/html/sections.html#the-header-element)

  Usage details: [EPUB Indexes – index-headnotes property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-headnotes)

- index-legend

  List of symbols, abbreviations or special formatting used in the index, and their meanings.

  Required parent context: [index-headnotes](https://idpf.github.io/epub-vocabs/structure/#index-headnotes)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [dl](https://www.w3.org/TR/html/grouping-content.html#the-dl-element)

  Usage details: [EPUB Indexes – index-legend property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-legend)

- index-group

  Collection of consecutive main entries that share a common characteristic, for example the starting letter of the main entries.

  Required parent context: [index](https://idpf.github.io/epub-vocabs/structure/#index)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

  Usage details: [EPUB Indexes – index-group property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-group)

- index-entry-list

  Collection of consecutive main entries or subentries.

  Required parent context: [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry) , [index-group](https://idpf.github.io/epub-vocabs/structure/#index-group) and [index](https://idpf.github.io/epub-vocabs/structure/#index)

  HTML usage context: [ul](https://www.w3.org/TR/html/grouping-content.html#the-ul-element); this property is implied when the ul has an ancestor of index except within index-headnotes

  Usage details: [EPUB Indexes – index-entry-list property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-entry-list)

- index-entry

  One term with any attendant subentries, locators, cross references, and/or editorial note.

  Required parent context: [index-entry-list](https://idpf.github.io/epub-vocabs/structure/#index-entry-list)

  HTML usage context: [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element); this property is implied when parent ul is of type index-entry-list (implicit or explicit)

  Usage details: [EPUB Indexes – index-entry property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-entry)

- index-term

  Word, phrase, string, glyph or image representing the indexable content.

  Required parent context: [index-xref-related](https://idpf.github.io/epub-vocabs/structure/#index-xref-related) , [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry) and [index-xref-preferred](https://idpf.github.io/epub-vocabs/structure/#index-xref-preferred)

  HTML usage context: [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content); typically [span](https://www.w3.org/TR/html/textlevel-semantics.html#the-span-element)

  Usage details: [EPUB Indexes – index-term property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-term)

- index-editor-note

  Editorial note pertaining to a single entry.

  Required parent context: [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry)

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content)

  Usage details: [EPUB Indexes – index-editor-note property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-editor-note)

- index-locator

  A reference to an occurrence of the indexed content in the publication.

  Required parent context: [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry) , [index-locator-list](https://idpf.github.io/epub-vocabs/structure/#index-locator-list) and [index-locator-range](https://idpf.github.io/epub-vocabs/structure/#index-locator-range)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element); this property is implied when parent context is index-locator-list or index-locator-range

  Usage details: [EPUB Indexes – index-locator property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-locator)

- index-locator-list

  Collection of sequential locators or locator ranges.

  Required parent context: [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry)

  HTML usage context: [ul](https://www.w3.org/TR/html/grouping-content.html#the-ul-element)

  Usage details: [EPUB Indexes – index-locator-list property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-locator-list)

- index-locator-range

  A pair of locators that connects a term to a range of content rather than a single point.

  Required parent context: [index-locator-list](https://idpf.github.io/epub-vocabs/structure/#index-locator-list) and [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry)

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content)

  Usage details: [EPUB Indexes – index-locator-range property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-locator-range)

- index-xref-preferred

  Reference from one term to one or more preferred terms or term categories in an index (analogous to "See xxx").

  Required parent context: [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry)

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content)

  Usage details: [EPUB Indexes – index-xref-preferred property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-xref-preferred)

- index-xref-related

  Reference from one term to one or more related terms or term categories in an index (analogous to "See also xxx").

  Required parent context: [index-entry](https://idpf.github.io/epub-vocabs/structure/#index-entry)

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content)

  Usage details: [EPUB Indexes – index-xref-related property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-xref-related)

- index-term-category

  Word, phrase, string, glyph or image representing a category of terms in the index.

  Required parent context: [index-xref-related](https://idpf.github.io/epub-vocabs/structure/#index-xref-related) and [index-xref-preferred](https://idpf.github.io/epub-vocabs/structure/#index-xref-preferred)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

  Usage details: [EPUB Indexes – index-term-category property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-term-category)

- index-term-categories

  Wrapper for a list of the term categories belonging to an index.

  Required parent context: [index-xref-related](https://idpf.github.io/epub-vocabs/structure/#index-xref-related) and [index-xref-preferred](https://idpf.github.io/epub-vocabs/structure/#index-xref-preferred)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

  Usage details: [EPUB Indexes – index-term-categories property](http://www.idpf.org/epub/idx/epub-indexes.html#bb-term-categories)

### Glossaries

- glossary

  A brief dictionary of new, uncommon or specialized terms used in the content.

  HTML usage context: [dl](https://www.w3.org/TR/html/grouping-content.html#the-dl-element), [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- glossterm

  A glossary term.

  Required parent context: [glossary](https://idpf.github.io/epub-vocabs/structure/#glossary)

  HTML usage context: The glossterm property is implied on [dt](https://www.w3.org/TR/html/grouping-content.html#the-dt-element) elements within a [dl](https://www.w3.org/TR/html/grouping-content.html#the-dl-element)element marked with the [glossary](https://idpf.github.io/epub-vocabs/structure/#glossary) property.

- glossdef

  The definition of a [term in a glossary](https://idpf.github.io/epub-vocabs/structure/#glossterm).

  Required parent context: [glossary](https://idpf.github.io/epub-vocabs/structure/#glossary)

  HTML usage context: The glossdef property is implied on [dd](https://www.w3.org/TR/html/grouping-content.html#the-dd-element) elements within a [dl](https://www.w3.org/TR/html/grouping-content.html#the-dl-element)element marked with the [glossary](https://idpf.github.io/epub-vocabs/structure/#glossary) property.

### Bibliographies

- bibliography

  A list of external references cited in the work, which may be to print or digital sources.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- biblioentry

  A single reference to an external source in a [bibliography](https://idpf.github.io/epub-vocabs/structure/#bibliography). A biblioentry typically provides more detailed information than its reference(s) in the content (e.g., full title, author(s), publisher, publication date, etc.).

  Required parent context: [bibliography](https://idpf.github.io/epub-vocabs/structure/#bibliography)

  HTML usage context: [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

## Preliminary sections and components

Preliminary sections and components, typically occuring in the publication frontmatter.

- titlepage

  The title page of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- halftitlepage

  The half title page of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- copyright-page

  The copyright page of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- seriespage [DRAFT]

  Marketing section used to list related publications.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- acknowledgments

  A section or statement that acknowledges significant contributions by persons, organizations, governments and other entities to the realization of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- imprint

  Information relating to the publication or distribution of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- imprimatur

  A formal statement authorizing the publication of the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- contributors

  A list of contributors to the work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- other-credits

  Acknowledgments of previously published parts of the work, illustration credits, and permission to quote from copyrighted material.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- errata

  A set of corrections discovered after initial publication of the work, sometimes referred to as corrigenda.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- dedication

  An inscription at the front of the work, typically addressed in tribute to one or more persons close to the author.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- revision-history

  A record of changes made to a work.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

## Complementary content

- case-study [DRAFT]

  A detailed analysis of a specific topic.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- help [DEPRECATED]

  Helpful information that clarifies some aspect of the content or assists in its comprehension.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

  Replaced by: [tip](https://idpf.github.io/epub-vocabs/structure/#tip)

- marginalia [DEPRECATED]

  Content, both textual and graphical, that is offset in the margin.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

  Replaced by: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element)

- notice

  Notifies the user of consequences that might arise from an action or event. Examples include warnings, cautions and dangers.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- pullquote [DRAFT]

  A distinctively placed or highlighted quotation from the current content designed to draw attention to a topic or highlight a key point.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element)

- sidebar [DEPRECATED]

  Secondary or supplementary content, typically formatted as an inset or box.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element)

  Replaced by: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element)

- tip

  Helpful information that clarifies some aspect of the content or assists in its comprehension.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- warning [DEPRECATED]

  A warning.

  HTML usage context: [section](https://www.w3.org/TR/html/sections.html#the-section-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

  Replaced by: [notice](https://idpf.github.io/epub-vocabs/structure/#notice)

## Titles and headings

- halftitle

  The title appearing on the first page of a work or immediately before the text.

  Inherits from: [title](https://idpf.github.io/epub-vocabs/structure/#title)

  HTML usage context: [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content). This property should only appear once within the document scope.

- fulltitle

  The full title of the work, either simple, in which case it is identical to [title](https://idpf.github.io/epub-vocabs/structure/#title), or compound, in which case it consists of a [title](https://idpf.github.io/epub-vocabs/structure/#title) and a [subtitle](https://idpf.github.io/epub-vocabs/structure/#subtitle).

  Inherits from: [title](https://idpf.github.io/epub-vocabs/structure/#title)

  Same as: <http://purl.org/dc/terms/title>

  HTML usage context: [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content). This property should only appear once within the document scope.

- covertitle

  The title of the work as displayed on the work's cover.

  Inherits from: [title](https://idpf.github.io/epub-vocabs/structure/#title)

  HTML usage context: [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content). This property should only appear once within the document scope.

- title

  The primary name of a document component, such as a list, table or figure.

  HTML usage context: [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content) descendants of [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content).

- subtitle

  An explanatory or alternate title for the work, or a section or component within it.

  Inherits from: [title](https://idpf.github.io/epub-vocabs/structure/#title)

  HTML usage context: [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content) descendants of [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content), [paragraphs](https://www.w3.org/TR/html/grouping-content.html#the-p-element), [divs](https://www.w3.org/TR/html/grouping-content.html#the-div-element)

- label [DRAFT]

  The text label that precedes an [ordinal](https://idpf.github.io/epub-vocabs/structure/#ordinal) in a component title (e.g., 'Chapter', 'Part', 'Figure', 'Table').

  Inherits from: [title](https://idpf.github.io/epub-vocabs/structure/#title)

  HTML usage context: [Phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content) descendants of [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content), [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element) and [figcaption](https://www.w3.org/TR/html/grouping-content.html#the-figcaption-element)

- ordinal [DRAFT]

  An ordinal specifier for a component in a sequence of components (e.g., '1', 'IV', 'B-1').

  Inherits from: [title](https://idpf.github.io/epub-vocabs/structure/#title)

  HTML usage context: [Phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content) descendants of [heading content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content), [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element) and [figcaption](https://www.w3.org/TR/html/grouping-content.html#the-figcaption-element)

- bridgehead

  A structurally insignificant heading that does not contribute to the hierarchical structure of the work.

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content), typically [p](https://www.w3.org/TR/html/grouping-content.html#the-p-element), [div](https://www.w3.org/TR/html/grouping-content.html#the-div-element) or [span](https://www.w3.org/TR/html/textlevel-semantics.html#the-span-element)

## Educational content

### Learning objectives

- learning-objective

  An explicit designation or description of a learning objective or a reference to an explicit learning objective.

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- learning-objectives [DRAFT]

  A collection of [learning-objectives](https://idpf.github.io/epub-vocabs/structure/#learning-objective).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- learning-outcome [DRAFT]

  The understanding or ability a student is expected to achieve as a result of a lesson or activity.

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content)

- learning-outcomes [DRAFT]

  A collection of [learing-outcomes](https://idpf.github.io/epub-vocabs/structure/#learning-outcome).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- learning-resource

  A resource provided to enhance learning, or a reference to such a resource.

  HTML usage context: [flow content](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content)

- learning-resources [DRAFT]

  A collection of [learning-resources](https://idpf.github.io/epub-vocabs/structure/#learning-resource).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- learning-standard [DRAFT]

  A formal set of expectations or requirements typically issued by a government or a standards body.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- learning-standards [DRAFT]

  A collection of [learning-standards](https://idpf.github.io/epub-vocabs/structure/#learning-standard).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

### Testing

- answer [DRAFT]

  The component of a self-assessment problem that provides the answer to the question.

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- answers [DRAFT]

  A collection of [answers](https://idpf.github.io/epub-vocabs/structure/#answer).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- assessment

  A test, quiz, or other activity that helps measure a student's understanding of what is being taught.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- assessments [DRAFT]

  A collection of [assessments](https://idpf.github.io/epub-vocabs/structure/#assessment).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- feedback [DRAFT]

  Instruction to the reader based on the result of an assessment.

  HTML usage context: [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- fill-in-the-blank-problem [DRAFT]

  A problem that requires the reader to input a text answer to complete a sentence, statement or similar.

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- general-problem [DRAFT]

  A problem with a free-form solution.

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- qna

  A section of content structured as a series of questions and answers, such as an interview or list of frequently asked questions.

  HTML usage context: lists or [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- match-problem [DRAFT]

  A problem that requires the reader to match the contents of one list with the corresponding items in another list.

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- multiple-choice-problem [DRAFT]

  A problem with a set of potential answers to choose from ‒ some, all or none of which may be correct.

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- practice [DRAFT]

  A review exercise or sample.

  See also: [practices](https://idpf.github.io/epub-vocabs/structure/#practices)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- question [DRAFT]

  The component of a self-assessment problem that identifies the question to be solved.

  HTML usage context: [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

- practices [DRAFT]

  A collection of [practices](https://idpf.github.io/epub-vocabs/structure/#practice).

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- true-false-problem [DRAFT]

  A problem with either a true or false answer.

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [grouping content](https://www.w3.org/TR/html/grouping-content.html#grouping-content)

## Comics

- panel

  An individual frame, or drawing.

  HTML usage context: [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element)

  Usage details: [EPUB Region-Based Navigation](http://www.idpf.org/epub/renditions/region-nav)

- panel-group

  A group of [panels](https://idpf.github.io/epub-vocabs/structure/#panel) (e.g., a strip).

  HTML usage context: [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element)

  Usage details: [EPUB Region-Based Navigation](http://www.idpf.org/epub/renditions/region-nav)

- balloon

  An area in a comic [panel](https://idpf.github.io/epub-vocabs/structure/#panel) that contains the words, spoken or thought, of a character.

  HTML usage context: [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element)

  Usage details: [EPUB Region-Based Navigation](http://www.idpf.org/epub/renditions/region-nav)

- text-area

  An area of text in a comic [panel](https://idpf.github.io/epub-vocabs/structure/#panel). Used to represent titles, narrative text, character dialogue (inside a [balloon](https://idpf.github.io/epub-vocabs/structure/#balloon) or not) and similar.

  HTML usage context: [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element)

  Usage details: [EPUB Region-Based Navigation](http://www.idpf.org/epub/renditions/region-nav)

- sound-area

  An area of text in a comic [panel](https://idpf.github.io/epub-vocabs/structure/#panel) that represents a sound.

  HTML usage context: [li](https://www.w3.org/TR/html/grouping-content.html#the-li-element)

  Usage details: [EPUB Region-Based Navigation](http://www.idpf.org/epub/renditions/region-nav)

## Notes and annotations

- annotation [DEPRECATED]

  Explanatory information about passages in the work.

  Inherits from: [xhv:complementary](http://www.w3.org/1999/xhtml/vocab/#complementary)

  HTML usage context: [aside](https://www.w3.org/TR/html/sections.html#the-aside-element), [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

  Replaced by: [Open Annotation in EPUB](http://www.idpf.org/epub/oa)

- note [DEPRECATED]

  A note. This property does not carry spatial positioning semantics, as do the [footnote](https://idpf.github.io/epub-vocabs/structure/#footnote)and [endnote](https://idpf.github.io/epub-vocabs/structure/#endnote) properties. It can be used to identify footnotes, endnotes, marginal notes, inline notes, and similar when legacy naming conventions are not desired.

  HTML usage context: On the [aside](https://www.w3.org/TR/html/sections.html#the-aside-element) element when identifying a single note, or on descendants of sectioning content when identifying individual notes in a group (refer to [footnotes](https://idpf.github.io/epub-vocabs/structure/#footnotes) and [endnotes](https://idpf.github.io/epub-vocabs/structure/#endnotes)).

  Replaced by: [footnote](https://idpf.github.io/epub-vocabs/structure/#footnote), [endnote](https://idpf.github.io/epub-vocabs/structure/#endnote)

- footnote

  Ancillary information, such as a citation or commentary, that provides additional context to a referenced passage of text.

  See also: [footnotes](https://idpf.github.io/epub-vocabs/structure/#footnotes)

  HTML usage context: On the [aside](https://www.w3.org/TR/html/sections.html#the-aside-element) element when identifying a single footnote, or on descendants of sectioning content when identifying individual footnotes in a group (refer to [footnotes](https://idpf.github.io/epub-vocabs/structure/#footnotes) and [endnotes](https://idpf.github.io/epub-vocabs/structure/#endnotes)).

- endnote

  One of a collection of notes that occur at the end of a work, or a section within it, that provides additional context to a referenced passage of text.

  See also: [endnotes](https://idpf.github.io/epub-vocabs/structure/#endnotes)

  HTML usage context: On the [aside](https://www.w3.org/TR/html/sections.html#the-aside-element) element when identifying a single endnote, or on descendants of sectioning content when identifying individual endnotes in a group (refer to [footnotes](https://idpf.github.io/epub-vocabs/structure/#footnotes) and [endnotes](https://idpf.github.io/epub-vocabs/structure/#endnotes)).

- rearnote [DEPRECATED]

  A note appearing in the rear (backmatter) of the work, or at the end of a section.

  See also: [rearnotes](https://idpf.github.io/epub-vocabs/structure/#rearnotes)

  HTML usage context: On the [aside](https://www.w3.org/TR/html/sections.html#the-aside-element) element when identifying a single rearnote, or on descendants of sectioning content when identifying individual rearnotes in a group (refer to [footnotes](https://idpf.github.io/epub-vocabs/structure/#footnotes) and [rearnotes](https://idpf.github.io/epub-vocabs/structure/#rearnotes)).

  Replaced by: [endnote](https://idpf.github.io/epub-vocabs/structure/#endnote)

- footnotes

  A collection of [footnotes](https://idpf.github.io/epub-vocabs/structure/#footnote).

  See also: [footnote](https://idpf.github.io/epub-vocabs/structure/#footnote)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- endnotes

  A collection of notes at the end of a work or a section within it.

  See also: [endnote](https://idpf.github.io/epub-vocabs/structure/#endnote)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

- rearnotes [DEPRECATED]

  A collection of notes appearing at the rear (backmatter) of the work, or at the end of a section.

  See also: [rearnote](https://idpf.github.io/epub-vocabs/structure/#rearnote)

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

  Replaced by: [endnotes](https://idpf.github.io/epub-vocabs/structure/#endnotes)

## References

- annoref [DEPRECATED]

  A reference to an annotation.

  Inherits from: [xhv:link](http://www.w3.org/1999/xhtml/vocab/#link)

  See also: [annotation](https://idpf.github.io/epub-vocabs/structure/#annotation)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

  Replaced by: [Open Annotation in EPUB](http://www.idpf.org/epub/oa)

- biblioref [DRAFT]

  A reference to a [bibliography entry](https://idpf.github.io/epub-vocabs/structure/#biblioentry).

  Inherits from: [xhv:link](http://www.w3.org/1999/xhtml/vocab/#link)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

- glossref [DRAFT]

  A reference to a [glossary definition](https://idpf.github.io/epub-vocabs/structure/#glossdef).

  Inherits from: [xhv:link](http://www.w3.org/1999/xhtml/vocab/#link)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

- noteref

  A reference to a note, typically appearing as a superscripted number or symbol in the main body of text.

  Inherits from: [xhv:link](http://www.w3.org/1999/xhtml/vocab/#link)

  See also: [note](https://idpf.github.io/epub-vocabs/structure/#note)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

- backlink [DRAFT]

  A link that allows the user to return to a related location in the content (e.g., from a [footnote](https://idpf.github.io/epub-vocabs/structure/#footnote) to its reference or from a [glossary definition](https://idpf.github.io/epub-vocabs/structure/#glossdef) to where a [term](https://idpf.github.io/epub-vocabs/structure/#glossterm) is used).

  Inherits from: [xhv:link](http://www.w3.org/1999/xhtml/vocab/#link)

  HTML usage context: [a](https://www.w3.org/TR/html/textlevel-semantics.html#the-a-element)

## Document text

Terms for describing components at the phrasing level.

- credit [DRAFT]

  An acknowledgment of the source of integrated content from third-party sources, such as photos. Typically identifies the creator, copyright and any restrictions on reuse.

  HTML usage context: [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- keyword

  A key word or phrase.

  HTML usage context: [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- topic-sentence

  A phrase or sentence serving as an introductory summary of the containing paragraph.

  HTML usage context: [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

- concluding-sentence

  A phrase or sentence serving as a concluding summary of the containing paragraph.

  HTML usage context: [phrasing content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content)

## Pagination

- pagebreak

  A separator denoting the position before which a break occurs between two contiguous pages in a statically paginated version of the content.

  HTML usage context: [phrasing](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content) and [flow](https://www.w3.org/TR/html/dom.html#kinds-of-content-flow-content) content, where the value of the carrying elements title attribute takes precedence over element content for the purposes of representing the pagebreak value

- page-list

  A navigational aid that provides a list of links to the [pagebreaks](https://idpf.github.io/epub-vocabs/structure/#pagebreak) in the content.

  HTML usage context: [sectioning content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content)

## Tables

- table

  A structure containing data or content laid out in tabular form.

  HTML usage context: Deprecated

  Media Overlays usage context: Identifies a [seq](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-seq-elem) or [par](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-par-elem) as an escapable or skippable table structure.

- table-row

  A row of data or content in a tabular structure.

  HTML usage context: Deprecated

  Media Overlays usage context: Identifies a [seq](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-seq-elem) or [par](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-par-elem) as an escapable or skippable table row.

- table-cell

  A single cell of tabular data or content.

  HTML usage context: Deprecated

  Media Overlays usage context: Identifies a [seq](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-seq-elem) or [par](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-par-elem) as an escapable or skippable table cell.

## Lists

- list

  A structure that contains an enumeration of related content items.

  HTML usage context: Deprecated

  Media Overlays usage context: Identifies a [seq](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-seq-elem) or [par](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-par-elem) as an escapable or skippable list structure.

- list-item

  A single item in an enumeration.

  HTML usage context: Deprecated

  Media Overlays usage context: Identifies a [seq](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-seq-elem) or [par](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-par-elem) as an escapable or skippable list item.

## Figures

- figure

  An illustration, diagram, photo, code listing or similar, referenced from the text of a work, and typically annotated with a title, caption and/or credits.

  HTML usage context: Deprecated

  Media Overlays usage context: Identifies a [seq](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-seq-elem) or [par](http://www.idpf.org/epub/latest/mediaoverlays#sec-smil-par-elem) as an escapable or skippable figure.