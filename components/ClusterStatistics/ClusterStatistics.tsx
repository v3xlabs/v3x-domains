import { BarGraph } from '../BarGraph/BarGraph';
import { Panel } from '../Panel/Panel';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const ClusterStatistics = () => {
    // Random list of 20 numbers between 0 and 10
    const networkData = Array.from({ length: 20 }).map(() =>
        Math.floor(Math.random() * 10)
    );

    return (
        <Panel title="C3 Cluster Statistics">
            <div className="flex flex-col gap-1">
                <ProgressBar progress={3} total={20} title="CPU" />
                <ProgressBar progress={7} total={20} title="RAM" />
                <ProgressBar progress={1} total={20} title="DISK" />
                <BarGraph values={networkData} total={20} title="TX" />
            </div>
        </Panel>
    );
};
