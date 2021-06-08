
export const GET_PAGES = `
    prismic {
      allPages {
        edges {
          node {
            page_name
            _meta {
              uid
            }
            body {
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
                  position
                  name
                  description
                  avatar
                }
              }
              ... on PRISMIC_PageBodyBig_image {
                type
                fields {
                  content_large
                }
                label
                primary {
                  big_image
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
            }
            meta_title
            meta_description
            keywords
          }
        }
      }
    }
  }
  `
  
