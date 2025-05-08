import { Repositories } from "./Repositories";
import ErrorBox from "./ErrorBox";

export const Content = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "success":
            return <Repositories repositories={repositories} />;

        case "Error":
            return <ErrorBox />
    }
};