import { useQuery } from '@tanstack/react-query';
import { getStarWarsConsoleData } from '../../queries/getStarWarsConsoleData';

type UseStarWarsConsoleArgs = {
  initialData: unknown;
};

export const useStarWarsConsole = ({ initialData }: UseStarWarsConsoleArgs) => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['getStarWarsConsoleData'],
    queryFn: async () => getStarWarsConsoleData(),
    initialData,
    enabled: false,
  });

  return {
    data: JSON.stringify(data, null, 2),
    refetch,
    isFetching,
  };
};
