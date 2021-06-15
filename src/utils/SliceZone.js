import React from "react"
import BigText from "../components/slices/BigText"
import WhatWeDo from "../components/slices/Homepage/WhatWeDo/WhatWeDo"
import BigImage from "../components/slices/BigImage"
import {
  TextWithBulletList,
  HalfWidthText,
  ImageWithSideText,
} from "../components/slices/Service"

import ProjectTiles from "../components/slices/projects/list/ProjectTiles"
import CTA from "../components/slices/CTA"
import TextBackground from "../components/OurWoorkDetails/TextBackground"
import ImageSlider from "../components/OurWoorkDetails/ImageSlider"
import TextSolution from "../components/OurWoorkDetails/TextSolution"
import ContentPercent from "../components/OurWoorkDetails/ContentPercent"
import ListSlider from "../components/OurWoorkDetails/ListSlider"
import TextQoute from "../components/OurWoorkDetails/TextQoute"
import Cardwhatwedo from "../components/Whatwedo"
import OneImage from "../components/OurWoorkDetails/OneImage"
import Instagram from "../components/slices/Homepage/Instargram"
import OurServicesss from "../components/slices/Homepage/OurService/index"
import OurLaster from "../components/slices/Homepage/OurLaster/index"
import TwoColumA from "../components/ColumCaseStudy/TwoColumA"
import TwoColumB from "../components/ColumCaseStudy/TwoColumB"
import TwoColumC from "../components/ColumCaseStudy/TwoColumC"
import ThreeColum from "../components/ColumCaseStudy/ThreeColum"
import FullColum from "../components/ColumCaseStudy/ColumFullA"
import ColumSilder from "../components/ColumCaseStudy/ColumSilder"
import FormSumits from "../components/Contact/FormSubmit/index"
import Derection from "../components/Contact/Derection/index"
import OurWorkProjects from "../components/OurWorkProjects/index"
import CardPartners from "../components/CardPartners"
import CardPageBlog from "../components/CardPageBlog"
import TrustLogosBlock from "../components/TrustLogosBlock"
import ColumTestimonial from "../components/ColumTestimonial/index"
import BlogArticleTiles from "../components/BlogArticleTiles"
import TwoColumnText from "../components/ColumnText"
import ThreeColumnProfile from "../components/ThreeColumnProfile"
import PartnerFeatureTile from "../components/PartnerFeatureTile"
import SliderIntagram from "../components/SilderIntagram"
import ClientLogoBlock from "../components/ClientLogoBlock"
import Accordion from "../components/Accordion"
import loadable from "@loadable/component"
import ClientLogos from "../components/slices/Homepage/ClientLogos"
import CardProjectItem from "../components/CardProjectItem"
import BannerBlogDetails from "../components/Banner/BannerBlogDetails"
import BannerOurWorkPage from "../components/Banner/BannerOurWorkPage"
import BannerPartners from "../components/Banner/BannerPartners"
import BannerCaseStudy2 from "../components/Banner/BannerCaseStudy2"
import BannerWhatWeDo2 from "../components/Banner/BannerWhatWeDo2"
import BannerAboutUs from "../components/Banner/BannerAboutUs"
import BannerWorkWithConvert from "../components/Banner/BannerWorkWithConvert"
import BannerLogo from "../components/Banner/BannerLogo"

const HappyClinetssss = loadable(() =>
  import("../components/slices/Homepage/HappyClient/HappyClient")
)
const PlatformTrio = loadable(() =>
  import("../components/slices/Homepage/PlatformTrio")
)

const SliceZone = props => {
  if (props.allSlices) {
    const slice = props.allSlices.map((s, index) => {
      switch (s.type || s.__typename) {
        // These are the API IDs of the slices
        case "text":
          return (
            <h1 key={index} input={s}>
              im a text for testing
            </h1>
          )
        case "big_text":
          return (
            <>
              <BigText key={index} input={s} />
            </>
          )
        case "platform_trio":
          return (
            <>
              <PlatformTrio key={index} input={s} />
            </>
          )
        case "client_logos":
          return (
            <>
              <ClientLogos key={index} input={s} />
            </>
          )
        case "what_we_do":
          return (
            <>
              <WhatWeDo key={index} input={s} />
            </>
          )
        case "trust_logos_block":
          return (
            <>
              <TrustLogosBlock key={index} input={s} />
            </>
          )
        case "big_image":
          return (
            <>
              <BigImage
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "text_with_bullet_list":
          return (
            <>
              <TextWithBulletList
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "half_width_text":
          return (
            <>
              <HalfWidthText
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "image_with_side_text":
          return (
            <>
              <ImageWithSideText
                key={index}
                input={s}
                context={props.context ? props.context : null}
              />
            </>
          )
        case "project_tilesq":
          return (
            <>
              <ProjectTiles key={index} input={s} />
            </>
          )
        case "happy_clients":
          return (
            <>
              <HappyClinetssss key={index} input={s} />
            </>
          )
        case "content_section":
          return (
            <>
              <ColumTestimonial key={index} input={s} />
            </>
          )
        case "our_services":
          return (
            <>
              <OurServicesss key={index} input={s} />
            </>
          )
        case "cta":
          return (
            <>
              <CTA key={index} input={s} />
            </>
          )
        case "ourworkitem_description":
          return (
            <>
              <TextBackground key={index} input={s} />
            </>
          )
        case "title_with_description":
          return (
            <>
              <TextBackground key={index} input={s} />
            </>
          )
        case "one_image":
          return <OneImage key={index} input={s} />
        case "list_image":
          return (
            <>
              <ImageSlider key={index} input={s} />
            </>
          )
        case "title_solution":
          return (
            <>
              <TextSolution key={index} input={s} />
            </>
          )
        case "section_solution":
          return (
            <>
              <TextSolution key={index} input={s} />
            </>
          )
        case "statistical_ourwork_item_":
          return (
            <>
              <ContentPercent key={index} input={s} />
            </>
          )
        case "statistical_project":
          return (
            <>
              <ContentPercent key={index} input={s} />
            </>
          )
        case "slider_image":
          return (
            <>
              <ListSlider key={index} input={s} />
            </>
          )
        case "text_quote":
          return (
            <>
              <TextQoute key={index} input={s} />
            </>
          )
        case "quote":
          return (
            <>
              <TextQoute key={index} input={s} />
            </>
          )
        case "connect_instagram":
          return (
            <>
              <Instagram key={index} input={s} />
            </>
          )
        case "featured_posts":
          return (
            <>
              <OurLaster key={index} input={s} />
            </>
          )
        case "two_columns_a":
          return (
            <>
              <TwoColumA key={index} input={s} />
            </>
          )
        case "two_columns_b":
          return (
            <>
              <TwoColumB key={index} input={s} />
            </>
          )
        case "two_columns_c":
          return (
            <>
              <TwoColumC key={index} input={s} />
            </>
          )
        case "threes_column":
          return (
            <>
              <ThreeColum key={index} input={s} />
            </>
          )
        case "full_banner_a":
          return (
            <>
              <FullColum key={index} input={s} />
            </>
          )
        case "slide_show_banner_":
          return (
            <>
              <ColumSilder key={index} input={s} />
            </>
          )
        case "directions":
          return (
            <>
              <Derection key={index} input={s} />
            </>
          )
        case "form_submit":
          return (
            <>
              <FormSumits key={index} input={s} />
            </>
          )
        // list_post
        case "list_post":
          return (
            <>
              <CardPageBlog key={index} input={s} />
            </>
          )
        case "what_we_do_item":
          return (
            <Cardwhatwedo
              key={index}
              input={{ ...s, total: props.allSlices.length }}
              index={index}
            />
          )
        case "list_projects_to_show":
          return <OurWorkProjects key={index} input={s} />

        case "partner_details":
          return <CardPartners key={index} input={s} />

        case "blog_article_tiles":
          return <BlogArticleTiles key={index} input={s} />
        case "2_column_text":
          return <TwoColumnText key={index} input={s} />

        case "3_column_profiles":
          return <ThreeColumnProfile key={index} input={s} />
        case "instagram_launch":
          return <SliderIntagram key={index} input={s} />

        case "_partner_feature_tile":
          return <PartnerFeatureTile key={index} input={s} />

        case "client_logo_grid":
          return <ClientLogoBlock key={index} input={s} />

        case "_accordion":
          return <Accordion key={index} input={s} />

        case "case_study_tiles":
          return <CardProjectItem key={index} input={s} />

        case "banner_post_details":
          return <BannerBlogDetails key={index} input={s} />

        case "banner_project_detail":
          return <BannerOurWorkPage key={index} input={s} />

        case "banner_partner_page":
          return <BannerPartners key={index} input={s} />

        case "banner_what_we_do":
          return <BannerWhatWeDo2 key={index} input={s} />

        case "banner_casestudy":
          return <BannerCaseStudy2 key={index} input={s} />

        case "banner_about":
          return <BannerAboutUs key={index} input={s} />

        case "banner_work_with_convert":
          return <BannerWorkWithConvert key={index} input={s} />

        case "banner_icon":
          return <BannerLogo key={index} input={s} />

        default:
          return <></>
      }
    })
    //return the slice
    return slice
  } else {
    return false
  }
}

export default SliceZone
