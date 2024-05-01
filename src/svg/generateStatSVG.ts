import { AllQuestionsCountNode, SubmissionCountNode } from "../types";

export const generateStatSVG = (
  allQuestionsCount: AllQuestionsCountNode[],
  acSubmissionNum: SubmissionCountNode[]
) =>
  `
  <svg class="top-level-svg-wrapper" xmlns="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  width="400" height="186">
  <style>
  @font-face {
    font-family:swiper-icons;
    font-style:normal;
    font-weight:400;
    src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA")
  }
  :root {
    --swiper-theme-color:#007aff
  }
  .swiper {
    list-style:none;
    margin-left:auto;
    margin-right:auto;
    overflow:hidden;
    padding:0;
    position:relative;
    z-index:1
  }
  .swiper-vertical>.swiper-wrapper {
    flex-direction:column
  }
  .swiper-wrapper {
    box-sizing:initial;
    display:flex;
    height:100%;
    position:relative;
    transition-property:transform;
    width:100%;
    z-index:1
  }
  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform:translateZ(0)
  }
  .swiper-pointer-events {
    touch-action:pan-y
  }
  .swiper-pointer-events.swiper-vertical {
    touch-action:pan-x
  }
  .swiper-slide {
    flex-shrink:0;
    height:100%;
    position:relative;
    transition-property:transform;
    width:100%
  }
  .swiper-slide-invisible-blank {
    visibility:hidden
  }
  .swiper-autoheight,
  .swiper-autoheight .swiper-slide {
    height:auto
  }
  .swiper-autoheight .swiper-wrapper {
    align-items:flex-start;
    transition-property:transform,height
  }
  .swiper-backface-hidden .swiper-slide {
    backface-visibility:hidden;
    transform:translateZ(0)
  }
  .swiper-3d,
  .swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective:1200px
  }
  .swiper-3d .swiper-cube-shadow,
  .swiper-3d .swiper-slide,
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top,
  .swiper-3d .swiper-wrapper {
    transform-style:preserve-3d
  }
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top {
    height:100%;
    left:0;
    pointer-events:none;
    position:absolute;
    top:0;
    width:100%;
    z-index:10
  }
  .swiper-3d .swiper-slide-shadow {
    background:#00000026
  }
  .swiper-3d .swiper-slide-shadow-left {
    background-image:linear-gradient(270deg,#00000080,#0000)
  }
  .swiper-3d .swiper-slide-shadow-right {
    background-image:linear-gradient(90deg,#00000080,#0000)
  }
  .swiper-3d .swiper-slide-shadow-top {
    background-image:linear-gradient(0deg,#00000080,#0000)
  }
  .swiper-3d .swiper-slide-shadow-bottom {
    background-image:linear-gradient(180deg,#00000080,#0000)
  }
  .swiper-css-mode>.swiper-wrapper {
    -ms-overflow-style:none;
    overflow:auto;
    scrollbar-width:none
  }
  .swiper-css-mode>.swiper-wrapper::-webkit-scrollbar {
    display:none
  }
  .swiper-css-mode>.swiper-wrapper>.swiper-slide {
    scroll-snap-align:start start
  }
  .swiper-horizontal.swiper-css-mode>.swiper-wrapper {
    scroll-snap-type:x mandatory
  }
  .swiper-vertical.swiper-css-mode>.swiper-wrapper {
    scroll-snap-type:y mandatory
  }
  .swiper-centered>.swiper-wrapper:before {
    content:"";
    flex-shrink:0;
    order:9999
  }
  .swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child {
    margin-inline-start:var(--swiper-centered-offset-before)
  }
  .swiper-centered.swiper-horizontal>.swiper-wrapper:before {
    height:100%;
    min-height:1px;
    width:var(--swiper-centered-offset-after)
  }
  .swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child {
    margin-block-start:var(--swiper-centered-offset-before)
  }
  .swiper-centered.swiper-vertical>.swiper-wrapper:before {
    height:var(--swiper-centered-offset-after);
    min-width:1px;
    width:100%
  }
  .swiper-centered>.swiper-wrapper>.swiper-slide {
    scroll-snap-align:center center;
    scroll-snap-stop:always
  }
  .swiper-container.swiper-container-horizontal .swiper-pagination {
    bottom:2px;
    transform-origin:bottom center
  }
  .swiper-container.swiper-container-vertical .swiper-pagination {
    align-items:center;
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:center;
    left:8px;
    right:unset;
    top:0;
    transform:unset;
    transform-origin:center
  }
  .swiper-container.swiper-container-vertical .swiper-pagination .swiper-pagination-bullet {
    margin:0
  }
  .swiper-container.swiper-container-vertical .swiper-pagination .swiper-pagination-bullet:not(:last-of-type) {
    margin-bottom:6px
  }
  .swiper-container .swiper-pagination {
    transition:all .3s
  }
  .swiper-container .swiper-pagination .swiper-pagination-bullet {
    background:#3c3c434d;
    box-shadow:0 4px 16px #00000014,0 2px 4px #0000001a;
    cursor:pointer;
    height:6px;
    opacity:1;
    width:6px
  }
  .swiper-container .swiper-pagination .swiper-pagination-bullet-active {
    background:#262626bf;
    opacity:1
  }
  :is(.dark .swiper-container .swiper-pagination .swiper-pagination-bullet-active) {
    background-color:#eff2f699
  }
  .swiper-container:hover .swiper-pagination {
    transform:scale(1.63)
  }
  .swiper-container:hover .swiper-pagination .swiper-pagination-bullet {
    transform:scale(1.2)
  }
  
  .rc-cascader-menus {
    color:hsl(var(--sd-popover-foreground));
    display:flex
  }
  .rc-cascader-menus-hidden {
    display:none
  }
  .rc-cascader-menu {
    border-color:hsl(var(--sd-border));
    border-right-width:1px;
    display:flex;
    flex-direction:column;
    gap:.25rem;
    max-height:260px;
    overflow-y:auto;
    padding:5px;
    width:120px
  }
  .rc-cascader-menu:last-child {
    border-color:#0000
  }
  .rc-cascader-menu-item {
    align-items:center;
    border-radius:var(--sd-radius);
    cursor:pointer;
    display:flex;
    font-size:.875rem;
    justify-content:space-between;
    line-height:1.25rem;
    padding:.375rem .5rem
  }
  .rc-cascader-menu-item:hover {
    background-color:hsl(var(--sd-accent))
  }
  .rc-cascader-menu-item-disabled {
    color:hsl(var(--sd-muted-foreground));
    cursor:not-allowed
  }
  .rc-cascader-menu-item-disabled:hover {
    background-color:initial
  }
  .rc-cascader-menu-item-loading-icon {
    flex:none;
    height:1rem;
    width:1rem
  }
  .rc-cascader-menu-item-active {
    background-color:hsl(var(--sd-accent))
  }
  .rc-cascader-menu-item-content {
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .rc-cascader-menu-item-expand-icon {
    flex:none;
    height:1rem;
    width:1rem
  }
  
  /*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/
  *,
  :after,
  :before {
    border:0 solid;
    box-sizing:border-box
  }
  :after,
  :before {
    --tw-content:""
  }
  html {
    -webkit-text-size-adjust:100%;
    font-feature-settings:normal;
    font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-variation-settings:normal;
    line-height:1.5;
    -moz-tab-size:4;
    tab-size:4
  }
  body {
    line-height:inherit;
    margin:0
  }
  hr {
    border-top-width:1px;
    color:inherit;
    height:0
  }
  abbr:where([title]) {
    -webkit-text-decoration:underline dotted;
    text-decoration:underline dotted
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size:inherit;
    font-weight:inherit
  }
  a {
    color:inherit;
    text-decoration:inherit
  }
  b,
  strong {
    font-weight:bolder
  }
  code,
  kbd,
  pre,
  samp {
    font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-size:1em
  }
  small {
    font-size:80%
  }
  sub,
  sup {
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:initial
  }
  sub {
    bottom:-.25em
  }
  sup {
    top:-.5em
  }
  table {
    border-collapse:collapse;
    border-color:inherit;
    text-indent:0
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color:inherit;
    font-family:inherit;
    font-size:100%;
    font-weight:inherit;
    line-height:inherit;
    margin:0;
    padding:0
  }
  button,
  select {
    text-transform:none
  }
  [type=button],
  [type=reset],
  [type=submit],
  button {
    -webkit-appearance:button;
    background-color:initial;
    background-image:none
  }
  :-moz-focusring {
    outline:auto
  }
  :-moz-ui-invalid {
    box-shadow:none
  }
  progress {
    vertical-align:initial
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height:auto
  }
  [type=search] {
    -webkit-appearance:textfield;
    outline-offset:-2px
  }
  ::-webkit-search-decoration {
    -webkit-appearance:none
  }
  ::-webkit-file-upload-button {
    -webkit-appearance:button;
    font:inherit
  }
  summary {
    display:list-item
  }
  blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  pre {
    margin:0
  }
  fieldset,
  menu,
  ol,
  ul {
    margin:0;
    padding:0
  }
  menu,
  ol,
  ul {
    list-style:none
  }
  textarea {
    resize:vertical
  }
  input::placeholder,
  textarea::placeholder {
    color:#9ca3af;
    opacity:1
  }
  [role=button],
  button {
    cursor:pointer
  }
  :disabled {
    cursor:default
  }
  audio,
  canvas,
  embed,
  iframe,
  img,
  object,
  svg,
  video {
    display:block;
    vertical-align:middle
  }
  img,
  video {
    height:auto;
    max-width:100%
  }
  [hidden] {
    display:none
  }
  body {
    font-feature-settings:"tnum";
    font-size:14px;
    font-variant:tabular-nums;
    height:100%;
    width:100%
  }
  [tabindex="-1"]:focus {
    outline:none!important
  }
  [role=button],
  a,
  area,
  button,
  input:not([type=range]),
  label,
  select,
  summary,
  textarea {
    touch-action:manipulation
  }
  a {
    outline:none
  }
  pre {
    overflow:auto
  }
  input[type=number],
  input[type=password],
  input[type=text],
  textarea {
    -webkit-appearance:none
  }
  input[type=date],
  input[type=datetime-local],
  input[type=month],
  input[type=time] {
    -webkit-appearance:listbox
  }
  svg:not(:root) {
    overflow:hidden
  }
  th {
    text-align:inherit
  }
  ::selection {
    background:#1890ff;
    color:#fff
  }
  body {
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    line-height:1.5;
    min-height:100%;
    position:relative;
    transition-duration:.2s;
    transition-property:none
  }
  html {
    touch-action:manipulation
  }
  *,
  :after,
  :before {
    word-wrap:break-word
  }
  main {
    display:block
  }
  hr {
    box-sizing:initial;
    overflow:visible
  }
  code,
  kbd,
  pre,
  samp {
    font-family:SFMono-Regular,Menlo,Monaco,Consolas,monospace
  }
  a {
    background-color:initial
  }
  abbr[title] {
    border-bottom:none;
    -webkit-text-decoration:underline dotted;
    text-decoration:underline dotted
  }
  b,
  strong {
    font-weight:700
  }
  img {
    border-style:none
  }
  button,
  input {
    overflow:visible
  }
  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style:none;
    padding:0
  }
  legend {
    box-sizing:border-box;
    color:inherit;
    display:table;
    max-width:100%;
    padding:0;
    white-space:normal
  }
  textarea {
    overflow:auto
  }
  [type=checkbox],
  [type=radio] {
    box-sizing:border-box;
    padding:0
  }
  [type=number]::-webkit-inner-spin-button,
  [type=number]::-webkit-outer-spin-button {
    -webkit-appearance:none!important
  }
  input[type=number] {
    -moz-appearance:textfield
  }
  details {
    display:block
  }
  template {
    display:none
  }
  button::-moz-focus-inner {
    border:0!important
  }
  [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
    outline:none
  }
  select::-ms-expand {
    display:none
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  :is(.dark h1),
  :is(.dark h2),
  :is(.dark h3),
  :is(.dark h4),
  :is(.dark h5),
  :is(.dark h6) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  body {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark body) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  body {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  :is(.dark body) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  *,
  :after,
  :before {
    border-color:hsl(var(--sd-border))
  }
  button,
  button:focus {
    outline:2px solid #0000;
    outline-offset:2px
  }
  [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance:none
  }
  [hidden] {
    display:none!important
  }
  @font-face {
    font-family:ZhengDao;
    font-weight:500;
    src:url(https://static.leetcode.cn/upload-data/font/PangMenZhengDao.otf) format("opentype"),
    url(https://static.leetcode.cn/upload-data/font/PangMenZhengDao.woff) format("woff")
  }
  @font-face {
    font-family:ZhengDao2;
    font-weight:500;
    src:url(https://static.leetcode.cn/upload-data/font/PangMenZhengDao.otf) format("opentype"),
    url(https://static.leetcode.cn/upload-data/font/PangMenZhengDao.woff2) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:normal;
    font-weight:100;
    src:url(/fonts/Typo_Round_Thin.otf) format("opentype"),
    url(/fonts/Typo_Round_Thin.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:italic;
    font-weight:100;
    src:url(/fonts/Typo_Round_Thin_Italic.otf) format("opentype"),
    url(/fonts/Typo_Round_Thin_Italic.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:normal;
    font-weight:300;
    src:url(/fonts/Typo_Round_Light.otf) format("opentype"),
    url(/fonts/Typo_Round_Light.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:italic;
    font-weight:300;
    src:url(/fonts/Typo_Round_Light_Italic.otf) format("opentype"),
    url(/fonts/Typo_Round_Light_Italic.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:normal;
    font-weight:400;
    src:url(/fonts/Typo_Round_Regular.otf) format("opentype"),
    url(/fonts/Typo_Round_Regular.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:italic;
    font-weight:400;
    src:url(/fonts/Typo_Round_Italic.otf) format("opentype"),
    url(/fonts/Typo_Round_Italic.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:normal;
    font-weight:700;
    src:url(/fonts/Typo_Round_Bold.otf) format("opentype"),
    url(/fonts/Typo_Round_Bold.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:TypoRound;
    font-style:italic;
    font-weight:700;
    src:url(/fonts/Typo_Round_Bold_Italic.otf) format("opentype"),
    url(/fonts/Typo_Round_Bold_Italic.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:Menlo;
    font-style:normal;
    font-weight:400;
    src:url(/fonts/Menlo_Regular.woff) format("woff")
  }
  @font-face {
    font-display:swap;
    font-family:lc-icon;
    font-style:normal;
    font-weight:400;
    src:url(/fonts/lc-icon.woff) format("woff")
  }
  @font-face {
    font-family:SourceHan;
    font-weight:400;
    src:url(/fonts/SourceHanSansCN-Normal.otf) format("opentype")
  }
  *,
  :after,
  :before {
    --tw-border-spacing-x:0;
    --tw-border-spacing-y:0;
    --tw-translate-x:0;
    --tw-translate-y:0;
    --tw-rotate:0;
    --tw-skew-x:0;
    --tw-skew-y:0;
    --tw-scale-x:1;
    --tw-scale-y:1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness:proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:#3b82f680;
    --tw-ring-offset-shadow:0 0 #0000;
    --tw-ring-shadow:0 0 #0000;
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: 
  }
  ::-webkit-backdrop {
    --tw-border-spacing-x:0;
    --tw-border-spacing-y:0;
    --tw-translate-x:0;
    --tw-translate-y:0;
    --tw-rotate:0;
    --tw-skew-x:0;
    --tw-skew-y:0;
    --tw-scale-x:1;
    --tw-scale-y:1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness:proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:#3b82f680;
    --tw-ring-offset-shadow:0 0 #0000;
    --tw-ring-shadow:0 0 #0000;
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: 
  }
  ::backdrop {
    --tw-border-spacing-x:0;
    --tw-border-spacing-y:0;
    --tw-translate-x:0;
    --tw-translate-y:0;
    --tw-rotate:0;
    --tw-skew-x:0;
    --tw-skew-y:0;
    --tw-scale-x:1;
    --tw-scale-y:1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness:proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:#3b82f680;
    --tw-ring-offset-shadow:0 0 #0000;
    --tw-ring-shadow:0 0 #0000;
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: 
  }
  .\!container {
    width:100%!important
  }
  .container {
    width:100%
  }
  @media (min-width:600px) {
    .\!container {
      max-width:600px!important
    }
    .container {
      max-width:600px
    }
  }
  @media (min-width:640px) {
    .\!container {
      max-width:640px!important
    }
    .container {
      max-width:640px
    }
  }
  @media (min-width:680px) {
    .\!container {
      max-width:680px!important
    }
    .container {
      max-width:680px
    }
  }
  @media (min-width:768px) {
    .\!container {
      max-width:768px!important
    }
    .container {
      max-width:768px
    }
  }
  @media (min-width:840px) {
    .\!container {
      max-width:840px!important
    }
    .container {
      max-width:840px
    }
  }
  @media (min-width:920px) {
    .\!container {
      max-width:920px!important
    }
    .container {
      max-width:920px
    }
  }
  @media (min-width:1024px) {
    .\!container {
      max-width:1024px!important
    }
    .container {
      max-width:1024px
    }
  }
  @media (min-width:1200px) {
    .\!container {
      max-width:1200px!important
    }
    .container {
      max-width:1200px
    }
  }
  @media (min-width:1280px) {
    .\!container {
      max-width:1280px!important
    }
    .container {
      max-width:1280px
    }
  }
  @media (min-width:1536px) {
    .\!container {
      max-width:1536px!important
    }
    .container {
      max-width:1536px
    }
  }
  .aspect-h-1 {
    --tw-aspect-h:1
  }
  .aspect-w-2 {
    --tw-aspect-w:2;
    padding-bottom:calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);
    position:relative
  }
  .aspect-w-2>* {
    bottom:0;
    height:100%;
    left:0;
    position:absolute;
    right:0;
    top:0;
    width:100%
  }
  .monaco-editor,
  .monaco-editor .inputarea.ime-input,
  .monaco-editor .margin,
  .monaco-editor .monaco-editor-background {
    background:var(--layer-01)!important
  }
  .monaco-editor .scroll-decoration {
    box-shadow:none!important
  }
  .monaco-editor .line-numbers {
    word-wrap:normal!important
  }
  .cm-s-easymde .cm-comment,
  .dark .editor-preview,
  .dark .editor-toolbar>.\!active,
  .dark .editor-toolbar>.active,
  .editor-preview pre,
  .editor-toolbar>button:hover {
    --tw-bg-opacity:1;
    background-color:rgb(28 28 28/var(--tw-bg-opacity))
  }
  .notification-item-container a {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  :is(.dark .notification-item-container a) {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  .\!card {
    --tw-bg-opacity:1;
    --tw-shadow:0px 1px 3px #0000000a,0px 2px 8px #00000014;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 2px 8px var(--tw-shadow-color);
    background-color:rgb(255 255 255/var(--tw-bg-opacity));
    border-radius:13px;
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    overflow:hidden
  }
  :is(.dark .\!card) {
    --tw-bg-opacity:1;
    --tw-shadow:0px 1px 3px #0000003d,0px 2px 8px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 2px 8px var(--tw-shadow-color);
    background-color:rgb(48 48 48/var(--tw-bg-opacity));
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .card {
    --tw-bg-opacity:1;
    --tw-shadow:0px 1px 3px #0000000a,0px 2px 8px #00000014;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 2px 8px var(--tw-shadow-color);
    background-color:rgb(255 255 255/var(--tw-bg-opacity));
    border-radius:13px;
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    overflow:hidden
  }
  :is(.dark .card) {
    --tw-bg-opacity:1;
    --tw-shadow:0px 1px 3px #0000003d,0px 2px 8px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 2px 8px var(--tw-shadow-color);
    background-color:rgb(10 11 15/var(--tw-bg-opacity));
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .sr-only {
    clip:rect(0,0,0,0);
    border-width:0;
    height:1px;
    margin:-1px;
    overflow:hidden;
    padding:0;
    position:absolute;
    white-space:nowrap;
    width:1px
  }
  .pointer-events-none {
    pointer-events:none
  }
  .pointer-events-auto {
    pointer-events:auto
  }
  .\!visible {
    visibility:visible!important
  }
  .visible {
    visibility:visible
  }
  .invisible {
    visibility:hidden
  }
  .collapse {
    visibility:collapse
  }
  .static {
    position:static
  }
  .\!fixed {
    position:fixed!important
  }
  .fixed {
    position:fixed
  }
  .\!absolute {
    position:absolute!important
  }
  .absolute {
    position:absolute
  }
  .relative {
    position:relative
  }
  .sticky {
    position:sticky
  }
  .inset-0 {
    inset:0
  }
  .inset-\[50\%\] {
    inset:50%
  }
  .inset-x-0 {
    left:0;
    right:0
  }
  .inset-y-0 {
    bottom:0;
    top:0
  }
  .\!left-1\/2 {
    left:50%!important
  }
  .-bottom-0 {
    bottom:0
  }
  .-bottom-0\.5 {
    bottom:-.125rem
  }
  .-bottom-1 {
    bottom:-.25rem
  }
  .-bottom-2 {
    bottom:-.5rem
  }
  .-bottom-6 {
    bottom:-1.5rem
  }
  .-bottom-\[1px\] {
    bottom:-1px
  }
  .-left-1 {
    left:-.25rem
  }
  .-left-2 {
    left:-.5rem
  }
  .-left-3 {
    left:-.75rem
  }
  .-left-3\.5 {
    left:-.875rem
  }
  .-left-6 {
    left:-1.5rem
  }
  .-right-0 {
    right:0
  }
  .-right-0\.5 {
    right:-.125rem
  }
  .-right-1 {
    right:-.25rem
  }
  .-right-1\.5 {
    right:-.375rem
  }
  .-right-11 {
    right:-2.75rem
  }
  .-right-16 {
    right:-4rem
  }
  .-right-2 {
    right:-.5rem
  }
  .-right-3 {
    right:-.75rem
  }
  .-right-3\.5 {
    right:-.875rem
  }
  .-right-6 {
    right:-1.5rem
  }
  .-right-\[26px\] {
    right:-26px
  }
  .-right-px {
    right:-1px
  }
  .-top-0 {
    top:0
  }
  .-top-0\.5 {
    top:-.125rem
  }
  .-top-1 {
    top:-.25rem
  }
  .-top-2 {
    top:-.5rem
  }
  .-top-3 {
    top:-.75rem
  }
  .-top-3\.5 {
    top:-.875rem
  }
  .-top-8 {
    top:-2rem
  }
  .-top-\[106px\] {
    top:-106px
  }
  .-top-\[137px\] {
    top:-137px
  }
  .-top-\[177px\] {
    top:-177px
  }
  .-top-\[242px\] {
    top:-242px
  }
  .-top-\[3px\] {
    top:-3px
  }
  .-top-\[5px\] {
    top:-5px
  }
  .-top-px {
    top:-1px
  }
  .bottom-0 {
    bottom:0
  }
  .bottom-1 {
    bottom:.25rem
  }
  .bottom-10 {
    bottom:2.5rem
  }
  .bottom-12 {
    bottom:3rem
  }
  .bottom-16 {
    bottom:4rem
  }
  .bottom-2 {
    bottom:.5rem
  }
  .bottom-3 {
    bottom:.75rem
  }
  .bottom-4 {
    bottom:1rem
  }
  .bottom-5 {
    bottom:1.25rem
  }
  .bottom-8 {
    bottom:2rem
  }
  .bottom-\[-7px\] {
    bottom:-7px
  }
  .bottom-\[100\%\] {
    bottom:100%
  }
  .bottom-\[10px\] {
    bottom:10px
  }
  .bottom-\[116px\] {
    bottom:116px
  }
  .bottom-\[130px\] {
    bottom:130px
  }
  .bottom-\[20px\] {
    bottom:20px
  }
  .bottom-\[27\%\] {
    bottom:27%
  }
  .bottom-\[3px\] {
    bottom:3px
  }
  .bottom-\[5\%\] {
    bottom:5%
  }
  .left-0 {
    left:0
  }
  .left-1 {
    left:.25rem
  }
  .left-1\/2 {
    left:50%
  }
  .left-2 {
    left:.5rem
  }
  .left-3\/4 {
    left:75%
  }
  .left-4 {
    left:1rem
  }
  .left-4\.5 {
    left:1.125rem
  }
  .left-\[-280px\] {
    left:-280px
  }
  .left-\[100px\] {
    left:100px
  }
  .left-\[108px\] {
    left:108px
  }
  .left-\[10px\] {
    left:10px
  }
  .left-\[116px\] {
    left:116px
  }
  .left-\[11px\] {
    left:11px
  }
  .left-\[216px\] {
    left:216px
  }
  .left-\[250px\] {
    left:250px
  }
  .left-\[267px\] {
    left:267px
  }
  .left-\[268px\] {
    left:268px
  }
  .left-\[2px\] {
    left:2px
  }
  .left-\[319px\] {
    left:319px
  }
  .left-\[50\%\] {
    left:50%
  }
  .left-\[5px\] {
    left:5px
  }
  .left-\[60\%\] {
    left:60%
  }
  .left-\[8px\] {
    left:8px
  }
  .left-auto {
    left:auto
  }
  .left-full {
    left:100%
  }
  .right-0 {
    right:0
  }
  .right-1 {
    right:.25rem
  }
  .right-1\.5 {
    right:.375rem
  }
  .right-12 {
    right:3rem
  }
  .right-2 {
    right:.5rem
  }
  .right-2\.5 {
    right:.625rem
  }
  .right-3 {
    right:.75rem
  }
  .right-4 {
    right:1rem
  }
  .right-5 {
    right:1.25rem
  }
  .right-6 {
    right:1.5rem
  }
  .right-8 {
    right:2rem
  }
  .right-9 {
    right:2.25rem
  }
  .right-\[-17px\] {
    right:-17px
  }
  .right-\[-202px\] {
    right:-202px
  }
  .right-\[-5px\] {
    right:-5px
  }
  .right-\[-6px\] {
    right:-6px
  }
  .right-\[100px\] {
    right:100px
  }
  .right-\[10px\] {
    right:10px
  }
  .right-\[11px\] {
    right:11px
  }
  .right-\[15\%\] {
    right:15%
  }
  .right-\[25px\] {
    right:25px
  }
  .right-\[26px\] {
    right:26px
  }
  .right-\[2px\] {
    right:2px
  }
  .right-\[30\%\] {
    right:30%
  }
  .right-\[33\%\] {
    right:33%
  }
  .right-\[4px\] {
    right:4px
  }
  .right-\[52px\] {
    right:52px
  }
  .right-\[5px\] {
    right:5px
  }
  .right-\[60\%\] {
    right:60%
  }
  .right-\[calc\(50\%_-_10px\)\] {
    right:calc(50% - 10px)
  }
  .top-0 {
    top:0
  }
  .top-0\.5 {
    top:.125rem
  }
  .top-1 {
    top:.25rem
  }
  .top-1\.5 {
    top:.375rem
  }
  .top-1\/2 {
    top:50%
  }
  .top-10 {
    top:2.5rem
  }
  .top-11 {
    top:2.75rem
  }
  .top-12 {
    top:3rem
  }
  .top-2 {
    top:.5rem
  }
  .top-2\.5 {
    top:.625rem
  }
  .top-2\/4 {
    top:50%
  }
  .top-3 {
    top:.75rem
  }
  .top-4 {
    top:1rem
  }
  .top-5 {
    top:1.25rem
  }
  .top-6 {
    top:1.5rem
  }
  .top-8 {
    top:2rem
  }
  .top-9 {
    top:2.25rem
  }
  .top-\[-15px\] {
    top:-15px
  }
  .top-\[-17px\] {
    top:-17px
  }
  .top-\[-1px\] {
    top:-1px
  }
  .top-\[-2px\] {
    top:-2px
  }
  .top-\[-37px\] {
    top:-37px
  }
  .top-\[-3px\] {
    top:-3px
  }
  .top-\[-50px\] {
    top:-50px
  }
  .top-\[-8px\] {
    top:-8px
  }
  .top-\[100px\] {
    top:100px
  }
  .top-\[11px\] {
    top:11px
  }
  .top-\[120px\] {
    top:120px
  }
  .top-\[14px\] {
    top:14px
  }
  .top-\[15px\] {
    top:15px
  }
  .top-\[16px\] {
    top:16px
  }
  .top-\[17px\] {
    top:17px
  }
  .top-\[1px\] {
    top:1px
  }
  .top-\[215px\] {
    top:215px
  }
  .top-\[22px\] {
    top:22px
  }
  .top-\[25px\] {
    top:25px
  }
  .top-\[2px\] {
    top:2px
  }
  .top-\[36px\] {
    top:36px
  }
  .top-\[38\.65px\] {
    top:38.65px
  }
  .top-\[42px\] {
    top:42px
  }
  .top-\[50\%\] {
    top:50%
  }
  .top-\[50px\] {
    top:50px
  }
  .top-\[52px\] {
    top:52px
  }
  .top-\[5px\] {
    top:5px
  }
  .top-\[60\%\] {
    top:60%
  }
  .top-\[60px\] {
    top:60px
  }
  .top-\[7px\] {
    top:7px
  }
  .top-\[8px\] {
    top:8px
  }
  .top-\[9px\] {
    top:9px
  }
  .top-\[calc\(50\%_-_54px\)\] {
    top:calc(50% - 54px)
  }
  .top-\[calc\(50vh_-_300px\)\] {
    top:calc(50vh - 300px)
  }
  .top-auto {
    top:auto
  }
  .top-full {
    top:100%
  }
  .-order-1 {
    order:-1
  }
  .order-1 {
    order:1
  }
  .order-2 {
    order:2
  }
  .order-first {
    order:-9999
  }
  .order-last {
    order:9999
  }
  .col-span-2 {
    grid-column:span 2/span 2
  }
  .col-span-3 {
    grid-column:span 3/span 3
  }
  .col-span-4 {
    grid-column:span 4/span 4
  }
  .col-start-2 {
    grid-column-start:2
  }
  .row-span-3 {
    grid-row:span 3/span 3
  }
  .float-right {
    float:right
  }
  .float-left {
    float:left
  }
  .-m-1 {
    margin:-.25rem
  }
  .-m-2 {
    margin:-.5rem
  }
  .m-0 {
    margin:0
  }
  .m-1 {
    margin:.25rem
  }
  .m-10 {
    margin:2.5rem
  }
  .m-2 {
    margin:.5rem
  }
  .m-4 {
    margin:1rem
  }
  .m-5 {
    margin:1.25rem
  }
  .m-\[10px\] {
    margin:10px
  }
  .m-\[12px\] {
    margin:12px
  }
  .m-\[auto\],
  .m-auto {
    margin:auto
  }
  .-mx-1 {
    margin-left:-.25rem;
    margin-right:-.25rem
  }
  .-mx-2 {
    margin-left:-.5rem;
    margin-right:-.5rem
  }
  .-mx-4 {
    margin-left:-1rem;
    margin-right:-1rem
  }
  .-mx-6 {
    margin-left:-1.5rem;
    margin-right:-1.5rem
  }
  .-my-1 {
    margin-bottom:-.25rem;
    margin-top:-.25rem
  }
  .-my-\[6px\] {
    margin-bottom:-6px;
    margin-top:-6px
  }
  .mx-0 {
    margin-left:0;
    margin-right:0
  }
  .mx-1 {
    margin-left:.25rem;
    margin-right:.25rem
  }
  .mx-1\.5 {
    margin-left:.375rem;
    margin-right:.375rem
  }
  .mx-12 {
    margin-left:3rem;
    margin-right:3rem
  }
  .mx-2 {
    margin-left:.5rem;
    margin-right:.5rem
  }
  .mx-2\.5 {
    margin-left:.625rem;
    margin-right:.625rem
  }
  .mx-3 {
    margin-left:.75rem;
    margin-right:.75rem
  }
  .mx-4 {
    margin-left:1rem;
    margin-right:1rem
  }
  .mx-5 {
    margin-left:1.25rem;
    margin-right:1.25rem
  }
  .mx-6 {
    margin-left:1.5rem;
    margin-right:1.5rem
  }
  .mx-8 {
    margin-left:2rem;
    margin-right:2rem
  }
  .mx-\[-20px\] {
    margin-left:-20px;
    margin-right:-20px
  }
  .mx-\[-9px\] {
    margin-left:-9px;
    margin-right:-9px
  }
  .mx-\[10px\] {
    margin-left:10px;
    margin-right:10px
  }
  .mx-\[13px\] {
    margin-left:13px;
    margin-right:13px
  }
  .mx-\[20px\] {
    margin-left:20px;
    margin-right:20px
  }
  .mx-\[48px\] {
    margin-left:48px;
    margin-right:48px
  }
  .mx-auto {
    margin-left:auto;
    margin-right:auto
  }
  .my-0 {
    margin-bottom:0;
    margin-top:0
  }
  .my-0\.5 {
    margin-bottom:.125rem;
    margin-top:.125rem
  }
  .my-1 {
    margin-bottom:.25rem;
    margin-top:.25rem
  }
  .my-10 {
    margin-bottom:2.5rem;
    margin-top:2.5rem
  }
  .my-16 {
    margin-bottom:4rem;
    margin-top:4rem
  }
  .my-2 {
    margin-bottom:.5rem;
    margin-top:.5rem
  }
  .my-2\.5 {
    margin-bottom:.625rem;
    margin-top:.625rem
  }
  .my-20 {
    margin-bottom:5rem;
    margin-top:5rem
  }
  .my-3 {
    margin-bottom:.75rem;
    margin-top:.75rem
  }
  .my-4 {
    margin-bottom:1rem;
    margin-top:1rem
  }
  .my-5 {
    margin-bottom:1.25rem;
    margin-top:1.25rem
  }
  .my-6 {
    margin-bottom:1.5rem;
    margin-top:1.5rem
  }
  .my-8 {
    margin-bottom:2rem;
    margin-top:2rem
  }
  .my-9 {
    margin-bottom:2.25rem;
    margin-top:2.25rem
  }
  .my-\[-10px\] {
    margin-bottom:-10px;
    margin-top:-10px
  }
  .my-\[-5px\] {
    margin-bottom:-5px;
    margin-top:-5px
  }
  .my-\[100px\] {
    margin-bottom:100px;
    margin-top:100px
  }
  .my-\[10px\] {
    margin-bottom:10px;
    margin-top:10px
  }
  .my-\[11px\] {
    margin-bottom:11px;
    margin-top:11px
  }
  .my-\[15px\] {
    margin-bottom:15px;
    margin-top:15px
  }
  .my-\[16px\] {
    margin-bottom:16px;
    margin-top:16px
  }
  .my-\[30px\] {
    margin-bottom:30px;
    margin-top:30px
  }
  .my-\[3px\] {
    margin-bottom:3px;
    margin-top:3px
  }
  .my-\[40px\] {
    margin-bottom:40px;
    margin-top:40px
  }
  .my-\[5px\] {
    margin-bottom:5px;
    margin-top:5px
  }
  .my-\[96px\] {
    margin-bottom:96px;
    margin-top:96px
  }
  .my-\[9px\] {
    margin-bottom:9px;
    margin-top:9px
  }
  .\!mb-0 {
    margin-bottom:0!important
  }
  .\!ml-0 {
    margin-left:0!important
  }
  .\!ml-6 {
    margin-left:1.5rem!important
  }
  .\!mt-0 {
    margin-top:0!important
  }
  .-mb-4 {
    margin-bottom:-1rem
  }
  .-ml-1 {
    margin-left:-.25rem
  }
  .-ml-10 {
    margin-left:-2.5rem
  }
  .-ml-2 {
    margin-left:-.5rem
  }
  .-mr-1 {
    margin-right:-.25rem
  }
  .-mr-2 {
    margin-right:-.5rem
  }
  .-mr-3 {
    margin-right:-.75rem
  }
  .-mt-0 {
    margin-top:0
  }
  .-mt-0\.5 {
    margin-top:-.125rem
  }
  .-mt-1 {
    margin-top:-.25rem
  }
  .-mt-1\.5 {
    margin-top:-.375rem
  }
  .-mt-10 {
    margin-top:-2.5rem
  }
  .-mt-2 {
    margin-top:-.5rem
  }
  .-mt-3 {
    margin-top:-.75rem
  }
  .-mt-4 {
    margin-top:-1rem
  }
  .-mt-\[24px\] {
    margin-top:-24px
  }
  .-mt-\[572px\] {
    margin-top:-572px
  }
  .-mt-px {
    margin-top:-1px
  }
  .mb-0 {
    margin-bottom:0
  }
  .mb-0\.5 {
    margin-bottom:.125rem
  }
  .mb-1 {
    margin-bottom:.25rem
  }
  .mb-1\.5 {
    margin-bottom:.375rem
  }
  .mb-10 {
    margin-bottom:2.5rem
  }
  .mb-12 {
    margin-bottom:3rem
  }
  .mb-16 {
    margin-bottom:4rem
  }
  .mb-2 {
    margin-bottom:.5rem
  }
  .mb-2\.5 {
    margin-bottom:.625rem
  }
  .mb-20 {
    margin-bottom:5rem
  }
  .mb-3 {
    margin-bottom:.75rem
  }
  .mb-3\.5 {
    margin-bottom:.875rem
  }
  .mb-4 {
    margin-bottom:1rem
  }
  .mb-4\.5 {
    margin-bottom:1.125rem
  }
  .mb-5 {
    margin-bottom:1.25rem
  }
  .mb-6 {
    margin-bottom:1.5rem
  }
  .mb-8 {
    margin-bottom:2rem
  }
  .mb-9 {
    margin-bottom:2.25rem
  }
  .mb-\[100px\] {
    margin-bottom:100px
  }
  .mb-\[10px\] {
    margin-bottom:10px
  }
  .mb-\[11px\] {
    margin-bottom:11px
  }
  .mb-\[12px\] {
    margin-bottom:12px
  }
  .mb-\[14px\] {
    margin-bottom:14px
  }
  .mb-\[15px\] {
    margin-bottom:15px
  }
  .mb-\[16px\] {
    margin-bottom:16px
  }
  .mb-\[17px\] {
    margin-bottom:17px
  }
  .mb-\[18px\] {
    margin-bottom:18px
  }
  .mb-\[1px\] {
    margin-bottom:1px
  }
  .mb-\[23px\] {
    margin-bottom:23px
  }
  .mb-\[24px\] {
    margin-bottom:24px
  }
  .mb-\[25px\] {
    margin-bottom:25px
  }
  .mb-\[30px\] {
    margin-bottom:30px
  }
  .mb-\[32px\] {
    margin-bottom:32px
  }
  .mb-\[38px\] {
    margin-bottom:38px
  }
  .mb-\[40px\] {
    margin-bottom:40px
  }
  .mb-\[44px\] {
    margin-bottom:44px
  }
  .mb-\[48px\] {
    margin-bottom:48px
  }
  .mb-\[4px\] {
    margin-bottom:4px
  }
  .mb-\[50px\] {
    margin-bottom:50px
  }
  .mb-\[5px\] {
    margin-bottom:5px
  }
  .mb-\[60px\] {
    margin-bottom:60px
  }
  .mb-\[64px\] {
    margin-bottom:64px
  }
  .mb-\[68px\] {
    margin-bottom:68px
  }
  .mb-\[70px\] {
    margin-bottom:70px
  }
  .mb-\[82px\] {
    margin-bottom:82px
  }
  .mb-\[96px\] {
    margin-bottom:96px
  }
  .ml-0 {
    margin-left:0
  }
  .ml-0\.5 {
    margin-left:.125rem
  }
  .ml-1 {
    margin-left:.25rem
  }
  .ml-1\.5 {
    margin-left:.375rem
  }
  .ml-10 {
    margin-left:2.5rem
  }
  .ml-11 {
    margin-left:2.75rem
  }
  .ml-2 {
    margin-left:.5rem
  }
  .ml-2\.5 {
    margin-left:.625rem
  }
  .ml-3 {
    margin-left:.75rem
  }
  .ml-4 {
    margin-left:1rem
  }
  .ml-5 {
    margin-left:1.25rem
  }
  .ml-6 {
    margin-left:1.5rem
  }
  .ml-7 {
    margin-left:1.75rem
  }
  .ml-8 {
    margin-left:2rem
  }
  .ml-9 {
    margin-left:2.25rem
  }
  .ml-\[-10px\] {
    margin-left:-10px
  }
  .ml-\[-16px\] {
    margin-left:-16px
  }
  .ml-\[-24px\] {
    margin-left:-24px
  }
  .ml-\[-7px\] {
    margin-left:-7px
  }
  .ml-\[10px\] {
    margin-left:10px
  }
  .ml-\[14px\] {
    margin-left:14px
  }
  .ml-\[16px\] {
    margin-left:16px
  }
  .ml-\[1px\] {
    margin-left:1px
  }
  .ml-\[20px\] {
    margin-left:20px
  }
  .ml-\[21px\] {
    margin-left:21px
  }
  .ml-\[24px\] {
    margin-left:24px
  }
  .ml-\[26px\] {
    margin-left:26px
  }
  .ml-\[2px\] {
    margin-left:2px
  }
  .ml-\[30px\] {
    margin-left:30px
  }
  .ml-\[31px\] {
    margin-left:31px
  }
  .ml-\[40px\] {
    margin-left:40px
  }
  .ml-\[45px\] {
    margin-left:45px
  }
  .ml-\[4px\] {
    margin-left:4px
  }
  .ml-\[50\%\] {
    margin-left:50%
  }
  .ml-\[5px\] {
    margin-left:5px
  }
  .ml-\[6px\] {
    margin-left:6px
  }
  .ml-\[8px\] {
    margin-left:8px
  }
  .ml-\[90px\] {
    margin-left:90px
  }
  .ml-auto {
    margin-left:auto
  }
  .ml-px {
    margin-left:1px
  }
  .mr-0 {
    margin-right:0
  }
  .mr-0\.5 {
    margin-right:.125rem
  }
  .mr-1 {
    margin-right:.25rem
  }
  .mr-1\.5 {
    margin-right:.375rem
  }
  .mr-10 {
    margin-right:2.5rem
  }
  .mr-2 {
    margin-right:.5rem
  }
  .mr-2\.5 {
    margin-right:.625rem
  }
  .mr-3 {
    margin-right:.75rem
  }
  .mr-3\.5 {
    margin-right:.875rem
  }
  .mr-4 {
    margin-right:1rem
  }
  .mr-4\.5 {
    margin-right:1.125rem
  }
  .mr-5 {
    margin-right:1.25rem
  }
  .mr-6 {
    margin-right:1.5rem
  }
  .mr-7 {
    margin-right:1.75rem
  }
  .mr-8 {
    margin-right:2rem
  }
  .mr-\[10px\] {
    margin-right:10px
  }
  .mr-\[14px\] {
    margin-right:14px
  }
  .mr-\[15px\] {
    margin-right:15px
  }
  .mr-\[16px\] {
    margin-right:16px
  }
  .mr-\[18px\] {
    margin-right:18px
  }
  .mr-\[28px\] {
    margin-right:28px
  }
  .mr-\[2px\] {
    margin-right:2px
  }
  .mr-\[30px\] {
    margin-right:30px
  }
  .mr-\[32px\] {
    margin-right:32px
  }
  .mr-\[3px\] {
    margin-right:3px
  }
  .mr-\[4px\] {
    margin-right:4px
  }
  .mr-\[5px\] {
    margin-right:5px
  }
  .mr-\[6px\] {
    margin-right:6px
  }
  .mr-\[7px\] {
    margin-right:7px
  }
  .mr-\[8px\] {
    margin-right:8px
  }
  .mr-\[9px\] {
    margin-right:9px
  }
  .mr-auto {
    margin-right:auto
  }
  .mt-0 {
    margin-top:0
  }
  .mt-0\.5 {
    margin-top:.125rem
  }
  .mt-1 {
    margin-top:.25rem
  }
  .mt-1\.5 {
    margin-top:.375rem
  }
  .mt-10 {
    margin-top:2.5rem
  }
  .mt-11 {
    margin-top:2.75rem
  }
  .mt-12 {
    margin-top:3rem
  }
  .mt-14 {
    margin-top:3.5rem
  }
  .mt-16 {
    margin-top:4rem
  }
  .mt-2 {
    margin-top:.5rem
  }
  .mt-2\.5 {
    margin-top:.625rem
  }
  .mt-3 {
    margin-top:.75rem
  }
  .mt-3\.5 {
    margin-top:.875rem
  }
  .mt-4 {
    margin-top:1rem
  }
  .mt-40 {
    margin-top:10rem
  }
  .mt-5 {
    margin-top:1.25rem
  }
  .mt-6 {
    margin-top:1.5rem
  }
  .mt-7 {
    margin-top:1.75rem
  }
  .mt-8 {
    margin-top:2rem
  }
  .mt-9 {
    margin-top:2.25rem
  }
  .mt-\[-10px\] {
    margin-top:-10px
  }
  .mt-\[-5px\] {
    margin-top:-5px
  }
  .mt-\[-60px\] {
    margin-top:-60px
  }
  .mt-\[-6px\] {
    margin-top:-6px
  }
  .mt-\[-78px\] {
    margin-top:-78px
  }
  .mt-\[100px\] {
    margin-top:100px
  }
  .mt-\[102px\] {
    margin-top:102px
  }
  .mt-\[108px\] {
    margin-top:108px
  }
  .mt-\[10px\] {
    margin-top:10px
  }
  .mt-\[11px\] {
    margin-top:11px
  }
  .mt-\[120px\] {
    margin-top:120px
  }
  .mt-\[12px\] {
    margin-top:12px
  }
  .mt-\[14px\] {
    margin-top:14px
  }
  .mt-\[15px\] {
    margin-top:15px
  }
  .mt-\[16px\] {
    margin-top:16px
  }
  .mt-\[18px\] {
    margin-top:18px
  }
  .mt-\[2\.5px\] {
    margin-top:2.5px
  }
  .mt-\[200px\] {
    margin-top:200px
  }
  .mt-\[22px\] {
    margin-top:22px
  }
  .mt-\[238px\] {
    margin-top:238px
  }
  .mt-\[23px\] {
    margin-top:23px
  }
  .mt-\[240px\] {
    margin-top:240px
  }
  .mt-\[24px\] {
    margin-top:24px
  }
  .mt-\[25px\] {
    margin-top:25px
  }
  .mt-\[29px\] {
    margin-top:29px
  }
  .mt-\[2px\] {
    margin-top:2px
  }
  .mt-\[30px\] {
    margin-top:30px
  }
  .mt-\[32px\] {
    margin-top:32px
  }
  .mt-\[34px\] {
    margin-top:34px
  }
  .mt-\[39px\] {
    margin-top:39px
  }
  .mt-\[3px\] {
    margin-top:3px
  }
  .mt-\[40px\] {
    margin-top:40px
  }
  .mt-\[48px\] {
    margin-top:48px
  }
  .mt-\[4px\] {
    margin-top:4px
  }
  .mt-\[50px\] {
    margin-top:50px
  }
  .mt-\[52px\] {
    margin-top:52px
  }
  .mt-\[56px\] {
    margin-top:56px
  }
  .mt-\[57px\] {
    margin-top:57px
  }
  .mt-\[58px\] {
    margin-top:58px
  }
  .mt-\[5px\] {
    margin-top:5px
  }
  .mt-\[60px\] {
    margin-top:60px
  }
  .mt-\[64px\] {
    margin-top:64px
  }
  .mt-\[6px\] {
    margin-top:6px
  }
  .mt-\[70px\] {
    margin-top:70px
  }
  .mt-\[74px\] {
    margin-top:74px
  }
  .mt-\[7px\] {
    margin-top:7px
  }
  .mt-\[8px\] {
    margin-top:8px
  }
  .mt-\[9px\] {
    margin-top:9px
  }
  .mt-auto {
    margin-top:auto
  }
  .mt-px {
    margin-top:1px
  }
  .box-border {
    box-sizing:border-box
  }
  .box-content {
    box-sizing:initial
  }
  .line-clamp-1 {
    -webkit-line-clamp:1
  }
  .line-clamp-1,
  .line-clamp-2 {
    -webkit-box-orient:vertical;
    display:-webkit-box;
    overflow:hidden
  }
  .line-clamp-2 {
    -webkit-line-clamp:2
  }
  .line-clamp-3 {
    -webkit-line-clamp:3
  }
  .line-clamp-3,
  .line-clamp-4 {
    -webkit-box-orient:vertical;
    display:-webkit-box;
    overflow:hidden
  }
  .line-clamp-4 {
    -webkit-line-clamp:4
  }
  .\!block {
    display:block!important
  }
  .block {
    display:block
  }
  .inline-block {
    display:inline-block
  }
  .inline {
    display:inline
  }
  .flex {
    display:flex
  }
  .inline-flex {
    display:inline-flex
  }
  .table {
    display:table
  }
  .grid {
    display:grid
  }
  .contents {
    display:contents
  }
  .\!hidden {
    display:none!important
  }
  .hidden {
    display:none
  }
  .aspect-\[1\/1\] {
    aspect-ratio:1/1
  }
  .aspect-\[2\/1\] {
    aspect-ratio:2/1
  }
  .aspect-\[316\/198\] {
    aspect-ratio:316/198
  }
  .\!h-16 {
    height:4rem!important
  }
  .\!h-3 {
    height:.75rem!important
  }
  .\!h-5 {
    height:1.25rem!important
  }
  .\!h-6 {
    height:1.5rem!important
  }
  .\!h-\[14px\] {
    height:14px!important
  }
  .\!h-full {
    height:100%!important
  }
  .h-0 {
    height:0
  }
  .h-0\.5 {
    height:.125rem
  }
  .h-1 {
    height:.25rem
  }
  .h-1\.5 {
    height:.375rem
  }
  .h-10 {
    height:2.5rem
  }
  .h-10\.5 {
    height:2.625rem
  }
  .h-11 {
    height:2.75rem
  }
  .h-12 {
    height:3rem
  }
  .h-14 {
    height:3.5rem
  }
  .h-16 {
    height:4rem
  }
  .h-2 {
    height:.5rem
  }
  .h-2\.5 {
    height:.625rem
  }
  .h-20 {
    height:5rem
  }
  .h-25 {
    height:6.25rem
  }
  .h-3 {
    height:.75rem
  }
  .h-3\.5 {
    height:.875rem
  }
  .h-4 {
    height:1rem
  }
  .h-4\.5 {
    height:1.125rem
  }
  .h-42 {
    height:10.75rem
  }
  .h-5 {
    height:1.25rem
  }
  .h-5\.5 {
    height:1.375rem
  }
  .h-6 {
    height:1.5rem
  }
  .h-64 {
    height:16rem
  }
  .h-7 {
    height:1.75rem
  }
  .h-72 {
    height:18rem
  }
  .h-8 {
    height:2rem
  }
  .h-80 {
    height:20rem
  }
  .h-9 {
    height:2.25rem
  }
  .h-\[0\.8px\] {
    height:.8px
  }
  .h-\[100\%\] {
    height:100%
  }
  .h-\[1000px\] {
    height:1000px
  }
  .h-\[100px\] {
    height:100px
  }
  .h-\[100vh\] {
    height:100vh
  }
  .h-\[108px\] {
    height:108px
  }
  .h-\[10px\] {
    height:10px
  }
  .h-\[110px\] {
    height:110px
  }
  .h-\[112px\] {
    height:112px
  }
  .h-\[113\%\] {
    height:113%
  }
  .h-\[114px\] {
    height:114px
  }
  .h-\[116px\] {
    height:116px
  }
  .h-\[120px\] {
    height:120px
  }
  .h-\[128px\] {
    height:128px
  }
  .h-\[12px\] {
    height:12px
  }
  .h-\[130px\] {
    height:130px
  }
  .h-\[133px\] {
    height:133px
  }
  .h-\[136px\] {
    height:136px
  }
  .h-\[13px\] {
    height:13px
  }
  .h-\[140px\] {
    height:140px
  }
  .h-\[142px\] {
    height:142px
  }
  .h-\[14px\] {
    height:14px
  }
  .h-\[150px\] {
    height:150px
  }
  .h-\[15px\] {
    height:15px
  }
  .h-\[160px\] {
    height:160px
  }
  .h-\[164px\] {
    height:164px
  }
  .h-\[167px\] {
    height:167px
  }
  .h-\[168px\] {
    height:168px
  }
  .h-\[16px\] {
    height:16px
  }
  .h-\[170px\] {
    height:170px
  }
  .h-\[17px\] {
    height:17px
  }
  .h-\[180px\] {
    height:180px
  }
  .h-\[185px\] {
    height:185px
  }
  .h-\[186px\] {
    height:186px
  }
  .h-\[18px\] {
    height:18px
  }
  .h-\[190px\] {
    height:190px
  }
  .h-\[192px\] {
    height:192px
  }
  .h-\[195px\] {
    height:195px
  }
  .h-\[198px\] {
    height:198px
  }
  .h-\[1px\] {
    height:1px
  }
  .h-\[200px\] {
    height:200px
  }
  .h-\[20px\] {
    height:20px
  }
  .h-\[21px\] {
    height:21px
  }
  .h-\[220px\] {
    height:220px
  }
  .h-\[224px\] {
    height:224px
  }
  .h-\[22px\] {
    height:22px
  }
  .h-\[232px\] {
    height:232px
  }
  .h-\[233px\] {
    height:233px
  }
  .h-\[235px\] {
    height:235px
  }
  .h-\[240px\] {
    height:240px
  }
  .h-\[242px\] {
    height:242px
  }
  .h-\[24px\] {
    height:24px
  }
  .h-\[250px\] {
    height:250px
  }
  .h-\[253px\] {
    height:253px
  }
  .h-\[25px\] {
    height:25px
  }
  .h-\[26px\] {
    height:26px
  }
  .h-\[270px\] {
    height:270px
  }
  .h-\[272px\] {
    height:272px
  }
  .h-\[275px\] {
    height:275px
  }
  .h-\[276px\] {
    height:276px
  }
  .h-\[27px\] {
    height:27px
  }
  .h-\[280px\] {
    height:280px
  }
  .h-\[28px\] {
    height:28px
  }
  .h-\[296px\] {
    height:296px
  }
  .h-\[29px\] {
    height:29px
  }
  .h-\[2px\] {
    height:2px
  }
  .h-\[300px\] {
    height:300px
  }
  .h-\[30px\] {
    height:30px
  }
  .h-\[320px\] {
    height:320px
  }
  .h-\[32px\] {
    height:32px
  }
  .h-\[34px\] {
    height:34px
  }
  .h-\[35px\] {
    height:35px
  }
  .h-\[360px\] {
    height:360px
  }
  .h-\[368px\] {
    height:368px
  }
  .h-\[36px\] {
    height:36px
  }
  .h-\[373px\] {
    height:373px
  }
  .h-\[38px\] {
    height:38px
  }
  .h-\[3px\] {
    height:3px
  }
  .h-\[400px\] {
    height:400px
  }
  .h-\[40px\] {
    height:40px
  }
  .h-\[420px\] {
    height:420px
  }
  .h-\[42px\] {
    height:42px
  }
  .h-\[432px\] {
    height:432px
  }
  .h-\[44px\] {
    height:44px
  }
  .h-\[45px\] {
    height:45px
  }
  .h-\[460px\] {
    height:460px
  }
  .h-\[468px\] {
    height:468px
  }
  .h-\[46px\] {
    height:46px
  }
  .h-\[480px\] {
    height:480px
  }
  .h-\[48px\] {
    height:48px
  }
  .h-\[500px\] {
    height:500px
  }
  .h-\[50px\] {
    height:50px
  }
  .h-\[50vh\] {
    height:50vh
  }
  .h-\[52px\] {
    height:52px
  }
  .h-\[534px\] {
    height:534px
  }
  .h-\[540px\] {
    height:540px
  }
  .h-\[54px\] {
    height:54px
  }
  .h-\[550px\] {
    height:550px
  }
  .h-\[56px\] {
    height:56px
  }
  .h-\[5px\] {
    height:5px
  }
  .h-\[600px\] {
    height:600px
  }
  .h-\[60px\] {
    height:60px
  }
  .h-\[64px\] {
    height:64px
  }
  .h-\[66px\] {
    height:66px
  }
  .h-\[68px\] {
    height:68px
  }
  .h-\[696px\] {
    height:696px
  }
  .h-\[69px\] {
    height:69px
  }
  .h-\[6px\] {
    height:6px
  }
  .h-\[70px\] {
    height:70px
  }
  .h-\[70vh\] {
    height:70vh
  }
  .h-\[72px\] {
    height:72px
  }
  .h-\[74px\] {
    height:74px
  }
  .h-\[76px\] {
    height:76px
  }
  .h-\[7px\] {
    height:7px
  }
  .h-\[80px\] {
    height:80px
  }
  .h-\[80vh\] {
    height:80vh
  }
  .h-\[82px\] {
    height:82px
  }
  .h-\[86px\] {
    height:86px
  }
  .h-\[88px\] {
    height:88px
  }
  .h-\[8px\] {
    height:8px
  }
  .h-\[90\%\] {
    height:90%
  }
  .h-\[90px\] {
    height:90px
  }
  .h-\[90vh\] {
    height:90vh
  }
  .h-\[966px\] {
    height:966px
  }
  .h-\[96px\] {
    height:96px
  }
  .h-\[98px\] {
    height:98px
  }
  .h-\[9px\] {
    height:9px
  }
  .h-\[calc\(100\%_-_28px\)\] {
    height:calc(100% - 28px)
  }
  .h-\[calc\(100\%_-_50px\)\] {
    height:calc(100% - 50px)
  }
  .h-\[calc\(100vh_-_100px\)\] {
    height:calc(100vh - 100px)
  }
  .h-\[calc\(100vh_-_50px\)\] {
    height:calc(100vh - 50px)
  }
  .h-\[var\(--radix-navigation-menu-viewport-height\)\] {
    height:var(--radix-navigation-menu-viewport-height)
  }
  .h-\[var\(--radix-select-trigger-height\)\] {
    height:var(--radix-select-trigger-height)
  }
  .h-auto {
    height:auto
  }
  .h-fit {
    height:-moz-fit-content;
    height:fit-content
  }
  .h-full {
    height:100%
  }
  .h-px {
    height:1px
  }
  .h-screen {
    height:100vh
  }
  .max-h-0 {
    max-height:0
  }
  .max-h-40 {
    max-height:10rem
  }
  .max-h-56 {
    max-height:14rem
  }
  .max-h-6 {
    max-height:1.5rem
  }
  .max-h-8 {
    max-height:2rem
  }
  .max-h-9 {
    max-height:2.25rem
  }
  .max-h-\[100px\] {
    max-height:100px
  }
  .max-h-\[137px\] {
    max-height:137px
  }
  .max-h-\[140px\] {
    max-height:140px
  }
  .max-h-\[14px\] {
    max-height:14px
  }
  .max-h-\[156px\] {
    max-height:156px
  }
  .max-h-\[172px\] {
    max-height:172px
  }
  .max-h-\[18px\] {
    max-height:18px
  }
  .max-h-\[190px\] {
    max-height:190px
  }
  .max-h-\[200px\] {
    max-height:200px
  }
  .max-h-\[22px\] {
    max-height:22px
  }
  .max-h-\[230px\] {
    max-height:230px
  }
  .max-h-\[24px\] {
    max-height:24px
  }
  .max-h-\[250px\] {
    max-height:250px
  }
  .max-h-\[300px\] {
    max-height:300px
  }
  .max-h-\[340px\] {
    max-height:340px
  }
  .max-h-\[350px\] {
    max-height:350px
  }
  .max-h-\[370px\] {
    max-height:370px
  }
  .max-h-\[376px\] {
    max-height:376px
  }
  .max-h-\[396px\] {
    max-height:396px
  }
  .max-h-\[400px\] {
    max-height:400px
  }
  .max-h-\[500px\] {
    max-height:500px
  }
  .max-h-\[560px\] {
    max-height:560px
  }
  .max-h-\[60\%\] {
    max-height:60%
  }
  .max-h-\[600px\] {
    max-height:600px
  }
  .max-h-\[640px\] {
    max-height:640px
  }
  .max-h-\[90vh\] {
    max-height:90vh
  }
  .max-h-\[calc\(100vh-100px\)\] {
    max-height:calc(100vh - 100px)
  }
  .max-h-\[calc\(100vh-150px\)\] {
    max-height:calc(100vh - 150px)
  }
  .max-h-full {
    max-height:100%
  }
  .max-h-none {
    max-height:none
  }
  .max-h-screen {
    max-height:100vh
  }
  .min-h-0 {
    min-height:0
  }
  .min-h-\[100px\] {
    min-height:100px
  }
  .min-h-\[102px\] {
    min-height:102px
  }
  .min-h-\[167px\] {
    min-height:167px
  }
  .min-h-\[186px\] {
    min-height:186px
  }
  .min-h-\[200px\] {
    min-height:200px
  }
  .min-h-\[20px\] {
    min-height:20px
  }
  .min-h-\[21px\] {
    min-height:21px
  }
  .min-h-\[228px\] {
    min-height:228px
  }
  .min-h-\[24px\] {
    min-height:24px
  }
  .min-h-\[300px\] {
    min-height:300px
  }
  .min-h-\[322px\] {
    min-height:322px
  }
  .min-h-\[32px\] {
    min-height:32px
  }
  .min-h-\[360px\] {
    min-height:360px
  }
  .min-h-\[37px\] {
    min-height:37px
  }
  .min-h-\[400px\] {
    min-height:400px
  }
  .min-h-\[40px\] {
    min-height:40px
  }
  .min-h-\[452px\] {
    min-height:452px
  }
  .min-h-\[46px\] {
    min-height:46px
  }
  .min-h-\[48px\] {
    min-height:48px
  }
  .min-h-\[49px\] {
    min-height:49px
  }
  .min-h-\[53px\] {
    min-height:53px
  }
  .min-h-\[548px\] {
    min-height:548px
  }
  .min-h-\[580px\] {
    min-height:580px
  }
  .min-h-\[600px\] {
    min-height:600px
  }
  .min-h-\[60vh\] {
    min-height:60vh
  }
  .min-h-\[70px\] {
    min-height:70px
  }
  .min-h-\[714px\] {
    min-height:714px
  }
  .min-h-\[77px\] {
    min-height:77px
  }
  .min-h-\[80px\] {
    min-height:80px
  }
  .min-h-\[90vh\] {
    min-height:90vh
  }
  .min-h-\[966px\] {
    min-height:966px
  }
  .min-h-full {
    min-height:100%
  }
  .min-h-screen {
    min-height:40vh
  }
  .\!w-16 {
    width:4rem!important
  }
  .\!w-3 {
    width:.75rem!important
  }
  .\!w-5 {
    width:1.25rem!important
  }
  .\!w-6 {
    width:1.5rem!important
  }
  .\!w-\[14px\] {
    width:14px!important
  }
  .w-0 {
    width:0
  }
  .w-0\.5 {
    width:.125rem
  }
  .w-1 {
    width:.25rem
  }
  .w-1\.5 {
    width:.375rem
  }
  .w-1\/2 {
    width:50%
  }
  .w-1\/3 {
    width:33.333333%
  }
  .w-10 {
    width:2.5rem
  }
  .w-11 {
    width:2.75rem
  }
  .w-12 {
    width:3rem
  }
  .w-14 {
    width:3.5rem
  }
  .w-16 {
    width:4rem
  }
  .w-17\.5 {
    width:4.375rem
  }
  .w-2 {
    width:.5rem
  }
  .w-2\.5 {
    width:.625rem
  }
  .w-2\/3 {
    width:66.666667%
  }
  .w-20 {
    width:5rem
  }
  .w-24 {
    width:6rem
  }
  .w-25 {
    width:6.25rem
  }
  .w-3 {
    width:.75rem
  }
  .w-3\.5 {
    width:.875rem
  }
  .w-3\/4 {
    width:75%
  }
  .w-32 {
    width:8rem
  }
  .w-4 {
    width:1rem
  }
  .w-4\.5 {
    width:1.125rem
  }
  .w-4\/5 {
    width:80%
  }
  .w-48 {
    width:12rem
  }
  .w-5 {
    width:1.25rem
  }
  .w-56 {
    width:14rem
  }
  .w-6 {
    width:1.5rem
  }
  .w-60 {
    width:15rem
  }
  .w-64 {
    width:16rem
  }
  .w-7 {
    width:1.75rem
  }
  .w-72 {
    width:18rem
  }
  .w-8 {
    width:2rem
  }
  .w-80 {
    width:20rem
  }
  .w-9 {
    width:2.25rem
  }
  .w-\[100\%\] {
    width:100%
  }
  .w-\[100px\] {
    width:100px
  }
  .w-\[100vw\] {
    width:100vw
  }
  .w-\[1020px\] {
    width:1020px
  }
  .w-\[104px\] {
    width:104px
  }
  .w-\[106px\] {
    width:106px
  }
  .w-\[10px\] {
    width:10px
  }
  .w-\[110px\] {
    width:110px
  }
  .w-\[113\%\] {
    width:113%
  }
  .w-\[116px\] {
    width:116px
  }
  .w-\[120\%\] {
    width:120%
  }
  .w-\[120px\] {
    width:120px
  }
  .w-\[124px\] {
    width:124px
  }
  .w-\[128px\] {
    width:128px
  }
  .w-\[133px\] {
    width:133px
  }
  .w-\[136px\] {
    width:136px
  }
  .w-\[138px\] {
    width:138px
  }
  .w-\[14\%\] {
    width:14%
  }
  .w-\[140px\] {
    width:140px
  }
  .w-\[143px\] {
    width:143px
  }
  .w-\[144px\] {
    width:144px
  }
  .w-\[146px\] {
    width:146px
  }
  .w-\[148px\] {
    width:148px
  }
  .w-\[14px\] {
    width:14px
  }
  .w-\[150px\] {
    width:150px
  }
  .w-\[154px\] {
    width:154px
  }
  .w-\[155\%\] {
    width:155%
  }
  .w-\[15px\] {
    width:15px
  }
  .w-\[160px\] {
    width:160px
  }
  .w-\[161px\] {
    width:161px
  }
  .w-\[162px\] {
    width:162px
  }
  .w-\[164px\] {
    width:164px
  }
  .w-\[165\.562px\] {
    width:165.562px
  }
  .w-\[168px\] {
    width:168px
  }
  .w-\[16px\] {
    width:16px
  }
  .w-\[170px\] {
    width:170px
  }
  .w-\[175px\] {
    width:175px
  }
  .w-\[176px\] {
    width:176px
  }
  .w-\[178px\] {
    width:178px
  }
  .w-\[180px\] {
    width:180px
  }
  .w-\[185px\] {
    width:185px
  }
  .w-\[188px\] {
    width:188px
  }
  .w-\[18px\] {
    width:18px
  }
  .w-\[190px\] {
    width:190px
  }
  .w-\[193px\] {
    width:193px
  }
  .w-\[1px\] {
    width:1px
  }
  .w-\[20\%\] {
    width:20%
  }
  .w-\[2000px\] {
    width:2000px
  }
  .w-\[200px\] {
    width:200px
  }
  .w-\[20px\] {
    width:20px
  }
  .w-\[210px\] {
    width:210px
  }
  .w-\[21px\] {
    width:21px
  }
  .w-\[220px\] {
    width:220px
  }
  .w-\[226px\] {
    width:226px
  }
  .w-\[228px\] {
    width:228px
  }
  .w-\[22px\] {
    width:22px
  }
  .w-\[235px\] {
    width:235px
  }
  .w-\[236px\] {
    width:236px
  }
  .w-\[240px\] {
    width:240px
  }
  .w-\[242px\] {
    width:242px
  }
  .w-\[24px\] {
    width:24px
  }
  .w-\[25\%\] {
    width:25%
  }
  .w-\[250px\] {
    width:250px
  }
  .w-\[251px\] {
    width:251px
  }
  .w-\[252px\] {
    width:252px
  }
  .w-\[25px\] {
    width:25px
  }
  .w-\[260px\] {
    width:260px
  }
  .w-\[261px\] {
    width:261px
  }
  .w-\[264px\] {
    width:264px
  }
  .w-\[26px\] {
    width:26px
  }
  .w-\[270px\] {
    width:270px
  }
  .w-\[276px\] {
    width:276px
  }
  .w-\[280px\] {
    width:280px
  }
  .w-\[282px\] {
    width:282px
  }
  .w-\[286px\] {
    width:286px
  }
  .w-\[28px\] {
    width:28px
  }
  .w-\[290px\] {
    width:290px
  }
  .w-\[292px\] {
    width:292px
  }
  .w-\[2px\] {
    width:2px
  }
  .w-\[30\%\] {
    width:30%
  }
  .w-\[300px\] {
    width:300px
  }
  .w-\[301px\] {
    width:301px
  }
  .w-\[305px\] {
    width:305px
  }
  .w-\[30px\] {
    width:30px
  }
  .w-\[310px\] {
    width:310px
  }
  .w-\[313px\] {
    width:313px
  }
  .w-\[314px\] {
    width:314px
  }
  .w-\[316px\] {
    width:316px
  }
  .w-\[320px\] {
    width:320px
  }
  .w-\[32px\] {
    width:32px
  }
  .w-\[340px\] {
    width:340px
  }
  .w-\[348px\] {
    width:348px
  }
  .w-\[34px\] {
    width:34px
  }
  .w-\[350px\] {
    width:350px
  }
  .w-\[360px\] {
    width:360px
  }
  .w-\[366px\] {
    width:366px
  }
  .w-\[36px\] {
    width:36px
  }
  .w-\[376px\] {
    width:376px
  }
  .w-\[38px\] {
    width:38px
  }
  .w-\[390px\] {
    width:390px
  }
  .w-\[3px\] {
    width:3px
  }
  .w-\[40\%\] {
    width:40%
  }
  .w-\[400px\] {
    width:400px
  }
  .w-\[40px\] {
    width:40px
  }
  .w-\[420px\] {
    width:420px
  }
  .w-\[42px\] {
    width:42px
  }
  .w-\[43\.45px\] {
    width:43.45px
  }
  .w-\[432px\] {
    width:432px
  }
  .w-\[44px\] {
    width:44px
  }
  .w-\[45px\] {
    width:45px
  }
  .w-\[470px\] {
    width:470px
  }
  .w-\[473px\] {
    width:473px
  }
  .w-\[480px\] {
    width:480px
  }
  .w-\[48px\] {
    width:48px
  }
  .w-\[50\%\] {
    width:50%
  }
  .w-\[500px\] {
    width:500px
  }
  .w-\[50px\] {
    width:50px
  }
  .w-\[50vw\] {
    width:50vw
  }
  .w-\[520px\] {
    width:520px
  }
  .w-\[529px\] {
    width:529px
  }
  .w-\[53px\] {
    width:53px
  }
  .w-\[550px\] {
    width:550px
  }
  .w-\[55px\] {
    width:55px
  }
  .w-\[560px\] {
    width:560px
  }
  .w-\[56px\] {
    width:56px
  }
  .w-\[570px\] {
    width:570px
  }
  .w-\[58px\] {
    width:58px
  }
  .w-\[5px\] {
    width:5px
  }
  .w-\[60\%\] {
    width:60%
  }
  .w-\[600px\] {
    width:600px
  }
  .w-\[60px\] {
    width:60px
  }
  .w-\[640px\] {
    width:640px
  }
  .w-\[64px\] {
    width:64px
  }
  .w-\[65px\] {
    width:65px
  }
  .w-\[66px\] {
    width:66px
  }
  .w-\[6px\] {
    width:6px
  }
  .w-\[70\%\] {
    width:70%
  }
  .w-\[700px\] {
    width:700px
  }
  .w-\[70px\] {
    width:70px
  }
  .w-\[720px\] {
    width:720px
  }
  .w-\[72px\] {
    width:72px
  }
  .w-\[73px\] {
    width:73px
  }
  .w-\[74px\] {
    width:74px
  }
  .w-\[76px\] {
    width:76px
  }
  .w-\[78px\] {
    width:78px
  }
  .w-\[7px\] {
    width:7px
  }
  .w-\[8\%\] {
    width:8%
  }
  .w-\[80\%\] {
    width:80%
  }
  .w-\[800px\] {
    width:800px
  }
  .w-\[80px\] {
    width:80px
  }
  .w-\[81px\] {
    width:81px
  }
  .w-\[82px\] {
    width:82px
  }
  .w-\[84px\] {
    width:84px
  }
  .w-\[86px\] {
    width:86px
  }
  .w-\[880px\] {
    width:880px
  }
  .w-\[88px\] {
    width:88px
  }
  .w-\[89px\] {
    width:89px
  }
  .w-\[90\%\] {
    width:90%
  }
  .w-\[900px\] {
    width:900px
  }
  .w-\[90px\] {
    width:90px
  }
  .w-\[90vw\] {
    width:90vw
  }
  .w-\[91px\] {
    width:91px
  }
  .w-\[94px\] {
    width:94px
  }
  .w-\[95\%\] {
    width:95%
  }
  .w-\[95px\] {
    width:95px
  }
  .w-\[96px\] {
    width:96px
  }
  .w-\[972px\] {
    width:972px
  }
  .w-\[97px\] {
    width:97px
  }
  .w-\[98px\] {
    width:98px
  }
  .w-\[99px\] {
    width:99px
  }
  .w-\[9px\] {
    width:9px
  }
  .w-\[calc\(100\%-26px\)\] {
    width:calc(100% - 26px)
  }
  .w-\[calc\(100\%-76px\)\] {
    width:calc(100% - 76px)
  }
  .w-\[calc\(100\%_-_2px\)\] {
    width:calc(100% - 2px)
  }
  .w-\[calc\(100\%_-_72px\)\] {
    width:calc(100% - 72px)
  }
  .w-\[calc\(100vw-32px\)\] {
    width:calc(100vw - 32px)
  }
  .w-\[i4px\] {
    width:i4px
  }
  .w-\[var\(--radix-popover-trigger-width\)\] {
    width:var(--radix-popover-trigger-width)
  }
  .w-auto {
    width:auto
  }
  .w-fit {
    width:-moz-fit-content;
    width:fit-content
  }
  .w-full {
    width:100%
  }
  .w-max {
    width:max-content
  }
  .w-min {
    width:min-content
  }
  .w-px {
    width:1px
  }
  .w-screen {
    width:100vw
  }
  .\!min-w-\[440px\] {
    min-width:440px!important
  }
  .\!min-w-\[628px\] {
    min-width:628px!important
  }
  .\!min-w-\[auto\] {
    min-width:auto!important
  }
  .\!min-w-fit {
    min-width:-moz-fit-content!important;
    min-width:fit-content!important
  }
  .min-w-0 {
    min-width:0
  }
  .min-w-\[1000px\] {
    min-width:1000px
  }
  .min-w-\[100px\] {
    min-width:100px
  }
  .min-w-\[1150px\] {
    min-width:1150px
  }
  .min-w-\[116px\] {
    min-width:116px
  }
  .min-w-\[120px\] {
    min-width:120px
  }
  .min-w-\[12px\] {
    min-width:12px
  }
  .min-w-\[12rem\] {
    min-width:12rem
  }
  .min-w-\[140px\] {
    min-width:140px
  }
  .min-w-\[150px\] {
    min-width:150px
  }
  .min-w-\[152px\] {
    min-width:152px
  }
  .min-w-\[165px\] {
    min-width:165px
  }
  .min-w-\[16px\] {
    min-width:16px
  }
  .min-w-\[184px\] {
    min-width:184px
  }
  .min-w-\[1px\] {
    min-width:1px
  }
  .min-w-\[200px\] {
    min-width:200px
  }
  .min-w-\[20px\] {
    min-width:20px
  }
  .min-w-\[220px\] {
    min-width:220px
  }
  .min-w-\[22px\] {
    min-width:22px
  }
  .min-w-\[235px\] {
    min-width:235px
  }
  .min-w-\[24px\] {
    min-width:24px
  }
  .min-w-\[263px\] {
    min-width:263px
  }
  .min-w-\[275px\] {
    min-width:275px
  }
  .min-w-\[280px\] {
    min-width:280px
  }
  .min-w-\[300px\] {
    min-width:300px
  }
  .min-w-\[30px\] {
    min-width:30px
  }
  .min-w-\[320px\] {
    min-width:320px
  }
  .min-w-\[32px\] {
    min-width:32px
  }
  .min-w-\[345px\] {
    min-width:345px
  }
  .min-w-\[360px\] {
    min-width:360px
  }
  .min-w-\[36px\] {
    min-width:36px
  }
  .min-w-\[400px\] {
    min-width:400px
  }
  .min-w-\[40px\] {
    min-width:40px
  }
  .min-w-\[50px\] {
    min-width:50px
  }
  .min-w-\[51px\] {
    min-width:51px
  }
  .min-w-\[560px\] {
    min-width:560px
  }
  .min-w-\[56px\] {
    min-width:56px
  }
  .min-w-\[570px\] {
    min-width:570px
  }
  .min-w-\[580px\] {
    min-width:580px
  }
  .min-w-\[59px\] {
    min-width:59px
  }
  .min-w-\[600px\] {
    min-width:600px
  }
  .min-w-\[625px\] {
    min-width:625px
  }
  .min-w-\[64px\] {
    min-width:64px
  }
  .min-w-\[8\.75rem\] {
    min-width:8.75rem
  }
  .min-w-\[800px\] {
    min-width:800px
  }
  .min-w-\[80px\] {
    min-width:80px
  }
  .min-w-\[8rem\] {
    min-width:8rem
  }
  .min-w-\[calc\(100vw-_30px\)\] {
    min-width:calc(100vw - 30px)
  }
  .min-w-\[var\(--radix-select-trigger-width\)\] {
    min-width:var(--radix-select-trigger-width)
  }
  .min-w-full {
    min-width:100%
  }
  .min-w-max {
    min-width:max-content
  }
  .min-w-min {
    min-width:min-content
  }
  .\!max-w-\[384px\] {
    max-width:384px!important
  }
  .\!max-w-\[628px\] {
    max-width:628px!important
  }
  .max-w-6xl {
    max-width:72rem
  }
  .max-w-\[100\%\] {
    max-width:100%
  }
  .max-w-\[1000px\] {
    max-width:1000px
  }
  .max-w-\[100px\] {
    max-width:100px
  }
  .max-w-\[100vw\] {
    max-width:100vw
  }
  .max-w-\[1020px\] {
    max-width:1020px
  }
  .max-w-\[1024px\] {
    max-width:1024px
  }
  .max-w-\[1080px\] {
    max-width:1080px
  }
  .max-w-\[108px\] {
    max-width:108px
  }
  .max-w-\[10rem\] {
    max-width:10rem
  }
  .max-w-\[1200px\] {
    max-width:1200px
  }
  .max-w-\[120px\] {
    max-width:120px
  }
  .max-w-\[128px\] {
    max-width:128px
  }
  .max-w-\[1300px\] {
    max-width:1300px
  }
  .max-w-\[140px\] {
    max-width:140px
  }
  .max-w-\[142px\] {
    max-width:142px
  }
  .max-w-\[1440px\] {
    max-width:1440px
  }
  .max-w-\[150px\] {
    max-width:150px
  }
  .max-w-\[156px\] {
    max-width:156px
  }
  .max-w-\[15rem\] {
    max-width:15rem
  }
  .max-w-\[170px\] {
    max-width:170px
  }
  .max-w-\[178px\] {
    max-width:178px
  }
  .max-w-\[180px\] {
    max-width:180px
  }
  .max-w-\[18px\] {
    max-width:18px
  }
  .max-w-\[192px\] {
    max-width:192px
  }
  .max-w-\[200px\] {
    max-width:200px
  }
  .max-w-\[20px\] {
    max-width:20px
  }
  .max-w-\[240px\] {
    max-width:240px
  }
  .max-w-\[24px\] {
    max-width:24px
  }
  .max-w-\[250px\] {
    max-width:250px
  }
  .max-w-\[252px\] {
    max-width:252px
  }
  .max-w-\[272px\] {
    max-width:272px
  }
  .max-w-\[276px\] {
    max-width:276px
  }
  .max-w-\[288px\] {
    max-width:288px
  }
  .max-w-\[290px\] {
    max-width:290px
  }
  .max-w-\[300px\] {
    max-width:300px
  }
  .max-w-\[302px\] {
    max-width:302px
  }
  .max-w-\[308px\] {
    max-width:308px
  }
  .max-w-\[316px\] {
    max-width:316px
  }
  .max-w-\[320px\] {
    max-width:320px
  }
  .max-w-\[32px\] {
    max-width:32px
  }
  .max-w-\[33\%\] {
    max-width:33%
  }
  .max-w-\[336px\] {
    max-width:336px
  }
  .max-w-\[340px\] {
    max-width:340px
  }
  .max-w-\[350px\] {
    max-width:350px
  }
  .max-w-\[360px\] {
    max-width:360px
  }
  .max-w-\[375px\] {
    max-width:375px
  }
  .max-w-\[380px\] {
    max-width:380px
  }
  .max-w-\[400px\] {
    max-width:400px
  }
  .max-w-\[40px\] {
    max-width:40px
  }
  .max-w-\[428px\] {
    max-width:428px
  }
  .max-w-\[450px\] {
    max-width:450px
  }
  .max-w-\[462px\] {
    max-width:462px
  }
  .max-w-\[468px\] {
    max-width:468px
  }
  .max-w-\[470px\] {
    max-width:470px
  }
  .max-w-\[480px\] {
    max-width:480px
  }
  .max-w-\[48px\] {
    max-width:48px
  }
  .max-w-\[50\%\] {
    max-width:50%
  }
  .max-w-\[500px\] {
    max-width:500px
  }
  .max-w-\[50px\] {
    max-width:50px
  }
  .max-w-\[529px\] {
    max-width:529px
  }
  .max-w-\[550px\] {
    max-width:550px
  }
  .max-w-\[560px\] {
    max-width:560px
  }
  .max-w-\[562px\] {
    max-width:562px
  }
  .max-w-\[565px\] {
    max-width:565px
  }
  .max-w-\[60\%\] {
    max-width:60%
  }
  .max-w-\[600px\] {
    max-width:600px
  }
  .max-w-\[60px\] {
    max-width:60px
  }
  .max-w-\[620px\] {
    max-width:620px
  }
  .max-w-\[640px\] {
    max-width:640px
  }
  .max-w-\[680px\] {
    max-width:680px
  }
  .max-w-\[700px\] {
    max-width:700px
  }
  .max-w-\[720px\] {
    max-width:720px
  }
  .max-w-\[732px\] {
    max-width:732px
  }
  .max-w-\[75\%\] {
    max-width:75%
  }
  .max-w-\[780px\] {
    max-width:780px
  }
  .max-w-\[80\%\] {
    max-width:80%
  }
  .max-w-\[800px\] {
    max-width:800px
  }
  .max-w-\[862px\] {
    max-width:862px
  }
  .max-w-\[86px\] {
    max-width:86px
  }
  .max-w-\[888px\] {
    max-width:888px
  }
  .max-w-\[88px\] {
    max-width:88px
  }
  .max-w-\[900px\] {
    max-width:900px
  }
  .max-w-\[90px\] {
    max-width:90px
  }
  .max-w-\[96px\] {
    max-width:96px
  }
  .max-w-full {
    max-width:100%
  }
  .max-w-lg {
    max-width:32rem
  }
  .max-w-max {
    max-width:max-content
  }
  .max-w-none {
    max-width:none
  }
  .max-w-screen-lc-lg {
    max-width:840px
  }
  .max-w-screen-xl {
    max-width:1200px
  }
  .max-w-sm {
    max-width:24rem
  }
  .max-w-xl {
    max-width:36rem
  }
  .max-w-xs {
    max-width:20rem
  }
  .flex-1 {
    flex:1 1 0%
  }
  .flex-\[0_0_28px\] {
    flex:0 0 28px
  }
  .flex-\[136px\] {
    flex:136px
  }
  .flex-\[2_2_0\%\] {
    flex:2 2 0%
  }
  .flex-\[4_4_0\%\] {
    flex:4 4 0%
  }
  .flex-auto {
    flex:1 1 auto
  }
  .flex-none {
    flex:none
  }
  .flex-shrink {
    flex-shrink:1
  }
  .flex-shrink-0 {
    flex-shrink:0
  }
  .shrink {
    flex-shrink:1
  }
  .shrink-0 {
    flex-shrink:0
  }
  .flex-grow {
    flex-grow:1
  }
  .flex-grow-0 {
    flex-grow:0
  }
  .grow {
    flex-grow:1
  }
  .grow-0 {
    flex-grow:0
  }
  
  .basis-0 {
    flex-basis:0px
  }
  .caption-bottom {
    caption-side:bottom
  }
  .border-collapse {
    border-collapse:collapse
  }
  .border-spacing-0 {
    --tw-border-spacing-x:0px;
    --tw-border-spacing-y:0px;
    border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y)
  }
  .origin-center {
    transform-origin:center
  }
  .origin-left {
    transform-origin:left
  }
  .origin-right {
    transform-origin:right
  }
  .\!-translate-x-1\/2 {
    --tw-translate-x:-50%!important;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important
  }
  .-translate-x-1\/2 {
    --tw-translate-x:-50%
  }
  .-translate-x-10,
  .-translate-x-1\/2 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-x-10 {
    --tw-translate-x:-2.5rem
  }
  .-translate-x-3 {
    --tw-translate-x:-0.75rem
  }
  .-translate-x-3,
  .-translate-x-3\/4 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-x-3\/4 {
    --tw-translate-x:-75%
  }
  .-translate-x-8 {
    --tw-translate-x:-2rem
  }
  .-translate-x-8,
  .-translate-x-\[320px\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-x-\[320px\] {
    --tw-translate-x:-320px
  }
  .-translate-x-full {
    --tw-translate-x:-100%
  }
  .-translate-x-full,
  .-translate-y-0 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-y-0 {
    --tw-translate-y:-0px
  }
  .-translate-y-0\.5 {
    --tw-translate-y:-0.125rem
  }
  .-translate-y-0\.5,
  .-translate-y-1\/2 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-y-1\/2 {
    --tw-translate-y:-50%
  }
  .-translate-y-1\/3 {
    --tw-translate-y:-33.333333%
  }
  .-translate-y-1\/3,
  .-translate-y-2 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-y-2 {
    --tw-translate-y:-0.5rem
  }
  .-translate-y-3\/4 {
    --tw-translate-y:-75%
  }
  .-translate-y-3\/4,
  .-translate-y-6 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-y-6 {
    --tw-translate-y:-1.5rem
  }
  .-translate-y-\[1\%\] {
    --tw-translate-y:-1%
  }
  .-translate-y-\[1\%\],
  .-translate-y-\[35\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-y-\[35\%\] {
    --tw-translate-y:-35%
  }
  .-translate-y-\[40\%\] {
    --tw-translate-y:-40%
  }
  .-translate-y-\[40\%\],
  .-translate-y-\[45\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-translate-y-\[45\%\] {
    --tw-translate-y:-45%
  }
  .-translate-y-full {
    --tw-translate-y:-100%
  }
  .-translate-y-full,
  .translate-x-0 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-0 {
    --tw-translate-x:0px
  }
  .translate-x-10 {
    --tw-translate-x:2.5rem
  }
  .translate-x-10,
  .translate-x-3 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-3 {
    --tw-translate-x:0.75rem
  }
  .translate-x-8 {
    --tw-translate-x:2rem
  }
  .translate-x-8,
  .translate-x-\[-100\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[-100\%\] {
    --tw-translate-x:-100%
  }
  .translate-x-\[-40\%\] {
    --tw-translate-x:-40%
  }
  .translate-x-\[-40\%\],
  .translate-x-\[-50\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[-50\%\] {
    --tw-translate-x:-50%
  }
  .translate-x-\[-55\%\] {
    --tw-translate-x:-55%
  }
  .translate-x-\[-55\%\],
  .translate-x-\[-85\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[-85\%\] {
    --tw-translate-x:-85%
  }
  .translate-x-\[18px\] {
    --tw-translate-x:18px
  }
  .translate-x-\[18px\],
  .translate-x-\[22px\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[22px\] {
    --tw-translate-x:22px
  }
  .translate-x-\[26px\] {
    --tw-translate-x:26px
  }
  .translate-x-\[26px\],
  .translate-x-\[29\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[29\%\] {
    --tw-translate-x:29%
  }
  .translate-x-\[2px\] {
    --tw-translate-x:2px
  }
  .translate-x-\[2px\],
  .translate-x-\[35\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[35\%\] {
    --tw-translate-x:35%
  }
  .translate-x-\[40\%\] {
    --tw-translate-x:40%
  }
  .translate-x-\[40\%\],
  .translate-x-\[50\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-x-\[50\%\] {
    --tw-translate-x:50%
  }
  .translate-x-full {
    --tw-translate-x:100%
  }
  .translate-x-full,
  .translate-y-0 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-0 {
    --tw-translate-y:0px
  }
  .translate-y-1 {
    --tw-translate-y:0.25rem
  }
  .translate-y-1,
  .translate-y-20 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-20 {
    --tw-translate-y:5rem
  }
  .translate-y-4 {
    --tw-translate-y:1rem
  }
  .translate-y-4,
  .translate-y-40 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-40 {
    --tw-translate-y:10rem
  }
  .translate-y-\[-300\%\] {
    --tw-translate-y:-300%
  }
  .translate-y-\[-300\%\],
  .translate-y-\[-40\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-\[-40\%\] {
    --tw-translate-y:-40%
  }
  .translate-y-\[-44\%\] {
    --tw-translate-y:-44%
  }
  .translate-y-\[-44\%\],
  .translate-y-\[-50\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-\[-50\%\] {
    --tw-translate-y:-50%
  }
  .translate-y-\[100\%\] {
    --tw-translate-y:100%
  }
  .translate-y-\[100\%\],
  .translate-y-\[110\%\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-\[110\%\] {
    --tw-translate-y:110%
  }
  .translate-y-\[250px\] {
    --tw-translate-y:250px
  }
  .translate-y-\[250px\],
  .translate-y-full {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .translate-y-full {
    --tw-translate-y:100%
  }
  .-rotate-0 {
    --tw-rotate:-0deg
  }
  .-rotate-0,
  .-rotate-45 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .-rotate-45 {
    --tw-rotate:-45deg
  }
  .-rotate-90 {
    --tw-rotate:-90deg
  }
  .-rotate-90,
  .rotate-0 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .rotate-0 {
    --tw-rotate:0deg
  }
  .rotate-180 {
    --tw-rotate:180deg
  }
  .rotate-180,
  .rotate-45 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .rotate-45 {
    --tw-rotate:45deg
  }
  .rotate-\[-16\.111deg\] {
    --tw-rotate:-16.111deg
  }
  .rotate-\[-16\.111deg\],
  .scale-0 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-0 {
    --tw-scale-x:0;
    --tw-scale-y:0
  }
  .scale-100 {
    --tw-scale-x:1;
    --tw-scale-y:1
  }
  .scale-100,
  .scale-50 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-50 {
    --tw-scale-x:.5;
    --tw-scale-y:.5
  }
  .scale-75 {
    --tw-scale-x:.75;
    --tw-scale-y:.75
  }
  .scale-75,
  .scale-95 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-95 {
    --tw-scale-x:.95;
    --tw-scale-y:.95
  }
  .scale-\[0\.65\] {
    --tw-scale-x:0.65;
    --tw-scale-y:0.65
  }
  .scale-\[0\.65\],
  .scale-\[0\.70\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-\[0\.70\] {
    --tw-scale-x:0.70;
    --tw-scale-y:0.70
  }
  .scale-\[0\.75\] {
    --tw-scale-x:0.75;
    --tw-scale-y:0.75
  }
  .scale-\[0\.75\],
  .scale-\[0\.80\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-\[0\.80\] {
    --tw-scale-x:0.80;
    --tw-scale-y:0.80
  }
  .scale-\[0\.85\] {
    --tw-scale-x:0.85;
    --tw-scale-y:0.85
  }
  .scale-\[0\.85\],
  .scale-\[0\.90\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-\[0\.90\] {
    --tw-scale-x:0.90;
    --tw-scale-y:0.90
  }
  .scale-\[0\.95\] {
    --tw-scale-x:0.95;
    --tw-scale-y:0.95
  }
  .scale-\[0\.95\],
  .scale-\[1\.1\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-\[1\.1\] {
    --tw-scale-x:1.1;
    --tw-scale-y:1.1
  }
  .scale-\[400\%\] {
    --tw-scale-x:400%;
    --tw-scale-y:400%
  }
  .scale-\[400\%\],
  .scale-\[calc\(11\/12\)\] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-\[calc\(11\/12\)\] {
    --tw-scale-x:0.91667;
    --tw-scale-y:0.91667
  }
  .-scale-x-100 {
    --tw-scale-x:-1
  }
  .-scale-x-100,
  .scale-y-75 {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .scale-y-75 {
    --tw-scale-y:.75
  }
  .transform {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .transform-gpu {
    transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .transform-none {
    transform:none
  }
  .flex-row {
    flex-direction:row
  }
  .flex-row-reverse {
    flex-direction:row-reverse
  }
  .flex-col {
    flex-direction:column
  }
  .flex-col-reverse {
    flex-direction:column-reverse
  }
  .flex-wrap {
    flex-wrap:wrap
  }
  .flex-wrap-reverse {
    flex-wrap:wrap-reverse
  }
  .\!flex-nowrap {
    flex-wrap:nowrap!important
  }
  .flex-nowrap {
    flex-wrap:nowrap
  }
  .place-content-center {
    place-content:center
  }
  .place-items-center {
    place-items:center
  }
  .content-center {
    align-content:center
  }
  .items-start {
    align-items:flex-start
  }
  .items-end {
    align-items:flex-end
  }
  .items-center {
    align-items:center
  }
  .items-stretch {
    align-items:stretch
  }
  .justify-start {
    justify-content:flex-start
  }
  .justify-end {
    justify-content:flex-end
  }
  .justify-center {
    justify-content:center
  }
  .justify-between {
    justify-content:space-between
  }
  .justify-around {
    justify-content:space-around
  }
  .gap-0 {
    gap:0
  }
  .gap-0\.5 {
    gap:.125rem
  }
  .gap-1 {
    gap:.25rem
  }
  .gap-1\.5 {
    gap:.375rem
  }
  .gap-10 {
    gap:2.5rem
  }
  .gap-12 {
    gap:3rem
  }
  .gap-14 {
    gap:3.5rem
  }
  .gap-16 {
    gap:4rem
  }
  .gap-2 {
    gap:.5rem
  }
  .gap-2\.5 {
    gap:.625rem
  }
  .gap-24 {
    gap:6rem
  }
  .gap-3 {
    gap:.75rem
  }
  .gap-3\.5 {
    gap:.875rem
  }
  .gap-4 {
    gap:1rem
  }
  .gap-5 {
    gap:1.25rem
  }
  .gap-6 {
    gap:1.5rem
  }
  .gap-7 {
    gap:1.75rem
  }
  .gap-8 {
    gap:2rem
  }
  .gap-\[10px\] {
    gap:10px
  }
  .gap-\[11px\] {
    gap:11px
  }
  .gap-\[1px\] {
    gap:1px
  }
  .gap-\[30px\] {
    gap:30px
  }
  .gap-\[38px\] {
    gap:38px
  }
  .gap-\[5px\] {
    gap:5px
  }
  .gap-x-12 {
    -moz-column-gap:3rem;
    column-gap:3rem
  }
  .gap-x-2 {
    -moz-column-gap:.5rem;
    column-gap:.5rem
  }
  .gap-x-\[26px\] {
    -moz-column-gap:26px;
    column-gap:26px
  }
  .gap-x-\[50px\] {
    -moz-column-gap:50px;
    column-gap:50px
  }
  .gap-y-10 {
    row-gap:2.5rem
  }
  .gap-y-2 {
    row-gap:.5rem
  }
  .gap-y-3 {
    row-gap:.75rem
  }
  .gap-y-4 {
    row-gap:1rem
  }
  .gap-y-5 {
    row-gap:1.25rem
  }
  .space-x-0>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(0px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(0px*var(--tw-space-x-reverse))
  }
  .space-x-0\.5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(.125rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(.125rem*var(--tw-space-x-reverse))
  }
  .space-x-1>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(.25rem*var(--tw-space-x-reverse))
  }
  .space-x-1\.5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(.375rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(.375rem*var(--tw-space-x-reverse))
  }
  .space-x-2>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(.5rem*var(--tw-space-x-reverse))
  }
  .space-x-2\.5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(.625rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(.625rem*var(--tw-space-x-reverse))
  }
  .space-x-3>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(.75rem*var(--tw-space-x-reverse))
  }
  .space-x-4>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(1rem*var(--tw-space-x-reverse))
  }
  .space-x-4\.5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(1.125rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(1.125rem*var(--tw-space-x-reverse))
  }
  .space-x-5>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(1.25rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(1.25rem*var(--tw-space-x-reverse))
  }
  .space-x-6>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(1.5rem*var(--tw-space-x-reverse))
  }
  .space-x-7>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(1.75rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(1.75rem*var(--tw-space-x-reverse))
  }
  .space-x-8>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(2rem*var(--tw-space-x-reverse))
  }
  .space-x-9>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(2.25rem*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(2.25rem*var(--tw-space-x-reverse))
  }
  .space-x-\[10px\]>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(10px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(10px*var(--tw-space-x-reverse))
  }
  .space-x-\[1px\]>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(1px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(1px*var(--tw-space-x-reverse))
  }
  .space-x-\[2px\]>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(2px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(2px*var(--tw-space-x-reverse))
  }
  .space-x-\[5px\]>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(5px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(5px*var(--tw-space-x-reverse))
  }
  .space-x-\[6px\]>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(6px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(6px*var(--tw-space-x-reverse))
  }
  .space-x-\[9px\]>:not([hidden])~:not([hidden]) {
    --tw-space-x-reverse:0;
    margin-left:calc(9px*(1 - var(--tw-space-x-reverse)));
    margin-right:calc(9px*var(--tw-space-x-reverse))
  }
  .space-y-0>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(0px*var(--tw-space-y-reverse));
    margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-0\.5>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(.125rem*var(--tw-space-y-reverse));
    margin-top:calc(.125rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-1>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(.25rem*var(--tw-space-y-reverse));
    margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-1\.5>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(.375rem*var(--tw-space-y-reverse));
    margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-2>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(.5rem*var(--tw-space-y-reverse));
    margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-2\.5>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(.625rem*var(--tw-space-y-reverse));
    margin-top:calc(.625rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-3>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(.75rem*var(--tw-space-y-reverse));
    margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-4>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(1rem*var(--tw-space-y-reverse));
    margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-5>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));
    margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-6>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));
    margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-7>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(1.75rem*var(--tw-space-y-reverse));
    margin-top:calc(1.75rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-8>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(2rem*var(--tw-space-y-reverse));
    margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))
  }
  .space-y-\[18px\]>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse:0;
    margin-bottom:calc(18px*var(--tw-space-y-reverse));
    margin-top:calc(18px*(1 - var(--tw-space-y-reverse)))
  }
  .divide-y>:not([hidden])~:not([hidden]) {
    --tw-divide-y-reverse:0;
    border-bottom-width:calc(1px*var(--tw-divide-y-reverse));
    border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .rounded-full {
    border-radius:9999px
  }
  
  .px-\[13px\] {
    padding-left:13px;
    padding-right:13px
  }
  
  .pb-3 {
    padding-bottom:.75rem
  }
  
  .text-left {
    text-align:left
  }
  .text-center {
    text-align:center
  }
  .text-right {
    text-align:right
  }
  .text-justify {
    text-align:justify
  }
  .align-top {
    vertical-align:top
  }
  .align-middle {
    vertical-align:middle
  }
  .align-text-bottom {
    vertical-align:text-bottom
  }
  .\!text-sm {
    font-size:.875rem!important;
    line-height:1.25rem!important
  }
  .text-\[24px\] {
    font-size:24px
  }
  .text-base {
    font-size:1rem;
    line-height:1.5rem
  }
  .text-body {
    font-size:14px;
    line-height:20px
  }
  .text-caption {
    font-size:12px;
    line-height:16px
  }
  .text-lg {
    font-size:1.125rem;
    line-height:1.75rem
  }
  .text-md {
    font-size:14px;
    line-height:22px
  }
  .text-sm {
    font-size:.875rem;
    line-height:1.25rem
  }
  .text-title-large {
    font-size:24px;
    line-height:32px
  }
  .text-title-medium {
    font-size:20px;
    line-height:28px
  }
  .text-title-small {
    font-size:16px;
    line-height:24px
  }
  .text-xl {
    font-size:1.25rem;
    line-height:1.75rem
  }
  .text-xs {
    font-size:.8rem;
    line-height:1rem;
    font-weight:530;
  }
  .font-\[18px\] {
    font-weight:18px
  }
  .font-\[400\] {
    font-weight:400
  }
  .font-\[500\] {
    font-weight:500
  }
  .font-bold {
    font-weight:700
  }
  .font-medium {
    font-weight:530
  }
  .font-normal {
    font-weight:400
  }
  .font-semibold {
    font-weight:600
  }
  .uppercase {
    text-transform:uppercase
  }
  .capitalize {
    text-transform:capitalize
  }
  
  :is(.dark .dark\:bg-dark-label-1) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-label-2) {
    background-color:#eff1f6bf
  }
  
  :is(.dark .dark\:bg-dark-green-s) {
    --tw-bg-opacity:1;
    background-color:rgb(44 187 93/var(--tw-bg-opacity))
  }
  .bg-green-1 {
    background-color:#2db55d26
  }
  
  :is(.dark .dark\:bg-dark-yellow) {
    --tw-bg-opacity:1;
    background-color:rgb(175 141 214/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-yellow-1) {
    background-color:#3f2c55
  }
  
  :is(.dark .dark\:bg-dark-layer-1) {
    --tw-bg-opacity:1;
    background-color:rgb(26 27 39/var(--tw-bg-opacity))
  }
  
  :is(.dark .dark\:bg-dark-red-1) {
    background-color:#ef474340
  }
  :is(.dark .dark\:bg-dark-red-s) {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  .solved-circle-ring{
    color:#6692d7
  }
  
  .bg-olive {
    --tw-bg-opacity:1;
    background-color:rgb(0 175 155/var(--tw-bg-opacity))
  }
  
  
  :is(.dark .dark\:text-dark-gray-4) {
    --tw-text-opacity:1;
    color:rgb(42 49 63/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-label-1) {
    --tw-text-opacity:1;
    color:rgb(230 230 230/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-label-2) {
    color:#eff1f6bf
  }
  :is(.dark .dark\:text-dark-label-3) {
    color:#38bdae
  }
  :is(.dark .dark\:text-dark-label-4) {
    color:#ebebf54d
  }
  
  .card{
    width: 420px;
  }
  
  .pt-4 {
    padding-top:1rem
  }

  </style>
  <foreignObject x="0" y="0" width="400" height="186">
    <div xmlns="http://www.w3.org/1999/xhtml" class="min-w-max max-w-full w-full flex-1">
      <div
        class="lc-xl:flex-row lc-xl:space-y-0 flex w-full flex-col space-x-0 space-y-4 lc-xl:space-x-4 lc-lg:mt-0 mt-4 dark card">
        <div class="min-w-max max-w-full w-full flex-1">
          <div
            class="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-xl:h-[186px] min-h-[186px] w-full pb-3 pt-4">
            <div class="px-[13px] text-xs font-medium text-label-3 dark:text-dark-label-3">Solved Problems</div>
            <div class="lc-xl:mx-8 mx-3 flex items-center">
              <div class="mr-8 mt-6 flex min-w-[100px] justify-center">
                <div class="shrink-1 z-base relative max-h-[100px] max-w-[100px]"><svg
                    class="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                    <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="4" stroke-linecap="round"
                      stroke="currentColor" class="text-gray-4 dark:text-dark-gray-4 w-[100px]"></circle>
                    <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="6" stroke-linecap="round"
                      stroke="currentColor"
                      class="cursor-pointer solved-circle-ring dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                      stroke-dasharray="4.426698518906358 284.5998256113546" stroke-dashoffset="0" data-difficulty="ALL">
                    </circle>
                  </svg>
                  <div
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                    <div>
                      <div class="text-[24px] font-medium text-label-1 dark:text-dark-label-1">48</div>
                      <div class="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">Solved</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lc-xl:max-w-[228px] flex w-full flex-col space-y-4">
                <div class="space-y-2">
                  <div class="flex w-full items-end text-xs">
                    <div class="w-[53px] text-label-3 dark:text-dark-label-3">Easy</div>
                    <div class="flex flex-1 items-center"><span
                        class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">16</span><span
                        class="text-xs font-medium text-label-4 dark:text-dark-label-4">/790</span></div>
                    <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3"><span
                        class="space-x-1.5"><span>Beats</span><span
                          class="font-medium text-label-2 dark:text-dark-label-2">45.6%</span></span></div>
                  </div>
                  <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                    <div class="absolute h-full w-full bg-green-1 dark:bg-dark-green-1"></div>
                    <div
                      class="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive"
                      style="width: 2.02532%;"></div>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex w-full items-end text-xs">
                    <div class="w-[53px] text-label-3 dark:text-dark-label-3">Medium</div>
                    <div class="flex flex-1 items-center"><span
                        class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">26</span><span
                        class="text-xs font-medium text-label-4 dark:text-dark-label-4">/1646</span></div>
                    <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3"><span
                        class="space-x-1.5"><span>Beats</span><span
                          class="font-medium text-label-2 dark:text-dark-label-2">62.7%</span></span></div>
                  </div>
                  <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                    <div class="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1"></div>
                    <div
                      class="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow"
                      style="width: 1.57959%;"></div>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex w-full items-end text-xs">
                    <div class="w-[53px] text-label-3 dark:text-dark-label-3">Hard</div>
                    <div class="flex flex-1 items-center"><span
                        class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">6</span><span
                        class="text-xs font-medium text-label-4 dark:text-dark-label-4">/698</span></div>
                    <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3"><span
                        class="space-x-1.5"><span>Beats</span><span
                          class="font-medium text-label-2 dark:text-dark-label-2">51.2%</span></span></div>
                  </div>
                  <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                    <div class="absolute h-full w-full bg-red-1 dark:bg-dark-red-1"></div>
                    <div
                      class="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s"
                      style="width: 0.859599%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </foreignObject>
</svg>`;
