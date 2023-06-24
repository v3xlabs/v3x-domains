import { FC, PropsWithChildren } from 'react';

export const Panel: FC<
    PropsWithChildren<{ title: string; loading?: boolean }>
> = ({ title, loading, children }) => {
    return (
        <div className="w-full relative flex items-center justify-center border border-notblack p-4 mt-4">
            <div className="top-0 absolute left-0 -translate-y-1/2 bg-white px-2 ml-4">
                {title}
            </div>
            {children}
        </div>
    );
};
