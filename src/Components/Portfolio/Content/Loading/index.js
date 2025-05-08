import { LoadingWrapper, LoadingSpinner } from "./styled";

const Loading = () => (
    <LoadingWrapper>
        Please wait, projects are being loaded...
        <LoadingSpinner />
    </LoadingWrapper>
);

export default Loading;