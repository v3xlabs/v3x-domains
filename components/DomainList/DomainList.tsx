import { list_unknown, list_used } from '../../list';

export const DomainList = () => {
    return (
        <div className="w-full">
            <ul className="w-full">
                {list_used.map(([name, domain]) => (
                    <li className="w-full group hover:font-bold" key={domain}>
                        <a href={`https://${domain}`} className="flex w-full">
                            <span className="">{name}</span>
                            <span
                                className="grow h-[1.4em] opacity-10 group-hover:opacity-100"
                                style={{
                                    // eslint-disable-next-line prettier/prettier
                                    backgroundImage: 'url(\'/dot.svg\')',
                                    backgroundRepeat: 'repeat-x',
                                    backgroundSize: 'contain',
                                }}
                            ></span>
                            <span>{domain}</span>
                        </a>
                    </li>
                ))}
                {list_unknown.map(([name, domain]) => (
                    <li
                        className="w-full flex w-full group hover:font-bold text-neutral-300 hover:text-neutral-400"
                        key={domain}
                    >
                        <span className="">{name}</span>
                        <span
                            className="grow h-[1.4em] opacity-10 group-hover:opacity-40"
                            style={{
                                // eslint-disable-next-line prettier/prettier
                                        backgroundImage: 'url(\'/dot.svg\')',
                                backgroundRepeat: 'repeat-x',
                                backgroundSize: 'contain',
                            }}
                        ></span>
                        <span>{domain}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
