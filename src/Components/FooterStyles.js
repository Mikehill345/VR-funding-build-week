import Styled from 'styled-components';

const FooterStyles = Styled.div`
footer {
    margin: 0;
    padding: 0;
    .Links {
        margin: 0;
        padding; 0;
        display: flex;
        justify-content: space-evenly;
        a {
            text-decoration: none;
            color: white;
            margin: 2%;

            &:hover {
                font-weight: 600;
                border-bottom: 1px solid white;
            }
        }
    }
}
`;

export default FooterStyles;