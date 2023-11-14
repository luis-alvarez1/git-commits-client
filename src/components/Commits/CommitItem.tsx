import { Link } from 'react-router-dom';

interface CommitItemProps {
    img: string;
    author: string;
    message: string;
    date: string;
    id: string;
}

export const CommitItem = (props: CommitItemProps) => {
    return (
        <div>
            <Link to={`/commit/${props.id}`}>
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={props.img}
                            alt={props.author}
                        />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                {props.message}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {props.author}
                            </p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900 ">{props.id}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            {new Date(props.date).toLocaleDateString('en-GB')}
                        </p>
                    </div>
                </li>
            </Link>
        </div>
    );
};
