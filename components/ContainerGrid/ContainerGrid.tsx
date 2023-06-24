import { FC } from 'react';

import { Panel } from '../Panel/Panel';

export const ContainerGrid: FC = () => {
    return (
        <Panel title="C3 Cluster Containers">
            <div className="w-full flex flex-wrap gap-1">
                {Array.from({ length: 94 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-notgreen w-4 h-4 aspect-square"
                    ></div>
                ))}
            </div>
        </Panel>
    );
};
