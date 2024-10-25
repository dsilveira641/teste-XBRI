export interface Column {
    name: string;
    title: string;
    sortColumn?: string;
    titleIconAttrs?: { icon: string; name: string };
}

export interface Actions {
    name: string;
    icon: string;
    class?: string;
}

export interface ActionClickEvent {
    element: any;
    name: string;
}