export type vNodeTagElement = {
  type: string;
  attributes: Record<string, any>;
  children: vNode[];
};

export type vNodeTextElement = string;

export type vNode = vNodeTagElement | vNodeTextElement;

export function createElement(
  tagname: string,
  attributes = {},
  children: vNode[] = []
): vNodeTagElement {
  return {
    type: tagname,
    attributes: attributes,
    children: children,
  };
}
