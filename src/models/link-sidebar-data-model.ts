export interface LinkSidebarDataModel {
    linkName: string;
    pathLinkName: string | null;
    dropDownLinkList: DropDownLinkList[];
}

export interface DropDownLinkList {
    name: string;
    path: string;
}

export interface LinkSelectedModel {
    linkName: string;
    dropLinkName: string;
}