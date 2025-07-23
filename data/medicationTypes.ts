interface MedicationType {
    label: string;
    value: string;
}

export const medicationTypes: MedicationType[] = [
    { label: "Tablet", value: "tablet" },
    { label: "Capsule", value: "capsule" },
    { label: "Syrup", value: "syrup" },
    { label: "Injection", value: "injection" },
    { label: "Ointment", value: "ointment" },
    { label: "Cream", value: "cream" },
    { label: "Powder", value: "powder" },
    { label: "Inhaler", value: "inhaler" },
    { label: "Patch", value: "patch" }
];