import { GithubIcon } from '../Icons/GithubIcon';

interface LeftBoxInfoProps {
    name: string;
    img: string;
    email: string;
    date: string;
}

export const LeftBoxInfo = (props: LeftBoxInfoProps) => {
    return (
        <div className="bg-white p-3 border-t-4 border-blue-400">
            <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto" src={props.img} alt={props.name} />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{props.name}</h1>
            <GithubIcon type="web" name={props.name} />
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{props.email}</p>
            <ul className="bg-gray-100 text-gray-600  py-2 px-3 mt-3 divide-y rounded ">
                <li className="flex items-center py-3">
                    <span>Commit Date</span>
                    <span className="ml-auto text-sm">
                        {new Date(props.date).toLocaleDateString('en-GB')}
                    </span>
                </li>
            </ul>
        </div>
    );
};
