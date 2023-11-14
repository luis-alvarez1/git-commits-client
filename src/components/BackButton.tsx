import { GoBackIcon } from './Icons/GoBackIcon';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };
    return (
        <button onClick={handleGoBack}>
            <GoBackIcon />
        </button>
    );
};
