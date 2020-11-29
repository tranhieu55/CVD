import React from "react"
import BannerCaseStudy from "./BannerCaseStudy"
import BannerHome from "./BannerHome"
import BannerProjects from "./BannerProjects"
import BannerWhatWeDo from "./BannerWhatWeDo"

function Banner({
  location,
  listCategoryOurWork,
  nameProject,
  logoProject,
  nameCategoryOfWorkItem,
  descriptionOfWorkItem,
  backgroundWorkItemSrc,
  backgroundWorkItemAlt,
}) {

  switch (location) {
    case "/":
      return <BannerHome />
    case "/projects":
      return <BannerProjects listCategoryOurWork={listCategoryOurWork} />

    case "/case-study":
      return (
        <BannerCaseStudy
          nameProject={nameProject}
          logoProject={logoProject}
          nameCategoryOfWorkItem={nameCategoryOfWorkItem}
          descriptionOfWorkItem={descriptionOfWorkItem}
          backgroundWorkItemSrc={backgroundWorkItemSrc}
          backgroundWorkItemAlt={backgroundWorkItemAlt}
        />
      )
    case "/we-do":
      return <BannerWhatWeDo />
    default:
      return ""
  }
}
export default Banner
