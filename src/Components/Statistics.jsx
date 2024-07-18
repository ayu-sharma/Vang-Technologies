import React from 'react'
import { useTranslation } from 'react-i18next';
function Statistics() {
  const { t } = useTranslation();
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 pb-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2016</h2>
        <p class="leading-relaxed">{t("statistics_p1")}</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">100%</h2>
        <p class="leading-relaxed">{t("statistics_p2")}</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">500+</h2>
        <p class="leading-relaxed">{t("statistics_p3")}</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">7</h2>
        <p class="leading-relaxed">{t("statistics_p4")}</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Statistics