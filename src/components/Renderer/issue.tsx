import { registerNode } from './register';

/**
 * cb: in the future open source projects may want to link to issues,
 * but for now just return an empty component
 */
registerNode('issue', () => <></>);
