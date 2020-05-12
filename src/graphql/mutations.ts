import { gql } from "apollo-boost";

const LOGIN_USER = gql`
    mutation(
        $email: String!,
        $password: String!
    ) {
        login(input: {
            email: $email,
            password: $password
        }) {
            userName,
            email,
            token,
        }
    }
`

export {
    LOGIN_USER
}