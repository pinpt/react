import React from 'react';
import GoogleTagManagerPlugin from './gtm';

const pluginRegistry: Record<string, (opts: any) => React.ReactFragment> = {
	gtm: (opts) => <GoogleTagManagerPlugin options={opts} key="gtm" />,
};

const ScriptPlugins = ({ plugins }: { plugins: Record<string, any> }) => {
	return (
		<>
			{Object.keys(plugins)
				.filter((pluginKey) => {
					if (pluginRegistry[pluginKey]) {
						return true;
					}
					console.error(`Plugin ${pluginKey} not found`);
					return false;
				})
				.map((key) => pluginRegistry[key](plugins[key]))}
		</>
	);
};

export default ScriptPlugins;
