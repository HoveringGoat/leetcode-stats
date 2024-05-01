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
    src:url("data:application/font-woff;charset=utf-8;base64, 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")
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
  .card{
    width: 420px;
  }
  

  </style>
  <foreignObject x="0" y="0" width="400" height="186">
    <div xmlns="http://www.w3.org/1999/xhtml" class="min-w-max max-w-full w-full flex-1">
      <div
        class="shadow-level3 dark:shadow-dark-level3 bg-layer-1 dark:bg-dark-layer-1 rounded-lg min-h-[186px] w-full pt-4 pb-3 lc-xl:h-[186px]">
        <div class="px-[13px] text-xs font-medium text-label-3 dark:text-dark-label-3">Solved Problems</div>
        <div class="mx-3 flex items-center lc-xl:mx-8">
          <div class="mr-8 mt-6 flex min-w-[100px] justify-center">
            <div class="shrink-1 relative max-h-[100px] max-w-[100px] z-base">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
                <div>
                  <div class="text-[24px] font-medium text-label-1 dark:text-dark-label-1">${acSubmissionNum[0].count}</div>
                  <div class="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">Solved</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full flex-col space-y-4 lc-xl:max-w-[228px]">
            <div class="space-y-2">
              <div class="flex w-full items-end text-xs">
                <div class="w-[53px] text-label-3 dark:text-dark-label-3">Easy</div>
                <div class="flex flex-1 items-center"><span
                    class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">${acSubmissionNum[1].count}</span><span
                    class="text-xs font-medium text-label-4 dark:text-dark-label-4">/${allQuestionsCount[1].count}</span></div>
                <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3"><span
                    class="space-x-1.5"><span>Beats</span><span
                      class="font-medium text-label-2 dark:text-dark-label-2">${acSubmissionNum[0].count * 100.0}%</span></span></div>
              </div>
              <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                <div class="absolute h-full w-full bg-green-1 dark:bg-dark-green-1"></div>
                <div
                  class="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive"
                  style="width: ${acSubmissionNum[1].count * 100.0}%;"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex w-full items-end text-xs">
                <div class="w-[53px] text-label-3 dark:text-dark-label-3">Medium</div>
                <div class="flex flex-1 items-center"><span
                    class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">${acSubmissionNum[2].count}</span><span
                    class="text-xs font-medium text-label-4 dark:text-dark-label-4">/${allQuestionsCount[2].count}</span></div>
                <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3"><span
                    class="space-x-1.5"><span>Beats</span><span
                      class="font-medium text-label-2 dark:text-dark-label-2">${acSubmissionNum[1].count *100.0}%</span></span></div>
              </div>
              <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                <div class="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1"></div>
                <div
                  class="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow"
                  style="width: ${acSubmissionNum[2].count * 100.0}%;"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex w-full items-end text-xs">
                <div class="w-[53px] text-label-3 dark:text-dark-label-3">Hard</div>
                <div class="flex flex-1 items-center"><span
                    class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">${acSubmissionNum[3].count}</span><span
                    class="text-xs font-medium text-label-4 dark:text-dark-label-4">/${allQuestionsCount[3].count}</span></div>
                <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3"><span
                    class="space-x-1.5"><span>Beats</span><span
                      class="font-medium text-label-2 dark:text-dark-label-2">${acSubmissionNum[2].count * 100.0}%</span></span></div>
              </div>
              <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                <div class="absolute h-full w-full bg-red-1 dark:bg-dark-red-1"></div>
                <div
                  class="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s"
                  style="width: ${acSubmissionNum[3].count *100.0}%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </foreignObject>
</svg>`;
