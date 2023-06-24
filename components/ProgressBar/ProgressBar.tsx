import { FC } from 'react';

export const ProgressBar: FC<{
    progress: number;
    total: number;
    title?: string;
}> = ({ progress, total, title }) => {
    return (
        <>
            {title && <div>{title}</div>}
            <div className="flex items-center gap-[0.2ch]">
                {Array.from(Array.from({ length: total }).keys()).map(
                    (index) => {
                        return (
                            <div
                                key={index}
                                className={`w-2 h-[1em] ${
                                    index < progress
                                        ? 'bg-notgreen'
                                        : 'bg-gray-200'
                                }`}
                            />
                        );
                    }
                )}
            </div>
        </>
    );
};
