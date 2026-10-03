// Templates remount on every navigation, so the fade replays when switching tabs.
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="tab-in h-full">{children}</div>;
}
