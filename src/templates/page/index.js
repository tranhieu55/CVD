import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/utilities/SEO"
import SliceZone from "../../utils/SliceZone"

function Page({ data }) {
  console.log("props :", data)

  const { page } = data.prismic
  const { title, _meta, body } = page
  console.log(body)
  return (
    <Layout>
      <SEO props={_meta}></SEO>
      <SliceZone allSlices={body}></SliceZone>
    </Layout>
  )
}
export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismic {
      page(uid: $uid, lang: "en-gb") {
        title
        _meta {
          uid
        }
        body {
          ... on PRISMIC_PageBody_accordion {
            type
            label
            fields {
              title
              sub_title
              email
              content_title_center
              content_title
              content_text_after
              content_text
              content_footer2
              application
              content_footer
            }
          }
          ... on PRISMIC_PageBody_partner_feature_tile {
            type
            label
            fields {
              link_page
              logo
              subtitle
              text
            }
          }
          ... on PRISMIC_PageBody2_column_text {
            type
            label
            primary {
              text_side_left
              text_side_right
            }
          }
          ... on PRISMIC_PageBody3_column_profiles {
            type
            label
            fields {
              avatar
              description
              name
              position
            }
          }
          ... on PRISMIC_PageBodyBanner_button {
            type
            label
            fields {
              text_in_button
              display_button
            }
          }
          ... on PRISMIC_PageBodyBanner_project_detail {
            type
            label
          }
          ... on PRISMIC_PageBodyBig_text {
            type
            label
            primary {
              text
            }
          }
          ... on PRISMIC_PageBodyBig_image {
            type
            label
            fields {
              content_large
            }
            primary {
              big_image
            }
          }
          ... on PRISMIC_PageBodyCta {
            type
            label
            primary {
              subtitle
              title
            }
          }
          ... on PRISMIC_PageBodyCta_buton {
            type
            label
            primary {
              background_color_button
              border_button_color
              button_text_color
              display_desktop_or_mobile
              text_button
            }
          }
          ... on PRISMIC_PageBodyCase_study_tiles {
            type
            label
            fields {
              image_case_study
              sub_title
              title
            }
          }
          ... on PRISMIC_PageBodyClient_logo_grid {
            type
            label
            fields {
              images
            }
          }
          ... on PRISMIC_PageBodyClient_logos {
            type
            fields {
              logo
            }
            label
            primary {
              title
            }
          }
          ... on PRISMIC_PageBodyConnect_instagram {
            type
            label
            primary {
              access_token
              title
            }
          }
          ... on PRISMIC_PageBodyContent_section {
            type
            fields {
              logo_client
              title
              sub_title
              qoute_of_client
            }
            label
          }
          ... on PRISMIC_PageBodyFeature_text_with_description {
            type
            label
            primary {
              big_text
              text_description
            }
          }
          ... on PRISMIC_PageBodyFeature_text_with_image {
            type
            label
            fields {
              image_side
              text_description
              text_read_more
              text_title
            }
          }
          ... on PRISMIC_PageBodyFull_banner_a {
            type
            label
            primary {
              image_full_banner_a
              title
            }
          }
          ... on PRISMIC_PageBodyForm_submit {
            type
            fields {
              type
              requied
              placeholder
            }
            primary {
              title_contact_form
            }
            label
          }
          ... on PRISMIC_PageBodyFull_width_text {
            type
            label
          }
          ... on PRISMIC_PageBodyFull_banner_b {
            type
            label
            primary {
              background_color_full_banner_b
              image_full_banner_b
              title
            }
          }
          ... on PRISMIC_PageBodyFull_width_image {
            type
            fields {
              image
            }
            label
          }
          ... on PRISMIC_PageBodyGlobal_messing_bar {
            type
            label
            primary {
              link_title
              message
              mobile_message
            }
          }
          ... on PRISMIC_PageBodyHalf_width_text {
            type
            label
            primary {
              rightBlock
              leftBlock
            }
          }
          ... on PRISMIC_PageBodyHappy_clients {
            type
            label
            fields {
              logo_client
              qoute_of_client
              sub_title
              title
            }
            primary {
              title_happy_client
            }
          }
          ... on PRISMIC_PageBodyImage_grid_landscape {
            type
            label
          }
          ... on PRISMIC_PageBodyImage_grid_portrait {
            type
            label
            fields {
              image_grid_portrait
            }
          }
          ... on PRISMIC_PageBodyImage_with_side_text {
            type
            label
            primary {
              image
              text
            }
          }
          ... on PRISMIC_PageBodyInstagram_launch {
            type
            label
            fields {
              image_slice
            }
          }
          ... on PRISMIC_PageBodyJust_launched {
            type
            fields {
              image_launched
            }
            label
          }
          ... on PRISMIC_PageBodyList_cta_button {
            type
            label
            fields {
              color_border_button
              color_text_button
              display_button
              text_button
              color_background_button
            }
          }
          ... on PRISMIC_PageBodyList_image {
            type
            label
            fields {
              image_item
              location
              order
              width_image
            }
          }
          ... on PRISMIC_PageBodyList_launch_images {
            type
            label
            fields {
              image_item
            }
          }
          ... on PRISMIC_PageBodyOffice_details_ {
            type
            label
            primary {
              office_title
              office_phone_number
              address
            }
          }
          ... on PRISMIC_PageBodyOne_image {
            type
            label
            primary {
              full_screen
              image
            }
          }
          ... on PRISMIC_PageBodyOur_services {
            type
            label
            fields {
              sub_title
            }
            primary {
              title
            }
          }
          ... on PRISMIC_PageBodyPlatform_trio {
            type
            label
            fields {
              description
              platform
              logo
            }
            primary {
              title
              content
            }
          }
          ... on PRISMIC_PageBodyQuote {
            type
            label
            primary {
              name_of_the_author
              portrait_author
              quote
            }
          }
          ... on PRISMIC_PageBodyProject_short_description {
            type
            fields {
              project_short_description
            }
            label
          }
          ... on PRISMIC_PageBodyServices_item {
            type
            label
            fields {
              service_sub_title
            }
            primary {
              title_service_item
            }
          }
          ... on PRISMIC_PageBodySection_solution {
            type
            fields {
              title_the_solution
            }
            label
          }
          ... on PRISMIC_PageBodyImage_slideshow {
            type
            label
            fields {
              image
            }
          }
          ... on PRISMIC_PageBodyWhat_we_do {
            type
            label
            fields {
              content
              service
            }
          }
          ... on PRISMIC_PageBodyWhat_we_do_item {
            type
            label
            primary {
              location_content
              location_image
              what_we_do_description
              what_we_do_image
              what_we_do_title
            }
          }
          ... on PRISMIC_PageBodyTwo_columns_c {
            type
            label
            primary {
              background_image_side_left
              image_side_left
              image_side_right
              title
            }
          }
          ... on PRISMIC_PageBodyTwo_columns_b {
            type
            label
            primary {
              background_image_side_right
              image_side_right
              image_sile_left
              title
            }
          }
          ... on PRISMIC_PageBodyTwo_columns_a {
            type
            label
            primary {
              title
              image_side_left
              image_side_right
              background_image_side_left
            }
          }
          ... on PRISMIC_PageBodyTrust_logos_block {
            type
            label
            fields {
              logo
            }
          }
          ... on PRISMIC_PageBodyTitle_with_description {
            type
            label
            primary {
              text_description
              title
            }
          }
          ... on PRISMIC_PageBodyTitle_404 {
            type
            label
            primary {
              heading_text
              paragraph_text
              url_button
            }
          }
          ... on PRISMIC_PageBodyTitle_banner_blog {
            type
            label
            fields {
              big_title1
              title_banner
            }
          }
          ... on PRISMIC_PageBodyTitle_banner {
            type
            label
            fields {
              big_title1
              title_banner
            }
          }
          ... on PRISMIC_PageBodyThree_columns {
            type
            label
            primary {
              background_image_side_left
              background_image_side_right
              image_center
              enter_title
              image_side_left
              image_side_right
            }
          }
          ... on PRISMIC_PageBodyText_with_bullet_list {
            type
            label
            fields {
              bullet_list_left
              bullet_list_middle
              bullet_list_right
              content
              title
            }
          }
          ... on PRISMIC_PageBodyTag_for_post {
            type
            label
            fields {
              tag_item
            }
            primary {
              title1
            }
          }
          ... on PRISMIC_PageBodyStatistical_project {
            type
            label
            fields {
              description_of_statistical
              number_of_statistical
            }
          }
          ... on PRISMIC_PageBodySocical_icons {
            type
            label
            fields {
              icon_image
            }
          }
          ... on PRISMIC_PageBodySlider_image {
            type
            label
            fields {
              slider_image
            }
          }
          ... on PRISMIC_PageBodySlide_show_banner_ {
            type
            label
            fields {
              item_image
            }
          }
        }
      }
    }
  }
`
