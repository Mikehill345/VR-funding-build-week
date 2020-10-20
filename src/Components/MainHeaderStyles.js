import Styled from 'styled-components'

const MainHeaderStyles = Styled.div`
margin: 0;
padding: 0;
display: flex;
justify-content: space-between;
.Title {
    h1 {
        color: white;
        margin: 0;
        text-transform: uppercase;
        font-size: 1.7rem;
    }
}
.Navigation {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        padding-top: 2%;
        padding-right: 4%;
        padding-left: 4%;

        &:hover {
            border-bottom: 1px solid white;
            font-weight: 600;
        }
    }
}
`;

export default MainHeaderStyles;