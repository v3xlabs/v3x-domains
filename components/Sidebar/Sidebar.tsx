import { FC } from 'react';

export const Sidebar: FC = () => {
    return (
        <header className="w-auto p-8 flex flex-col gap-4">
            <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="bg-notblack w-fit font-bold">
                    <span className="text-white -1 mx-3">v3xlabs</span>
                </div>
                <div>Empowering open-source</div>
            </div>
            <nav className="flex">
                <ul className="">
                    {[
                        ['.company', 'https://v3x.company'],
                        ['.wiki', 'https://v3x.wiki'],
                        ['.health', 'https://v3x.health'],
                        ['.contact', 'https://v3x.contact'],
                        ['.domains', 'https://v3x.domains'],
                        ['.chat', 'https://v3x.chat'],
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className={[
                                    'hover:text-blue-500 hover:underline',
                                    label == '.health'
                                        ? 'text-blue-500'
                                        : 'text-notblack',
                                ].join(' ')}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
