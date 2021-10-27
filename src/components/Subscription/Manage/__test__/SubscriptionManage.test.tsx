import renderer from 'react-test-renderer';
import Manage from '..';
import { SubscriptionInfo } from '../../../../lib/types/subscription';
import subscriptions from '../__data__/subscriptions.json';

test('Test default state', () => {
	const component = renderer.create(
		<Manage
			subscriptions={(subscriptions as unknown) as SubscriptionInfo}
			handleClickReSubscribe={(subId: string) => console.log(`Resubscribe ${subId}`)}
			handleClickUnsubscribe={(subId: string) => console.log(`Unsubscribe ${subId}`)}
			handleClickUpdate={(subId: string) => console.log(`Update ${subId}`)}
			fileApi="https://file.pinpoint.com"
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test loading state', () => {
	const component = renderer.create(
		<Manage
			subscriptions={(subscriptions as unknown) as SubscriptionInfo}
			handleClickReSubscribe={(subId: string) => alert(`Resubscribe ${subId}`)}
			handleClickUnsubscribe={(subId: string) => alert(`Unsubscribe ${subId}`)}
			handleClickUpdate={(subId: string) => alert(`Update ${subId}`)}
			fileApi="https://file.pinpoint.com"
			pendingState={{ '84beec9792eff52d': true }}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
