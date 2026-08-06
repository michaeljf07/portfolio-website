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
        images: [
            {
                src: "/life_section_images/gym/1.jpg",
                alt: "",
                caption: "",
            },
            {
                src: "/life_section_images/gym/2.jpg",
                alt: "",
                caption: "",
            },
            {
                src: "/life_section_images/gym/3.jpg",
                alt: "",
                caption: "",
            },
        ],
    },
    {
        id: "music",
        title: "Music",
        description: "A place for the music, artists, and moments I keep coming back to.",
        images: [
            {
                src: "/life_section_images/music/did_you_know.webp",
                alt: "Did you know that there's a tunnel under ocean blvd",
                caption: "Did you know that there's a tunnel under ocean blvd - Lana Del Rey",
            },
            {
                src: "/life_section_images/music/the_greatest_generation.jpg",
                alt: "The Greatest Generation",
                caption: "The Greatest Generation - The Wonder Years",
            },
            {
                src: "/life_section_images/music/loveless.jpg",
                alt: "Loveless",
                caption: "Loveless - my bloody valentine",
            },
        ],
    },
];
