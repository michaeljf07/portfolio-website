export type LifeImage = {
    src: string;
    alt: string;
    caption?: string;
};

export type LifeSection = {
    id: string;
    title: string;
    description: string;
    images: LifeImage[];
};

export const lifeSections: LifeSection[] = [
    {
        id: "gym",
        title: "Gym",
        description:
            "Training is where I reset, stay consistent, and enjoy making steady progress.",
        images: [],
    },
    {
        id: "music",
        title: "Music",
        description: "A place for the music, artists, and moments I keep coming back to.",
        images: [],
    },
];
