import { ClusterStatistics } from '../components/ClusterStatistics/ClusterStatistics';
import { ContainerGrid } from '../components/ContainerGrid/ContainerGrid';

export default function App() {
    return (
        <div className="mx-auto w-screen max-w-3xl flex items-center justify-center p-4 md:p-8">
            <div
                className="grid w-full"
                style={{
                    gridTemplateRows: 'masonry',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '1rem',
                }}
            >
                <div className="w-full col-span-12 flex items-center justify-center border border-notblack p-4">
                    <div>v3x.health</div>
                </div>

                <div className="whitespace-pre-wrap col-span-12 py-10 px-6">
                    &nbsp; &gt;&gt;&gt;&gt; If you are reading this there is a
                    high chance our datacenter is on fire right now. We highly
                    advice you to check back later.
                </div>

                <div className="col-span-12">
                    <ClusterStatistics />
                </div>
                <div className="col-span-6">
                    <ClusterStatistics />
                </div>
                <div className="col-span-6">
                    <ClusterStatistics />
                </div>
                <div className="col-span-12">
                    <ContainerGrid />
                </div>
            </div>
        </div>
    );
}
