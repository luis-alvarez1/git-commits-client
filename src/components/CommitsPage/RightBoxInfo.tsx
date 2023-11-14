import { CommitIcon } from '../Icons/CommitIcon';
import { Stats } from '../../types/commits';
import { GithubIcon } from '../Icons/GithubIcon';

interface RightBoxInfoProps {
    message: string;
    name: string;
    sha: string;
    parent: string;
    stats: Stats;
    email: string;
    filesChanged: number;
}

export const RightBoxInfo = (props: RightBoxInfoProps) => {
    return (
        <div className="bg-white p-3 shadow-sm rounded-sm border-2 border-gray-300">
            <title className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <CommitIcon />
                <span className="tracking-wide">Info</span>
            </title>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-1">
                        <h3 className="px-4 py-2 font-semibold">Message</h3>
                        <p className="px-4 py-2">{props.message}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <h3 className="px-4 py-2 font-semibold">Name</h3>
                        <p className="px-4 py-2">{props.name}</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <h3 className="px-4 py-2 font-semibold">Email</h3>
                        <p className="px-4 py-2">{props.email}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <h3 className="px-4 py-2 font-semibold">SHA</h3>
                        <p className="px-4 py-2 truncate">{props.sha}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <h3 className="px-4 py-2 font-semibold">Files Changed</h3>
                        <p className="px-4 py-2 text-blue-400">{props.filesChanged}</p>
                    </div>
                    {props.parent && (
                        <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">Parent</p>
                            <div className="flex">
                                <GithubIcon type="parent" parent={props.parent} />
                                <p className="px-2 py-2 truncate">{props.parent}</p>
                            </div>
                        </div>
                    )}
                    <div className="grid grid-cols-2">
                        <h3 className="px-4 py-2 font-semibold">Stats</h3>
                        <div className="px-4 py-2 flex">
                            <p className="text-green-400 mx-1">+{props.stats.additions}</p>
                            <p className="text-red-400 mx-1">-{props.stats.deletions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
