import { useCallback, useEffect, useState } from 'react';
import { setSubscriberId, getSubscriberId } from '../../../lib/subscription';
import { createVote, getVoteCounts } from '../../data';
import { getRouterAbsolutePath } from '../../router';
import { IPinpointConfig, ISite } from '../../types';

const useRoadmap = (config: Omit<IPinpointConfig, 'pageSize'>, site: ISite) => {
	const [loading, setLoading] = useState(true);
	const [votePending, setVotePending] = useState(false);
	const [error, setError] = useState('');
	const [userVotes, setUserVotes] = useState<Record<string, number>>({});
	const [globalVotes, setGlobalVotes] = useState<Record<string, number>>({});

	const _fetch = useCallback(
		async (indicator = true) => {
			try {
				if (indicator) {
					setLoading(true);
				}
				setError('');
				const { userVoteCounts, globalVoteCounts } = await getVoteCounts({
					...config,
					siteUrl: getRouterAbsolutePath(site, ''),
				});
				setUserVotes(userVoteCounts);
				setGlobalVotes(globalVoteCounts);
			} catch (ex: any) {
				setError(ex.message);
			} finally {
				setLoading(false);
			}
		},
		[config, site]
	);

	const handleVote = useCallback(
		async (featureId: string, vote: number, email?: string) => {
			setVotePending(true);
			try {
				setError('');
				const subscriberId = await createVote(
					{
						...config,
						siteUrl: getRouterAbsolutePath(site, ''),
					},
					featureId,
					vote,
					email
				);

				if (subscriberId) {
					const old = getSubscriberId();
					setSubscriberId(subscriberId);
					if (!old) {
						window.location.reload();
					}
				}
				await _fetch(false);
			} catch (ex: any) {
				setError(ex.message);
			} finally {
				setVotePending(false);
			}
		},
		[site, _fetch]
	);

	useEffect(() => {
		_fetch();
	}, [_fetch]);

	return {
		loading,
		error,
		userVotes,
		globalVotes,
		handleVote,
		votePending,
	};
};

export default useRoadmap;
