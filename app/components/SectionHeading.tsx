export function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-6 flex items-center gap-4">
            <h2
                className="shrink-0 text-3xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-lora), serif" }}
            >
                {children}
            </h2>
            <div className="h-px w-full bg-border" />
        </div>
    );
}
