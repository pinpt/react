import { useCallback, useEffect, useState } from 'react';
import { setSubscriberId, getSubscriberId } from '../../../lib/subscription';
import { createVote, getVoteCounts } from '../../data';
import { getRouterAbsolutePath } from '../../router';
import { IPinpointConfig, ISite } from '../../types';

const useRoadmap = (config: Omit<IPinpointConfig, 'pageSize'>, site: ISite) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [userVotes, setUserVotes] = useState<Record<string, number>>({});
	const [globalVotes, setGlobalVotes] = useState<Record<string, number>>({});

	const _fetch = useCallback(async () => {
		try {
			setLoading(true);
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
	}, [config, site]);

	const handleVote = useCallback(
		async (featureId: string, vote: number, email?: string) => {
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
			setUserVotes((current) => {
				const result = { ...current };
				result[featureId] = vote;
				return result;
			});
			setGlobalVotes((current) => {
				const result = { ...current };
				if (result[featureId]) {
					result[featureId] += vote;
				} else {
					result[featureId] = vote;
				}
				return result;
			});
		},
		[site]
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
	};
};

export default useRoadmap;
