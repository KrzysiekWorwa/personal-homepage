import { Wrapper, ErrorIcon, ErrorTitle, ErrorText, ErrorLinkButton } from "./styled";

const ErrorBox = () => {

    <Wrapper>
        <ErrorIcon></ErrorIcon>
        <ErrorTitle>
            Ooops! Something went wrong...
        </ErrorTitle>
        <ErrorText>
            Sorry, failed to load Github projects. You can check them directly on Github.
        </ErrorText>
        <ErrorLinkButton href="https://github.com/KrzysiekWorwa?tab=repositories" title="Github repositories">
            Go to Github
        </ErrorLinkButton>
    </Wrapper>
};

export default ErrorBox();
