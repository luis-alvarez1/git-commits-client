import { useDispatch } from 'react-redux';
import './App.css';
import { getAllCommits } from './store/actions/commits.actions';

function App() {
    const dispatch = useDispatch();

    dispatch(getAllCommits());
    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}

export default App;
