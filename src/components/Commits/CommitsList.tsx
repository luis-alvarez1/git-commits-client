import { useSelector } from 'react-redux';
import { CommitsState } from '../../types/commits';
import { CombinedState } from 'redux';
import { CommitItem } from './CommitItem';
import { Loading } from '../Loading';

export const CommitsList = () => {
    const { data, loading } = useSelector(
        (
            state: CombinedState<{
                commits: CommitsState;
            }>,
        ) => state.commits,
    );

    const List = () => (
        <ul role="list" className="divide-y divide-gray-100 mx-20">
            {data.map((commit) => (
                <CommitItem
                    key={commit.sha}
                    id={commit.sha}
                    author={commit.author.login}
                    img={commit.author.avatar_url}
                    message={commit.commit.message}
                    date={commit.commit.author.date}
                />
            ))}
        </ul>
    );

    return <>{loading ? <Loading /> : <List />}</>;
};
