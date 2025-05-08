import { Wrapper, ErrorIcon, ErrorTitle, ErrorText, ErrorLinkButton } from "./styled";
import { githubUsername } from "../../githubUsername"

const ErrorBox = () => {
    return (
        <Wrapper>
            <ErrorIcon />
            <ErrorTitle>
                Ooops! Something went wrong...
            </ErrorTitle>
            <ErrorText>
                Sorry, failed to load Github projects.<br />
                You can check them directly on Github.
            </ErrorText>
            <ErrorLinkButton href={`https://github.com/${githubUsername}`} target="_blank" title="Github repositories" rel="noreferrer">
                Go to Github
            </ErrorLinkButton>
        </Wrapper>
    )
};

export default ErrorBox;
