import { gql } from "apollo-boost"

const FETCH_NOTES = gql`
    query {
        notes {
  	        title
            text
            id
        }
    }
`

export {
    FETCH_NOTES
}