import { Repositories } from "./Repositories";
import ErrorBox from "./ErrorBox";

export const Content = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "success":
            return <Repositories repositories={repositories} />;

        case "error":
            return <ErrorBox />;

        default:
            throw new Error(`incorect status: ${status}`);
    }
};