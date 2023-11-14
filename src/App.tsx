import { useDispatch } from 'react-redux';
import { getAllCommits } from './store/actions/commits.actions';
import { useEffect } from 'react';
import { CommitsList } from './components/Commits/CommitsList';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCommits());
    }, [dispatch]);
    return (
        <>
            <CommitsList />
        </>
    );
}

export default App;
