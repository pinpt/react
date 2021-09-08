import { registerNode } from './register';
import React from 'react';
/**
 * cb: in the future open source projects may want to link to issues,
 * but for now just return an empty component
 */
registerNode('issue', () => <></>);
