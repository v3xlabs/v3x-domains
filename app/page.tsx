import { DomainList } from '../components/DomainList/DomainList';
import { Panel } from '../components/Panel/Panel';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';

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
                    <div>v3x.domains</div>
                </div>

                <div className="whitespace-pre-wrap col-span-12 py-10 px-6">
                    &nbsp; &gt;&gt;&gt;&gt; So we own a lot of domains, here is
                    a list... Treat this the way you would treat the lookup
                    table in the back of a book; by scrolling through it
                    whenever you get bored.
                </div>

                <div className="col-span-12">
                    <Panel title="Domain Statistics">
                        <div className="flex flex-col gap-1">
                            <ProgressBar
                                progress={3}
                                total={20}
                                title="Usage"
                            />
                        </div>
                    </Panel>
                </div>

                <div className="col-span-12">
                    <DomainList />
                </div>
            </div>
        </div>
    );
}
