import { FC } from 'react';

const graph_offset = 20;

export const BarGraph: FC<{
    values: number[];
    total: number;
    title?: string;
}> = ({ values, total, title }) => {
    const max_value = Math.max(...values);

    return (
        <>
            {title && <div>{title}</div>}
            <div className="flex items-end gap-[0.2ch] h-[1rem]">
                {Array.from({ length: total }).map((_, index) => {
                    // value between 0-100
                    const percent =
                        (values[index] / max_value) * (100 - graph_offset) +
                        graph_offset;

                    return (
                        <div
                            key={index}
                            className={
                                'h-1rem w-2 bg-gradient-to-b from-blue-500 to-blue-300'
                            }
                            style={{
                                height: `${percent}%`,
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
};
