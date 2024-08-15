export interface AbilitySpecs {
    [key: string]: string;
}
export interface Ability {
    id: string;
    name: string;
    type: string;
    description: string;
    specs?: AbilitySpecs;
}

export interface God {
    id: string;
    name: string;
    slogan: string;
    bio: string;
    category: string;
    color: string;
    combat_type: string;
    pantheon: string;
    type: string;
    abilities: Ability[];
}