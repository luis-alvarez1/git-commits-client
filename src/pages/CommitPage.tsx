import { getCommitById } from '../store/actions/commits.actions';
import { CombinedState, Dispatch } from 'redux';
import { CommitsState } from '../types/commits';
import { LeftBoxInfo } from '../components/CommitsPage/LeftBoxInfo';
import { useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { RightBoxInfo } from '../components/CommitsPage/RightBoxInfo';
import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const CommitPage = () => {
    const { info, loading } = useSelector(
        (
            state: CombinedState<{
                commits: CommitsState;
            }>,
        ) => state.commits,
    );

    return loading ? (
        <Loading />
    ) : (
        <div className="container mx-auto my-5 p-5">
            <BackButton />
            <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                    <LeftBoxInfo
                        date={info.commit.author.date}
                        img={info.author.avatar_url}
                        name={info.author.login}
                        email={info.commit.author.email}
                    />
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                    <RightBoxInfo
                        email={info.commit.author.email}
                        filesChanged={info.files.length}
                        message={info.commit.message}
                        name={info.author.login}
                        parent={info.parents[0]?.sha}
                        sha={info.sha}
                        stats={info.stats}
                    />
                </div>
            </div>
        </div>
    );
};

export const loader = (dispatch: Dispatch): LoaderFunction => {
    return ({ params }: LoaderFunctionArgs) => {
        if (params.id) {
            return dispatch(getCommitById(params.id));
        }
        return null;
    };
};
