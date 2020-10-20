import Styled from 'styled-components';
import FormImage from '../Images/banner.jpg';

const SignUpStyles = Styled.div`
form {
    border: none;
    border-radius: 10px;
    padding: 4% 15%;
    background-image: url(${FormImage});
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 4px 30px 0 rgba(0, 0, 0, 0.90);
}

h2 {
    text-transform: uppercase;
    text-align: center;
    color: white;
    margin: 0;
}
.Form {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-size: .9rem;

    .name-container {
        padding: 3%;
    }
    .email-container {
        padding: 3%;
    }
    .password-container {
        padding: 3%;
    }
    button {
        margin: 6%;
        padding: 2% 8%;
        text-transform: uppercase;

    }
}
`;

export default SignUpStyles;