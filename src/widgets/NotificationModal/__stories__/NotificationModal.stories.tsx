import React from 'react';
import { Meta } from '@storybook/react';
import NotificationModal from '../';
import properties from '../__data__/properties.json';
import propertiesWithImage from '../__data__/properties_with_image.json';

const { default: readme } = require('../README.md');
export default {
	component: NotificationModal,
	title: 'Widgets/Notification Modal',
	parameters: {
		jest: ['NotificationModal.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<NotificationModal previewData={properties.previewData as any} header={properties.header} __previewMode />
);

export const With_Image: React.VFC<{}> = () => (
	<NotificationModal
		previewData={propertiesWithImage.previewData as any}
		header={propertiesWithImage.header}
		__previewMode
	/>
);

export const No_Preview: React.VFC<{}> = () => (
	<div>
		<NotificationModal
			previewData={propertiesWithImage.previewData as any}
			header={propertiesWithImage.header}
		/>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat id porta nibh venenatis. Netus et malesuada fames ac. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Ultrices dui sapien eget mi. Elementum pulvinar etiam non quam lacus suspendisse. Congue mauris rhoncus aenean vel elit. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Viverra suspendisse potenti nullam ac tortor vitae purus. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Curabitur vitae nunc sed velit dignissim sodales ut eu. Arcu non sodales neque sodales ut etiam sit. Massa tempor nec feugiat nisl pretium fusce id. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Imperdiet nulla malesuada pellentesque elit eget. Sagittis aliquam malesuada bibendum arcu vitae.

		Commodo nulla facilisi nullam vehicula ipsum a. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Ut tristique et egestas quis ipsum suspendisse. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Adipiscing bibendum est ultricies integer quis auctor. Pellentesque adipiscing commodo elit at imperdiet. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Risus feugiat in ante metus dictum. Tristique senectus et netus et malesuada fames ac turpis. Aliquet enim tortor at auctor urna nunc. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Leo a diam sollicitudin tempor id eu nisl.

		Odio morbi quis commodo odio aenean sed adipiscing. Pulvinar sapien et ligula ullamcorper malesuada proin. Semper risus in hendrerit gravida rutrum. Amet facilisis magna etiam tempor. Non odio euismod lacinia at quis risus sed. Pretium aenean pharetra magna ac placerat vestibulum. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Dictum non consectetur a erat. Elit eget gravida cum sociis natoque. Hendrerit dolor magna eget est lorem ipsum dolor. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Facilisis volutpat est velit egestas dui. Quis auctor elit sed vulputate mi. Aliquam etiam erat velit scelerisque in dictum non consectetur. Elementum eu facilisis sed odio.

		Sit amet venenatis urna cursus eget nunc scelerisque. Commodo elit at imperdiet dui accumsan sit. Feugiat nisl pretium fusce id velit ut tortor. Enim ut sem viverra aliquet eget sit amet tellus cras. Posuere lorem ipsum dolor sit amet consectetur. Odio facilisis mauris sit amet massa vitae. Diam vulputate ut pharetra sit amet aliquam. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sit amet risus nullam eget. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Faucibus turpis in eu mi bibendum neque egestas congue. Ullamcorper malesuada proin libero nunc consequat.

		Pellentesque diam volutpat commodo sed egestas egestas fringilla. Nunc sed id semper risus. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Pretium vulputate sapien nec sagittis. Augue eget arcu dictum varius duis at. Amet mauris commodo quis imperdiet massa. Id aliquet risus feugiat in ante metus dictum at tempor. Est ante in nibh mauris. Dictum varius duis at consectetur lorem donec. Nec dui nunc mattis enim ut tellus elementum sagittis. Turpis egestas pretium aenean pharetra.

		Bibendum arcu vitae elementum curabitur vitae. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Vel facilisis volutpat est velit egestas dui id ornare. Aliquam faucibus purus in massa. Senectus et netus et malesuada fames ac turpis egestas maecenas. Metus dictum at tempor commodo ullamcorper. Varius quam quisque id diam. Turpis egestas pretium aenean pharetra magna ac placerat. Posuere ac ut consequat semper viverra nam libero justo laoreet. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Feugiat vivamus at augue eget arcu dictum. Pretium vulputate sapien nec sagittis. Facilisi etiam dignissim diam quis enim. Interdum posuere lorem ipsum dolor sit. Tellus integer feugiat scelerisque varius morbi enim nunc. Consectetur purus ut faucibus pulvinar elementum. Commodo odio aenean sed adipiscing diam donec adipiscing.

		Tortor aliquam nulla facilisi cras fermentum odio. Arcu felis bibendum ut tristique et egestas quis. Tincidunt praesent semper feugiat nibh. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Quis eleifend quam adipiscing vitae proin sagittis nisl. Tellus elementum sagittis vitae et leo duis ut diam. Id ornare arcu odio ut sem nulla pharetra. Nec ultrices dui sapien eget mi proin. Congue mauris rhoncus aenean vel elit. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Lectus mauris ultrices eros in cursus turpis massa. A pellentesque sit amet porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. In egestas erat imperdiet sed euismod nisi. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Congue nisi vitae suscipit tellus mauris a diam maecenas.

		Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Eu sem integer vitae justo eget magna fermentum iaculis. Pulvinar sapien et ligula ullamcorper malesuada proin. Condimentum vitae sapien pellentesque habitant. Faucibus purus in massa tempor nec feugiat nisl pretium. Dis parturient montes nascetur ridiculus mus mauris. Nunc mi ipsum faucibus vitae aliquet. Tempor orci dapibus ultrices in iaculis. Ut tellus elementum sagittis vitae et leo duis ut. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Commodo sed egestas egestas fringilla. Turpis massa sed elementum tempus egestas sed. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Duis at tellus at urna condimentum mattis.

		Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Enim eu turpis egestas pretium aenean pharetra. Quam id leo in vitae. Id aliquet risus feugiat in ante. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Urna cursus eget nunc scelerisque viverra. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Semper eget duis at tellus at urna. In vitae turpis massa sed elementum tempus egestas. Viverra nibh cras pulvinar mattis nunc sed. Sit amet nisl suscipit adipiscing. At consectetur lorem donec massa sapien. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Vel pharetra vel turpis nunc eget. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Mollis nunc sed id semper risus in hendrerit gravida. Morbi leo urna molestie at elementum eu. Neque egestas congue quisque egestas diam in.

		Diam in arcu cursus euismod. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Sed id semper risus in. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Vel pretium lectus quam id leo in vitae turpis. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Amet nulla facilisi morbi tempus. Id porta nibh venenatis cras sed felis eget velit. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Sagittis vitae et leo duis ut. Orci porta non pulvinar neque laoreet.

		Adipiscing elit duis tristique sollicitudin nibh sit amet. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Mi sit amet mauris commodo quis imperdiet massa tincidunt. A diam sollicitudin tempor id eu. In hac habitasse platea dictumst quisque sagittis. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Cursus mattis molestie a iaculis at erat pellentesque.

		Morbi enim nunc faucibus a pellentesque sit amet. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Tortor aliquam nulla facilisi cras fermentum odio. Enim blandit volutpat maecenas volutpat blandit aliquam. Sed nisi lacus sed viverra tellus in hac habitasse platea. Vitae elementum curabitur vitae nunc. Scelerisque eleifend donec pretium vulputate sapien. Pellentesque habitant morbi tristique senectus et. Id venenatis a condimentum vitae sapien pellentesque. Vitae auctor eu augue ut. Facilisis magna etiam tempor orci. Elementum tempus egestas sed sed risus pretium quam vulputate.

		Tempor orci eu lobortis elementum nibh. Diam vulputate ut pharetra sit amet aliquam id diam. Id volutpat lacus laoreet non curabitur. Dui id ornare arcu odio ut sem nulla pharetra. Aliquet enim tortor at auctor. Ultrices eros in cursus turpis massa tincidunt dui. Nunc aliquet bibendum enim facilisis gravida neque convallis. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nibh nisl condimentum id venenatis a condimentum vitae sapien.

		Et sollicitudin ac orci phasellus. Quis eleifend quam adipiscing vitae proin sagittis. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Pellentesque sit amet porttitor eget dolor morbi non. Porttitor massa id neque aliquam vestibulum morbi blandit. Felis eget velit aliquet sagittis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Enim sit amet venenatis urna cursus eget. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Faucibus vitae aliquet nec ullamcorper sit. Tristique sollicitudin nibh sit amet commodo nulla. Euismod quis viverra nibh cras pulvinar. Scelerisque eu ultrices vitae auctor eu. Enim sit amet venenatis urna cursus eget nunc scelerisque. Velit egestas dui id ornare arcu odio ut sem. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Quam adipiscing vitae proin sagittis nisl. Et sollicitudin ac orci phasellus egestas tellus rutrum.

		Arcu cursus vitae congue mauris rhoncus aenean. Gravida neque convallis a cras semper auctor neque. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Neque sodales ut etiam sit amet nisl purus in. Nisi est sit amet facilisis magna etiam. Faucibus turpis in eu mi. Sit amet nulla facilisi morbi tempus iaculis. Eget felis eget nunc lobortis. Malesuada proin libero nunc consequat interdum. Quisque egestas diam in arcu. Amet porttitor eget dolor morbi non arcu risus quis.

		Interdum velit euismod in pellentesque massa placerat. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Sit amet cursus sit amet. Rhoncus urna neque viverra justo. Turpis nunc eget lorem dolor. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Nunc sed augue lacus viverra vitae congue eu consequat ac. Amet aliquam id diam maecenas ultricies mi. Aenean vel elit scelerisque mauris. At volutpat diam ut venenatis tellus. Vitae tortor condimentum lacinia quis vel eros.

		Turpis in eu mi bibendum neque. Eget nunc lobortis mattis aliquam faucibus purus in. Amet mauris commodo quis imperdiet massa tincidunt. Lectus arcu bibendum at varius vel pharetra vel turpis. In fermentum posuere urna nec tincidunt praesent. Augue neque gravida in fermentum et sollicitudin. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Integer vitae justo eget magna fermentum. Tincidunt dui ut ornare lectus sit. Nisl vel pretium lectus quam id leo in vitae.

		Tincidunt id aliquet risus feugiat in. Egestas egestas fringilla phasellus faucibus scelerisque. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Elit sed vulputate mi sit. Sit amet consectetur adipiscing elit. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Nec feugiat in fermentum posuere. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. At consectetur lorem donec massa. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Risus quis varius quam quisque id diam. Mattis ullamcorper velit sed ullamcorper morbi. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Mauris sit amet massa vitae. Eget nunc scelerisque viverra mauris in. Purus ut faucibus pulvinar elementum integer enim.

		Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Sem nulla pharetra diam sit amet nisl. Et netus et malesuada fames ac turpis egestas sed tempus. Fermentum leo vel orci porta non pulvinar neque. Commodo odio aenean sed adipiscing. Tincidunt id aliquet risus feugiat in ante metus dictum. Integer enim neque volutpat ac tincidunt vitae semper quis. Morbi tempus iaculis urna id volutpat lacus laoreet. Nec dui nunc mattis enim ut tellus. Vel fringilla est ullamcorper eget. Metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor. Adipiscing tristique risus nec feugiat. Nulla facilisi nullam vehicula ipsum a arcu cursus.

		Aliquam etiam erat velit scelerisque in dictum non. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Imperdiet massa tincidunt nunc pulvinar sapien et. Facilisis volutpat est velit egestas dui id. Semper viverra nam libero justo. At consectetur lorem donec massa. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Egestas diam in arcu cursus euismod. Dui nunc mattis enim ut tellus elementum. Molestie nunc non blandit massa enim nec. Purus gravida quis blandit turpis cursus in hac. Condimentum mattis pellentesque id nibh. Ornare arcu odio ut sem nulla pharetra diam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Et tortor consequat id porta nibh venenatis cras. Cursus mattis molestie a iaculis at erat.
	</div>
);