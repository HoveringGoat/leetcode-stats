import { AllQuestionsCountNode, SubmissionCountNode } from "../types";

export const generateStatSVG = (
  allQuestionsCount: AllQuestionsCountNode[],
  acSubmissionNum: SubmissionCountNode[]
) =>
  `
  <svg class="top-level-svg-wrapper" xmlns="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  width="400" height="186">
  <style>@font-face {
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
  /* 
  .dark {
    --sd-background:0 0% 6%;
    --sd-background-gray:0 0% 6%;
    --sd-foreground:0 0% 96%;
    --sd-card:0 0% 15%;
    --sd-card-foreground:0 0% 96%;
    --sd-popover:0 0% 20%;
    --sd-popover-foreground:0 0% 98%;
    --sd-primary:0 0% 96%;
    --sd-primary-foreground:240 5.9% 10%;
    --sd-secondary:0 0% 22%;
    --sd-secondary-foreground:0 0% 98%;
    --sd-muted:0 0% 22%;
    --sd-muted-foreground:0 0% 66%;
    --sd-accent:0,0%,100%,0.08;
    --sd-accent-foreground:0 0% 98%;
    --sd-destructive:356 80% 35%;
    --sd-destructive-foreground:0 0% 98%;
    --sd-border:0,0%,100%,0.1;
    --sd-input:0,0%,100%,0.14;
    --sd-ring:240 4.9% 83.9%;
    --sd-danger:var(--sd-red-600);
    --sd-warning:var(--sd-yellow-600);
    --sd-info:var(--sd-blue-600);
    --sd-success:var(--sd-green-600)
  } */
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
  .animate-\[wiggle_1s_ease-in-out_infinite\] {
    animation:wiggle 1s ease-in-out infinite
  }
  @keyframes pulse {
    50% {
      opacity:.5
    }
  }
  .animate-pulse {
    animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite
  }
  @keyframes spin {
    to {
      transform:rotate(1turn)
    }
  }
  .animate-spin {
    animation:spin 1s linear infinite
  }
  .\!cursor-default {
    cursor:default!important
  }
  .cursor-auto {
    cursor:auto
  }
  .cursor-col-resize {
    cursor:col-resize
  }
  .cursor-default {
    cursor:default
  }
  .cursor-grab {
    cursor:grab
  }
  .cursor-help {
    cursor:help
  }
  .cursor-not-allowed {
    cursor:not-allowed
  }
  .cursor-pointer {
    cursor:pointer
  }
  .cursor-text {
    cursor:text
  }
  .touch-none {
    touch-action:none
  }
  .select-none {
    -webkit-user-select:none;
    user-select:none
  }
  .resize-none {
    resize:none
  }
  .resize {
    resize:both
  }
  .list-disc {
    list-style-type:disc
  }
  .list-none {
    list-style-type:none
  }
  .appearance-none {
    -webkit-appearance:none;
    appearance:none
  }
  .grid-flow-row {
    grid-auto-flow:row
  }
  .grid-flow-col {
    grid-auto-flow:column
  }
  .grid-cols-1 {
    grid-template-columns:repeat(1,minmax(0,1fr))
  }
  .grid-cols-2 {
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
  .grid-cols-3 {
    grid-template-columns:repeat(3,minmax(0,1fr))
  }
  .grid-cols-4 {
    grid-template-columns:repeat(4,minmax(0,1fr))
  }
  .grid-cols-7 {
    grid-template-columns:repeat(7,minmax(0,1fr))
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
  .divide-solid>:not([hidden])~:not([hidden]) {
    border-style:solid
  }
  .divide-gray-3>:not([hidden])~:not([hidden]) {
    --tw-divide-opacity:1;
    border-color:rgb(229 229 229/var(--tw-divide-opacity))
  }
  .self-start {
    align-self:flex-start
  }
  .self-end {
    align-self:flex-end
  }
  .self-center {
    align-self:center
  }
  .justify-self-end {
    justify-self:end
  }
  .overflow-auto {
    overflow:auto
  }
  .overflow-hidden {
    overflow:hidden
  }
  .overflow-clip {
    overflow:clip
  }
  .\!overflow-visible {
    overflow:visible!important
  }
  .overflow-visible {
    overflow:visible
  }
  .overflow-scroll {
    overflow:scroll
  }
  .overflow-x-auto {
    overflow-x:auto
  }
  .overflow-y-auto {
    overflow-y:auto
  }
  .overflow-x-hidden {
    overflow-x:hidden
  }
  .overflow-y-hidden {
    overflow-y:hidden
  }
  .overflow-y-visible {
    overflow-y:visible
  }
  .overflow-y-scroll {
    overflow-y:scroll
  }
  .overscroll-none {
    overscroll-behavior:none
  }
  .scroll-smooth {
    scroll-behavior:smooth
  }
  .truncate {
    overflow:hidden;
    white-space:nowrap
  }
  .overflow-ellipsis,
  .text-ellipsis,
  .truncate {
    text-overflow:ellipsis
  }
  .whitespace-normal {
    white-space:normal
  }
  .whitespace-nowrap {
    white-space:nowrap
  }
  .whitespace-pre {
    white-space:pre
  }
  .whitespace-pre-line {
    white-space:pre-line
  }
  .whitespace-pre-wrap {
    white-space:pre-wrap
  }
  .whitespace-break-spaces {
    white-space:break-spaces
  }
  .break-normal {
    overflow-wrap:normal;
    word-break:normal
  }
  .break-words {
    overflow-wrap:break-word
  }
  .break-all {
    word-break:break-all
  }
  .\!rounded {
    border-radius:5px!important
  }
  .\!rounded-full {
    border-radius:9999px!important
  }
  .\!rounded-lg {
    border-radius:.5rem!important
  }
  .rounded {
    border-radius:5px
  }
  .rounded-1\/2 {
    border-radius:50%
  }
  .rounded-2xl {
    border-radius:1rem
  }
  .rounded-\[10\.5px\] {
    border-radius:10.5px
  }
  .rounded-\[100\%\] {
    border-radius:100%
  }
  .rounded-\[100px\] {
    border-radius:100px
  }
  .rounded-\[10px\] {
    border-radius:10px
  }
  .rounded-\[12px\] {
    border-radius:12px
  }
  .rounded-\[13px\] {
    border-radius:13px
  }
  .rounded-\[13px_13px_0_0\] {
    border-radius:13px 13px 0 0
  }
  .rounded-\[14px\] {
    border-radius:14px
  }
  .rounded-\[15px\] {
    border-radius:15px
  }
  .rounded-\[16px\] {
    border-radius:16px
  }
  .rounded-\[17px\] {
    border-radius:17px
  }
  .rounded-\[18px\] {
    border-radius:18px
  }
  .rounded-\[1px\] {
    border-radius:1px
  }
  .rounded-\[20px\] {
    border-radius:20px
  }
  .rounded-\[21px\] {
    border-radius:21px
  }
  .rounded-\[24px\] {
    border-radius:24px
  }
  .rounded-\[2px\] {
    border-radius:2px
  }
  .rounded-\[34px\] {
    border-radius:34px
  }
  .rounded-\[38px\] {
    border-radius:38px
  }
  .rounded-\[3px\] {
    border-radius:3px
  }
  .rounded-\[49px\] {
    border-radius:49px
  }
  .rounded-\[4px\] {
    border-radius:4px
  }
  .rounded-\[50px\] {
    border-radius:50px
  }
  .rounded-\[5px\] {
    border-radius:5px
  }
  .rounded-\[6px\] {
    border-radius:6px
  }
  .rounded-\[7px\] {
    border-radius:7px
  }
  .rounded-\[8px\] {
    border-radius:8px
  }
  .rounded-\[999px\] {
    border-radius:999px
  }
  .rounded-\[9px\] {
    border-radius:9px
  }
  .rounded-\[inherit\] {
    border-radius:inherit
  }
  .rounded-full {
    border-radius:9999px
  }
  .rounded-lg {
    border-radius:.5rem
  }
  .rounded-md {
    border-radius:.375rem
  }
  .rounded-none {
    border-radius:0
  }
  .rounded-sd {
    border-radius:var(--sd-radius)
  }
  .rounded-sd-lg {
    border-radius:calc(var(--sd-radius) + 5px)
  }
  .rounded-sd-md {
    border-radius:var(--sd-radius)
  }
  .rounded-sd-sm {
    border-radius:calc(var(--sd-radius) - 3px)
  }
  .rounded-sd-xl {
    border-radius:calc(var(--sd-radius) + 13px)
  }
  .rounded-sm {
    border-radius:.125rem
  }
  .rounded-xl {
    border-radius:.75rem
  }
  .rounded-b {
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px
  }
  .rounded-b-\[13px\] {
    border-bottom-left-radius:13px;
    border-bottom-right-radius:13px
  }
  .rounded-b-\[8px\] {
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px
  }
  .rounded-b-full {
    border-bottom-left-radius:9999px;
    border-bottom-right-radius:9999px
  }
  .rounded-b-lg {
    border-bottom-left-radius:.5rem;
    border-bottom-right-radius:.5rem
  }
  .rounded-l-\[5px\] {
    border-bottom-left-radius:5px;
    border-top-left-radius:5px
  }
  .rounded-l-lg {
    border-bottom-left-radius:.5rem;
    border-top-left-radius:.5rem
  }
  .rounded-l-md {
    border-bottom-left-radius:.375rem;
    border-top-left-radius:.375rem
  }
  .rounded-l-none {
    border-bottom-left-radius:0;
    border-top-left-radius:0
  }
  .rounded-r-\[4px\] {
    border-bottom-right-radius:4px;
    border-top-right-radius:4px
  }
  .rounded-r-\[5px\] {
    border-bottom-right-radius:5px;
    border-top-right-radius:5px
  }
  .rounded-r-lg {
    border-bottom-right-radius:.5rem;
    border-top-right-radius:.5rem
  }
  .rounded-r-md {
    border-bottom-right-radius:.375rem;
    border-top-right-radius:.375rem
  }
  .rounded-r-none {
    border-bottom-right-radius:0;
    border-top-right-radius:0
  }
  .rounded-t {
    border-top-left-radius:5px;
    border-top-right-radius:5px
  }
  .rounded-t-\[13px\] {
    border-top-left-radius:13px;
    border-top-right-radius:13px
  }
  .rounded-t-\[20px\] {
    border-top-left-radius:20px;
    border-top-right-radius:20px
  }
  .rounded-t-\[21px\] {
    border-top-left-radius:21px;
    border-top-right-radius:21px
  }
  .rounded-t-\[24px\] {
    border-top-left-radius:24px;
    border-top-right-radius:24px
  }
  .rounded-t-full {
    border-top-left-radius:9999px;
    border-top-right-radius:9999px
  }
  .rounded-t-lg {
    border-top-left-radius:.5rem;
    border-top-right-radius:.5rem
  }
  .rounded-bl {
    border-bottom-left-radius:5px
  }
  .rounded-bl-\[13px\] {
    border-bottom-left-radius:13px
  }
  .rounded-bl-lg {
    border-bottom-left-radius:.5rem
  }
  .rounded-br {
    border-bottom-right-radius:5px
  }
  .rounded-br-\[1px\] {
    border-bottom-right-radius:1px
  }
  .rounded-br-lg {
    border-bottom-right-radius:.5rem
  }
  .rounded-tl {
    border-top-left-radius:5px
  }
  .rounded-tl-\[8px\] {
    border-top-left-radius:8px
  }
  .rounded-tl-lg {
    border-top-left-radius:.5rem
  }
  .rounded-tl-sd-sm {
    border-top-left-radius:calc(var(--sd-radius) - 3px)
  }
  .rounded-tr {
    border-top-right-radius:5px
  }
  .rounded-tr-\[13px\] {
    border-top-right-radius:13px
  }
  .rounded-tr-\[8px\] {
    border-top-right-radius:8px
  }
  .rounded-tr-lg {
    border-top-right-radius:.5rem
  }
  .border {
    border-width:1px
  }
  .border-0 {
    border-width:0
  }
  .border-2 {
    border-width:2px
  }
  .border-4 {
    border-width:4px
  }
  .border-\[1\.5px\] {
    border-width:1.5px
  }
  .border-\[1px\] {
    border-width:1px
  }
  .border-\[2px\] {
    border-width:2px
  }
  .border-\[3px\] {
    border-width:3px
  }
  .border-\[5px\] {
    border-width:5px
  }
  .border-\[7px\] {
    border-width:7px
  }
  .border-b {
    border-bottom-width:1px
  }
  .border-b-0 {
    border-bottom-width:0
  }
  .border-b-2 {
    border-bottom-width:2px
  }
  .border-b-\[1\.5px\] {
    border-bottom-width:1.5px
  }
  .border-b-\[1px\] {
    border-bottom-width:1px
  }
  .border-b-\[256px\] {
    border-bottom-width:256px
  }
  .border-b-\[2px\] {
    border-bottom-width:2px
  }
  .border-l {
    border-left-width:1px
  }
  .border-l-0,
  .border-l-\[0\] {
    border-left-width:0
  }
  .border-r {
    border-right-width:1px
  }
  .border-r-0 {
    border-right-width:0
  }
  .border-r-2 {
    border-right-width:2px
  }
  .border-r-\[1px\] {
    border-right-width:1px
  }
  .border-r-\[256px\] {
    border-right-width:256px
  }
  .border-t,
  .border-t-\[1px\] {
    border-top-width:1px
  }
  .border-t-\[256px\] {
    border-top-width:256px
  }
  .border-solid {
    border-style:solid
  }
  .border-dashed {
    border-style:dashed
  }
  .border-none {
    border-style:none
  }
  .border-\[\#00000014\] {
    border-color:#00000014
  }
  .border-\[\#007AFF\] {
    --tw-border-opacity:1;
    border-color:rgb(0 122 255/var(--tw-border-opacity))
  }
  .border-\[\#1A1A1A\] {
    --tw-border-opacity:1;
    border-color:rgb(26 26 26/var(--tw-border-opacity))
  }
  .border-\[\#737373\] {
    --tw-border-opacity:1;
    border-color:rgb(115 115 115/var(--tw-border-opacity))
  }
  .border-\[\#FFD600\] {
    --tw-border-opacity:1;
    border-color:rgb(255 214 0/var(--tw-border-opacity))
  }
  .border-\[\#b0acac\] {
    --tw-border-opacity:1;
    border-color:rgb(176 172 172/var(--tw-border-opacity))
  }
  .border-\[rgba\(0 0 0 0\.05\)\] {
    border-color:#0000000d
  }
  .border-\[rgba\(255 255 255 0\.40\)\] {
    border-color:#fff6
  }
  .border-blue {
    --tw-border-opacity:1;
    border-color:rgb(0 122 255/var(--tw-border-opacity))
  }
  .border-blue-10 {
    border-color:var(--blue-10)
  }
  .border-blue-100 {
    border-color:var(--blue-100)
  }
  .border-blue-2 {
    border-color:#007aff4d
  }
  .border-blue-20 {
    border-color:var(--blue-20)
  }
  .border-blue-40 {
    border-color:var(--blue-40)
  }
  .border-blue-60 {
    border-color:var(--blue-60)
  }
  .border-blue-80 {
    border-color:var(--blue-80)
  }
  .border-blue-s {
    --tw-border-opacity:1;
    border-color:rgb(0 122 255/var(--tw-border-opacity))
  }
  .border-border-primary {
    border-color:var(--border-primary)
  }
  .border-border-quaternary {
    border-color:var(--border-quaternary)
  }
  .border-border-secondary {
    border-color:var(--border-secondary)
  }
  .border-border-tertiary {
    border-color:var(--border-tertiary)
  }
  .border-brand-gray {
    border-color:var(--brand-gray)
  }
  .border-brand-logo {
    border-color:var(--brand-logo)
  }
  .border-brand-orange {
    border-color:var(--brand-orange)
  }
  .border-current {
    border-color:currentColor
  }
  .border-dark-blue-s {
    --tw-border-opacity:1;
    border-color:rgb(10 132 255/var(--tw-border-opacity))
  }
  .border-dark-divider-1 {
    border-color:#f7faff3d
  }
  .border-dark-fill-2 {
    border-color:#ffffff24
  }
  .border-dark-fill-4 {
    border-color:#ffffff12
  }
  .border-dark-label-3 {
    border-color:#eff2f699
  }
  .border-dark-overlay-1 {
    --tw-border-opacity:1;
    border-color:rgb(26 26 26/var(--tw-border-opacity))
  }
  .border-dark-overlay-3 {
    --tw-border-opacity:1;
    border-color:rgb(48 48 48/var(--tw-border-opacity))
  }
  .border-dark-red-s {
    --tw-border-opacity:1;
    border-color:rgb(239 71 67/var(--tw-border-opacity))
  }
  .border-difficulty-easy {
    border-color:var(--difficulty-easy)
  }
  .border-difficulty-hard {
    border-color:var(--difficulty-hard)
  }
  .border-difficulty-medium {
    border-color:var(--difficulty-medium)
  }
  .border-divider-1 {
    border-color:#00000024
  }
  .border-divider-2 {
    border-color:#0000001a
  }
  .border-divider-3 {
    border-color:#0000000d
  }
  .border-divider-4 {
    border-color:#00000008
  }
  .border-divider-border-2 {
    --tw-border-opacity:1;
    border-color:rgb(240 240 240/var(--tw-border-opacity))
  }
  .border-fill-1 {
    border-color:#000a201f
  }
  .border-fill-2 {
    border-color:#000a201a
  }
  .border-fill-3 {
    border-color:#000a200d
  }
  .border-fill-4 {
    border-color:#000a2008
  }
  .border-fill-primary {
    border-color:var(--fill-primary)
  }
  .border-fill-pure {
    border-color:var(--fill-pure)
  }
  .border-fill-quaternary {
    border-color:var(--fill-quaternary)
  }
  .border-fill-secondary {
    border-color:var(--fill-secondary)
  }
  .border-fill-tertiary {
    border-color:var(--fill-tertiary)
  }
  .border-fixed-black {
    border-color:var(--fixed-black)
  }
  .border-fixed-white {
    border-color:var(--fixed-white)
  }
  .border-gray-10 {
    border-color:var(--gray-10)
  }
  .border-gray-100 {
    border-color:var(--gray-100)
  }
  .border-gray-2 {
    --tw-border-opacity:1;
    border-color:rgb(240 240 240/var(--tw-border-opacity))
  }
  .border-gray-20 {
    border-color:var(--gray-20)
  }
  .border-gray-3 {
    --tw-border-opacity:1;
    border-color:rgb(229 229 229/var(--tw-border-opacity))
  }
  .border-gray-4 {
    --tw-border-opacity:1;
    border-color:rgb(223 223 223/var(--tw-border-opacity))
  }
  .border-gray-40 {
    border-color:var(--gray-40)
  }
  .border-gray-60 {
    border-color:var(--gray-60)
  }
  .border-gray-7 {
    --tw-border-opacity:1;
    border-color:rgb(89 89 89/var(--tw-border-opacity))
  }
  .border-gray-80 {
    border-color:var(--gray-80)
  }
  .border-green-10 {
    border-color:var(--green-10)
  }
  .border-green-100 {
    border-color:var(--green-100)
  }
  .border-green-2 {
    border-color:#2db55d4d
  }
  .border-green-20 {
    border-color:var(--green-20)
  }
  .border-green-40 {
    border-color:var(--green-40)
  }
  .border-green-60 {
    border-color:var(--green-60)
  }
  .border-green-80 {
    border-color:var(--green-80)
  }
  .border-green-s {
    --tw-border-opacity:1;
    border-color:rgb(45 181 93/var(--tw-border-opacity))
  }
  .border-label-1 {
    --tw-border-opacity:1;
    border-color:rgb(38 38 38/var(--tw-border-opacity))
  }
  .border-label-2 {
    border-color:#262626bf
  }
  .border-label-3 {
    border-color:#3c3c4399
  }
  .border-label-4 {
    border-color:#3c3c434d
  }
  .border-layer-01 {
    border-color:var(--layer-01)
  }
  .border-layer-02 {
    border-color:var(--layer-02)
  }
  .border-layer-03 {
    border-color:var(--layer-03)
  }
  .border-layer-1 {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .border-layer-bg-gray {
    border-color:var(--layer-bg-gray)
  }
  .border-layer-bg-pure {
    border-color:var(--layer-bg-pure)
  }
  .border-lc-button-primary {
    --tw-border-opacity:1;
    border-color:rgb(33 33 33/var(--tw-border-opacity))
  }
  .border-lc-fill-01 {
    border-color:#0000000d
  }
  .border-lc-fill-02 {
    border-color:#00000014
  }
  .border-lc-fill-03 {
    border-color:#00000024
  }
  .border-lc-fixed-black {
    --tw-border-opacity:1;
    border-color:rgb(0 0 0/var(--tw-border-opacity))
  }
  .border-lc-fixed-white,
  .border-lc-layer-01 {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .border-lc-layer-02 {
    --tw-border-opacity:1;
    border-color:rgb(245 245 245/var(--tw-border-opacity))
  }
  .border-lc-layer-03 {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .border-lc-layer-04 {
    border-color:#0009
  }
  .border-lc-support-error-background {
    border-color:#ff334b1f
  }
  .border-lc-support-info-background {
    border-color:#007aff1f
  }
  .border-lc-support-success-background {
    border-color:#15bd661f
  }
  .border-lc-support-warning-background {
    border-color:#ffb8001f
  }
  .border-lc-system-primary {
    --tw-border-opacity:1;
    border-color:rgb(0 122 255/var(--tw-border-opacity))
  }
  .border-lc-system-primary-active {
    --tw-border-opacity:1;
    border-color:rgb(46 154 255/var(--tw-border-opacity))
  }
  .border-magenta-10 {
    border-color:var(--magenta-10)
  }
  .border-magenta-100 {
    border-color:var(--magenta-100)
  }
  .border-magenta-20 {
    border-color:var(--magenta-20)
  }
  .border-magenta-40 {
    border-color:var(--magenta-40)
  }
  .border-magenta-60 {
    border-color:var(--magenta-60)
  }
  .border-magenta-80 {
    border-color:var(--magenta-80)
  }
  .border-message-danger {
    border-color:var(--message-danger)
  }
  .border-message-primary {
    border-color:var(--message-primary)
  }
  .border-message-success {
    border-color:var(--message-success)
  }
  .border-message-warning {
    border-color:var(--message-warning)
  }
  .border-opacity-yellow-60 {
    border-color:var(--opacity-yellow-60)
  }
  .border-overlay-1 {
    --tw-border-opacity:1;
    border-color:rgb(247 248 250/var(--tw-border-opacity))
  }
  .border-overlay-3,
  .border-paper {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .border-purple-10 {
    border-color:var(--purple-10)
  }
  .border-purple-100 {
    border-color:var(--purple-100)
  }
  .border-purple-20 {
    border-color:var(--purple-20)
  }
  .border-purple-40 {
    border-color:var(--purple-40)
  }
  .border-purple-60 {
    border-color:var(--purple-60)
  }
  .border-purple-80 {
    border-color:var(--purple-80)
  }
  .border-red-10 {
    border-color:var(--red-10)
  }
  .border-red-100 {
    border-color:var(--red-100)
  }
  .border-red-20 {
    border-color:var(--red-20)
  }
  .border-red-40 {
    border-color:var(--red-40)
  }
  .border-red-60 {
    border-color:var(--red-60)
  }
  .border-red-80 {
    border-color:var(--red-80)
  }
  .border-red-s {
    --tw-border-opacity:1;
    border-color:rgb(239 71 67/var(--tw-border-opacity))
  }
  .border-sd-blue-600 {
    border-color:hsl(var(--sd-blue-600))
  }
  .border-sd-border {
    border-color:hsl(var(--sd-border))
  }
  .border-sd-destructive\/50 {
    border-color:hsl(var(--sd-destructive)/.5)
  }
  .border-sd-input {
    border-color:hsl(var(--sd-input))
  }
  .border-sd-muted {
    border-color:hsl(var(--sd-muted))
  }
  .border-sd-primary {
    border-color:hsl(var(--sd-primary))
  }
  .border-sd-ring {
    border-color:hsl(var(--sd-ring))
  }
  .border-special-kiwi {
    border-color:var(--special-kiwi)
  }
  .border-special-lavender {
    border-color:var(--special-lavender)
  }
  .border-special-rose {
    border-color:var(--special-rose)
  }
  .border-special-skyler {
    border-color:var(--special-skyler)
  }
  .border-special-sunny {
    border-color:var(--special-sunny)
  }
  .border-teal-10 {
    border-color:var(--teal-10)
  }
  .border-teal-100 {
    border-color:var(--teal-100)
  }
  .border-teal-20 {
    border-color:var(--teal-20)
  }
  .border-teal-40 {
    border-color:var(--teal-40)
  }
  .border-teal-60 {
    border-color:var(--teal-60)
  }
  .border-teal-80 {
    border-color:var(--teal-80)
  }
  .border-text-primary {
    border-color:var(--text-primary)
  }
  .border-text-quaternary {
    border-color:var(--text-quaternary)
  }
  .border-text-reverse {
    border-color:var(--text-reverse)
  }
  .border-text-secondary {
    border-color:var(--text-secondary)
  }
  .border-text-tertiary {
    border-color:var(--text-tertiary)
  }
  .border-transparent {
    border-color:#0000
  }
  .border-white {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .border-yellow-10 {
    border-color:var(--yellow-10)
  }
  .border-yellow-100 {
    border-color:var(--yellow-100)
  }
  .border-yellow-20 {
    border-color:var(--yellow-20)
  }
  .border-yellow-40 {
    border-color:var(--yellow-40)
  }
  .border-yellow-60 {
    border-color:var(--yellow-60)
  }
  .border-yellow-80 {
    border-color:var(--yellow-80)
  }
  .border-b-transparent {
    border-bottom-color:#0000
  }
  .border-l-\[\#ffffff\] {
    --tw-border-opacity:1;
    border-left-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .border-l-transparent {
    border-left-color:#0000
  }
  .border-r-gray-3 {
    --tw-border-opacity:1;
    border-right-color:rgb(229 229 229/var(--tw-border-opacity))
  }
  .border-r-transparent {
    border-right-color:#0000
  }
  .border-t-transparent {
    border-top-color:#0000
  }
  .border-opacity-5 {
    --tw-border-opacity:0.05
  }
  .\!bg-transparent {
    background-color:initial!important
  }
  .bg-\[\#0000000a\] {
    background-color:#0000000a
  }
  .bg-\[\#00000014\] {
    background-color:#00000014
  }
  .bg-\[\#00000040\] {
    background-color:#00000040
  }
  .bg-\[\#00000080\] {
    background-color:#00000080
  }
  .bg-\[\#000000\] {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  .bg-\[\#000\]\/80 {
    background-color:#000c
  }
  .bg-\[\#212121\] {
    --tw-bg-opacity:1;
    background-color:rgb(33 33 33/var(--tw-bg-opacity))
  }
  .bg-\[\#F6FCFF\] {
    --tw-bg-opacity:1;
    background-color:rgb(246 252 255/var(--tw-bg-opacity))
  }
  .bg-\[\#F6FFF9\] {
    --tw-bg-opacity:1;
    background-color:rgb(246 255 249/var(--tw-bg-opacity))
  }
  .bg-\[\#F8615C33\] {
    background-color:#f8615c33
  }
  .bg-\[\#FDF9FF\] {
    --tw-bg-opacity:1;
    background-color:rgb(253 249 255/var(--tw-bg-opacity))
  }
  .bg-\[\#FEFAEB\] {
    --tw-bg-opacity:1;
    background-color:rgb(254 250 235/var(--tw-bg-opacity))
  }
  .bg-\[\#FFA116\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 161 22/var(--tw-bg-opacity))
  }
  .bg-\[\#FFF9F4\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 249 244/var(--tw-bg-opacity))
  }
  .bg-\[\#FFF9F8\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 249 248/var(--tw-bg-opacity))
  }
  .bg-\[\#FFFCE6\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 252 230/var(--tw-bg-opacity))
  }
  .bg-\[\#FFFEF2\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 254 242/var(--tw-bg-opacity))
  }
  .bg-\[\#FFFFFF\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-\[\#b0acac\] {
    --tw-bg-opacity:1;
    background-color:rgb(176 172 172/var(--tw-bg-opacity))
  }
  .bg-\[\#fafafa\] {
    --tw-bg-opacity:1;
    background-color:rgb(250 250 250/var(--tw-bg-opacity))
  }
  .bg-\[\#ffa1161f\] {
    background-color:#ffa1161f
  }
  .bg-\[\#ffefef\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 239 239/var(--tw-bg-opacity))
  }
  .bg-\[\#ffffff\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-\[rgba\(0 0 0 0\.03\)\] {
    background-color:#00000008
  }
  .bg-\[rgba\(0 0 0 0\.05\)\] {
    background-color:#0000000d
  }
  .bg-\[rgba\(0 0 0 0\.2\)\] {
    background-color:#0003
  }
  .bg-\[rgba\(0 0 0 0\.4\)\] {
    background-color:#0006
  }
  .bg-\[rgba\(0 0 0 0\.6\)\] {
    background-color:#0009
  }
  .bg-\[rgba\(21 189 102 0\.08\)\] {
    background-color:#15bd6614
  }
  .bg-\[rgba\(246 54 54 0\.08\)\] {
    background-color:#f6363614
  }
  .bg-\[rgba\(248 97 92 0\.08\)\] {
    background-color:#f8615c14
  }
  .bg-\[rgba\(255 115 0 0\.08\)\] {
    background-color:#ff730014
  }
  .bg-\[rgba\(255 161 22 0\.1\)\] {
    background-color:#ffa1161a
  }
  .bg-\[rgba\(255 161 22 0\.15\)\] {
    background-color:#ffa11626
  }
  .bg-\[rgba\(255 255 255 0\.40\)\] {
    background-color:#fff6
  }
  .bg-\[rgba\(255 255 255 0\.6\)\] {
    background-color:#fff9
  }
  .bg-\[rgba\(26 144 255 0\.08\)\] {
    background-color:#1a90ff14
  }
  .bg-\[white\] {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-black {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  .bg-black\/30 {
    background-color:#0000004d
  }
  .bg-blocker {
    background-color:#ffffffe6
  }
  .bg-blue {
    --tw-bg-opacity:1;
    background-color:rgb(0 122 255/var(--tw-bg-opacity))
  }
  .bg-blue-0 {
    background-color:#007aff14
  }
  .bg-blue-1 {
    background-color:#007aff26
  }
  .bg-blue-10 {
    background-color:var(--blue-10)
  }
  .bg-blue-100 {
    background-color:var(--blue-100)
  }
  .bg-blue-20 {
    background-color:var(--blue-20)
  }
  .bg-blue-3 {
    --tw-bg-opacity:1;
    background-color:rgb(0 104 217/var(--tw-bg-opacity))
  }
  .bg-blue-40 {
    background-color:var(--blue-40)
  }
  .bg-blue-60 {
    background-color:var(--blue-60)
  }
  .bg-blue-80 {
    background-color:var(--blue-80)
  }
  .bg-blue-s {
    --tw-bg-opacity:1;
    background-color:rgb(0 122 255/var(--tw-bg-opacity))
  }
  .bg-border-primary {
    background-color:var(--border-primary)
  }
  .bg-border-quaternary {
    background-color:var(--border-quaternary)
  }
  .bg-border-secondary {
    background-color:var(--border-secondary)
  }
  .bg-border-tertiary {
    background-color:var(--border-tertiary)
  }
  .bg-brand-gray {
    background-color:var(--brand-gray)
  }
  .bg-brand-logo {
    background-color:var(--brand-logo)
  }
  .bg-brand-orange {
    background-color:var(--brand-orange)
  }
  .bg-current {
    background-color:currentColor
  }
  .bg-dark-blue {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  .bg-dark-blue-1 {
    background-color:#0a84ff40
  }
  .bg-dark-blue-3 {
    --tw-bg-opacity:1;
    background-color:rgb(47 150 255/var(--tw-bg-opacity))
  }
  .bg-dark-blue-s {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  .bg-dark-fill-2 {
    background-color:#ffffff24
  }
  .bg-dark-fill-3 {
    background-color:#ffffff1a
  }
  .bg-dark-gray-8 {
    --tw-bg-opacity:1;
    background-color:rgb(219 219 219/var(--tw-bg-opacity))
  }
  .bg-dark-green-3 {
    --tw-bg-opacity:1;
    background-color:rgb(76 197 117/var(--tw-bg-opacity))
  }
  .bg-dark-label-1 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-dark-layer-1 {
    --tw-bg-opacity:1;
    background-color:rgb(40 40 40/var(--tw-bg-opacity))
  }
  .bg-dark-layer-bg {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  .bg-dark-paper {
    --tw-bg-opacity:1;
    background-color:rgb(28 28 28/var(--tw-bg-opacity))
  }
  .bg-dark-red-1 {
    background-color:#ef474340
  }
  .bg-dark-yellow-0 {
    background-color:#ffc01e1f
  }
  .bg-difficulty-easy {
    background-color:var(--difficulty-easy)
  }
  .bg-difficulty-hard {
    background-color:var(--difficulty-hard)
  }
  .bg-difficulty-medium {
    background-color:var(--difficulty-medium)
  }
  .bg-divider-1 {
    background-color:#00000024
  }
  .bg-divider-2 {
    background-color:#0000001a
  }
  .bg-divider-3 {
    background-color:#0000000d
  }
  .bg-divider-4 {
    background-color:#00000008
  }
  .bg-fill-1 {
    background-color:#000a201f
  }
  .bg-fill-2 {
    background-color:#000a201a
  }
  .bg-fill-3 {
    background-color:#000a200d
  }
  .bg-fill-4 {
    background-color:#000a2008
  }
  .bg-fill-primary {
    background-color:var(--fill-primary)
  }
  .bg-fill-pure {
    background-color:var(--fill-pure)
  }
  .bg-fill-quaternary {
    background-color:var(--fill-quaternary)
  }
  .bg-fill-secondary {
    background-color:var(--fill-secondary)
  }
  .bg-fill-tertiary {
    background-color:var(--fill-tertiary)
  }
  .bg-fixed-black {
    background-color:var(--fixed-black)
  }
  .bg-fixed-white {
    background-color:var(--fixed-white)
  }
  .bg-gray-1 {
    --tw-bg-opacity:1;
    background-color:rgb(247 247 247/var(--tw-bg-opacity))
  }
  .bg-gray-10 {
    background-color:var(--gray-10)
  }
  .bg-gray-100 {
    background-color:var(--gray-100)
  }
  .bg-gray-2 {
    --tw-bg-opacity:1;
    background-color:rgb(240 240 240/var(--tw-bg-opacity))
  }
  .bg-gray-20 {
    background-color:var(--gray-20)
  }
  .bg-gray-3 {
    --tw-bg-opacity:1;
    background-color:rgb(229 229 229/var(--tw-bg-opacity))
  }
  .bg-gray-4 {
    --tw-bg-opacity:1;
    background-color:rgb(223 223 223/var(--tw-bg-opacity))
  }
  .bg-gray-40 {
    background-color:var(--gray-40)
  }
  .bg-gray-5 {
    --tw-bg-opacity:1;
    background-color:rgb(191 191 191/var(--tw-bg-opacity))
  }
  .bg-gray-6 {
    --tw-bg-opacity:1;
    background-color:rgb(140 140 140/var(--tw-bg-opacity))
  }
  .bg-gray-60 {
    background-color:var(--gray-60)
  }
  .bg-gray-7 {
    --tw-bg-opacity:1;
    background-color:rgb(89 89 89/var(--tw-bg-opacity))
  }
  .bg-gray-8 {
    --tw-bg-opacity:1;
    background-color:rgb(38 38 38/var(--tw-bg-opacity))
  }
  .bg-gray-80 {
    background-color:var(--gray-80)
  }
  .bg-green-0 {
    background-color:#2db55d14
  }
  .bg-green-1 {
    background-color:#2db55d26
  }
  .bg-green-10 {
    background-color:var(--green-10)
  }
  .bg-green-100 {
    background-color:var(--green-100)
  }
  .bg-green-2 {
    background-color:#2db55d4d
  }
  .bg-green-20 {
    background-color:var(--green-20)
  }
  .bg-green-40 {
    background-color:var(--green-40)
  }
  .bg-green-60 {
    background-color:var(--green-60)
  }
  .bg-green-80 {
    background-color:var(--green-80)
  }
  .bg-green-s {
    --tw-bg-opacity:1;
    background-color:rgb(45 181 93/var(--tw-bg-opacity))
  }
  .bg-label-1 {
    --tw-bg-opacity:1;
    background-color:rgb(38 38 38/var(--tw-bg-opacity))
  }
  .bg-label-2 {
    background-color:#262626bf
  }
  .bg-layer-01 {
    background-color:var(--layer-01)
  }
  .bg-layer-02 {
    background-color:var(--layer-02)
  }
  .bg-layer-03 {
    background-color:var(--layer-03)
  }
  .bg-layer-1 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-layer-1\/80 {
    background-color:#fffc
  }
  .bg-layer-2,
  .bg-layer-3 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-layer-bg {
    --tw-bg-opacity:1;
    background-color:rgb(247 248 250/var(--tw-bg-opacity))
  }
  .bg-layer-bg-gray {
    background-color:var(--layer-bg-gray)
  }
  .bg-layer-bg-pure {
    background-color:var(--layer-bg-pure)
  }
  .bg-lc-background-index {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  .bg-lc-background-inverse {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  .bg-lc-button-danger {
    --tw-bg-opacity:1;
    background-color:rgb(255 51 75/var(--tw-bg-opacity))
  }
  .bg-lc-button-danger-active {
    --tw-bg-opacity:1;
    background-color:rgb(210 32 58/var(--tw-bg-opacity))
  }
  .bg-lc-button-primary {
    --tw-bg-opacity:1;
    background-color:rgb(33 33 33/var(--tw-bg-opacity))
  }
  .bg-lc-button-primary-active {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  .bg-lc-button-secondary {
    background-color:#0000000d
  }
  .bg-lc-button-secondary-active {
    background-color:#00000014
  }
  .bg-lc-button-theme {
    --tw-bg-opacity:1;
    background-color:rgb(21 189 102/var(--tw-bg-opacity))
  }
  .bg-lc-button-theme-active {
    --tw-bg-opacity:1;
    background-color:rgb(24 163 82/var(--tw-bg-opacity))
  }
  .bg-lc-fill-01 {
    background-color:#0000000d
  }
  .bg-lc-fill-02 {
    background-color:#00000014
  }
  .bg-lc-fill-03 {
    background-color:#00000024
  }
  .bg-lc-fixed-black {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  .bg-lc-fixed-white,
  .bg-lc-icon-inverse {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-lc-icon-primary {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  .bg-lc-icon-secondary {
    --tw-bg-opacity:1;
    background-color:rgb(148 148 148/var(--tw-bg-opacity))
  }
  .bg-lc-icon-tertiary {
    --tw-bg-opacity:1;
    background-color:rgb(183 183 183/var(--tw-bg-opacity))
  }
  .bg-lc-layer-01 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-lc-layer-02 {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  .bg-lc-layer-03 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-lc-layer-04 {
    background-color:#0009
  }
  .bg-lc-support-error-background {
    background-color:#ff334b1f
  }
  .bg-lc-support-info-background {
    background-color:#007aff1f
  }
  .bg-lc-support-success-background {
    background-color:#15bd661f
  }
  .bg-lc-support-warning-background {
    background-color:#ffb8001f
  }
  .bg-lc-system-primary {
    --tw-bg-opacity:1;
    background-color:rgb(0 122 255/var(--tw-bg-opacity))
  }
  .bg-lc-system-primary-active {
    --tw-bg-opacity:1;
    background-color:rgb(46 154 255/var(--tw-bg-opacity))
  }
  .bg-magenta-10 {
    background-color:var(--magenta-10)
  }
  .bg-magenta-100 {
    background-color:var(--magenta-100)
  }
  .bg-magenta-20 {
    background-color:var(--magenta-20)
  }
  .bg-magenta-40 {
    background-color:var(--magenta-40)
  }
  .bg-magenta-60 {
    background-color:var(--magenta-60)
  }
  .bg-magenta-80 {
    background-color:var(--magenta-80)
  }
  .bg-message-danger {
    background-color:var(--message-danger)
  }
  .bg-message-primary {
    background-color:var(--message-primary)
  }
  .bg-message-success {
    background-color:var(--message-success)
  }
  .bg-message-warning {
    background-color:var(--message-warning)
  }
  .bg-olive {
    --tw-bg-opacity:1;
    background-color:rgb(0 175 155/var(--tw-bg-opacity))
  }
  .bg-opacity-yellow-60 {
    background-color:var(--opacity-yellow-60)
  }
  .bg-orange-1 {
    background-color:#ffa11626
  }
  .bg-orange-2 {
    background-color:#ffa1160f
  }
  .bg-overlay-1 {
    --tw-bg-opacity:1;
    background-color:rgb(247 248 250/var(--tw-bg-opacity))
  }
  .bg-overlay-2,
  .bg-overlay-3,
  .bg-overlay-4,
  .bg-paper {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-pink {
    --tw-bg-opacity:1;
    background-color:rgb(255 45 85/var(--tw-bg-opacity))
  }
  .bg-pink-2 {
    background-color:#ff74d01f
  }
  .bg-purple {
    --tw-bg-opacity:1;
    background-color:rgb(175 82 222/var(--tw-bg-opacity))
  }
  .bg-purple-10 {
    background-color:var(--purple-10)
  }
  .bg-purple-100 {
    background-color:var(--purple-100)
  }
  .bg-purple-20 {
    background-color:var(--purple-20)
  }
  .bg-purple-40 {
    background-color:var(--purple-40)
  }
  .bg-purple-60 {
    background-color:var(--purple-60)
  }
  .bg-purple-80 {
    background-color:var(--purple-80)
  }
  .bg-red-1 {
    background-color:#ef474326
  }
  .bg-red-10 {
    background-color:var(--red-10)
  }
  .bg-red-100 {
    background-color:var(--red-100)
  }
  .bg-red-20 {
    background-color:var(--red-20)
  }
  .bg-red-40 {
    background-color:var(--red-40)
  }
  .bg-red-60 {
    background-color:var(--red-60)
  }
  .bg-red-80 {
    background-color:var(--red-80)
  }
  .bg-red-s {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  .bg-sd-accent {
    background-color:hsl(var(--sd-accent))
  }
  .bg-sd-background {
    background-color:hsl(var(--sd-background))
  }
  .bg-sd-background\/80 {
    background-color:hsl(var(--sd-background)/.8)
  }
  .bg-sd-border {
    background-color:hsl(var(--sd-border))
  }
  .bg-sd-brand-lc-orange {
    background-color:hsl(var(--sd-brand-lc-orange))
  }
  .bg-sd-card {
    background-color:hsl(var(--sd-card))
  }
  .bg-sd-danger {
    background-color:hsl(var(--sd-danger))
  }
  .bg-sd-danger\/50 {
    background-color:hsl(var(--sd-danger)/.5)
  }
  .bg-sd-fixed-black\/40 {
    background-color:hsl(var(--sd-fixed-black)/.4)
  }
  .bg-sd-gray-200 {
    background-color:hsl(var(--sd-gray-200))
  }
  .bg-sd-green-500\/50 {
    background-color:hsl(var(--sd-green-500)/.5)
  }
  .bg-sd-info {
    background-color:hsl(var(--sd-info))
  }
  .bg-sd-muted {
    background-color:hsl(var(--sd-muted))
  }
  .bg-sd-popover {
    background-color:hsl(var(--sd-popover))
  }
  .bg-sd-primary {
    background-color:hsl(var(--sd-primary))
  }
  .bg-sd-primary\/10 {
    background-color:hsl(var(--sd-primary)/.1)
  }
  .bg-sd-primary\/20 {
    background-color:hsl(var(--sd-primary)/.2)
  }
  .bg-sd-secondary {
    background-color:hsl(var(--sd-secondary))
  }
  .bg-sd-success {
    background-color:hsl(var(--sd-success))
  }
  .bg-sd-warning {
    background-color:hsl(var(--sd-warning))
  }
  .bg-special-kiwi {
    background-color:var(--special-kiwi)
  }
  .bg-special-lavender {
    background-color:var(--special-lavender)
  }
  .bg-special-rose {
    background-color:var(--special-rose)
  }
  .bg-special-skyler {
    background-color:var(--special-skyler)
  }
  .bg-special-sunny {
    background-color:var(--special-sunny)
  }
  .bg-teal-10 {
    background-color:var(--teal-10)
  }
  .bg-teal-100 {
    background-color:var(--teal-100)
  }
  .bg-teal-20 {
    background-color:var(--teal-20)
  }
  .bg-teal-40 {
    background-color:var(--teal-40)
  }
  .bg-teal-60 {
    background-color:var(--teal-60)
  }
  .bg-teal-80 {
    background-color:var(--teal-80)
  }
  .bg-text-primary {
    background-color:var(--text-primary)
  }
  .bg-text-quaternary {
    background-color:var(--text-quaternary)
  }
  .bg-text-reverse {
    background-color:var(--text-reverse)
  }
  .bg-text-secondary {
    background-color:var(--text-secondary)
  }
  .bg-text-tertiary {
    background-color:var(--text-tertiary)
  }
  .bg-transparent {
    background-color:initial
  }
  .bg-white {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .bg-yellow {
    --tw-bg-opacity:1;
    background-color:rgb(255 184 0/var(--tw-bg-opacity))
  }
  .bg-yellow-0,
  .bg-yellow-1 {
    background-color:#ffb80026
  }
  .bg-yellow-10 {
    background-color:var(--yellow-10)
  }
  .bg-yellow-100 {
    background-color:var(--yellow-100)
  }
  .bg-yellow-20 {
    background-color:var(--yellow-20)
  }
  .bg-yellow-40 {
    background-color:var(--yellow-40)
  }
  .bg-yellow-60 {
    background-color:var(--yellow-60)
  }
  .bg-yellow-80 {
    background-color:var(--yellow-80)
  }
  .bg-opacity-10 {
    --tw-bg-opacity:0.1
  }
  .bg-opacity-100 {
    --tw-bg-opacity:1
  }
  .bg-opacity-20 {
    --tw-bg-opacity:0.2
  }
  .bg-opacity-30 {
    --tw-bg-opacity:0.3
  }
  .bg-opacity-40 {
    --tw-bg-opacity:0.4
  }
  .bg-opacity-5 {
    --tw-bg-opacity:0.05
  }
  .bg-opacity-50 {
    --tw-bg-opacity:0.5
  }
  .bg-opacity-80 {
    --tw-bg-opacity:0.8
  }
  .bg-\[linear-gradient\(104deg \#FFC300_0\% \#FF9800_100\%\)\] {
    background-image:linear-gradient(104deg,#ffc300,#ff9800)
  }
  .bg-\[linear-gradient\(132deg \#2de4ad \#4ac7ee_36\% \#598ff7_75\% \#7a7cf2\)\] {
    background-image:linear-gradient(132deg,#2de4ad,#4ac7ee 36%,#598ff7 75%,#7a7cf2)
  }
  .bg-\[linear-gradient\(134deg _\#FFB99B_19\.62\% _\#FFEE56_73\.16\%\)\] {
    background-image:linear-gradient(134deg,#ffb99b 19.62%,#ffee56 73.16%)
  }
  .bg-\[linear-gradient\(180deg _\#DFF0FF_0\% _\#F8F8F8_100\%\)\] {
    background-image:linear-gradient(180deg,#dff0ff,#f8f8f8)
  }
  .bg-\[linear-gradient\(180deg _\#DFF0FF_0\% _\#FFFFFF_100\%\)\] {
    background-image:linear-gradient(180deg,#dff0ff,#fff)
  }
  .bg-\[linear-gradient\(180deg _\#FFEACC_0\% _\#F8F8F8_100\%\)\] {
    background-image:linear-gradient(180deg,#ffeacc,#f8f8f8)
  }
  .bg-\[linear-gradient\(180deg _\#FFEACC_0\% _\#FFFFFF_100\%\)\] {
    background-image:linear-gradient(180deg,#ffeacc,#fff)
  }
  .bg-\[linear-gradient\(90deg \#007AFF_0\% \#75B7FF_100\%\)\] {
    background-image:linear-gradient(90deg,#007aff,#75b7ff)
  }
  .bg-\[linear-gradient\(90deg \#007AFF_0\% \#7ED1FF_99\.66\%\)\] {
    background-image:linear-gradient(90deg,#007aff,#7ed1ff 99.66%)
  }
  .bg-\[linear-gradient\(rgba\(255 255 255 0\) \#FFF\)\] {
    background-image:linear-gradient(#fff0,#fff)
  }
  .bg-\[linear-gradient\(rgba\(255 255 255 0\) \#fafafa\)\] {
    background-image:linear-gradient(#fff0,#fafafa)
  }
  .bg-\[linear-gradient\(to_right rgba\(255 255 255 0\) \#FFF_70\%\)\] {
    background-image:linear-gradient(90deg,#fff0,#fff 70%)
  }
  .bg-\[linear-gradient\(to_top \#000_0\% transparent_2\%\) linear-gradient\(to_left \#000_0\% transparent_2\%\)\] {
    background-image:linear-gradient(0deg,#000,#0000 2%),linear-gradient(270deg,#000,#0000 2%)
  }
  .bg-\[linear-gradient\(to_top \#000_0\% transparent_5\%\) linear-gradient\(to_left \#000_0\% transparent_5\%\)\] {
    background-image:linear-gradient(0deg,#000,#0000 5%),linear-gradient(270deg,#000,#0000 5%)
  }
  .bg-gradient-to-b {
    background-image:linear-gradient(to bottom,var(--tw-gradient-stops))
  }
  .bg-gradient-to-l {
    background-image:linear-gradient(to left,var(--tw-gradient-stops))
  }
  .bg-gradient-to-r {
    background-image:linear-gradient(to right,var(--tw-gradient-stops))
  }
  .bg-gradient-to-t {
    background-image:linear-gradient(to top,var(--tw-gradient-stops))
  }
  .bg-none {
    background-image:none
  }
  .from-\[\#007AFF\] {
    --tw-gradient-from:#007aff var(--tw-gradient-from-position);
    --tw-gradient-to:#007aff00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-\[\#2BBFFF\] {
    --tw-gradient-from:#2bbfff var(--tw-gradient-from-position);
    --tw-gradient-to:#2bbfff00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-\[\#C7FF9B\] {
    --tw-gradient-from:#c7ff9b var(--tw-gradient-from-position);
    --tw-gradient-to:#c7ff9b00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-\[\#E7E7E7\] {
    --tw-gradient-from:#e7e7e7 var(--tw-gradient-from-position);
    --tw-gradient-to:#e7e7e700 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-\[\#F2F2F2\] {
    --tw-gradient-from:#f2f2f2 var(--tw-gradient-from-position);
    --tw-gradient-to:#f2f2f200 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-fixed-green {
    --tw-gradient-from:#50d57f var(--tw-gradient-from-position);
    --tw-gradient-to:#50d57f00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-fixed-orange {
    --tw-gradient-from:#ff9e0e var(--tw-gradient-from-position);
    --tw-gradient-to:#ff9e0e00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-green-s {
    --tw-gradient-from:#2db55d var(--tw-gradient-from-position);
    --tw-gradient-to:#2db55d00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-layer-1 {
    --tw-gradient-from:#fff var(--tw-gradient-from-position);
    --tw-gradient-to:#fff0 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-layer-bg-pure {
    --tw-gradient-from:var(--layer-bg-pure) var(--tw-gradient-from-position);
    --tw-gradient-to:#fff0 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-paper {
    --tw-gradient-from:#fff var(--tw-gradient-from-position);
    --tw-gradient-to:#fff0 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-sd-muted\/50 {
    --tw-gradient-from:hsl(var(--sd-muted)/0.5) var(--tw-gradient-from-position);
    --tw-gradient-to:hsl(var(--sd-muted)/0) var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-transparent {
    --tw-gradient-from:#0000 var(--tw-gradient-from-position);
    --tw-gradient-to:#0000 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  .from-0\% {
    --tw-gradient-from-position:0%
  }
  .via-\[\#E7E7E7\] {
    --tw-gradient-to:#e7e7e700 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),#e7e7e7 var(--tw-gradient-via-position),var(--tw-gradient-to)
  }
  .via-40\% {
    --tw-gradient-via-position:40%
  }
  .to-\[\#007AFF\] {
    --tw-gradient-to:#007aff var(--tw-gradient-to-position)
  }
  .to-\[\#333\] {
    --tw-gradient-to:#333 var(--tw-gradient-to-position)
  }
  .to-\[\#56FFFF\] {
    --tw-gradient-to:#56ffff var(--tw-gradient-to-position)
  }
  .to-\[\#75B7FF\] {
    --tw-gradient-to:#75b7ff var(--tw-gradient-to-position)
  }
  .to-\[\#E7E7E7\]\/20 {
    --tw-gradient-to:#e7e7e733 var(--tw-gradient-to-position)
  }
  .to-green-s {
    --tw-gradient-to:#2db55d var(--tw-gradient-to-position)
  }
  .to-layer-bg-gray {
    --tw-gradient-to:var(--layer-bg-gray) var(--tw-gradient-to-position)
  }
  .to-sd-muted {
    --tw-gradient-to:hsl(var(--sd-muted)) var(--tw-gradient-to-position)
  }
  .to-100\% {
    --tw-gradient-to-position:100%
  }
  .bg-contain {
    background-size:contain
  }
  .bg-cover {
    background-size:cover
  }
  .bg-clip-text {
    -webkit-background-clip:text;
    background-clip:text
  }
  .bg-center {
    background-position:50%
  }
  .bg-no-repeat {
    background-repeat:no-repeat
  }
  .bg-origin-border {
    background-origin:border-box
  }
  .fill-\[rgba\(255 255 255 0\.75\)\] {
    fill:#ffffffbf
  }
  .fill-blue-s {
    fill:#007aff
  }
  .fill-current {
    fill:currentColor
  }
  .fill-divider-1 {
    fill:#00000024
  }
  .fill-gray-6 {
    fill:#8c8c8c
  }
  .fill-green-s {
    fill:#2db55d
  }
  .fill-layer-1 {
    fill:#fff
  }
  .fill-none {
    fill:none
  }
  .fill-red-s {
    fill:#ef4743
  }
  .fill-sd-blue-400 {
    fill:hsl(var(--sd-blue-400))
  }
  .fill-transparent {
    fill:#0000
  }
  .fill-yellow {
    fill:#ffb800
  }
  .stroke-\[rgba\(0 0 0 0\.03\)\] {
    stroke:#00000008
  }
  .stroke-\[rgba\(255 255 255 0\.12\)\] {
    stroke:#ffffff1f
  }
  .stroke-\[url\(\#gradientProgressCircleInfo\)\] {
    stroke:url(#gradientProgressCircleInfo)
  }
  .stroke-blue-s {
    stroke:#007aff
  }
  .stroke-current {
    stroke:currentColor
  }
  .stroke-dark-paper {
    stroke:#1c1c1c
  }
  .stroke-difficulty-easy {
    stroke:var(--difficulty-easy)
  }
  .stroke-difficulty-hard {
    stroke:var(--difficulty-hard)
  }
  .stroke-difficulty-medium {
    stroke:var(--difficulty-medium)
  }
  .stroke-fill-primary {
    stroke:var(--fill-primary)
  }
  .stroke-gray-80 {
    stroke:var(--gray-80)
  }
  .stroke-green-s {
    stroke:#2db55d
  }
  .stroke-lc-fill-02 {
    stroke:#00000014
  }
  .stroke-lc-gray-60 {
    stroke:#777
  }
  .stroke-sd-accent {
    stroke:hsl(var(--sd-accent))
  }
  .stroke-sd-easy {
    stroke:hsl(var(--sd-easy))
  }
  .stroke-sd-easy\/20 {
    stroke:hsl(var(--sd-easy)/.2)
  }
  .stroke-sd-hard {
    stroke:hsl(var(--sd-hard))
  }
  .stroke-sd-hard\/20 {
    stroke:hsl(var(--sd-hard)/.2)
  }
  .stroke-sd-medium {
    stroke:hsl(var(--sd-medium))
  }
  .stroke-sd-medium\/20 {
    stroke:hsl(var(--sd-medium)/.2)
  }
  .stroke-sd-primary {
    stroke:hsl(var(--sd-primary))
  }
  .stroke-sd-primary\/20 {
    stroke:hsl(var(--sd-primary)/.2)
  }
  .stroke-sd-success {
    stroke:hsl(var(--sd-success))
  }
  .stroke-transparent {
    stroke:#0000
  }
  .stroke-1 {
    stroke-width:1
  }
  .object-contain {
    object-fit:contain
  }
  .object-cover {
    object-fit:cover
  }
  .\!p-0 {
    padding:0!important
  }
  .\!p-1 {
    padding:.25rem!important
  }
  .\!p-4 {
    padding:1rem!important
  }
  .p-0 {
    padding:0
  }
  .p-0\.5 {
    padding:.125rem
  }
  .p-1 {
    padding:.25rem
  }
  .p-1\.5 {
    padding:.375rem
  }
  .p-2 {
    padding:.5rem
  }
  .p-2\.5 {
    padding:.625rem
  }
  .p-3 {
    padding:.75rem
  }
  .p-3\.5 {
    padding:.875rem
  }
  .p-4 {
    padding:1rem
  }
  .p-5 {
    padding:1.25rem
  }
  .p-6 {
    padding:1.5rem
  }
  .p-8 {
    padding:2rem
  }
  .p-\[100px\] {
    padding:100px
  }
  .p-\[10px\] {
    padding:10px
  }
  .p-\[11px\] {
    padding:11px
  }
  .p-\[13px\] {
    padding:13px
  }
  .p-\[150px\] {
    padding:150px
  }
  .p-\[15px\] {
    padding:15px
  }
  .p-\[1px\] {
    padding:1px
  }
  .p-\[24px\] {
    padding:24px
  }
  .p-\[2px\] {
    padding:2px
  }
  .p-\[30px\] {
    padding:30px
  }
  .p-\[3px\] {
    padding:3px
  }
  .p-\[5px\] {
    padding:5px
  }
  .p-\[8px\] {
    padding:8px
  }
  .p-\[9px\] {
    padding:9px
  }
  .\!px-0 {
    padding-left:0!important;
    padding-right:0!important
  }
  .\!px-3 {
    padding-left:.75rem!important;
    padding-right:.75rem!important
  }
  .\!px-4 {
    padding-left:1rem!important;
    padding-right:1rem!important
  }
  .\!px-\[15px\] {
    padding-left:15px!important;
    padding-right:15px!important
  }
  .\!py-0 {
    padding-bottom:0!important;
    padding-top:0!important
  }
  .\!py-0\.5 {
    padding-bottom:.125rem!important;
    padding-top:.125rem!important
  }
  .\!py-1 {
    padding-bottom:.25rem!important;
    padding-top:.25rem!important
  }
  .\!py-2 {
    padding-bottom:.5rem!important;
    padding-top:.5rem!important
  }
  .px-0 {
    padding-left:0;
    padding-right:0
  }
  .px-1 {
    padding-left:.25rem;
    padding-right:.25rem
  }
  .px-1\.5 {
    padding-left:.375rem;
    padding-right:.375rem
  }
  .px-10 {
    padding-left:2.5rem;
    padding-right:2.5rem
  }
  .px-12 {
    padding-left:3rem;
    padding-right:3rem
  }
  .px-16 {
    padding-left:4rem;
    padding-right:4rem
  }
  .px-2 {
    padding-left:.5rem;
    padding-right:.5rem
  }
  .px-2\.5 {
    padding-left:.625rem;
    padding-right:.625rem
  }
  .px-3 {
    padding-left:.75rem;
    padding-right:.75rem
  }
  .px-3\.5 {
    padding-left:.875rem;
    padding-right:.875rem
  }
  .px-4 {
    padding-left:1rem;
    padding-right:1rem
  }
  .px-5 {
    padding-left:1.25rem;
    padding-right:1.25rem
  }
  .px-5\.5 {
    padding-left:1.375rem;
    padding-right:1.375rem
  }
  .px-6 {
    padding-left:1.5rem;
    padding-right:1.5rem
  }
  .px-8 {
    padding-left:2rem;
    padding-right:2rem
  }
  .px-9 {
    padding-left:2.25rem;
    padding-right:2.25rem
  }
  .px-\[10\%\] {
    padding-left:10%;
    padding-right:10%
  }
  .px-\[103px\] {
    padding-left:103px;
    padding-right:103px
  }
  .px-\[10px\] {
    padding-left:10px;
    padding-right:10px
  }
  .px-\[114px\] {
    padding-left:114px;
    padding-right:114px
  }
  .px-\[11px\] {
    padding-left:11px;
    padding-right:11px
  }
  .px-\[13px\] {
    padding-left:13px;
    padding-right:13px
  }
  .px-\[14px\] {
    padding-left:14px;
    padding-right:14px
  }
  .px-\[15px\] {
    padding-left:15px;
    padding-right:15px
  }
  .px-\[16px\] {
    padding-left:16px;
    padding-right:16px
  }
  .px-\[17px\] {
    padding-left:17px;
    padding-right:17px
  }
  .px-\[18px\] {
    padding-left:18px;
    padding-right:18px
  }
  .px-\[20px\] {
    padding-left:20px;
    padding-right:20px
  }
  .px-\[21px\] {
    padding-left:21px;
    padding-right:21px
  }
  .px-\[23px\] {
    padding-left:23px;
    padding-right:23px
  }
  .px-\[24px\] {
    padding-left:24px;
    padding-right:24px
  }
  .px-\[30px\] {
    padding-left:30px;
    padding-right:30px
  }
  .px-\[35px\] {
    padding-left:35px;
    padding-right:35px
  }
  .px-\[36px\] {
    padding-left:36px;
    padding-right:36px
  }
  .px-\[39px\] {
    padding-left:39px;
    padding-right:39px
  }
  .px-\[3px\] {
    padding-left:3px;
    padding-right:3px
  }
  .px-\[4\%\] {
    padding-left:4%;
    padding-right:4%
  }
  .px-\[45px\] {
    padding-left:45px;
    padding-right:45px
  }
  .px-\[52px\] {
    padding-left:52px;
    padding-right:52px
  }
  .px-\[5px\] {
    padding-left:5px;
    padding-right:5px
  }
  .px-\[6px\] {
    padding-left:6px;
    padding-right:6px
  }
  .px-\[76px\] {
    padding-left:76px;
    padding-right:76px
  }
  .px-\[7px\] {
    padding-left:7px;
    padding-right:7px
  }
  .px-\[97px\] {
    padding-left:97px;
    padding-right:97px
  }
  .py-0 {
    padding-bottom:0;
    padding-top:0
  }
  .py-0\.5 {
    padding-bottom:.125rem;
    padding-top:.125rem
  }
  .py-1 {
    padding-bottom:.25rem;
    padding-top:.25rem
  }
  .py-1\.5 {
    padding-bottom:.375rem;
    padding-top:.375rem
  }
  .py-10 {
    padding-bottom:2.5rem;
    padding-top:2.5rem
  }
  .py-12 {
    padding-bottom:3rem;
    padding-top:3rem
  }
  .py-2 {
    padding-bottom:.5rem;
    padding-top:.5rem
  }
  .py-2\.5 {
    padding-bottom:.625rem;
    padding-top:.625rem
  }
  .py-20 {
    padding-bottom:5rem;
    padding-top:5rem
  }
  .py-3 {
    padding-bottom:.75rem;
    padding-top:.75rem
  }
  .py-32 {
    padding-bottom:8rem;
    padding-top:8rem
  }
  .py-4 {
    padding-bottom:1rem;
    padding-top:1rem
  }
  .py-4\.5 {
    padding-bottom:1.125rem;
    padding-top:1.125rem
  }
  .py-5 {
    padding-bottom:1.25rem;
    padding-top:1.25rem
  }
  .py-6 {
    padding-bottom:1.5rem;
    padding-top:1.5rem
  }
  .py-7 {
    padding-bottom:1.75rem;
    padding-top:1.75rem
  }
  .py-8 {
    padding-bottom:2rem;
    padding-top:2rem
  }
  .py-9 {
    padding-bottom:2.25rem;
    padding-top:2.25rem
  }
  .py-\[10px\] {
    padding-bottom:10px;
    padding-top:10px
  }
  .py-\[11px\] {
    padding-bottom:11px;
    padding-top:11px
  }
  .py-\[120px\] {
    padding-bottom:120px;
    padding-top:120px
  }
  .py-\[13px\] {
    padding-bottom:13px;
    padding-top:13px
  }
  .py-\[14px\] {
    padding-bottom:14px;
    padding-top:14px
  }
  .py-\[15px\] {
    padding-bottom:15px;
    padding-top:15px
  }
  .py-\[18px\] {
    padding-bottom:18px;
    padding-top:18px
  }
  .py-\[1px\] {
    padding-bottom:1px;
    padding-top:1px
  }
  .py-\[2px\] {
    padding-bottom:2px;
    padding-top:2px
  }
  .py-\[30px\] {
    padding-bottom:30px;
    padding-top:30px
  }
  .py-\[33px\] {
    padding-bottom:33px;
    padding-top:33px
  }
  .py-\[3px\] {
    padding-bottom:3px;
    padding-top:3px
  }
  .py-\[40px\] {
    padding-bottom:40px;
    padding-top:40px
  }
  .py-\[4px\] {
    padding-bottom:4px;
    padding-top:4px
  }
  .py-\[50px\] {
    padding-bottom:50px;
    padding-top:50px
  }
  .py-\[54px\] {
    padding-bottom:54px;
    padding-top:54px
  }
  .py-\[5px\] {
    padding-bottom:5px;
    padding-top:5px
  }
  .py-\[6px\] {
    padding-bottom:6px;
    padding-top:6px
  }
  .py-\[7px\] {
    padding-bottom:7px;
    padding-top:7px
  }
  .py-\[96px\] {
    padding-bottom:96px;
    padding-top:96px
  }
  .py-\[9px\] {
    padding-bottom:9px;
    padding-top:9px
  }
  .py-px {
    padding-bottom:1px;
    padding-top:1px
  }
  .\!pb-0 {
    padding-bottom:0!important
  }
  .\!pl-0 {
    padding-left:0!important
  }
  .pb-0 {
    padding-bottom:0
  }
  .pb-0\.5 {
    padding-bottom:.125rem
  }
  .pb-1 {
    padding-bottom:.25rem
  }
  .pb-1\.5 {
    padding-bottom:.375rem
  }
  .pb-10 {
    padding-bottom:2.5rem
  }
  .pb-16 {
    padding-bottom:4rem
  }
  .pb-2 {
    padding-bottom:.5rem
  }
  .pb-2\.5 {
    padding-bottom:.625rem
  }
  .pb-20 {
    padding-bottom:5rem
  }
  .pb-3 {
    padding-bottom:.75rem
  }
  .pb-4 {
    padding-bottom:1rem
  }
  .pb-5 {
    padding-bottom:1.25rem
  }
  .pb-6 {
    padding-bottom:1.5rem
  }
  .pb-7 {
    padding-bottom:1.75rem
  }
  .pb-8 {
    padding-bottom:2rem
  }
  .pb-9 {
    padding-bottom:2.25rem
  }
  .pb-\[100px\] {
    padding-bottom:100px
  }
  .pb-\[10px\] {
    padding-bottom:10px
  }
  .pb-\[11\.08\%\] {
    padding-bottom:11.08%
  }
  .pb-\[14px\] {
    padding-bottom:14px
  }
  .pb-\[19px\] {
    padding-bottom:19px
  }
  .pb-\[1px\] {
    padding-bottom:1px
  }
  .pb-\[23px\] {
    padding-bottom:23px
  }
  .pb-\[2px\] {
    padding-bottom:2px
  }
  .pb-\[35px\] {
    padding-bottom:35px
  }
  .pb-\[40px\] {
    padding-bottom:40px
  }
  .pb-\[42px\] {
    padding-bottom:42px
  }
  .pb-\[48px\] {
    padding-bottom:48px
  }
  .pb-\[50px\] {
    padding-bottom:50px
  }
  .pb-\[80px\] {
    padding-bottom:80px
  }
  .pb-\[9px\] {
    padding-bottom:9px
  }
  .pb-px {
    padding-bottom:1px
  }
  .pl-0 {
    padding-left:0
  }
  .pl-0\.5 {
    padding-left:.125rem
  }
  .pl-1 {
    padding-left:.25rem
  }
  .pl-10 {
    padding-left:2.5rem
  }
  .pl-2 {
    padding-left:.5rem
  }
  .pl-2\.5 {
    padding-left:.625rem
  }
  .pl-3 {
    padding-left:.75rem
  }
  .pl-4 {
    padding-left:1rem
  }
  .pl-5 {
    padding-left:1.25rem
  }
  .pl-6 {
    padding-left:1.5rem
  }
  .pl-7 {
    padding-left:1.75rem
  }
  .pl-8 {
    padding-left:2rem
  }
  .pl-9 {
    padding-left:2.25rem
  }
  .pl-\[10px\] {
    padding-left:10px
  }
  .pl-\[13px\] {
    padding-left:13px
  }
  .pl-\[15px\] {
    padding-left:15px
  }
  .pl-\[18px\] {
    padding-left:18px
  }
  .pl-\[20px\] {
    padding-left:20px
  }
  .pl-\[22px\] {
    padding-left:22px
  }
  .pl-\[26px\] {
    padding-left:26px
  }
  .pl-\[35px\] {
    padding-left:35px
  }
  .pl-\[40px\] {
    padding-left:40px
  }
  .pl-\[50px\] {
    padding-left:50px
  }
  .pl-\[52px\] {
    padding-left:52px
  }
  .pl-\[5px\] {
    padding-left:5px
  }
  .pl-\[6px\] {
    padding-left:6px
  }
  .pl-\[78px\] {
    padding-left:78px
  }
  .pl-\[84px\] {
    padding-left:84px
  }
  .pr-1 {
    padding-right:.25rem
  }
  .pr-1\.5 {
    padding-right:.375rem
  }
  .pr-10 {
    padding-right:2.5rem
  }
  .pr-12 {
    padding-right:3rem
  }
  .pr-2 {
    padding-right:.5rem
  }
  .pr-2\.5 {
    padding-right:.625rem
  }
  .pr-3 {
    padding-right:.75rem
  }
  .pr-4 {
    padding-right:1rem
  }
  .pr-5 {
    padding-right:1.25rem
  }
  .pr-6 {
    padding-right:1.5rem
  }
  .pr-7 {
    padding-right:1.75rem
  }
  .pr-8 {
    padding-right:2rem
  }
  .pr-9 {
    padding-right:2.25rem
  }
  .pr-\[10px\] {
    padding-right:10px
  }
  .pr-\[18px\] {
    padding-right:18px
  }
  .pr-\[24px\] {
    padding-right:24px
  }
  .pr-\[26px\] {
    padding-right:26px
  }
  .pr-\[38px\] {
    padding-right:38px
  }
  .pr-\[5px\] {
    padding-right:5px
  }
  .pr-\[70px\] {
    padding-right:70px
  }
  .pr-\[80px\] {
    padding-right:80px
  }
  .pt-0 {
    padding-top:0
  }
  .pt-0\.5 {
    padding-top:.125rem
  }
  .pt-1 {
    padding-top:.25rem
  }
  .pt-10 {
    padding-top:2.5rem
  }
  .pt-12 {
    padding-top:3rem
  }
  .pt-14 {
    padding-top:3.5rem
  }
  .pt-2 {
    padding-top:.5rem
  }
  .pt-2\.5 {
    padding-top:.625rem
  }
  .pt-25 {
    padding-top:6.25rem
  }
  .pt-3 {
    padding-top:.75rem
  }
  .pt-3\.5 {
    padding-top:.875rem
  }
  .pt-4 {
    padding-top:1rem
  }
  .pt-5 {
    padding-top:1.25rem
  }
  .pt-6 {
    padding-top:1.5rem
  }
  .pt-7 {
    padding-top:1.75rem
  }
  .pt-8 {
    padding-top:2rem
  }
  .pt-\[100px\] {
    padding-top:100px
  }
  .pt-\[10px\] {
    padding-top:10px
  }
  .pt-\[110px\] {
    padding-top:110px
  }
  .pt-\[112px\] {
    padding-top:112px
  }
  .pt-\[145px\] {
    padding-top:145px
  }
  .pt-\[14px\] {
    padding-top:14px
  }
  .pt-\[15px\] {
    padding-top:15px
  }
  .pt-\[19px\] {
    padding-top:19px
  }
  .pt-\[208px\] {
    padding-top:208px
  }
  .pt-\[20px\] {
    padding-top:20px
  }
  .pt-\[21px\] {
    padding-top:21px
  }
  .pt-\[22px\] {
    padding-top:22px
  }
  .pt-\[23px\] {
    padding-top:23px
  }
  .pt-\[26px\] {
    padding-top:26px
  }
  .pt-\[2px\] {
    padding-top:2px
  }
  .pt-\[30px\] {
    padding-top:30px
  }
  .pt-\[35px\] {
    padding-top:35px
  }
  .pt-\[38px\] {
    padding-top:38px
  }
  .pt-\[40px\] {
    padding-top:40px
  }
  .pt-\[46px\] {
    padding-top:46px
  }
  .pt-\[48px\] {
    padding-top:48px
  }
  .pt-\[50px\] {
    padding-top:50px
  }
  .pt-\[59px\] {
    padding-top:59px
  }
  .pt-\[60px\] {
    padding-top:60px
  }
  .pt-\[64px\] {
    padding-top:64px
  }
  .pt-\[72px\] {
    padding-top:72px
  }
  .pt-\[88px\] {
    padding-top:88px
  }
  .pt-px {
    padding-top:1px
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
  .font-\[\'Helvetica_Neue\'\] {
    font-family:Helvetica Neue
  }
  .font-\[\'TypoRound\'\] {
    font-family:TypoRound
  }
  .font-\[monospace\] {
    font-family:monospace
  }
  .font-din-alt {
    font-family:DIN Alternate,sans-serif
  }
  .font-menlo {
    font-family:Menlo,sans-serif
  }
  .font-pingfang {
    font-family:PingFang SC,sans-serif
  }
  .font-sourceHan {
    font-family:SourceHan,sans-serif
  }
  .font-spprop {
    font-family:SF Pro Display,sans-serif
  }
  .font-typo {
    font-family:TypoRound,sans-serif
  }
  .font-zd {
    font-family:ZhengDao,sans-serif
  }
  .\!text-sm {
    font-size:.875rem!important;
    line-height:1.25rem!important
  }
  .text-2xl {
    font-size:1.5rem;
    line-height:2rem
  }
  .text-3xl {
    font-size:1.875rem;
    line-height:2.25rem
  }
  .text-4xl {
    font-size:2.25rem;
    line-height:2.5rem
  }
  .text-5xl {
    font-size:3rem;
    line-height:1
  }
  .text-\[0\.8rem\] {
    font-size:.8rem
  }
  .text-\[0px\] {
    font-size:0
  }
  .text-\[10px\] {
    font-size:10px
  }
  .text-\[11px\] {
    font-size:11px
  }
  .text-\[12px\] {
    font-size:12px
  }
  .text-\[13px\] {
    font-size:13px
  }
  .text-\[14px\] {
    font-size:14px
  }
  .text-\[16px\] {
    font-size:16px
  }
  .text-\[17px\] {
    font-size:17px
  }
  .text-\[18\.2px\] {
    font-size:18.2px
  }
  .text-\[18px\] {
    font-size:18px
  }
  .text-\[20px\] {
    font-size:20px
  }
  .text-\[22px\] {
    font-size:22px
  }
  .text-\[24px\] {
    font-size:24px
  }
  .text-\[26px\] {
    font-size:26px
  }
  .text-\[28px\] {
    font-size:28px
  }
  .text-\[30px\] {
    font-size:30px
  }
  .text-\[32px\] {
    font-size:32px
  }
  .text-\[35px\] {
    font-size:35px
  }
  .text-\[36px\] {
    font-size:36px
  }
  .text-\[38px\] {
    font-size:38px
  }
  .text-\[40px\] {
    font-size:40px
  }
  .text-\[45px\] {
    font-size:45px
  }
  .text-\[46px\] {
    font-size:46px
  }
  .text-\[48px\] {
    font-size:48px
  }
  .text-\[55px\] {
    font-size:55px
  }
  .text-\[60px\] {
    font-size:60px
  }
  .text-\[64px\] {
    font-size:64px
  }
  .text-\[78px\] {
    font-size:78px
  }
  .text-\[88px\] {
    font-size:88px
  }
  .text-\[8px\] {
    font-size:8px
  }
  .text-\[90px\] {
    font-size:90px
  }
  .text-\[9px\] {
    font-size:9px
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
  .italic {
    font-style:italic
  }
  .leading-10 {
    line-height:2.5rem
  }
  .leading-3 {
    line-height:.75rem
  }
  .leading-3\.5 {
    line-height:.875rem
  }
  .leading-4 {
    line-height:1rem
  }
  .leading-5 {
    line-height:1.25rem
  }
  .leading-6 {
    line-height:1.5rem
  }
  .leading-7 {
    line-height:1.75rem
  }
  .leading-8 {
    line-height:2rem
  }
  .leading-9 {
    line-height:2.25rem
  }
  .leading-\[0\] {
    line-height:0
  }
  .leading-\[1\.22\] {
    line-height:1.22
  }
  .leading-\[100\%\] {
    line-height:100%
  }
  .leading-\[104px\] {
    line-height:104px
  }
  .leading-\[13px\] {
    line-height:13px
  }
  .leading-\[14px\] {
    line-height:14px
  }
  .leading-\[15px\] {
    line-height:15px
  }
  .leading-\[16px\] {
    line-height:16px
  }
  .leading-\[17px\] {
    line-height:17px
  }
  .leading-\[18px\] {
    line-height:18px
  }
  .leading-\[20px\] {
    line-height:20px
  }
  .leading-\[21px\] {
    line-height:21px
  }
  .leading-\[22px\] {
    line-height:22px
  }
  .leading-\[24px\] {
    line-height:24px
  }
  .leading-\[25px\] {
    line-height:25px
  }
  .leading-\[26px\] {
    line-height:26px
  }
  .leading-\[27px\] {
    line-height:27px
  }
  .leading-\[28px\] {
    line-height:28px
  }
  .leading-\[30px\] {
    line-height:30px
  }
  .leading-\[32px\] {
    line-height:32px
  }
  .leading-\[40px\] {
    line-height:40px
  }
  .leading-\[42px\] {
    line-height:42px
  }
  .leading-\[43px\] {
    line-height:43px
  }
  .leading-\[44px\] {
    line-height:44px
  }
  .leading-\[56px\] {
    line-height:56px
  }
  .leading-\[60px\] {
    line-height:60px
  }
  .leading-\[88px\] {
    line-height:88px
  }
  .leading-\[normal\] {
    line-height:normal
  }
  .leading-none {
    line-height:1
  }
  .leading-normal {
    line-height:1.5
  }
  .leading-relaxed {
    line-height:1.625
  }
  .leading-snug {
    line-height:1.375
  }
  .leading-tight {
    line-height:1.25
  }
  .tracking-tight {
    letter-spacing:-.025em
  }
  .tracking-tighter {
    letter-spacing:-.05em
  }
  .tracking-tightest {
    letter-spacing:-.075em
  }
  .tracking-widest {
    letter-spacing:.25em
  }
  .\!text-blue-60 {
    color:var(--blue-60)!important
  }
  .\!text-brand-orange {
    color:var(--brand-orange)!important
  }
  .\!text-white {
    --tw-text-opacity:1!important;
    color:rgb(255 255 255/var(--tw-text-opacity))!important
  }
  .text-\[\#002869\] {
    --tw-text-opacity:1;
    color:rgb(0 40 105/var(--tw-text-opacity))
  }
  .text-\[\#007AFF\] {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .text-\[\#140854\] {
    --tw-text-opacity:1;
    color:rgb(20 8 84/var(--tw-text-opacity))
  }
  .text-\[\#15BD66\] {
    --tw-text-opacity:1;
    color:rgb(21 189 102/var(--tw-text-opacity))
  }
  .text-\[\#1A1A1A\],
  .text-\[\#1a1a1a\] {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  .text-\[\#363636\] {
    --tw-text-opacity:1;
    color:rgb(54 54 54/var(--tw-text-opacity))
  }
  .text-\[\#525252\] {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  .text-\[\#5B3800\] {
    --tw-text-opacity:1;
    color:rgb(91 56 0/var(--tw-text-opacity))
  }
  .text-\[\#5D5D5D\] {
    --tw-text-opacity:1;
    color:rgb(93 93 93/var(--tw-text-opacity))
  }
  .text-\[\#5bc04c\] {
    --tw-text-opacity:1;
    color:rgb(91 192 76/var(--tw-text-opacity))
  }
  .text-\[\#61DAFB\] {
    --tw-text-opacity:1;
    color:rgb(97 218 251/var(--tw-text-opacity))
  }
  .text-\[\#737373\] {
    --tw-text-opacity:1;
    color:rgb(115 115 115/var(--tw-text-opacity))
  }
  .text-\[\#7CFF99\] {
    --tw-text-opacity:1;
    color:rgb(124 255 153/var(--tw-text-opacity))
  }
  .text-\[\#83CD29\] {
    --tw-text-opacity:1;
    color:rgb(131 205 41/var(--tw-text-opacity))
  }
  .text-\[\#84F8FF\] {
    --tw-text-opacity:1;
    color:rgb(132 248 255/var(--tw-text-opacity))
  }
  .text-\[\#ABB3B7\] {
    --tw-text-opacity:1;
    color:rgb(171 179 183/var(--tw-text-opacity))
  }
  .text-\[\#D2A664\] {
    --tw-text-opacity:1;
    color:rgb(210 166 100/var(--tw-text-opacity))
  }
  .text-\[\#D6C05F\] {
    --tw-text-opacity:1;
    color:rgb(214 192 95/var(--tw-text-opacity))
  }
  .text-\[\#FDFF87\] {
    --tw-text-opacity:1;
    color:rgb(253 255 135/var(--tw-text-opacity))
  }
  .text-\[\#FFA116\] {
    --tw-text-opacity:1;
    color:rgb(255 161 22/var(--tw-text-opacity))
  }
  .text-\[\#FFB1CD\] {
    --tw-text-opacity:1;
    color:rgb(255 177 205/var(--tw-text-opacity))
  }
  .text-\[\#FFD687\] {
    --tw-text-opacity:1;
    color:rgb(255 214 135/var(--tw-text-opacity))
  }
  .text-\[\#f5f5f5\] {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  .text-\[\#fff\],
  .text-\[\#ffffff\] {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-\[orange\] {
    --tw-text-opacity:1;
    color:rgb(255 165 0/var(--tw-text-opacity))
  }
  .text-\[rgba\(255 255 255 0\.75\)\] {
    color:#ffffffbf
  }
  .text-\[rgba\(26 26 26 0\.75\)\] {
    color:#1a1a1abf
  }
  .text-\[rgba\(82 82 82 0\.3\)\] {
    color:#5252524d
  }
  .text-\[rgba\(82 82 82 0\.6\)\] {
    color:#52525299
  }
  .text-\[var\(--light-gray-100\)\] {
    color:var(--light-gray-100)
  }
  .text-black {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  .text-blue {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .text-blue-10 {
    color:var(--blue-10)
  }
  .text-blue-100 {
    color:var(--blue-100)
  }
  .text-blue-20 {
    color:var(--blue-20)
  }
  .text-blue-40 {
    color:var(--blue-40)
  }
  .text-blue-60 {
    color:var(--blue-60)
  }
  .text-blue-80 {
    color:var(--blue-80)
  }
  .text-blue-s {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .text-border-primary {
    color:var(--border-primary)
  }
  .text-border-quaternary {
    color:var(--border-quaternary)
  }
  .text-border-secondary {
    color:var(--border-secondary)
  }
  .text-border-tertiary {
    color:var(--border-tertiary)
  }
  .text-brand-gray {
    color:var(--brand-gray)
  }
  .text-brand-logo {
    color:var(--brand-logo)
  }
  .solved-circle-ring {
    color: #6692d7
  }
  .text-current {
    color:currentColor
  }
  .text-dark-blue-s {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  .text-dark-fill-3 {
    color:#ffffff1a
  }
  .text-dark-gray-1 {
    --tw-text-opacity:1;
    color:rgb(56 56 56/var(--tw-text-opacity))
  }
  .text-dark-gray-6 {
    --tw-text-opacity:1;
    color:rgb(138 138 138/var(--tw-text-opacity))
  }
  .text-dark-gray-8 {
    --tw-text-opacity:1;
    color:rgb(219 219 219/var(--tw-text-opacity))
  }
  .text-dark-label-1 {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-dark-label-2 {
    color:#eff1f6bf
  }
  .text-dark-label-3 {
    color:#eff2f699
  }
  .text-dark-label-4 {
    color:#ebebf54d
  }
  .text-dark-paper {
    --tw-text-opacity:1;
    color:rgb(28 28 28/var(--tw-text-opacity))
  }
  .text-difficulty-easy {
    color:var(--difficulty-easy)
  }
  .text-difficulty-hard {
    color:var(--difficulty-hard)
  }
  .text-difficulty-medium {
    color:var(--difficulty-medium)
  }
  .text-fill-primary {
    color:var(--fill-primary)
  }
  .text-fill-pure {
    color:var(--fill-pure)
  }
  .text-fill-quaternary {
    color:var(--fill-quaternary)
  }
  .text-fill-secondary {
    color:var(--fill-secondary)
  }
  .text-fill-tertiary {
    color:var(--fill-tertiary)
  }
  .text-fixed-black {
    color:var(--fixed-black)
  }
  .text-fixed-white {
    color:var(--fixed-white)
  }
  .text-gray-1 {
    --tw-text-opacity:1;
    color:rgb(247 247 247/var(--tw-text-opacity))
  }
  .text-gray-10 {
    color:var(--gray-10)
  }
  .text-gray-100 {
    color:var(--gray-100)
  }
  .text-gray-20 {
    color:var(--gray-20)
  }
  .text-gray-3 {
    --tw-text-opacity:1;
    color:rgb(229 229 229/var(--tw-text-opacity))
  }
  .text-gray-4 {
    --tw-text-opacity:1;
    color:rgb(223 223 223/var(--tw-text-opacity))
  }
  .text-gray-40 {
    color:var(--gray-40)
  }
  .text-gray-5 {
    --tw-text-opacity:1;
    color:rgb(191 191 191/var(--tw-text-opacity))
  }
  .text-gray-6 {
    --tw-text-opacity:1;
    color:rgb(140 140 140/var(--tw-text-opacity))
  }
  .text-gray-60 {
    color:var(--gray-60)
  }
  .text-gray-7 {
    --tw-text-opacity:1;
    color:rgb(89 89 89/var(--tw-text-opacity))
  }
  .text-gray-8 {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .text-gray-80 {
    color:var(--gray-80)
  }
  .text-green-10 {
    color:var(--green-10)
  }
  .text-green-100 {
    color:var(--green-100)
  }
  .text-green-20 {
    color:var(--green-20)
  }
  .text-green-4 {
    --tw-text-opacity:1;
    color:rgb(31 127 65/var(--tw-text-opacity))
  }
  .text-green-40 {
    color:var(--green-40)
  }
  .text-green-60 {
    color:var(--green-60)
  }
  .text-green-80 {
    color:var(--green-80)
  }
  .text-green-s {
    --tw-text-opacity:1;
    color:rgb(45 181 93/var(--tw-text-opacity))
  }
  .text-label-1 {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .text-label-2 {
    color:#262626bf
  }
  .text-label-3 {
    color:#3c3c4399
  }
  .text-label-4 {
    color:#3c3c434d
  }
  .text-label-r {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-layer-01 {
    color:var(--layer-01)
  }
  .text-layer-02 {
    color:var(--layer-02)
  }
  .text-layer-03 {
    color:var(--layer-03)
  }
  .text-layer-bg-gray {
    color:var(--layer-bg-gray)
  }
  .text-layer-bg-pure {
    color:var(--layer-bg-pure)
  }
  .text-lc-button-danger {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .text-lc-button-danger-active {
    --tw-text-opacity:1;
    color:rgb(210 32 58/var(--tw-text-opacity))
  }
  .text-lc-button-primary {
    --tw-text-opacity:1;
    color:rgb(33 33 33/var(--tw-text-opacity))
  }
  .text-lc-button-primary-active {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  .text-lc-button-secondary {
    color:#0000000d
  }
  .text-lc-button-secondary-active {
    color:#00000014
  }
  .text-lc-button-theme {
    --tw-text-opacity:1;
    color:rgb(21 189 102/var(--tw-text-opacity))
  }
  .text-lc-button-theme-active {
    --tw-text-opacity:1;
    color:rgb(24 163 82/var(--tw-text-opacity))
  }
  .text-lc-fixed-black {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  .text-lc-fixed-white {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-lc-gray-50 {
    --tw-text-opacity:1;
    color:rgb(148 148 148/var(--tw-text-opacity))
  }
  .text-lc-gray-70 {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  .text-lc-green-60 {
    --tw-text-opacity:1;
    color:rgb(21 189 102/var(--tw-text-opacity))
  }
  .text-lc-icon-inverse {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-lc-icon-primary {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  .text-lc-icon-secondary {
    --tw-text-opacity:1;
    color:rgb(148 148 148/var(--tw-text-opacity))
  }
  .text-lc-icon-tertiary {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  .text-lc-red-60,
  .text-lc-support-error {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .text-lc-support-info {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .text-lc-support-success {
    --tw-text-opacity:1;
    color:rgb(21 189 102/var(--tw-text-opacity))
  }
  .text-lc-support-warning {
    --tw-text-opacity:1;
    color:rgb(255 184 0/var(--tw-text-opacity))
  }
  .text-lc-system-primary {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .text-lc-system-primary-active {
    --tw-text-opacity:1;
    color:rgb(46 154 255/var(--tw-text-opacity))
  }
  .text-lc-text-error {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .text-lc-text-inverse {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-lc-text-primary {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  .text-lc-text-quaternary {
    color:#5252524d
  }
  .text-lc-text-secondary {
    color:#1a1a1abf
  }
  .text-lc-text-tertiary {
    color:#52525299
  }
  .text-lc-yellow-60 {
    --tw-text-opacity:1;
    color:rgb(255 184 0/var(--tw-text-opacity))
  }
  .text-magenta-10 {
    color:var(--magenta-10)
  }
  .text-magenta-100 {
    color:var(--magenta-100)
  }
  .text-magenta-20 {
    color:var(--magenta-20)
  }
  .text-magenta-40 {
    color:var(--magenta-40)
  }
  .text-magenta-60 {
    color:var(--magenta-60)
  }
  .text-magenta-80 {
    color:var(--magenta-80)
  }
  .text-message-danger {
    color:var(--message-danger)
  }
  .text-message-primary {
    color:var(--message-primary)
  }
  .text-message-success {
    color:var(--message-success)
  }
  .text-message-warning {
    color:var(--message-warning)
  }
  .text-olive {
    --tw-text-opacity:1;
    color:rgb(0 175 155/var(--tw-text-opacity))
  }
  .text-opacity-yellow-60 {
    color:var(--opacity-yellow-60)
  }
  .text-paper {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-pink {
    --tw-text-opacity:1;
    color:rgb(255 45 85/var(--tw-text-opacity))
  }
  .text-pink-1 {
    --tw-text-opacity:1;
    color:rgb(255 116 208/var(--tw-text-opacity))
  }
  .text-purple {
    --tw-text-opacity:1;
    color:rgb(175 82 222/var(--tw-text-opacity))
  }
  .text-purple-10 {
    color:var(--purple-10)
  }
  .text-purple-100 {
    color:var(--purple-100)
  }
  .text-purple-20 {
    color:var(--purple-20)
  }
  .text-purple-40 {
    color:var(--purple-40)
  }
  .text-purple-60 {
    color:var(--purple-60)
  }
  .text-purple-80 {
    color:var(--purple-80)
  }
  .text-red-10 {
    color:var(--red-10)
  }
  .text-red-100 {
    color:var(--red-100)
  }
  .text-red-20 {
    color:var(--red-20)
  }
  .text-red-3 {
    --tw-text-opacity:1;
    color:rgb(203 60 57/var(--tw-text-opacity))
  }
  .text-red-4 {
    --tw-text-opacity:1;
    color:rgb(167 50 47/var(--tw-text-opacity))
  }
  .text-red-40 {
    color:var(--red-40)
  }
  .text-red-60 {
    color:var(--red-60)
  }
  .text-red-80 {
    color:var(--red-80)
  }
  .text-red-s {
    --tw-text-opacity:1;
    color:rgb(239 71 67/var(--tw-text-opacity))
  }
  .text-sd-accent-foreground {
    color:hsl(var(--sd-accent-foreground))
  }
  .text-sd-blue-400 {
    color:hsl(var(--sd-blue-400))
  }
  .text-sd-blue-500 {
    color:hsl(var(--sd-blue-500))
  }
  .text-sd-brand-lc-orange {
    color:hsl(var(--sd-brand-lc-orange))
  }
  .text-sd-card-foreground {
    color:hsl(var(--sd-card-foreground))
  }
  .text-sd-danger {
    color:hsl(var(--sd-danger))
  }
  .text-sd-destructive {
    color:hsl(var(--sd-destructive))
  }
  .text-sd-easy {
    color:hsl(var(--sd-easy))
  }
  .text-sd-fixed-white {
    color:hsl(var(--sd-fixed-white))
  }
  .text-sd-foreground {
    color:hsl(var(--sd-foreground))
  }
  .text-sd-green-500 {
    color:hsl(var(--sd-green-500))
  }
  .text-sd-hard {
    color:hsl(var(--sd-hard))
  }
  .text-sd-info {
    color:hsl(var(--sd-info))
  }
  .text-sd-medium {
    color:hsl(var(--sd-medium))
  }
  .text-sd-muted-foreground {
    color:hsl(var(--sd-muted-foreground))
  }
  .text-sd-muted-foreground\/80 {
    color:hsl(var(--sd-muted-foreground)/.8)
  }
  .text-sd-popover-foreground {
    color:hsl(var(--sd-popover-foreground))
  }
  .text-sd-primary {
    color:hsl(var(--sd-primary))
  }
  .text-sd-primary-foreground {
    color:hsl(var(--sd-primary-foreground))
  }
  .text-sd-secondary-foreground {
    color:hsl(var(--sd-secondary-foreground))
  }
  .text-sd-success {
    color:hsl(var(--sd-success))
  }
  .text-sd-warning {
    color:hsl(var(--sd-warning))
  }
  .text-sd-yellow-500 {
    color:hsl(var(--sd-yellow-500))
  }
  .text-special-kiwi {
    color:var(--special-kiwi)
  }
  .text-special-lavender {
    color:var(--special-lavender)
  }
  .text-special-rose {
    color:var(--special-rose)
  }
  .text-special-skyler {
    color:var(--special-skyler)
  }
  .text-special-sunny {
    color:var(--special-sunny)
  }
  .text-teal {
    --tw-text-opacity:1;
    color:rgb(90 200 250/var(--tw-text-opacity))
  }
  .text-teal-10 {
    color:var(--teal-10)
  }
  .text-teal-100 {
    color:var(--teal-100)
  }
  .text-teal-20 {
    color:var(--teal-20)
  }
  .text-teal-40 {
    color:var(--teal-40)
  }
  .text-teal-60 {
    color:var(--teal-60)
  }
  .text-teal-80 {
    color:var(--teal-80)
  }
  .text-text-primary {
    color:var(--text-primary)
  }
  .text-text-quaternary {
    color:var(--text-quaternary)
  }
  .text-text-reverse {
    color:var(--text-reverse)
  }
  .text-text-secondary {
    color:var(--text-secondary)
  }
  .text-text-tertiary {
    color:var(--text-tertiary)
  }
  .text-transparent {
    color:#0000
  }
  .text-white {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .text-yellow {
    --tw-text-opacity:1;
    color:rgb(255 184 0/var(--tw-text-opacity))
  }
  .text-yellow-10 {
    color:var(--yellow-10)
  }
  .text-yellow-100 {
    color:var(--yellow-100)
  }
  .text-yellow-20 {
    color:var(--yellow-20)
  }
  .text-yellow-40 {
    color:var(--yellow-40)
  }
  .text-yellow-60 {
    color:var(--yellow-60)
  }
  .text-yellow-80 {
    color:var(--yellow-80)
  }
  .text-opacity-75 {
    --tw-text-opacity:0.75
  }
  .underline {
    text-decoration-line:underline
  }
  .line-through {
    text-decoration-line:line-through
  }
  .\!no-underline {
    text-decoration-line:none!important
  }
  .no-underline {
    text-decoration-line:none
  }
  .underline-offset-4 {
    text-underline-offset:4px
  }
  .antialiased {
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale
  }
  .placeholder-label-4::placeholder {
    color:#3c3c434d
  }
  .\!opacity-100 {
    opacity:1!important
  }
  .opacity-0 {
    opacity:0
  }
  .opacity-10 {
    opacity:.1
  }
  .opacity-100 {
    opacity:1
  }
  .opacity-20 {
    opacity:.2
  }
  .opacity-30 {
    opacity:.3
  }
  .opacity-40 {
    opacity:.4
  }
  .opacity-5 {
    opacity:.05
  }
  .opacity-50 {
    opacity:.5
  }
  .opacity-60 {
    opacity:.6
  }
  .opacity-70 {
    opacity:.7
  }
  .opacity-80 {
    opacity:.8
  }
  .opacity-90 {
    opacity:.9
  }
  .opacity-\[\.85\] {
    opacity:.85
  }
  .opacity-\[0\.08\] {
    opacity:.08
  }
  .opacity-\[0\.64\] {
    opacity:.64
  }
  .opacity-\[0\.85\] {
    opacity:.85
  }
  .mix-blend-luminosity {
    mix-blend-mode:luminosity
  }
  .shadow {
    --tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;
    --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)
  }
  .shadow,
  .shadow-\[0_8px_36px_rgba\(0 0 0 0\.3\)\] {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-\[0_8px_36px_rgba\(0 0 0 0\.3\)\] {
    --tw-shadow:0 8px 36px #0000004d;
    --tw-shadow-colored:0 8px 36px var(--tw-shadow-color)
  }
  .shadow-\[0px_2px_4px_rgba\(0 0 0 0\.02\) 0px_4px_8px_rgba\(0 0 0 0\.02\) 0px_6px_12px_rgba\(0 0 0 0\.04\)\] {
    --tw-shadow:0px 2px 4px #00000005,0px 4px 8px #00000005,0px 6px 12px #0000000a;
    --tw-shadow-colored:0px 2px 4px var(--tw-shadow-color),0px 4px 8px var(--tw-shadow-color),0px 6px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-\[2px_2px_4px_0px_\#1BB15033\] {
    --tw-shadow:2px 2px 4px 0px #1bb15033;
    --tw-shadow-colored:2px 2px 4px 0px var(--tw-shadow-color)
  }
  .shadow-\[2px_2px_4px_0px_\#1BB15033\],
  .shadow-blue {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-blue {
    --tw-shadow:0px 0px 0px 1px #007aff,0px 0px 0px 1px #0a84ff;
    --tw-shadow-colored:0px 0px 0px 1px var(--tw-shadow-color),0px 0px 0px 1px var(--tw-shadow-color)
  }
  .shadow-down-01 {
    --tw-shadow:0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005;
    --tw-shadow-colored:0px 2px 6px var(--tw-shadow-color),0px 4px 8px var(--tw-shadow-color),0px 6px 12px var(--tw-shadow-color)
  }
  .shadow-down-01,
  .shadow-down-02 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-down-02 {
    --tw-shadow:0px 4px 16px #0000000a,0px 8px 32px #0000000a,0px 12px 48px #0000000a;
    --tw-shadow-colored:0px 4px 16px var(--tw-shadow-color),0px 8px 32px var(--tw-shadow-color),0px 12px 48px var(--tw-shadow-color)
  }
  .shadow-down-03 {
    --tw-shadow:0px 16px 40px #00000014,0px 24px 48px #0000000f,0px 32px 64px #0000000a;
    --tw-shadow-colored:0px 16px 40px var(--tw-shadow-color),0px 24px 48px var(--tw-shadow-color),0px 32px 64px var(--tw-shadow-color)
  }
  .shadow-down-03,
  .shadow-fixed-green {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-fixed-green {
    --tw-shadow:0 4px 12px 0 #2db55d66;
    --tw-shadow-colored:0 4px 12px 0 var(--tw-shadow-color)
  }
  .shadow-form {
    --tw-shadow:0px 0px 0px 2px #2db55d4d;
    --tw-shadow-colored:0px 0px 0px 2px var(--tw-shadow-color)
  }
  .shadow-form,
  .shadow-layer1 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-layer1 {
    --tw-shadow:var(--shadow-layer-1);
    --tw-shadow-colored:var(--shadow-layer-1)
  }
  .shadow-layer1-hover {
    --tw-shadow:var(--shadow-layer-1-hover);
    --tw-shadow-colored:var(--shadow-layer-1-hover)
  }
  .shadow-layer1-hover,
  .shadow-layer2 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-layer2 {
    --tw-shadow:var(--shadow-layer-2);
    --tw-shadow-colored:var(--shadow-layer-2)
  }
  .shadow-layer3 {
    --tw-shadow:var(--shadow-layer-3);
    --tw-shadow-colored:var(--shadow-layer-3)
  }
  .shadow-layer3,
  .shadow-left-01 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-left-01 {
    --tw-shadow:-2px 0px 4px #00000005,-4px 0px 8px #00000005,-6px 0px 12px #00000005;
    --tw-shadow-colored:-2px 0px 4px var(--tw-shadow-color),-4px 0px 8px var(--tw-shadow-color),-6px 0px 12px var(--tw-shadow-color)
  }
  .shadow-left-02 {
    --tw-shadow:-4px 0px 16px #0000000a,-8px 0px 32px #0000000a,-12px 0px 48px #0000000a;
    --tw-shadow-colored:-4px 0px 16px var(--tw-shadow-color),-8px 0px 32px var(--tw-shadow-color),-12px 0px 48px var(--tw-shadow-color)
  }
  .shadow-left-02,
  .shadow-left-03 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-left-03 {
    --tw-shadow:-16px 0px 40px #00000014,-24px 0px 48px #0000000f,-32px 0px 64px #0000000a;
    --tw-shadow-colored:-16px 0px 40px var(--tw-shadow-color),-24px 0px 48px var(--tw-shadow-color),-32px 0px 64px var(--tw-shadow-color)
  }
  .shadow-level1 {
    --tw-shadow:0px 1px 3px #0000000a,0px 2px 8px #00000014;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 2px 8px var(--tw-shadow-color)
  }
  .shadow-level1,
  .shadow-level2 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-level2 {
    --tw-shadow:0px 1px 3px #0000000a,0px 4px 12px #00000014;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 4px 12px var(--tw-shadow-color)
  }
  .shadow-level3 {
    --tw-shadow:0px 1px 3px #0000000a,0px 6px 16px #0000001f;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 6px 16px var(--tw-shadow-color)
  }
  .shadow-level3,
  .shadow-level4 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-level4 {
    --tw-shadow:0px 1px 3px #0000000a,0px 10px 28px -4px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 10px 28px -4px var(--tw-shadow-color)
  }
  .shadow-lg {
    --tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;
    --tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)
  }
  .shadow-lg,
  .shadow-md {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-md {
    --tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;
    --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)
  }
  .shadow-none {
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000
  }
  .shadow-none,
  .shadow-red {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-red {
    --tw-shadow:0px 0px 0px 1px #ef4743,0px 0px 0px 1px #ef4743;
    --tw-shadow-colored:0px 0px 0px 1px var(--tw-shadow-color),0px 0px 0px 1px var(--tw-shadow-color)
  }
  .shadow-right-01 {
    --tw-shadow:2px 0px 4px #00000005,4px 0px 8px #00000005,6px 0px 12px #00000005;
    --tw-shadow-colored:2px 0px 4px var(--tw-shadow-color),4px 0px 8px var(--tw-shadow-color),6px 0px 12px var(--tw-shadow-color)
  }
  .shadow-right-01,
  .shadow-right-02 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-right-02 {
    --tw-shadow:4px 0px 16px #0000000a,8px 0px 32px #0000000a,12px 0px 48px #0000000a;
    --tw-shadow-colored:4px 0px 16px var(--tw-shadow-color),8px 0px 32px var(--tw-shadow-color),12px 0px 48px var(--tw-shadow-color)
  }
  .shadow-right-03 {
    --tw-shadow:16px 0px 40px #00000014,24px 0px 48px #0000000f,32px 0px 64px #0000000a;
    --tw-shadow-colored:16px 0px 40px var(--tw-shadow-color),24px 0px 48px var(--tw-shadow-color),32px 0px 64px var(--tw-shadow-color)
  }
  .shadow-right-03,
  .shadow-sm {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-sm {
    --tw-shadow:0 1px 2px 0 #0000000d;
    --tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)
  }
  .shadow-up-01 {
    --tw-shadow:0px -2px 4px #00000005,0px -4px 8px #00000005,0px -6px 12px #00000005;
    --tw-shadow-colored:0px -2px 4px var(--tw-shadow-color),0px -4px 8px var(--tw-shadow-color),0px -6px 12px var(--tw-shadow-color)
  }
  .shadow-up-01,
  .shadow-up-02 {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-up-02 {
    --tw-shadow:0px -4px 16px #0000000a,0px -8px 32px #0000000a,0px -12px 48px #0000000a;
    --tw-shadow-colored:0px -4px 16px var(--tw-shadow-color),0px -8px 32px var(--tw-shadow-color),0px -12px 48px var(--tw-shadow-color)
  }
  .shadow-up-03 {
    --tw-shadow:0px -16px 40px #00000014,0px -24px 48px #0000000f,0px -32px 64px #0000000a;
    --tw-shadow-colored:0px -16px 40px var(--tw-shadow-color),0px -24px 48px var(--tw-shadow-color),0px -32px 64px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .shadow-blue {
    --tw-shadow-color:#007aff;
    --tw-shadow:var(--tw-shadow-colored)
  }
  .\!outline-none {
    outline:2px solid #0000!important;
    outline-offset:2px!important
  }
  .outline-none {
    outline:2px solid #0000;
    outline-offset:2px
  }
  .outline {
    outline-style:solid
  }
  .outline-0 {
    outline-width:0
  }
  .outline-1 {
    outline-width:1px
  }
  .outline-red-s {
    outline-color:#ef4743
  }
  .ring {
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)
  }
  .ring,
  .ring-0 {
    box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
  }
  .ring-0 {
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)
  }
  .ring-opacity-30 {
    --tw-ring-opacity:0.3
  }
  .ring-offset-sd-background {
    --tw-ring-offset-color:hsl(var(--sd-background))
  }
  .blur {
    --tw-blur:blur(8px)
  }
  .blur,
  .blur-\[100px\] {
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }
  .blur-\[100px\] {
    --tw-blur:blur(100px)
  }
  .blur-\[60px\] {
    --tw-blur:blur(60px)
  }
  .blur-\[60px\],
  .blur-md {
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }
  .blur-md {
    --tw-blur:blur(12px)
  }
  .blur-xxs {
    --tw-blur:blur(1px)
  }
  .blur-xxs,
  .brightness-50 {
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }
  .brightness-50 {
    --tw-brightness:brightness(.5)
  }
  .drop-shadow {
    --tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f)
  }
  .drop-shadow,
  .drop-shadow-\[0_2px_4px_rgba\(255 161 22 0\.2\)\] {
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }
  .drop-shadow-\[0_2px_4px_rgba\(255 161 22 0\.2\)\] {
    --tw-drop-shadow:drop-shadow(0 2px 4px #ffa11633)
  }
  .drop-shadow-\[0_40px_94px_rgba\(0 0 0 0\.04\)\] {
    --tw-drop-shadow:drop-shadow(0 40px 94px #0000000a)
  }
  .drop-shadow-\[0_40px_94px_rgba\(0 0 0 0\.04\)\],
  .grayscale {
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }
  .grayscale {
    --tw-grayscale:grayscale(100%)
  }
  .invert {
    --tw-invert:invert(100%)
  }
  .filter,
  .invert {
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }
  .backdrop-blur {
    --tw-backdrop-blur:blur(8px)
  }
  .backdrop-blur,
  .backdrop-blur-\[20px\] {
    -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
  }
  .backdrop-blur-\[20px\] {
    --tw-backdrop-blur:blur(20px)
  }
  .backdrop-blur-\[2px\] {
    --tw-backdrop-blur:blur(2px)
  }
  .backdrop-blur-\[2px\],
  .backdrop-blur-\[4px\] {
    -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
  }
  .backdrop-blur-\[4px\] {
    --tw-backdrop-blur:blur(4px)
  }
  .backdrop-blur-lg {
    --tw-backdrop-blur:blur(16px)
  }
  .backdrop-blur-lg,
  .backdrop-blur-md {
    -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
  }
  .backdrop-blur-md {
    --tw-backdrop-blur:blur(12px)
  }
  .backdrop-blur-none {
    --tw-backdrop-blur:blur(0)
  }
  .backdrop-blur-none,
  .backdrop-blur-sm {
    -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur:blur(4px)
  }
  .backdrop-filter {
    -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
  }
  .transition {
    transition-duration:.15s;
    transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
    transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-\[background\] {
    transition-duration:.15s;
    transition-property:background;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-\[border-color\] {
    transition-duration:.15s;
    transition-property:border-color;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-\[height\] {
    transition-duration:.15s;
    transition-property:height;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-\[opacity\] {
    transition-duration:.15s;
    transition-property:opacity;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-\[transform\] {
    transition-duration:.15s;
    transition-property:transform;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-\[width\] {
    transition-duration:.15s;
    transition-property:width;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-all {
    transition-duration:.15s;
    transition-property:all;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-colors {
    transition-duration:.15s;
    transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-none {
    transition-property:none
  }
  .transition-opacity {
    transition-duration:.15s;
    transition-property:opacity;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-shadow {
    transition-duration:.15s;
    transition-property:box-shadow;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .transition-transform {
    transition-duration:.15s;
    transition-property:transform;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .delay-0 {
    transition-delay:0s
  }
  .delay-100 {
    transition-delay:.1s
  }
  .delay-150 {
    transition-delay:.15s
  }
  .delay-200 {
    transition-delay:.2s
  }
  .delay-300 {
    transition-delay:.3s
  }
  .delay-75 {
    transition-delay:75ms
  }
  .delay-\[2000ms\] {
    transition-delay:2s
  }
  .duration-0 {
    transition-duration:0s
  }
  .duration-100 {
    transition-duration:.1s
  }
  .duration-150 {
    transition-duration:.15s
  }
  .duration-200 {
    transition-duration:.2s
  }
  .duration-300 {
    transition-duration:.3s
  }
  .duration-400 {
    transition-duration:.4s
  }
  .duration-500 {
    transition-duration:.5s
  }
  .duration-600 {
    transition-duration:.6s
  }
  .duration-75 {
    transition-duration:75ms
  }
  .duration-800 {
    transition-duration:.8s
  }
  .ease-\[cubic-bezier\(\.215 \.61 \.355 1\)\] {
    transition-timing-function:cubic-bezier(.215,.61,.355,1)
  }
  .ease-\[cubic-bezier\(\.25 \.46 \.684 \.995\)\] {
    transition-timing-function:cubic-bezier(.25,.46,.684,.995)
  }
  .ease-\[cubic-bezier\(\.65 0 \.35 1\)\] {
    transition-timing-function:cubic-bezier(.65,0,.35,1)
  }
  .ease-\[cubic-bezier\(0 1\.5 \.5 1\)\] {
    transition-timing-function:cubic-bezier(0,1.5,.5,1)
  }
  .ease-in {
    transition-timing-function:cubic-bezier(.4,0,1,1)
  }
  .ease-in-out {
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .ease-out {
    transition-timing-function:cubic-bezier(0,0,.2,1)
  }
  .scrollbar-hide {
    -ms-overflow-style:none;
    scrollbar-width:none
  }
  .scrollbar-hide::-webkit-scrollbar {
    display:none
  }
  .z-base {
    z-index:0
  }
  .z-base-1 {
    z-index:1
  }
  .z-base-negative-1 {
    z-index:-1
  }
  .z-base-2 {
    z-index:2
  }
  .z-base-3 {
    z-index:3
  }
  .z-base-4 {
    z-index:4
  }
  .z-base-5 {
    z-index:5
  }
  .z-base-8 {
    z-index:8
  }
  .z-base-9 {
    z-index:9
  }
  .z-dropdown {
    z-index:10
  }
  .z-overlay {
    z-index:20
  }
  .z-overlay-1 {
    z-index:21
  }
  .z-nav {
    z-index:30
  }
  .z-nav-1 {
    z-index:31
  }
  .z-nav-5 {
    z-index:35
  }
  .z-nav-9 {
    z-index:39
  }
  .z-modal {
    z-index:40
  }
  .z-modal-1 {
    z-index:41
  }
  .z-modal-2 {
    z-index:42
  }
  .z-modal-3 {
    z-index:43
  }
  .z-modal-5 {
    z-index:45
  }
  .z-modal-6 {
    z-index:46
  }
  .z-modal-9 {
    z-index:49
  }
  .z-message {
    z-index:50
  }
  @keyframes enter {
    0% {
      opacity:var(--tw-enter-opacity,1);
      transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0) scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1)) rotate(var(--tw-enter-rotate,0))
    }
  }
  @keyframes exit {
    to {
      opacity:var(--tw-exit-opacity,1);
      transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0) scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1)) rotate(var(--tw-exit-rotate,0))
    }
  }
  @keyframes from-to {
    0% {
      opacity:var(--tw-from-opacity,1);
      transform:translate3d(var(--tw-from-translate-x,0),var(--tw-from-translate-y,0),0) scale3d(var(--tw-from-scale,1),var(--tw-from-scale,1),var(--tw-from-scale,1)) rotate(var(--tw-from-rotate,0))
    }
    to {
      opacity:var(--tw-to-opacity,1);
      transform:translate3d(var(--tw-to-translate-x,0),var(--tw-to-translate-y,0),0) scale3d(var(--tw-to-scale,1),var(--tw-to-scale,1),var(--tw-to-scale,1)) rotate(var(--tw-to-rotate,0))
    }
  }
  .animate-in {
    --tw-enter-opacity:initial;
    --tw-enter-scale:initial;
    --tw-enter-rotate:initial;
    --tw-enter-translate-x:initial;
    --tw-enter-translate-y:initial;
    animation-duration:.15s;
    animation-name:enter
  }
  .animate-out {
    --tw-exit-opacity:initial;
    --tw-exit-scale:initial;
    --tw-exit-rotate:initial;
    --tw-exit-translate-x:initial;
    --tw-exit-translate-y:initial;
    animation-duration:.15s;
    animation-name:exit
  }
  .animate-from-to {
    --tw-from-opacity:initial;
    --tw-from-scale:initial;
    --tw-from-rotate:initial;
    --tw-from-translate-x:initial;
    --tw-from-translate-y:initial;
    --tw-to-opacity:initial;
    --tw-to-scale:initial;
    --tw-to-rotate:initial;
    --tw-to-translate-x:initial;
    --tw-to-translate-y:initial;
    animation-duration:.15s;
    animation-name:from-to
  }
  .fade-from {
    --tw-from-opacity:0
  }
  .fade-in,
  .fade-in-0 {
    --tw-enter-opacity:0
  }
  .fade-out {
    --tw-exit-opacity:0
  }
  .fade-to {
    --tw-to-opacity:0
  }
  .zoom-from {
    --tw-from-scale:0
  }
  .zoom-in {
    --tw-enter-scale:0
  }
  .zoom-in-95 {
    --tw-enter-scale:.95
  }
  .zoom-out {
    --tw-exit-scale:0
  }
  .zoom-to {
    --tw-to-scale:0
  }
  .spin-from {
    --tw-from-rotate:30deg
  }
  .spin-in {
    --tw-enter-rotate:30deg
  }
  .spin-out {
    --tw-exit-rotate:30deg
  }
  .spin-to {
    --tw-to-rotate:30deg
  }
  .slide-from-bottom {
    --tw-from-translate-y:100%
  }
  .slide-from-left {
    --tw-from-translate-x:-100%
  }
  .slide-from-right {
    --tw-from-translate-x:100%
  }
  .slide-from-top {
    --tw-from-translate-y:-100%
  }
  .slide-in-from-bottom {
    --tw-enter-translate-y:100%
  }
  .slide-in-from-left {
    --tw-enter-translate-x:-100%
  }
  .slide-in-from-right {
    --tw-enter-translate-x:100%
  }
  .slide-in-from-top {
    --tw-enter-translate-y:-100%
  }
  .slide-out-to-bottom {
    --tw-exit-translate-y:100%
  }
  .slide-out-to-left {
    --tw-exit-translate-x:-100%
  }
  .slide-out-to-right {
    --tw-exit-translate-x:100%
  }
  .slide-out-to-top {
    --tw-exit-translate-y:-100%
  }
  .slide-to-bottom {
    --tw-to-translate-y:100%
  }
  .slide-to-left {
    --tw-to-translate-x:-100%
  }
  .slide-to-right {
    --tw-to-translate-x:100%
  }
  .slide-to-top {
    --tw-to-translate-y:-100%
  }
  .animate-duration-200 {
    animation-duration:.2s
  }
  .animate-duration-\[3s\] {
    animation-duration:3s
  }
  .animate-ease-in-out {
    animation-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .running {
    animation-play-state:running
  }
  .paused {
    animation-play-state:paused
  }
  .border-spacing-0 {
    border-spacing:0
  }
  .display-none {
    display:none
  }
  .\[overflow-wrap\:anywhere\] {
    overflow-wrap:anywhere
  }
  .lc-tooltip .ant-tooltip-content .ant-tooltip-inner {
    --tw-text-opacity:1;
    background-color:#262626bf;
    border-radius:5px;
    color:rgb(255 255 255/var(--tw-text-opacity));
    font-size:.75rem;
    height:auto;
    line-height:1rem;
    min-height:0;
    opacity:1;
    overflow-wrap:break-word;
    padding:.25rem .5rem
  }
  :is(.dark .lc-tooltip .ant-tooltip-content .ant-tooltip-inner) {
    --tw-text-opacity:1;
    background-color:#eff1f6bf;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .lc-tooltip .ant-tooltip-content .ant-tooltip-arrow-content {
    background-color:#262626bf;
    opacity:1
  }
  :is(.dark .lc-tooltip .ant-tooltip-content .ant-tooltip-arrow-content) {
    background-color:#eff1f6bf
  }
  .lc-tooltip-no-arrow .ant-tooltip-content .ant-tooltip-arrow-content {
    display:none
  }
  .lc-paper-tooltip.lc-tooltip .ant-tooltip-content .ant-tooltip-inner {
    --tw-bg-opacity:1;
    background-color:rgb(247 248 250/var(--tw-bg-opacity))
  }
  :is(.dark .lc-paper-tooltip.lc-tooltip .ant-tooltip-content .ant-tooltip-inner) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  .lc-paper-tooltip.lc-tooltip .ant-tooltip-content .ant-tooltip-arrow-content {
    --tw-bg-opacity:1;
    background-color:rgb(247 248 250/var(--tw-bg-opacity))
  }
  :is(.dark .lc-paper-tooltip.lc-tooltip .ant-tooltip-content .ant-tooltip-arrow-content) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  .bg-gradient-job-head {
    background:linear-gradient(180deg,#fffffff2,#ffffffd9 79.17%,#ffffffa6)
  }
  #__next,
  body,
  html {
    height:100%
  }
  @media (min-width:680px) {
    .md\:aspect-h-1 {
      --tw-aspect-h:1
    }
    .md\:aspect-w-1 {
      --tw-aspect-w:1;
      padding-bottom:calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);
      position:relative
    }
    .md\:aspect-w-1>* {
      bottom:0;
      height:100%;
      left:0;
      position:absolute;
      right:0;
      top:0;
      width:100%
    }
    .md\:aspect-w-2 {
      --tw-aspect-w:2;
      padding-bottom:calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%);
      position:relative
    }
    .md\:aspect-w-2>* {
      bottom:0;
      height:100%;
      left:0;
      position:absolute;
      right:0;
      top:0;
      width:100%
    }
  }
  .file\:border-0::-webkit-file-upload-button {
    border-width:0
  }
  .file\:border-0::file-selector-button {
    border-width:0
  }
  .file\:bg-transparent::-webkit-file-upload-button {
    background-color:initial
  }
  .file\:bg-transparent::file-selector-button {
    background-color:initial
  }
  .file\:text-sm::-webkit-file-upload-button {
    font-size:.875rem;
    line-height:1.25rem
  }
  .file\:text-sm::file-selector-button {
    font-size:.875rem;
    line-height:1.25rem
  }
  .file\:font-medium::-webkit-file-upload-button {
    font-weight:500
  }
  .file\:font-medium::file-selector-button {
    font-weight:500
  }
  .placeholder\:text-label-4::placeholder {
    color:#3c3c434d
  }
  .placeholder\:text-lc-text-tertiary::placeholder {
    color:#52525299
  }
  .placeholder\:text-sd-muted-foreground::placeholder {
    color:hsl(var(--sd-muted-foreground))
  }
  .placeholder\:text-text-quaternary::placeholder {
    color:var(--text-quaternary)
  }
  .placeholder\:text-text-secondary::placeholder {
    color:var(--text-secondary)
  }
  .placeholder\:text-text-tertiary::placeholder {
    color:var(--text-tertiary)
  }
  .before\:pointer-events-none:before {
    content:var(--tw-content);
    pointer-events:none
  }
  .before\:absolute:before {
    content:var(--tw-content);
    position:absolute
  }
  .before\:-left-\[14\.5px\]:before {
    content:var(--tw-content);
    left:-14.5px
  }
  .before\:-left-\[4px\]:before {
    content:var(--tw-content);
    left:-4px
  }
  .before\:-top-\[2px\]:before {
    content:var(--tw-content);
    top:-2px
  }
  .before\:left-1\/2:before {
    content:var(--tw-content);
    left:50%
  }
  .before\:left-\[8\.5px\]:before {
    content:var(--tw-content);
    left:8.5px
  }
  .before\:top-0:before {
    content:var(--tw-content);
    top:0
  }
  .before\:top-1\/2:before {
    content:var(--tw-content);
    top:50%
  }
  .before\:top-\[20px\]:before {
    content:var(--tw-content);
    top:20px
  }
  .before\:-ml-0:before {
    content:var(--tw-content);
    margin-left:0
  }
  .before\:-ml-0\.5:before {
    content:var(--tw-content);
    margin-left:-.125rem
  }
  .before\:-ml-1:before {
    content:var(--tw-content);
    margin-left:-.25rem
  }
  .before\:-ml-\[1px\]:before {
    content:var(--tw-content);
    margin-left:-1px
  }
  .before\:-ml-\[3px\]:before {
    content:var(--tw-content);
    margin-left:-3px
  }
  .before\:-mt-0:before {
    content:var(--tw-content);
    margin-top:0
  }
  .before\:-mt-0\.5:before {
    content:var(--tw-content);
    margin-top:-.125rem
  }
  .before\:-mt-1:before {
    content:var(--tw-content);
    margin-top:-.25rem
  }
  .before\:-mt-\[1px\]:before {
    content:var(--tw-content);
    margin-top:-1px
  }
  .before\:-mt-\[3px\]:before {
    content:var(--tw-content);
    margin-top:-3px
  }
  .before\:block:before {
    content:var(--tw-content);
    display:block
  }
  .before\:h-3:before {
    content:var(--tw-content);
    height:.75rem
  }
  .before\:h-3\.5:before {
    content:var(--tw-content);
    height:.875rem
  }
  .before\:h-4:before {
    content:var(--tw-content);
    height:1rem
  }
  .before\:h-5:before {
    content:var(--tw-content);
    height:1.25rem
  }
  .before\:h-6:before {
    content:var(--tw-content);
    height:1.5rem
  }
  .before\:h-8:before {
    content:var(--tw-content);
    height:2rem
  }
  .before\:h-\[calc\(100\%-26px\)\]:before {
    content:var(--tw-content);
    height:calc(100% - 26px)
  }
  .before\:h-\[calc\(100\%_\+_2px\*2\)\]:before {
    content:var(--tw-content);
    height:calc(100% + 4px)
  }
  .before\:h-full:before {
    content:var(--tw-content);
    height:100%
  }
  .before\:w-3:before {
    content:var(--tw-content);
    width:.75rem
  }
  .before\:w-3\.5:before {
    content:var(--tw-content);
    width:.875rem
  }
  .before\:w-4:before {
    content:var(--tw-content);
    width:1rem
  }
  .before\:w-5:before {
    content:var(--tw-content);
    width:1.25rem
  }
  .before\:w-6:before {
    content:var(--tw-content);
    width:1.5rem
  }
  .before\:w-8:before {
    content:var(--tw-content);
    width:2rem
  }
  .before\:w-\[1px\]:before {
    content:var(--tw-content);
    width:1px
  }
  .before\:w-\[calc\(100\%_\+_4px\*2\)\]:before {
    content:var(--tw-content);
    width:calc(100% + 8px)
  }
  .before\:-translate-x-1\/2:before {
    --tw-translate-x:-50%
  }
  .before\:-translate-x-1\/2:before,
  .before\:-translate-y-1\/2:before {
    content:var(--tw-content);
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .before\:-translate-y-1\/2:before {
    --tw-translate-y:-50%
  }
  .before\:rounded-\[5px\]:before {
    border-radius:5px;
    content:var(--tw-content)
  }
  .before\:bg-\[\#1A90FF26\]:before {
    background-color:#1a90ff26;
    content:var(--tw-content)
  }
  .before\:bg-border-tertiary:before {
    background-color:var(--border-tertiary);
    content:var(--tw-content)
  }
  .before\:bg-fixed-black:before {
    background-color:var(--fixed-black);
    content:var(--tw-content)
  }
  .before\:bg-gray-3:before {
    --tw-bg-opacity:1;
    background-color:rgb(229 229 229/var(--tw-bg-opacity));
    content:var(--tw-content)
  }
  .before\:bg-layer-2:before {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity));
    content:var(--tw-content)
  }
  .before\:bg-message-danger:before {
    background-color:var(--message-danger);
    content:var(--tw-content)
  }
  .before\:px-0:before {
    content:var(--tw-content);
    padding-left:0;
    padding-right:0
  }
  .before\:px-0\.5:before {
    content:var(--tw-content);
    padding-left:.125rem;
    padding-right:.125rem
  }
  .before\:py-1:before {
    content:var(--tw-content);
    padding-bottom:.25rem;
    padding-top:.25rem
  }
  .before\:text-transparent:before {
    color:#0000;
    content:var(--tw-content)
  }
  .before\:transition-colors:before {
    content:var(--tw-content);
    transition-duration:.15s;
    transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .before\:duration-1000:before {
    content:var(--tw-content);
    transition-duration:1s
  }
  .before\:content-\[\"\"\]:before {
    --tw-content:"";
    content:var(--tw-content)
  }
  .before\:content-\[\'\"\"\'\]:before {
    --tw-content:'""';
    content:var(--tw-content)
  }
  .before\:content-\[\'\'\]:before {
    --tw-content:"";
    content:var(--tw-content)
  }
  .before\:content-\[\'Advertisement\'\]:before {
    --tw-content:"Advertisement";
    content:var(--tw-content)
  }
  .after\:absolute:after {
    content:var(--tw-content);
    position:absolute
  }
  .after\:-bottom-2:after {
    bottom:-.5rem;
    content:var(--tw-content)
  }
  .after\:left-0:after {
    content:var(--tw-content);
    left:0
  }
  .after\:hidden:after {
    content:var(--tw-content);
    display:none
  }
  .after\:h-2:after {
    content:var(--tw-content);
    height:.5rem
  }
  .after\:w-full:after {
    content:var(--tw-content);
    width:100%
  }
  .after\:bg-layer-2:after {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity));
    content:var(--tw-content)
  }
  .first\:ml-0:first-child {
    margin-left:0
  }
  .first\:ml-5:first-child {
    margin-left:1.25rem
  }
  .first\:mt-0:first-child {
    margin-top:0
  }
  .first\:pl-0:first-child {
    padding-left:0
  }
  .last\:mb-0:last-child {
    margin-bottom:0
  }
  .last\:ml-0:last-child {
    margin-left:0
  }
  .last\:mr-0:last-child {
    margin-right:0
  }
  .last\:mr-5:last-child {
    margin-right:1.25rem
  }
  .last\:mt-\[18px\]:last-child {
    margin-top:18px
  }
  .last\:mt-\[32px\]:last-child {
    margin-top:32px
  }
  .last\:mt-\[40px\]:last-child {
    margin-top:40px
  }
  .last\:mt-\[48px\]:last-child {
    margin-top:48px
  }
  .last\:hidden:last-child {
    display:none
  }
  .last\:rounded-b-\[13px\]:last-child {
    border-bottom-left-radius:13px;
    border-bottom-right-radius:13px
  }
  .last\:border-0:last-child {
    border-width:0
  }
  .last\:border-b-0:last-child {
    border-bottom-width:0
  }
  .last\:border-r-0:last-child {
    border-right-width:0
  }
  .last\:border-none:last-child {
    border-style:none
  }
  .last\:pr-0:last-child {
    padding-right:0
  }
  .odd\:bg-layer-1:nth-child(odd),
  .odd\:bg-overlay-3:nth-child(odd) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .even\:mr-0:nth-child(2n) {
    margin-right:0
  }
  .even\:bg-fill-quaternary:nth-child(2n) {
    background-color:var(--fill-quaternary)
  }
  .even\:bg-overlay-1:nth-child(2n) {
    --tw-bg-opacity:1;
    background-color:rgb(247 248 250/var(--tw-bg-opacity))
  }
  .last-of-type\:mb-0:last-of-type {
    margin-bottom:0
  }
  .last-of-type\:border-none:last-of-type {
    border-style:none
  }
  .placeholder-shown\:text-gray-2:placeholder-shown {
    --tw-text-opacity:1;
    color:rgb(240 240 240/var(--tw-text-opacity))
  }
  .empty\:mt-0:empty {
    margin-top:0
  }
  .focus-within\:relative:focus-within {
    position:relative
  }
  .focus-within\:z-overlay:focus-within {
    z-index:20
  }
  .hover\:-translate-y-0:hover {
    --tw-translate-y:-0px
  }
  .hover\:-translate-y-0:hover,
  .hover\:-translate-y-0\.5:hover {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .hover\:-translate-y-0\.5:hover {
    --tw-translate-y:-0.125rem
  }
  .hover\:-translate-y-2:hover {
    --tw-translate-y:-0.5rem
  }
  .hover\:-translate-y-2:hover,
  .hover\:-translate-y-\[5px\]:hover {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .hover\:-translate-y-\[5px\]:hover {
    --tw-translate-y:-5px
  }
  .hover\:cursor-col-resize:hover {
    cursor:col-resize
  }
  .hover\:cursor-pointer:hover {
    cursor:pointer
  }
  .hover\:cursor-row-resize:hover {
    cursor:row-resize
  }
  .hover\:rounded-full:hover {
    border-radius:9999px
  }
  .hover\:border-blue-10:hover {
    border-color:var(--blue-10)
  }
  .hover\:border-blue-100:hover {
    border-color:var(--blue-100)
  }
  .hover\:border-blue-20:hover {
    border-color:var(--blue-20)
  }
  .hover\:border-blue-40:hover {
    border-color:var(--blue-40)
  }
  .hover\:border-blue-60:hover {
    border-color:var(--blue-60)
  }
  .hover\:border-blue-80:hover {
    border-color:var(--blue-80)
  }
  .hover\:border-border-primary:hover {
    border-color:var(--border-primary)
  }
  .hover\:border-border-quaternary:hover {
    border-color:var(--border-quaternary)
  }
  .hover\:border-border-secondary:hover {
    border-color:var(--border-secondary)
  }
  .hover\:border-border-tertiary:hover {
    border-color:var(--border-tertiary)
  }
  .hover\:border-brand-gray:hover {
    border-color:var(--brand-gray)
  }
  .hover\:border-brand-logo:hover {
    border-color:var(--brand-logo)
  }
  .hover\:border-brand-orange:hover {
    border-color:var(--brand-orange)
  }
  .hover\:border-current:hover {
    border-color:currentColor
  }
  .hover\:border-dark-label-1:hover {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .hover\:border-difficulty-easy:hover {
    border-color:var(--difficulty-easy)
  }
  .hover\:border-difficulty-hard:hover {
    border-color:var(--difficulty-hard)
  }
  .hover\:border-difficulty-medium:hover {
    border-color:var(--difficulty-medium)
  }
  .hover\:border-divider-1:hover {
    border-color:#00000024
  }
  .hover\:border-fill-primary:hover {
    border-color:var(--fill-primary)
  }
  .hover\:border-fill-pure:hover {
    border-color:var(--fill-pure)
  }
  .hover\:border-fill-quaternary:hover {
    border-color:var(--fill-quaternary)
  }
  .hover\:border-fill-secondary:hover {
    border-color:var(--fill-secondary)
  }
  .hover\:border-fill-tertiary:hover {
    border-color:var(--fill-tertiary)
  }
  .hover\:border-fixed-black:hover {
    border-color:var(--fixed-black)
  }
  .hover\:border-fixed-white:hover {
    border-color:var(--fixed-white)
  }
  .hover\:border-gray-10:hover {
    border-color:var(--gray-10)
  }
  .hover\:border-gray-100:hover {
    border-color:var(--gray-100)
  }
  .hover\:border-gray-20:hover {
    border-color:var(--gray-20)
  }
  .hover\:border-gray-40:hover {
    border-color:var(--gray-40)
  }
  .hover\:border-gray-60:hover {
    border-color:var(--gray-60)
  }
  .hover\:border-gray-80:hover {
    border-color:var(--gray-80)
  }
  .hover\:border-green-10:hover {
    border-color:var(--green-10)
  }
  .hover\:border-green-100:hover {
    border-color:var(--green-100)
  }
  .hover\:border-green-20:hover {
    border-color:var(--green-20)
  }
  .hover\:border-green-40:hover {
    border-color:var(--green-40)
  }
  .hover\:border-green-60:hover {
    border-color:var(--green-60)
  }
  .hover\:border-green-80:hover {
    border-color:var(--green-80)
  }
  .hover\:border-layer-01:hover {
    border-color:var(--layer-01)
  }
  .hover\:border-layer-02:hover {
    border-color:var(--layer-02)
  }
  .hover\:border-layer-03:hover {
    border-color:var(--layer-03)
  }
  .hover\:border-layer-bg-gray:hover {
    border-color:var(--layer-bg-gray)
  }
  .hover\:border-layer-bg-pure:hover {
    border-color:var(--layer-bg-pure)
  }
  .hover\:border-magenta-10:hover {
    border-color:var(--magenta-10)
  }
  .hover\:border-magenta-100:hover {
    border-color:var(--magenta-100)
  }
  .hover\:border-magenta-20:hover {
    border-color:var(--magenta-20)
  }
  .hover\:border-magenta-40:hover {
    border-color:var(--magenta-40)
  }
  .hover\:border-magenta-60:hover {
    border-color:var(--magenta-60)
  }
  .hover\:border-magenta-80:hover {
    border-color:var(--magenta-80)
  }
  .hover\:border-message-danger:hover {
    border-color:var(--message-danger)
  }
  .hover\:border-message-primary:hover {
    border-color:var(--message-primary)
  }
  .hover\:border-message-success:hover {
    border-color:var(--message-success)
  }
  .hover\:border-message-warning:hover {
    border-color:var(--message-warning)
  }
  .hover\:border-opacity-yellow-60:hover {
    border-color:var(--opacity-yellow-60)
  }
  .hover\:border-purple-10:hover {
    border-color:var(--purple-10)
  }
  .hover\:border-purple-100:hover {
    border-color:var(--purple-100)
  }
  .hover\:border-purple-20:hover {
    border-color:var(--purple-20)
  }
  .hover\:border-purple-40:hover {
    border-color:var(--purple-40)
  }
  .hover\:border-purple-60:hover {
    border-color:var(--purple-60)
  }
  .hover\:border-purple-80:hover {
    border-color:var(--purple-80)
  }
  .hover\:border-red-10:hover {
    border-color:var(--red-10)
  }
  .hover\:border-red-100:hover {
    border-color:var(--red-100)
  }
  .hover\:border-red-20:hover {
    border-color:var(--red-20)
  }
  .hover\:border-red-40:hover {
    border-color:var(--red-40)
  }
  .hover\:border-red-60:hover {
    border-color:var(--red-60)
  }
  .hover\:border-red-80:hover {
    border-color:var(--red-80)
  }
  .hover\:border-special-kiwi:hover {
    border-color:var(--special-kiwi)
  }
  .hover\:border-special-lavender:hover {
    border-color:var(--special-lavender)
  }
  .hover\:border-special-rose:hover {
    border-color:var(--special-rose)
  }
  .hover\:border-special-skyler:hover {
    border-color:var(--special-skyler)
  }
  .hover\:border-special-sunny:hover {
    border-color:var(--special-sunny)
  }
  .hover\:border-teal-10:hover {
    border-color:var(--teal-10)
  }
  .hover\:border-teal-100:hover {
    border-color:var(--teal-100)
  }
  .hover\:border-teal-20:hover {
    border-color:var(--teal-20)
  }
  .hover\:border-teal-40:hover {
    border-color:var(--teal-40)
  }
  .hover\:border-teal-60:hover {
    border-color:var(--teal-60)
  }
  .hover\:border-teal-80:hover {
    border-color:var(--teal-80)
  }
  .hover\:border-text-primary:hover {
    border-color:var(--text-primary)
  }
  .hover\:border-text-quaternary:hover {
    border-color:var(--text-quaternary)
  }
  .hover\:border-text-reverse:hover {
    border-color:var(--text-reverse)
  }
  .hover\:border-text-secondary:hover {
    border-color:var(--text-secondary)
  }
  .hover\:border-text-tertiary:hover {
    border-color:var(--text-tertiary)
  }
  .hover\:border-transparent:hover {
    border-color:#0000
  }
  .hover\:border-yellow-10:hover {
    border-color:var(--yellow-10)
  }
  .hover\:border-yellow-100:hover {
    border-color:var(--yellow-100)
  }
  .hover\:border-yellow-20:hover {
    border-color:var(--yellow-20)
  }
  .hover\:border-yellow-40:hover {
    border-color:var(--yellow-40)
  }
  .hover\:border-yellow-60:hover {
    border-color:var(--yellow-60)
  }
  .hover\:border-yellow-80:hover {
    border-color:var(--yellow-80)
  }
  .hover\:\!bg-transparent:hover {
    background-color:initial!important
  }
  .hover\:bg-\[\#FFA116\]:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 161 22/var(--tw-bg-opacity))
  }
  .hover\:bg-\[\#FFB52A\]:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 181 42/var(--tw-bg-opacity))
  }
  .hover\:bg-\[\#ffa11633\]:hover {
    background-color:#ffa11633
  }
  .hover\:bg-\[rgba\(0 0 0 0\.03\)\]:hover {
    background-color:#00000008
  }
  .hover\:bg-\[rgba\(0 0 0 0\.7\)\]:hover {
    background-color:#000000b3
  }
  .hover\:bg-\[rgba\(255 255 255 0\.1\)\]:hover {
    background-color:#ffffff1a
  }
  .hover\:bg-blue-0:hover {
    background-color:#007aff14
  }
  .hover\:bg-blue-1:hover {
    background-color:#007aff26
  }
  .hover\:bg-blue-10:hover {
    background-color:var(--blue-10)
  }
  .hover\:bg-blue-100:hover {
    background-color:var(--blue-100)
  }
  .hover\:bg-blue-20:hover {
    background-color:var(--blue-20)
  }
  .hover\:bg-blue-3:hover {
    --tw-bg-opacity:1;
    background-color:rgb(0 104 217/var(--tw-bg-opacity))
  }
  .hover\:bg-blue-40:hover {
    background-color:var(--blue-40)
  }
  .hover\:bg-blue-60:hover {
    background-color:var(--blue-60)
  }
  .hover\:bg-blue-80:hover {
    background-color:var(--blue-80)
  }
  .hover\:bg-blue-s:hover {
    --tw-bg-opacity:1;
    background-color:rgb(0 122 255/var(--tw-bg-opacity))
  }
  .hover\:bg-border-primary:hover {
    background-color:var(--border-primary)
  }
  .hover\:bg-border-quaternary:hover {
    background-color:var(--border-quaternary)
  }
  .hover\:bg-border-secondary:hover {
    background-color:var(--border-secondary)
  }
  .hover\:bg-border-tertiary:hover {
    background-color:var(--border-tertiary)
  }
  .hover\:bg-brand-gray:hover {
    background-color:var(--brand-gray)
  }
  .hover\:bg-brand-logo:hover {
    background-color:var(--brand-logo)
  }
  .hover\:bg-brand-orange:hover {
    background-color:var(--brand-orange)
  }
  .hover\:bg-current:hover {
    background-color:currentColor
  }
  .hover\:bg-dark-blue-s:hover {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  .hover\:bg-dark-fill-2:hover {
    background-color:#ffffff24
  }
  .hover\:bg-dark-layer-1:hover {
    --tw-bg-opacity:1;
    background-color:rgb(40 40 40/var(--tw-bg-opacity))
  }
  .hover\:bg-difficulty-easy:hover {
    background-color:var(--difficulty-easy)
  }
  .hover\:bg-difficulty-hard:hover {
    background-color:var(--difficulty-hard)
  }
  .hover\:bg-difficulty-medium:hover {
    background-color:var(--difficulty-medium)
  }
  .hover\:bg-divider-2:hover {
    background-color:#0000001a
  }
  .hover\:bg-divider-3:hover {
    background-color:#0000000d
  }
  .hover\:bg-divider-4:hover {
    background-color:#00000008
  }
  .hover\:bg-fill-1:hover {
    background-color:#000a201f
  }
  .hover\:bg-fill-2:hover {
    background-color:#000a201a
  }
  .hover\:bg-fill-3:hover {
    background-color:#000a200d
  }
  .hover\:bg-fill-4:hover {
    background-color:#000a2008
  }
  .hover\:bg-fill-primary:hover {
    background-color:var(--fill-primary)
  }
  .hover\:bg-fill-pure:hover {
    background-color:var(--fill-pure)
  }
  .hover\:bg-fill-quaternary:hover {
    background-color:var(--fill-quaternary)
  }
  .hover\:bg-fill-secondary:hover {
    background-color:var(--fill-secondary)
  }
  .hover\:bg-fill-tertiary:hover {
    background-color:var(--fill-tertiary)
  }
  .hover\:bg-fixed-black:hover {
    background-color:var(--fixed-black)
  }
  .hover\:bg-fixed-white:hover {
    background-color:var(--fixed-white)
  }
  .hover\:bg-gray-1:hover {
    --tw-bg-opacity:1;
    background-color:rgb(247 247 247/var(--tw-bg-opacity))
  }
  .hover\:bg-gray-10:hover {
    background-color:var(--gray-10)
  }
  .hover\:bg-gray-100:hover {
    background-color:var(--gray-100)
  }
  .hover\:bg-gray-2:hover {
    --tw-bg-opacity:1;
    background-color:rgb(240 240 240/var(--tw-bg-opacity))
  }
  .hover\:bg-gray-20:hover {
    background-color:var(--gray-20)
  }
  .hover\:bg-gray-3:hover {
    --tw-bg-opacity:1;
    background-color:rgb(229 229 229/var(--tw-bg-opacity))
  }
  .hover\:bg-gray-40:hover {
    background-color:var(--gray-40)
  }
  .hover\:bg-gray-5:hover {
    --tw-bg-opacity:1;
    background-color:rgb(191 191 191/var(--tw-bg-opacity))
  }
  .hover\:bg-gray-6:hover {
    --tw-bg-opacity:1;
    background-color:rgb(140 140 140/var(--tw-bg-opacity))
  }
  .hover\:bg-gray-60:hover {
    background-color:var(--gray-60)
  }
  .hover\:bg-gray-80:hover {
    background-color:var(--gray-80)
  }
  .hover\:bg-green-10:hover {
    background-color:var(--green-10)
  }
  .hover\:bg-green-100:hover {
    background-color:var(--green-100)
  }
  .hover\:bg-green-20:hover {
    background-color:var(--green-20)
  }
  .hover\:bg-green-3:hover {
    --tw-bg-opacity:1;
    background-color:rgb(38 154 79/var(--tw-bg-opacity))
  }
  .hover\:bg-green-40:hover {
    background-color:var(--green-40)
  }
  .hover\:bg-green-60:hover {
    background-color:var(--green-60)
  }
  .hover\:bg-green-80:hover {
    background-color:var(--green-80)
  }
  .hover\:bg-green-s:hover {
    --tw-bg-opacity:1;
    background-color:rgb(45 181 93/var(--tw-bg-opacity))
  }
  .hover\:bg-label-1:hover {
    --tw-bg-opacity:1;
    background-color:rgb(38 38 38/var(--tw-bg-opacity))
  }
  .hover\:bg-layer-01:hover {
    background-color:var(--layer-01)
  }
  .hover\:bg-layer-02:hover {
    background-color:var(--layer-02)
  }
  .hover\:bg-layer-03:hover {
    background-color:var(--layer-03)
  }
  .hover\:bg-layer-1:hover,
  .hover\:bg-layer-2:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .hover\:bg-layer-bg-gray:hover {
    background-color:var(--layer-bg-gray)
  }
  .hover\:bg-layer-bg-pure:hover {
    background-color:var(--layer-bg-pure)
  }
  .hover\:bg-lc-background-index:hover {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-background-inverse:hover {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-button-danger-hover:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 105 122/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-button-primary-hover:hover {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-button-secondary-hover:hover {
    background-color:#00000008
  }
  .hover\:bg-lc-button-theme-hover:hover {
    --tw-bg-opacity:1;
    background-color:rgb(53 219 128/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-fill-01:hover {
    background-color:#0000000d
  }
  .hover\:bg-lc-fill-02:hover {
    background-color:#00000014
  }
  .hover\:bg-lc-fill-03:hover {
    background-color:#00000024
  }
  .hover\:bg-lc-fixed-black:hover {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-fixed-white:hover,
  .hover\:bg-lc-icon-inverse:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-icon-primary:hover {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-icon-secondary:hover {
    --tw-bg-opacity:1;
    background-color:rgb(148 148 148/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-icon-tertiary:hover {
    --tw-bg-opacity:1;
    background-color:rgb(183 183 183/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-layer-01:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-layer-02:hover {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-layer-03:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .hover\:bg-lc-layer-04:hover {
    background-color:#0009
  }
  .hover\:bg-lc-support-error-background:hover {
    background-color:#ff334b1f
  }
  .hover\:bg-lc-support-info-background:hover {
    background-color:#007aff1f
  }
  .hover\:bg-lc-support-success-background:hover {
    background-color:#15bd661f
  }
  .hover\:bg-lc-support-warning-background:hover {
    background-color:#ffb8001f
  }
  .hover\:bg-lc-system-primary-hover:hover {
    --tw-bg-opacity:1;
    background-color:rgb(46 154 255/var(--tw-bg-opacity))
  }
  .hover\:bg-magenta-10:hover {
    background-color:var(--magenta-10)
  }
  .hover\:bg-magenta-100:hover {
    background-color:var(--magenta-100)
  }
  .hover\:bg-magenta-20:hover {
    background-color:var(--magenta-20)
  }
  .hover\:bg-magenta-40:hover {
    background-color:var(--magenta-40)
  }
  .hover\:bg-magenta-60:hover {
    background-color:var(--magenta-60)
  }
  .hover\:bg-magenta-80:hover {
    background-color:var(--magenta-80)
  }
  .hover\:bg-message-danger:hover {
    background-color:var(--message-danger)
  }
  .hover\:bg-message-primary:hover {
    background-color:var(--message-primary)
  }
  .hover\:bg-message-success:hover {
    background-color:var(--message-success)
  }
  .hover\:bg-message-warning:hover {
    background-color:var(--message-warning)
  }
  .hover\:bg-opacity-yellow-60:hover {
    background-color:var(--opacity-yellow-60)
  }
  .hover\:bg-paper:hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .hover\:bg-purple-10:hover {
    background-color:var(--purple-10)
  }
  .hover\:bg-purple-100:hover {
    background-color:var(--purple-100)
  }
  .hover\:bg-purple-20:hover {
    background-color:var(--purple-20)
  }
  .hover\:bg-purple-40:hover {
    background-color:var(--purple-40)
  }
  .hover\:bg-purple-60:hover {
    background-color:var(--purple-60)
  }
  .hover\:bg-purple-80:hover {
    background-color:var(--purple-80)
  }
  .hover\:bg-red-10:hover {
    background-color:var(--red-10)
  }
  .hover\:bg-red-100:hover {
    background-color:var(--red-100)
  }
  .hover\:bg-red-20:hover {
    background-color:var(--red-20)
  }
  .hover\:bg-red-3:hover {
    --tw-bg-opacity:1;
    background-color:rgb(203 60 57/var(--tw-bg-opacity))
  }
  .hover\:bg-red-40:hover {
    background-color:var(--red-40)
  }
  .hover\:bg-red-60:hover {
    background-color:var(--red-60)
  }
  .hover\:bg-red-80:hover {
    background-color:var(--red-80)
  }
  .hover\:bg-red-s:hover {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  .hover\:bg-sd-accent:hover {
    background-color:hsl(var(--sd-accent))
  }
  .hover\:bg-sd-brand-lc-orange\/80:hover {
    background-color:hsl(var(--sd-brand-lc-orange)/.8)
  }
  .hover\:bg-sd-danger\/80:hover {
    background-color:hsl(var(--sd-danger)/.8)
  }
  .hover\:bg-sd-info\/80:hover {
    background-color:hsl(var(--sd-info)/.8)
  }
  .hover\:bg-sd-muted:hover {
    background-color:hsl(var(--sd-muted))
  }
  .hover\:bg-sd-muted\/50:hover {
    background-color:hsl(var(--sd-muted)/.5)
  }
  .hover\:bg-sd-primary:hover {
    background-color:hsl(var(--sd-primary))
  }
  .hover\:bg-sd-primary\/80:hover {
    background-color:hsl(var(--sd-primary)/.8)
  }
  .hover\:bg-sd-primary\/90:hover {
    background-color:hsl(var(--sd-primary)/.9)
  }
  .hover\:bg-sd-secondary:hover {
    background-color:hsl(var(--sd-secondary))
  }
  .hover\:bg-sd-secondary\/80:hover {
    background-color:hsl(var(--sd-secondary)/.8)
  }
  .hover\:bg-sd-success\/80:hover {
    background-color:hsl(var(--sd-success)/.8)
  }
  .hover\:bg-sd-warning\/80:hover {
    background-color:hsl(var(--sd-warning)/.8)
  }
  .hover\:bg-special-kiwi:hover {
    background-color:var(--special-kiwi)
  }
  .hover\:bg-special-lavender:hover {
    background-color:var(--special-lavender)
  }
  .hover\:bg-special-rose:hover {
    background-color:var(--special-rose)
  }
  .hover\:bg-special-skyler:hover {
    background-color:var(--special-skyler)
  }
  .hover\:bg-special-sunny:hover {
    background-color:var(--special-sunny)
  }
  .hover\:bg-teal-10:hover {
    background-color:var(--teal-10)
  }
  .hover\:bg-teal-100:hover {
    background-color:var(--teal-100)
  }
  .hover\:bg-teal-20:hover {
    background-color:var(--teal-20)
  }
  .hover\:bg-teal-40:hover {
    background-color:var(--teal-40)
  }
  .hover\:bg-teal-60:hover {
    background-color:var(--teal-60)
  }
  .hover\:bg-teal-80:hover {
    background-color:var(--teal-80)
  }
  .hover\:bg-text-primary:hover {
    background-color:var(--text-primary)
  }
  .hover\:bg-text-quaternary:hover {
    background-color:var(--text-quaternary)
  }
  .hover\:bg-text-reverse:hover {
    background-color:var(--text-reverse)
  }
  .hover\:bg-text-secondary:hover {
    background-color:var(--text-secondary)
  }
  .hover\:bg-text-tertiary:hover {
    background-color:var(--text-tertiary)
  }
  .hover\:bg-transparent:hover {
    background-color:initial
  }
  .hover\:bg-yellow-0:hover {
    background-color:#ffb80026
  }
  .hover\:bg-yellow-10:hover {
    background-color:var(--yellow-10)
  }
  .hover\:bg-yellow-100:hover {
    background-color:var(--yellow-100)
  }
  .hover\:bg-yellow-20:hover {
    background-color:var(--yellow-20)
  }
  .hover\:bg-yellow-40:hover {
    background-color:var(--yellow-40)
  }
  .hover\:bg-yellow-60:hover {
    background-color:var(--yellow-60)
  }
  .hover\:bg-yellow-80:hover {
    background-color:var(--yellow-80)
  }
  .hover\:bg-opacity-12:hover {
    --tw-bg-opacity:0.12
  }
  .hover\:bg-opacity-20:hover {
    --tw-bg-opacity:0.2
  }
  .hover\:bg-opacity-40:hover {
    --tw-bg-opacity:0.4
  }
  .hover\:\!text-\[inherit\]:hover {
    color:inherit!important
  }
  .hover\:text-blue:hover {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .hover\:text-blue-10:hover {
    color:var(--blue-10)
  }
  .hover\:text-blue-100:hover {
    color:var(--blue-100)
  }
  .hover\:text-blue-20:hover {
    color:var(--blue-20)
  }
  .hover\:text-blue-3:hover {
    --tw-text-opacity:1;
    color:rgb(0 104 217/var(--tw-text-opacity))
  }
  .hover\:text-blue-40:hover {
    color:var(--blue-40)
  }
  .hover\:text-blue-60:hover {
    color:var(--blue-60)
  }
  .hover\:text-blue-80:hover {
    color:var(--blue-80)
  }
  .hover\:text-blue-s:hover {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .hover\:text-border-primary:hover {
    color:var(--border-primary)
  }
  .hover\:text-border-quaternary:hover {
    color:var(--border-quaternary)
  }
  .hover\:text-border-secondary:hover {
    color:var(--border-secondary)
  }
  .hover\:text-border-tertiary:hover {
    color:var(--border-tertiary)
  }
  .hover\:text-brand-gray:hover {
    color:var(--brand-gray)
  }
  .hover\:text-brand-logo:hover {
    color:var(--brand-logo)
  }
  .hover\:text-brand-orange:hover {
    color:var(--brand-orange)
  }
  .hover\:text-current:hover {
    color:currentColor
  }
  .hover\:text-dark-label-1:hover {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .hover\:text-dark-label-2:hover {
    color:#eff1f6bf
  }
  .hover\:text-dark-label-3:hover {
    color:#eff2f699
  }
  .hover\:text-difficulty-easy:hover {
    color:var(--difficulty-easy)
  }
  .hover\:text-difficulty-hard:hover {
    color:var(--difficulty-hard)
  }
  .hover\:text-difficulty-medium:hover {
    color:var(--difficulty-medium)
  }
  .hover\:text-fill-primary:hover {
    color:var(--fill-primary)
  }
  .hover\:text-fill-pure:hover {
    color:var(--fill-pure)
  }
  .hover\:text-fill-quaternary:hover {
    color:var(--fill-quaternary)
  }
  .hover\:text-fill-secondary:hover {
    color:var(--fill-secondary)
  }
  .hover\:text-fill-tertiary:hover {
    color:var(--fill-tertiary)
  }
  .hover\:text-fixed-black:hover {
    color:var(--fixed-black)
  }
  .hover\:text-fixed-white:hover {
    color:var(--fixed-white)
  }
  .hover\:text-gray-10:hover {
    color:var(--gray-10)
  }
  .hover\:text-gray-100:hover {
    color:var(--gray-100)
  }
  .hover\:text-gray-20:hover {
    color:var(--gray-20)
  }
  .hover\:text-gray-40:hover {
    color:var(--gray-40)
  }
  .hover\:text-gray-6:hover {
    --tw-text-opacity:1;
    color:rgb(140 140 140/var(--tw-text-opacity))
  }
  .hover\:text-gray-60:hover {
    color:var(--gray-60)
  }
  .hover\:text-gray-7:hover {
    --tw-text-opacity:1;
    color:rgb(89 89 89/var(--tw-text-opacity))
  }
  .hover\:text-gray-8:hover {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .hover\:text-gray-80:hover {
    color:var(--gray-80)
  }
  .hover\:text-green-10:hover {
    color:var(--green-10)
  }
  .hover\:text-green-100:hover {
    color:var(--green-100)
  }
  .hover\:text-green-20:hover {
    color:var(--green-20)
  }
  .hover\:text-green-40:hover {
    color:var(--green-40)
  }
  .hover\:text-green-60:hover {
    color:var(--green-60)
  }
  .hover\:text-green-80:hover {
    color:var(--green-80)
  }
  .hover\:text-green-s:hover {
    --tw-text-opacity:1;
    color:rgb(45 181 93/var(--tw-text-opacity))
  }
  .hover\:text-label-1:hover {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .hover\:text-label-2:hover {
    color:#262626bf
  }
  .hover\:text-label-3:hover {
    color:#3c3c4399
  }
  .hover\:text-label-r:hover {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .hover\:text-layer-01:hover {
    color:var(--layer-01)
  }
  .hover\:text-layer-02:hover {
    color:var(--layer-02)
  }
  .hover\:text-layer-03:hover {
    color:var(--layer-03)
  }
  .hover\:text-layer-bg-gray:hover {
    color:var(--layer-bg-gray)
  }
  .hover\:text-layer-bg-pure:hover {
    color:var(--layer-bg-pure)
  }
  .hover\:text-lc-button-danger-hover:hover {
    --tw-text-opacity:1;
    color:rgb(255 105 122/var(--tw-text-opacity))
  }
  .hover\:text-lc-button-primary-hover:hover {
    --tw-text-opacity:1;
    color:rgb(42 42 42/var(--tw-text-opacity))
  }
  .hover\:text-lc-button-secondary-hover:hover {
    color:#00000008
  }
  .hover\:text-lc-button-theme-hover:hover {
    --tw-text-opacity:1;
    color:rgb(53 219 128/var(--tw-text-opacity))
  }
  .hover\:text-lc-fixed-black:hover {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  .hover\:text-lc-fixed-white:hover,
  .hover\:text-lc-icon-inverse:hover {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .hover\:text-lc-icon-primary:hover {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  .hover\:text-lc-icon-secondary:hover {
    --tw-text-opacity:1;
    color:rgb(148 148 148/var(--tw-text-opacity))
  }
  .hover\:text-lc-icon-tertiary:hover {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  .hover\:text-lc-support-error:hover {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .hover\:text-lc-support-info:hover {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .hover\:text-lc-support-success:hover {
    --tw-text-opacity:1;
    color:rgb(21 189 102/var(--tw-text-opacity))
  }
  .hover\:text-lc-support-warning:hover {
    --tw-text-opacity:1;
    color:rgb(255 184 0/var(--tw-text-opacity))
  }
  .hover\:text-lc-system-primary:hover {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .hover\:text-lc-system-primary-hover:hover {
    --tw-text-opacity:1;
    color:rgb(46 154 255/var(--tw-text-opacity))
  }
  .hover\:text-lc-text-error:hover {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .hover\:text-lc-text-inverse:hover {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .hover\:text-lc-text-primary:hover {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  .hover\:text-lc-text-quaternary:hover {
    color:#5252524d
  }
  .hover\:text-lc-text-secondary:hover {
    color:#1a1a1abf
  }
  .hover\:text-lc-text-tertiary:hover {
    color:#52525299
  }
  .hover\:text-magenta-10:hover {
    color:var(--magenta-10)
  }
  .hover\:text-magenta-100:hover {
    color:var(--magenta-100)
  }
  .hover\:text-magenta-20:hover {
    color:var(--magenta-20)
  }
  .hover\:text-magenta-40:hover {
    color:var(--magenta-40)
  }
  .hover\:text-magenta-60:hover {
    color:var(--magenta-60)
  }
  .hover\:text-magenta-80:hover {
    color:var(--magenta-80)
  }
  .hover\:text-message-danger:hover {
    color:var(--message-danger)
  }
  .hover\:text-message-primary:hover {
    color:var(--message-primary)
  }
  .hover\:text-message-success:hover {
    color:var(--message-success)
  }
  .hover\:text-message-warning:hover {
    color:var(--message-warning)
  }
  .hover\:text-opacity-yellow-60:hover {
    color:var(--opacity-yellow-60)
  }
  .hover\:text-purple-10:hover {
    color:var(--purple-10)
  }
  .hover\:text-purple-100:hover {
    color:var(--purple-100)
  }
  .hover\:text-purple-20:hover {
    color:var(--purple-20)
  }
  .hover\:text-purple-40:hover {
    color:var(--purple-40)
  }
  .hover\:text-purple-60:hover {
    color:var(--purple-60)
  }
  .hover\:text-purple-80:hover {
    color:var(--purple-80)
  }
  .hover\:text-red-10:hover {
    color:var(--red-10)
  }
  .hover\:text-red-100:hover {
    color:var(--red-100)
  }
  .hover\:text-red-20:hover {
    color:var(--red-20)
  }
  .hover\:text-red-4:hover {
    --tw-text-opacity:1;
    color:rgb(167 50 47/var(--tw-text-opacity))
  }
  .hover\:text-red-40:hover {
    color:var(--red-40)
  }
  .hover\:text-red-60:hover {
    color:var(--red-60)
  }
  .hover\:text-red-80:hover {
    color:var(--red-80)
  }
  .hover\:text-red-s:hover {
    --tw-text-opacity:1;
    color:rgb(239 71 67/var(--tw-text-opacity))
  }
  .hover\:text-sd-accent-foreground:hover {
    color:hsl(var(--sd-accent-foreground))
  }
  .hover\:text-sd-blue-500:hover {
    color:hsl(var(--sd-blue-500))
  }
  .hover\:text-sd-brand-lc-orange:hover {
    color:hsl(var(--sd-brand-lc-orange))
  }
  .hover\:text-sd-fixed-white:hover {
    color:hsl(var(--sd-fixed-white))
  }
  .hover\:text-sd-foreground:hover {
    color:hsl(var(--sd-foreground))
  }
  .hover\:text-sd-muted-foreground:hover {
    color:hsl(var(--sd-muted-foreground))
  }
  .hover\:text-sd-primary-foreground:hover {
    color:hsl(var(--sd-primary-foreground))
  }
  .hover\:text-special-kiwi:hover {
    color:var(--special-kiwi)
  }
  .hover\:text-special-lavender:hover {
    color:var(--special-lavender)
  }
  .hover\:text-special-rose:hover {
    color:var(--special-rose)
  }
  .hover\:text-special-skyler:hover {
    color:var(--special-skyler)
  }
  .hover\:text-special-sunny:hover {
    color:var(--special-sunny)
  }
  .hover\:text-teal-10:hover {
    color:var(--teal-10)
  }
  .hover\:text-teal-100:hover {
    color:var(--teal-100)
  }
  .hover\:text-teal-20:hover {
    color:var(--teal-20)
  }
  .hover\:text-teal-40:hover {
    color:var(--teal-40)
  }
  .hover\:text-teal-60:hover {
    color:var(--teal-60)
  }
  .hover\:text-teal-80:hover {
    color:var(--teal-80)
  }
  .hover\:text-text-primary:hover {
    color:var(--text-primary)
  }
  .hover\:text-text-quaternary:hover {
    color:var(--text-quaternary)
  }
  .hover\:text-text-reverse:hover {
    color:var(--text-reverse)
  }
  .hover\:text-text-secondary:hover {
    color:var(--text-secondary)
  }
  .hover\:text-text-tertiary:hover {
    color:var(--text-tertiary)
  }
  .hover\:text-transparent:hover {
    color:#0000
  }
  .hover\:text-white:hover {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .hover\:text-yellow:hover {
    --tw-text-opacity:1;
    color:rgb(255 184 0/var(--tw-text-opacity))
  }
  .hover\:text-yellow-10:hover {
    color:var(--yellow-10)
  }
  .hover\:text-yellow-100:hover {
    color:var(--yellow-100)
  }
  .hover\:text-yellow-20:hover {
    color:var(--yellow-20)
  }
  .hover\:text-yellow-40:hover {
    color:var(--yellow-40)
  }
  .hover\:text-yellow-60:hover {
    color:var(--yellow-60)
  }
  .hover\:text-yellow-80:hover {
    color:var(--yellow-80)
  }
  .hover\:underline:hover {
    text-decoration-line:underline
  }
  .hover\:no-underline:hover {
    text-decoration-line:none
  }
  .hover\:opacity-100:hover {
    opacity:1
  }
  .hover\:opacity-70:hover {
    opacity:.7
  }
  .hover\:opacity-80:hover {
    opacity:.8
  }
  .hover\:shadow-\[0px_2px_4px_rgba\(0 0 0 0\.02\) 0px_4px_8px_rgba\(0 0 0 0\.02\) 0px_6px_12px_rgba\(0 0 0 0\.02\)\]:hover {
    --tw-shadow:0px 2px 4px #00000005,0px 4px 8px #00000005,0px 6px 12px #00000005;
    --tw-shadow-colored:0px 2px 4px var(--tw-shadow-color),0px 4px 8px var(--tw-shadow-color),0px 6px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .hover\:shadow-\[0px_4px_16px_rgba\(0 0 0 0\.04\) 0px_8px_32px_rgba\(0 0 0 0\.04\) 0px_12px_48px_rgba\(0 0 0 0\.04\)\]:hover,
  .hover\:shadow-down-02:hover {
    --tw-shadow:0px 4px 16px #0000000a,0px 8px 32px #0000000a,0px 12px 48px #0000000a;
    --tw-shadow-colored:0px 4px 16px var(--tw-shadow-color),0px 8px 32px var(--tw-shadow-color),0px 12px 48px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .hover\:shadow-level3:hover {
    --tw-shadow:0px 1px 3px #0000000a,0px 6px 16px #0000001f;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 6px 16px var(--tw-shadow-color)
  }
  .hover\:shadow-level3:hover,
  .hover\:shadow-level4:hover {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .hover\:shadow-level4:hover {
    --tw-shadow:0px 1px 3px #0000000a,0px 10px 28px -4px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 10px 28px -4px var(--tw-shadow-color)
  }
  .hover\:after\:inline-block:hover:after {
    content:var(--tw-content);
    display:inline-block
  }
  .focus\:cursor-pointer:focus {
    cursor:pointer
  }
  .focus\:border-blue-60:focus {
    border-color:var(--blue-60)
  }
  .focus\:border-blue-s:focus {
    --tw-border-opacity:1;
    border-color:rgb(0 122 255/var(--tw-border-opacity))
  }
  .focus\:border-green-s:focus {
    --tw-border-opacity:1;
    border-color:rgb(45 181 93/var(--tw-border-opacity))
  }
  .focus\:border-transparent:focus {
    border-color:#0000
  }
  .focus\:bg-blue-s:focus {
    --tw-bg-opacity:1;
    background-color:rgb(0 122 255/var(--tw-bg-opacity))
  }
  .focus\:bg-fill-2:focus {
    background-color:#000a201a
  }
  .focus\:bg-fill-3:focus {
    background-color:#000a200d
  }
  .focus\:bg-fill-4:focus {
    background-color:#000a2008
  }
  .focus\:bg-paper:focus {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .focus\:bg-sd-accent:focus {
    background-color:hsl(var(--sd-accent))
  }
  .focus\:bg-sd-primary:focus {
    background-color:hsl(var(--sd-primary))
  }
  .focus\:bg-transparent:focus {
    background-color:initial
  }
  .focus\:bg-white:focus {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .focus\:text-blue-s:focus {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .focus\:text-sd-accent-foreground:focus {
    color:hsl(var(--sd-accent-foreground))
  }
  .focus\:text-sd-primary-foreground:focus {
    color:hsl(var(--sd-primary-foreground))
  }
  .focus\:shadow-blue:focus {
    --tw-shadow:0px 0px 0px 1px #007aff,0px 0px 0px 1px #0a84ff;
    --tw-shadow-colored:0px 0px 0px 1px var(--tw-shadow-color),0px 0px 0px 1px var(--tw-shadow-color)
  }
  .focus\:shadow-blue:focus,
  .focus\:shadow-form:focus {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .focus\:shadow-form:focus {
    --tw-shadow:0px 0px 0px 2px #2db55d4d;
    --tw-shadow-colored:0px 0px 0px 2px var(--tw-shadow-color)
  }
  .focus\:shadow-md:focus {
    --tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;
    --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)
  }
  .focus\:shadow-md:focus,
  .focus\:shadow-none:focus {
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .focus\:shadow-none:focus {
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000
  }
  .focus\:shadow-blue:focus {
    --tw-shadow-color:#007aff;
    --tw-shadow:var(--tw-shadow-colored)
  }
  .focus\:outline-none:focus {
    outline:2px solid #0000;
    outline-offset:2px
  }
  .focus\:ring-1:focus {
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)
  }
  .focus\:ring-1:focus,
  .focus\:ring-2:focus {
    box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
  }
  .focus\:ring-2:focus {
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)
  }
  .focus\:ring-sd-ring:focus {
    --tw-ring-color:hsl(var(--sd-ring))
  }
  .focus\:ring-offset-2:focus {
    --tw-ring-offset-width:2px
  }
  .focus-visible\:outline-none:focus-visible {
    outline:2px solid #0000;
    outline-offset:2px
  }
  .focus-visible\:ring-1:focus-visible {
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
  }
  .focus-visible\:ring-2:focus-visible {
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
  }
  .focus-visible\:ring-sd-ring:focus-visible {
    --tw-ring-color:hsl(var(--sd-ring))
  }
  .focus-visible\:ring-offset-2:focus-visible {
    --tw-ring-offset-width:2px
  }
  .focus-visible\:ring-offset-sd-background:focus-visible {
    --tw-ring-offset-color:hsl(var(--sd-background))
  }
  .active\:bg-\[\#FFB52A\]:active {
    --tw-bg-opacity:1;
    background-color:rgb(255 181 42/var(--tw-bg-opacity))
  }
  .active\:bg-\[rgba\(0 0 0 0\.08\)\]:active {
    background-color:#00000014
  }
  .active\:bg-fill-3:active {
    background-color:#000a200d
  }
  .active\:bg-fill-secondary:active {
    background-color:var(--fill-secondary)
  }
  .active\:bg-transparent:active {
    background-color:initial
  }
  .active\:bg-yellow-40:active {
    background-color:var(--yellow-40)
  }
  .active\:text-blue-s:active {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .active\:text-label-3:active {
    color:#3c3c4399
  }
  .active\:text-text-reverse:active {
    color:var(--text-reverse)
  }
  .enabled\:hover\:border-blue-80:hover:enabled {
    border-color:var(--blue-80)
  }
  .enabled\:hover\:border-gray-80:hover:enabled {
    border-color:var(--gray-80)
  }
  .enabled\:hover\:border-green-80:hover:enabled {
    border-color:var(--green-80)
  }
  .enabled\:hover\:border-red-80:hover:enabled {
    border-color:var(--red-80)
  }
  .enabled\:hover\:border-yellow-80:hover:enabled {
    border-color:var(--yellow-80)
  }
  .enabled\:hover\:bg-blue-80:hover:enabled {
    background-color:var(--blue-80)
  }
  .enabled\:hover\:bg-fill-secondary:hover:enabled {
    background-color:var(--fill-secondary)
  }
  .enabled\:hover\:bg-gray-80:hover:enabled {
    background-color:var(--gray-80)
  }
  .enabled\:hover\:bg-green-80:hover:enabled {
    background-color:var(--green-80)
  }
  .enabled\:hover\:bg-red-80:hover:enabled {
    background-color:var(--red-80)
  }
  .enabled\:hover\:bg-transparent:hover:enabled {
    background-color:initial
  }
  .enabled\:hover\:bg-yellow-80:hover:enabled {
    background-color:var(--yellow-80)
  }
  .enabled\:hover\:text-blue-80:hover:enabled {
    color:var(--blue-80)
  }
  .enabled\:hover\:text-green-80:hover:enabled {
    color:var(--green-80)
  }
  .enabled\:hover\:text-red-80:hover:enabled {
    color:var(--red-80)
  }
  .enabled\:hover\:text-yellow-80:hover:enabled {
    color:var(--yellow-80)
  }
  .enabled\:active\:border-blue-100:active:enabled {
    border-color:var(--blue-100)
  }
  .enabled\:active\:border-gray-60:active:enabled {
    border-color:var(--gray-60)
  }
  .enabled\:active\:border-green-100:active:enabled {
    border-color:var(--green-100)
  }
  .enabled\:active\:border-red-100:active:enabled {
    border-color:var(--red-100)
  }
  .enabled\:active\:border-yellow-100:active:enabled {
    border-color:var(--yellow-100)
  }
  .enabled\:active\:bg-blue-100:active:enabled {
    background-color:var(--blue-100)
  }
  .enabled\:active\:bg-fill-primary:active:enabled {
    background-color:var(--fill-primary)
  }
  .enabled\:active\:bg-gray-60:active:enabled {
    background-color:var(--gray-60)
  }
  .enabled\:active\:bg-green-100:active:enabled {
    background-color:var(--green-100)
  }
  .enabled\:active\:bg-red-100:active:enabled {
    background-color:var(--red-100)
  }
  .enabled\:active\:bg-yellow-100:active:enabled {
    background-color:var(--yellow-100)
  }
  .enabled\:active\:text-blue-100:active:enabled {
    color:var(--blue-100)
  }
  .enabled\:active\:text-green-100:active:enabled {
    color:var(--green-100)
  }
  .enabled\:active\:text-red-100:active:enabled {
    color:var(--red-100)
  }
  .enabled\:active\:text-text-secondary:active:enabled {
    color:var(--text-secondary)
  }
  .enabled\:active\:text-yellow-100:active:enabled {
    color:var(--yellow-100)
  }
  .disabled\:pointer-events-none:disabled {
    pointer-events:none
  }
  .disabled\:cursor-not-allowed:disabled {
    cursor:not-allowed
  }
  .disabled\:opacity-100:disabled {
    opacity:1
  }
  .disabled\:opacity-40:disabled {
    opacity:.4
  }
  .disabled\:opacity-50:disabled {
    opacity:.5
  }
  .disabled\:opacity-60:disabled {
    opacity:.6
  }
  .group:hover .group-hover\:pointer-events-auto {
    pointer-events:auto
  }
  .group:hover .group-hover\:visible,
  .group\/nav-back:hover .group-hover\/nav-back\:visible {
    visibility:visible
  }
  .group\/nav-back:hover .group-hover\/nav-back\:invisible {
    visibility:hidden
  }
  .group:hover .group-hover\:block,
  .group\/nav-back:hover .group-hover\/nav-back\:block {
    display:block
  }
  .group:hover .group-hover\:inline-block {
    display:inline-block
  }
  .group:hover .group-hover\:flex {
    display:flex
  }
  .group:hover .group-hover\:hidden {
    display:none
  }
  .group\/filter-box:hover .group-hover\/filter-box\:scale-95 {
    --tw-scale-x:.95;
    --tw-scale-y:.95;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .group:hover .group-hover\:border-b-0 {
    border-bottom-width:0
  }
  .group:hover .group-hover\:border-blue-10 {
    border-color:var(--blue-10)
  }
  .group:hover .group-hover\:border-blue-100 {
    border-color:var(--blue-100)
  }
  .group:hover .group-hover\:border-blue-20 {
    border-color:var(--blue-20)
  }
  .group:hover .group-hover\:border-blue-40 {
    border-color:var(--blue-40)
  }
  .group:hover .group-hover\:border-blue-60 {
    border-color:var(--blue-60)
  }
  .group:hover .group-hover\:border-blue-80 {
    border-color:var(--blue-80)
  }
  .group:hover .group-hover\:border-border-primary {
    border-color:var(--border-primary)
  }
  .group:hover .group-hover\:border-border-quaternary {
    border-color:var(--border-quaternary)
  }
  .group:hover .group-hover\:border-border-secondary {
    border-color:var(--border-secondary)
  }
  .group:hover .group-hover\:border-border-tertiary {
    border-color:var(--border-tertiary)
  }
  .group:hover .group-hover\:border-brand-gray {
    border-color:var(--brand-gray)
  }
  .group:hover .group-hover\:border-brand-logo {
    border-color:var(--brand-logo)
  }
  .group:hover .group-hover\:border-brand-orange {
    border-color:var(--brand-orange)
  }
  .group:hover .group-hover\:border-current {
    border-color:currentColor
  }
  .group:hover .group-hover\:border-difficulty-easy {
    border-color:var(--difficulty-easy)
  }
  .group:hover .group-hover\:border-difficulty-hard {
    border-color:var(--difficulty-hard)
  }
  .group:hover .group-hover\:border-difficulty-medium {
    border-color:var(--difficulty-medium)
  }
  .group:hover .group-hover\:border-fill-primary {
    border-color:var(--fill-primary)
  }
  .group:hover .group-hover\:border-fill-pure {
    border-color:var(--fill-pure)
  }
  .group:hover .group-hover\:border-fill-quaternary {
    border-color:var(--fill-quaternary)
  }
  .group:hover .group-hover\:border-fill-secondary {
    border-color:var(--fill-secondary)
  }
  .group:hover .group-hover\:border-fill-tertiary {
    border-color:var(--fill-tertiary)
  }
  .group:hover .group-hover\:border-fixed-black {
    border-color:var(--fixed-black)
  }
  .group:hover .group-hover\:border-fixed-white {
    border-color:var(--fixed-white)
  }
  .group:hover .group-hover\:border-gray-10 {
    border-color:var(--gray-10)
  }
  .group:hover .group-hover\:border-gray-100 {
    border-color:var(--gray-100)
  }
  .group:hover .group-hover\:border-gray-2 {
    --tw-border-opacity:1;
    border-color:rgb(240 240 240/var(--tw-border-opacity))
  }
  .group:hover .group-hover\:border-gray-20 {
    border-color:var(--gray-20)
  }
  .group:hover .group-hover\:border-gray-40 {
    border-color:var(--gray-40)
  }
  .group:hover .group-hover\:border-gray-60 {
    border-color:var(--gray-60)
  }
  .group:hover .group-hover\:border-gray-80 {
    border-color:var(--gray-80)
  }
  .group:hover .group-hover\:border-green-10 {
    border-color:var(--green-10)
  }
  .group:hover .group-hover\:border-green-100 {
    border-color:var(--green-100)
  }
  .group:hover .group-hover\:border-green-20 {
    border-color:var(--green-20)
  }
  .group:hover .group-hover\:border-green-40 {
    border-color:var(--green-40)
  }
  .group:hover .group-hover\:border-green-60 {
    border-color:var(--green-60)
  }
  .group:hover .group-hover\:border-green-80 {
    border-color:var(--green-80)
  }
  .group:hover .group-hover\:border-layer-01 {
    border-color:var(--layer-01)
  }
  .group:hover .group-hover\:border-layer-02 {
    border-color:var(--layer-02)
  }
  .group:hover .group-hover\:border-layer-03 {
    border-color:var(--layer-03)
  }
  .group:hover .group-hover\:border-layer-bg-gray {
    border-color:var(--layer-bg-gray)
  }
  .group:hover .group-hover\:border-layer-bg-pure {
    border-color:var(--layer-bg-pure)
  }
  .group:hover .group-hover\:border-magenta-10 {
    border-color:var(--magenta-10)
  }
  .group:hover .group-hover\:border-magenta-100 {
    border-color:var(--magenta-100)
  }
  .group:hover .group-hover\:border-magenta-20 {
    border-color:var(--magenta-20)
  }
  .group:hover .group-hover\:border-magenta-40 {
    border-color:var(--magenta-40)
  }
  .group:hover .group-hover\:border-magenta-60 {
    border-color:var(--magenta-60)
  }
  .group:hover .group-hover\:border-magenta-80 {
    border-color:var(--magenta-80)
  }
  .group:hover .group-hover\:border-message-danger {
    border-color:var(--message-danger)
  }
  .group:hover .group-hover\:border-message-primary {
    border-color:var(--message-primary)
  }
  .group:hover .group-hover\:border-message-success {
    border-color:var(--message-success)
  }
  .group:hover .group-hover\:border-message-warning {
    border-color:var(--message-warning)
  }
  .group:hover .group-hover\:border-opacity-yellow-60 {
    border-color:var(--opacity-yellow-60)
  }
  .group:hover .group-hover\:border-purple-10 {
    border-color:var(--purple-10)
  }
  .group:hover .group-hover\:border-purple-100 {
    border-color:var(--purple-100)
  }
  .group:hover .group-hover\:border-purple-20 {
    border-color:var(--purple-20)
  }
  .group:hover .group-hover\:border-purple-40 {
    border-color:var(--purple-40)
  }
  .group:hover .group-hover\:border-purple-60 {
    border-color:var(--purple-60)
  }
  .group:hover .group-hover\:border-purple-80 {
    border-color:var(--purple-80)
  }
  .group:hover .group-hover\:border-red-10 {
    border-color:var(--red-10)
  }
  .group:hover .group-hover\:border-red-100 {
    border-color:var(--red-100)
  }
  .group:hover .group-hover\:border-red-20 {
    border-color:var(--red-20)
  }
  .group:hover .group-hover\:border-red-40 {
    border-color:var(--red-40)
  }
  .group:hover .group-hover\:border-red-60 {
    border-color:var(--red-60)
  }
  .group:hover .group-hover\:border-red-80 {
    border-color:var(--red-80)
  }
  .group:hover .group-hover\:border-special-kiwi {
    border-color:var(--special-kiwi)
  }
  .group:hover .group-hover\:border-special-lavender {
    border-color:var(--special-lavender)
  }
  .group:hover .group-hover\:border-special-rose {
    border-color:var(--special-rose)
  }
  .group:hover .group-hover\:border-special-skyler {
    border-color:var(--special-skyler)
  }
  .group:hover .group-hover\:border-special-sunny {
    border-color:var(--special-sunny)
  }
  .group:hover .group-hover\:border-teal-10 {
    border-color:var(--teal-10)
  }
  .group:hover .group-hover\:border-teal-100 {
    border-color:var(--teal-100)
  }
  .group:hover .group-hover\:border-teal-20 {
    border-color:var(--teal-20)
  }
  .group:hover .group-hover\:border-teal-40 {
    border-color:var(--teal-40)
  }
  .group:hover .group-hover\:border-teal-60 {
    border-color:var(--teal-60)
  }
  .group:hover .group-hover\:border-teal-80 {
    border-color:var(--teal-80)
  }
  .group:hover .group-hover\:border-text-primary {
    border-color:var(--text-primary)
  }
  .group:hover .group-hover\:border-text-quaternary {
    border-color:var(--text-quaternary)
  }
  .group:hover .group-hover\:border-text-reverse {
    border-color:var(--text-reverse)
  }
  .group:hover .group-hover\:border-text-secondary {
    border-color:var(--text-secondary)
  }
  .group:hover .group-hover\:border-text-tertiary {
    border-color:var(--text-tertiary)
  }
  .group:hover .group-hover\:border-transparent {
    border-color:#0000
  }
  .group:hover .group-hover\:border-yellow-10 {
    border-color:var(--yellow-10)
  }
  .group:hover .group-hover\:border-yellow-100 {
    border-color:var(--yellow-100)
  }
  .group:hover .group-hover\:border-yellow-20 {
    border-color:var(--yellow-20)
  }
  .group:hover .group-hover\:border-yellow-40 {
    border-color:var(--yellow-40)
  }
  .group:hover .group-hover\:border-yellow-60 {
    border-color:var(--yellow-60)
  }
  .group:hover .group-hover\:border-yellow-80 {
    border-color:var(--yellow-80)
  }
  .group\/ads:hover .group-hover\/ads\:bg-sd-muted {
    background-color:hsl(var(--sd-muted))
  }
  .group:hover .group-hover\:bg-blue-0 {
    background-color:#007aff14
  }
  .group:hover .group-hover\:bg-blue-10 {
    background-color:var(--blue-10)
  }
  .group:hover .group-hover\:bg-blue-100 {
    background-color:var(--blue-100)
  }
  .group:hover .group-hover\:bg-blue-20 {
    background-color:var(--blue-20)
  }
  .group:hover .group-hover\:bg-blue-40 {
    background-color:var(--blue-40)
  }
  .group:hover .group-hover\:bg-blue-60 {
    background-color:var(--blue-60)
  }
  .group:hover .group-hover\:bg-blue-80 {
    background-color:var(--blue-80)
  }
  .group:hover .group-hover\:bg-border-primary {
    background-color:var(--border-primary)
  }
  .group:hover .group-hover\:bg-border-quaternary {
    background-color:var(--border-quaternary)
  }
  .group:hover .group-hover\:bg-border-secondary {
    background-color:var(--border-secondary)
  }
  .group:hover .group-hover\:bg-border-tertiary {
    background-color:var(--border-tertiary)
  }
  .group:hover .group-hover\:bg-brand-gray {
    background-color:var(--brand-gray)
  }
  .group:hover .group-hover\:bg-brand-logo {
    background-color:var(--brand-logo)
  }
  .group:hover .group-hover\:bg-brand-orange {
    background-color:var(--brand-orange)
  }
  .group:hover .group-hover\:bg-current {
    background-color:currentColor
  }
  .group:hover .group-hover\:bg-dark-fill-2 {
    background-color:#ffffff24
  }
  .group:hover .group-hover\:bg-dark-fill-4 {
    background-color:#ffffff12
  }
  .group:hover .group-hover\:bg-difficulty-easy {
    background-color:var(--difficulty-easy)
  }
  .group:hover .group-hover\:bg-difficulty-hard {
    background-color:var(--difficulty-hard)
  }
  .group:hover .group-hover\:bg-difficulty-medium {
    background-color:var(--difficulty-medium)
  }
  .group:hover .group-hover\:bg-fill-2 {
    background-color:#000a201a
  }
  .group:hover .group-hover\:bg-fill-4 {
    background-color:#000a2008
  }
  .group:hover .group-hover\:bg-fill-primary {
    background-color:var(--fill-primary)
  }
  .group:hover .group-hover\:bg-fill-pure {
    background-color:var(--fill-pure)
  }
  .group:hover .group-hover\:bg-fill-quaternary {
    background-color:var(--fill-quaternary)
  }
  .group:hover .group-hover\:bg-fill-secondary {
    background-color:var(--fill-secondary)
  }
  .group:hover .group-hover\:bg-fill-tertiary {
    background-color:var(--fill-tertiary)
  }
  .group:hover .group-hover\:bg-fixed-black {
    background-color:var(--fixed-black)
  }
  .group:hover .group-hover\:bg-fixed-white {
    background-color:var(--fixed-white)
  }
  .group:hover .group-hover\:bg-gray-10 {
    background-color:var(--gray-10)
  }
  .group:hover .group-hover\:bg-gray-100 {
    background-color:var(--gray-100)
  }
  .group:hover .group-hover\:bg-gray-20 {
    background-color:var(--gray-20)
  }
  .group:hover .group-hover\:bg-gray-40 {
    background-color:var(--gray-40)
  }
  .group:hover .group-hover\:bg-gray-6 {
    --tw-bg-opacity:1;
    background-color:rgb(140 140 140/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-gray-60 {
    background-color:var(--gray-60)
  }
  .group:hover .group-hover\:bg-gray-80 {
    background-color:var(--gray-80)
  }
  .group:hover .group-hover\:bg-green-10 {
    background-color:var(--green-10)
  }
  .group:hover .group-hover\:bg-green-100 {
    background-color:var(--green-100)
  }
  .group:hover .group-hover\:bg-green-20 {
    background-color:var(--green-20)
  }
  .group:hover .group-hover\:bg-green-40 {
    background-color:var(--green-40)
  }
  .group:hover .group-hover\:bg-green-60 {
    background-color:var(--green-60)
  }
  .group:hover .group-hover\:bg-green-80 {
    background-color:var(--green-80)
  }
  .group:hover .group-hover\:bg-layer-01 {
    background-color:var(--layer-01)
  }
  .group:hover .group-hover\:bg-layer-02 {
    background-color:var(--layer-02)
  }
  .group:hover .group-hover\:bg-layer-03 {
    background-color:var(--layer-03)
  }
  .group:hover .group-hover\:bg-layer-2 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-layer-bg-gray {
    background-color:var(--layer-bg-gray)
  }
  .group:hover .group-hover\:bg-layer-bg-pure {
    background-color:var(--layer-bg-pure)
  }
  .group:hover .group-hover\:bg-lc-background-index {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-background-inverse {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-button-danger-hover {
    --tw-bg-opacity:1;
    background-color:rgb(255 105 122/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-button-primary-hover {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-button-secondary-hover {
    background-color:#00000008
  }
  .group:hover .group-hover\:bg-lc-button-theme-hover {
    --tw-bg-opacity:1;
    background-color:rgb(53 219 128/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-fill-01 {
    background-color:#0000000d
  }
  .group:hover .group-hover\:bg-lc-fill-02 {
    background-color:#00000014
  }
  .group:hover .group-hover\:bg-lc-fill-03 {
    background-color:#00000024
  }
  .group:hover .group-hover\:bg-lc-fixed-black {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-fixed-white,
  .group:hover .group-hover\:bg-lc-icon-inverse {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-icon-primary {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-icon-secondary {
    --tw-bg-opacity:1;
    background-color:rgb(148 148 148/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-icon-tertiary {
    --tw-bg-opacity:1;
    background-color:rgb(183 183 183/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-layer-01 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-layer-02 {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-layer-03 {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-lc-layer-04 {
    background-color:#0009
  }
  .group:hover .group-hover\:bg-lc-support-error-background {
    background-color:#ff334b1f
  }
  .group:hover .group-hover\:bg-lc-support-info-background {
    background-color:#007aff1f
  }
  .group:hover .group-hover\:bg-lc-support-success-background {
    background-color:#15bd661f
  }
  .group:hover .group-hover\:bg-lc-support-warning-background {
    background-color:#ffb8001f
  }
  .group:hover .group-hover\:bg-lc-system-primary-hover {
    --tw-bg-opacity:1;
    background-color:rgb(46 154 255/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-magenta-10 {
    background-color:var(--magenta-10)
  }
  .group:hover .group-hover\:bg-magenta-100 {
    background-color:var(--magenta-100)
  }
  .group:hover .group-hover\:bg-magenta-20 {
    background-color:var(--magenta-20)
  }
  .group:hover .group-hover\:bg-magenta-40 {
    background-color:var(--magenta-40)
  }
  .group:hover .group-hover\:bg-magenta-60 {
    background-color:var(--magenta-60)
  }
  .group:hover .group-hover\:bg-magenta-80 {
    background-color:var(--magenta-80)
  }
  .group:hover .group-hover\:bg-message-danger {
    background-color:var(--message-danger)
  }
  .group:hover .group-hover\:bg-message-primary {
    background-color:var(--message-primary)
  }
  .group:hover .group-hover\:bg-message-success {
    background-color:var(--message-success)
  }
  .group:hover .group-hover\:bg-message-warning {
    background-color:var(--message-warning)
  }
  .group:hover .group-hover\:bg-opacity-yellow-60 {
    background-color:var(--opacity-yellow-60)
  }
  .group:hover .group-hover\:bg-purple-10 {
    background-color:var(--purple-10)
  }
  .group:hover .group-hover\:bg-purple-100 {
    background-color:var(--purple-100)
  }
  .group:hover .group-hover\:bg-purple-20 {
    background-color:var(--purple-20)
  }
  .group:hover .group-hover\:bg-purple-40 {
    background-color:var(--purple-40)
  }
  .group:hover .group-hover\:bg-purple-60 {
    background-color:var(--purple-60)
  }
  .group:hover .group-hover\:bg-purple-80 {
    background-color:var(--purple-80)
  }
  .group:hover .group-hover\:bg-red-10 {
    background-color:var(--red-10)
  }
  .group:hover .group-hover\:bg-red-100 {
    background-color:var(--red-100)
  }
  .group:hover .group-hover\:bg-red-20 {
    background-color:var(--red-20)
  }
  .group:hover .group-hover\:bg-red-40 {
    background-color:var(--red-40)
  }
  .group:hover .group-hover\:bg-red-60 {
    background-color:var(--red-60)
  }
  .group:hover .group-hover\:bg-red-80 {
    background-color:var(--red-80)
  }
  .group:hover .group-hover\:bg-red-s {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  .group:hover .group-hover\:bg-special-kiwi {
    background-color:var(--special-kiwi)
  }
  .group:hover .group-hover\:bg-special-lavender {
    background-color:var(--special-lavender)
  }
  .group:hover .group-hover\:bg-special-rose {
    background-color:var(--special-rose)
  }
  .group:hover .group-hover\:bg-special-skyler {
    background-color:var(--special-skyler)
  }
  .group:hover .group-hover\:bg-special-sunny {
    background-color:var(--special-sunny)
  }
  .group:hover .group-hover\:bg-teal-10 {
    background-color:var(--teal-10)
  }
  .group:hover .group-hover\:bg-teal-100 {
    background-color:var(--teal-100)
  }
  .group:hover .group-hover\:bg-teal-20 {
    background-color:var(--teal-20)
  }
  .group:hover .group-hover\:bg-teal-40 {
    background-color:var(--teal-40)
  }
  .group:hover .group-hover\:bg-teal-60 {
    background-color:var(--teal-60)
  }
  .group:hover .group-hover\:bg-teal-80 {
    background-color:var(--teal-80)
  }
  .group:hover .group-hover\:bg-text-primary {
    background-color:var(--text-primary)
  }
  .group:hover .group-hover\:bg-text-quaternary {
    background-color:var(--text-quaternary)
  }
  .group:hover .group-hover\:bg-text-reverse {
    background-color:var(--text-reverse)
  }
  .group:hover .group-hover\:bg-text-secondary {
    background-color:var(--text-secondary)
  }
  .group:hover .group-hover\:bg-text-tertiary {
    background-color:var(--text-tertiary)
  }
  .group:hover .group-hover\:bg-transparent {
    background-color:initial
  }
  .group:hover .group-hover\:bg-yellow-10 {
    background-color:var(--yellow-10)
  }
  .group:hover .group-hover\:bg-yellow-100 {
    background-color:var(--yellow-100)
  }
  .group:hover .group-hover\:bg-yellow-20 {
    background-color:var(--yellow-20)
  }
  .group:hover .group-hover\:bg-yellow-40 {
    background-color:var(--yellow-40)
  }
  .group:hover .group-hover\:bg-yellow-60 {
    background-color:var(--yellow-60)
  }
  .group:hover .group-hover\:bg-yellow-80 {
    background-color:var(--yellow-80)
  }
  .group:hover .group-hover\:fill-dark-gray-7 {
    fill:#b3b3b3
  }
  .group:hover .group-hover\:fill-gray-7 {
    fill:#595959
  }
  .group:hover .group-hover\:pb-\[15px\] {
    padding-bottom:15px
  }
  .group:hover .group-hover\:text-blue {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-blue-10 {
    color:var(--blue-10)
  }
  .group:hover .group-hover\:text-blue-100 {
    color:var(--blue-100)
  }
  .group:hover .group-hover\:text-blue-20 {
    color:var(--blue-20)
  }
  .group:hover .group-hover\:text-blue-40 {
    color:var(--blue-40)
  }
  .group:hover .group-hover\:text-blue-60 {
    color:var(--blue-60)
  }
  .group:hover .group-hover\:text-blue-80 {
    color:var(--blue-80)
  }
  .group:hover .group-hover\:text-blue-s {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-border-primary {
    color:var(--border-primary)
  }
  .group:hover .group-hover\:text-border-quaternary {
    color:var(--border-quaternary)
  }
  .group:hover .group-hover\:text-border-secondary {
    color:var(--border-secondary)
  }
  .group:hover .group-hover\:text-border-tertiary {
    color:var(--border-tertiary)
  }
  .group:hover .group-hover\:text-brand-gray {
    color:var(--brand-gray)
  }
  .group:hover .group-hover\:text-brand-logo {
    color:var(--brand-logo)
  }
  .group:hover .group-hover\:text-brand-orange {
    color:var(--brand-orange)
  }
  .group:hover .group-hover\:text-current {
    color:currentColor
  }
  .group:hover .group-hover\:text-dark-gray-6 {
    --tw-text-opacity:1;
    color:rgb(138 138 138/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-dark-gray-7 {
    --tw-text-opacity:1;
    color:rgb(179 179 179/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-dark-label-1 {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-difficulty-easy {
    color:var(--difficulty-easy)
  }
  .group:hover .group-hover\:text-difficulty-hard {
    color:var(--difficulty-hard)
  }
  .group:hover .group-hover\:text-difficulty-medium {
    color:var(--difficulty-medium)
  }
  .group:hover .group-hover\:text-fill-primary {
    color:var(--fill-primary)
  }
  .group:hover .group-hover\:text-fill-pure {
    color:var(--fill-pure)
  }
  .group:hover .group-hover\:text-fill-quaternary {
    color:var(--fill-quaternary)
  }
  .group:hover .group-hover\:text-fill-secondary {
    color:var(--fill-secondary)
  }
  .group:hover .group-hover\:text-fill-tertiary {
    color:var(--fill-tertiary)
  }
  .group:hover .group-hover\:text-fixed-black {
    color:var(--fixed-black)
  }
  .group:hover .group-hover\:text-fixed-white {
    color:var(--fixed-white)
  }
  .group:hover .group-hover\:text-gray-10 {
    color:var(--gray-10)
  }
  .group:hover .group-hover\:text-gray-100 {
    color:var(--gray-100)
  }
  .group:hover .group-hover\:text-gray-20 {
    color:var(--gray-20)
  }
  .group:hover .group-hover\:text-gray-40 {
    color:var(--gray-40)
  }
  .group:hover .group-hover\:text-gray-5 {
    --tw-text-opacity:1;
    color:rgb(191 191 191/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-gray-6 {
    --tw-text-opacity:1;
    color:rgb(140 140 140/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-gray-60 {
    color:var(--gray-60)
  }
  .group:hover .group-hover\:text-gray-7 {
    --tw-text-opacity:1;
    color:rgb(89 89 89/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-gray-8 {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-gray-80 {
    color:var(--gray-80)
  }
  .group:hover .group-hover\:text-green-10 {
    color:var(--green-10)
  }
  .group:hover .group-hover\:text-green-100 {
    color:var(--green-100)
  }
  .group:hover .group-hover\:text-green-20 {
    color:var(--green-20)
  }
  .group:hover .group-hover\:text-green-40 {
    color:var(--green-40)
  }
  .group:hover .group-hover\:text-green-60 {
    color:var(--green-60)
  }
  .group:hover .group-hover\:text-green-80 {
    color:var(--green-80)
  }
  .group:hover .group-hover\:text-green-s {
    --tw-text-opacity:1;
    color:rgb(45 181 93/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-label-1 {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-label-2 {
    color:#262626bf
  }
  .group:hover .group-hover\:text-layer-01 {
    color:var(--layer-01)
  }
  .group:hover .group-hover\:text-layer-02 {
    color:var(--layer-02)
  }
  .group:hover .group-hover\:text-layer-03 {
    color:var(--layer-03)
  }
  .group:hover .group-hover\:text-layer-bg-gray {
    color:var(--layer-bg-gray)
  }
  .group:hover .group-hover\:text-layer-bg-pure {
    color:var(--layer-bg-pure)
  }
  .group:hover .group-hover\:text-lc-button-danger-hover {
    --tw-text-opacity:1;
    color:rgb(255 105 122/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-button-primary-hover {
    --tw-text-opacity:1;
    color:rgb(42 42 42/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-button-secondary-hover {
    color:#00000008
  }
  .group:hover .group-hover\:text-lc-button-theme-hover {
    --tw-text-opacity:1;
    color:rgb(53 219 128/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-fixed-black {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-fixed-white,
  .group:hover .group-hover\:text-lc-icon-inverse {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-icon-primary {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-icon-secondary {
    --tw-text-opacity:1;
    color:rgb(148 148 148/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-icon-tertiary {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-support-error {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-support-info {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-support-success {
    --tw-text-opacity:1;
    color:rgb(21 189 102/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-support-warning {
    --tw-text-opacity:1;
    color:rgb(255 184 0/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-system-primary {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-system-primary-hover {
    --tw-text-opacity:1;
    color:rgb(46 154 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-text-error {
    --tw-text-opacity:1;
    color:rgb(255 51 75/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-text-inverse {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-text-primary {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-lc-text-quaternary {
    color:#5252524d
  }
  .group:hover .group-hover\:text-lc-text-secondary {
    color:#1a1a1abf
  }
  .group:hover .group-hover\:text-lc-text-tertiary {
    color:#52525299
  }
  .group:hover .group-hover\:text-magenta-10 {
    color:var(--magenta-10)
  }
  .group:hover .group-hover\:text-magenta-100 {
    color:var(--magenta-100)
  }
  .group:hover .group-hover\:text-magenta-20 {
    color:var(--magenta-20)
  }
  .group:hover .group-hover\:text-magenta-40 {
    color:var(--magenta-40)
  }
  .group:hover .group-hover\:text-magenta-60 {
    color:var(--magenta-60)
  }
  .group:hover .group-hover\:text-magenta-80 {
    color:var(--magenta-80)
  }
  .group:hover .group-hover\:text-message-danger {
    color:var(--message-danger)
  }
  .group:hover .group-hover\:text-message-primary {
    color:var(--message-primary)
  }
  .group:hover .group-hover\:text-message-success {
    color:var(--message-success)
  }
  .group:hover .group-hover\:text-message-warning {
    color:var(--message-warning)
  }
  .group:hover .group-hover\:text-opacity-yellow-60 {
    color:var(--opacity-yellow-60)
  }
  .group:hover .group-hover\:text-purple-10 {
    color:var(--purple-10)
  }
  .group:hover .group-hover\:text-purple-100 {
    color:var(--purple-100)
  }
  .group:hover .group-hover\:text-purple-20 {
    color:var(--purple-20)
  }
  .group:hover .group-hover\:text-purple-40 {
    color:var(--purple-40)
  }
  .group:hover .group-hover\:text-purple-60 {
    color:var(--purple-60)
  }
  .group:hover .group-hover\:text-purple-80 {
    color:var(--purple-80)
  }
  .group:hover .group-hover\:text-red-10 {
    color:var(--red-10)
  }
  .group:hover .group-hover\:text-red-100 {
    color:var(--red-100)
  }
  .group:hover .group-hover\:text-red-20 {
    color:var(--red-20)
  }
  .group:hover .group-hover\:text-red-40 {
    color:var(--red-40)
  }
  .group:hover .group-hover\:text-red-60 {
    color:var(--red-60)
  }
  .group:hover .group-hover\:text-red-80 {
    color:var(--red-80)
  }
  .group:hover .group-hover\:text-special-kiwi {
    color:var(--special-kiwi)
  }
  .group:hover .group-hover\:text-special-lavender {
    color:var(--special-lavender)
  }
  .group:hover .group-hover\:text-special-rose {
    color:var(--special-rose)
  }
  .group:hover .group-hover\:text-special-skyler {
    color:var(--special-skyler)
  }
  .group:hover .group-hover\:text-special-sunny {
    color:var(--special-sunny)
  }
  .group:hover .group-hover\:text-teal-10 {
    color:var(--teal-10)
  }
  .group:hover .group-hover\:text-teal-100 {
    color:var(--teal-100)
  }
  .group:hover .group-hover\:text-teal-20 {
    color:var(--teal-20)
  }
  .group:hover .group-hover\:text-teal-40 {
    color:var(--teal-40)
  }
  .group:hover .group-hover\:text-teal-60 {
    color:var(--teal-60)
  }
  .group:hover .group-hover\:text-teal-80 {
    color:var(--teal-80)
  }
  .group:hover .group-hover\:text-text-primary {
    color:var(--text-primary)
  }
  .group:hover .group-hover\:text-text-quaternary {
    color:var(--text-quaternary)
  }
  .group:hover .group-hover\:text-text-reverse {
    color:var(--text-reverse)
  }
  .group:hover .group-hover\:text-text-secondary {
    color:var(--text-secondary)
  }
  .group:hover .group-hover\:text-text-tertiary {
    color:var(--text-tertiary)
  }
  .group:hover .group-hover\:text-transparent {
    color:#0000
  }
  .group:hover .group-hover\:text-white {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .group:hover .group-hover\:text-yellow-10 {
    color:var(--yellow-10)
  }
  .group:hover .group-hover\:text-yellow-100 {
    color:var(--yellow-100)
  }
  .group:hover .group-hover\:text-yellow-20 {
    color:var(--yellow-20)
  }
  .group:hover .group-hover\:text-yellow-40 {
    color:var(--yellow-40)
  }
  .group:hover .group-hover\:text-yellow-60 {
    color:var(--yellow-60)
  }
  .group:hover .group-hover\:text-yellow-80 {
    color:var(--yellow-80)
  }
  .group\/ads:hover .group-hover\/ads\:opacity-100 {
    opacity:1
  }
  .group\/btn:hover .group-hover\/btn\:opacity-0 {
    opacity:0
  }
  .group\/btn:hover .group-hover\/btn\:opacity-100,
  .group\/filter-box:hover .group-hover\/filter-box\:opacity-100 {
    opacity:1
  }
  .group:hover .group-hover\:opacity-0 {
    opacity:0
  }
  .group:hover .group-hover\:opacity-100 {
    opacity:1
  }
  .group:hover .group-hover\:opacity-60 {
    opacity:.6
  }
  .group\/filter-box:hover .group-hover\/filter-box\:transition-transform {
    transition-duration:.15s;
    transition-property:transform;
    transition-timing-function:cubic-bezier(.4,0,.2,1)
  }
  .group\/filter-box:hover .group-hover\/filter-box\:delay-300 {
    transition-delay:.3s
  }
  .group:hover .group-hover\:delay-1000 {
    transition-delay:1s
  }
  .group\/btn:hover .group-hover\/btn\:duration-600 {
    transition-duration:.6s
  }
  .group\/filter-box:hover .group-hover\/filter-box\:duration-300 {
    transition-duration:.3s
  }
  .group\/btn:hover .group-hover\/btn\:ease-\[cubic-bezier\(\.85 0 \.15 1\)\] {
    transition-timing-function:cubic-bezier(.85,0,.15,1)
  }
  .group\/filter-box:hover .group-hover\/filter-box\:ease-\[cubic-bezier\(0\.33 1 0\.68 1\)\] {
    transition-timing-function:cubic-bezier(.33,1,.68,1)
  }
  .group\/ads:hover .group-hover\/ads\:before\:text-sd-muted-foreground\/50:before {
    color:hsl(var(--sd-muted-foreground)/.5);
    content:var(--tw-content)
  }
  .peer:disabled~.peer-disabled\:cursor-not-allowed {
    cursor:not-allowed
  }
  .peer:disabled~.peer-disabled\:opacity-70 {
    opacity:.7
  }
  .aria-disabled\:pointer-events-none[aria-disabled=true] {
    pointer-events:none
  }
  .aria-disabled\:cursor-default[aria-disabled=true] {
    cursor:default
  }
  .aria-disabled\:opacity-50[aria-disabled=true] {
    opacity:.5
  }
  .aria-selected\:bg-sd-accent[aria-selected=true] {
    background-color:hsl(var(--sd-accent))
  }
  .aria-selected\:bg-transparent[aria-selected=true] {
    background-color:initial
  }
  .aria-selected\:text-sd-accent-foreground[aria-selected=true] {
    color:hsl(var(--sd-accent-foreground))
  }
  .aria-selected\:opacity-100[aria-selected=true] {
    opacity:1
  }
  .data-\[disabled\]\:pointer-events-none[data-disabled] {
    pointer-events:none
  }
  .data-\[side\=bottom\]\:translate-y-1[data-side=bottom] {
    --tw-translate-y:0.25rem
  }
  .data-\[side\=bottom\]\:translate-y-1[data-side=bottom],
  .data-\[side\=left\]\:-translate-x-1[data-side=left] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .data-\[side\=left\]\:-translate-x-1[data-side=left] {
    --tw-translate-x:-0.25rem
  }
  .data-\[side\=right\]\:translate-x-1[data-side=right] {
    --tw-translate-x:0.25rem
  }
  .data-\[side\=right\]\:translate-x-1[data-side=right],
  .data-\[side\=top\]\:-translate-y-1[data-side=top] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .data-\[side\=top\]\:-translate-y-1[data-side=top] {
    --tw-translate-y:-0.25rem
  }
  .data-\[state\=checked\]\:translate-x-4[data-state=checked] {
    --tw-translate-x:1rem
  }
  .data-\[state\=checked\]\:translate-x-4[data-state=checked],
  .data-\[state\=unchecked\]\:translate-x-0[data-state=unchecked] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .data-\[state\=unchecked\]\:translate-x-0[data-state=unchecked] {
    --tw-translate-x:0px
  }
  .data-\[swipe\=cancel\]\:translate-y-0[data-swipe=cancel] {
    --tw-translate-y:0px
  }
  .data-\[swipe\=cancel\]\:translate-y-0[data-swipe=cancel],
  .data-\[swipe\=end\]\:translate-y-\[var\(--radix-toast-swipe-end-y\)\][data-swipe=end] {
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .data-\[swipe\=end\]\:translate-y-\[var\(--radix-toast-swipe-end-y\)\][data-swipe=end] {
    --tw-translate-y:var(--radix-toast-swipe-end-y)
  }
  .data-\[swipe\=move\]\:translate-y-\[var\(--radix-toast-swipe-move-y\)\][data-swipe=move] {
    --tw-translate-y:var(--radix-toast-swipe-move-y);
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  @keyframes accordion-up {
    0% {
      height:var(--radix-accordion-content-height)
    }
    to {
      height:0
    }
  }
  .data-\[state\=closed\]\:animate-accordion-up[data-state=closed] {
    animation:accordion-up .2s ease-out
  }
  @keyframes accordion-down {
    0% {
      height:0
    }
    to {
      height:var(--radix-accordion-content-height)
    }
  }
  .data-\[state\=open\]\:animate-accordion-down[data-state=open] {
    animation:accordion-down .2s ease-out
  }
  .data-\[disabled\]\:cursor-default[data-disabled] {
    cursor:default
  }
  .data-\[state\=active\]\:border-sd-primary[data-state=active] {
    border-color:hsl(var(--sd-primary))
  }
  .data-\[active\]\:bg-sd-accent\/50[data-active] {
    background-color:hsl(var(--sd-accent)/.5)
  }
  .data-\[state\=active\]\:bg-sd-background[data-state=active] {
    background-color:hsl(var(--sd-background))
  }
  .data-\[state\=checked\]\:bg-blue-s[data-state=checked] {
    --tw-bg-opacity:1;
    background-color:rgb(0 122 255/var(--tw-bg-opacity))
  }
  .data-\[state\=checked\]\:bg-sd-primary[data-state=checked] {
    background-color:hsl(var(--sd-primary))
  }
  .data-\[state\=on\]\:bg-sd-accent[data-state=on],
  .data-\[state\=open\]\:bg-sd-accent[data-state=open] {
    background-color:hsl(var(--sd-accent))
  }
  .data-\[state\=open\]\:bg-sd-accent\/50[data-state=open] {
    background-color:hsl(var(--sd-accent)/.5)
  }
  .data-\[state\=open\]\:bg-sd-secondary[data-state=open] {
    background-color:hsl(var(--sd-secondary))
  }
  .data-\[state\=selected\]\:bg-sd-muted[data-state=selected] {
    background-color:hsl(var(--sd-muted))
  }
  .data-\[state\=unchecked\]\:bg-sd-input[data-state=unchecked] {
    background-color:hsl(var(--sd-input))
  }
  .data-\[state\=active\]\:text-sd-foreground[data-state=active] {
    color:hsl(var(--sd-foreground))
  }
  .data-\[state\=checked\]\:text-sd-primary-foreground[data-state=checked] {
    color:hsl(var(--sd-primary-foreground))
  }
  .data-\[state\=on\]\:text-sd-accent-foreground[data-state=on],
  .data-\[state\=open\]\:text-sd-accent-foreground[data-state=open] {
    color:hsl(var(--sd-accent-foreground))
  }
  .data-\[state\=open\]\:text-sd-muted-foreground[data-state=open] {
    color:hsl(var(--sd-muted-foreground))
  }
  .data-\[disabled\]\:opacity-50[data-disabled] {
    opacity:.5
  }
  .data-\[state\=active\]\:shadow[data-state=active] {
    --tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;
    --tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  .data-\[swipe\=move\]\:transition-none[data-swipe=move] {
    transition-property:none
  }
  .data-\[state\=closed\]\:duration-300[data-state=closed] {
    transition-duration:.3s
  }
  .data-\[state\=open\]\:duration-500[data-state=open] {
    transition-duration:.5s
  }
  .data-\[motion\^\=from-\]\:animate-in[data-motion^=from-],
  .data-\[state\=open\]\:animate-in[data-state=open],
  .data-\[state\=visible\]\:animate-in[data-state=visible] {
    --tw-enter-opacity:initial;
    --tw-enter-scale:initial;
    --tw-enter-rotate:initial;
    --tw-enter-translate-x:initial;
    --tw-enter-translate-y:initial;
    animation-duration:.15s;
    animation-name:enter
  }
  .data-\[motion\^\=to-\]\:animate-out[data-motion^=to-],
  .data-\[state\=closed\]\:animate-out[data-state=closed],
  .data-\[state\=hidden\]\:animate-out[data-state=hidden],
  .data-\[swipe\=end\]\:animate-out[data-swipe=end] {
    --tw-exit-opacity:initial;
    --tw-exit-scale:initial;
    --tw-exit-rotate:initial;
    --tw-exit-translate-x:initial;
    --tw-exit-translate-y:initial;
    animation-duration:.15s;
    animation-name:exit
  }
  .data-\[state\=open\]\:animate-from-to[data-state=open] {
    --tw-from-opacity:initial;
    --tw-from-scale:initial;
    --tw-from-rotate:initial;
    --tw-from-translate-x:initial;
    --tw-from-translate-y:initial;
    --tw-to-opacity:initial;
    --tw-to-scale:initial;
    --tw-to-rotate:initial;
    --tw-to-translate-x:initial;
    --tw-to-translate-y:initial;
    animation-duration:.15s;
    animation-name:from-to
  }
  .data-\[motion\^\=from-\]\:fade-in[data-motion^=from-] {
    --tw-enter-opacity:0
  }
  .data-\[motion\^\=to-\]\:fade-out[data-motion^=to-],
  .data-\[state\=closed\]\:fade-out-0[data-state=closed] {
    --tw-exit-opacity:0
  }
  .data-\[state\=closed\]\:fade-out-80[data-state=closed] {
    --tw-exit-opacity:0.8
  }
  .data-\[state\=hidden\]\:fade-out[data-state=hidden] {
    --tw-exit-opacity:0
  }
  .data-\[state\=open\]\:fade-from-0[data-state=open] {
    --tw-from-opacity:0
  }
  .data-\[state\=open\]\:fade-in-0[data-state=open],
  .data-\[state\=visible\]\:fade-in[data-state=visible] {
    --tw-enter-opacity:0
  }
  .data-\[state\=closed\]\:zoom-out-95[data-state=closed] {
    --tw-exit-scale:.95
  }
  .data-\[state\=open\]\:zoom-from-95[data-state=open] {
    --tw-from-scale:.95
  }
  .data-\[state\=open\]\:zoom-in-90[data-state=open] {
    --tw-enter-scale:.9
  }
  .data-\[state\=open\]\:zoom-in-95[data-state=open] {
    --tw-enter-scale:.95
  }
  .data-\[state\=open\]\:zoom-to-100[data-state=open] {
    --tw-to-scale:1
  }
  .data-\[motion\=from-end\]\:slide-in-from-right-52[data-motion=from-end] {
    --tw-enter-translate-x:13rem
  }
  .data-\[motion\=from-start\]\:slide-in-from-left-52[data-motion=from-start] {
    --tw-enter-translate-x:-13rem
  }
  .data-\[motion\=to-end\]\:slide-out-to-right-52[data-motion=to-end] {
    --tw-exit-translate-x:13rem
  }
  .data-\[motion\=to-start\]\:slide-out-to-left-52[data-motion=to-start] {
    --tw-exit-translate-x:-13rem
  }
  .data-\[side\=bottom\]\:slide-in-from-top-1[data-side=bottom] {
    --tw-enter-translate-y:-0.25rem
  }
  .data-\[side\=bottom\]\:slide-in-from-top-2[data-side=bottom] {
    --tw-enter-translate-y:-0.5rem
  }
  .data-\[side\=left\]\:slide-in-from-right-1[data-side=left] {
    --tw-enter-translate-x:0.25rem
  }
  .data-\[side\=left\]\:slide-in-from-right-2[data-side=left] {
    --tw-enter-translate-x:0.5rem
  }
  .data-\[side\=right\]\:slide-in-from-left-1[data-side=right] {
    --tw-enter-translate-x:-0.25rem
  }
  .data-\[side\=right\]\:slide-in-from-left-2[data-side=right] {
    --tw-enter-translate-x:-0.5rem
  }
  .data-\[side\=top\]\:slide-in-from-bottom-1[data-side=top] {
    --tw-enter-translate-y:0.25rem
  }
  .data-\[side\=top\]\:slide-in-from-bottom-2[data-side=top] {
    --tw-enter-translate-y:0.5rem
  }
  .data-\[state\=closed\]\:slide-out-to-bottom[data-state=closed] {
    --tw-exit-translate-y:100%
  }
  .data-\[state\=closed\]\:slide-out-to-left[data-state=closed] {
    --tw-exit-translate-x:-100%
  }
  .data-\[state\=closed\]\:slide-out-to-left-1\/2[data-state=closed] {
    --tw-exit-translate-x:-50%
  }
  .data-\[state\=closed\]\:slide-out-to-right[data-state=closed] {
    --tw-exit-translate-x:100%
  }
  .data-\[state\=closed\]\:slide-out-to-top[data-state=closed] {
    --tw-exit-translate-y:-100%
  }
  .data-\[state\=closed\]\:slide-out-to-top-24[data-state=closed] {
    --tw-exit-translate-y:-6rem
  }
  .data-\[state\=closed\]\:slide-out-to-top-\[48\%\][data-state=closed] {
    --tw-exit-translate-y:-48%
  }
  .data-\[state\=open\]\:slide-from-left-1\/2[data-state=open] {
    --tw-from-translate-x:-50%
  }
  .data-\[state\=open\]\:slide-from-top-\[48\%\][data-state=open] {
    --tw-from-translate-y:-48%
  }
  .data-\[state\=open\]\:slide-in-from-bottom[data-state=open] {
    --tw-enter-translate-y:100%
  }
  .data-\[state\=open\]\:slide-in-from-left[data-state=open] {
    --tw-enter-translate-x:-100%
  }
  .data-\[state\=open\]\:slide-in-from-left-1\/2[data-state=open] {
    --tw-enter-translate-x:-50%
  }
  .data-\[state\=open\]\:slide-in-from-right[data-state=open] {
    --tw-enter-translate-x:100%
  }
  .data-\[state\=open\]\:slide-in-from-top[data-state=open] {
    --tw-enter-translate-y:-100%
  }
  .data-\[state\=open\]\:slide-in-from-top-24[data-state=open] {
    --tw-enter-translate-y:-6rem
  }
  .data-\[state\=open\]\:slide-in-from-top-\[48\%\][data-state=open] {
    --tw-enter-translate-y:-48%
  }
  .data-\[state\=open\]\:slide-to-left-1\/2[data-state=open] {
    --tw-to-translate-x:-50%
  }
  .data-\[state\=open\]\:slide-to-top-1\/2[data-state=open] {
    --tw-to-translate-y:-50%
  }
  .data-\[state\=closed\]\:animate-duration-300[data-state=closed] {
    animation-duration:.3s
  }
  .data-\[state\=open\]\:animate-duration-500[data-state=open] {
    animation-duration:.5s
  }
  .group[data-state=open] .group-data-\[state\=open\]\:rotate-180 {
    --tw-rotate:180deg;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  .peer[data-state=checked]~.peer-data-\[state\=checked\]\:border-sd-primary {
    border-color:hsl(var(--sd-primary))
  }
  :is(*)>.is\:rounded-\[8px\] {
    border-radius:8px
  }
  :is(*)>.is\:p-0 {
    padding:0
  }
  .children\:mb-5 * {
    margin-bottom:1.25rem
  }
  .children\:cursor-grab * {
    cursor:grab
  }
  .children\:\!overflow-visible * {
    overflow:visible!important
  }
  :is(.dark .dark\:invisible) {
    visibility:hidden
  }
  :is(.dark .dark\:mx-0) {
    margin-left:0;
    margin-right:0
  }
  :is(.dark .dark\:block) {
    display:block
  }
  :is(.dark .dark\:inline-block) {
    display:inline-block
  }
  :is(.dark .dark\:flex) {
    display:flex
  }
  :is(.dark .dark\:hidden) {
    display:none
  }
  :is(.dark .dark\:translate-x-\[-19\%\]) {
    --tw-translate-x:-19%;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  :is(.dark .dark\:translate-x-\[-25\%\]) {
    --tw-translate-x:-25%;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  :is(.dark .dark\:translate-y-\[-50\%\]) {
    --tw-translate-y:-50%;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  :is(.dark .dark\:rotate-45) {
    --tw-rotate:45deg;
    transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }
  :is(.dark .dark\:divide-gray-6)>:not([hidden])~:not([hidden]) {
    --tw-divide-opacity:1;
    border-color:rgb(140 140 140/var(--tw-divide-opacity))
  }
  :is(.dark .dark\:border-l-\[256px\]) {
    border-left-width:256px
  }
  :is(.dark .dark\:border-none) {
    border-style:none
  }
  :is(.dark .dark\:border-\[\#007AFF\]) {
    --tw-border-opacity:1;
    border-color:rgb(0 122 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-\[\#383838\]) {
    --tw-border-opacity:1;
    border-color:rgb(56 56 56/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-\[\#A8A8A8\]) {
    --tw-border-opacity:1;
    border-color:rgb(168 168 168/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-\[\#FFFFFF1A\]) {
    border-color:#ffffff1a
  }
  :is(.dark .dark\:border-blue-10) {
    border-color:var(--blue-10)
  }
  :is(.dark .dark\:border-blue-100) {
    border-color:var(--blue-100)
  }
  :is(.dark .dark\:border-blue-20) {
    border-color:var(--blue-20)
  }
  :is(.dark .dark\:border-blue-40) {
    border-color:var(--blue-40)
  }
  :is(.dark .dark\:border-blue-60) {
    border-color:var(--blue-60)
  }
  :is(.dark .dark\:border-blue-80) {
    border-color:var(--blue-80)
  }
  :is(.dark .dark\:border-border-primary) {
    border-color:var(--border-primary)
  }
  :is(.dark .dark\:border-border-quaternary) {
    border-color:var(--border-quaternary)
  }
  :is(.dark .dark\:border-border-secondary) {
    border-color:var(--border-secondary)
  }
  :is(.dark .dark\:border-border-tertiary) {
    border-color:var(--border-tertiary)
  }
  :is(.dark .dark\:border-brand-gray) {
    border-color:var(--brand-gray)
  }
  :is(.dark .dark\:border-brand-logo) {
    border-color:var(--brand-logo)
  }
  :is(.dark .dark\:border-brand-orange) {
    border-color:var(--brand-orange)
  }
  :is(.dark .dark\:border-current) {
    border-color:currentColor
  }
  :is(.dark .dark\:border-dark-blue-s) {
    --tw-border-opacity:1;
    border-color:rgb(10 132 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-divider-1) {
    border-color:#f7faff3d
  }
  :is(.dark .dark\:border-dark-divider-2) {
    border-color:#f7faff2e
  }
  :is(.dark .dark\:border-dark-divider-3) {
    border-color:#f7faff1f
  }
  :is(.dark .dark\:border-dark-divider-4) {
    border-color:#f7faff1a
  }
  :is(.dark .dark\:border-dark-divider-border-2) {
    --tw-border-opacity:1;
    border-color:rgb(61 61 61/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-fill-1) {
    border-color:#ffffff2b
  }
  :is(.dark .dark\:border-dark-fill-2) {
    border-color:#ffffff24
  }
  :is(.dark .dark\:border-dark-fill-3) {
    border-color:#ffffff1a
  }
  :is(.dark .dark\:border-dark-fill-4) {
    border-color:#ffffff12
  }
  :is(.dark .dark\:border-dark-gray-2) {
    --tw-border-opacity:1;
    border-color:rgb(60 60 60/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-gray-3) {
    --tw-border-opacity:1;
    border-color:rgb(66 66 66/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-gray-4) {
    --tw-border-opacity:1;
    border-color:rgb(74 74 74/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-gray-7) {
    --tw-border-opacity:1;
    border-color:rgb(179 179 179/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-green-2) {
    border-color:#2cbb5d80
  }
  :is(.dark .dark\:border-dark-green-s) {
    --tw-border-opacity:1;
    border-color:rgb(44 187 93/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-label-1) {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-label-2) {
    border-color:#eff1f6bf
  }
  :is(.dark .dark\:border-dark-label-3) {
    border-color:#eff2f699
  }
  :is(.dark .dark\:border-dark-label-4) {
    border-color:#ebebf54d
  }
  :is(.dark .dark\:border-dark-layer-1) {
    --tw-border-opacity:1;
    border-color:rgb(40 40 40/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-button-primary) {
    --tw-border-opacity:1;
    border-color:rgb(232 232 232/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-fill-01) {
    border-color:#ffffff14
  }
  :is(.dark .dark\:border-dark-lc-fill-02) {
    border-color:#ffffff1f
  }
  :is(.dark .dark\:border-dark-lc-fill-03) {
    border-color:#fff3
  }
  :is(.dark .dark\:border-dark-lc-fixed-black) {
    --tw-border-opacity:1;
    border-color:rgb(0 0 0/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-fixed-white) {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-layer-01) {
    --tw-border-opacity:1;
    border-color:rgb(42 42 42/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-layer-02) {
    --tw-border-opacity:1;
    border-color:rgb(82 82 82/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-layer-03) {
    --tw-border-opacity:1;
    border-color:rgb(119 119 119/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-layer-04) {
    border-color:#fff9
  }
  :is(.dark .dark\:border-dark-lc-support-error-background) {
    border-color:#ff59671f
  }
  :is(.dark .dark\:border-dark-lc-support-info-background) {
    border-color:#2696ff1f
  }
  :is(.dark .dark\:border-dark-lc-support-success-background) {
    border-color:#3fca7d1f
  }
  :is(.dark .dark\:border-dark-lc-support-warning-background) {
    border-color:#ffc9261f
  }
  :is(.dark .dark\:border-dark-lc-system-primary) {
    --tw-border-opacity:1;
    border-color:rgb(38 150 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-lc-system-primary-active) {
    --tw-border-opacity:1;
    border-color:rgb(31 138 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-overlay-1) {
    --tw-border-opacity:1;
    border-color:rgb(26 26 26/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-overlay-3) {
    --tw-border-opacity:1;
    border-color:rgb(48 48 48/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-dark-red-s) {
    --tw-border-opacity:1;
    border-color:rgb(239 71 67/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-difficulty-easy) {
    border-color:var(--difficulty-easy)
  }
  :is(.dark .dark\:border-difficulty-hard) {
    border-color:var(--difficulty-hard)
  }
  :is(.dark .dark\:border-difficulty-medium) {
    border-color:var(--difficulty-medium)
  }
  :is(.dark .dark\:border-divider-1) {
    border-color:#00000024
  }
  :is(.dark .dark\:border-fill-1) {
    border-color:#000a201f
  }
  :is(.dark .dark\:border-fill-primary) {
    border-color:var(--fill-primary)
  }
  :is(.dark .dark\:border-fill-pure) {
    border-color:var(--fill-pure)
  }
  :is(.dark .dark\:border-fill-quaternary) {
    border-color:var(--fill-quaternary)
  }
  :is(.dark .dark\:border-fill-secondary) {
    border-color:var(--fill-secondary)
  }
  :is(.dark .dark\:border-fill-tertiary) {
    border-color:var(--fill-tertiary)
  }
  :is(.dark .dark\:border-fixed-black) {
    border-color:var(--fixed-black)
  }
  :is(.dark .dark\:border-fixed-white) {
    border-color:var(--fixed-white)
  }
  :is(.dark .dark\:border-gray-10) {
    border-color:var(--gray-10)
  }
  :is(.dark .dark\:border-gray-100) {
    border-color:var(--gray-100)
  }
  :is(.dark .dark\:border-gray-20) {
    border-color:var(--gray-20)
  }
  :is(.dark .dark\:border-gray-40) {
    border-color:var(--gray-40)
  }
  :is(.dark .dark\:border-gray-60) {
    border-color:var(--gray-60)
  }
  :is(.dark .dark\:border-gray-7) {
    --tw-border-opacity:1;
    border-color:rgb(89 89 89/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-gray-8) {
    --tw-border-opacity:1;
    border-color:rgb(38 38 38/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-gray-80) {
    border-color:var(--gray-80)
  }
  :is(.dark .dark\:border-green-10) {
    border-color:var(--green-10)
  }
  :is(.dark .dark\:border-green-100) {
    border-color:var(--green-100)
  }
  :is(.dark .dark\:border-green-20) {
    border-color:var(--green-20)
  }
  :is(.dark .dark\:border-green-40) {
    border-color:var(--green-40)
  }
  :is(.dark .dark\:border-green-60) {
    border-color:var(--green-60)
  }
  :is(.dark .dark\:border-green-80) {
    border-color:var(--green-80)
  }
  :is(.dark .dark\:border-layer-01) {
    border-color:var(--layer-01)
  }
  :is(.dark .dark\:border-layer-02) {
    border-color:var(--layer-02)
  }
  :is(.dark .dark\:border-layer-03) {
    border-color:var(--layer-03)
  }
  :is(.dark .dark\:border-layer-bg-gray) {
    border-color:var(--layer-bg-gray)
  }
  :is(.dark .dark\:border-layer-bg-pure) {
    border-color:var(--layer-bg-pure)
  }
  :is(.dark .dark\:border-magenta-10) {
    border-color:var(--magenta-10)
  }
  :is(.dark .dark\:border-magenta-100) {
    border-color:var(--magenta-100)
  }
  :is(.dark .dark\:border-magenta-20) {
    border-color:var(--magenta-20)
  }
  :is(.dark .dark\:border-magenta-40) {
    border-color:var(--magenta-40)
  }
  :is(.dark .dark\:border-magenta-60) {
    border-color:var(--magenta-60)
  }
  :is(.dark .dark\:border-magenta-80) {
    border-color:var(--magenta-80)
  }
  :is(.dark .dark\:border-message-danger) {
    border-color:var(--message-danger)
  }
  :is(.dark .dark\:border-message-primary) {
    border-color:var(--message-primary)
  }
  :is(.dark .dark\:border-message-success) {
    border-color:var(--message-success)
  }
  :is(.dark .dark\:border-message-warning) {
    border-color:var(--message-warning)
  }
  :is(.dark .dark\:border-opacity-yellow-60) {
    border-color:var(--opacity-yellow-60)
  }
  :is(.dark .dark\:border-purple-10) {
    border-color:var(--purple-10)
  }
  :is(.dark .dark\:border-purple-100) {
    border-color:var(--purple-100)
  }
  :is(.dark .dark\:border-purple-20) {
    border-color:var(--purple-20)
  }
  :is(.dark .dark\:border-purple-40) {
    border-color:var(--purple-40)
  }
  :is(.dark .dark\:border-purple-60) {
    border-color:var(--purple-60)
  }
  :is(.dark .dark\:border-purple-80) {
    border-color:var(--purple-80)
  }
  :is(.dark .dark\:border-red-10) {
    border-color:var(--red-10)
  }
  :is(.dark .dark\:border-red-100) {
    border-color:var(--red-100)
  }
  :is(.dark .dark\:border-red-20) {
    border-color:var(--red-20)
  }
  :is(.dark .dark\:border-red-40) {
    border-color:var(--red-40)
  }
  :is(.dark .dark\:border-red-60) {
    border-color:var(--red-60)
  }
  :is(.dark .dark\:border-red-80) {
    border-color:var(--red-80)
  }
  :is(.dark .dark\:border-sd-destructive) {
    border-color:hsl(var(--sd-destructive))
  }
  :is(.dark .dark\:border-special-kiwi) {
    border-color:var(--special-kiwi)
  }
  :is(.dark .dark\:border-special-lavender) {
    border-color:var(--special-lavender)
  }
  :is(.dark .dark\:border-special-rose) {
    border-color:var(--special-rose)
  }
  :is(.dark .dark\:border-special-skyler) {
    border-color:var(--special-skyler)
  }
  :is(.dark .dark\:border-special-sunny) {
    border-color:var(--special-sunny)
  }
  :is(.dark .dark\:border-teal-10) {
    border-color:var(--teal-10)
  }
  :is(.dark .dark\:border-teal-100) {
    border-color:var(--teal-100)
  }
  :is(.dark .dark\:border-teal-20) {
    border-color:var(--teal-20)
  }
  :is(.dark .dark\:border-teal-40) {
    border-color:var(--teal-40)
  }
  :is(.dark .dark\:border-teal-60) {
    border-color:var(--teal-60)
  }
  :is(.dark .dark\:border-teal-80) {
    border-color:var(--teal-80)
  }
  :is(.dark .dark\:border-text-primary) {
    border-color:var(--text-primary)
  }
  :is(.dark .dark\:border-text-quaternary) {
    border-color:var(--text-quaternary)
  }
  :is(.dark .dark\:border-text-reverse) {
    border-color:var(--text-reverse)
  }
  :is(.dark .dark\:border-text-secondary) {
    border-color:var(--text-secondary)
  }
  :is(.dark .dark\:border-text-tertiary) {
    border-color:var(--text-tertiary)
  }
  :is(.dark .dark\:border-transparent) {
    border-color:#0000
  }
  :is(.dark .dark\:border-white) {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-yellow-10) {
    border-color:var(--yellow-10)
  }
  :is(.dark .dark\:border-yellow-100) {
    border-color:var(--yellow-100)
  }
  :is(.dark .dark\:border-yellow-20) {
    border-color:var(--yellow-20)
  }
  :is(.dark .dark\:border-yellow-40) {
    border-color:var(--yellow-40)
  }
  :is(.dark .dark\:border-yellow-60) {
    border-color:var(--yellow-60)
  }
  :is(.dark .dark\:border-yellow-80) {
    border-color:var(--yellow-80)
  }
  :is(.dark .dark\:border-r-\[\#2b2b2b\]) {
    --tw-border-opacity:1;
    border-right-color:rgb(43 43 43/var(--tw-border-opacity))
  }
  :is(.dark .dark\:border-r-gray-6) {
    --tw-border-opacity:1;
    border-right-color:rgb(140 140 140/var(--tw-border-opacity))
  }
  :is(.dark .dark\:bg-\[\#001d53\]) {
    --tw-bg-opacity:1;
    background-color:rgb(0 29 83/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#0A3027\]) {
    --tw-bg-opacity:1;
    background-color:rgb(10 48 39/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#0F0F0F\]) {
    --tw-bg-opacity:1;
    background-color:rgb(15 15 15/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#122F3D\]) {
    --tw-bg-opacity:1;
    background-color:rgb(18 47 61/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#1a1a1a\]) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#262626\]) {
    --tw-bg-opacity:1;
    background-color:rgb(38 38 38/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#2b2b2b\]) {
    --tw-bg-opacity:1;
    background-color:rgb(43 43 43/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#30150F\]) {
    --tw-bg-opacity:1;
    background-color:rgb(48 21 15/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#323232\]) {
    --tw-bg-opacity:1;
    background-color:rgb(50 50 50/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#333333\]) {
    --tw-bg-opacity:1;
    background-color:rgb(51 51 51/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#341B3A\]) {
    --tw-bg-opacity:1;
    background-color:rgb(52 27 58/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#36270B\]) {
    --tw-bg-opacity:1;
    background-color:rgb(54 39 11/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#363636\]) {
    --tw-bg-opacity:1;
    background-color:rgb(54 54 54/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#382111\]) {
    --tw-bg-opacity:1;
    background-color:rgb(56 33 17/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#3A3A3A\]) {
    --tw-bg-opacity:1;
    background-color:rgb(58 58 58/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#424242\]) {
    --tw-bg-opacity:1;
    background-color:rgb(66 66 66/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#E8E8E8\]) {
    --tw-bg-opacity:1;
    background-color:rgb(232 232 232/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#FFA116\]) {
    --tw-bg-opacity:1;
    background-color:rgb(255 161 22/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#FFECA4\]) {
    --tw-bg-opacity:1;
    background-color:rgb(255 236 164/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-\[\#FFFFFF1A\]) {
    background-color:#ffffff1a
  }
  :is(.dark .dark\:bg-\[\#ffffff14\]) {
    background-color:#ffffff14
  }
  :is(.dark .dark\:bg-\[rgba\(0 0 0 0\.7\)\]) {
    background-color:#000000b3
  }
  :is(.dark .dark\:bg-\[rgba\(248 97 92 0\.08\)\]) {
    background-color:#f8615c14
  }
  :is(.dark .dark\:bg-\[rgba\(255 255 255 0\.08\)\]) {
    background-color:#ffffff14
  }
  :is(.dark .dark\:bg-\[rgba\(255 255 255 0\.18\)\]) {
    background-color:#ffffff2e
  }
  :is(.dark .dark\:bg-black) {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-blue-10) {
    background-color:var(--blue-10)
  }
  :is(.dark .dark\:bg-blue-100) {
    background-color:var(--blue-100)
  }
  :is(.dark .dark\:bg-blue-2) {
    background-color:#007aff4d
  }
  :is(.dark .dark\:bg-blue-20) {
    background-color:var(--blue-20)
  }
  :is(.dark .dark\:bg-blue-40) {
    background-color:var(--blue-40)
  }
  :is(.dark .dark\:bg-blue-60) {
    background-color:var(--blue-60)
  }
  :is(.dark .dark\:bg-blue-80) {
    background-color:var(--blue-80)
  }
  :is(.dark .dark\:bg-border-primary) {
    background-color:var(--border-primary)
  }
  :is(.dark .dark\:bg-border-quaternary) {
    background-color:var(--border-quaternary)
  }
  :is(.dark .dark\:bg-border-secondary) {
    background-color:var(--border-secondary)
  }
  :is(.dark .dark\:bg-border-tertiary) {
    background-color:var(--border-tertiary)
  }
  :is(.dark .dark\:bg-brand-gray) {
    background-color:var(--brand-gray)
  }
  :is(.dark .dark\:bg-brand-logo) {
    background-color:var(--brand-logo)
  }
  :is(.dark .dark\:bg-brand-orange) {
    background-color:var(--brand-orange)
  }
  :is(.dark .dark\:bg-current) {
    background-color:currentColor
  }
  :is(.dark .dark\:bg-dark-blocker) {
    background-color:#282828e6
  }
  :is(.dark .dark\:bg-dark-blue) {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-blue-0) {
    background-color:#0a84ff2e
  }
  :is(.dark .dark\:bg-dark-blue-1) {
    background-color:#0a84ff40
  }
  :is(.dark .dark\:bg-dark-blue-3) {
    --tw-bg-opacity:1;
    background-color:rgb(47 150 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-blue-s) {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-divider-1) {
    background-color:#f7faff3d
  }
  :is(.dark .dark\:bg-dark-divider-2) {
    background-color:#f7faff2e
  }
  :is(.dark .dark\:bg-dark-divider-3) {
    background-color:#f7faff1f
  }
  :is(.dark .dark\:bg-dark-divider-4) {
    background-color:#f7faff1a
  }
  :is(.dark .dark\:bg-dark-fill-1) {
    background-color:#ffffff2b
  }
  :is(.dark .dark\:bg-dark-fill-2) {
    background-color:#ffffff24
  }
  :is(.dark .dark\:bg-dark-fill-3) {
    background-color:#ffffff1a
  }
  :is(.dark .dark\:bg-dark-fill-4) {
    background-color:#ffffff12
  }
  :is(.dark .dark\:bg-dark-gray-1) {
    --tw-bg-opacity:1;
    background-color:rgb(56 56 56/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-2) {
    --tw-bg-opacity:1;
    background-color:rgb(60 60 60/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-3) {
    --tw-bg-opacity:1;
    background-color:rgb(66 66 66/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-4) {
    --tw-bg-opacity:1;
    background-color:rgb(74 74 74/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-5) {
    --tw-bg-opacity:1;
    background-color:rgb(92 92 92/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-6) {
    --tw-bg-opacity:1;
    background-color:rgb(138 138 138/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-7) {
    --tw-bg-opacity:1;
    background-color:rgb(179 179 179/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-gray-8) {
    --tw-bg-opacity:1;
    background-color:rgb(219 219 219/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-green-0) {
    background-color:#2cbb5d1f
  }
  :is(.dark .dark\:bg-dark-green-1) {
    background-color:#2cbb5d40
  }
  :is(.dark .dark\:bg-dark-green-2) {
    background-color:#2cbb5d80
  }
  :is(.dark .dark\:bg-dark-green-s) {
    --tw-bg-opacity:1;
    background-color:rgb(44 187 93/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-label-1) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-label-2) {
    background-color:#eff1f6bf
  }
  :is(.dark .dark\:bg-dark-layer-1) {
    --tw-bg-opacity:1;
    background-color:rgb(26 27 39/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-layer-1\/80) {
    background-color:#282828cc
  }
  :is(.dark .dark\:bg-dark-layer-2) {
    --tw-bg-opacity:1;
    background-color:rgb(48 48 48/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-layer-3) {
    --tw-bg-opacity:1;
    background-color:rgb(54 54 54/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-layer-bg) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-background-index) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-background-inverse) {
    --tw-bg-opacity:1;
    background-color:rgb(223 223 223/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-button-danger) {
    --tw-bg-opacity:1;
    background-color:rgb(255 89 103/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-button-danger-active) {
    --tw-bg-opacity:1;
    background-color:rgb(255 71 93/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-button-primary) {
    --tw-bg-opacity:1;
    background-color:rgb(232 232 232/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-button-primary-active) {
    --tw-bg-opacity:1;
    background-color:rgb(223 223 223/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-button-secondary) {
    background-color:#ffffff14
  }
  :is(.dark .dark\:bg-dark-lc-button-secondary-active) {
    background-color:#ffffff08
  }
  :is(.dark .dark\:bg-dark-lc-button-theme) {
    --tw-bg-opacity:1;
    background-color:rgb(63 202 125/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-button-theme-active) {
    --tw-bg-opacity:1;
    background-color:rgb(46 189 115/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-fill-01) {
    background-color:#ffffff14
  }
  :is(.dark .dark\:bg-dark-lc-fill-02) {
    background-color:#ffffff1f
  }
  :is(.dark .dark\:bg-dark-lc-fill-03) {
    background-color:#fff3
  }
  :is(.dark .dark\:bg-dark-lc-fixed-black) {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-fixed-white) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-icon-inverse) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-icon-primary) {
    --tw-bg-opacity:1;
    background-color:rgb(183 183 183/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-icon-secondary) {
    --tw-bg-opacity:1;
    background-color:rgb(119 119 119/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-icon-tertiary) {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-layer-01) {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-layer-02) {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-layer-03) {
    --tw-bg-opacity:1;
    background-color:rgb(119 119 119/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-layer-04) {
    background-color:#fff9
  }
  :is(.dark .dark\:bg-dark-lc-support-error-background) {
    background-color:#ff59671f
  }
  :is(.dark .dark\:bg-dark-lc-support-info-background) {
    background-color:#2696ff1f
  }
  :is(.dark .dark\:bg-dark-lc-support-success-background) {
    background-color:#3fca7d1f
  }
  :is(.dark .dark\:bg-dark-lc-support-warning-background) {
    background-color:#ffc9261f
  }
  :is(.dark .dark\:bg-dark-lc-system-primary) {
    --tw-bg-opacity:1;
    background-color:rgb(38 150 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-lc-system-primary-active) {
    --tw-bg-opacity:1;
    background-color:rgb(31 138 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-olive) {
    --tw-bg-opacity:1;
    background-color:rgb(0 184 163/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-orange-1) {
    background-color:#ffa1161a
  }
  :is(.dark .dark\:bg-dark-orange-2) {
    background-color:#ffa1160f
  }
  :is(.dark .dark\:bg-dark-overlay-1) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-overlay-2) {
    --tw-bg-opacity:1;
    background-color:rgb(40 40 40/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-overlay-3) {
    --tw-bg-opacity:1;
    background-color:rgb(48 48 48/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-overlay-4) {
    --tw-bg-opacity:1;
    background-color:rgb(54 54 54/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-paper) {
    --tw-bg-opacity:1;
    background-color:rgb(28 28 28/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-pink) {
    --tw-bg-opacity:1;
    background-color:rgb(255 55 95/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-purple) {
    --tw-bg-opacity:1;
    background-color:rgb(191 90 242/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-red-1) {
    background-color:#ef474340
  }
  :is(.dark .dark\:bg-dark-red-s) {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-yellow) {
    --tw-bg-opacity:1;
    background-color:rgb(175 141 214/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-dark-yellow-0) {
    background-color:#ffc01e1f
  }
  :is(.dark .dark\:bg-dark-yellow-1) {
    background-color:#3f2c55
  }
  :is(.dark .dark\:bg-difficulty-easy) {
    background-color:var(--difficulty-easy)
  }
  :is(.dark .dark\:bg-difficulty-hard) {
    background-color:var(--difficulty-hard)
  }
  :is(.dark .dark\:bg-difficulty-medium) {
    background-color:var(--difficulty-medium)
  }
  :is(.dark .dark\:bg-fill-primary) {
    background-color:var(--fill-primary)
  }
  :is(.dark .dark\:bg-fill-pure) {
    background-color:var(--fill-pure)
  }
  :is(.dark .dark\:bg-fill-quaternary) {
    background-color:var(--fill-quaternary)
  }
  :is(.dark .dark\:bg-fill-secondary) {
    background-color:var(--fill-secondary)
  }
  :is(.dark .dark\:bg-fill-tertiary) {
    background-color:var(--fill-tertiary)
  }
  :is(.dark .dark\:bg-fixed-black) {
    background-color:var(--fixed-black)
  }
  :is(.dark .dark\:bg-fixed-white) {
    background-color:var(--fixed-white)
  }
  :is(.dark .dark\:bg-gray-10) {
    background-color:var(--gray-10)
  }
  :is(.dark .dark\:bg-gray-100) {
    background-color:var(--gray-100)
  }
  :is(.dark .dark\:bg-gray-20) {
    background-color:var(--gray-20)
  }
  :is(.dark .dark\:bg-gray-40) {
    background-color:var(--gray-40)
  }
  :is(.dark .dark\:bg-gray-6) {
    --tw-bg-opacity:1;
    background-color:rgb(140 140 140/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-gray-60) {
    background-color:var(--gray-60)
  }
  :is(.dark .dark\:bg-gray-7) {
    --tw-bg-opacity:1;
    background-color:rgb(89 89 89/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-gray-8) {
    --tw-bg-opacity:1;
    background-color:rgb(38 38 38/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-gray-80) {
    background-color:var(--gray-80)
  }
  :is(.dark .dark\:bg-green-10) {
    background-color:var(--green-10)
  }
  :is(.dark .dark\:bg-green-100) {
    background-color:var(--green-100)
  }
  :is(.dark .dark\:bg-green-20) {
    background-color:var(--green-20)
  }
  :is(.dark .dark\:bg-green-40) {
    background-color:var(--green-40)
  }
  :is(.dark .dark\:bg-green-60) {
    background-color:var(--green-60)
  }
  :is(.dark .dark\:bg-green-80) {
    background-color:var(--green-80)
  }
  :is(.dark .dark\:bg-green-s) {
    --tw-bg-opacity:1;
    background-color:rgb(45 181 93/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-layer-01) {
    background-color:var(--layer-01)
  }
  :is(.dark .dark\:bg-layer-02) {
    background-color:var(--layer-02)
  }
  :is(.dark .dark\:bg-layer-03) {
    background-color:var(--layer-03)
  }
  :is(.dark .dark\:bg-layer-bg-gray) {
    background-color:var(--layer-bg-gray)
  }
  :is(.dark .dark\:bg-layer-bg-pure) {
    background-color:var(--layer-bg-pure)
  }
  :is(.dark .dark\:bg-magenta-10) {
    background-color:var(--magenta-10)
  }
  :is(.dark .dark\:bg-magenta-100) {
    background-color:var(--magenta-100)
  }
  :is(.dark .dark\:bg-magenta-20) {
    background-color:var(--magenta-20)
  }
  :is(.dark .dark\:bg-magenta-40) {
    background-color:var(--magenta-40)
  }
  :is(.dark .dark\:bg-magenta-60) {
    background-color:var(--magenta-60)
  }
  :is(.dark .dark\:bg-magenta-80) {
    background-color:var(--magenta-80)
  }
  :is(.dark .dark\:bg-message-danger) {
    background-color:var(--message-danger)
  }
  :is(.dark .dark\:bg-message-primary) {
    background-color:var(--message-primary)
  }
  :is(.dark .dark\:bg-message-success) {
    background-color:var(--message-success)
  }
  :is(.dark .dark\:bg-message-warning) {
    background-color:var(--message-warning)
  }
  :is(.dark .dark\:bg-opacity-yellow-60) {
    background-color:var(--opacity-yellow-60)
  }
  :is(.dark .dark\:bg-pink-2) {
    background-color:#ff74d01f
  }
  :is(.dark .dark\:bg-purple-10) {
    background-color:var(--purple-10)
  }
  :is(.dark .dark\:bg-purple-100) {
    background-color:var(--purple-100)
  }
  :is(.dark .dark\:bg-purple-20) {
    background-color:var(--purple-20)
  }
  :is(.dark .dark\:bg-purple-40) {
    background-color:var(--purple-40)
  }
  :is(.dark .dark\:bg-purple-60) {
    background-color:var(--purple-60)
  }
  :is(.dark .dark\:bg-purple-80) {
    background-color:var(--purple-80)
  }
  :is(.dark .dark\:bg-red-1) {
    background-color:#ef474326
  }
  :is(.dark .dark\:bg-red-10) {
    background-color:var(--red-10)
  }
  :is(.dark .dark\:bg-red-100) {
    background-color:var(--red-100)
  }
  :is(.dark .dark\:bg-red-20) {
    background-color:var(--red-20)
  }
  :is(.dark .dark\:bg-red-40) {
    background-color:var(--red-40)
  }
  :is(.dark .dark\:bg-red-60) {
    background-color:var(--red-60)
  }
  :is(.dark .dark\:bg-red-80) {
    background-color:var(--red-80)
  }
  :is(.dark .dark\:bg-special-kiwi) {
    background-color:var(--special-kiwi)
  }
  :is(.dark .dark\:bg-special-lavender) {
    background-color:var(--special-lavender)
  }
  :is(.dark .dark\:bg-special-rose) {
    background-color:var(--special-rose)
  }
  :is(.dark .dark\:bg-special-skyler) {
    background-color:var(--special-skyler)
  }
  :is(.dark .dark\:bg-special-sunny) {
    background-color:var(--special-sunny)
  }
  :is(.dark .dark\:bg-teal-10) {
    background-color:var(--teal-10)
  }
  :is(.dark .dark\:bg-teal-100) {
    background-color:var(--teal-100)
  }
  :is(.dark .dark\:bg-teal-20) {
    background-color:var(--teal-20)
  }
  :is(.dark .dark\:bg-teal-40) {
    background-color:var(--teal-40)
  }
  :is(.dark .dark\:bg-teal-60) {
    background-color:var(--teal-60)
  }
  :is(.dark .dark\:bg-teal-80) {
    background-color:var(--teal-80)
  }
  :is(.dark .dark\:bg-text-primary) {
    background-color:var(--text-primary)
  }
  :is(.dark .dark\:bg-text-quaternary) {
    background-color:var(--text-quaternary)
  }
  :is(.dark .dark\:bg-text-reverse) {
    background-color:var(--text-reverse)
  }
  :is(.dark .dark\:bg-text-secondary) {
    background-color:var(--text-secondary)
  }
  :is(.dark .dark\:bg-text-tertiary) {
    background-color:var(--text-tertiary)
  }
  :is(.dark .dark\:bg-transparent) {
    background-color:initial
  }
  :is(.dark .dark\:bg-white) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:bg-yellow-10) {
    background-color:var(--yellow-10)
  }
  :is(.dark .dark\:bg-yellow-100) {
    background-color:var(--yellow-100)
  }
  :is(.dark .dark\:bg-yellow-20) {
    background-color:var(--yellow-20)
  }
  :is(.dark .dark\:bg-yellow-40) {
    background-color:var(--yellow-40)
  }
  :is(.dark .dark\:bg-yellow-60) {
    background-color:var(--yellow-60)
  }
  :is(.dark .dark\:bg-yellow-80) {
    background-color:var(--yellow-80)
  }
  :is(.dark .dark\:bg-opacity-\[\.15\]) {
    --tw-bg-opacity:.15
  }
  :is(.dark .dark\:bg-opacity-\[0\.12\]) {
    --tw-bg-opacity:0.12
  }
  :is(.dark .dark\:bg-\[_linear-gradient\(180deg _\#6B4000_0\% _\#191919_65\%\)\]) {
    background-image:linear-gradient(180deg,#6b4000,#191919 65%)
  }
  :is(.dark .dark\:bg-\[_linear-gradient\(180deg _\#6B4000_0\% _\#1a1a1a_65\%\)\]) {
    background-image:linear-gradient(180deg,#6b4000,#1a1a1a 65%)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(104deg \#FFD600_0\% \#FFA116_100\%\)\]) {
    background-image:linear-gradient(104deg,#ffd600,#ffa116)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(180deg _\#0083FC33_0\% _\#191919_100\%\)\]) {
    background-image:linear-gradient(180deg,#0083fc33,#191919)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(180deg _\#0083FC33_0\% _\#1a1a1a_100\%\)\]) {
    background-image:linear-gradient(180deg,#0083fc33,#1a1a1a)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(180deg rgba\(26 26 26 0\)_0\% \#1A1A1A_100\%\)\]) {
    background-image:linear-gradient(180deg,#1a1a1a00,#1a1a1a)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(rgba\(0 0 0 0\) \#0f0f0f\)\]) {
    background-image:linear-gradient(#0000,#0f0f0f)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(rgba\(0 0 0 0\) \#1A1A1A\)\]) {
    background-image:linear-gradient(#0000,#1a1a1a)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(to_right rgba\(0 0 0 0\) \#282828_70\%\)\]) {
    background-image:linear-gradient(90deg,#0000,#282828 70%)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(to_top \#FFF_0\% transparent_4\%\) linear-gradient\(to_left \#FFF_0\% transparent_4\%\)\]) {
    background-image:linear-gradient(0deg,#fff,#0000 4%),linear-gradient(270deg,#fff,#0000 4%)
  }
  :is(.dark .dark\:bg-\[linear-gradient\(to_top \#FFF_0\% transparent_5\%\) linear-gradient\(to_left \#FFF_0\% transparent_5\%\)\]) {
    background-image:linear-gradient(0deg,#fff,#0000 5%),linear-gradient(270deg,#fff,#0000 5%)
  }
  :is(.dark .dark\:from-\[\#373737\]) {
    --tw-gradient-from:#373737 var(--tw-gradient-from-position);
    --tw-gradient-to:#37373700 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  :is(.dark .dark\:from-\[\#393939\]) {
    --tw-gradient-from:#393939 var(--tw-gradient-from-position);
    --tw-gradient-to:#39393900 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  :is(.dark .dark\:from-dark-layer-1) {
    --tw-gradient-from:#282828 var(--tw-gradient-from-position);
    --tw-gradient-to:#28282800 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  :is(.dark .dark\:from-dark-layer-bg) {
    --tw-gradient-from:#1a1a1a var(--tw-gradient-from-position);
    --tw-gradient-to:#1a1a1a00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  :is(.dark .dark\:from-dark-paper) {
    --tw-gradient-from:#1c1c1c var(--tw-gradient-from-position);
    --tw-gradient-to:#1c1c1c00 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
  }
  :is(.dark .dark\:via-\[\#373737\]) {
    --tw-gradient-to:#37373700 var(--tw-gradient-to-position);
    --tw-gradient-stops:var(--tw-gradient-from),#373737 var(--tw-gradient-via-position),var(--tw-gradient-to)
  }
  :is(.dark .dark\:to-\[\#373737\]\/20) {
    --tw-gradient-to:#37373733 var(--tw-gradient-to-position)
  }
  :is(.dark .dark\:to-dark-green-s) {
    --tw-gradient-to:#2cbb5d var(--tw-gradient-to-position)
  }
  :is(.dark .dark\:fill-dark-blue-s) {
    fill:#0a84ff
  }
  :is(.dark .dark\:fill-dark-gray-6) {
    fill:#8a8a8a
  }
  :is(.dark .dark\:fill-dark-green-s) {
    fill:#2cbb5d
  }
  :is(.dark .dark\:fill-dark-layer-1) {
    fill:#282828
  }
  :is(.dark .dark\:fill-dark-red-s) {
    fill:#ef4743
  }
  :is(.dark .dark\:fill-dark-yellow) {
    fill:#ffc01e
  }
  :is(.dark .dark\:stroke-dark-blue-s) {
    stroke:#0a84ff
  }
  :is(.dark .dark\:stroke-dark-green-s) {
    stroke:#2cbb5d
  }
  :is(.dark .dark\:stroke-dark-lc-fill-02) {
    stroke:#ffffff1f
  }
  :is(.dark .dark\:stroke-dark-lc-gray-60) {
    stroke:#949494
  }
  :is(.dark .dark\:stroke-paper) {
    stroke:#fff
  }
  :is(.dark .dark\:\!text-blue-60) {
    color:var(--blue-60)!important
  }
  :is(.dark .dark\:text-\[\#1A90FF\]) {
    --tw-text-opacity:1;
    color:rgb(26 144 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#1a1a1a\]) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#5b40ec\]) {
    --tw-text-opacity:1;
    color:rgb(91 64 236/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#A8A8A8\]) {
    --tw-text-opacity:1;
    color:rgb(168 168 168/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#B7B7B7\]) {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#F5F5F5\]) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#FAC31D\]) {
    --tw-text-opacity:1;
    color:rgb(250 195 29/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#f5f5f5\]) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[\#ffa116\]) {
    --tw-text-opacity:1;
    color:rgb(255 161 22/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-\[rgba\(183 183 183 0\.3\)\]) {
    color:#b7b7b74d
  }
  :is(.dark .dark\:text-\[rgba\(183 183 183 0\.6\)\]) {
    color:#b7b7b799
  }
  :is(.dark .dark\:text-\[rgba\(245 245 245 0\.75\)\]) {
    color:#f5f5f5bf
  }
  :is(.dark .dark\:text-\[white\]) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-black) {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-blue) {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-blue-10) {
    color:var(--blue-10)
  }
  :is(.dark .dark\:text-blue-100) {
    color:var(--blue-100)
  }
  :is(.dark .dark\:text-blue-20) {
    color:var(--blue-20)
  }
  :is(.dark .dark\:text-blue-40) {
    color:var(--blue-40)
  }
  :is(.dark .dark\:text-blue-60) {
    color:var(--blue-60)
  }
  :is(.dark .dark\:text-blue-80) {
    color:var(--blue-80)
  }
  :is(.dark .dark\:text-blue-s) {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-border-primary) {
    color:var(--border-primary)
  }
  :is(.dark .dark\:text-border-quaternary) {
    color:var(--border-quaternary)
  }
  :is(.dark .dark\:text-border-secondary) {
    color:var(--border-secondary)
  }
  :is(.dark .dark\:text-border-tertiary) {
    color:var(--border-tertiary)
  }
  :is(.dark .dark\:text-brand-gray) {
    color:var(--brand-gray)
  }
  :is(.dark .dark\:text-brand-logo) {
    color:var(--brand-logo)
  }
  :is(.dark .dark\:text-brand-orange) {
    color:var(--brand-orange)
  }
  :is(.dark .dark\:text-current) {
    color:currentColor
  }
  :is(.dark .dark\:text-dark-blue) {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-blue-s) {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-fill-3) {
    color:#ffffff1a
  }
  :is(.dark .dark\:text-dark-gray-1) {
    --tw-text-opacity:1;
    color:rgb(56 56 56/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-gray-3) {
    --tw-text-opacity:1;
    color:rgb(66 66 66/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-gray-4) {
    --tw-text-opacity:1;
    color:rgb(42 49 63/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-gray-5) {
    --tw-text-opacity:1;
    color:rgb(92 92 92/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-gray-6) {
    --tw-text-opacity:1;
    color:rgb(138 138 138/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-gray-7) {
    --tw-text-opacity:1;
    color:rgb(179 179 179/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-gray-8) {
    --tw-text-opacity:1;
    color:rgb(219 219 219/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-green-4) {
    --tw-text-opacity:1;
    color:rgb(107 207 142/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-green-s) {
    --tw-text-opacity:1;
    color:rgb(44 187 93/var(--tw-text-opacity))
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
  :is(.dark .dark\:text-dark-label-r) {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-button-danger) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-button-danger-active) {
    --tw-text-opacity:1;
    color:rgb(255 71 93/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-button-primary) {
    --tw-text-opacity:1;
    color:rgb(232 232 232/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-button-primary-active) {
    --tw-text-opacity:1;
    color:rgb(223 223 223/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-button-secondary) {
    color:#ffffff14
  }
  :is(.dark .dark\:text-dark-lc-button-secondary-active) {
    color:#ffffff08
  }
  :is(.dark .dark\:text-dark-lc-button-theme) {
    --tw-text-opacity:1;
    color:rgb(63 202 125/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-button-theme-active) {
    --tw-text-opacity:1;
    color:rgb(46 189 115/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-fixed-black) {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-fixed-white) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-gray-50) {
    --tw-text-opacity:1;
    color:rgb(119 119 119/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-gray-70) {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-green-60) {
    --tw-text-opacity:1;
    color:rgb(63 202 125/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-icon-inverse) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-icon-primary) {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-icon-secondary) {
    --tw-text-opacity:1;
    color:rgb(119 119 119/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-icon-tertiary) {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-red-60) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-support-error) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-support-info) {
    --tw-text-opacity:1;
    color:rgb(38 150 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-support-success) {
    --tw-text-opacity:1;
    color:rgb(63 202 125/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-support-warning) {
    --tw-text-opacity:1;
    color:rgb(255 201 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-system-primary) {
    --tw-text-opacity:1;
    color:rgb(38 150 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-system-primary-active) {
    --tw-text-opacity:1;
    color:rgb(31 138 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-text-error) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-text-inverse) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-text-primary) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-lc-text-quaternary) {
    color:#b7b7b74d
  }
  :is(.dark .dark\:text-dark-lc-text-secondary) {
    color:#f5f5f5bf
  }
  :is(.dark .dark\:text-dark-lc-text-tertiary) {
    color:#b7b7b799
  }
  :is(.dark .dark\:text-dark-lc-yellow-60) {
    --tw-text-opacity:1;
    color:rgb(255 201 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-olive) {
    --tw-text-opacity:1;
    color:rgb(0 184 163/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-paper) {
    --tw-text-opacity:1;
    color:rgb(28 28 28/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-pink) {
    --tw-text-opacity:1;
    color:rgb(255 55 95/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-purple) {
    --tw-text-opacity:1;
    color:rgb(191 90 242/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-red-3) {
    --tw-text-opacity:1;
    color:rgb(241 99 95/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-red-4) {
    --tw-text-opacity:1;
    color:rgb(244 126 123/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-red-s) {
    --tw-text-opacity:1;
    color:rgb(239 71 67/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-teal) {
    --tw-text-opacity:1;
    color:rgb(100 210 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-white) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-dark-yellow) {
    --tw-text-opacity:1;
    color:rgb(255 192 30/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-difficulty-easy) {
    color:var(--difficulty-easy)
  }
  :is(.dark .dark\:text-difficulty-hard) {
    color:var(--difficulty-hard)
  }
  :is(.dark .dark\:text-difficulty-medium) {
    color:var(--difficulty-medium)
  }
  :is(.dark .dark\:text-fill-primary) {
    color:var(--fill-primary)
  }
  :is(.dark .dark\:text-fill-pure) {
    color:var(--fill-pure)
  }
  :is(.dark .dark\:text-fill-quaternary) {
    color:var(--fill-quaternary)
  }
  :is(.dark .dark\:text-fill-secondary) {
    color:var(--fill-secondary)
  }
  :is(.dark .dark\:text-fill-tertiary) {
    color:var(--fill-tertiary)
  }
  :is(.dark .dark\:text-fixed-black) {
    color:var(--fixed-black)
  }
  :is(.dark .dark\:text-fixed-white) {
    color:var(--fixed-white)
  }
  :is(.dark .dark\:text-gray-1) {
    --tw-text-opacity:1;
    color:rgb(247 247 247/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-gray-10) {
    color:var(--gray-10)
  }
  :is(.dark .dark\:text-gray-100) {
    color:var(--gray-100)
  }
  :is(.dark .dark\:text-gray-20) {
    color:var(--gray-20)
  }
  :is(.dark .dark\:text-gray-40) {
    color:var(--gray-40)
  }
  :is(.dark .dark\:text-gray-6) {
    --tw-text-opacity:1;
    color:rgb(140 140 140/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-gray-60) {
    color:var(--gray-60)
  }
  :is(.dark .dark\:text-gray-7) {
    --tw-text-opacity:1;
    color:rgb(89 89 89/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-gray-80) {
    color:var(--gray-80)
  }
  :is(.dark .dark\:text-green-10) {
    color:var(--green-10)
  }
  :is(.dark .dark\:text-green-100) {
    color:var(--green-100)
  }
  :is(.dark .dark\:text-green-20) {
    color:var(--green-20)
  }
  :is(.dark .dark\:text-green-40) {
    color:var(--green-40)
  }
  :is(.dark .dark\:text-green-60) {
    color:var(--green-60)
  }
  :is(.dark .dark\:text-green-80) {
    color:var(--green-80)
  }
  :is(.dark .dark\:text-label-1) {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-label-2) {
    color:#262626bf
  }
  :is(.dark .dark\:text-layer-01) {
    color:var(--layer-01)
  }
  :is(.dark .dark\:text-layer-02) {
    color:var(--layer-02)
  }
  :is(.dark .dark\:text-layer-03) {
    color:var(--layer-03)
  }
  :is(.dark .dark\:text-layer-bg-gray) {
    color:var(--layer-bg-gray)
  }
  :is(.dark .dark\:text-layer-bg-pure) {
    color:var(--layer-bg-pure)
  }
  :is(.dark .dark\:text-magenta-10) {
    color:var(--magenta-10)
  }
  :is(.dark .dark\:text-magenta-100) {
    color:var(--magenta-100)
  }
  :is(.dark .dark\:text-magenta-20) {
    color:var(--magenta-20)
  }
  :is(.dark .dark\:text-magenta-40) {
    color:var(--magenta-40)
  }
  :is(.dark .dark\:text-magenta-60) {
    color:var(--magenta-60)
  }
  :is(.dark .dark\:text-magenta-80) {
    color:var(--magenta-80)
  }
  :is(.dark .dark\:text-message-danger) {
    color:var(--message-danger)
  }
  :is(.dark .dark\:text-message-primary) {
    color:var(--message-primary)
  }
  :is(.dark .dark\:text-message-success) {
    color:var(--message-success)
  }
  :is(.dark .dark\:text-message-warning) {
    color:var(--message-warning)
  }
  :is(.dark .dark\:text-opacity-yellow-60) {
    color:var(--opacity-yellow-60)
  }
  :is(.dark .dark\:text-paper) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-pink-1) {
    --tw-text-opacity:1;
    color:rgb(255 116 208/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-purple-10) {
    color:var(--purple-10)
  }
  :is(.dark .dark\:text-purple-100) {
    color:var(--purple-100)
  }
  :is(.dark .dark\:text-purple-20) {
    color:var(--purple-20)
  }
  :is(.dark .dark\:text-purple-40) {
    color:var(--purple-40)
  }
  :is(.dark .dark\:text-purple-60) {
    color:var(--purple-60)
  }
  :is(.dark .dark\:text-purple-80) {
    color:var(--purple-80)
  }
  :is(.dark .dark\:text-red-10) {
    color:var(--red-10)
  }
  :is(.dark .dark\:text-red-100) {
    color:var(--red-100)
  }
  :is(.dark .dark\:text-red-20) {
    color:var(--red-20)
  }
  :is(.dark .dark\:text-red-40) {
    color:var(--red-40)
  }
  :is(.dark .dark\:text-red-60) {
    color:var(--red-60)
  }
  :is(.dark .dark\:text-red-80) {
    color:var(--red-80)
  }
  :is(.dark .dark\:text-red-s) {
    --tw-text-opacity:1;
    color:rgb(239 71 67/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-special-kiwi) {
    color:var(--special-kiwi)
  }
  :is(.dark .dark\:text-special-lavender) {
    color:var(--special-lavender)
  }
  :is(.dark .dark\:text-special-rose) {
    color:var(--special-rose)
  }
  :is(.dark .dark\:text-special-skyler) {
    color:var(--special-skyler)
  }
  :is(.dark .dark\:text-special-sunny) {
    color:var(--special-sunny)
  }
  :is(.dark .dark\:text-teal-10) {
    color:var(--teal-10)
  }
  :is(.dark .dark\:text-teal-100) {
    color:var(--teal-100)
  }
  :is(.dark .dark\:text-teal-20) {
    color:var(--teal-20)
  }
  :is(.dark .dark\:text-teal-40) {
    color:var(--teal-40)
  }
  :is(.dark .dark\:text-teal-60) {
    color:var(--teal-60)
  }
  :is(.dark .dark\:text-teal-80) {
    color:var(--teal-80)
  }
  :is(.dark .dark\:text-text-primary) {
    color:var(--text-primary)
  }
  :is(.dark .dark\:text-text-quaternary) {
    color:var(--text-quaternary)
  }
  :is(.dark .dark\:text-text-reverse) {
    color:var(--text-reverse)
  }
  :is(.dark .dark\:text-text-secondary) {
    color:var(--text-secondary)
  }
  :is(.dark .dark\:text-text-tertiary) {
    color:var(--text-tertiary)
  }
  :is(.dark .dark\:text-transparent) {
    color:#0000
  }
  :is(.dark .dark\:text-white) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:text-yellow-10) {
    color:var(--yellow-10)
  }
  :is(.dark .dark\:text-yellow-100) {
    color:var(--yellow-100)
  }
  :is(.dark .dark\:text-yellow-20) {
    color:var(--yellow-20)
  }
  :is(.dark .dark\:text-yellow-40) {
    color:var(--yellow-40)
  }
  :is(.dark .dark\:text-yellow-60) {
    color:var(--yellow-60)
  }
  :is(.dark .dark\:text-yellow-80) {
    color:var(--yellow-80)
  }
  :is(.dark .dark\:placeholder-dark-label-4)::placeholder {
    color:#ebebf54d
  }
  :is(.dark .dark\:opacity-20) {
    opacity:.2
  }
  :is(.dark .dark\:opacity-50) {
    opacity:.5
  }
  :is(.dark .dark\:shadow-dark-down-01) {
    --tw-shadow:0px 2px 4px #00000014,0px 4px 8px #00000014,0px 6px 12px #00000014;
    --tw-shadow-colored:0px 2px 4px var(--tw-shadow-color),0px 4px 8px var(--tw-shadow-color),0px 6px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-down-02) {
    --tw-shadow:0px 4px 16px #0000001f,0px 8px 32px #0000001f,0px 12px 48px #0000001f;
    --tw-shadow-colored:0px 4px 16px var(--tw-shadow-color),0px 8px 32px var(--tw-shadow-color),0px 12px 48px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-down-03) {
    --tw-shadow:0px 16px 40px #0003,0px 24px 48px #00000029,0px 32px 64px #00000014;
    --tw-shadow-colored:0px 16px 40px var(--tw-shadow-color),0px 24px 48px var(--tw-shadow-color),0px 32px 64px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-left-01) {
    --tw-shadow:-2px 0px 4px #00000014,-4px 0px 8px #00000014,-6px 0px 12px #00000014;
    --tw-shadow-colored:-2px 0px 4px var(--tw-shadow-color),-4px 0px 8px var(--tw-shadow-color),-6px 0px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-left-02) {
    --tw-shadow:-4px 0px 16px #0000001f,-8px 0px 32px #0000001f,-12px 0px 48px #0000001f;
    --tw-shadow-colored:-4px 0px 16px var(--tw-shadow-color),-8px 0px 32px var(--tw-shadow-color),-12px 0px 48px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-left-03) {
    --tw-shadow:-16px 0px 40px #0003,-24px 0px 48px #00000029,-32px 0px 64px #00000014;
    --tw-shadow-colored:-16px 0px 40px var(--tw-shadow-color),-24px 0px 48px var(--tw-shadow-color),-32px 0px 64px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-level1) {
    --tw-shadow:0px 1px 3px #0000003d,0px 2px 8px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 2px 8px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-level2) {
    --tw-shadow:0px 1px 3px #0000003d,0px 4px 12px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 4px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-level3) {
    --tw-shadow:0px 1px 3px #0000003d,0px 6px 16px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 6px 16px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-level4) {
    --tw-shadow:0px 1px 3px #0000003d,0px 10px 28px -4px #0000007a;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 10px 28px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-right-01) {
    --tw-shadow:2px 0px 4px #00000014,4px 0px 8px #00000014,6px 0px 12px #00000014;
    --tw-shadow-colored:2px 0px 4px var(--tw-shadow-color),4px 0px 8px var(--tw-shadow-color),6px 0px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-right-02) {
    --tw-shadow:4px 0px 16px #0000001f,8px 0px 32px #0000001f,12px 0px 48px #0000001f;
    --tw-shadow-colored:4px 0px 16px var(--tw-shadow-color),8px 0px 32px var(--tw-shadow-color),12px 0px 48px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-right-03) {
    --tw-shadow:16px 0px 40px #0003,24px 0px 48px #00000029,32px 0px 64px #00000014;
    --tw-shadow-colored:16px 0px 40px var(--tw-shadow-color),24px 0px 48px var(--tw-shadow-color),32px 0px 64px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-up-01) {
    --tw-shadow:0px -2px 4px #00000014,0px -4px 8px #00000014,0px -6px 12px #00000014;
    --tw-shadow-colored:0px -2px 4px var(--tw-shadow-color),0px -4px 8px var(--tw-shadow-color),0px -6px 12px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-up-02) {
    --tw-shadow:0px -4px 16px #0000001f,0px -8px 32px #0000001f,0px -12px 48px #0000001f;
    --tw-shadow-colored:0px -4px 16px var(--tw-shadow-color),0px -8px 32px var(--tw-shadow-color),0px -12px 48px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-up-03) {
    --tw-shadow:0px -16px 40px #0003,0px -24px 48px #00000029,0px -32px 64px #00000014;
    --tw-shadow-colored:0px -16px 40px var(--tw-shadow-color),0px -24px 48px var(--tw-shadow-color),0px -32px 64px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-layer1) {
    --tw-shadow:var(--shadow-layer-1);
    --tw-shadow-colored:var(--shadow-layer-1);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-layer1-hover) {
    --tw-shadow:var(--shadow-layer-1-hover);
    --tw-shadow-colored:var(--shadow-layer-1-hover);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-layer2) {
    --tw-shadow:var(--shadow-layer-2);
    --tw-shadow-colored:var(--shadow-layer-2);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-layer3) {
    --tw-shadow:var(--shadow-layer-3);
    --tw-shadow-colored:var(--shadow-layer-3);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-none) {
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:shadow-dark-blue) {
    --tw-shadow-color:#0a84ff;
    --tw-shadow:var(--tw-shadow-colored)
  }
  :is(.dark .dark\:outline-dark-red-s) {
    outline-color:#ef4743
  }
  :is(.dark .dark\:display-none) {
    display:none
  }
  :is(.dark .dark\:placeholder\:text-dark-label-4)::placeholder {
    color:#ebebf54d
  }
  :is(.dark .dark\:placeholder\:text-dark-lc-text-tertiary)::placeholder {
    color:#b7b7b799
  }
  :is(.dark .dark\:placeholder\:text-text-quaternary)::placeholder {
    color:var(--text-quaternary)
  }
  :is(.dark .dark\:placeholder\:text-text-tertiary)::placeholder {
    color:var(--text-tertiary)
  }
  :is(.dark .before\:dark\:bg-border-tertiary):before {
    background-color:var(--border-tertiary);
    content:var(--tw-content)
  }
  :is(.dark .before\:dark\:bg-dark-layer-2):before {
    --tw-bg-opacity:1;
    background-color:rgb(48 48 48/var(--tw-bg-opacity));
    content:var(--tw-content)
  }
  :is(.dark .before\:dark\:bg-gray-7):before {
    --tw-bg-opacity:1;
    background-color:rgb(89 89 89/var(--tw-bg-opacity));
    content:var(--tw-content)
  }
  :is(.dark .dark\:before\:bg-fixed-black):before {
    background-color:var(--fixed-black);
    content:var(--tw-content)
  }
  :is(.dark .dark\:before\:bg-message-danger):before {
    background-color:var(--message-danger);
    content:var(--tw-content)
  }
  :is(.dark .after\:dark\:bg-dark-layer-2):after {
    --tw-bg-opacity:1;
    background-color:rgb(48 48 48/var(--tw-bg-opacity));
    content:var(--tw-content)
  }
  :is(.dark .dark\:odd\:bg-dark-layer-1:nth-child(odd)) {
    --tw-bg-opacity:1;
    background-color:rgb(40 40 40/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:odd\:bg-dark-layer-bg:nth-child(odd)) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:even\:bg-dark-fill-4:nth-child(2n)) {
    background-color:#ffffff12
  }
  :is(.dark .dark\:hover\:border-blue-10:hover) {
    border-color:var(--blue-10)
  }
  :is(.dark .dark\:hover\:border-blue-100:hover) {
    border-color:var(--blue-100)
  }
  :is(.dark .dark\:hover\:border-blue-20:hover) {
    border-color:var(--blue-20)
  }
  :is(.dark .dark\:hover\:border-blue-40:hover) {
    border-color:var(--blue-40)
  }
  :is(.dark .dark\:hover\:border-blue-60:hover) {
    border-color:var(--blue-60)
  }
  :is(.dark .dark\:hover\:border-blue-80:hover) {
    border-color:var(--blue-80)
  }
  :is(.dark .dark\:hover\:border-border-primary:hover) {
    border-color:var(--border-primary)
  }
  :is(.dark .dark\:hover\:border-border-quaternary:hover) {
    border-color:var(--border-quaternary)
  }
  :is(.dark .dark\:hover\:border-border-secondary:hover) {
    border-color:var(--border-secondary)
  }
  :is(.dark .dark\:hover\:border-border-tertiary:hover) {
    border-color:var(--border-tertiary)
  }
  :is(.dark .dark\:hover\:border-brand-gray:hover) {
    border-color:var(--brand-gray)
  }
  :is(.dark .dark\:hover\:border-brand-logo:hover) {
    border-color:var(--brand-logo)
  }
  :is(.dark .dark\:hover\:border-brand-orange:hover) {
    border-color:var(--brand-orange)
  }
  :is(.dark .dark\:hover\:border-current:hover) {
    border-color:currentColor
  }
  :is(.dark .dark\:hover\:border-dark-divider-1:hover) {
    border-color:#f7faff3d
  }
  :is(.dark .dark\:hover\:border-difficulty-easy:hover) {
    border-color:var(--difficulty-easy)
  }
  :is(.dark .dark\:hover\:border-difficulty-hard:hover) {
    border-color:var(--difficulty-hard)
  }
  :is(.dark .dark\:hover\:border-difficulty-medium:hover) {
    border-color:var(--difficulty-medium)
  }
  :is(.dark .dark\:hover\:border-fill-primary:hover) {
    border-color:var(--fill-primary)
  }
  :is(.dark .dark\:hover\:border-fill-pure:hover) {
    border-color:var(--fill-pure)
  }
  :is(.dark .dark\:hover\:border-fill-quaternary:hover) {
    border-color:var(--fill-quaternary)
  }
  :is(.dark .dark\:hover\:border-fill-secondary:hover) {
    border-color:var(--fill-secondary)
  }
  :is(.dark .dark\:hover\:border-fill-tertiary:hover) {
    border-color:var(--fill-tertiary)
  }
  :is(.dark .dark\:hover\:border-fixed-black:hover) {
    border-color:var(--fixed-black)
  }
  :is(.dark .dark\:hover\:border-fixed-white:hover) {
    border-color:var(--fixed-white)
  }
  :is(.dark .dark\:hover\:border-gray-10:hover) {
    border-color:var(--gray-10)
  }
  :is(.dark .dark\:hover\:border-gray-100:hover) {
    border-color:var(--gray-100)
  }
  :is(.dark .dark\:hover\:border-gray-20:hover) {
    border-color:var(--gray-20)
  }
  :is(.dark .dark\:hover\:border-gray-40:hover) {
    border-color:var(--gray-40)
  }
  :is(.dark .dark\:hover\:border-gray-60:hover) {
    border-color:var(--gray-60)
  }
  :is(.dark .dark\:hover\:border-gray-80:hover) {
    border-color:var(--gray-80)
  }
  :is(.dark .dark\:hover\:border-green-10:hover) {
    border-color:var(--green-10)
  }
  :is(.dark .dark\:hover\:border-green-100:hover) {
    border-color:var(--green-100)
  }
  :is(.dark .dark\:hover\:border-green-20:hover) {
    border-color:var(--green-20)
  }
  :is(.dark .dark\:hover\:border-green-40:hover) {
    border-color:var(--green-40)
  }
  :is(.dark .dark\:hover\:border-green-60:hover) {
    border-color:var(--green-60)
  }
  :is(.dark .dark\:hover\:border-green-80:hover) {
    border-color:var(--green-80)
  }
  :is(.dark .dark\:hover\:border-layer-01:hover) {
    border-color:var(--layer-01)
  }
  :is(.dark .dark\:hover\:border-layer-02:hover) {
    border-color:var(--layer-02)
  }
  :is(.dark .dark\:hover\:border-layer-03:hover) {
    border-color:var(--layer-03)
  }
  :is(.dark .dark\:hover\:border-layer-bg-gray:hover) {
    border-color:var(--layer-bg-gray)
  }
  :is(.dark .dark\:hover\:border-layer-bg-pure:hover) {
    border-color:var(--layer-bg-pure)
  }
  :is(.dark .dark\:hover\:border-magenta-10:hover) {
    border-color:var(--magenta-10)
  }
  :is(.dark .dark\:hover\:border-magenta-100:hover) {
    border-color:var(--magenta-100)
  }
  :is(.dark .dark\:hover\:border-magenta-20:hover) {
    border-color:var(--magenta-20)
  }
  :is(.dark .dark\:hover\:border-magenta-40:hover) {
    border-color:var(--magenta-40)
  }
  :is(.dark .dark\:hover\:border-magenta-60:hover) {
    border-color:var(--magenta-60)
  }
  :is(.dark .dark\:hover\:border-magenta-80:hover) {
    border-color:var(--magenta-80)
  }
  :is(.dark .dark\:hover\:border-message-danger:hover) {
    border-color:var(--message-danger)
  }
  :is(.dark .dark\:hover\:border-message-primary:hover) {
    border-color:var(--message-primary)
  }
  :is(.dark .dark\:hover\:border-message-success:hover) {
    border-color:var(--message-success)
  }
  :is(.dark .dark\:hover\:border-message-warning:hover) {
    border-color:var(--message-warning)
  }
  :is(.dark .dark\:hover\:border-opacity-yellow-60:hover) {
    border-color:var(--opacity-yellow-60)
  }
  :is(.dark .dark\:hover\:border-purple-10:hover) {
    border-color:var(--purple-10)
  }
  :is(.dark .dark\:hover\:border-purple-100:hover) {
    border-color:var(--purple-100)
  }
  :is(.dark .dark\:hover\:border-purple-20:hover) {
    border-color:var(--purple-20)
  }
  :is(.dark .dark\:hover\:border-purple-40:hover) {
    border-color:var(--purple-40)
  }
  :is(.dark .dark\:hover\:border-purple-60:hover) {
    border-color:var(--purple-60)
  }
  :is(.dark .dark\:hover\:border-purple-80:hover) {
    border-color:var(--purple-80)
  }
  :is(.dark .dark\:hover\:border-red-10:hover) {
    border-color:var(--red-10)
  }
  :is(.dark .dark\:hover\:border-red-100:hover) {
    border-color:var(--red-100)
  }
  :is(.dark .dark\:hover\:border-red-20:hover) {
    border-color:var(--red-20)
  }
  :is(.dark .dark\:hover\:border-red-40:hover) {
    border-color:var(--red-40)
  }
  :is(.dark .dark\:hover\:border-red-60:hover) {
    border-color:var(--red-60)
  }
  :is(.dark .dark\:hover\:border-red-80:hover) {
    border-color:var(--red-80)
  }
  :is(.dark .dark\:hover\:border-special-kiwi:hover) {
    border-color:var(--special-kiwi)
  }
  :is(.dark .dark\:hover\:border-special-lavender:hover) {
    border-color:var(--special-lavender)
  }
  :is(.dark .dark\:hover\:border-special-rose:hover) {
    border-color:var(--special-rose)
  }
  :is(.dark .dark\:hover\:border-special-skyler:hover) {
    border-color:var(--special-skyler)
  }
  :is(.dark .dark\:hover\:border-special-sunny:hover) {
    border-color:var(--special-sunny)
  }
  :is(.dark .dark\:hover\:border-teal-10:hover) {
    border-color:var(--teal-10)
  }
  :is(.dark .dark\:hover\:border-teal-100:hover) {
    border-color:var(--teal-100)
  }
  :is(.dark .dark\:hover\:border-teal-20:hover) {
    border-color:var(--teal-20)
  }
  :is(.dark .dark\:hover\:border-teal-40:hover) {
    border-color:var(--teal-40)
  }
  :is(.dark .dark\:hover\:border-teal-60:hover) {
    border-color:var(--teal-60)
  }
  :is(.dark .dark\:hover\:border-teal-80:hover) {
    border-color:var(--teal-80)
  }
  :is(.dark .dark\:hover\:border-text-primary:hover) {
    border-color:var(--text-primary)
  }
  :is(.dark .dark\:hover\:border-text-quaternary:hover) {
    border-color:var(--text-quaternary)
  }
  :is(.dark .dark\:hover\:border-text-reverse:hover) {
    border-color:var(--text-reverse)
  }
  :is(.dark .dark\:hover\:border-text-secondary:hover) {
    border-color:var(--text-secondary)
  }
  :is(.dark .dark\:hover\:border-text-tertiary:hover) {
    border-color:var(--text-tertiary)
  }
  :is(.dark .dark\:hover\:border-transparent:hover) {
    border-color:#0000
  }
  :is(.dark .dark\:hover\:border-yellow-10:hover) {
    border-color:var(--yellow-10)
  }
  :is(.dark .dark\:hover\:border-yellow-100:hover) {
    border-color:var(--yellow-100)
  }
  :is(.dark .dark\:hover\:border-yellow-20:hover) {
    border-color:var(--yellow-20)
  }
  :is(.dark .dark\:hover\:border-yellow-40:hover) {
    border-color:var(--yellow-40)
  }
  :is(.dark .dark\:hover\:border-yellow-60:hover) {
    border-color:var(--yellow-60)
  }
  :is(.dark .dark\:hover\:border-yellow-80:hover) {
    border-color:var(--yellow-80)
  }
  :is(.dark .dark\:hover\:bg-blue-10:hover) {
    background-color:var(--blue-10)
  }
  :is(.dark .dark\:hover\:bg-blue-100:hover) {
    background-color:var(--blue-100)
  }
  :is(.dark .dark\:hover\:bg-blue-20:hover) {
    background-color:var(--blue-20)
  }
  :is(.dark .dark\:hover\:bg-blue-40:hover) {
    background-color:var(--blue-40)
  }
  :is(.dark .dark\:hover\:bg-blue-60:hover) {
    background-color:var(--blue-60)
  }
  :is(.dark .dark\:hover\:bg-blue-80:hover) {
    background-color:var(--blue-80)
  }
  :is(.dark .dark\:hover\:bg-border-primary:hover) {
    background-color:var(--border-primary)
  }
  :is(.dark .dark\:hover\:bg-border-quaternary:hover) {
    background-color:var(--border-quaternary)
  }
  :is(.dark .dark\:hover\:bg-border-secondary:hover) {
    background-color:var(--border-secondary)
  }
  :is(.dark .dark\:hover\:bg-border-tertiary:hover) {
    background-color:var(--border-tertiary)
  }
  :is(.dark .dark\:hover\:bg-brand-gray:hover) {
    background-color:var(--brand-gray)
  }
  :is(.dark .dark\:hover\:bg-brand-logo:hover) {
    background-color:var(--brand-logo)
  }
  :is(.dark .dark\:hover\:bg-brand-orange:hover) {
    background-color:var(--brand-orange)
  }
  :is(.dark .dark\:hover\:bg-current:hover) {
    background-color:currentColor
  }
  :is(.dark .dark\:hover\:bg-dark-blue-0:hover) {
    background-color:#0a84ff2e
  }
  :is(.dark .dark\:hover\:bg-dark-blue-1:hover) {
    background-color:#0a84ff40
  }
  :is(.dark .dark\:hover\:bg-dark-blue-3:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(47 150 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-blue-s:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-divider-2:hover) {
    background-color:#f7faff2e
  }
  :is(.dark .dark\:hover\:bg-dark-divider-3:hover) {
    background-color:#f7faff1f
  }
  :is(.dark .dark\:hover\:bg-dark-divider-4:hover) {
    background-color:#f7faff1a
  }
  :is(.dark .dark\:hover\:bg-dark-fill-1:hover) {
    background-color:#ffffff2b
  }
  :is(.dark .dark\:hover\:bg-dark-fill-2:hover) {
    background-color:#ffffff24
  }
  :is(.dark .dark\:hover\:bg-dark-fill-3:hover) {
    background-color:#ffffff1a
  }
  :is(.dark .dark\:hover\:bg-dark-fill-4:hover) {
    background-color:#ffffff12
  }
  :is(.dark .dark\:hover\:bg-dark-gray-2:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(60 60 60/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-gray-3:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(66 66 66/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-gray-5:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(92 92 92/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-gray-6:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(138 138 138/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-green-2:hover) {
    background-color:#2cbb5d80
  }
  :is(.dark .dark\:hover\:bg-dark-green-3:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(76 197 117/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-green-s:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(44 187 93/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-label-1:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-layer-1:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(40 40 40/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-layer-2:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(48 48 48/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-background-index:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-background-inverse:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(223 223 223/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-button-danger-hover:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(255 125 132/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-button-primary-hover:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-button-secondary-hover:hover) {
    background-color:#ffffff1f
  }
  :is(.dark .dark\:hover\:bg-dark-lc-button-theme-hover:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(99 215 148/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-fill-01:hover) {
    background-color:#ffffff14
  }
  :is(.dark .dark\:hover\:bg-dark-lc-fill-02:hover) {
    background-color:#ffffff1f
  }
  :is(.dark .dark\:hover\:bg-dark-lc-fill-03:hover) {
    background-color:#fff3
  }
  :is(.dark .dark\:hover\:bg-dark-lc-fixed-black:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-fixed-white:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-icon-inverse:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-icon-primary:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(183 183 183/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-icon-secondary:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(119 119 119/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-icon-tertiary:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-layer-01:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-layer-02:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-layer-03:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(119 119 119/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-lc-layer-04:hover) {
    background-color:#fff9
  }
  :is(.dark .dark\:hover\:bg-dark-lc-support-error-background:hover) {
    background-color:#ff59671f
  }
  :is(.dark .dark\:hover\:bg-dark-lc-support-info-background:hover) {
    background-color:#2696ff1f
  }
  :is(.dark .dark\:hover\:bg-dark-lc-support-success-background:hover) {
    background-color:#3fca7d1f
  }
  :is(.dark .dark\:hover\:bg-dark-lc-support-warning-background:hover) {
    background-color:#ffc9261f
  }
  :is(.dark .dark\:hover\:bg-dark-lc-system-primary-hover:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(87 179 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-paper:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(28 28 28/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-red-3:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(241 99 95/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-red-s:hover) {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-dark-yellow-0:hover) {
    background-color:#ffc01e1f
  }
  :is(.dark .dark\:hover\:bg-difficulty-easy:hover) {
    background-color:var(--difficulty-easy)
  }
  :is(.dark .dark\:hover\:bg-difficulty-hard:hover) {
    background-color:var(--difficulty-hard)
  }
  :is(.dark .dark\:hover\:bg-difficulty-medium:hover) {
    background-color:var(--difficulty-medium)
  }
  :is(.dark .dark\:hover\:bg-fill-primary:hover) {
    background-color:var(--fill-primary)
  }
  :is(.dark .dark\:hover\:bg-fill-pure:hover) {
    background-color:var(--fill-pure)
  }
  :is(.dark .dark\:hover\:bg-fill-quaternary:hover) {
    background-color:var(--fill-quaternary)
  }
  :is(.dark .dark\:hover\:bg-fill-secondary:hover) {
    background-color:var(--fill-secondary)
  }
  :is(.dark .dark\:hover\:bg-fill-tertiary:hover) {
    background-color:var(--fill-tertiary)
  }
  :is(.dark .dark\:hover\:bg-fixed-black:hover) {
    background-color:var(--fixed-black)
  }
  :is(.dark .dark\:hover\:bg-fixed-white:hover) {
    background-color:var(--fixed-white)
  }
  :is(.dark .dark\:hover\:bg-gray-10:hover) {
    background-color:var(--gray-10)
  }
  :is(.dark .dark\:hover\:bg-gray-100:hover) {
    background-color:var(--gray-100)
  }
  :is(.dark .dark\:hover\:bg-gray-20:hover) {
    background-color:var(--gray-20)
  }
  :is(.dark .dark\:hover\:bg-gray-40:hover) {
    background-color:var(--gray-40)
  }
  :is(.dark .dark\:hover\:bg-gray-60:hover) {
    background-color:var(--gray-60)
  }
  :is(.dark .dark\:hover\:bg-gray-80:hover) {
    background-color:var(--gray-80)
  }
  :is(.dark .dark\:hover\:bg-green-10:hover) {
    background-color:var(--green-10)
  }
  :is(.dark .dark\:hover\:bg-green-100:hover) {
    background-color:var(--green-100)
  }
  :is(.dark .dark\:hover\:bg-green-20:hover) {
    background-color:var(--green-20)
  }
  :is(.dark .dark\:hover\:bg-green-40:hover) {
    background-color:var(--green-40)
  }
  :is(.dark .dark\:hover\:bg-green-60:hover) {
    background-color:var(--green-60)
  }
  :is(.dark .dark\:hover\:bg-green-80:hover) {
    background-color:var(--green-80)
  }
  :is(.dark .dark\:hover\:bg-layer-01:hover) {
    background-color:var(--layer-01)
  }
  :is(.dark .dark\:hover\:bg-layer-02:hover) {
    background-color:var(--layer-02)
  }
  :is(.dark .dark\:hover\:bg-layer-03:hover) {
    background-color:var(--layer-03)
  }
  :is(.dark .dark\:hover\:bg-layer-bg-gray:hover) {
    background-color:var(--layer-bg-gray)
  }
  :is(.dark .dark\:hover\:bg-layer-bg-pure:hover) {
    background-color:var(--layer-bg-pure)
  }
  :is(.dark .dark\:hover\:bg-magenta-10:hover) {
    background-color:var(--magenta-10)
  }
  :is(.dark .dark\:hover\:bg-magenta-100:hover) {
    background-color:var(--magenta-100)
  }
  :is(.dark .dark\:hover\:bg-magenta-20:hover) {
    background-color:var(--magenta-20)
  }
  :is(.dark .dark\:hover\:bg-magenta-40:hover) {
    background-color:var(--magenta-40)
  }
  :is(.dark .dark\:hover\:bg-magenta-60:hover) {
    background-color:var(--magenta-60)
  }
  :is(.dark .dark\:hover\:bg-magenta-80:hover) {
    background-color:var(--magenta-80)
  }
  :is(.dark .dark\:hover\:bg-message-danger:hover) {
    background-color:var(--message-danger)
  }
  :is(.dark .dark\:hover\:bg-message-primary:hover) {
    background-color:var(--message-primary)
  }
  :is(.dark .dark\:hover\:bg-message-success:hover) {
    background-color:var(--message-success)
  }
  :is(.dark .dark\:hover\:bg-message-warning:hover) {
    background-color:var(--message-warning)
  }
  :is(.dark .dark\:hover\:bg-opacity-yellow-60:hover) {
    background-color:var(--opacity-yellow-60)
  }
  :is(.dark .dark\:hover\:bg-purple-10:hover) {
    background-color:var(--purple-10)
  }
  :is(.dark .dark\:hover\:bg-purple-100:hover) {
    background-color:var(--purple-100)
  }
  :is(.dark .dark\:hover\:bg-purple-20:hover) {
    background-color:var(--purple-20)
  }
  :is(.dark .dark\:hover\:bg-purple-40:hover) {
    background-color:var(--purple-40)
  }
  :is(.dark .dark\:hover\:bg-purple-60:hover) {
    background-color:var(--purple-60)
  }
  :is(.dark .dark\:hover\:bg-purple-80:hover) {
    background-color:var(--purple-80)
  }
  :is(.dark .dark\:hover\:bg-red-10:hover) {
    background-color:var(--red-10)
  }
  :is(.dark .dark\:hover\:bg-red-100:hover) {
    background-color:var(--red-100)
  }
  :is(.dark .dark\:hover\:bg-red-20:hover) {
    background-color:var(--red-20)
  }
  :is(.dark .dark\:hover\:bg-red-40:hover) {
    background-color:var(--red-40)
  }
  :is(.dark .dark\:hover\:bg-red-60:hover) {
    background-color:var(--red-60)
  }
  :is(.dark .dark\:hover\:bg-red-80:hover) {
    background-color:var(--red-80)
  }
  :is(.dark .dark\:hover\:bg-special-kiwi:hover) {
    background-color:var(--special-kiwi)
  }
  :is(.dark .dark\:hover\:bg-special-lavender:hover) {
    background-color:var(--special-lavender)
  }
  :is(.dark .dark\:hover\:bg-special-rose:hover) {
    background-color:var(--special-rose)
  }
  :is(.dark .dark\:hover\:bg-special-skyler:hover) {
    background-color:var(--special-skyler)
  }
  :is(.dark .dark\:hover\:bg-special-sunny:hover) {
    background-color:var(--special-sunny)
  }
  :is(.dark .dark\:hover\:bg-teal-10:hover) {
    background-color:var(--teal-10)
  }
  :is(.dark .dark\:hover\:bg-teal-100:hover) {
    background-color:var(--teal-100)
  }
  :is(.dark .dark\:hover\:bg-teal-20:hover) {
    background-color:var(--teal-20)
  }
  :is(.dark .dark\:hover\:bg-teal-40:hover) {
    background-color:var(--teal-40)
  }
  :is(.dark .dark\:hover\:bg-teal-60:hover) {
    background-color:var(--teal-60)
  }
  :is(.dark .dark\:hover\:bg-teal-80:hover) {
    background-color:var(--teal-80)
  }
  :is(.dark .dark\:hover\:bg-text-primary:hover) {
    background-color:var(--text-primary)
  }
  :is(.dark .dark\:hover\:bg-text-quaternary:hover) {
    background-color:var(--text-quaternary)
  }
  :is(.dark .dark\:hover\:bg-text-reverse:hover) {
    background-color:var(--text-reverse)
  }
  :is(.dark .dark\:hover\:bg-text-secondary:hover) {
    background-color:var(--text-secondary)
  }
  :is(.dark .dark\:hover\:bg-text-tertiary:hover) {
    background-color:var(--text-tertiary)
  }
  :is(.dark .dark\:hover\:bg-transparent:hover) {
    background-color:initial
  }
  :is(.dark .dark\:hover\:bg-yellow-10:hover) {
    background-color:var(--yellow-10)
  }
  :is(.dark .dark\:hover\:bg-yellow-100:hover) {
    background-color:var(--yellow-100)
  }
  :is(.dark .dark\:hover\:bg-yellow-20:hover) {
    background-color:var(--yellow-20)
  }
  :is(.dark .dark\:hover\:bg-yellow-40:hover) {
    background-color:var(--yellow-40)
  }
  :is(.dark .dark\:hover\:bg-yellow-60:hover) {
    background-color:var(--yellow-60)
  }
  :is(.dark .dark\:hover\:bg-yellow-80:hover) {
    background-color:var(--yellow-80)
  }
  :is(.dark .hover\:dark\:bg-\[rgba\(255 255 255 0\.12\)\]):hover {
    background-color:#ffffff1f
  }
  :is(.dark .hover\:dark\:bg-dark-divider-4):hover {
    background-color:#f7faff1a
  }
  :is(.dark .hover\:dark\:bg-dark-gray-1):hover {
    --tw-bg-opacity:1;
    background-color:rgb(56 56 56/var(--tw-bg-opacity))
  }
  :is(.dark .hover\:dark\:bg-dark-gray-2):hover {
    --tw-bg-opacity:1;
    background-color:rgb(60 60 60/var(--tw-bg-opacity))
  }
  :is(.dark .hover\:dark\:bg-dark-gray-5):hover {
    --tw-bg-opacity:1;
    background-color:rgb(92 92 92/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:hover\:bg-opacity-\[\.25\]:hover) {
    --tw-bg-opacity:.25
  }
  :is(.dark .dark\:hover\:text-blue:hover) {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-blue-10:hover) {
    color:var(--blue-10)
  }
  :is(.dark .dark\:hover\:text-blue-100:hover) {
    color:var(--blue-100)
  }
  :is(.dark .dark\:hover\:text-blue-20:hover) {
    color:var(--blue-20)
  }
  :is(.dark .dark\:hover\:text-blue-40:hover) {
    color:var(--blue-40)
  }
  :is(.dark .dark\:hover\:text-blue-60:hover) {
    color:var(--blue-60)
  }
  :is(.dark .dark\:hover\:text-blue-80:hover) {
    color:var(--blue-80)
  }
  :is(.dark .dark\:hover\:text-border-primary:hover) {
    color:var(--border-primary)
  }
  :is(.dark .dark\:hover\:text-border-quaternary:hover) {
    color:var(--border-quaternary)
  }
  :is(.dark .dark\:hover\:text-border-secondary:hover) {
    color:var(--border-secondary)
  }
  :is(.dark .dark\:hover\:text-border-tertiary:hover) {
    color:var(--border-tertiary)
  }
  :is(.dark .dark\:hover\:text-brand-gray:hover) {
    color:var(--brand-gray)
  }
  :is(.dark .dark\:hover\:text-brand-logo:hover) {
    color:var(--brand-logo)
  }
  :is(.dark .dark\:hover\:text-brand-orange:hover) {
    color:var(--brand-orange)
  }
  :is(.dark .dark\:hover\:text-current:hover) {
    color:currentColor
  }
  :is(.dark .dark\:hover\:text-dark-blue-3:hover) {
    --tw-text-opacity:1;
    color:rgb(47 150 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-blue-s:hover) {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-gray-6:hover) {
    --tw-text-opacity:1;
    color:rgb(138 138 138/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-gray-7:hover) {
    --tw-text-opacity:1;
    color:rgb(179 179 179/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-gray-8:hover) {
    --tw-text-opacity:1;
    color:rgb(219 219 219/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-green-s:hover) {
    --tw-text-opacity:1;
    color:rgb(44 187 93/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-label-1:hover) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-label-2:hover) {
    color:#eff1f6bf
  }
  :is(.dark .dark\:hover\:text-dark-label-3:hover) {
    color:#eff2f699
  }
  :is(.dark .dark\:hover\:text-dark-label-r:hover) {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-button-danger-hover:hover) {
    --tw-text-opacity:1;
    color:rgb(255 125 132/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-button-primary-hover:hover) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-button-secondary-hover:hover) {
    color:#ffffff1f
  }
  :is(.dark .dark\:hover\:text-dark-lc-button-theme-hover:hover) {
    --tw-text-opacity:1;
    color:rgb(99 215 148/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-fixed-black:hover) {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-fixed-white:hover) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-icon-inverse:hover) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-icon-primary:hover) {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-icon-secondary:hover) {
    --tw-text-opacity:1;
    color:rgb(119 119 119/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-icon-tertiary:hover) {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-support-error:hover) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-support-info:hover) {
    --tw-text-opacity:1;
    color:rgb(38 150 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-support-success:hover) {
    --tw-text-opacity:1;
    color:rgb(63 202 125/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-support-warning:hover) {
    --tw-text-opacity:1;
    color:rgb(255 201 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-system-primary:hover) {
    --tw-text-opacity:1;
    color:rgb(38 150 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-system-primary-hover:hover) {
    --tw-text-opacity:1;
    color:rgb(87 179 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-text-error:hover) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-text-inverse:hover) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-text-primary:hover) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-lc-text-quaternary:hover) {
    color:#b7b7b74d
  }
  :is(.dark .dark\:hover\:text-dark-lc-text-secondary:hover) {
    color:#f5f5f5bf
  }
  :is(.dark .dark\:hover\:text-dark-lc-text-tertiary:hover) {
    color:#b7b7b799
  }
  :is(.dark .dark\:hover\:text-dark-red-4:hover) {
    --tw-text-opacity:1;
    color:rgb(244 126 123/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-red-s:hover) {
    --tw-text-opacity:1;
    color:rgb(239 71 67/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-dark-yellow:hover) {
    --tw-text-opacity:1;
    color:rgb(255 192 30/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-difficulty-easy:hover) {
    color:var(--difficulty-easy)
  }
  :is(.dark .dark\:hover\:text-difficulty-hard:hover) {
    color:var(--difficulty-hard)
  }
  :is(.dark .dark\:hover\:text-difficulty-medium:hover) {
    color:var(--difficulty-medium)
  }
  :is(.dark .dark\:hover\:text-fill-primary:hover) {
    color:var(--fill-primary)
  }
  :is(.dark .dark\:hover\:text-fill-pure:hover) {
    color:var(--fill-pure)
  }
  :is(.dark .dark\:hover\:text-fill-quaternary:hover) {
    color:var(--fill-quaternary)
  }
  :is(.dark .dark\:hover\:text-fill-secondary:hover) {
    color:var(--fill-secondary)
  }
  :is(.dark .dark\:hover\:text-fill-tertiary:hover) {
    color:var(--fill-tertiary)
  }
  :is(.dark .dark\:hover\:text-fixed-black:hover) {
    color:var(--fixed-black)
  }
  :is(.dark .dark\:hover\:text-fixed-white:hover) {
    color:var(--fixed-white)
  }
  :is(.dark .dark\:hover\:text-gray-10:hover) {
    color:var(--gray-10)
  }
  :is(.dark .dark\:hover\:text-gray-100:hover) {
    color:var(--gray-100)
  }
  :is(.dark .dark\:hover\:text-gray-20:hover) {
    color:var(--gray-20)
  }
  :is(.dark .dark\:hover\:text-gray-40:hover) {
    color:var(--gray-40)
  }
  :is(.dark .dark\:hover\:text-gray-5:hover) {
    --tw-text-opacity:1;
    color:rgb(191 191 191/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-gray-60:hover) {
    color:var(--gray-60)
  }
  :is(.dark .dark\:hover\:text-gray-80:hover) {
    color:var(--gray-80)
  }
  :is(.dark .dark\:hover\:text-green-10:hover) {
    color:var(--green-10)
  }
  :is(.dark .dark\:hover\:text-green-100:hover) {
    color:var(--green-100)
  }
  :is(.dark .dark\:hover\:text-green-20:hover) {
    color:var(--green-20)
  }
  :is(.dark .dark\:hover\:text-green-40:hover) {
    color:var(--green-40)
  }
  :is(.dark .dark\:hover\:text-green-60:hover) {
    color:var(--green-60)
  }
  :is(.dark .dark\:hover\:text-green-80:hover) {
    color:var(--green-80)
  }
  :is(.dark .dark\:hover\:text-label-1:hover) {
    --tw-text-opacity:1;
    color:rgb(38 38 38/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-layer-01:hover) {
    color:var(--layer-01)
  }
  :is(.dark .dark\:hover\:text-layer-02:hover) {
    color:var(--layer-02)
  }
  :is(.dark .dark\:hover\:text-layer-03:hover) {
    color:var(--layer-03)
  }
  :is(.dark .dark\:hover\:text-layer-bg-gray:hover) {
    color:var(--layer-bg-gray)
  }
  :is(.dark .dark\:hover\:text-layer-bg-pure:hover) {
    color:var(--layer-bg-pure)
  }
  :is(.dark .dark\:hover\:text-magenta-10:hover) {
    color:var(--magenta-10)
  }
  :is(.dark .dark\:hover\:text-magenta-100:hover) {
    color:var(--magenta-100)
  }
  :is(.dark .dark\:hover\:text-magenta-20:hover) {
    color:var(--magenta-20)
  }
  :is(.dark .dark\:hover\:text-magenta-40:hover) {
    color:var(--magenta-40)
  }
  :is(.dark .dark\:hover\:text-magenta-60:hover) {
    color:var(--magenta-60)
  }
  :is(.dark .dark\:hover\:text-magenta-80:hover) {
    color:var(--magenta-80)
  }
  :is(.dark .dark\:hover\:text-message-danger:hover) {
    color:var(--message-danger)
  }
  :is(.dark .dark\:hover\:text-message-primary:hover) {
    color:var(--message-primary)
  }
  :is(.dark .dark\:hover\:text-message-success:hover) {
    color:var(--message-success)
  }
  :is(.dark .dark\:hover\:text-message-warning:hover) {
    color:var(--message-warning)
  }
  :is(.dark .dark\:hover\:text-opacity-yellow-60:hover) {
    color:var(--opacity-yellow-60)
  }
  :is(.dark .dark\:hover\:text-purple-10:hover) {
    color:var(--purple-10)
  }
  :is(.dark .dark\:hover\:text-purple-100:hover) {
    color:var(--purple-100)
  }
  :is(.dark .dark\:hover\:text-purple-20:hover) {
    color:var(--purple-20)
  }
  :is(.dark .dark\:hover\:text-purple-40:hover) {
    color:var(--purple-40)
  }
  :is(.dark .dark\:hover\:text-purple-60:hover) {
    color:var(--purple-60)
  }
  :is(.dark .dark\:hover\:text-purple-80:hover) {
    color:var(--purple-80)
  }
  :is(.dark .dark\:hover\:text-red-10:hover) {
    color:var(--red-10)
  }
  :is(.dark .dark\:hover\:text-red-100:hover) {
    color:var(--red-100)
  }
  :is(.dark .dark\:hover\:text-red-20:hover) {
    color:var(--red-20)
  }
  :is(.dark .dark\:hover\:text-red-40:hover) {
    color:var(--red-40)
  }
  :is(.dark .dark\:hover\:text-red-60:hover) {
    color:var(--red-60)
  }
  :is(.dark .dark\:hover\:text-red-80:hover) {
    color:var(--red-80)
  }
  :is(.dark .dark\:hover\:text-sd-fixed-white:hover) {
    color:hsl(var(--sd-fixed-white))
  }
  :is(.dark .dark\:hover\:text-special-kiwi:hover) {
    color:var(--special-kiwi)
  }
  :is(.dark .dark\:hover\:text-special-lavender:hover) {
    color:var(--special-lavender)
  }
  :is(.dark .dark\:hover\:text-special-rose:hover) {
    color:var(--special-rose)
  }
  :is(.dark .dark\:hover\:text-special-skyler:hover) {
    color:var(--special-skyler)
  }
  :is(.dark .dark\:hover\:text-special-sunny:hover) {
    color:var(--special-sunny)
  }
  :is(.dark .dark\:hover\:text-teal-10:hover) {
    color:var(--teal-10)
  }
  :is(.dark .dark\:hover\:text-teal-100:hover) {
    color:var(--teal-100)
  }
  :is(.dark .dark\:hover\:text-teal-20:hover) {
    color:var(--teal-20)
  }
  :is(.dark .dark\:hover\:text-teal-40:hover) {
    color:var(--teal-40)
  }
  :is(.dark .dark\:hover\:text-teal-60:hover) {
    color:var(--teal-60)
  }
  :is(.dark .dark\:hover\:text-teal-80:hover) {
    color:var(--teal-80)
  }
  :is(.dark .dark\:hover\:text-text-primary:hover) {
    color:var(--text-primary)
  }
  :is(.dark .dark\:hover\:text-text-quaternary:hover) {
    color:var(--text-quaternary)
  }
  :is(.dark .dark\:hover\:text-text-reverse:hover) {
    color:var(--text-reverse)
  }
  :is(.dark .dark\:hover\:text-text-secondary:hover) {
    color:var(--text-secondary)
  }
  :is(.dark .dark\:hover\:text-text-tertiary:hover) {
    color:var(--text-tertiary)
  }
  :is(.dark .dark\:hover\:text-transparent:hover) {
    color:#0000
  }
  :is(.dark .dark\:hover\:text-white:hover) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:text-yellow-10:hover) {
    color:var(--yellow-10)
  }
  :is(.dark .dark\:hover\:text-yellow-100:hover) {
    color:var(--yellow-100)
  }
  :is(.dark .dark\:hover\:text-yellow-20:hover) {
    color:var(--yellow-20)
  }
  :is(.dark .dark\:hover\:text-yellow-40:hover) {
    color:var(--yellow-40)
  }
  :is(.dark .dark\:hover\:text-yellow-60:hover) {
    color:var(--yellow-60)
  }
  :is(.dark .dark\:hover\:text-yellow-80:hover) {
    color:var(--yellow-80)
  }
  :is(.dark .hover\:dark\:text-dark-gray-7):hover {
    --tw-text-opacity:1;
    color:rgb(179 179 179/var(--tw-text-opacity))
  }
  :is(.dark .hover\:dark\:text-dark-gray-8):hover {
    --tw-text-opacity:1;
    color:rgb(219 219 219/var(--tw-text-opacity))
  }
  :is(.dark .hover\:dark\:text-white):hover {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:hover\:shadow-dark-level4:hover) {
    --tw-shadow:0px 1px 3px #0000003d,0px 10px 28px -4px #0000007a;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 10px 28px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:hover\:shadow-level4:hover) {
    --tw-shadow:0px 1px 3px #0000000a,0px 10px 28px -4px #00000029;
    --tw-shadow-colored:0px 1px 3px var(--tw-shadow-color),0px 10px 28px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:hover\:shadow-none:hover) {
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }
  :is(.dark .dark\:focus\:border-dark-blue-s:focus) {
    --tw-border-opacity:1;
    border-color:rgb(10 132 255/var(--tw-border-opacity))
  }
  :is(.dark .dark\:focus\:bg-dark-blue-s:focus) {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:focus\:bg-dark-fill-2:focus) {
    background-color:#ffffff24
  }
  :is(.dark .dark\:focus\:bg-dark-fill-3:focus) {
    background-color:#ffffff1a
  }
  :is(.dark .dark\:focus\:bg-dark-fill-4:focus) {
    background-color:#ffffff12
  }
  :is(.dark .dark\:focus\:bg-dark-layer-2:focus) {
    --tw-bg-opacity:1;
    background-color:rgb(48 48 48/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:focus\:bg-dark-paper:focus) {
    --tw-bg-opacity:1;
    background-color:rgb(28 28 28/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:focus\:bg-transparent:focus) {
    background-color:initial
  }
  :is(.dark .dark\:focus\:bg-white:focus) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .dark\:focus\:text-blue-s:focus) {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:focus\:shadow-dark-blue:focus) {
    --tw-shadow-color:#0a84ff;
    --tw-shadow:var(--tw-shadow-colored)
  }
  :is(.dark .active\:dark\:bg-\[rgba\(0 0 0 0\.03\)\]):active {
    background-color:#00000008
  }
  :is(.dark .dark\:active\:bg-dark-fill-3:active) {
    background-color:#ffffff1a
  }
  :is(.dark .dark\:active\:bg-fill-secondary:active) {
    background-color:var(--fill-secondary)
  }
  :is(.dark .dark\:active\:bg-transparent:active) {
    background-color:initial
  }
  :is(.dark .dark\:active\:bg-yellow-40:active) {
    background-color:var(--yellow-40)
  }
  :is(.dark .dark\:active\:text-blue-s:active) {
    --tw-text-opacity:1;
    color:rgb(0 122 255/var(--tw-text-opacity))
  }
  :is(.dark .dark\:active\:text-dark-label-3:active) {
    color:#eff2f699
  }
  :is(.dark .dark\:active\:text-text-reverse:active) {
    color:var(--text-reverse)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-blue-10) {
    border-color:var(--blue-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-blue-100) {
    border-color:var(--blue-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-blue-20) {
    border-color:var(--blue-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-blue-40) {
    border-color:var(--blue-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-blue-60) {
    border-color:var(--blue-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-blue-80) {
    border-color:var(--blue-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-border-primary) {
    border-color:var(--border-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-border-quaternary) {
    border-color:var(--border-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-border-secondary) {
    border-color:var(--border-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-border-tertiary) {
    border-color:var(--border-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-brand-gray) {
    border-color:var(--brand-gray)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-brand-logo) {
    border-color:var(--brand-logo)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-brand-orange) {
    border-color:var(--brand-orange)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-current) {
    border-color:currentColor
  }
  :is(.dark .group:hover .dark\:group-hover\:border-dark-gray-4) {
    --tw-border-opacity:1;
    border-color:rgb(74 74 74/var(--tw-border-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:border-difficulty-easy) {
    border-color:var(--difficulty-easy)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-difficulty-hard) {
    border-color:var(--difficulty-hard)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-difficulty-medium) {
    border-color:var(--difficulty-medium)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fill-primary) {
    border-color:var(--fill-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fill-pure) {
    border-color:var(--fill-pure)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fill-quaternary) {
    border-color:var(--fill-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fill-secondary) {
    border-color:var(--fill-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fill-tertiary) {
    border-color:var(--fill-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fixed-black) {
    border-color:var(--fixed-black)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-fixed-white) {
    border-color:var(--fixed-white)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-gray-10) {
    border-color:var(--gray-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-gray-100) {
    border-color:var(--gray-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-gray-20) {
    border-color:var(--gray-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-gray-40) {
    border-color:var(--gray-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-gray-60) {
    border-color:var(--gray-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-gray-80) {
    border-color:var(--gray-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-green-10) {
    border-color:var(--green-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-green-100) {
    border-color:var(--green-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-green-20) {
    border-color:var(--green-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-green-40) {
    border-color:var(--green-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-green-60) {
    border-color:var(--green-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-green-80) {
    border-color:var(--green-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-layer-01) {
    border-color:var(--layer-01)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-layer-02) {
    border-color:var(--layer-02)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-layer-03) {
    border-color:var(--layer-03)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-layer-bg-gray) {
    border-color:var(--layer-bg-gray)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-layer-bg-pure) {
    border-color:var(--layer-bg-pure)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-magenta-10) {
    border-color:var(--magenta-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-magenta-100) {
    border-color:var(--magenta-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-magenta-20) {
    border-color:var(--magenta-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-magenta-40) {
    border-color:var(--magenta-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-magenta-60) {
    border-color:var(--magenta-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-magenta-80) {
    border-color:var(--magenta-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-message-danger) {
    border-color:var(--message-danger)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-message-primary) {
    border-color:var(--message-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-message-success) {
    border-color:var(--message-success)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-message-warning) {
    border-color:var(--message-warning)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-opacity-yellow-60) {
    border-color:var(--opacity-yellow-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-purple-10) {
    border-color:var(--purple-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-purple-100) {
    border-color:var(--purple-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-purple-20) {
    border-color:var(--purple-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-purple-40) {
    border-color:var(--purple-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-purple-60) {
    border-color:var(--purple-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-purple-80) {
    border-color:var(--purple-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-red-10) {
    border-color:var(--red-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-red-100) {
    border-color:var(--red-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-red-20) {
    border-color:var(--red-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-red-40) {
    border-color:var(--red-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-red-60) {
    border-color:var(--red-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-red-80) {
    border-color:var(--red-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-special-kiwi) {
    border-color:var(--special-kiwi)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-special-lavender) {
    border-color:var(--special-lavender)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-special-rose) {
    border-color:var(--special-rose)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-special-skyler) {
    border-color:var(--special-skyler)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-special-sunny) {
    border-color:var(--special-sunny)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-teal-10) {
    border-color:var(--teal-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-teal-100) {
    border-color:var(--teal-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-teal-20) {
    border-color:var(--teal-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-teal-40) {
    border-color:var(--teal-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-teal-60) {
    border-color:var(--teal-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-teal-80) {
    border-color:var(--teal-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-text-primary) {
    border-color:var(--text-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-text-quaternary) {
    border-color:var(--text-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-text-reverse) {
    border-color:var(--text-reverse)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-text-secondary) {
    border-color:var(--text-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-text-tertiary) {
    border-color:var(--text-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-transparent) {
    border-color:#0000
  }
  :is(.dark .group:hover .dark\:group-hover\:border-yellow-10) {
    border-color:var(--yellow-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-yellow-100) {
    border-color:var(--yellow-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-yellow-20) {
    border-color:var(--yellow-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-yellow-40) {
    border-color:var(--yellow-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-yellow-60) {
    border-color:var(--yellow-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:border-yellow-80) {
    border-color:var(--yellow-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-blue-10) {
    background-color:var(--blue-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-blue-100) {
    background-color:var(--blue-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-blue-20) {
    background-color:var(--blue-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-blue-40) {
    background-color:var(--blue-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-blue-60) {
    background-color:var(--blue-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-blue-80) {
    background-color:var(--blue-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-border-primary) {
    background-color:var(--border-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-border-quaternary) {
    background-color:var(--border-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-border-secondary) {
    background-color:var(--border-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-border-tertiary) {
    background-color:var(--border-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-brand-gray) {
    background-color:var(--brand-gray)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-brand-logo) {
    background-color:var(--brand-logo)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-brand-orange) {
    background-color:var(--brand-orange)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-current) {
    background-color:currentColor
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-blue-0) {
    background-color:#0a84ff2e
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-fill-2) {
    background-color:#ffffff24
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-fill-4) {
    background-color:#ffffff12
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-gray-6) {
    --tw-bg-opacity:1;
    background-color:rgb(138 138 138/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-layer-3) {
    --tw-bg-opacity:1;
    background-color:rgb(54 54 54/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-background-index) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-background-inverse) {
    --tw-bg-opacity:1;
    background-color:rgb(223 223 223/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-button-danger-hover) {
    --tw-bg-opacity:1;
    background-color:rgb(255 125 132/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-button-primary-hover) {
    --tw-bg-opacity:1;
    background-color:rgb(245 245 245/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-button-secondary-hover) {
    background-color:#ffffff1f
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-button-theme-hover) {
    --tw-bg-opacity:1;
    background-color:rgb(99 215 148/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-fill-01) {
    background-color:#ffffff14
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-fill-02) {
    background-color:#ffffff1f
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-fill-03) {
    background-color:#fff3
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-fixed-black) {
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-fixed-white) {
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-icon-inverse) {
    --tw-bg-opacity:1;
    background-color:rgb(26 26 26/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-icon-primary) {
    --tw-bg-opacity:1;
    background-color:rgb(183 183 183/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-icon-secondary) {
    --tw-bg-opacity:1;
    background-color:rgb(119 119 119/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-icon-tertiary) {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-layer-01) {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-layer-02) {
    --tw-bg-opacity:1;
    background-color:rgb(82 82 82/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-layer-03) {
    --tw-bg-opacity:1;
    background-color:rgb(119 119 119/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-layer-04) {
    background-color:#fff9
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-support-error-background) {
    background-color:#ff59671f
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-support-info-background) {
    background-color:#2696ff1f
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-support-success-background) {
    background-color:#3fca7d1f
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-support-warning-background) {
    background-color:#ffc9261f
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-lc-system-primary-hover) {
    --tw-bg-opacity:1;
    background-color:rgb(87 179 255/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-dark-red-s) {
    --tw-bg-opacity:1;
    background-color:rgb(239 71 67/var(--tw-bg-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-difficulty-easy) {
    background-color:var(--difficulty-easy)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-difficulty-hard) {
    background-color:var(--difficulty-hard)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-difficulty-medium) {
    background-color:var(--difficulty-medium)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fill-primary) {
    background-color:var(--fill-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fill-pure) {
    background-color:var(--fill-pure)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fill-quaternary) {
    background-color:var(--fill-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fill-secondary) {
    background-color:var(--fill-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fill-tertiary) {
    background-color:var(--fill-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fixed-black) {
    background-color:var(--fixed-black)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-fixed-white) {
    background-color:var(--fixed-white)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-gray-10) {
    background-color:var(--gray-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-gray-100) {
    background-color:var(--gray-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-gray-20) {
    background-color:var(--gray-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-gray-40) {
    background-color:var(--gray-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-gray-60) {
    background-color:var(--gray-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-gray-80) {
    background-color:var(--gray-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-green-10) {
    background-color:var(--green-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-green-100) {
    background-color:var(--green-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-green-20) {
    background-color:var(--green-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-green-40) {
    background-color:var(--green-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-green-60) {
    background-color:var(--green-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-green-80) {
    background-color:var(--green-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-layer-01) {
    background-color:var(--layer-01)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-layer-02) {
    background-color:var(--layer-02)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-layer-03) {
    background-color:var(--layer-03)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-layer-bg-gray) {
    background-color:var(--layer-bg-gray)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-layer-bg-pure) {
    background-color:var(--layer-bg-pure)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-magenta-10) {
    background-color:var(--magenta-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-magenta-100) {
    background-color:var(--magenta-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-magenta-20) {
    background-color:var(--magenta-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-magenta-40) {
    background-color:var(--magenta-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-magenta-60) {
    background-color:var(--magenta-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-magenta-80) {
    background-color:var(--magenta-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-message-danger) {
    background-color:var(--message-danger)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-message-primary) {
    background-color:var(--message-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-message-success) {
    background-color:var(--message-success)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-message-warning) {
    background-color:var(--message-warning)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-opacity-yellow-60) {
    background-color:var(--opacity-yellow-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-purple-10) {
    background-color:var(--purple-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-purple-100) {
    background-color:var(--purple-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-purple-20) {
    background-color:var(--purple-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-purple-40) {
    background-color:var(--purple-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-purple-60) {
    background-color:var(--purple-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-purple-80) {
    background-color:var(--purple-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-red-10) {
    background-color:var(--red-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-red-100) {
    background-color:var(--red-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-red-20) {
    background-color:var(--red-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-red-40) {
    background-color:var(--red-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-red-60) {
    background-color:var(--red-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-red-80) {
    background-color:var(--red-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-special-kiwi) {
    background-color:var(--special-kiwi)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-special-lavender) {
    background-color:var(--special-lavender)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-special-rose) {
    background-color:var(--special-rose)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-special-skyler) {
    background-color:var(--special-skyler)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-special-sunny) {
    background-color:var(--special-sunny)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-teal-10) {
    background-color:var(--teal-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-teal-100) {
    background-color:var(--teal-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-teal-20) {
    background-color:var(--teal-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-teal-40) {
    background-color:var(--teal-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-teal-60) {
    background-color:var(--teal-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-teal-80) {
    background-color:var(--teal-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-text-primary) {
    background-color:var(--text-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-text-quaternary) {
    background-color:var(--text-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-text-reverse) {
    background-color:var(--text-reverse)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-text-secondary) {
    background-color:var(--text-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-text-tertiary) {
    background-color:var(--text-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-transparent) {
    background-color:initial
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-yellow-10) {
    background-color:var(--yellow-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-yellow-100) {
    background-color:var(--yellow-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-yellow-20) {
    background-color:var(--yellow-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-yellow-40) {
    background-color:var(--yellow-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-yellow-60) {
    background-color:var(--yellow-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:bg-yellow-80) {
    background-color:var(--yellow-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:fill-dark-gray-7) {
    fill:#b3b3b3
  }
  :is(.dark .group:hover .dark\:group-hover\:text-blue-10) {
    color:var(--blue-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-blue-100) {
    color:var(--blue-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-blue-20) {
    color:var(--blue-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-blue-40) {
    color:var(--blue-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-blue-60) {
    color:var(--blue-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-blue-80) {
    color:var(--blue-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-border-primary) {
    color:var(--border-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-border-quaternary) {
    color:var(--border-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-border-secondary) {
    color:var(--border-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-border-tertiary) {
    color:var(--border-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-brand-gray) {
    color:var(--brand-gray)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-brand-logo) {
    color:var(--brand-logo)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-brand-orange) {
    color:var(--brand-orange)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-current) {
    color:currentColor
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-blue) {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-blue-s) {
    --tw-text-opacity:1;
    color:rgb(10 132 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-gray-5) {
    --tw-text-opacity:1;
    color:rgb(92 92 92/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-gray-6) {
    --tw-text-opacity:1;
    color:rgb(138 138 138/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-gray-7) {
    --tw-text-opacity:1;
    color:rgb(179 179 179/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-gray-8) {
    --tw-text-opacity:1;
    color:rgb(219 219 219/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-green-s) {
    --tw-text-opacity:1;
    color:rgb(44 187 93/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-label-1) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-label-2) {
    color:#eff1f6bf
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-button-danger-hover) {
    --tw-text-opacity:1;
    color:rgb(255 125 132/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-button-primary-hover) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-button-secondary-hover) {
    color:#ffffff1f
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-button-theme-hover) {
    --tw-text-opacity:1;
    color:rgb(99 215 148/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-fixed-black) {
    --tw-text-opacity:1;
    color:rgb(0 0 0/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-fixed-white) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-icon-inverse) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-icon-primary) {
    --tw-text-opacity:1;
    color:rgb(183 183 183/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-icon-secondary) {
    --tw-text-opacity:1;
    color:rgb(119 119 119/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-icon-tertiary) {
    --tw-text-opacity:1;
    color:rgb(82 82 82/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-support-error) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-support-info) {
    --tw-text-opacity:1;
    color:rgb(38 150 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-support-success) {
    --tw-text-opacity:1;
    color:rgb(63 202 125/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-support-warning) {
    --tw-text-opacity:1;
    color:rgb(255 201 38/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-system-primary) {
    --tw-text-opacity:1;
    color:rgb(38 150 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-system-primary-hover) {
    --tw-text-opacity:1;
    color:rgb(87 179 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-text-error) {
    --tw-text-opacity:1;
    color:rgb(255 89 103/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-text-inverse) {
    --tw-text-opacity:1;
    color:rgb(26 26 26/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-text-primary) {
    --tw-text-opacity:1;
    color:rgb(245 245 245/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-text-quaternary) {
    color:#b7b7b74d
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-text-secondary) {
    color:#f5f5f5bf
  }
  :is(.dark .group:hover .dark\:group-hover\:text-dark-lc-text-tertiary) {
    color:#b7b7b799
  }
  :is(.dark .group:hover .dark\:group-hover\:text-difficulty-easy) {
    color:var(--difficulty-easy)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-difficulty-hard) {
    color:var(--difficulty-hard)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-difficulty-medium) {
    color:var(--difficulty-medium)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fill-primary) {
    color:var(--fill-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fill-pure) {
    color:var(--fill-pure)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fill-quaternary) {
    color:var(--fill-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fill-secondary) {
    color:var(--fill-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fill-tertiary) {
    color:var(--fill-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fixed-black) {
    color:var(--fixed-black)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-fixed-white) {
    color:var(--fixed-white)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-gray-10) {
    color:var(--gray-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-gray-100) {
    color:var(--gray-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-gray-20) {
    color:var(--gray-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-gray-40) {
    color:var(--gray-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-gray-60) {
    color:var(--gray-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-gray-80) {
    color:var(--gray-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-green-10) {
    color:var(--green-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-green-100) {
    color:var(--green-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-green-20) {
    color:var(--green-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-green-40) {
    color:var(--green-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-green-60) {
    color:var(--green-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-green-80) {
    color:var(--green-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-layer-01) {
    color:var(--layer-01)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-layer-02) {
    color:var(--layer-02)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-layer-03) {
    color:var(--layer-03)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-layer-bg-gray) {
    color:var(--layer-bg-gray)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-layer-bg-pure) {
    color:var(--layer-bg-pure)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-magenta-10) {
    color:var(--magenta-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-magenta-100) {
    color:var(--magenta-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-magenta-20) {
    color:var(--magenta-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-magenta-40) {
    color:var(--magenta-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-magenta-60) {
    color:var(--magenta-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-magenta-80) {
    color:var(--magenta-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-message-danger) {
    color:var(--message-danger)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-message-primary) {
    color:var(--message-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-message-success) {
    color:var(--message-success)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-message-warning) {
    color:var(--message-warning)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-opacity-yellow-60) {
    color:var(--opacity-yellow-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-purple-10) {
    color:var(--purple-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-purple-100) {
    color:var(--purple-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-purple-20) {
    color:var(--purple-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-purple-40) {
    color:var(--purple-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-purple-60) {
    color:var(--purple-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-purple-80) {
    color:var(--purple-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-red-10) {
    color:var(--red-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-red-100) {
    color:var(--red-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-red-20) {
    color:var(--red-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-red-40) {
    color:var(--red-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-red-60) {
    color:var(--red-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-red-80) {
    color:var(--red-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-special-kiwi) {
    color:var(--special-kiwi)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-special-lavender) {
    color:var(--special-lavender)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-special-rose) {
    color:var(--special-rose)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-special-skyler) {
    color:var(--special-skyler)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-special-sunny) {
    color:var(--special-sunny)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-teal-10) {
    color:var(--teal-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-teal-100) {
    color:var(--teal-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-teal-20) {
    color:var(--teal-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-teal-40) {
    color:var(--teal-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-teal-60) {
    color:var(--teal-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-teal-80) {
    color:var(--teal-80)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-text-primary) {
    color:var(--text-primary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-text-quaternary) {
    color:var(--text-quaternary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-text-reverse) {
    color:var(--text-reverse)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-text-secondary) {
    color:var(--text-secondary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-text-tertiary) {
    color:var(--text-tertiary)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-transparent) {
    color:#0000
  }
  :is(.dark .group:hover .dark\:group-hover\:text-white) {
    --tw-text-opacity:1;
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  :is(.dark .group:hover .dark\:group-hover\:text-yellow-10) {
    color:var(--yellow-10)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-yellow-100) {
    color:var(--yellow-100)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-yellow-20) {
    color:var(--yellow-20)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-yellow-40) {
    color:var(--yellow-40)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-yellow-60) {
    color:var(--yellow-60)
  }
  :is(.dark .group:hover .dark\:group-hover\:text-yellow-80) {
    color:var(--yellow-80)
  }
  :is(.dark .dark\:data-\[state\=checked\]\:bg-dark-blue-s[data-state=checked]) {
    --tw-bg-opacity:1;
    background-color:rgb(10 132 255/var(--tw-bg-opacity))
  }
  @media not all and (min-width:680px) {
    .max-md\:hidden {
      display:none
    }
  }
  @media (min-width:390px) {
    .min-\[390px\]\:grid-cols-1 {
      grid-template-columns:repeat(1,minmax(0,1fr))
    }
    .min-\[390px\]\:grid-cols-2 {
      grid-template-columns:repeat(2,minmax(0,1fr))
    }
  }
  @media (min-width:600px) {
    .lc-md\:absolute {
      position:absolute
    }
    .lc-md\:bottom-0 {
      bottom:0
    }
    .lc-md\:bottom-\[31px\] {
      bottom:31px
    }
    .lc-md\:left-4 {
      left:1rem
    }
    .lc-md\:right-\[-280px\] {
      right:-280px
    }
    .lc-md\:right-\[30px\] {
      right:30px
    }
    .lc-md\:top-5 {
      top:1.25rem
    }
    .lc-md\:top-\[-12px\] {
      top:-12px
    }
    .lc-md\:order-\[0\] {
      order:0
    }
    .lc-md\:mx-0 {
      margin-left:0;
      margin-right:0
    }
    .lc-md\:ml-6 {
      margin-left:1.5rem
    }
    .lc-md\:ml-\[76px\] {
      margin-left:76px
    }
    .lc-md\:mt-0 {
      margin-top:0
    }
    .lc-md\:mt-4 {
      margin-top:1rem
    }
    .lc-md\:mt-\[284px\] {
      margin-top:284px
    }
    .lc-md\:block {
      display:block
    }
    .lc-md\:inline {
      display:inline
    }
    .lc-md\:flex {
      display:flex
    }
    .lc-md\:hidden {
      display:none
    }
    .lc-md\:h-16 {
      height:4rem
    }
    .lc-md\:h-4 {
      height:1rem
    }
    .lc-md\:h-4\.5 {
      height:1.125rem
    }
    .lc-md\:h-5 {
      height:1.25rem
    }
    .lc-md\:h-7 {
      height:1.75rem
    }
    .lc-md\:h-\[194px\] {
      height:194px
    }
    .lc-md\:h-\[280px\] {
      height:280px
    }
    .lc-md\:h-\[320px\] {
      height:320px
    }
    .lc-md\:h-\[350px\] {
      height:350px
    }
    .lc-md\:h-\[550px\] {
      height:550px
    }
    .lc-md\:h-\[60px\] {
      height:60px
    }
    .lc-md\:h-\[80px\] {
      height:80px
    }
    .lc-md\:max-h-\[741px\] {
      max-height:741px
    }
    .lc-md\:min-h-\[194px\] {
      min-height:194px
    }
    .lc-md\:min-h-\[800px\] {
      min-height:800px
    }
    .lc-md\:min-h-\[84px\] {
      min-height:84px
    }
    .lc-md\:w-4 {
      width:1rem
    }
    .lc-md\:w-4\.5 {
      width:1.125rem
    }
    .lc-md\:w-40 {
      width:10rem
    }
    .lc-md\:w-5 {
      width:1.25rem
    }
    .lc-md\:w-7 {
      width:1.75rem
    }
    .lc-md\:w-\[385px\] {
      width:385px
    }
    .lc-md\:w-\[438px\] {
      width:438px
    }
    .lc-md\:w-\[50\%\] {
      width:50%
    }
    .lc-md\:w-\[550px\] {
      width:550px
    }
    .lc-md\:w-\[600px\] {
      width:600px
    }
    .lc-md\:w-\[60px\] {
      width:60px
    }
    .lc-md\:w-auto {
      width:auto
    }
    .lc-md\:w-full {
      width:100%
    }
    .lc-md\:min-w-0 {
      min-width:0
    }
    .lc-md\:max-w-\[900px\] {
      max-width:900px
    }
    .lc-md\:max-w-\[972px\] {
      max-width:972px
    }
    .lc-md\:max-w-none {
      max-width:none
    }
    .lc-md\:flex-\[0\.4\] {
      flex:0.4
    }
    .lc-md\:flex-\[0\.5\] {
      flex:0.5
    }
    .lc-md\:flex-none {
      flex:none
    }
    .lc-md\:flex-row {
      flex-direction:row
    }
    .lc-md\:flex-col {
      flex-direction:column
    }
    .lc-md\:items-start {
      align-items:flex-start
    }
    .lc-md\:items-center {
      align-items:center
    }
    .lc-md\:justify-normal {
      justify-content:normal
    }
    .lc-md\:justify-start {
      justify-content:flex-start
    }
    .lc-md\:justify-end {
      justify-content:flex-end
    }
    .lc-md\:justify-center {
      justify-content:center
    }
    .lc-md\:justify-between {
      justify-content:space-between
    }
    .lc-md\:gap-0 {
      gap:0
    }
    .lc-md\:gap-10 {
      gap:2.5rem
    }
    .lc-md\:gap-25 {
      gap:6.25rem
    }
    .lc-md\:gap-4 {
      gap:1rem
    }
    .lc-md\:gap-6 {
      gap:1.5rem
    }
    .lc-md\:gap-8 {
      gap:2rem
    }
    .lc-md\:space-x-0>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(0px*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(0px*var(--tw-space-x-reverse))
    }
    .lc-md\:space-x-2>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(.5rem*var(--tw-space-x-reverse))
    }
    .lc-md\:space-x-3>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(.75rem*var(--tw-space-x-reverse))
    }
    .lc-md\:space-x-4>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(1rem*var(--tw-space-x-reverse))
    }
    .lc-md\:space-x-5>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(1.25rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(1.25rem*var(--tw-space-x-reverse))
    }
    .lc-md\:space-y-0>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(0px*var(--tw-space-y-reverse));
      margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
    }
    .lc-md\:rounded-full {
      border-radius:9999px
    }
    .lc-md\:bg-gradient-to-r {
      background-image:linear-gradient(to right,var(--tw-gradient-stops))
    }
    .lc-md\:from-\[\#FFFBF0\] {
      --tw-gradient-from:#fffbf0 var(--tw-gradient-from-position);
      --tw-gradient-to:#fffbf000 var(--tw-gradient-to-position);
      --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
    }
    .lc-md\:to-\[\#FFE5A0\] {
      --tw-gradient-to:#ffe5a0 var(--tw-gradient-to-position)
    }
    .lc-md\:p-6 {
      padding:1.5rem
    }
    .lc-md\:px-10 {
      padding-left:2.5rem;
      padding-right:2.5rem
    }
    .lc-md\:px-4 {
      padding-left:1rem;
      padding-right:1rem
    }
    .lc-md\:px-6 {
      padding-left:1.5rem;
      padding-right:1.5rem
    }
    .lc-md\:px-\[48px\] {
      padding-left:48px;
      padding-right:48px
    }
    .lc-md\:py-0 {
      padding-bottom:0;
      padding-top:0
    }
    .lc-md\:py-10 {
      padding-bottom:2.5rem;
      padding-top:2.5rem
    }
    .lc-md\:py-16 {
      padding-bottom:4rem;
      padding-top:4rem
    }
    .lc-md\:py-3 {
      padding-bottom:.75rem;
      padding-top:.75rem
    }
    .lc-md\:py-4 {
      padding-bottom:1rem;
      padding-top:1rem
    }
    .lc-md\:py-6 {
      padding-bottom:1.5rem;
      padding-top:1.5rem
    }
    .lc-md\:py-\[60px\] {
      padding-bottom:60px;
      padding-top:60px
    }
    .lc-md\:pb-10 {
      padding-bottom:2.5rem
    }
    .lc-md\:pb-14 {
      padding-bottom:3.5rem
    }
    .lc-md\:pb-4 {
      padding-bottom:1rem
    }
    .lc-md\:pb-6 {
      padding-bottom:1.5rem
    }
    .lc-md\:pt-9 {
      padding-top:2.25rem
    }
    .lc-md\:text-left {
      text-align:left
    }
    .lc-md\:text-start {
      text-align:start
    }
    .lc-md\:text-2xl {
      font-size:1.5rem;
      line-height:2rem
    }
    .lc-md\:text-3xl {
      font-size:1.875rem;
      line-height:2.25rem
    }
    .lc-md\:text-4xl {
      font-size:2.25rem;
      line-height:2.5rem
    }
    .lc-md\:text-\[32px\] {
      font-size:32px
    }
    .lc-md\:text-\[48px\] {
      font-size:48px
    }
    .lc-md\:text-base {
      font-size:1rem;
      line-height:1.5rem
    }
    .lc-md\:text-lg {
      font-size:1.125rem;
      line-height:1.75rem
    }
    .lc-md\:text-sm {
      font-size:.875rem;
      line-height:1.25rem
    }
    .lc-md\:text-xl {
      font-size:1.25rem;
      line-height:1.75rem
    }
    .lc-md\:leading-10 {
      line-height:2.5rem
    }
    :is(.dark .lc-md\:dark\:from-\[\#FFD873\]) {
      --tw-gradient-from:#ffd873 var(--tw-gradient-from-position);
      --tw-gradient-to:#ffd87300 var(--tw-gradient-to-position);
      --tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)
    }
    :is(.dark .lc-md\:dark\:to-\[\#FBD972\]) {
      --tw-gradient-to:#fbd972 var(--tw-gradient-to-position)
    }
    .min-\[600px\]\:grid-cols-2 {
      grid-template-columns:repeat(2,minmax(0,1fr))
    }
  }
  @media (min-width:640px) {
    .sd-sm\:mt-0 {
      margin-top:0
    }
    .sd-sm\:max-w-\[425px\] {
      max-width:425px
    }
    .sd-sm\:max-w-\[558px\] {
      max-width:558px
    }
    .sd-sm\:max-w-\[600px\] {
      max-width:600px
    }
    .sd-sm\:max-w-\[780px\] {
      max-width:780px
    }
    .sd-sm\:max-w-sm {
      max-width:24rem
    }
    .sd-sm\:flex-row {
      flex-direction:row
    }
    .sd-sm\:justify-end {
      justify-content:flex-end
    }
    .sd-sm\:space-x-2>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(.5rem*var(--tw-space-x-reverse))
    }
    .sd-sm\:space-x-4>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(1rem*var(--tw-space-x-reverse))
    }
    .sd-sm\:space-y-0>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(0px*var(--tw-space-y-reverse));
      margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
    }
    .sd-sm\:rounded-sd-lg {
      border-radius:calc(var(--sd-radius) + 5px)
    }
    .sd-sm\:rounded-sd-md {
      border-radius:var(--sd-radius)
    }
    .sd-sm\:text-left {
      text-align:left
    }
  }
  @media (min-width:680px) {
    .md\:\!absolute {
      position:absolute!important
    }
    .md\:absolute {
      position:absolute
    }
    .md\:relative {
      position:relative
    }
    .md\:sticky {
      position:sticky
    }
    .md\:-left-64 {
      left:-16rem
    }
    .md\:-left-96 {
      left:-24rem
    }
    .md\:bottom-\[200px\] {
      bottom:200px
    }
    .md\:bottom-\[31px\] {
      bottom:31px
    }
    .md\:left-0 {
      left:0
    }
    .md\:left-1\/2 {
      left:50%
    }
    .md\:left-16 {
      left:4rem
    }
    .md\:right-\[30px\] {
      right:30px
    }
    .md\:top-0 {
      top:0
    }
    .md\:top-3 {
      top:.75rem
    }
    .md\:col-span-1 {
      grid-column:span 1/span 1
    }
    .md\:col-span-2 {
      grid-column:span 2/span 2
    }
    .md\:col-start-5 {
      grid-column-start:5
    }
    .md\:m-0 {
      margin:0
    }
    .md\:mx-0 {
      margin-left:0;
      margin-right:0
    }
    .md\:mx-4 {
      margin-left:1rem;
      margin-right:1rem
    }
    .md\:mx-9 {
      margin-left:2.25rem;
      margin-right:2.25rem
    }
    .md\:my-0 {
      margin-bottom:0;
      margin-top:0
    }
    .md\:my-10 {
      margin-bottom:2.5rem;
      margin-top:2.5rem
    }
    .md\:my-\[18px\] {
      margin-bottom:18px;
      margin-top:18px
    }
    .md\:mb-0 {
      margin-bottom:0
    }
    .md\:mb-2 {
      margin-bottom:.5rem
    }
    .md\:mb-6 {
      margin-bottom:1.5rem
    }
    .md\:mb-\[35px\] {
      margin-bottom:35px
    }
    .md\:mb-\[71px\] {
      margin-bottom:71px
    }
    .md\:ml-2 {
      margin-left:.5rem
    }
    .md\:ml-2\.5 {
      margin-left:.625rem
    }
    .md\:ml-8 {
      margin-left:2rem
    }
    .md\:ml-\[28px\] {
      margin-left:28px
    }
    .md\:ml-\[6px\] {
      margin-left:6px
    }
    .md\:ml-\[8px\] {
      margin-left:8px
    }
    .md\:mr-0 {
      margin-right:0
    }
    .md\:mr-2 {
      margin-right:.5rem
    }
    .md\:mr-6 {
      margin-right:1.5rem
    }
    .md\:mr-\[60px\] {
      margin-right:60px
    }
    .md\:mt-0 {
      margin-top:0
    }
    .md\:mt-12 {
      margin-top:3rem
    }
    .md\:mt-24 {
      margin-top:6rem
    }
    .md\:mt-4 {
      margin-top:1rem
    }
    .md\:mt-6 {
      margin-top:1.5rem
    }
    .md\:mt-\[-60px\] {
      margin-top:-60px
    }
    .md\:mt-\[15px\] {
      margin-top:15px
    }
    .md\:mt-\[18px\] {
      margin-top:18px
    }
    .md\:mt-\[42px\] {
      margin-top:42px
    }
    .md\:mt-\[56px\] {
      margin-top:56px
    }
    .md\:mt-\[7px\] {
      margin-top:7px
    }
    .md\:mt-\[9px\] {
      margin-top:9px
    }
    .md\:block {
      display:block
    }
    .md\:inline {
      display:inline
    }
    .md\:flex {
      display:flex
    }
    .md\:grid {
      display:grid
    }
    .md\:hidden {
      display:none
    }
    .md\:\!h-0 {
      height:0!important
    }
    .md\:h-10 {
      height:2.5rem
    }
    .md\:h-6 {
      height:1.5rem
    }
    .md\:h-\[100px\] {
      height:100px
    }
    .md\:h-\[120px\] {
      height:120px
    }
    .md\:h-\[200px\] {
      height:200px
    }
    .md\:h-\[271px\] {
      height:271px
    }
    .md\:h-\[300px\] {
      height:300px
    }
    .md\:h-\[435px\] {
      height:435px
    }
    .md\:h-\[60px\] {
      height:60px
    }
    .md\:h-\[80px\] {
      height:80px
    }
    .md\:h-auto {
      height:auto
    }
    .md\:h-full {
      height:100%
    }
    .md\:max-h-\[135px\] {
      max-height:135px
    }
    .md\:w-10 {
      width:2.5rem
    }
    .md\:w-6 {
      width:1.5rem
    }
    .md\:w-\[120px\] {
      width:120px
    }
    .md\:w-\[200px\] {
      width:200px
    }
    .md\:w-\[208px\] {
      width:208px
    }
    .md\:w-\[252px\] {
      width:252px
    }
    .md\:w-\[272px\] {
      width:272px
    }
    .md\:w-\[400px\] {
      width:400px
    }
    .md\:w-\[433px\] {
      width:433px
    }
    .md\:w-\[480px\] {
      width:480px
    }
    .md\:w-\[500px\] {
      width:500px
    }
    .md\:w-\[60px\] {
      width:60px
    }
    .md\:w-\[80px\] {
      width:80px
    }
    .md\:w-auto {
      width:auto
    }
    .md\:w-full {
      width:100%
    }
    .md\:\!min-w-\[384px\] {
      min-width:384px!important
    }
    .md\:min-w-0,
    .md\:min-w-\[0\] {
      min-width:0
    }
    .md\:min-w-\[312px\] {
      min-width:312px
    }
    .md\:min-w-\[400px\] {
      min-width:400px
    }
    .md\:min-w-\[420px\] {
      min-width:420px
    }
    .md\:min-w-\[500px\] {
      min-width:500px
    }
    .md\:min-w-\[750px\] {
      min-width:750px
    }
    .md\:\!max-w-\[1020px\] {
      max-width:1020px!important
    }
    .md\:max-w-\[1000px\] {
      max-width:1000px
    }
    .md\:max-w-\[1020px\] {
      max-width:1020px
    }
    .md\:max-w-\[200px\] {
      max-width:200px
    }
    .md\:max-w-\[400px\] {
      max-width:400px
    }
    .md\:max-w-\[40px\] {
      max-width:40px
    }
    .md\:max-w-\[480px\] {
      max-width:480px
    }
    .md\:max-w-\[658px\] {
      max-width:658px
    }
    .md\:max-w-\[750px\] {
      max-width:750px
    }
    .md\:max-w-\[80\%\] {
      max-width:80%
    }
    .md\:max-w-\[888px\] {
      max-width:888px
    }
    .md\:max-w-\[88px\] {
      max-width:88px
    }
    .md\:max-w-none {
      max-width:none
    }
    .md\:\!translate-x-0 {
      --tw-translate-x:0px!important;
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important
    }
    .md\:-translate-x-0 {
      --tw-translate-x:-0px
    }
    .md\:-translate-x-0,
    .md\:-translate-x-1\/2 {
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
    .md\:-translate-x-1\/2 {
      --tw-translate-x:-50%
    }
    .md\:scale-100 {
      --tw-scale-x:1;
      --tw-scale-y:1;
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
    .md\:grid-cols-2 {
      grid-template-columns:repeat(2,minmax(0,1fr))
    }
    .md\:grid-cols-3 {
      grid-template-columns:repeat(3,minmax(0,1fr))
    }
    .md\:grid-cols-4 {
      grid-template-columns:repeat(4,minmax(0,1fr))
    }
    .md\:grid-cols-\[1fr 256px\] {
      grid-template-columns:1fr 256px
    }
    .md\:grid-cols-\[2fr repeat\(3 1fr\)\] {
      grid-template-columns:2fr repeat(3,1fr)
    }
    .md\:grid-cols-\[repeat\(auto-fill 200px\)\] {
      grid-template-columns:repeat(auto-fill,200px)
    }
    .md\:grid-rows-1 {
      grid-template-rows:repeat(1,minmax(0,1fr))
    }
    .md\:flex-row {
      flex-direction:row
    }
    .md\:flex-row-reverse {
      flex-direction:row-reverse
    }
    .md\:items-start {
      align-items:flex-start
    }
    .md\:items-end {
      align-items:flex-end
    }
    .md\:items-center {
      align-items:center
    }
    .md\:justify-start {
      justify-content:flex-start
    }
    .md\:justify-end {
      justify-content:flex-end
    }
    .md\:justify-between {
      justify-content:space-between
    }
    .md\:gap-3 {
      gap:.75rem
    }
    .md\:gap-5 {
      gap:1.25rem
    }
    .md\:gap-6 {
      gap:1.5rem
    }
    .md\:gap-x-4 {
      -moz-column-gap:1rem;
      column-gap:1rem
    }
    .md\:gap-y-0 {
      row-gap:0
    }
    .md\:space-x-0>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(0px*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(0px*var(--tw-space-x-reverse))
    }
    .md\:space-x-3>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(.75rem*var(--tw-space-x-reverse))
    }
    .md\:space-x-\[20px\]>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(20px*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(20px*var(--tw-space-x-reverse))
    }
    .md\:space-y-0>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(0px*var(--tw-space-y-reverse));
      margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
    }
    .md\:space-y-3>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(.75rem*var(--tw-space-y-reverse));
      margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))
    }
    .md\:space-y-3\.5>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(.875rem*var(--tw-space-y-reverse));
      margin-top:calc(.875rem*(1 - var(--tw-space-y-reverse)))
    }
    .md\:self-auto {
      align-self:auto
    }
    .md\:justify-self-center {
      justify-self:center
    }
    .md\:rounded-\[13px\] {
      border-radius:13px
    }
    .md\:rounded-lg {
      border-radius:.5rem
    }
    .md\:border-r {
      border-right-width:1px
    }
    .md\:border-none {
      border-style:none
    }
    .md\:bg-paper {
      --tw-bg-opacity:1;
      background-color:rgb(255 255 255/var(--tw-bg-opacity))
    }
    .md\:p-0 {
      padding:0
    }
    .md\:p-5 {
      padding:1.25rem
    }
    .md\:p-6 {
      padding:1.5rem
    }
    .md\:p-8 {
      padding:2rem
    }
    .md\:px-0 {
      padding-left:0;
      padding-right:0
    }
    .md\:px-2 {
      padding-left:.5rem;
      padding-right:.5rem
    }
    .md\:px-3 {
      padding-left:.75rem;
      padding-right:.75rem
    }
    .md\:px-6 {
      padding-left:1.5rem;
      padding-right:1.5rem
    }
    .md\:px-8 {
      padding-left:2rem;
      padding-right:2rem
    }
    .md\:px-\[103px\] {
      padding-left:103px;
      padding-right:103px
    }
    .md\:px-\[1px\] {
      padding-left:1px;
      padding-right:1px
    }
    .md\:px-\[24px\] {
      padding-left:24px;
      padding-right:24px
    }
    .md\:py-3 {
      padding-bottom:.75rem;
      padding-top:.75rem
    }
    .md\:py-4 {
      padding-bottom:1rem;
      padding-top:1rem
    }
    .md\:py-6 {
      padding-bottom:1.5rem;
      padding-top:1.5rem
    }
    .md\:py-\[10px\] {
      padding-bottom:10px;
      padding-top:10px
    }
    .md\:py-\[18px\] {
      padding-bottom:18px;
      padding-top:18px
    }
    .md\:pb-0 {
      padding-bottom:0
    }
    .md\:pb-11 {
      padding-bottom:2.75rem
    }
    .md\:pb-3 {
      padding-bottom:.75rem
    }
    .md\:pb-4 {
      padding-bottom:1rem
    }
    .md\:pl-10 {
      padding-left:2.5rem
    }
    .md\:pl-\[18px\] {
      padding-left:18px
    }
    .md\:pr-8 {
      padding-right:2rem
    }
    .md\:pr-\[22px\] {
      padding-right:22px
    }
    .md\:pt-0 {
      padding-top:0
    }
    .md\:pt-2 {
      padding-top:.5rem
    }
    .md\:pt-4 {
      padding-top:1rem
    }
    .md\:pt-5 {
      padding-top:1.25rem
    }
    .md\:pt-\[16px\] {
      padding-top:16px
    }
    .md\:pt-\[24px\] {
      padding-top:24px
    }
    .md\:text-left {
      text-align:left
    }
    .md\:text-4xl {
      font-size:2.25rem;
      line-height:2.5rem
    }
    .md\:text-\[26px\] {
      font-size:26px
    }
    .md\:text-\[40px\] {
      font-size:40px
    }
    .md\:text-base {
      font-size:1rem;
      line-height:1.5rem
    }
    .md\:text-lg {
      font-size:1.125rem;
      line-height:1.75rem
    }
    .md\:text-sm {
      font-size:.875rem;
      line-height:1.25rem
    }
    .md\:text-xl {
      font-size:1.25rem;
      line-height:1.75rem
    }
    .md\:display-none {
      display:none
    }
    .md\:last\:mr-0:last-child {
      margin-right:0
    }
    .last\:md\:pr-0:last-child {
      padding-right:0
    }
    .md\:even\:mr-5:nth-child(2n) {
      margin-right:1.25rem
    }
    .md\:hover\:bg-blue-0:hover {
      background-color:#007aff14
    }
    .md\:hover\:text-blue-s:hover {
      --tw-text-opacity:1;
      color:rgb(0 122 255/var(--tw-text-opacity))
    }
    :is(.dark .md\:dark\:bg-dark-paper) {
      --tw-bg-opacity:1;
      background-color:rgb(28 28 28/var(--tw-bg-opacity))
    }
    :is(.dark .md\:dark\:hover\:bg-dark-blue-0:hover) {
      background-color:#0a84ff2e
    }
    :is(.dark .md\:dark\:hover\:text-dark-blue-s:hover) {
      --tw-text-opacity:1;
      color:rgb(10 132 255/var(--tw-text-opacity))
    }
  }
  @media (min-width:768px) {
    .sd-md\:absolute {
      position:absolute
    }
    .sd-md\:grid {
      display:grid
    }
    .sd-md\:w-\[var\(--radix-navigation-menu-viewport-width\)\] {
      width:var(--radix-navigation-menu-viewport-width)
    }
    .sd-md\:w-auto {
      width:auto
    }
    .sd-md\:w-full {
      width:100%
    }
  }
  @media (min-width:840px) {
    .lc-lg\:-left-1 {
      left:-.25rem
    }
    .lc-lg\:-right-1 {
      right:-.25rem
    }
    .lc-lg\:left-6 {
      left:1.5rem
    }
    .lc-lg\:order-1 {
      order:1
    }
    .lc-lg\:order-none {
      order:0
    }
    .lc-lg\:mx-8 {
      margin-left:2rem;
      margin-right:2rem
    }
    .lc-lg\:-mt-20 {
      margin-top:-5rem
    }
    .lc-lg\:ml-4 {
      margin-left:1rem
    }
    .lc-lg\:ml-\[112px\] {
      margin-left:112px
    }
    .lc-lg\:mt-0 {
      margin-top:0
    }
    .lc-lg\:mt-3 {
      margin-top:.75rem
    }
    .lc-lg\:mt-8 {
      margin-top:2rem
    }
    .lc-lg\:mt-\[346px\] {
      margin-top:346px
    }
    .lc-lg\:block {
      display:block
    }
    .lc-lg\:flex {
      display:flex
    }
    .lc-lg\:hidden {
      display:none
    }
    .lc-lg\:h-20 {
      height:5rem
    }
    .lc-lg\:h-4 {
      height:1rem
    }
    .lc-lg\:h-5 {
      height:1.25rem
    }
    .lc-lg\:h-6 {
      height:1.5rem
    }
    .lc-lg\:h-\[400px\] {
      height:400px
    }
    .lc-lg\:min-h-\[312px\] {
      min-height:312px
    }
    .lc-lg\:w-20 {
      width:5rem
    }
    .lc-lg\:w-4 {
      width:1rem
    }
    .lc-lg\:w-5 {
      width:1.25rem
    }
    .lc-lg\:w-6 {
      width:1.5rem
    }
    .lc-lg\:w-\[200px\] {
      width:200px
    }
    .lc-lg\:w-\[240px\] {
      width:240px
    }
    .lc-lg\:w-\[266px\] {
      width:266px
    }
    .lc-lg\:w-\[300px\] {
      width:300px
    }
    .lc-lg\:w-\[382px\] {
      width:382px
    }
    .lc-lg\:w-\[40\%\] {
      width:40%
    }
    .lc-lg\:w-\[60\%\] {
      width:60%
    }
    .lc-lg\:w-auto {
      width:auto
    }
    .lc-lg\:max-w-\[1004px\] {
      max-width:1004px
    }
    .lc-lg\:max-w-\[262px\] {
      max-width:262px
    }
    .lc-lg\:max-w-\[650px\] {
      max-width:650px
    }
    .lc-lg\:max-w-\[calc\(100\%_-_316px\)\] {
      max-width:calc(100% - 316px)
    }
    .lc-lg\:max-w-none {
      max-width:none
    }
    .lc-lg\:max-w-screen-xl {
      max-width:1200px
    }
    .lc-lg\:flex-\[0\.75\] {
      flex:0.75
    }
    .lc-lg\:-translate-y-8 {
      --tw-translate-y:-2rem
    }
    .lc-lg\:-translate-y-8,
    .lc-lg\:translate-y-16 {
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
    .lc-lg\:translate-y-16 {
      --tw-translate-y:4rem
    }
    .lc-lg\:flex-row {
      flex-direction:row
    }
    .lc-lg\:flex-col {
      flex-direction:column
    }
    .lc-lg\:items-start {
      align-items:flex-start
    }
    .lc-lg\:items-center {
      align-items:center
    }
    .lc-lg\:justify-normal {
      justify-content:normal
    }
    .lc-lg\:justify-center {
      justify-content:center
    }
    .lc-lg\:gap-10 {
      gap:2.5rem
    }
    .lc-lg\:gap-12 {
      gap:3rem
    }
    .lc-lg\:gap-14 {
      gap:3.5rem
    }
    .lc-lg\:gap-16 {
      gap:4rem
    }
    .lc-lg\:gap-25 {
      gap:6.25rem
    }
    .lc-lg\:gap-4 {
      gap:1rem
    }
    .lc-lg\:gap-6 {
      gap:1.5rem
    }
    .lc-lg\:gap-8 {
      gap:2rem
    }
    .lc-lg\:space-x-12>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(3rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(3rem*var(--tw-space-x-reverse))
    }
    .lc-lg\:space-x-4>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(1rem*var(--tw-space-x-reverse))
    }
    .lc-lg\:space-y-0>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(0px*var(--tw-space-y-reverse));
      margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
    }
    .lc-lg\:overflow-hidden {
      overflow:hidden
    }
    .lc-lg\:px-0 {
      padding-left:0;
      padding-right:0
    }
    .lc-lg\:px-6 {
      padding-left:1.5rem;
      padding-right:1.5rem
    }
    .lc-lg\:px-\[114px\] {
      padding-left:114px;
      padding-right:114px
    }
    .lc-lg\:px-\[48px\] {
      padding-left:48px;
      padding-right:48px
    }
    .lc-lg\:px-\[97px\] {
      padding-left:97px;
      padding-right:97px
    }
    .lc-lg\:py-0 {
      padding-bottom:0;
      padding-top:0
    }
    .lc-lg\:py-20 {
      padding-bottom:5rem;
      padding-top:5rem
    }
    .lc-lg\:py-5 {
      padding-bottom:1.25rem;
      padding-top:1.25rem
    }
    .lc-lg\:pb-40 {
      padding-bottom:10rem
    }
    .lc-lg\:pl-8 {
      padding-left:2rem
    }
    .lc-lg\:pt-0 {
      padding-top:0
    }
    .lc-lg\:pt-16 {
      padding-top:4rem
    }
    .lc-lg\:pt-2 {
      padding-top:.5rem
    }
    .lc-lg\:pt-2\.5 {
      padding-top:.625rem
    }
    .lc-lg\:pt-20 {
      padding-top:5rem
    }
    .lc-lg\:pt-6 {
      padding-top:1.5rem
    }
    .lc-lg\:text-start {
      text-align:start
    }
    .lc-lg\:text-2xl {
      font-size:1.5rem;
      line-height:2rem
    }
    .lc-lg\:text-4xl {
      font-size:2.25rem;
      line-height:2.5rem
    }
    .lc-lg\:text-\[16px\] {
      font-size:16px
    }
    .lc-lg\:text-\[36px\] {
      font-size:36px
    }
    .lc-lg\:text-\[60px\] {
      font-size:60px
    }
    .lc-lg\:text-base {
      font-size:1rem;
      line-height:1.5rem
    }
    .lc-lg\:text-lg {
      font-size:1.125rem;
      line-height:1.75rem
    }
    .lc-lg\:text-xl {
      font-size:1.25rem;
      line-height:1.75rem
    }
    .lc-lg\:leading-\[24px\] {
      line-height:24px
    }
    .lc-lg\:leading-\[44px\] {
      line-height:44px
    }
  }
  @media (min-width:900px) {
    .min-\[900px\]\:grid-cols-3 {
      grid-template-columns:repeat(3,minmax(0,1fr))
    }
  }
  @media (min-width:920px) {
    .lg\:-left-96 {
      left:-24rem
    }
    .lg\:left-0 {
      left:0
    }
    .lg\:left-6 {
      left:1.5rem
    }
    .lg\:right-6 {
      right:1.5rem
    }
    .lg\:col-span-3 {
      grid-column:span 3/span 3
    }
    .lg\:mb-0 {
      margin-bottom:0
    }
    .lg\:mr-2 {
      margin-right:.5rem
    }
    .lg\:mr-\[24px\] {
      margin-right:24px
    }
    .lg\:block {
      display:block
    }
    .lg\:inline-block {
      display:inline-block
    }
    .lg\:flex {
      display:flex
    }
    .lg\:hidden {
      display:none
    }
    .lg\:w-\[500px\] {
      width:500px
    }
    .lg\:w-\[600px\] {
      width:600px
    }
    .lg\:max-w-\[1000px\] {
      max-width:1000px
    }
    .lg\:max-w-\[1046px\] {
      max-width:1046px
    }
    .lg\:max-w-none {
      max-width:none
    }
    .lg\:max-w-screen-xl {
      max-width:1200px
    }
    .lg\:-translate-x-0 {
      --tw-translate-x:-0px;
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
    .lg\:grid-cols-4 {
      grid-template-columns:repeat(4,minmax(0,1fr))
    }
    .lg\:grid-cols-5 {
      grid-template-columns:repeat(5,minmax(0,1fr))
    }
    .lg\:grid-cols-\[\.75fr_1fr\] {
      grid-template-columns:.75fr 1fr
    }
    .lg\:grid-cols-\[1fr 300px\] {
      grid-template-columns:1fr 300px
    }
    .lg\:gap-6 {
      gap:1.5rem
    }
    .lg\:space-x-2>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(.5rem*var(--tw-space-x-reverse))
    }
    .lg\:space-x-8>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(2rem*var(--tw-space-x-reverse))
    }
    .lg\:space-y-0>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(0px*var(--tw-space-y-reverse));
      margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
    }
    .lg\:pr-4 {
      padding-right:1rem
    }
    .lg\:text-2xl {
      font-size:1.5rem;
      line-height:2rem
    }
    .lg\:leading-none {
      line-height:1
    }
    .min-\[920px\]\:bottom-\[160px\] {
      bottom:160px
    }
    .min-\[920px\]\:w-\[17\%\] {
      width:17%
    }
    .min-\[920px\]\:w-\[23\%\] {
      width:23%
    }
    .min-\[920px\]\:rotate-\[9\.054deg\] {
      --tw-rotate:9.054deg;
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
  }
  @media (min-width:1024px) {
    .sd-lg\:col-span-1 {
      grid-column:span 1/span 1
    }
    .sd-lg\:col-span-2 {
      grid-column:span 2/span 2
    }
    .sd-lg\:grid-cols-2 {
      grid-template-columns:repeat(2,minmax(0,1fr))
    }
  }
  @media (min-width:1100px) {
    .min-\[1100px\]\:py-\[63px\] {
      padding-bottom:63px;
      padding-top:63px
    }
  }
  @media (min-width:1200px) {
    .lc-xl\:left-0 {
      left:0
    }
    .lc-xl\:right-3 {
      right:.75rem
    }
    .lc-xl\:order-1 {
      order:1
    }
    .lc-xl\:mx-16 {
      margin-left:4rem;
      margin-right:4rem
    }
    .lc-xl\:mx-8 {
      margin-left:2rem;
      margin-right:2rem
    }
    .lc-xl\:mt-\[39px\] {
      margin-top:39px
    }
    .lc-xl\:block {
      display:block
    }
    .lc-xl\:inline {
      display:inline
    }
    .lc-xl\:flex {
      display:flex
    }
    .lc-xl\:hidden {
      display:none
    }
    .lc-xl\:h-\[186px\] {
      height:186px
    }
    .lc-xl\:w-\[100px\] {
      width:100px
    }
    .lc-xl\:w-\[313px\] {
      width:313px
    }
    .lc-xl\:w-\[70px\] {
      width:70px
    }
    .lc-xl\:min-w-\[226px\] {
      min-width:226px
    }
    .lc-xl\:max-w-\[228px\] {
      max-width:228px
    }
    .lc-xl\:flex-none {
      flex:none
    }
    .lc-xl\:-translate-y-16 {
      --tw-translate-y:-4rem;
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
    .lc-xl\:flex-row {
      flex-direction:row
    }
    .lc-xl\:items-start {
      align-items:flex-start
    }
    .lc-xl\:items-end {
      align-items:flex-end
    }
    .lc-xl\:justify-start {
      justify-content:flex-start
    }
    .lc-xl\:justify-center {
      justify-content:center
    }
    .lc-xl\:justify-between {
      justify-content:space-between
    }
    .lc-xl\:gap-10 {
      gap:2.5rem
    }
    .lc-xl\:gap-\[112px\] {
      gap:112px
    }
    .lc-xl\:space-x-0>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(0px*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(0px*var(--tw-space-x-reverse))
    }
    .lc-xl\:space-x-4>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(1rem*var(--tw-space-x-reverse))
    }
    .lc-xl\:space-x-6>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse:0;
      margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));
      margin-right:calc(1.5rem*var(--tw-space-x-reverse))
    }
    .lc-xl\:space-y-0>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse:0;
      margin-bottom:calc(0px*var(--tw-space-y-reverse));
      margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))
    }
    .lc-xl\:overflow-visible {
      overflow:visible
    }
    .lc-xl\:px-0 {
      padding-left:0;
      padding-right:0
    }
    .lc-xl\:py-40 {
      padding-bottom:10rem;
      padding-top:10rem
    }
    .min-\[1200px\]\:grid-cols-4 {
      grid-template-columns:repeat(4,minmax(0,1fr))
    }
  }
  @media (min-width:1280px) {
    .sd-xl\:col-span-1 {
      grid-column:span 1/span 1
    }
    .sd-xl\:grid-cols-1 {
      grid-template-columns:repeat(1,minmax(0,1fr))
    }
    .sd-xl\:grid-cols-3 {
      grid-template-columns:repeat(3,minmax(0,1fr))
    }
  }
  @media (min-width:1000px) {
    .\[\@media\(min-width\:1000px\)\]\:inline-block {
      display:inline-block
    }
  }
  @media (min-width:1200px) {
    .\[\@media\(min-width\:1200px\)\]\:last\:inline-block:last-child {
      display:inline-block
    }
  }
  @media (min-width:478px) {
    .\[\@media\(min-width\:478px\)\]\:flex-row {
      flex-direction:row
    }
  }
  @media (min-width:991px) {
    .\[\@media\(min-width\:991px\)\]\:inline-block {
      display:inline-block
    }
  }
  .written-exam-page img {
    display:inline-block
  }
  .written-exam-page .banner-com .swiper-pagination {
    bottom:10px;
    height:20px;
    position:absolute;
    text-align:center;
    width:100%;
    z-index:20
  }
  .written-exam-page .banner-com .swiper-pagination:hover {
    transform:scale(2);
    transition:all .3s
  }
  .written-exam-page .banner-com .swiper-pagination .swiper-pagination-bullet {
    background-color:#000;
    border-radius:100px;
    cursor:pointer;
    display:inline-block;
    height:3px;
    margin:0 4px;
    opacity:.2;
    width:24px
  }
  .written-exam-page .banner-com .swiper-pagination .swiper-pagination-bullet-active {
    opacity:1
  }
  .written-exam-page .com-modal {
    background-color:#fff!important
  }
  :is(.dark .written-exam-page .com-modal) {
    --tw-bg-opacity:1;
    background-color:rgb(42 42 42/var(--tw-bg-opacity))
  }
  .written-exam-page .com-modal button {
    height:32px;
    width:32px
  }
  .written-exam-page .com-modal button:hover {
    background-color:#00000008
  }
  :is(.dark .written-exam-page .com-modal button:hover) {
    background-color:#ffffff14
  }
  .written-exam-page .com-modal svg {
    height:16px;
    margin:auto;
    width:16px
  }
  .flexlayout__layout {
    --color-drag:var(--blue-60);
    --color-drag-background:#007aff14;
    --color-tabset-background:var(--layer-01);
    --color-tabset-tabbar-background:var(--fill-quaternary);
    --color-tabset-tabbar-background-fixed:#fafafa;
    --color-tabset-border:var(--border-secondary);
    --color-tab-divider:var(--border-tertiary);
    --color-tab-hover-background:var(--fill-tertiary);
    --color-tab-hover-background-fixed:#f0f0f0;
    --color-tab-selected:var(--text-primary);
    --color-tab-selected-background:#0000;
    --color-tab-unselected:var(--text-secondary);
    --color-tab-unselected-background:#0000;
    --color-tab-close-background:var(--fill-tertiary);
    --color-tab-close-icon:var(--gray-60);
    --color-tab-close-icon-hover:var(--gray-60);
    --color-splitter:var(--border-tertiary);
    --color-splitter-hover:var(--blue-60);
    --color-splitter-drag:var(--blue-60);
    --color-drag-rect-border:var(--border-tertiary);
    --color-drag-rect-background:var(--layer-02);
    --color-drag-rect:var(--text-primary);
    --color-edge-marker:var(--blue-60)
  }
  html.dark .flexlayout__layout {
    --color-drag-background:#1a90ff14;
    --color-tabset-tabbar-background-fixed:#333;
    --color-tab-hover-background-fixed:#434343
  }
  .flexlayout__tabset_highlight {
    --color-highlight-rgb:0,122,255
  }
  html.dark .flexlayout__tabset_highlight {
    --color-highlight-rgb:26,144,255
  }
  .flexlayout__layout {
    bottom:0;
    left:0;
    overflow:hidden;
    position:absolute;
    right:0;
    top:0
  }
  .flexlayout__splitter {
    background-color:initial
  }
  .flexlayout__splitter:after {
    background-color:var(--color-splitter);
    border-radius:2px;
    content:"";
    height:2px;
    left:50%;
    position:absolute;
    top:50%;
    transform:translate(-50%,-50%);
    width:2px
  }
  .flexlayout__splitter.flexlayout__splitter_horz:after {
    width:20px
  }
  .flexlayout__splitter.flexlayout__splitter_vert:after {
    height:20px
  }
  @media (hover:hover) {
    .flexlayout__splitter:hover:after {
      background-color:var(--color-splitter-hover)
    }
    .flexlayout__splitter.flexlayout__splitter_horz:hover:after {
      width:100%
    }
    .flexlayout__splitter.flexlayout__splitter_vert:hover:after {
      height:100%
    }
  }
  .flexlayout__splitter_border {
    z-index:10
  }
  .flexlayout__splitter_drag {
    z-index:1000
  }
  .flexlayout__splitter_drag:after {
    background-color:var(--color-splitter-drag);
    border-radius:2px;
    content:"";
    height:2px;
    left:50%;
    position:absolute;
    top:50%;
    transform:translate(-50%,-50%);
    width:2px
  }
  .flexlayout__splitter_drag_horz:after {
    width:100%
  }
  .flexlayout__splitter_drag_vert:after {
    height:100%
  }
  .flexlayout__splitter_extra {
    background-color:initial
  }
  .flexlayout__outline_rect {
    position:absolute
  }
  .flexlayout__outline_rect,
  .flexlayout__outline_rect_edge {
    background:var(--color-drag-background);
    border:1px solid var(--color-drag);
    border-radius:8px;
    box-sizing:border-box;
    pointer-events:none;
    z-index:1000
  }
  .flexlayout__edge_rect {
    background-color:var(--color-edge-marker);
    pointer-events:none;
    position:absolute;
    z-index:1000
  }
  .flexlayout__drag_rect {
    word-wrap:break-word;
    background-color:var(--color-drag-rect-background);
    border:1px solid var(--color-drag-rect-border);
    border-radius:5px;
    box-sizing:border-box;
    color:var(--color-drag-rect);
    cursor:move;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-weight:500;
    justify-content:center;
    line-height:16px;
    opacity:1;
    overflow:hidden;
    padding:4px 8px;
    position:absolute;
    text-align:center;
    z-index:1000
  }
  .flexlayout__drag_rect .normal {
    display:none
  }
  .flexlayout__tabset {
    background-color:var(--color-tabset-background);
    border-radius:8px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column
  }
  .flexlayout__tabset-active:after {
    border:1px solid var(--color-tabset-border);
    border-radius:8px;
    content:"";
    display:block;
    inset:0 0 0 0;
    pointer-events:none;
    position:absolute;
    z-index:3
  }
  @keyframes tabset-highlight {
    0% {
      border:2px solid rgba(var(--color-highlight-rgb),0);
      outline:0 solid rgba(var(--color-highlight-rgb),.2)
    }
    33% {
      border:2px solid rgba(var(--color-highlight-rgb),1);
      outline:5px solid rgba(var(--color-highlight-rgb),.2)
    }
    66% {
      border:2px solid rgba(var(--color-highlight-rgb),1);
      outline:5px solid rgba(var(--color-highlight-rgb),.2)
    }
    to {
      border:2px solid rgba(var(--color-highlight-rgb),0);
      outline:0 solid rgba(var(--color-highlight-rgb),.2)
    }
  }
  .flexlayout__tabset_highlight {
    animation:tabset-highlight 1.5s ease-in-out;
    border-radius:8px;
    pointer-events:none;
    z-index:3
  }
  .flexlayout__tabset-overflowed .flexlayout__tabset_tabbar_inner {
    border-radius:8px;
    position:relative
  }
  .flexlayout__tabset-overflowed .flexlayout__tabset_tabbar_inner:after {
    background:linear-gradient(270deg,var(--color-tabset-tabbar-background-fixed) 33.3%,#0000 100%);
    content:"";
    display:block;
    height:100%;
    pointer-events:none;
    position:absolute;
    right:0;
    top:0;
    width:32px
  }
  .flexlayout__tabset-left-tabs-hidden .flexlayout__tabset_tabbar_inner {
    position:relative
  }
  .flexlayout__tabset-left-tabs-hidden .flexlayout__tabset_tabbar_inner:before {
    background:linear-gradient(90deg,var(--color-tabset-tabbar-background-fixed) 33.3%,#0000 100%);
    border-radius:8px 0 0 0;
    content:"";
    display:block;
    height:100%;
    left:0;
    pointer-events:none;
    position:absolute;
    top:0;
    width:32px;
    z-index:1
  }
  .flexlayout__tabset_tab_divider {
    width:1px
  }
  .flexlayout__tabset_content {
    align-items:center;
    display:flex;
    flex-grow:1;
    justify-content:center
  }
  .flexlayout__tabset_tabbar_outer {
    background-color:var(--color-tabset-tabbar-background);
    border-radius:8px 8px 0 0;
    box-sizing:border-box;
    cursor:pointer;
    display:flex
  }
  .flexlayout__tabset_tabbar_outer_rotate {
    background-color:var(--color-tabset-background);
    border-radius:8px;
    margin-top:-36px;
    transform:rotate(90deg);
    transform-origin:0 36px;
    z-index:2
  }
  .flexlayout__tabset_tabbar_inner {
    box-sizing:border-box;
    display:flex;
    flex-grow:1;
    overflow:hidden;
    position:relative
  }
  .flexlayout__tabset_tabbar_inner_tab_container {
    bottom:0;
    box-sizing:border-box;
    display:flex;
    padding:4px;
    position:absolute;
    top:0;
    width:10000px
  }
  .flexlayout__tab {
    border-radius:0 0 8px 8px;
    border-top:none;
    box-sizing:border-box;
    height:var(--height);
    overflow:auto;
    position:absolute;
    width:var(--width)
  }
  .flexlayout__tab>* {
    min-width:400px
  }
  .flexlayout__tab_button {
    align-items:center;
    border-radius:5px;
    box-sizing:border-box;
    cursor:pointer;
    display:flex;
    padding:4px 8px;
    position:relative
  }
  .flexlayout__tab_button:before {
    background:var(--color-tab-divider);
    content:"";
    display:block;
    height:12px;
    left:-1px;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:1px
  }
  .flexlayout__tab_button:first-child:before,
  .flexlayout__tab_button:hover+.flexlayout__tabset_tab_divider+.flexlayout__tab_button:before,
  .flexlayout__tab_button:hover:before {
    display:none
  }
  .flexlayout__tab_button--selected {
    background-color:var(--color-tab-selected-background);
    color:var(--color-tab-selected);
    font-weight:500
  }
  .flexlayout__tab_button--selected .normal {
    display:none
  }
  @media (hover:hover) {
    .flexlayout__tab_button:hover {
      background-color:var(--color-tab-hover-background)
    }
    .flexlayout__tab_button:hover .flexlayout__tab_button_truncate {
      background:linear-gradient(270deg,var(--color-tab-hover-background-fixed) 6.25%,#0000 100%)
    }
  }
  .flexlayout__tab_button--unselected {
    background-color:var(--color-tab-unselected-background);
    color:var(--color-tab-unselected)
  }
  .flexlayout__tab_button--unselected .flexlayout__tab_button_content svg {
    opacity:.4
  }
  .flexlayout__tab_button--unselected .medium {
    opacity:0
  }
  .flexlayout__tab_button--closable {
    padding-right:4px
  }
  .flexlayout__tab_button--closable .flexlayout__tab_button_content {
    margin-right:4px
  }
  .flexlayout__tab_button_content,
  .flexlayout__tab_button_leading {
    display:flex
  }
  .flexlayout__tab_button_trailing {
    border-radius:3px;
    color:var(--color-tab-close-icon);
    display:flex;
    margin-right:2px
  }
  .flexlayout__tab_button_trailing:hover {
    background-color:var(--color-tab-close-background);
    color:var(--color-tab-close-icon-hover)
  }
  .flexlayout__tab_button_overflow,
  .flexlayout__tab_toolbar_button-max,
  .flexlayout__tab_toolbar_button-min {
    display:none
  }
  .flexlayout__tab_button_truncate {
    background:linear-gradient(270deg,var(--color-tabset-tabbar-background-fixed) 6.25%,#0000 100%);
    height:100%;
    position:absolute;
    right:0;
    top:0;
    width:16px
  }
  .flexlayout__tab_toolbar {
    align-items:center;
    display:flex;
    gap:4px;
    padding-left:4px;
    padding-right:4px
  }
  .flexlayout__tabset_tabbar_hover_show_toolbar .flexlayout__tab_toolbar {
    display:none
  }
  .flexlayout__tabset_tabbar_hover_show_toolbar:hover .flexlayout__tab_toolbar {
    display:flex
  }
  .flexlayout__error_boundary_container {
    bottom:0;
    display:flex;
    justify-content:center;
    left:0;
    position:absolute;
    right:0;
    top:0
  }
  .flexlayout__error_boundary_content {
    align-items:center;
    display:flex
  }
  .flexlayout__tabset_sizer {
    height:36px
  }
  .nav-li-after:after {
    background-color:#1a1a1a;
    bottom:0;
    content:"";
    height:2px;
    left:0;
    position:absolute;
    width:100%
  }
  html.dark .nav-li-after:after {
    background-color:#f5f5f5
  }
  .mde-editor .EasyMDEContainer .CodeMirror {
    border:none;
    height:100%
  }
  .mde-editor .editor-preview blockquote {
    --tw-border-opacity:1;
    --tw-text-opacity:1;
    border-color:rgb(229 229 229/var(--tw-border-opacity));
    border-left-width:4px;
    color:rgb(140 140 140/var(--tw-text-opacity));
    padding-left:.5rem;
    padding-right:.5rem
  }
  :is(.dark .mde-editor .editor-preview blockquote) {
    --tw-border-opacity:1;
    --tw-text-opacity:1;
    border-color:rgb(66 66 66/var(--tw-border-opacity));
    color:rgb(138 138 138/var(--tw-text-opacity))
  }
  .mde-editor .EasyMDEContainer {
    height:100%
  }
  .dark .CodeMirror {
    --tw-bg-opacity:1;
    --tw-text-opacity:1;
    background-color:rgb(40 40 40/var(--tw-bg-opacity));
    color:rgb(255 255 255/var(--tw-text-opacity))
  }
  .dark .CodeMirror-selected {
    background-color:#0a84ff40!important
  }
  .dark .cm-s-easymde .CodeMirror-cursor {
    --tw-border-opacity:1;
    border-color:rgb(255 255 255/var(--tw-border-opacity))
  }
  .dark .editor-toolbar button:hover {
    --tw-bg-opacity:1;
    background-color:rgb(138 138 138/var(--tw-bg-opacity))
  }
  .cm-s-easymde .cm-comment,
  .dark .editor-preview,
  .dark .editor-toolbar>.active,
  .editor-preview pre,
  .editor-toolbar>button:hover {
    --tw-bg-opacity:1;
    background-color:rgb(28 28 28/var(--tw-bg-opacity))
  }
  .dark .mde-editor.no-background .CodeMirror,
  .mde-editor.no-background .CodeMirror {
    background-color:initial
  }
  .prism-player .prism-big-play-btn {
    z-index:20!important
  }
  .katex-html {
    overflow:unset!important
  }
  
  .card{
    width: 420px;
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
