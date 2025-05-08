import { Repositories } from "./Repositories";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";

export const Content = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "success":
            return <Repositories repositories={repositories} />;

        case "error":
            return <ErrorBox />;

        default:
            throw new Error(`incorect status: ${status}`);
    }
};