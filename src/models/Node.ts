export type NodePropertiesTypes = number | string | any[][] | boolean;

export type Node = {
    id: number,
    children: number[],
    parent: number | null,
    properties: {
        [propertyName: string]: NodePropertiesTypes
    },
}