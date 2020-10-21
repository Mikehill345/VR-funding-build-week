import Styled from 'styled-components';

const ProjectListStyles = Styled.div`
display: flex;
justify-content: center;
padding: 2%;
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 25%;
    background-color: white;
    border-radius: 10px;
    border: none;

    &:hover {
        box-shadow: 0 10px 20px 0 rgba(0,0,0,0.6);
        font-weight: 500;
        cursor: default;
    }
    .container {
        margin: 4%;
        color: black;
        h4 {
            text-transform: uppercase;
            font-size: 2rem;
        }
        p {
            margin: 4%;
            padding 4%;
        }
    }
}
button {
    margin: 4%;
    text-transform: uppercase;
    padding: 2% 4%;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: 0.4s;
    background-color: transparent;

    &:hover {
        background-color: black;
        color: white;
    }
}
`;

export default ProjectListStyles;