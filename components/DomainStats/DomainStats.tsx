import { FC } from 'react';

import { list_total, list_used } from '../../list';

export const DomainStats: FC = () => {
    const usage_frac = list_used.length / list_total;

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <div>Total</div>
                <div className="bg-notblack text-white px-2 py-0">
                    {list_total}
                </div>
            </div>
            <div className="flex justify-between">
                <div>Used</div>
                <div className="bg-notblack text-white px-2 py-0">
                    {list_used.length}
                </div>
            </div>
            <div className="flex justify-between">
                <div>To Do</div>
                <div className="bg-notblack text-white px-2 py-0">
                    {list_total - list_used.length}
                </div>
            </div>
            <div className="flex justify-between">
                <div>Usage</div>
                <div className="bg-notblack text-white px-2 py-0">
                    {Math.round(usage_frac * 100)}%
                </div>
            </div>
        </div>
    );
};
