export interface InputLabels {
    name: string;
    username: string;
    image?: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.SyntheticEvent) => void;
}
