import { gql } from '@apollo/client';

export const GET_COUNTRY = gql`
    query Country($code: ID!) {
        country(code: $code) {
            name
            code
            native
            capital
            emoji
            currency
            languages {
                code
                name
            }
        }
    }
`;
